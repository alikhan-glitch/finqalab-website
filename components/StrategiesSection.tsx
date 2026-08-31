import Reveal from "./Reveal";

// Three benefit columns folding the phone mockup's five real subscription
// categories (Weekly Outlook, Risk Management, Short-Term Signals, Trend
// Identification, Trade Setups) into three, adapted from the Questrade
// "Your unfair advantage" reference's bold-headline + divided-column
// pattern, rewritten around Finqalab's own real research-desk product
// rather than reusing its copy.
const benefits = [
  {
    title: "Know Before Monday Opens",
    body: "A full week's market outlook from our research desk, delivered before the opening bell, so you're already positioned when trading starts.",
  },
  {
    title: "Trade With Guardrails",
    body: "Risk management built into every call, position sizing and stop levels, so a good setup doesn't turn into a bad week.",
  },
  {
    title: "Catch the Move as It Starts",
    body: "Short-term signals and ready-made trade setups the moment a trend actually starts, timed for investors who move first.",
  },
];

export default function StrategiesSection() {
  return (
    <section
      id="technicals"
      className="relative overflow-hidden px-6 pb-8 pt-10 sm:pb-10 sm:pt-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 65% at 82% 75%, rgba(128,103,218,0.22) 0%, rgba(5,7,13,0) 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 65% 35%, rgba(63,214,196,0.14) 0%, rgba(5,7,13,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[clamp(72rem,86vw,90rem)]">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <Reveal className="w-full max-w-md flex-shrink-0 text-center md:text-left">
            <h2 className="text-3xl font-semibold leading-tight text-text-onDark sm:text-4xl">
              Finqalab Technicals.
              <br />
              Your Unfair Advantage.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[0.95rem] text-text-onDark-muted md:mx-0">
              Weekly outlooks, real-time signals, and ready-made trade
              setups from our research desk, so every trade is backed by
              more than a hunch.
            </p>

            <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-1.5 text-xs text-text-onDark-muted md:mx-0 md:justify-start">
              <span className="inline-block h-3.5 w-3.5 rounded-full border border-current text-center text-[9px] leading-[13px]">
                i
              </span>
              Terms apply. Subscription fees may apply.
            </p>
          </Reveal>

          {/* Its own top margin, independent of the heading, rather than
              extra section-level padding: that pushed the heading down with
              it and left a dead gap above the text. Row is vertically
              centered, so the text (shorter than the phone) sits centered
              against it rather than pinned to the top with a gap below. */}
          <Reveal delay={120} className="relative w-full flex-shrink-0 md:mt-6 md:w-auto">
            <div
            className="relative mx-auto h-[260px] w-auto sm:h-[300px] md:h-[360px]"
              style={{ aspectRatio: "1182 / 1653" }}
            >
              {/* Plain <img>, not next/image: the optimizer strips WebP alpha
                  channels (flattens transparency to black) during resize. */}
              <img
                src="/images/strategies-phone.webp"
                alt="Finqalab Technicals subscriptions: Weekly Outlook, Risk Management, Short-Term Signals, Trend Identification, Trade Setups"
                width={1182}
                height={1653}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={180 + i * 90} className="sm:px-6 sm:first:pl-0">
              <h3 className="text-base font-semibold text-text-onDark">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-onDark-muted">
                {benefit.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
