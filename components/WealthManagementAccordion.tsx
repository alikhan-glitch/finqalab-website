"use client";

import { useId, useState } from "react";
import FeatureIcon from "./FeatureIcons";
import FeatureSceneView from "./FeatureScenes";
import { panelClasses } from "./FeatureGridCard";
import type { WealthFeature } from "@/lib/wealthManagementFeatures";

// The "editorial" alternate to <JourneyHeroSection/>'s cloud-atmosphere card
// grid: the same 16 features and scene mockups, reorganized into a numbered,
// single-open accordion, modeled directly on <CourseAccordion/> (see
// components/academy/CourseAccordion.tsx), which proved out this exact
// pattern (real <button>, aria-expanded/aria-controls, keyboard-operable).

function FeatureRow({
  feature,
  index,
  isOpen,
  onToggle,
}: {
  feature: WealthFeature;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const uid = useId();
  const panelId = `${uid}-panel`;
  const headerId = `${uid}-header`;
  const theme = feature.panelTheme ?? "light";
  const dark = theme !== "light";

  return (
    <div className="border-b border-white/40">
      <h3>
        <button
          type="button"
          id={headerId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`group grid w-full grid-cols-[3rem_2rem_1fr_auto] items-center gap-4 px-4 py-6 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-light sm:px-6 lg:grid-cols-[5rem_2.5rem_1fr_auto] ${
            isOpen ? "bg-primary text-onPrimary" : "text-text-onDark hover:bg-primary hover:text-onPrimary"
          }`}
        >
          <span
            className={`font-sans text-xs tabular-nums transition-colors ${
              isOpen ? "text-onPrimary/70" : "text-text-onDark-muted group-hover:text-onPrimary/70"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <FeatureIcon name={feature.icon} className="h-5 w-5 shrink-0" />

          <span className="font-serif text-lg font-bold leading-snug sm:text-xl">{feature.title}</span>

          <span aria-hidden="true" className="relative h-4 w-4 shrink-0 justify-self-end">
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </span>
        </button>
      </h3>

      {isOpen && (
        <section
          id={panelId}
          aria-labelledby={headerId}
          className="border-t-2 border-primary px-4 pb-16 pt-10 sm:px-6"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:order-2 lg:col-span-5">
              <div className={`relative aspect-[4/3] rounded-2xl p-5 ${panelClasses[theme]}`}>
                <FeatureSceneView scene={feature.scene} dark={dark} />
              </div>
            </div>

            <div className="lg:order-1 lg:col-span-7">
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-text-onDark-muted">
                {feature.description}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function WealthManagementAccordion({ features }: { features: WealthFeature[] }) {
  // First row open by default, unlike a fresh course list, a feature tour
  // benefits from showing at a glance that the rows are interactive/expand.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-white/40">
      {features.map((feature, i) => (
        <FeatureRow
          key={feature.title}
          feature={feature}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
