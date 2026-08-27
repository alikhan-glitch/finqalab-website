import type { ReactNode } from "react";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

// Flow-state counterpart to <PageHero/> — same prop API and layout (eyebrow
// line, headline with caller-controlled <br/> breaks, subtitle, single CTA),
// so a page can swap one for the other with no content changes. What
// changes is purely the theme: Fraunces headline instead of italic Figtree,
// Onest-inherited body, a solid-white CTA instead of the purple primary
// pill, and no owned background — the ink canvas now lives once at the page
// level via <FluidPageBackground/>, not scoped to just the hero section, so
// this component renders content only.
//
// Currently used by /stocks only. <PageHero/> (and the pages still on it —
// Sukuks, About) is untouched; once every page has moved to this look,
// PageHero/StarfieldBackground become dead code to remove.
export default function FlowPageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "#",
}: {
  eyebrow?: string;
  /** Pass a fragment with <br/> to control where the headline breaks. */
  title: ReactNode;
  subtitle: string;
  /** Omit to render the hero with no CTA button at all. */
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-16 text-center sm:px-10">
      <div className="mx-auto max-w-4xl">
        {eyebrow && (
          <Reveal>
            <p className="text-sm font-medium text-text-onDark-muted">{eyebrow}</p>
          </Reveal>
        )}

        <Reveal delay={eyebrow ? 80 : 0}>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-text-onDark sm:text-6xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={eyebrow ? 180 : 100}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-text-onDark-muted">{subtitle}</p>
        </Reveal>

        {ctaLabel && (
          <Reveal delay={eyebrow ? 280 : 200}>
            <div className="mt-10">
              <PillButton href={ctaHref} variant="solidWhite" className="px-8 py-3.5 text-base">
                {ctaLabel}
              </PillButton>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
