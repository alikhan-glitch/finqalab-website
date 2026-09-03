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

// Pre-launch page: no Product schema (nothing purchasable yet), per the
// client spec. title.absolute bypasses the site's "%s | Finqalab" template
// so the "(Coming Soon)" suffix lands after the site name, exactly as
// specified, rather than before it.
export const metadata: Metadata = {
  title: { absolute: "Invest in Gold Online in Pakistan | Finqalab (Coming Soon)" },
  description:
    "Finqalab is bringing digital gold trading to Pakistan through a partnership with PMEX. Join the waitlist to be first in line.",
};

// Product page for Gold, same chassis as /stocks and /etf, adapted for a
// pre-launch/waitlist product: "Join the Waitlist" in place of "Open Your
// Account" everywhere, and content drawn from the client-supplied Gold SEO
// spec rather than a live-product spec. Copy is honest about launch status
// throughout, nothing here claims gold trading is live today.

// Gold trading isn't live yet, so there's no real app UI to screenshot here.
// Borrowing the /stocks page's real screenshots as stand-ins for the phone
// mockup rather than the generic icon mock (per instruction), swap these
// for actual gold screens once that UI exists.
const steps: TradeStep[] = [
  {
    n: "01",
    icon: "wallet",
    accent: "primary",
    title: "Fully Digital",
    description:
      "Buy and hold gold entirely online, with no physical storage or jeweller visits needed.",
    image: "/images/steps/trade.webp",
  },
  {
    n: "02",
    icon: "shieldCheck",
    accent: "teal",
    title: "PMEX-Backed Contracts",
    description:
      "Every position is backed by contracts traded on the Pakistan Mercantile Exchange (PMEX).",
    image: "/images/steps/enter-stock-details.webp",
  },
  {
    n: "03",
    icon: "pieChart",
    accent: "primary",
    title: "One Portfolio",
    description:
      "Gold will sit alongside your PSX stocks and ETFs in the same Finqalab account.",
    image: "/images/steps/filled-order.webp",
  },
];

const benefits: { image: string; title: string; eyebrow: string }[] = [
  {
    image: "/images/icons/buy-sell-digitally.webp",
    title: "Buy & Sell Digitally",
    eyebrow:
      "Cash sitting idle quietly loses worth as prices rise. Gold has held its value through every cycle, but owning it always meant dealing with physical gold, a jeweller, or a safe of your own. Now it's digital, through Finqalab.",
  },
  {
    image: "/images/icons/one-portfolio-view.webp",
    title: "One Portfolio View",
    eyebrow:
      "New asset classes usually mean new paperwork. Not with Finqalab. Add gold to your existing account and see it in the same portfolio. Different asset, same profile. That's how it should be.",
  },
  {
    image: "/images/icons/no-new-account.webp",
    title: "Stay Tuned for Launch",
    eyebrow:
      "Gold is the next commodity we're building on Finqalab, backed by our partnership with the Pakistan Mercantile Exchange. We'd rather launch it right than launch it early. Join the waitlist to be first when it's ready.",
  },
];

const facts = [
  // "One Account" and "Real-Time Pricing" swapped out, both are already
  // used as stats on /etf. "Contract-Backed" also dropped, it restated the
  // same fact as "PMEX Partnership", replaced with liquidity instead.
  { value: "PMEX Partnership", label: "Contracts traded on the Pakistan Mercantile Exchange" },
  { value: "Coming Soon", label: "Currently in development" },
  { value: "Storage-Free", label: "No vault, no jeweller, no physical gold to guard" },
  { value: "Instant Liquidity", label: "Sell anytime, no buyer needed" },
];

const faqs = [
  {
    q: "When will gold trading launch on Finqalab?",
    a: "Finqalab's gold trading feature, built through a partnership with the Pakistan Mercantile Exchange (PMEX), is currently in development. Join the waitlist in the app to be notified as soon as it becomes available.",
  },
  {
    q: "How will gold trading work on Finqalab?",
    a: "Gold trading on Finqalab will let you buy and sell gold digitally through contracts traded on the Pakistan Mercantile Exchange (PMEX), with holdings tracked in the same portfolio view as your PSX stocks and ETFs.",
  },
  {
    q: "Will I need a separate account to trade gold?",
    a: "No. Gold trading is being built into the existing Finqalab app, so your current account will support gold alongside PSX stocks and ETFs once the feature launches.",
  },
];

export default function GoldPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        <FlowPageHero
          title={
            <>
              Invest in gold online in Pakistan,
              <br />
              coming soon to Finqalab
            </>
          }
          subtitle="Finqalab is partnering with the Pakistan Mercantile Exchange (PMEX) to bring digital gold trading to the app. Join the waitlist to be the first to know when it launches."
          ctaLabel="Join the Waitlist"
        />

        {/* ---------------------------------------------------------------
            A Trusted Asset, Reimagined Digitally
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                A Trusted Asset, Reimagined Digitally
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                Gold has long been one of the most trusted ways Pakistanis store and grow wealth.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-14">
              <TradeStepsShowcase steps={steps} />
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            What to Expect When Gold Trading Launches
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                What to Expect When Gold Trading Launches
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                Three things we&apos;re building, so you know what&apos;s coming.
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
            Why Gold Investing Is Coming to Finqalab
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <GlassCard interactive={false} className="p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
                      Backed by the same trust you already invest with
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
                        Gold has long been one of the most trusted ways Pakistanis store and grow
                        wealth. Finqalab is bringing that same asset class into the app, through a
                        partnership with the Pakistan Mercantile Exchange (PMEX), so you&apos;ll be
                        able to buy and hold gold digitally alongside your PSX stocks and ETFs,
                        without visiting a jeweller or managing physical storage.
                      </p>
                      <p>
                        Once live, gold will work the same way ETFs and stocks already do on
                        Finqalab: funded through Raast, tracked in the same portfolio, all inside
                        one app. No separate account, no separate app to download, and no extra
                        paperwork to sign.
                      </p>
                      <p>
                        Gold is a work in progress, and we&apos;re excited to bring it to you as
                        soon as it&apos;s ready. Follow Finqalab on social media to be the first to
                        know the moment it goes live.
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
          title="Be the first to invest in gold on Finqalab"
          ctaLabel="Join the Waitlist"
        />
      </main>

      <Footer />
    </>
  );
}
