import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogBlocks from "@/components/blog/BlogBlocks";
import BlogIcon from "@/components/blog/BlogIcon";
import { formatPostDate } from "@/components/blog/FlowBlogCard";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// The readable article behind a <FlowBlogCard/>, flow-state counterpart to
// /blog/[slug]. Same posts and the same <BlogBlocks/> renderer (its `dark`
// variant), so a post's body can't drift between the two designs.
//
// The article body sits in a glass panel at a ~65ch measure: long-form prose
// directly on the moving ink canvas is hard to read, and the panel's blur
// gives the text a stable surface without hiding the background entirely.

const heading ="font-semibold tracking-tight text-text-onDark";

export default async function BlogFlowPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  // Wraps so the last post's "Read next" is never a dead end.
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

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
              href="/blog-flow"
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
              Back to Blog
            </Link>

            <Reveal className="mt-8">
              <div className="flex items-center gap-4">
                <BlogIcon
                  name={post.icon}
                  tone="light"
                  className="h-10 w-10 shrink-0 object-contain opacity-80"
                />
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-text-onDark-muted">
                  {formatPostDate(post.date)}
                </p>
              </div>
              <h1 className={`mt-5 text-balance text-4xl leading-[1.1] sm:text-5xl ${heading}`}>
                {post.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-onDark-muted">
                {post.excerpt}
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
                  <BlogBlocks blocks={post.content} dark />
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
              <Link href={`/blog-flow/${nextPost.slug}`} className="group block">
                <GlassCard className="p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
                    Read next
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-6">
                    <p className={`text-xl leading-snug sm:text-2xl ${heading}`}>{nextPost.title}</p>
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
