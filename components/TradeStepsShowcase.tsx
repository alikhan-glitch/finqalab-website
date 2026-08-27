"use client";

import { useEffect, useState } from "react";
import PhoneMockup from "./PhoneMockup";
import type { Feature } from "@/lib/features";

export type TradeStep = Feature & { n: string; image?: string };

const STEP_MS = 3200;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// The numbered step list drives, and stays in sync with, a single
// <PhoneMockup/> — clicking a step jumps the phone straight to it, matching
// the existing home-page pattern (<FeatureShowcase/>) of one mockup with its
// on-screen content swapped rather than one mockup per step.
export default function TradeStepsShowcase({ steps }: { steps: TradeStep[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (prefersReducedMotion()) return;
      setActive((prev) => (prev + 1) % steps.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [paused, steps.length]);

  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <ul className="flex flex-col gap-3">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <li key={step.n}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                className="flex w-full items-start gap-5 rounded-2xl border p-5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black sm:p-6"
                style={{
                  borderColor: isActive ? "rgba(255,255,255,0.16)" : "transparent",
                  background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                }}
              >
                <span
                  className={`font-heading text-sm tabular-nums transition-colors ${
                    isActive ? "text-primary-light" : "text-text-onDark-muted/60"
                  }`}
                >
                  {step.n}
                </span>
                <div>
                  <p
                    className={`font-heading text-lg font-semibold leading-tight transition-colors sm:text-xl ${
                      isActive ? "text-text-onDark" : "text-text-onDark-muted"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-onDark-muted">
                    {step.description}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        className="relative flex justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(147,51,234,0.28) 0%, rgba(63,214,196,0.10) 55%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <PhoneMockup slide={steps[active]} className="relative" />
      </div>
    </div>
  );
}
