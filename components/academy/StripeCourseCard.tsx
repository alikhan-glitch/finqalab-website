import Link from "next/link";
import GradientBlob from "./GradientBlob";
import YouTubeEmbed from "./YouTubeEmbed";
import type { AcademyCourse } from "@/lib/academyCourses";

// The reference's floating white card + atmospheric gradient ribbon,
// adapted to a two-column "read or watch" layout: course info + a Read
// more link, and the actual course video embedded directly, reusing
// <YouTubeEmbed/> as-is. "Read more" goes to this course's own article at
// /academy-stripe/[slug], deliberately not into /academy, keeping this
// alternate design self-contained rather than routing through the
// Primer-inspired page.
export default function StripeCourseCard({ course, flip = false }: { course: AcademyCourse; flip?: boolean }) {
  return (
    <div className="relative overflow-hidden py-10 sm:py-14">
      <GradientBlob
        flip={flip}
        className="left-1/2 top-1/2 h-[24rem] w-[160vw] max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[30rem] lg:h-[34rem]"
      />

      <div className="relative z-10 mx-auto max-w-[clamp(72rem,86vw,90rem)] px-6">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.25)] sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-sans text-sm font-semibold text-primary">Finqalab Academy</p>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-text-onLight sm:text-4xl">
                {course.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-text-onLight-muted">
                {course.summary}
              </p>
              <Link
                href={`/academy-stripe/${course.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 rounded-sm font-sans text-base font-semibold text-primary transition-colors hover:text-primary-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Read more
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
