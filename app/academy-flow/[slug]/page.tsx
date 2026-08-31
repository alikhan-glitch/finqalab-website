import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseBlocks from "@/components/academy/CourseBlocks";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
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

// The course article behind a <FlowCourseCard/>'s "Read course" link, the
// flow-state counterpart to /academy-stripe/[slug]. Same content source
// (academyCourses) and same <CourseBlocks/> renderer, just its `dark`
// variant, so the written article can't drift between Academy designs.
//
// Video sits last, after the full write-up, matching the "read first, then
// watch" order of the /academy-stripe article, the opposite of /academy's
// accordion panel, which leads with the video.

const heading ="font-semibold tracking-tight text-text-onDark";

export default async function AcademyFlowCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = academyCourses.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const course = academyCourses[index];
  // Wraps to the first course after the last, so the "next course" prompt is
  // never a dead end on the final article.
  const next = academyCourses[(index + 1) % academyCourses.length];

  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        {/* ---------------------------------------------------------------
            Article header
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-10 pt-16 sm:px-10 sm:pt-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/academy-flow"
              className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-text-onDark-muted transition-colors hover:text-text-onDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black"
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

            <Reveal className="mt-8">
              <p
              className="inline-flex items-center rounded-full border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-primary-light"
                style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)" }}
              >
                Finqalab Academy · {course.kicker}
              </p>
              <h1 className={`mt-5 text-balance text-4xl leading-[1.1] sm:text-5xl ${heading}`}>
                {course.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-onDark-muted">
                {course.summary}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Article body
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <GlassCard interactive={false} className="p-6 sm:p-10 lg:p-12">
                <article>
                  <CourseBlocks blocks={course.blocks} dark />
                </article>

                <div className="mt-14 border-t pt-10" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
                  <p className="text-sm font-semibold text-text-onDark-muted">Watch the course video</p>
                  <div className="mt-4">
                    {course.videoId ? (
                      <YouTubeEmbed videoId={course.videoId} title={course.title} />
                    ) : (
                      <div
                      className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-6 text-center"
                        style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.03)" }}
                      >
                      <p className={`text-lg ${heading}`}>Video coming soon</p>
                      <p className="text-sm text-text-onDark-muted">
                          The full course video for this article has not been linked yet.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Next course
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Link href={`/academy-flow/${next.slug}`} className="group block">
                <GlassCard className="p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
                    Next course · {next.kicker}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-6">
                    <p className={`text-xl leading-snug sm:text-2xl ${heading}`}>{next.title}</p>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0 text-text-onDark-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-text-onDark"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          </div>
        </section>

        <FlowClosingCTA />
      </main>

      <Footer />
    </>
  );
}
