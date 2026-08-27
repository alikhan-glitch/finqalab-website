import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import Reveal from "@/components/Reveal";
import FeatureCarouselGrid from "@/components/FeatureCarouselGrid";
import { allFeatures } from "@/lib/featuresPageContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Finqalab gives you to invest with confidence — instant Raast deposits, real-time portfolio weightage, custom alerts, corporate announcements, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-bg-black">
        <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(147,51,234,0.18) 0%, rgba(5,7,13,0) 70%)",
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-heading text-sm font-medium text-text-onDark-muted">
                Finqalab · Features
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 font-display text-4xl italic leading-[1.05] tracking-tight text-text-onDark sm:text-6xl">
                Everything you need,
                <br />
                in one app
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-text-onDark-muted">
                From the moment you deposit to the moment a dividend lands,
                Finqalab keeps you informed, in control, and ready to act.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 sm:pb-28">
          <Reveal>
            <div className="pl-6 sm:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
              <FeatureCarouselGrid features={allFeatures} />
            </div>
          </Reveal>
        </section>

        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
