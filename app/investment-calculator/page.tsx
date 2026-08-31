import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Investment Calculator",
  description:
    "Estimate the future value of your investments with compound growth using Finqalab's free investment calculator.",
};

// Same flow-state chassis as /careers, see that file for the shared-
// component notes. The interactive form/results live in
// <InvestmentCalculator/> (a client component) since this page itself stays
// a server component so it can export metadata.
const heading ="font-semibold tracking-tight text-text-onDark";

export default function InvestmentCalculatorPage() {
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
              text="See where your money could go"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="Estimate the future value of your investments with compound growth. Enter what you're starting with and where you want to end up."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <PillButton href="#calculator" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                Start Calculating
              </PillButton>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Calculator
        --------------------------------------------------------------- */}
        <section id="calculator" className="relative z-10 scroll-mt-20 px-5 pb-20 sm:px-10 sm:pb-28">
          <Reveal className="flex justify-center">
            <p
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] text-text-onDark-muted sm:text-[0.8rem]"
              style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Investment calculator
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-11">
            <InvestmentCalculator />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
