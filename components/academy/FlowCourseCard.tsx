import Link from "next/link";
import GlassCard from "../GlassCard";
import YouTubeEmbed from "./YouTubeEmbed";
import type { AcademyCourse } from "@/lib/academyCourses";

// The flow-state course card, the same "read or watch" two-column idea as
// <StripeCourseCard/>, rebuilt as a glass panel on the ink background rather
// than a floating white card on a gradient ribbon. `flip` alternates which
// side the video sits on down the list, so the page doesn't read as three
// identical rows.
//
// "Read course" goes to /academy-flow/[slug], this alternate design stays
// self-contained, exactly as /academy-stripe does, rather than routing into
// another Academy variant's article pages.
export default function FlowCourseCard({
  course,
  flip = false,
}: {
  course: AcademyCourse;
  flip?: boolean;
}) {
  return (
    <GlassCard interactive={false} className="overflow-hidden p-6 sm:p-10 lg:p-12">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flip ?"lg:order-2": undefined}>
          <p
          className="inline-flex items-center rounded-full border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-primary-light"
            style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)" }}
          >
            {course.kicker}
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-text-onDark sm:text-4xl">
            {course.title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-onDark-muted">
            {course.summary}
          </p>
          <Link
            href={`/academy-flow/${course.slug}`}
            className="group mt-6 inline-flex items-center gap-1.5 rounded-sm text-base font-semibold text-text-onDark transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black"
          >
            Read course
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className={flip ?"lg:order-1": undefined}>
          {course.videoId ? (
            <YouTubeEmbed videoId={course.videoId} title={course.title} />
          ) : (
            <div
            className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-6 text-center"
              style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.03)" }}
            >
            <p className="text-lg text-text-onDark">
                Video coming soon
              </p>
              <p className="text-sm text-text-onDark-muted">
                The full course video for this article has not been linked yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
