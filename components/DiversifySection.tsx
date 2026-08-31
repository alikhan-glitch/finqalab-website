import Reveal from "./Reveal";
import BackgroundVideo from "./BackgroundVideo";
import ContactSupportButton from "./ContactSupportButton";

// Repurposed from an ETF pitch (redundant with <AssetClassesSection/>'s own
// ETF card right above it, and with /etf's own explainer) into a Customer
// Support benefit section. Keeps the same market-ticker background video,
// it already reads as generic "the market" footage, not ETF-specific
// imagery, so it still fits.
export default function DiversifySection() {
  return (
    <section className="relative overflow-hidden bg-bg-black px-6 py-20 text-center sm:py-24">
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
            "radial-gradient(50% 100% at 50% 100%, rgba(128,103,218,0.14) 0%, rgba(5,7,13,0) 70%)",
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
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
            The market never fully closes. Neither do we.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-[0.95rem] text-text-onDark-muted">
            Confused about a trade or your account? Get the help you need,
            when you need it, with support from a team that understands the
            market.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10">
            <ContactSupportButton
              email="hello@finqalab.com"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold font-heading text-text-onDark backdrop-blur-md backdrop-saturate-150 transition-[background-color,transform] duration-200 hover:bg-white/10 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-navy"
            />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-text-onDark-muted">
            <span className="inline-block h-3.5 w-3.5 rounded-full border border-current text-center text-[9px] leading-[13px]">
              i
            </span>
            Stuck funds or a failed trade? Our in-app Help Center tracks
            that ticket start to finish.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
