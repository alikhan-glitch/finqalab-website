"use client";

import { useEffect, useRef, useState } from "react";
import FlowBlogCard from "./FlowBlogCard";
import type { BlogPost } from "@/lib/blog-posts";

const PER_BATCH = 3;
// How much scrollable distance is reserved per batch, in viewport heights.
// Less than 1 full viewport per step (a plain wheel-notch or two) so the
// whole 9-batch section doesn't demand an unreasonably long scroll to get
// through, while still giving each transition room to read as a deliberate
// step rather than a blur.
const VH_PER_BATCH = 70;
const ENTER_MS = 260;
const SLIDE_PX = 18;

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

// Sticky, scroll-driven "batch swap" through all 25 articles, 3 at a time —
// replaces a long flat grid so the full archive doesn't read as an
// exhausting wall of cards. The section is a tall spacer (BATCH_COUNT *
// VH_PER_BATCH) with a `sticky` viewport pinned inside it; scroll position
// within that spacer maps to a batch index.
//
// The displayed batch always tracks the scroll-computed index immediately —
// there's no queued/animated hand-off between batches. An earlier version
// kept the outgoing batch mounted and cross-faded it against the incoming
// one (two full sets of blurred glass cards animating opacity+transform at
// once), which was the actual source of the "clunky" feel reported: six
// backdrop-blur surfaces recompositing every frame is expensive, and
// queuing each transition to finish before the next could start meant fast
// scrolling visibly lagged behind the real scroll position. Now only the
// incoming batch plays a short fade/slide-in (direction-aware, so scrolling
// up visibly reverses it) — the outgoing one just unmounts — so there are
// never more than 3 blurred cards animating, and the visible batch is never
// more than one frame behind the actual scroll position.
//
// Driven by a plain scroll listener reading getBoundingClientRect() (rAF
// throttled), not IntersectionObserver: IO reports intersection changes, not
// continuous position, and a single 9-batch section only crosses a handful
// of IO thresholds over ~6 screens of scroll — nowhere near enough
// resolution to track a batch index changing every ~0.7 screens.
export default function BlogScrollStack({ posts }: { posts: BlogPost[] }) {
  const batches = chunk(posts, PER_BATCH);
  const batchCount = batches.length;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [enter, setEnter] = useState<{ dir: 1 | -1; phase: "start" | "end" } | null>(null);

  const displayIndexRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const enterRafRef = useRef(0);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    let raf = 0;
    function measure() {
      raf = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      const idx = Math.min(batchCount - 1, Math.floor(progress * batchCount));
      if (idx !== displayIndexRef.current) {
        const dir: 1 | -1 = idx > displayIndexRef.current ? 1 : -1;
        displayIndexRef.current = idx;
        setDisplayIndex(idx);

        if (!reducedMotionRef.current) {
          if (enterRafRef.current) cancelAnimationFrame(enterRafRef.current);
          setEnter({ dir, phase: "start" });
          enterRafRef.current = requestAnimationFrame(() => {
            enterRafRef.current = 0;
            setEnter((e) => (e ? { ...e, phase: "end" } : e));
          });
        }
      }
    }
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (enterRafRef.current) cancelAnimationFrame(enterRafRef.current);
    };
  }, [batchCount]);

  function goToBatch(i: number) {
    const el = wrapperRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const targetProgress = (i + 0.5) / batchCount;
    // getBoundingClientRect().top + scrollY, not el.offsetTop: offsetTop is
    // only relative to the nearest positioned ancestor (here, <main>, which
    // has its own position: relative), not the document — using it directly
    // as a page-absolute scrollTo target landed on the wrong spot entirely,
    // which is why the sidebar previously did nothing useful when clicked.
    const currentAbsoluteTop = el.getBoundingClientRect().top + window.scrollY;
    const top = currentAbsoluteTop + targetProgress * total;
    window.scrollTo({ top, behavior: "smooth" });
  }

  const current = batches[displayIndex];

  const progressRail = (
    <>
      {Array.from({ length: batchCount }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => goToBatch(i)}
          aria-label={`Go to articles ${i + 1} of ${batchCount}`}
          aria-current={i === displayIndex}
          className="p-1"
        >
          <span
            className="block rounded-full transition-all"
            style={{
              width: i === displayIndex ? "1.5rem" : "0.375rem",
              height: "0.375rem",
              background: i === displayIndex ? "#eef0f6" : "rgba(238,240,246,0.3)",
            }}
          />
        </button>
      ))}
    </>
  );

  return (
    <section
      ref={wrapperRef}
      className="relative"
      style={{ height: `${batchCount * VH_PER_BATCH}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-5 sm:px-10 lg:pl-24">
        {/* Progress rail — down the left edge of the screen rather than
            below the cards, so it's visible the moment this section is in
            view instead of needing to look past a full row of cards first.
            Ticks are clickable — scrolls the page so that batch's segment of
            the pinned section is centered, a manual alternative to
            scrubbing through by hand. Hidden below lg: there isn't a spare
            side margin to put it in once the 3-card grid drops to 1 column. */}
        <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <p className="text-xs font-medium tabular-nums text-text-onDark-muted">
            {String(displayIndex + 1).padStart(2, "0")}
          </p>
          <div className="flex flex-col items-center gap-1.5">{progressRail}</div>
          <p className="text-xs font-medium tabular-nums text-text-onDark-muted">
            {String(batchCount).padStart(2, "0")}
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
            All Articles
          </p>

          <div className="relative mt-6" style={{ height: "26rem" }}>
            <div
              key={displayIndex}
              className="absolute inset-0 grid grid-cols-1 gap-5 transition-[opacity,transform] ease-[cubic-bezier(0.16,1,0.3,1)] sm:grid-cols-2 lg:grid-cols-3"
              style={{
                transitionDuration: `${ENTER_MS}ms`,
                willChange: "opacity, transform",
                opacity: !enter || enter.phase === "end" ? 1 : 0,
                transform: `translate3d(0, ${!enter || enter.phase === "end" ? 0 : enter.dir * SLIDE_PX}px, 0)`,
              }}
            >
              {current.map((post) => (
                <FlowBlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Same progress, as a compact bottom row — the left-edge rail
              above is lg-only, so anything narrower still gets a way to see
              and jump between batches. */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <p className="text-xs font-medium tabular-nums text-text-onDark-muted">
              {String(displayIndex + 1).padStart(2, "0")} / {String(batchCount).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-1.5">{progressRail}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
