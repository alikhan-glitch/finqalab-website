import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import FlowFAQSection from "@/components/FlowFAQSection";
import FlowPageHero from "@/components/FlowPageHero";
import GlassCard from "@/components/GlassCard";
import MaskIcon from "@/components/MaskIcon";
import Reveal from "@/components/Reveal";
import TradeStepsShowcase, { type TradeStep } from "@/components/TradeStepsShowcase";

export const metadata: Metadata = {
  title: "Stocks",
  description:
    "Trade Pakistan Stock Exchange stocks from your phone with Finqalab. Open an account online, fund instantly with Raast, and track live prices, all SECP-regulated through Next Capital Limited.",
};

// Product page for Stocks — layout/content unchanged from the original
// build (<TradeStepsShowcase/> 3-step walkthrough, <GlassCard/> market
// panel), theme swapped to match the management-approved flow-state system:
// <FluidPageBackground/> instead of <StarfieldBackground/>,
// <FlowPageHero/>/<FlowClosingCTA/> instead of <PageHero/>/<ClosingCTA/>,
// Fraunces headings instead of italic Figtree. The "Why Finqalab" pillars
// were originally <EditorialCard/> poster cards on a white paper backing;
// that design was rejected, so they're now flow-state <GlassCard/> panels
// (heading + copy + illustration) — same licensed illustrations, but set
// into a dark navy→black backing panel instead of white paper, so nothing
// reads as a white box against the rest of the page.
// Copy is unchanged, still the live finqalab.com/stocks content.

const steps: TradeStep[] = [
  {
    n: "01",
    icon: "candlestick",
    accent: "primary",
    title: 'Tap "Trade"',
    description:
      "Open the Finqalab app and hit Trade from your market screen, or jump straight there from any stock's page in your watchlist.",
    image: "/images/steps/trade.webp",
  },
  {
    n: "02",
    icon: "clipboard",
    accent: "teal",
    title: "Enter Order Details",
    description:
      "Pick the PSX-listed company you want, set your quantity and your price, and review the whole order before anything goes out.",
    image: "/images/steps/enter-stock-details.webp",
  },
  {
    n: "03",
    icon: "bolt",
    accent: "primary",
    title: "Execute Order",
    description:
      "Confirm, and your order routes to the Pakistan Stock Exchange in real time. See it appear in your portfolio the instant it's filled.",
    image: "/images/steps/filled-order.webp",
  },
];

const pillars: { image: string; title: string; eyebrow: string }[] = [
  {
    image: "/images/icons/low-investment.webp",
    title: "Low Investment",
    eyebrow:
      "Start small and scale at your own pace, with no minimum balance to maintain. Add as little or as much as you like, whenever it suits your budget, and grow your position as your confidence builds.",
  },
  {
    image: "/images/icons/community.webp",
    title: "Community",
    eyebrow:
      "One space where beginner and experienced investors come together to talk markets, share ideas, and ask questions. Our team keeps every discussion active and on track, so it ends in clarity, not confusion.",
  },
  {
    image: "/images/icons/education-cap.webp",
    title: "Education",
    eyebrow:
      "Finqalab Academy takes you from asset-class basics through full sector deep dives, built for Pakistani investors specifically, in plain language, at your own pace.",
  },
];

const facts = [
  // Raast replaces what used to be a "Rs. 5,000 minimum" stat here — that
  // figure already appeared on the pillar cards above, and repeating it in
  // the same scroll made the page read as though it only had one thing to
  // say. Instant funding is on-theme for a "in real time" section and is
  // backed by the copy in the column beside it.
  { value: "Raast", label: "Instant account funding" },
  { value: "2–3 days", label: "To open an account" },
  { value: "30+ years", label: "Combined desk experience" },
  { value: "PSX Member", label: "Licensed brokerage firm" },
];

const faqs = [
  {
    q: "How do I open a PSX trading account online?",
    a: "Open the Finqalab app, complete the digital application with your CNIC and bank account details, and submit it for verification. Once approved, fund your account and start trading PSX-listed stocks directly from your phone. No branch visit is required.",
  },
  {
    q: "Is trading on the Pakistan Stock Exchange safe?",
    a: "PSX trading through a licensed broker like Finqalab is regulated by the Securities and Exchange Commission of Pakistan (SECP). Finqalab operates under Next Capital's PSX brokerage license, so your trades are placed through an officially licensed PSX member.",
  },
  {
    q: "What documents do I need to start trading PSX stocks?",
    a: "You need a valid CNIC and an active bank account in your name. Finqalab's account opening process is fully digital, so you can submit these details and complete verification from your phone, without visiting a branch.",
  },
  {
    q: "Can I buy individual PSX stocks and ETFs in the same account?",
    a: "Yes. A single Finqalab account lets you trade both individual PSX-listed stocks and ETFs, so you can build a diversified portfolio without managing separate accounts or apps.",
  },
];

export default function StocksPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        <FlowPageHero
          eyebrow="Our Products · Stocks"
          title={
            <>
              Trade smarter,
              <br />
              invest wiser with Finqalab
            </>
          }
          subtitle="Buy and sell PSX-listed stocks in real time with Finqalab. Open your account online, fund it digitally, and trade Pakistan's stock market from your phone."
        />

        {/* ---------------------------------------------------------------
            How trading works — the home page's phone-mockup pattern
            (<FeatureShowcase/>'s single-mockup-with-swapped-screen idea),
            here driven by a clickable numbered step list instead of an
            auto-scrolling film strip.
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                Three taps to your first trade
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                Our platform is designed to make trading simple and accessible for everyone.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-14">
              <TradeStepsShowcase steps={steps} />
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Why Finqalab — full-bleed illustration cards: heading + a "+"
            badge in the top corner, then the licensed illustration filling
            the rest of the card down to its bottom edge (design lifted from
            a client-supplied reference — heading/badge row over a large
            image, not the reference's own art or type). Same illustrations
            as before, still transparent, now washed over a navy→black
            gradient that fills the whole lower card rather than a small
            inset panel, so the artwork reads as part of the card itself.
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                Built to get you started, not to get in your way
              </h2>
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 120} className="h-full">
                  <GlassCard interactive className="flex h-full flex-col overflow-hidden">
                    <div className="min-h-[15rem] p-5 sm:p-6">
                      <h3 className="text-base font-semibold leading-snug text-text-onDark">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-onDark-muted">
                        {pillar.eyebrow}
                      </p>
                    </div>
                    {/* No separate panel/backing here — the icon sits
                        straight on the card's own glass surface, so it
                        blends with the same translucent background as the
                        rest of the site rather than reading as an inset
                        image box. Transparent circle + white icon, the same
                        neutral treatment on every card rather than
                        alternating brand-color tints. */}
                    <div className="mt-auto flex min-h-[7rem] flex-1 items-center justify-center pb-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-onDark">
                        <MaskIcon src={pillar.image} className="h-6 w-6" />
                      </span>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            The market, in real time
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <GlassCard interactive={false} className="p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
                      Everything the market gives you, in real time
                    </h2>
                  </Reveal>

                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                    {facts.map((fact, i) => (
                      <Reveal key={fact.label} delay={i * 90}>
                        <p className="text-2xl font-semibold text-text-onDark">
                          {fact.value}
                        </p>
                        <p className="mt-1 text-sm text-text-onDark-muted">{fact.label}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={100}>
                    <div className="max-w-[62ch] space-y-5 text-[15px] leading-relaxed text-text-onDark-muted">
                      <p>
                        Finqalab puts the full Pakistan Stock Exchange in your pocket. Follow live
                        quotes and price charts as the exchange moves, build watchlists around the
                        companies you actually care about, and set your own price and volume alerts
                        so you hear about a move the moment it happens rather than the next morning.
                      </p>
                      <p>
                        Fund your account in minutes through Raast, Pakistan&apos;s real-time payment
                        rail, and withdraw straight back to your bank without a branch visit. Opening
                        an account takes about two to three working days from your phone, with no
                        paperwork, no queues, and no waiting room.
                      </p>
                      <p>
                        Every order you place runs through Next Capital Limited, a licensed brokerage
                        firm and member of the Pakistan Stock Exchange, regulated by the Securities
                        and Exchange Commission of Pakistan. Next Capital is itself publicly listed
                        on the PSX under the ticker NEXT.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <FlowFAQSection title="Frequently asked questions" faqs={faqs} />

        <FlowClosingCTA />
      </main>

      <Footer />
    </>
  );
}
