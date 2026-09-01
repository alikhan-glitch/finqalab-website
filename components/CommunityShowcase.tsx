"use client";

import { useEffect, useRef, useState } from "react";
import GlassCard from "./GlassCard";
import PhoneMockup from "./PhoneMockup";
import type { Feature } from "@/lib/features";

export type CommunityScene = Feature & { eyebrow: string };

// Recreates the reference site's scroll-driven "pinned phone, alternating
// left/right scene cards" showcase, rather than the simpler click-to-select
// <TradeStepsShowcase/> pattern used on Stocks/ETF/Gold: unlike those pages,
// this section's whole point on the reference site was the scrollytelling
// effect itself, so it gets its own component instead of reusing that one.
//
// Desktop (lg+): a 3-column grid, phone pinned in the sticky center column,
// scene cards alternate left/right by column placement (even index = left,
// odd = right), and whichever scene's row sits in a thin band across the
// viewport's vertical center drives the phone's content. Tracked with an
// IntersectionObserver (rootMargin carves out that center band) rather than
// a scroll listener + getBoundingClientRect polling: this page also runs
// Lenis smooth-scroll (see <FluidPageBackground/>), and a raw window
// 'scroll' listener is not a reliable signal there (Lenis drives the actual
// scroll position through its own rAF loop rather than always dispatching
// native scroll events on every step). IntersectionObserver reacts to real
// layout/paint regardless of what moved the scroll position, so it isn't
// affected either way.
//
// Mobile: the reference site drops the scroll-linking entirely there (no
// room to pin a phone beside anything), and instead gives every scene its
// own small static phone preview stacked directly under its card. Matched
// here rather than inventing a new mobile interaction.
export default function CommunityShowcase({ scenes }: { scenes: CommunityScene[] }) {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rows = rowRefs.current;
    // A thin (10%-tall) band centered in the viewport: rootMargin shrinks
    // the observer's root by 45% on top and bottom, so only a row crossing
    // that middle sliver counts as "intersecting". Each row is taller than
    // the band (min-h-[70vh]), so in practice exactly one is active at a
    // time as the page scrolls.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = rows.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    rows.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [scenes.length]);

  return (
    <div className="relative">
      {/* Desktop: sticky phone in the middle column, scenes alternate left/right */}
      <div
        className="hidden lg:grid lg:gap-x-10"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div
          style={{ gridColumn: 2, gridRow: "1 / -1" }}
          className="sticky top-32 self-start justify-self-center"
        >
          <PhoneMockup slide={scenes[active]} />
        </div>

        {scenes.map((scene, i) => {
          const onLeft = i % 2 === 0;
          return (
            <div
              key={scene.title}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              style={{ gridColumn: onLeft ? 1 : 3, gridRow: i + 1 }}
              className={`flex min-h-[70vh] items-center ${onLeft ? "justify-end text-right" : "justify-start text-left"}`}
            >
              <GlassCard
                interactive={false}
                className={`max-w-sm p-8 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-50"}`}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
                  {scene.eyebrow}
                </p>
                <h3 className="mt-3 text-[1.3rem] font-semibold text-text-onDark">{scene.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-text-onDark-muted">
                  {scene.description}
                </p>
              </GlassCard>
            </div>
          );
        })}
      </div>

      {/* Mobile: stacked cards, each with its own static phone preview */}
      <div className="flex flex-col gap-10 lg:hidden">
        {scenes.map((scene) => (
          <div key={scene.title} className="flex flex-col items-center gap-6 text-center">
            <GlassCard interactive={false} className="w-full max-w-sm p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
                {scene.eyebrow}
              </p>
              <h3 className="mt-3 text-[1.2rem] font-semibold text-text-onDark">{scene.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-text-onDark-muted">
                {scene.description}
              </p>
            </GlassCard>
            <PhoneMockup slide={scene} className="scale-90" />
          </div>
        ))}
      </div>
    </div>
  );
}
