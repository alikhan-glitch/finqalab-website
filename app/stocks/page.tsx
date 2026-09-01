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

// Product page for Stocks, layout/content unchanged from the original
// build (<TradeStepsShowcase/> 3-step walkthrough, <GlassCard/> market
// panel), theme swapped to match the management-approved flow-state system:
// <FluidPageBackground/> instead of <StarfieldBackground/>,
// <FlowPageHero/>/<FlowClosingCTA/> instead of <PageHero/>/<ClosingCTA/>,
// Fraunces headings instead of italic Figtree. The "Why Finqalab" pillars
// were originally <EditorialCard/> poster cards on a white paper backing;
// that design was rejected, so they're now flow-state <GlassCard/> panels
// (heading + copy + illustration), same licensed illustrations, but set
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
      "Pick the PSX-listed company you want, and set your quantity and price. Choose your order type: limit order, stop loss, or market order. Review the whole order once before anything goes out.",
    image: "/images/steps/enter-stock-details.webp",
  },
  {
    n: "03",
    icon: "bolt",
    accent: "primary",
    title: "Execute Order",
    description:
      "Confirm, and your order routes straight to the Pakistan Stock Exchange. Once it's filled, it shows up in your portfolio automatically.",
    image: "/images/steps/filled-order.webp",
  },
];

const pillars: { image: string; title: string; eyebrow: string }[] = [
  {
    image: "/images/icons/low-investment.webp",
    title: "Start Today, Not Someday",
    eyebrow:
      "Investing used to demand a headstart, savings, a broker, a reason to finally do it. Finqalab needs none of that. Fund your account in seconds, own your first share of a PSX-listed company in the same breath, and let today be the day you actually started, instead of the day you just planned to.",
  },
  {
    image: "/images/icons/education-cap.webp",
    title: "Built To Make Sense",
    eyebrow:
      "The market is not complicated. It's just been explained badly. Every stock, every price, every chart in Finqalab is built with a purpose, so a first-time investor and a twenty-year veteran read it the same way, clearly, instantly, with no glossary in the other hand.",
  },
  {
    image: "/images/icons/one-portfolio-view.webp",
    title: "One App, Every Tool",
    eyebrow:
      "Real-time PSX prices. Personal watchlists. Alerts that find you. Research you can trust. What used to take five apps and a spreadsheet now takes just one download. Finqalab isn't a piece of your investing life, it's the whole thing.",
  },
];

const facts = [
  // Deliberately not the app-tool stats (watchlists/alerts), those are
  // "One App, Every Tool"'s territory above, and not the PSX Member/SECP
  // credentials, those belong to the homepage's Trust Grid. These four are
  // real features not named anywhere else on this page.
  { value: "Raast", label: "Instant account funding" },
  { value: "Juice List", label: "Curated picks from our research desk" },
  { value: "Corporate Announcements", label: "Dividends and AGM notices, the moment they're filed" },
  { value: "Finqueue", label: "Your Friday order, carried into Monday" },
];

const faqs = [
  {
    q: "How do I open a PSX trading account online?",
    a: "Open the Finqalab app, complete the digital application with your CNIC and bank account details, and submit it for verification. Once approved, fund your account and start trading PSX-listed stocks directly from your phone. No branch visit is required.",
  },
  {
    q: "Is trading on the Pakistan Stock Exchange safe?",
    a: "PSX trading through a licensed broker is regulated by the Securities and Exchange Commission of Pakistan (SECP). Finqalab operates under Next Capital's PSX brokerage license, so your trades are placed through an officially licensed PSX member.",
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
          title={
            <>
              Own a piece of
              <br />
              Pakistan&apos;s biggest companies
            </>
          }
          subtitle="The Pakistan Stock Exchange, live in your pocket. Fund your account in seconds and start trading immediately."
        />

        {/* ---------------------------------------------------------------
            How trading works, the home page's phone-mockup pattern
            (<FeatureShowcase/>'s single-mockup-with-swapped-screen idea),
            here driven by a clickable numbered step list instead of an
            auto-scrolling film strip.
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                Three steps to your first trade
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
            Why Finqalab, full-bleed illustration cards: heading + a "+"
            badge in the top corner, then the licensed illustration filling
            the rest of the card down to its bottom edge (design lifted from
            a client-supplied reference, heading/badge row over a large
            image, not the reference's own art or type). Same illustrations
            as before, still transparent, now washed over a navy→black
            gradient that fills the whole lower card rather than a small
            inset panel, so the artwork reads as part of the card itself.
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                Why invest in stocks with Finqalab
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
                      <p className="mt-8 text-sm leading-relaxed text-text-onDark-muted">
                        {pillar.eyebrow}
                      </p>
                    </div>
                    {/* No separate panel/backing here, the icon sits
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
                      The Numbers Behind The Confidence
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
                        Every minute your money sits outside the market is a minute it isn&apos;t
                        working for you. Fund your account instantly through Raast, and act on an
                        opportunity the moment you see it, not after a slow bank transfer catches
                        up days later.
                      </p>
                      <p>
                        Once your money&apos;s in, the next question is where it goes. Not every
                        investor starts with a plan, so our Juice List gives you a research-backed
                        shortlist from Finqalab&apos;s own desk, organised by strategy, a starting
                        point for your own research, never a replacement for it.
                      </p>
                      <p>
                        And behind every decision you make, there&apos;s real infrastructure
                        standing guard. Every order you place runs through Next Capital Limited, a
                        PSX-member brokerage regulated by the SECP, the same institutional
                        discipline behind trades of any size.
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
