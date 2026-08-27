import Reveal from "./Reveal";

export default function StrategiesSection() {
  return (
    <section
      id="technicals"
      className="relative overflow-hidden bg-bg-black px-6 py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 65% at 82% 75%, rgba(147,51,234,0.22) 0%, rgba(5,7,13,0) 68%)",
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

      <div className="relative mx-auto flex max-w-[clamp(72rem,86vw,90rem)] flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-6">
        <Reveal className="w-full max-w-md flex-shrink-0">
          <h2 className="text-3xl font-semibold leading-tight text-text-onDark sm:text-4xl">
            Technical insights, right in the app
          </h2>
          <p className="mt-5 max-w-md text-base text-text-onDark-muted">
            Subscribe to Finqalab Technicals for weekly market outlooks, risk
            management guidance, short-term signals, and trade setups from
            our research team.
          </p>

          <p className="mt-4 flex items-center gap-1.5 text-xs text-text-onDark-muted">
            <span className="inline-block h-3.5 w-3.5 rounded-full border border-current text-center text-[9px] leading-[13px]">
              i
            </span>
            Terms apply. Subscription fees may apply.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative w-full flex-shrink-0 md:w-auto">
          <div
          className="relative mx-auto h-[560px] w-auto sm:h-[640px] md:h-[760px]"
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
    </section>
  );
}
