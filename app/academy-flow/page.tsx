import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import FlowCourseCard from "@/components/academy/FlowCourseCard";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { academyCourses } from "@/lib/academyCourses";

export const metadata: Metadata = {
  title: "Academy (Flow State)",
  description:
    "Free courses on Pakistan's markets, written breakdowns paired with full video lessons on asset classes, the oil and gas sector, refining, and more.",
};

// Fourth Academy option, alongside /academy (Primer-inspired light),
// /academy-dark, and /academy-stripe: the same three courses on the
// management-approved flow-state system, ink canvas background, Onest body,
// Fraunces headings, glass course panels. None of the existing three are
// touched; this is an alternate for comparison, and it uses the site's real
// <Navbar/>/<Footer/> like every other flow-state page rather than
// <AcademyHeader/>, which belongs to the light Academy design.
//
// Course content is unchanged, the same academyCourses entries every other
// Academy variant reads from, so the writing can't drift between designs.

const heading ="font-semibold tracking-tight text-text-onDark";

export default function AcademyFlowPage() {
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
              text="Learn the market before you invest in it"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="Every course pairs a written breakdown with a full video lesson. Read the summary, or press play and start watching right away."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <PillButton href="#courses" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                Explore Courses
              </PillButton>
            </Reveal>

          </div>
        </section>

        {/* ---------------------------------------------------------------
            Courses
        --------------------------------------------------------------- */}
        <section id="courses" className="relative z-10 scroll-mt-20 px-5 pb-20 sm:px-10 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <h2 className={`max-w-2xl text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                Explore Our Courses.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-text-onDark-muted">
                Made for Pakistan&apos;s market specifically, covering what each asset class actually
                does in a portfolio, through full sector deep dives on oil and gas exploration and
                refining.
              </p>
            </Reveal>

            <div className="mt-14 flex flex-col gap-8 sm:gap-10">
              {academyCourses.map((course, i) => (
                <Reveal key={course.slug} delay={(i % 2) * 90}>
                  <FlowCourseCard course={course} flip={i % 2 === 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FlowClosingCTA />
      </main>

      <Footer />
    </>
  );
}
