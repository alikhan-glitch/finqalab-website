"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PillButton from "./PillButton";

// Scroll-pinned feature showcase for the homepage, modeled on the features
// section of doto.com: a tall section whose inner stage sticks to the
// viewport while the visitor scrolls, and the scroll position (not a timer)
// decides which feature is on stage. What changes between features:
//   - the headline rolls up and out while the next rises in, clipped by a
//     mask, its last word sitting in a colored pill
//   - the phone's screen cross-fades to the next feature's screenshot
//   - the floating "satellite" cards scale out and back in
//   - the description + CTA fade out and back in
// The phone frame and the tab control above it stay put.
//
// Content is data-driven. `panel` is the full screenshot shown center-stage,
// `satellites` are cropped cards that perch on its corners. No phone frame
// here (unlike <PhoneMockup/> on the Stocks/ETF/Gold pages): the reference
// section shows plain screens, not device mockups, so the screenshots are
// just rounded-corner cards in their own right.

type Satellite = {
  src: string;
  alt: string;
  /** Which edge of the phone the card straddles. */
  side: "left" | "right";
  /** Rendered width as a fraction of the panel's own computed width (not a
   *  fixed rem value), so it's guaranteed smaller than the panel at every
   *  breakpoint by construction, rather than needing separate hand-tuned
   *  sizes for a panel whose own width already varies with the viewport. */
  widthFraction: number;
};

type ShowcaseFeature = {
  id: string;
  tab: string;
  headlineLead: string;
  headlineHighlight: string;
  pillBg: string;
  pillFg: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  panel: string;
  panelAlt: string;
  satellites: Satellite[];
};

const IMG = "/images/home-features";

const features: ShowcaseFeature[] = [
  {
    id: "analytics",
    tab: "Portfolio Analytics",
    headlineLead: "Know where your portfolio",
    headlineHighlight: "stands",
    pillBg: "#ffffff",
    pillFg: "#4a3a99",
    description:
      "Track your gains, losses, and portfolio value over time, so you see your progress beyond a single day's numbers.",
    ctaLabel: "Explore analytics",
    ctaHref: "/features",
    panel: `${IMG}/analytics-panel.webp`,
    panelAlt: "The Portfolio Analytics screen in the Finqalab app",
    satellites: [
      {
        src: `${IMG}/analytics-card-market.webp`,
        alt: "Portfolio Analytics card comparing your portfolio against the KSE-100",
        side: "left",
        widthFraction: 0.92,
      },
      {
        src: `${IMG}/analytics-card-contribution.webp`,
        alt: "Portfolio Analytics card showing your best and worst performing holdings",
        side: "right",
        widthFraction: 0.92,
      },
    ],
  },
  {
    id: "finsight",
    tab: "Finsight",
    headlineLead: "Practice your first portfolio with",
    headlineHighlight: "Finsight",
    pillBg: "#ffe27a",
    pillFg: "#2a2000",
    description:
      "Get a risk profile and a research-backed starter portfolio, then trade it with paper money. Your first moves cost nothing to get wrong.",
    ctaLabel: "Try Finsight",
    ctaHref: "/features",
    panel: `${IMG}/finsight-panel.webp`,
    panelAlt: "The Finsight Advisor screen in the Finqalab app",
    satellites: [
      {
        src: `${IMG}/finsight-card-advisor.webp`,
        alt: "Finsight Advisor card flagging a sector concentration",
        side: "left",
        widthFraction: 0.70,
      },
      {
        src: `${IMG}/finsight-card-sector.webp`,
        alt: "Finsight sector concentration card showing limits per sector",
        side: "right",
        widthFraction: 0.68,
      },
    ],
  },
  {
    id: "finbot",
    tab: "FinBot",
    headlineLead: "Answers, any hour, from",
    headlineHighlight: "FinBot",
    pillBg: "#3fd6c4",
    pillFg: "#0b1220",
    description:
      "Instant, round-the-clock answers about your account and PSX basics, with a handoff to our Help Center when you need a human.",
    ctaLabel: "Meet FinBot",
    ctaHref: "/features",
    panel: `${IMG}/finbot-panel.webp`,
    panelAlt: "The FinBot chat screen in the Finqalab app",
    satellites: [
      {
        src: `${IMG}/finbot-card-answer.webp`,
        alt: "FinBot explaining what portfolio analytics is",
        side: "left",
        widthFraction: 0.70,
      },
      {
        src: `${IMG}/finbot-card-handoff.webp`,
        alt: "FinBot handing a question off to Help Center support",
        side: "right",
        widthFraction: 0.78,
      },
    ],
  },
];

const COUNT = features.length;
// Scroll distance each feature gets on stage, in viewport heights, plus one
// viewport for the stage itself. Kept modest so the pinned stretch doesn't
// drag.
const SCROLL_PER_FEATURE_SVH = 85;
const EASE = "cubic-bezier(0.2, 0, 0, 1)";

// A phone-like tall aspect ratio, matching the screenshots' own crop, just
// with no physical device frame drawn around it (that's what "without the
// mockup" means, not "not phone-shaped"). object-cover (object-top) shows
// from the crop's own top edge, which is the app's real header now that
// it's been re-cropped below the phone status bar.
const PANEL_ASPECT_RATIO = 600 / 1260;
const PANEL_RADIUS = "1.75rem";
// Same vertical cap the panel used to express in CSS as
// `maxHeight: "min(66svh, 50rem)"`, resolved here in JS instead (see the
// comment on <PanelStage/> for why).
const PANEL_MAX_HEIGHT_VH = 0.82;
const PANEL_MAX_HEIGHT_REM = 62;

function Headline({ f }: { f: ShowcaseFeature }) {
  return (
    <>
      {f.headlineLead}{" "}
      <span
        className="inline-block rounded-full px-[0.28em] pb-[0.06em]"
        style={{ background: f.pillBg, color: f.pillFg }}
      >
        {f.headlineHighlight}
      </span>
    </>
  );
}

export default function HomeFeaturesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelColRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // The panel needs to respect two independent caps at once (the column's
  // width, and a viewport-height-based max), while keeping its aspect ratio
  // fixed. CSS alone can't do that here: this box's own children are all
  // `position: absolute` (so it has no intrinsic content size), and it's a
  // non-stretched flex item, so leaving both width and height as `auto` for
  // aspect-ratio to resolve collapses the box to 0x0 rather than sizing it
  // the way an <img> with the same max-width/max-height/aspect-ratio would.
  // Computing the pixel size directly sidesteps that entirely. null until
  // the first measurement, so the panel/satellites render hidden rather than
  // briefly at the wrong (or zero) size.
  const [panelSize, setPanelSize] = useState<{ w: number; h: number } | null>(null);

  // Scroll listener rather than IntersectionObserver: the active feature
  // depends on continuous scroll progress through a tall section, not on a
  // binary in/out-of-view signal. State only changes when the index does, so
  // firing on every scroll event is cheap.
  const update = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total));
    const next = Math.min(COUNT - 1, Math.floor(progress * COUNT));
    setActive((cur) => (cur === next ? cur : next));
  }, []);

  const measurePanel = useCallback(() => {
    const col = panelColRef.current;
    if (!col) return;
    const rootFontPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const heightCapPx = Math.min(
      window.innerHeight * PANEL_MAX_HEIGHT_VH,
      PANEL_MAX_HEIGHT_REM * rootFontPx
    );
    const widthFromHeight = heightCapPx * PANEL_ASPECT_RATIO;
    const w = Math.min(col.clientWidth, widthFromHeight);
    const h = w / PANEL_ASPECT_RATIO;
    setPanelSize((cur) => (cur && cur.w === w && cur.h === h ? cur : { w, h }));
  }, []);

  useEffect(() => {
    update();
    measurePanel();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("resize", measurePanel);
    // The column's own width can also change independently of a window
    // resize (e.g. the root font-size clamp in globals.css shifting layout
    // once web fonts finish loading), so this is on top of the resize
    // listener, not instead of it.
    const ro = new ResizeObserver(measurePanel);
    if (panelColRef.current) ro.observe(panelColRef.current);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("resize", measurePanel);
      ro.disconnect();
    };
  }, [update, measurePanel]);

  const goTo = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    // Aim for the middle of that feature's slice of the scroll range.
    window.scrollTo({ top: top + ((index + 0.5) / COUNT) * total, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="features-showcase"
      aria-label="App features"
      data-active={active}
      className="bg-primary text-onPrimary"
    >
      {/* ---------------- Desktop: scroll-pinned stage ---------------- */}
      <div
        className="relative hidden lg:block"
        style={{ height: `${COUNT * SCROLL_PER_FEATURE_SVH + 100}svh` }}
      >
        <div className="sticky top-0 flex h-svh items-stretch overflow-hidden px-6 pb-8 pt-24">
          <div className="mx-auto grid w-full max-w-[clamp(72rem,92vw,110rem)] grid-cols-12 gap-x-8">
            {/* Left: rolling headline, top-aligned */}
            <div className="col-span-3 flex items-start pt-[6svh]">
              <h2 className="grid w-full overflow-hidden py-2 text-4xl font-bold leading-[1.04] tracking-tight xl:text-5xl">
                {features.map((f, i) => (
                  <span
                    key={f.id}
                    aria-hidden={i !== active}
                    className="col-start-1 row-start-1 block motion-reduce:transition-none"
                    style={{
                      transform: `translateY(${(i - active) * 115}%)`,
                      opacity: i === active ? 1 : 0,
                      transition: `transform 700ms ${EASE}, opacity 500ms ${EASE}`,
                    }}
                  >
                    <Headline f={f} />
                  </span>
                ))}
              </h2>
            </div>

            {/* Center: tabs + phone + satellites */}
            <div
              ref={panelColRef}
              className="col-span-6 flex flex-col items-center justify-center gap-11"
            >
              <div
                role="tablist"
                aria-label="App features"
                className="flex items-center gap-1 rounded-full bg-black/15 p-1 backdrop-blur-sm"
              >
                {features.map((f, i) => (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => goTo(i)}
                    className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:px-4 xl:text-sm ${
                      i === active
                        ? "bg-white text-primary-strong"
                        : "text-onPrimary/80 hover:text-onPrimary"
                    }`}
                  >
                    {f.tab}
                  </button>
                ))}
              </div>

              <div
                className="relative motion-reduce:transition-none"
                style={{
                  // Pixel size computed in JS (see measurePanel above), not
                  // CSS aspect-ratio: this box's children are all absolutely
                  // positioned, so it has no intrinsic content size, and as
                  // a non-stretched flex item that made a pure CSS
                  // max-width/max-height/aspect-ratio approach collapse to
                  // 0x0 instead of behaving like a sized <img> would.
                  width: panelSize ? `${panelSize.w}px` : 0,
                  height: panelSize ? `${panelSize.h}px` : 0,
                  opacity: panelSize ? 1 : 0,
                  transition: `opacity 300ms ${EASE}`,
                }}
              >
                {/* Center screen, no device frame, just the screenshot as its
                    own rounded card. */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    borderRadius: PANEL_RADIUS,
                    boxShadow: "0 30px 70px rgba(20, 8, 60, 0.4)",
                  }}
                >
                  {features.map((f, i) => (
                    // Plain <img>: fixed screenshots, the optimizer adds
                    // nothing and would re-encode them.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={f.id}
                      src={f.panel}
                      alt={i === active ? f.panelAlt : ""}
                      className="absolute inset-0 h-full w-full object-cover object-top motion-reduce:transition-none"
                      style={{
                        opacity: i === active ? 1 : 0,
                        transition: `opacity 600ms ${EASE}`,
                      }}
                    />
                  ))}
                </div>

                {/* Floating cards perched on the screen's corners: mostly
                    hanging off the edge, only a sliver overlapping so they
                    never sit over the screen's own content. Left cards sit
                    on the bottom-left corner, right cards on the top-right,
                    matching the reference section. The vertical anchor is a
                    percentage of the *panel's* height (not the card's own,
                    which varies card to card) plus a modest translate, so
                    every card's upward/downward reach stays predictable
                    regardless of its own aspect ratio, tall cards can't
                    suddenly reach far enough to clip the tab row above. */}
                {features.flatMap((f, i) =>
                  f.satellites.map((s, k) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={`${f.id}-${k}`}
                      src={s.src}
                      alt={i === active ? s.alt : ""}
                      aria-hidden={i !== active}
                      className="pointer-events-none absolute h-auto rounded-2xl motion-reduce:transition-none"
                      style={{
                        // Measured off the doto.com reference recording: the
                        // cards sit almost entirely outside the panel, only
                        // grazing its corner (~5-10% of the card's own width
                        // overlapping), anchored roughly a fifth of the way
                        // down/up from the panel's top/bottom edge.
                        width: panelSize ? `${panelSize.w * s.widthFraction}px` : 0,
                        ...(s.side === "left"
                          ? { left: 0, bottom: "20%", transform: "translate(-88%, 0%)" }
                          : { right: 0, top: "20%", transform: "translate(88%, 0%)" }),
                        opacity: panelSize && i === active ? 1 : 0,
                        scale: i === active ? "1" : "0.85",
                        filter: "drop-shadow(0 18px 28px rgba(24, 10, 70, 0.5))",
                        transition: `opacity 500ms ${EASE}, scale 600ms ${EASE}`,
                      }}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Right: description + CTA, bottom-aligned */}
            <div className="col-span-3 flex items-end justify-end pb-[4svh]">
              <div className="grid w-full max-w-sm">
                {features.map((f, i) => (
                  <div
                    key={f.id}
                    aria-hidden={i !== active}
                    className={`col-start-1 row-start-1 motion-reduce:transition-none ${
                      i === active ? "" : "pointer-events-none"
                    }`}
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: `translateY(${i === active ? 0 : 12}px)`,
                      transition: `opacity 500ms ${EASE}, transform 600ms ${EASE}`,
                    }}
                  >
                    <p className="text-lg font-medium leading-snug text-onPrimary/90 xl:text-xl">
                      {f.description}
                    </p>
                    <div className="mt-6">
                      <PillButton
                        href={f.ctaHref}
                        variant="solidWhite"
                        className="px-7 py-3.5 text-[0.95rem]"
                      >
                        {f.ctaLabel}
                      </PillButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile/tablet: plain stacked blocks ----------------
          No room to pin a stage beside anything at this width, so each feature
          is simply its own block, phone only (no floating cards). */}
      <div className="space-y-16 px-6 py-14 lg:hidden">
        {features.map((f) => (
          <div key={f.id} className="mx-auto flex max-w-md flex-col items-center text-center">
            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              <Headline f={f} />
            </h2>
            <div
              className="relative mt-8 w-full max-w-xs overflow-hidden"
              style={{
                aspectRatio: PANEL_ASPECT_RATIO,
                borderRadius: PANEL_RADIUS,
                boxShadow: "0 24px 50px rgba(20, 8, 60, 0.35)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.panel}
                alt={f.panelAlt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="mt-8 text-lg font-medium leading-snug text-onPrimary/90">
              {f.description}
            </p>
            <div className="mt-6">
              <PillButton
                href={f.ctaHref}
                variant="solidWhite"
                className="px-7 py-3.5 text-[0.95rem]"
              >
                {f.ctaLabel}
              </PillButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
