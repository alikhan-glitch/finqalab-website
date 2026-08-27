import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FeatureCardStack from "@/components/FeatureCardStack";
import { wealthManagementFeatures } from "@/lib/wealthManagementFeatures";

export const metadata: Metadata = {
  title: "Wealth Management (Card Stack)",
  description:
    "Download Finqalab, open your account, and start investing in PSX stocks and Sukuks — with real-time market data and portfolio tracking built in.",
};

// Second option for the features page, alongside the live fluid-hero design
// at /features/wealth-management and the editorial accordion at
// /features/wealth-management-v2. Same 16 real features and the same scene
// mockups in all three — only the container differs. Here it's a minimal
// two-column editorial layout with an animated, physically-layered card deck
// (see components/FeatureCardStack.tsx).
//
// Light warm-gray page on an otherwise dark site, per the reference. The
// shared dark <Navbar/>/<Footer/> are kept rather than forked into light
// variants: they bookend the light section as deliberate contrast, and this
// is a design option for review, not a reason to fork site-wide chrome.
export default function WealthManagementStackPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-[#ecf0ef] text-[#12100e]">
        <section className="overflow-hidden px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto grid max-w-[clamp(72rem,86vw,90rem)] grid-cols-1 items-center gap-20 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:gap-16">
            {/* Left — intro. No container, border or card: the whitespace
                around it is the composition. */}
            <div>
              <Reveal>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#12100e]">
                  /What you get
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 max-w-[11ch] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
                  Everything you need to invest
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-sm text-[0.92rem] leading-[1.65] text-[#3f413e]">
                  Sixteen tools for funding your account, placing trades, tracking what you own and
                  staying ahead of the market — built into one SECP-regulated app for the Pakistan
                  Stock Exchange.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Link
                  href="#"
                  className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#12100e] px-6 py-3.5 text-[0.85rem] font-semibold text-[#fdfefc] transition-colors hover:bg-[#2c2a27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12100e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ecf0ef]"
                >
                  Get started
                </Link>
              </Reveal>
            </div>

            {/* Right — the deck. Extra bottom padding leaves room for the
                lower cards, which overhang the front card by design. */}
            <div className="pb-24 sm:pb-28 lg:pb-24">
              <FeatureCardStack features={wealthManagementFeatures} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
