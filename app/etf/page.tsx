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

// Product page for ETFs — same chassis as /stocks and the old /sukuks (now
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
    title: "Open Your Account",
    description:
      "Open a fully digital account from the Finqalab app, with no branch visit and no separate paperwork.",
    image: "/images/steps/sign-up.webp",
  },
  {
    n: "02",
    icon: "wallet",
    accent: "teal",
    title: "Fund Your Account",
    description:
      "Add money instantly through Raast, Pakistan's real-time payment rail, straight from your bank.",
    image: "/images/steps/instant-deposit.webp",
  },
  {
    n: "03",
    icon: "candlestick",
    accent: "primary",
    title: "Place Your ETF Order",
    description:
      "Search for the ETF you want and place your order, which settles the same way a PSX stock trade does.",
    image: "/images/steps/place-etf-order.webp",
  },
];

const benefits: { image: string; title: string; eyebrow: string }[] = [
  {
    image: "/images/icons/diversification.webp",
    title: "One-Trade Diversification",
    eyebrow:
      "Get exposure to a whole sector or index in a single trade, instead of building a portfolio stock by stock. One purchase spreads your risk across dozens of underlying holdings at once.",
  },
  {
    image: "/images/icons/lower-research-burden.webp",
    title: "Lower Research Burden",
    eyebrow:
      "The fund's underlying holdings do the diversifying for you, so there's less to research yourself. Spend less time picking individual names and more time on your overall strategy.",
  },
  {
    image: "/images/icons/real-time-trading.webp",
    title: "Real-Time Trading",
    eyebrow:
      "Traded in real time on the PSX, just like any other listed security, with live pricing throughout the session rather than a once-a-day valuation, so you always know where the market stands.",
  },
];

const facts = [
  { value: "Broad Exposure", label: "A whole sector or index in one trade" },
  { value: "PSX-Listed", label: "Traded in real time like any stock" },
  { value: "One Account", label: "Alongside your existing stock holdings" },
  { value: "PSX Member", label: "Licensed brokerage firm" },
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
          eyebrow="Our Products · ETFs"
          title={
            <>
              Invest in ETFs in Pakistan
              <br />
              with Finqalab
            </>
          }
          subtitle="Buy and sell ETFs alongside PSX stocks, all from one digital account, a straightforward way to diversify your portfolio."
        />

        {/* ---------------------------------------------------------------
            How to Buy ETFs Online in Pakistan
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                How to Buy ETFs Online in Pakistan
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
                Why Invest in ETFs
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                One investment, a whole basket of exposure.
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
                      <p className="mt-2 text-sm leading-relaxed text-text-onDark-muted">
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
            What are ETFs?
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <GlassCard interactive={false} className="p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
                      What are ETFs?
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
                        An ETF (exchange-traded fund) is a single investment that holds a basket of
                        stocks or assets, traded on the exchange just like an individual stock.
                        Instead of researching and buying each company yourself, an ETF gives you
                        exposure to a whole sector or index in one trade, a straightforward way to
                        diversify your portfolio.
                      </p>
                      <p>
                        Finqalab lets you trade ETFs the same way you already invest in stocks:
                        funded instantly through Raast, tracked in the same portfolio, and reviewed
                        by the same real-time market data, all inside one app. No separate account,
                        no separate app to download, and no extra paperwork to sign, just another
                        asset class sitting right next to your existing stock holdings.
                      </p>
                      <p>
                        Every ETF traded through Finqalab runs through Next Capital Limited, a
                        licensed brokerage firm and member of the Pakistan Stock Exchange, regulated
                        by the Securities and Exchange Commission of Pakistan. Next Capital is
                        itself publicly listed on the PSX under the ticker NEXT.
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
