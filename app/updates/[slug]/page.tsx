import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogBlocks from "@/components/blog/BlogBlocks";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { getUpdateBySlug, updates } from "@/lib/updates";

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);
  if (!update) return {};
  return { title: update.title, description: update.excerpt };
}

// The article behind an /updates card. Reads on-site in the flow-state theme
// rather than bouncing the visitor out to finqalab.com/blog, which is what
// the cards used to do.
//
// Same <BlogBlocks/> renderer (its `dark` variant) as /blog-flow/[slug], so
// a paragraph, heading or pull-quote can't render differently between the
// newsroom and the blog.

const heading ="font-semibold tracking-tight text-text-onDark";

// Parsed as a LOCAL date, not via `new Date("2025-02-25")`. That form is
// treated as UTC midnight, so anyone west of UTC (the Americas) would see
// the date render a day early. Splitting the parts sidesteps that entirely.
function formatDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function UpdateArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = updates.findIndex((u) => u.slug === slug);
  if (index === -1) notFound();

  const update = updates[index];
  // Wraps, so the last update's "Read next" is never a dead end.
  const next = updates[(index + 1) % updates.length];

  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.72} hueMax={0.88} pauseOrbitPastHero />

        {/* ---------------------------------------------------------------
            Article header
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-10 pt-16 sm:px-10 sm:pt-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/updates"
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
              Back to Updates
            </Link>

            <Reveal className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span
                className="inline-flex items-center rounded-full border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-primary-light"
                  style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)" }}
                >
                  {update.category}
                </span>
                {update.date && (
                  <span className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-text-onDark-muted">
                    {formatDate(update.date)}
                  </span>
                )}
              </div>
              <h1 className={`mt-5 text-balance text-4xl leading-[1.1] sm:text-5xl ${heading}`}>
                {update.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-onDark-muted">
                {update.excerpt}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Banner
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-10 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div
              className="relative aspect-[2/1] w-full overflow-hidden rounded-[1.25rem] border"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                {/* Plain <img>: pre-cropped to this exact ratio. alt is empty
                    on purpose, the headline directly above says the same
                    thing, so describing it again just repeats for screen
                    readers. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={update.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
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
                  <BlogBlocks blocks={update.content} dark />
                </article>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Read next
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Link href={`/updates/${next.slug}`} className="group block">
                <GlassCard className="p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
                    Read next · {next.category}
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
