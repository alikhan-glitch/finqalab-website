import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcademyHeader from "@/components/academy/AcademyHeader";
import AcademyStripeFooter from "@/components/academy/AcademyStripeFooter";
import CourseBlocks from "@/components/academy/CourseBlocks";
import YouTubeEmbed from "@/components/academy/YouTubeEmbed";
import { academyCourses } from "@/lib/academyCourses";

export function generateStaticParams() {
  return academyCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = academyCourses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.summary,
  };
}

// The standalone article a Stripe-style course card's "Read more" leads to , 
// deliberately self-contained within the /academy-stripe experience rather
// than routing into the Primer-inspired /academy page: "Back to Courses"
// returns to the card list, not /academy, and the article reuses
// <CourseBlocks/> (the same h/p/ul/ol renderer <CourseAccordion/> uses) so
// the written content can't drift between the two. The video is placed last,
// after the full write-up, per the requested "read first, then watch" order
//, the opposite of the accordion panel, which puts the video first.
export default async function AcademyStripeCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = academyCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <AcademyHeader />

      <main id="main-content" className="flex-1 bg-white text-text-onLight">
        <article className="mx-auto max-w-2xl px-6 pb-24 pt-16 sm:pt-20">
          <Link
            href="/academy-stripe"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-text-onLight-muted transition-colors hover:text-text-onLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Courses
          </Link>

          <p className="mt-8 font-sans text-sm font-semibold text-primary">Finqalab Academy · {course.kicker}</p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-onLight-muted">{course.summary}</p>

          <div className="mt-10">
            <CourseBlocks blocks={course.blocks} />
          </div>

          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="font-sans text-sm font-semibold text-text-onLight-muted">Watch the course video</p>
            <div className="mt-4">
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
        </article>
      </main>

      <AcademyStripeFooter />
    </>
  );
}
