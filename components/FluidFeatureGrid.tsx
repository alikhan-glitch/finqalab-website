"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import FeatureSceneView from "./FeatureScenes";
import { panelClasses } from "./FeatureGridCard";
import { wealthManagementFeatures } from "@/lib/wealthManagementFeatures";

const COLUMNS = 3;
const PER_PAGE = 3;
const TOTAL = wealthManagementFeatures.length;
const PAGE_COUNT = Math.ceil(TOTAL / PER_PAGE);

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

// The 16 real features as glass cards on the fluid ink background.
//
// Each card leads with a pre-composited mockup, a real in-app screenshot
// already set inside its device frame, supplied as one flat image, rather
// than the site's own frame-plus-cutout technique used elsewhere
// (<PhoneMockup/>): that approach depended on every screenshot having no
// status bar of its own, which didn't hold for two of these captures and
// produced a visible empty gap above the screen content on those cards.
//
// One feature (Portfolio Alerts) originally had no mockup and fell back to
// its vector scene panel; the fallback below stays in place for resilience
// even though every feature currently supplies an image.
const SHOT_H = "h-[17rem]";
const MOCKUP_ASPECT = "1530 / 3036";

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous features" : "Next features"}
      className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full bg-white text-[#0a0c14] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050c] sm:h-14 sm:w-14"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
      >
        <path d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
      </svg>
    </button>
  );
}

export default function FluidFeatureGrid() {
  const [page, setPage] = useState(0);
  const go = (delta: number) => setPage((p) => mod(p + delta, PAGE_COUNT));

  // 16 features doesn't divide evenly by 3, five full pages of three (items
  // 1-15) plus the 16th left over. Rather than wrap that leftover card in
  // with the first two again, it gets its own final page, alone and
  // centered, see the single-card branch in the JSX below.
  const isLastPage = page === PAGE_COUNT - 1;
  const pageItems = isLastPage
    ? [wealthManagementFeatures[TOTAL - 1]]
    : wealthManagementFeatures.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="relative z-10 px-5 pb-28 pt-0 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Three cards per page rather than one long scroll, with arrow
            buttons on either side to page through the rest, same idea as
            the three-up carousel already live on finqalab.com, just paging
            through this grid's own glass cards unchanged rather than
            replacing them with that reference's card style. */}
        <div className="mt-14 flex items-stretch gap-3 sm:gap-6">
          <ArrowButton direction="prev" onClick={() => go(-1)} />

          {/* auto-rows-fr so every card in a row matches height regardless of
              how long its title/description runs. key=page forces each
              card's Reveal to re-run its entrance animation on page change.
              The final, single-card page swaps the 3-col grid for a centered
              column instead, a lone card stretched to fill a 3-wide row
              would look like a layout bug, not a deliberate close. */}
          <div
            key={page}
            className={
              isLastPage
                ? "mx-auto flex w-full max-w-sm flex-1 justify-center"
                : "grid flex-1 auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-3"
            }
          >
            {pageItems.map((feature, i) => {
              const theme = feature.panelTheme ?? "light";
              const dark = theme !== "light";
              return (
                <Reveal key={feature.title} delay={(i % COLUMNS) * 100} className="h-full">
                  <div
                  className="group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-3xl border backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      background: "rgba(255,255,255,0.06)",
                    }}
                  >
                  <div className="p-8 pb-0 sm:p-10 sm:pb-0">
                    <h3 className="text-lg font-medium leading-tight" style={{ color: "#eef0f6" }}>
                        {feature.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "#b9becf" }}>
                        {feature.description}
                      </p>
                    </div>

                    {feature.image ? (
                      <div className="mt-auto flex justify-center px-8 pb-8 pt-8 sm:px-10 sm:pb-10">
                        <div
                          className="relative w-full max-w-[10rem]"
                          style={{ aspectRatio: MOCKUP_ASPECT }}
                        >
                          {/* Plain <img>: these are fixed-size decorative-ish
                              mockups already emitted at the right width, and
                              next/image's optimizer adds no benefit at this
                              size. object-contain since aspect ratios vary
                              slightly card to card. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={feature.image}
                            alt={`The ${feature.title} screen in the Finqalab app`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="mt-auto px-8 pb-8 sm:px-10 sm:pb-10">
                        <div className={`relative ${SHOT_H} mt-8 rounded-2xl p-5 ${panelClasses[theme]}`}>
                          <FeatureSceneView scene={feature.scene} dark={dark} />
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <ArrowButton direction="next" onClick={() => go(1)} />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to features page ${i + 1}`}
              aria-current={i === page}
              className="p-1.5"
            >
              <span
                className="block h-1.5 rounded-full transition-all"
                style={{
                  width: i === page ? "1.5rem" : "0.375rem",
                  background: i === page ? "#eef0f6" : "rgba(238,240,246,0.3)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
