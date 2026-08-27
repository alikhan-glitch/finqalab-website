"use client";

import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import type { Feature } from "@/lib/features";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

export default function FeatureCarouselGrid({ features }: { features: Feature[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        let closest = 0;
        let closestDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - track.scrollLeft - track.offsetLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
        ticking = false;
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous feature"
            onClick={() => scrollToIndex(Math.max(active - 1, 0))}
            disabled={active === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-onDark backdrop-blur-md transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next feature"
            onClick={() => scrollToIndex(Math.min(active + 1, features.length - 1))}
            disabled={active === features.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-onDark backdrop-blur-md transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {features.map((feature, i) => (
            <button
              key={feature.title}
              type="button"
              aria-label={`Go to ${feature.title}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-text-onDark" : "w-1.5 bg-text-onDark/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
