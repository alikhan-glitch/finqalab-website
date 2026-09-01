"use client";

import { useEffect } from "react";
import FluidCanvas from "./FluidCanvas";

// The fluid ink sim + scrim as a persistent page-level background, `fixed`,
// not scoped to the hero's own section, so the same swirling canvas stays
// visible behind every section as the page scrolls, not just the first
// viewport height. `fixed` also means the canvas's internal resolution stays
// exactly viewport-sized regardless of how tall the page's total scrollable
// content is, so there's no extra render cost for a long page.
//
// The scrim changed from the hero-only version's radial "spotlight" (darkest
// at the text, fading at the edges) to a flat wash: a radial centred on the
// viewport would, once fixed, spotlight whatever happens to be scrolled to
// the middle of the screen at any given moment rather than any particular
// content, a flat scrim keeps legibility consistent for the glass cards
// further down the page as well as the hero text up top.
//
// Lenis smooth-scroll lives here too (not in the hero) since it's a
// whole-page concern now, still scoped to this page only (mounted/destroyed
// with this component), not a global site-wide change.
export default function FluidPageBackground({
  hueMin,
  hueMax,
  pauseOrbitPastHero,
  pointerOnly,
}: {
  /** Forwarded to <FluidCanvas/>, omit to keep its cyan→magenta default. */
  hueMin?: number;
  hueMax?: number;
  /** Forwarded to <FluidCanvas/>, see its own doc comment. */
  pauseOrbitPastHero?: boolean;
  /** Forwarded to <FluidCanvas/>: no load-in burst, no auto-orbiting virtual
   *  cursor, ink only ever appears where the visitor's own pointer goes. */
  pointerOnly?: boolean;
} = {}) {
  useEffect(() => {
    let lenis: import("lenis").default | undefined;
    let rafId = 0;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 bg-[#04050c]">
      <FluidCanvas
        className="z-0"
        hueMin={hueMin}
        hueMax={hueMax}
        pauseOrbitPastHero={pauseOrbitPastHero}
        pointerOnly={pointerOnly}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "rgba(4,5,12,0.52)" }}
      />
    </div>
  );
}
