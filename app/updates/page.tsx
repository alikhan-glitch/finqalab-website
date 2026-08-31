import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { updates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Product launches, partnerships, and milestones from Finqalab, Pakistan's end-to-end digital investing app.",
};

// Flow-state Updates/newsroom page, same chassis as /careers. Content
// (titles, URLs, categories) is verbatim from finqalab.com/updates/ and the
// live blog. Kept as a distinct route/nav item from the existing /blog page
// per instruction, no attempt to merge or replace it here.
// Cards now open the article on-site at /updates/[slug] rather than sending
// the visitor out to finqalab.com/blog. Titles, categories, banners and the
// article bodies all live in lib/updates.
const UPDATES = updates;

const heading ="font-semibold tracking-tight text-text-onDark";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5">
      <path d="M3.5 8h9M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function UpdatesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.72} hueMax={0.88} pauseOrbitPastHero />

        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 pb-10 pt-24 text-center sm:px-10">
          <div className="flex w-full max-w-sm flex-col items-center sm:max-w-2xl lg:max-w-4xl">
            <WordReveal
              as="h1"
              text="Where Finqalab's Story Unfolds"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="Product launches, partnerships, and milestones from Pakistan's end-to-end investing app."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <PillButton href="#feed" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                  Read the updates
                </PillButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Feed
        --------------------------------------------------------------- */}
        <section id="feed" className="relative z-10 scroll-mt-20 px-5 pb-8 pt-16 sm:px-10 sm:pt-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-11 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Reveal>
                  <h2 className="text-[1.7rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.1rem]">
                    Company news
                  </h2>
                  <p className="mt-1.5 text-base text-white">Everything, as it happens.</p>
                </Reveal>
              </div>
              <Reveal delay={80}>
                <p className="max-w-md text-[0.95rem] text-text-onDark-muted">
                  Product launches, partnerships, and milestones from Pakistan&apos;s end-to-end investing app
                 , in order, as they landed.
                </p>
              </Reveal>
            </div>

            {/* Every update is an equal card, no full-width "featured" one.
                With 12 updates, promoting the first left 11 for a two-column
                grid, which stranded the last card alone on its own row.
                auto-rows-fr keeps every card the same height regardless of
                how many lines its title runs to. */}
                <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {UPDATES.map((item, i) => (
                <Reveal key={item.slug} delay={(i % 4) * 90}>
                  <Link
                    href={`/updates/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.1rem] border transition-colors duration-150 hover:border-white/16"
                    style={{ borderColor: "rgba(255,255,255,0.09)", background: "#0b0812" }}
                  >
                    {/* Full-bleed 2:1 banner across the card's top edge. The
                        category chip moves on top of it so the copy below
                        stays a clean title + link pair. */}
                        <div className="relative aspect-[2/1] w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11,8,18,0.10) 0%, rgba(11,8,18,0) 45%, rgba(11,8,18,0.80) 100%)",
                        }}
                      />
                      <span
                      className="absolute left-4 top-4 inline-flex items-center rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.05em] text-text-onDark backdrop-blur-md"
                        style={{ borderColor: "rgba(255,255,255,0.20)", background: "rgba(11,8,18,0.55)" }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                      <h3 className="text-[1.05rem] font-medium leading-[1.4] text-text-onDark">{item.title}</h3>
                      <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-text-onDark-muted group-hover:text-text-onDark">
                        Read more <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Closing CTA
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-20">
          <Reveal>
            <div
            className="mx-auto max-w-4xl rounded-[1.5rem] border px-7 py-11 text-center sm:px-10 sm:py-16"
              style={{
                borderColor: "rgba(255,255,255,0.16)",
                background: "radial-gradient(120% 140% at 50% -10%, rgba(163,75,214,0.35), #0b0812 60%)",
              }}
            >
            <h2 className={`mx-auto max-w-lg text-[1.5rem] leading-[1.2] sm:text-[2rem] ${heading}`}>
                Ready to invest with a regulated platform?
              </h2>
              <p className="mt-3 text-[0.95rem] text-text-onDark-muted">
                Backed by Next Capital Limited, a PSX member and TREC-licensed brokerage.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
                <PillButton href="https://finqalab.com/download/" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                  Download the App
                </PillButton>
                <PillButton href="/about" variant="outlineDark" className="px-7 py-3.5 text-[0.95rem]">
                  About us
                </PillButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
