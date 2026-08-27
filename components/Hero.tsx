import PillButton from "./PillButton";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import BackgroundVideo from "./BackgroundVideo";

// Homepage hero. Carries the flow-state surface treatment used across the
// rest of the site — glass badge chip, Fraunces headline, word-by-word
// entrance, white pill CTA — over this page's own background video, which is
// deliberately kept rather than swapped for the ink canvas the inner pages
// use. The video and its glow/scrim stack below are untouched.
export default function Hero() {
  return (
    // -mt-[78px] pulls the section up to true y=0: the header is `sticky`
    // and transparent, but still reserves its own ~78px of flow height at
    // the top of the page, which otherwise pushed this section (and its
    // video, being `absolute inset-0` *within* it) down by that much —
    // exposing a plain dark strip above the video instead of letting it run
    // full-bleed behind the floating header. The matching extra pt- cancels
    // the shift for the actual heading/text content.
    <section className="relative -mt-[78px] overflow-hidden bg-bg-black px-6 pb-20 pt-[calc(78px+7rem)] text-center sm:pb-24 sm:pt-[calc(78px+9rem)]">
      <BackgroundVideo
        webmSrc="/video/hero-bg.webm"
        mp4Src="/video/hero-bg.mp4"
        poster="/video/hero-bg-poster.jpg"
        opacity={32}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(147,51,234,0.22) 0%, rgba(5,7,13,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%, rgba(63,214,196,0.10) 0%, rgba(5,7,13,0) 70%)",
        }}
      />
      {/* Text-protection scrim: keeps contrast safe against the brighter
          video now that opacity/saturation are pushed up for more punch. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 65% at 50% 45%, rgba(5,7,13,0.45) 0%, rgba(5,7,13,0) 75%)",
        }}
      />

      {/* max-w-6xl, not the 4xl this hero used with its original, much
          shorter headline: the supplied H1 runs three hard-broken lines and
          needs the width to keep each one intact. Narrower and the lines
          wrap again inside themselves, orphaning single words. The subtitle
          keeps its own max-w-2xl, so only the headline uses the full width. */}
          <div className="relative mx-auto max-w-6xl">
        <WordReveal
          as="h1"
          text={"Pakistan's best investing app\nfor PSX stocks, ETFs and more."}
          baseDelay={320}
          stagger={70}
          duration={720}
          fromY={26}
          className="text-4xl font-semibold leading-[1.1] tracking-tight text-text-onDark sm:text-5xl lg:text-6xl"
        />

        <WordReveal
          as="p"
          text="Investing in Pakistan's stock market, made effortless. Open a fully digital, SECP-regulated account in minutes, then trade PSX stocks and ETFs with confidence. No branch visits, no paperwork, no experience needed."
          baseDelay={1100}
          stagger={18}
          duration={600}
          fromY={14}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-text-onDark-muted"
        />

        <Reveal delay={1250}>
          <div className="mt-10">
            <PillButton href="#" variant="solidWhite" className="px-8 py-3.5 text-base">
              Download Now
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
