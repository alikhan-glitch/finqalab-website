import PillButton from "./PillButton";
import Reveal from "./Reveal";
import BackgroundVideo from "./BackgroundVideo";

export default function DiversifySection() {
  return (
    <section
      id="etfs"
      className="relative overflow-hidden bg-bg-black px-6 py-20 text-center sm:py-24"
    >
      <BackgroundVideo
        webmSrc="/video/diversify-bg.webm"
        mp4Src="/video/diversify-bg.mp4"
        poster="/video/diversify-bg-poster.jpg"
        opacity={32}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(63,214,196,0.16) 0%, rgba(5,7,13,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%, rgba(147,51,234,0.14) 0%, rgba(5,7,13,0) 70%)",
        }}
      />
      {/* Text-protection scrim: keeps contrast safe against the brighter
          video now that opacity/saturation are pushed up for more punch. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 75% at 50% 50%, rgba(5,7,13,0.45) 0%, rgba(5,7,13,0) 78%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-6xl">
            Diversify your portfolio in one trade
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-text-onDark-muted">
            Explore ETFs, a basket of stocks or assets, traded on the
            exchange just like an individual stock.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10">
            <PillButton href="/etf" variant="outlineDark" className="px-8 py-3.5 text-base">
              Learn more
            </PillButton>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-text-onDark-muted">
            <span className="inline-block h-3.5 w-3.5 rounded-full border border-current text-center text-[9px] leading-[13px]">
              i
            </span>
            Investment Risk Disclosures
          </p>
        </Reveal>
      </div>
    </section>
  );
}
