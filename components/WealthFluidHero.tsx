"use client";

import WordReveal from "./WordReveal";

// The hero's CONTENT only, the fluid canvas + scrim now live in
// <FluidPageBackground/>, rendered once at the page level (fixed, behind
// every section) rather than owned by this one. This component is just a
// normal-flow block sitting on top of that shared background.
//
// Adapted from a "Flowstate" waitlist-landing reference (WebGL ink sim +
// glass UI + staggered word-by-word reveal). What changed from that
// reference and why:
//
// - No duplicate nav/CTA header baked into the hero, and no inline footer
//   line: the page already has the site's real <Navbar/> and <Footer/>.
// - The waitlist email form is gone. Finqalab is a live investing app, not a
//   waitlist product, the reference's "Join Waitlist" bar doesn't apply, so
//   it's a single "Get Started" CTA instead, matching every other CTA on
//   the site.
// - Copy is Finqalab's own (see the two WordReveal calls below), not the
//   reference's "Flowstate" placeholder text.
// - The reference's global `html { font-size: vw }` adaptive-rem grid is
//   NOT reproduced, that rescales every rem unit on the page, which would
//   silently distort spacing/type on every other route sharing this layout.
//   Sizing here uses Tailwind's normal fixed rem scale with responsive
//   variants instead.
//
// Kept as specified: the glass badge/CTA treatment and the exact reveal
// delays/stagger/duration timings from the reference's table.
export default function WealthFluidHero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-24 text-center sm:px-10">
      <div className="flex w-full max-w-sm flex-col items-center sm:max-w-2xl lg:max-w-4xl">
        <WordReveal
          as="h1"
          text="Features That Outperform"
          baseDelay={320}
          stagger={85}
          duration={720}
          fromY={26}
          className="max-w-xs text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#eef0f6] sm:max-w-2xl sm:text-6xl lg:max-w-4xl lg:text-7xl"
        />

        <WordReveal
          as="p"
          text="A modern, fully customizable trading platform, built around how Pakistan actually invests."
          baseDelay={1150}
          stagger={22}
          duration={600}
          fromY={14}
          className="mt-4 max-w-xs text-base leading-relaxed text-[#b9becf] sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-none lg:text-xl"
        />
      </div>
    </section>
  );
}
