import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogBlocks from "@/components/blog/BlogBlocks";
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-bg-light px-6 py-20">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-text-onLight-muted transition-colors hover:text-text-onLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onLight focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light"
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

          <p className="mt-8 text-sm font-medium text-text-onLight-muted">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-3 text-balance font-heading text-4xl font-semibold leading-tight text-text-onLight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-10">
            <BlogBlocks blocks={post.content} />
          </div>

          <div className="mt-16 border-t border-border-onLight pt-10">
            <p className="text-sm font-medium text-text-onLight-muted">
              Read next
            </p>
            <Link
              href={`/blog/${nextPost.slug}`}
              className="mt-2 inline-block font-heading text-xl font-semibold text-text-onLight transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onLight focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light"
            >
              {nextPost.title} →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
