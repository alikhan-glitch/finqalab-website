import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogScrollStack from "@/components/blog/BlogScrollStack";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog (Flow State)",
  description:
    "Learn how to invest in Pakistan Stock Exchange stocks and Sukuks — rights issues, dividends, bonus shares, market cycles, and valuation, explained simply.",
};

// Alternate blog index on the management-approved flow-state theme,
// alongside the existing /blog (which keeps its ray hero + solid violet/teal
// cards, untouched). Same posts from lib/blog-posts — nothing forked, so the
// writing can't drift between the two designs.
//
// The old layout pulled the newest post into a separate featured panel and
// ran the other 24 as a flat grid. Both are gone now, replaced by
// <BlogScrollStack/>: a single sticky, scroll-driven section that pages
// through all 25 posts (including the newest) three at a time, so browsing
// the full archive doesn't read as one long wall of cards.

const heading ="font-semibold tracking-tight text-text-onDark";

export default function BlogFlowIndexPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-24 text-center sm:px-10">
          <div className="flex w-full max-w-sm flex-col items-center sm:max-w-2xl lg:max-w-4xl">
            <WordReveal
              as="h1"
              text="The building blocks of your investing journey"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="From plain-English explainers on core financial concepts to real-time commentary on the shifting PSX landscape, we cover every major development at home and around the world."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <PillButton href="#articles" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                Browse {blogPosts.length} Articles
              </PillButton>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            All 25 articles, three at a time
        --------------------------------------------------------------- */}
        <div id="articles" className="relative z-10 scroll-mt-20">
          <BlogScrollStack posts={blogPosts} />
        </div>

        <FlowClosingCTA />
      </main>

      <Footer />
    </>
  );
}
