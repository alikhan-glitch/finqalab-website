import type { ReactNode } from "react";
import PillButton from "./PillButton";
import Reveal from "./Reveal";
import StarfieldBackground from "./StarfieldBackground";

// The shared hero for every page besides the homepage itself — same violet
// top bloom / teal bottom bloom / centre scrim / italic display headline
// recipe as <Hero/> (the homepage's own component), but with the background
// video swapped for <StarfieldBackground/> (a ported Three.js scene) rather
// than sharing Hero's exact video. That's a deliberate, requested departure,
// not drift: the homepage keeps its video, every other page gets the
// starfield. Keep the two in sync on everything BUT that one layer.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Get Started",
  ctaHref = "#",
}: {
  eyebrow?: string;
  /** Pass a fragment with <br/> to control where the headline breaks. */
  title: ReactNode;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg-black px-6 py-28 text-center sm:py-36">
      <StarfieldBackground />
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
      {/* Text-protection scrim — same reasoning as the home hero: the video
          runs bright enough that headline contrast isn't safe without it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 65% at 50% 45%, rgba(5,7,13,0.45) 0%, rgba(5,7,13,0) 75%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {eyebrow && (
          <Reveal>
            <p className="font-heading text-sm font-medium text-text-onDark-muted">{eyebrow}</p>
          </Reveal>
        )}

        <Reveal delay={eyebrow ? 80 : 0}>
          <h1 className="mt-4 font-display text-4xl italic leading-[1.05] tracking-tight text-text-onDark sm:text-6xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={eyebrow ? 180 : 100}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-text-onDark-muted">
            {subtitle}
          </p>
        </Reveal>

        <Reveal delay={eyebrow ? 280 : 200}>
          <div className="mt-10">
            <PillButton href={ctaHref} variant="primary" className="px-8 py-3.5 text-base">
              {ctaLabel}
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
