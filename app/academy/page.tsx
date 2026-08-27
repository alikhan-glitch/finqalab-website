import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import AcademyFooter from "@/components/academy/AcademyFooter";
import AcademyHeader from "@/components/academy/AcademyHeader";
import CourseAccordion from "@/components/academy/CourseAccordion";
import GridMotif from "@/components/academy/GridMotif";
import { academyCourses } from "@/lib/academyCourses";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Free courses on Pakistan's markets — written breakdowns paired with full video lessons on asset classes, the oil and gas sector, refining, and more.",
};

export default function AcademyPage() {
  return (
    <>
      <AcademyHeader />

      {/* The one light-theme page on an otherwise dark site. */}
      <main id="main-content" className="flex-1 bg-white text-text-onLight">
        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <section className="px-6 pt-20 sm:pt-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <div className="grid grid-cols-1 items-end gap-8 pb-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <p className="font-sans text-sm text-text-onLight-muted">Academy</p>
              </div>
              {/* col-start-6 (not col-span-9 starting right after the eyebrow)
                  is what actually pushes the headline right — a narrower
                  column alone just left-aligns text within more empty space,
                  it doesn't move the text itself. */}
              <Reveal className="lg:col-span-7 lg:col-start-6">
                <h1 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                  Timeless Education.
                  <br />
                  Accessible To Every Pakistani.
                </h1>
              </Reveal>
            </div>
          </div>

          <div className="border-t border-black">
            <div className="mx-auto grid max-w-[clamp(72rem,86vw,90rem)] grid-cols-1 gap-10 pt-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="max-w-sm text-base leading-relaxed text-text-onLight-muted">
                    Plain-language courses on Pakistan&apos;s markets — free to read, free to
                    watch.
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <div className="mt-8">
                    <PillButton href="#courses" variant="solidDark" className="px-8 py-3.5 text-base">
                      Browse courses
                    </PillButton>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                {/* Plain <img>, matching this codebase's convention (see
                    Navbar.tsx) of not routing local images through next/image. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/academy-our-vision.webp"
                  alt="The Finqalab team mapping out the Academy's vision on a whiteboard"
                  width={1800}
                  height={1350}
                  className="h-56 w-full rounded-sm object-cover sm:h-72 lg:h-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Statement
        --------------------------------------------------------------- */}
        <section className="pt-24 sm:pt-32">
          {/* px-6 lives on this div, not the <section>, so there is exactly
              one padding layer — the negative-margin calc below assumes that;
              with px-6 on both the section AND this div (the first version),
              it double-counted the gutter and the grid overshot past x=0. */}
          <div className="mx-auto grid max-w-[clamp(72rem,86vw,90rem)] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-12">
            {/* Bleeds to the true viewport edge rather than stopping at the
                page's usual left inset. A plain negative margin would pull the
                element left WITHOUT widening it, which shrinks the gap to the
                stat box by the same amount it moved — this extends the width
                by the same calc used for the margin, so the left edge reaches
                x=0 while the right edge (and the gap to the box) stays exactly
                where col-span-3 would normally put it. */}
            <div
              className="hidden lg:col-span-3 lg:block"
              style={{
                marginLeft:
                  "calc(-1 * max(1.5rem, (100vw - clamp(72rem, 86vw, 90rem)) / 2 + 1.5rem))",
                width:
                  "calc(100% + max(1.5rem, (100vw - clamp(72rem, 86vw, 90rem)) / 2 + 1.5rem))",
              }}
            >
              <GridMotif
                cols={3}
                rows={4}
                colSizes={[1, 1.4, 4.7]}
                rowSizes={[1, 1.4, 1.2, 3.6]}
                cells={[
                  { col: 2, row: 2, tone: "primary" },
                  { col: 2, row: 4, tone: "teal" },
                ]}
                className="h-full min-h-[16rem] w-full border-l border-t border-black"
              />
            </div>

            <Reveal className="lg:col-span-9">
              {/* Content-driven height, not a forced min-h: at this box's
                  actual width (~816px, well short of the reference's ~1444px)
                  a min-h tall enough for a generous gap makes the box more
                  square, not less — the opposite of "thinner". A smaller
                  heading + a real margin-top gets the same generous-gap,
                  bottom-right-paragraph look without fighting the ratio. */}
              <div className="border border-black p-6 sm:p-8 lg:px-10 lg:py-6">
                <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.25rem]">
                  Every Finqalab Academy Course Is Free, Start To Finish.
                </h2>
                <p className="mt-10 max-w-md text-[15px] leading-relaxed text-text-onLight-muted lg:ml-auto lg:mt-12">
                  Each course pairs a written breakdown with a full video lesson. Open one below to
                  read it and watch it in the same place — no sign-up, no redirect.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Courses
        --------------------------------------------------------------- */}
        <section id="courses" className="scroll-mt-24 px-6 pt-24 sm:pt-32">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <div className="grid grid-cols-1 gap-8 pb-10 lg:grid-cols-12 lg:gap-12">
              <div className="hidden lg:col-span-3 lg:block" />
              <Reveal className="lg:col-span-9">
                <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                  Explore The Courses.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <CourseAccordion courses={academyCourses} />
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Closing CTA — left modular grid / center CTA / right diagonal
            panel, edge to edge with its own full 4-side border, echoing the
            printed-editorial feel of the Statement section's grid motif.
        --------------------------------------------------------------- */}
        <section className="mt-24 border border-black sm:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-[18%_1fr_18%]">
            {/* Left grid — the cells' own border-b/border-r already close
                off the seam against the center column; the section's own
                border closes off the grid's top and left edges. */}
            <div className="hidden lg:block">
              <GridMotif
                cols={7}
                rows={8}
                cells={[
                  { col: 5, row: 2, tone: "primary" },
                  { col: 5, row: 5, tone: "teal" },
                  { col: 4, row: 6, tone: "primaryLight" },
                ]}
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
              <Reveal>
                <h2 className="max-w-xl font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  Ready To Take Control Of Your Financial Journey?
                  <br />
                  Start Your First Course Today.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8">
                  <PillButton href="#" variant="solidDark">
                    Get started
                  </PillButton>
                </div>
              </Reveal>
            </div>

            {/* Right panel — a vertical divider, a corner-to-corner diagonal
                implying a large triangle against the section's own top/right
                borders, and a full-height accent strip at the outer edge. */}
            <div className="hidden border-l border-black lg:flex">
              <div className="relative flex-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="w-8 shrink-0 bg-success sm:w-10" />
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </>
  );
}
