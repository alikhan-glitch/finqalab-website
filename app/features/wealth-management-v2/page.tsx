import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import Reveal from "@/components/Reveal";
import GridMotif from "@/components/academy/GridMotif";
import WealthManagementAccordion from "@/components/WealthManagementAccordion";
import { wealthManagementFeatures } from "@/lib/wealthManagementFeatures";

export const metadata: Metadata = {
  title: "Wealth Management (Editorial)",
  description:
    "Download Finqalab, open your account, and start investing in PSX stocks and Sukuks, with real-time market data and portfolio tracking built in.",
};

// Alternate design for /features/wealth-management, same 16 features, same
// scene mockups, same (placeholder, pending-real-copy) descriptions, none of
// it changed. What's different is the container: a numbered hairline
// accordion, borrowing the structured, line-driven language proved out on
// /academy and /academy-dark. A second option to sit alongside the live
// route (now the fluid-hero + glass-panel design, see
// components/FluidPageBackground.tsx), not a replacement for it.
export default function WealthManagementEditorialPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-bg-black text-text-onDark">
        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <section className="border-b border-white/40 px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="mx-auto grid max-w-[clamp(72rem,86vw,90rem)] grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="font-sans text-sm text-text-onDark-muted">Finqalab · Wealth Management</p>
            </div>
            <Reveal className="lg:col-span-7 lg:col-start-6">
              <h1 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Sixteen Tools. One Wealth Management App.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-onDark-muted">
                From instant Raast deposits to real-time portfolio alerts, everything you need to grow and
                track your wealth, in one place. Open any tool below to see it in action.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Features, numbered accordion, reusing the exact 16 feature
            entries (title/icon/scene/description) from JourneyHeroSection.
        --------------------------------------------------------------- */}
        <section className="pt-4">
          <div className="mx-auto grid max-w-[clamp(72rem,86vw,90rem)] grid-cols-1 gap-10 px-6 pb-10 pt-20 lg:grid-cols-12 lg:gap-12">
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
                dark
                cols={3}
                rows={5}
                cells={[
                  { col: 2, row: 2, tone: "primary" },
                  { col: 2, row: 4, tone: "teal" },
                ]}
                className="h-full min-h-[14rem] w-full border-l border-t border-white/40"
              />
            </div>
            <Reveal className="lg:col-span-9">
              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                Explore Every Tool.
              </h2>
            </Reveal>
          </div>

          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <WealthManagementAccordion features={wealthManagementFeatures} />
          </div>
        </section>

        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
