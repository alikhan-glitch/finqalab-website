import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import HeroRays from "@/components/blog/HeroRays";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Learn how to invest in Pakistan Stock Exchange stocks and Sukuks, rights issues, dividends, bonus shares, market cycles, and valuation, explained simply.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-bg-light">
        <section className="relative h-[460px] overflow-hidden sm:h-[500px] lg:h-[560px]">
          <HeroRays className="absolute inset-0 h-full w-full" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(5,7,13,0.55) 0%, rgba(5,7,13,0.25) 45%, rgba(5,7,13,0.05) 75%)",
            }}
          />
          <div className="relative flex h-full flex-col">
            <div className="border-b border-white/15">
              <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)] px-6 py-5 sm:py-6 lg:py-7">
                <p className="font-heading text-2xl font-semibold tracking-tight text-text-onDark sm:text-3xl lg:text-4xl">
                  Investing Basics
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[clamp(72rem,86vw,90rem)] px-6 pt-8 sm:pt-10 lg:pt-12">
              <h1 className="max-w-xl text-balance font-display text-3xl italic leading-[1.05] tracking-tight text-text-onDark sm:text-4xl lg:text-5xl">
                The building blocks of your investing journey
              </h1>
              <p className="mt-4 max-w-lg text-balance text-sm text-text-onDark-muted sm:text-base lg:text-lg">
                Simple investing guides to help you understand the basics,
                paired with real-time commentary on the PSX and the events
                shaping markets in Pakistan and around the world.
              </p>
            </div>
          </div>
        </section>

        <div className="px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-[clamp(72rem,86vw,90rem)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
