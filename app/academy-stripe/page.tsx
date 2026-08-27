import type { Metadata } from "next";
import AcademyHeader from "@/components/academy/AcademyHeader";
import AcademyStripeFooter from "@/components/academy/AcademyStripeFooter";
import Reveal from "@/components/Reveal";
import StripeCourseCard from "@/components/academy/StripeCourseCard";
import { academyCourses } from "@/lib/academyCourses";

export const metadata: Metadata = {
  title: "Academy (Stripe Blog Style)",
  description:
    "Free courses on Pakistan's markets — written breakdowns paired with full video lessons on asset classes, the oil and gas sector, refining, and more.",
};

// Third Academy option, alongside /academy and /academy-dark: the course
// list restyled as stripe.com/blog's floating white card + atmospheric
// gradient ribbon, one card per course. This experience is self-contained —
// "Read more" goes to this course's own article at /academy-stripe/[slug],
// not into /academy — while the video still plays right on the card itself
// via the same <YouTubeEmbed/> used elsewhere.
export default function AcademyStripePage() {
  return (
    <>
      <AcademyHeader />

      <main id="main-content" className="flex-1 bg-[#f4f6fa] text-text-onLight">
        <section className="px-6 pt-20 pb-10 sm:pt-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <p className="font-sans text-sm text-text-onLight-muted">Academy</p>
              <h1 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Explore Our Courses.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-onLight-muted">
                Every course pairs a written breakdown with a full video lesson — read the summary
                below, or press play to start watching right away.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="pb-16 sm:pb-24">
          {academyCourses.map((course, i) => (
            <Reveal key={course.slug}>
              <StripeCourseCard course={course} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </main>

      <AcademyStripeFooter />
    </>
  );
}
