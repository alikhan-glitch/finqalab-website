"use client";

import { useId, useState } from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import type { AcademyCourse, CourseBlock } from "@/lib/academyCourses";

// Dark-theme fork of <CourseAccordion/>, used only on /academy-dark, same
// structure and content, light-theme tokens swapped for dark equivalents.

function Blocks({ blocks }: { blocks: CourseBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h4
                key={i}
                className="mt-9 font-serif text-xl font-bold leading-snug text-text-onDark first:mt-0"
              >
                {block.text}
              </h4>
            );
          case "p":
            return (
              <p key={i} className="mt-4 text-[15px] leading-relaxed text-text-onDark-muted">
                {block.text}
              </p>
            );
          case "ul":
          case "ol": {
            const List = block.type === "ol" ? "ol" : "ul";
            return (
              <List key={i} className="mt-4 flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-text-onDark-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-primary-light"
                    />
                    <span>
                      {item.label && (
                        <strong className="font-semibold text-text-onDark">{item.label}: </strong>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </List>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}

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
    <div className="border-b border-white/40">
      <h3>
        <button
          type="button"
          id={headerId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 px-4 py-6 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-light sm:px-6 lg:grid-cols-[6rem_1fr_auto] ${
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

          <span className="font-serif text-lg font-bold leading-snug sm:text-xl lg:pl-8">{course.title}</span>

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
              <div className="lg:sticky lg:top-28">
                {course.videoId ? (
                  <YouTubeEmbed videoId={course.videoId} title={course.title} />
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/30 bg-white/[0.05] px-6 text-center">
                    <p className="font-serif text-lg text-text-onDark">Video coming soon</p>
                    <p className="text-sm text-text-onDark-muted">
                      The full course video for this article has not been linked yet.
                    </p>
                  </div>
                )}
                <p className="mt-4 text-sm leading-relaxed text-text-onDark-muted">{course.summary}</p>
              </div>
            </div>

            <div className="lg:order-1 lg:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-primary-light">{course.kicker}</p>
              <div className="mt-6 max-w-[62ch]">
                <Blocks blocks={course.blocks} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function CourseAccordionDark({ courses }: { courses: AcademyCourse[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-white/40">
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
