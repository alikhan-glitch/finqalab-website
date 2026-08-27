"use client";

import { useId, useState } from "react";
import CourseBlocks from "./CourseBlocks";
import YouTubeEmbed from "./YouTubeEmbed";
import type { AcademyCourse } from "@/lib/academyCourses";

function CourseRow({
  course,
  index,
  isOpen,
  onToggle,
}: {
  course: AcademyCourse;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const uid = useId();
  const panelId = `${uid}-panel`;
  const headerId = `${uid}-header`;

  return (
    <div className="border-b border-black">
      {/* A real <button>, so the row is reachable by Tab and operable with
          Enter/Space. `aria-expanded` + `aria-controls` let a screen reader
          announce the open/closed state and jump to the revealed panel — the
          reference implementation this is modelled on ships plain <div>s and
          is keyboard-inoperable. */}
      <h3>
        <button
          type="button"
          id={headerId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 px-4 py-6 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-6 lg:grid-cols-[6rem_1fr_auto] ${
            isOpen ? "bg-primary text-onPrimary" : "hover:bg-primary hover:text-onPrimary"
          }`}
        >
          <span
            className={`font-sans text-xs tabular-nums transition-colors ${
              isOpen ? "text-onPrimary/70" : "text-text-onLight-muted group-hover:text-onPrimary/70"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-serif text-lg font-bold leading-snug sm:text-xl lg:pl-8">{course.title}</span>

          {/* Plus rotating into a minus — one glyph, no icon swap, so the
              transition can be animated rather than popping. */}
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

      {/* Kept mounted only while open: this unmounts the YouTube facade (and
          any loaded player) on close, so collapsed courses cost nothing. */}
      {isOpen && (
        <section
          id={panelId}
          aria-labelledby={headerId}
          className="border-t-2 border-primary px-4 pb-16 pt-10 sm:px-6"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Video first in the DOM so it is the first thing reached on
                mobile, where the columns stack — the reason to open a course
                is usually to watch it. On desktop it is ordered back to the
                right-hand column. */}
            <div className="lg:order-2 lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                {course.videoId ? (
                  <YouTubeEmbed videoId={course.videoId} title={course.title} />
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-text-onLight/25 bg-text-onLight/[0.03] px-6 text-center">
                    <p className="font-serif text-lg text-text-onLight">Video coming soon</p>
                    <p className="text-sm text-text-onLight-muted">
                      The full course video for this article has not been linked yet.
                    </p>
                  </div>
                )}
                <p className="mt-4 text-sm leading-relaxed text-text-onLight-muted">{course.summary}</p>
              </div>
            </div>

            <div className="lg:order-1 lg:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-primary">{course.kicker}</p>
              <div className="mt-6 max-w-[62ch]">
                <CourseBlocks blocks={course.blocks} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function CourseAccordion({ courses }: { courses: AcademyCourse[] }) {
  // Single open index rather than a Set: matches the reference behaviour where
  // opening one course closes the previous, which keeps the long-form articles
  // from stacking into an unnavigable page.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-black">
      {courses.map((course, i) => (
        <CourseRow
          key={course.slug}
          course={course}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
