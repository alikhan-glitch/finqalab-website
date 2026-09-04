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
  title: "Invest in ETFs in Pakistan",
  description:
    "Diversify your portfolio with ETFs on Finqalab, built for Pakistani retail investors. SECP regulated, fully digital, a few taps to get started.",
};

// Product page for ETFs, same chassis as /stocks and the old /sukuks (now
// removed): <FluidPageBackground/> + <FlowPageHero/>/<FlowClosingCTA/> +
// <TradeStepsShowcase/> + <GlassCard/> icon cards + <FlowFAQSection/>.
// Copy is drawn from the client-supplied ETF SEO spec. Per instruction, the
// spec's "first of its kind in Pakistan" framing is deliberately left out of
// this page's copy (unlike the homepage's <AssetClassesSection/>, which
// already carries that phrasing and was not in scope here).

const steps: TradeStep[] = [
  {
    n: "01",
    icon: "clipboard",
    accent: "primary",
    title: "Search For an ETF",
    description:
      "From the market screen in the app, search for an ETF and see the full list of what's available to buy.",
    image: "/images/steps/etf-search.webp",
  },
  {
    n: "02",
    icon: "candlestick",
    accent: "teal",
    title: "Select And Buy",
    description:
      "Pick the ETF you want, tap buy, and enter your order details, just like placing a stock trade.",
    image: "/images/steps/etf-buy.webp",
  },
  {
    n: "03",
    icon: "bolt",
    accent: "primary",
    title: "Execute Your Order",
    description:
      "Confirm, and your order settles the same way a PSX stock trade does, right inside your portfolio.",
    image: "/images/steps/etf-executed.webp",
  },
];

const benefits: { image: string; title: string; eyebrow: string }[] = [
  {
    image: "/images/icons/diversification.webp",
    title: "Own An Entire Market, Not Just One Stock",
    eyebrow:
      "An ETF bundles many companies from a sector or index into one tradeable basket, turning an entire portfolio strategy into a single move. Buy it once and you instantly hold a slice of everything inside, all in one tap.",
  },
  {
    image: "/images/icons/lower-research-burden.webp",
    title: "Diversify Without Doing The Digging",
    eyebrow:
      "One ETF spreads your money across many companies at once, so you're never relying on an individual stock's performance. Get the safety of diversification without researching each company yourself.",
  },
  {
    image: "/images/icons/real-time-trading.webp",
    title: "Trade It Like Any Other Stock",
    eyebrow:
      "ETFs are priced and traded in real time on Finqalab, just like every other stock. You're never stuck waiting on an end-of-day valuation to know where you stand, and you don't need to open a new account. Simply buy, sell, or hold an ETF the same way you already trade stocks on Finqalab.",
  },
];

const facts = [
  // This band argues risk-smoothing + integration + zero extra setup,
  // deliberately not the account/regulation stats used on /stocks or the
  // homepage's Trust Grid.
  { value: "Lower Risk", label: "Spread across many holdings, not one" },
  { value: "One Account", label: "Sits right beside your stocks" },
  { value: "Real-Time", label: "Priced and traded like any stock" },
  { value: "Diversify", label: "One ETF, many companies at once" },
];

const faqs = [
  {
    q: "What are ETFs, and how are they different from stocks?",
    a: "An ETF (exchange-traded fund) holds a basket of stocks or assets and trades on the exchange like a single stock. Buying one ETF gives you exposure to many companies at once, while buying an individual stock gives you exposure to just that one company.",
  },
  {
    q: "How do I buy ETFs online in Pakistan?",
    a: "With Finqalab, buy ETFs directly from the app once your account is open and funded. Search for the ETF, place your order, and it settles the same way a PSX stock trade does, with no separate broker or platform required.",
  },
  {
    q: "Is ETF investing good for beginners?",
    a: "Yes. ETFs are often a straightforward starting point, since a single ETF spreads your investment across many underlying holdings, rather than requiring you to research and pick individual stocks yourself.",
  },
  {
    q: "Can I hold both ETFs and individual PSX stocks in one Finqalab account?",
    a: "Yes. ETFs and individual PSX-listed stocks are both available in the same Finqalab account, so you can combine them in a single portfolio without managing multiple platforms.",
  },
];

export default function EtfPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        <FlowPageHero
          title={
            <>
              One trade.
              <br />
              Hundreds of holdings.
            </>
          }
          subtitle="Get a whole sector or index in a single tap, without picking stocks one by one."
        />

        {/* ---------------------------------------------------------------
            How to Buy ETFs Online in Pakistan
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-[clamp(72rem,92vw,110rem)]">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                The Easiest Way to Build a Balanced Portfolio
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                Buying ETFs through Finqalab works the same way as trading PSX stocks.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-14">
              <TradeStepsShowcase steps={steps} />
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Why Invest in ETFs
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                Why invest in ETFs with Finqalab
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                Diversify without the guesswork.
              </p>
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
              {benefits.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i * 120} className="h-full">
                  <GlassCard interactive className="flex h-full flex-col overflow-hidden">
                    <div className="min-h-[15rem] p-5 sm:p-6">
                      <h3 className="text-base font-semibold leading-snug text-text-onDark">
                        {benefit.title}
                      </h3>
                      <p className="mt-8 text-sm leading-relaxed text-text-onDark-muted">
                        {benefit.eyebrow}
                      </p>
                    </div>
                    <div className="mt-auto flex min-h-[7rem] flex-1 items-center justify-center pb-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-onDark">
                        <MaskIcon src={benefit.image} className="h-6 w-6" />
                      </span>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            The Case For Not Betting On One
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,92vw,110rem)]">
            <GlassCard interactive={false} className="p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
                      The Case For Not Betting On One
                    </h2>
                  </Reveal>

                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                    {facts.map((fact, i) => (
                      <Reveal key={fact.label} delay={i * 90}>
                        <p className="text-xl font-semibold text-text-onDark sm:text-2xl">
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
                        A single stock can have a bad day for reasons that have nothing to do
                        with the market. An ETF absorbs that shock, because you&apos;re never
                        betting on just one story.
                      </p>
                      <p>
                        Investing shouldn&apos;t feel like guessing. ETFs turn market noise into
                        steady direction. They give you a way to grow your money effortlessly,
                        putting proven market strength on your side without forcing you to watch
                        charts or stress over daily moves.
                      </p>
                      <p>
                        It&apos;s wealth building designed for clarity, not complexity. Finqalab
                        gives you the quiet edge that comes with having ETFs in your portfolio.
                        Less time spent chasing the moment, more control over where your money
                        goes.
                      </p>
                      <p>
                        So why wait another day? Download the app and buy your first ETF today.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <FlowFAQSection title="Frequently asked questions" faqs={faqs} />

        <FlowClosingCTA
          title="Diversify your portfolio with ETFs"
          ctaLabel="Download the App"
        />
      </main>

      <Footer />
    </>
  );
}
