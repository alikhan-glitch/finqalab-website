"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeatureIcon from "./FeatureIcons";
import PhoneMockup from "./PhoneMockup";
import { features as slides, type Feature as Slide } from "@/lib/features";

const SLIDE_MS = 5000;
const CARD_WIDTH = 128;
const CARD_GAP = 16;
const SLOT_WIDTH = CARD_WIDTH + CARD_GAP;
const REPEATS = 3;
const tripleSlides = [...slides, ...slides, ...slides];

function FilmCard({ slide, distance }: { slide: Slide; distance: number }) {
  const opacity = Math.max(0.22, 1 - Math.abs(distance) * 0.32);
  return (
    <div
      style={{ width: CARD_WIDTH, opacity }}
      className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-opacity duration-500"
    >
      <FeatureIcon
        name={slide.icon}
        className={`h-6 w-6 ${slide.accent === "primary" ? "text-primary-light" : "text-accent-teal"}`}
      />
      <p className="text-center text-[11px] font-medium leading-snug text-text-onDark">{slide.title}</p>
    </div>
  );
}

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const reducedMotionRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => setWrapperWidth(el.getBoundingClientRect().width);
    measure();
    window.addEventListener("resize", measure);
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    observer?.observe(el);
    return () => {
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reducedMotionRef.current) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  // Operate within the middle copy of the tripled list so there's always
  // buffer cards on both sides regardless of how close `active` is to 0 or N-1.
  const middleActive = slides.length + active;
  const activeCardCenter = middleActive * SLOT_WIDTH + CARD_WIDTH / 2;
  const trackLeft = wrapperWidth / 2 - activeCardCenter;

  return (
    <div className="relative flex h-[380px] items-center justify-center sm:h-[420px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,7,13,1) 0%, rgba(5,7,13,0) 14%, rgba(5,7,13,0) 86%, rgba(5,7,13,1) 100%)",
        }}
      />

      <div ref={wrapperRef} className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
        <div
          className="absolute left-0 top-0 flex items-center gap-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(${trackLeft}px)` }}
        >
          {Array.from({ length: REPEATS }).flatMap((_, rep) =>
            slides.map((slide, i) => {
              const globalIndex = rep * slides.length + i;
              return (
                <FilmCard key={`${rep}-${slide.title}`} slide={slide} distance={globalIndex - middleActive} />
              );
            })
          )}
        </div>
      </div>

      <PhoneMockup slide={slides[active]} className="relative z-10" />
    </div>
  );
}
