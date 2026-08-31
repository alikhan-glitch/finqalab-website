"use client";

import { useState } from "react";
import Link from "next/link";
import YouTubeEmbed from "./academy/YouTubeEmbed";
import { academyCourses } from "@/lib/academyCourses";

// Only courses with a real video make sense here, a card that can't
// actually play anything would contradict the whole point of this section.
const videoCourses = academyCourses.filter((c) => c.videoId);

function posterUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

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
      aria-label={direction === "prev" ? "Previous video" : "Next video"}
      className={`absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-onPrimary backdrop-blur-md transition-colors hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:h-12 sm:w-12 ${
        direction === "prev" ? "left-2 md:-left-14" : "right-2 md:-right-14"
      }`}
    >
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
        <path d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
      </svg>
    </button>
  );
}

// A neighboring course: smaller than the focused card, tucked mostly behind
// it, peeking out only at the outer edge, like an album flipping through a
// deck (see the car-stereo cover-flow reference this was modeled on), rather
// than the earlier version's separate, gap-spaced, full-height panel.
//
// Positioned with `left`/`right` insets (not `translateX`): an earlier
// rotateY attempt combined translateX + scale + rotateY under a shared
// perspective and came out genuinely asymmetric between sides (a real bug,
// not a tuning issue). `left`/`right` are direct, mirrored box placement, so
// the rotateY here is purely cosmetic tilt on an already-symmetric box , 
// verified both sides still land at equal size and equal distance from
// center.
function NeighborSlide({
  course,
  side,
  onClick,
}: {
  course: (typeof videoCourses)[number];
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Go to ${side === "left" ? "previous" : "next"} video: ${course.title}`}
      className="absolute top-[9%] bottom-[5%] z-0 hidden w-[80%] overflow-hidden rounded-xl md:block"
      style={{
        left: side === "left" ? "-24%" : undefined,
        right: side === "right" ? "-24%" : undefined,
        transform: `scale(0.9) rotateY(${side === "left" ? 22 : -22}deg)`,
        transformOrigin: side === "left" ? "right center" : "left center",
        filter: "brightness(0.5) blur(8px) saturate(0.85)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterUrl(course.videoId!)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </button>
  );
}

export default function AcademyVideoCarousel() {
  const [index, setIndex] = useState(0);
  const course = videoCourses[index];
  const prevCourse = videoCourses[mod(index - 1, videoCourses.length)];
  const nextCourse = videoCourses[mod(index + 1, videoCourses.length)];

  const go = (delta: number) => {
    setIndex((cur) => mod(cur + delta, videoCourses.length));
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-[1800px] overflow-hidden px-2 pb-4">
      {/* Neighbors are absolutely positioned against this centered box (not
          flex siblings with a gap) so they can overlap behind the focused
          card and peek out at its edges, instead of sitting apart from it
          across a strip of plain purple background. max-w-2xl (not the
          earlier 4xl) so the whole section, heading, subtext, button,
          player, link, dots, fits inside one screen without scrolling. */}
      <div className="relative mx-auto max-w-2xl" style={{ perspective: "1600px" }}>
        {videoCourses.length > 1 && (
          <>
            <NeighborSlide course={prevCourse} side="left" onClick={() => go(-1)} />
            <NeighborSlide course={nextCourse} side="right" onClick={() => go(1)} />
          </>
        )}

        {/* Focused card, rectangular (rounded-xl, not the site's usual
            rounded-3xl) to match the reference player's squared-off frame. */}
        <div
          className="relative z-10 overflow-hidden rounded-xl bg-[#12081c] text-left"
        >
          {/* key forces a remount on slide change, so a playing video resets
              to its poster instead of continuing to play off-screen. */}
          <YouTubeEmbed key={course.slug} videoId={course.videoId!} title={course.title} />

          <div className="p-3 sm:p-4">
            <p className="text-xs text-onPrimary/60">
              {course.kicker} · Finqalab Academy
            </p>
            <p className="mt-1 font-heading text-base font-semibold leading-snug text-onPrimary sm:text-lg">
              {course.title}
            </p>
          </div>
        </div>

        <ArrowButton direction="prev" onClick={() => go(-1)} />
        <ArrowButton direction="next" onClick={() => go(1)} />
      </div>

      {/* Its own row below the card, not tucked into the card's text block , 
          a plain underlined link there read as a footnote, not a second CTA
          worth noticing. */}
      <div className="mt-3 flex justify-center">
        <Link
          href={`/academy-flow/${course.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-semibold text-onPrimary backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Read more about this
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {videoCourses.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to video ${i + 1}: ${c.title}`}
            aria-current={i === index}
            className="p-1.5"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-onPrimary" : "w-1.5 bg-onPrimary/35"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
