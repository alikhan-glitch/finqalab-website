import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import GlossaryBrowser from "@/components/GlossaryBrowser";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Plain-English definitions of the financial terms you'll meet investing in Pakistan's markets, from asset allocation and free float to Sukuk, KSE-100, and yield to maturity.",
};

// The glossary was a "#" placeholder in the nav until now. This is its first
// real page, built directly on the flow-state theme rather than as an
// alternate, since there was no existing design to preserve.
//
// Terms and definitions come from the live finqalab.com/glossary page,
// verbatim (see lib/glossary.ts). Search and the A-Z filter live in
// <GlossaryBrowser/> so this page can stay a server component.

const heading ="font-semibold tracking-tight text-text-onDark";

export default function GlossaryPage() {
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
              text="Every Finance Term, In Plain English"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="Make sense of Pakistan's stock market. Clear, jargon-free definitions for every term you will see in your investing journey."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <PillButton href="#terms" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                Browse the Glossary
              </PillButton>
            </Reveal>

          </div>
        </section>

        {/* ---------------------------------------------------------------
            Terms
        --------------------------------------------------------------- */}
        <section id="terms" className="relative z-10 scroll-mt-20 px-5 pb-20 sm:px-10 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
                A–Z
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className={`mt-4 max-w-2xl text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                Look up any term.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-text-onDark-muted">
                Search by word or browse by letter, the search covers definitions too, so you can
                find a term even when you only know how to describe it.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-12">
              <GlossaryBrowser />
            </Reveal>
          </div>
        </section>

        <FlowClosingCTA />
      </main>

      <Footer />
    </>
  );
}
