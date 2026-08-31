import type { ReactNode } from "react";

// The "tall editorial/project sheet" card chassis, a notched-corner frame,
// an "///" kicker + eyebrow blurb top-left, a visual that deliberately
// overhangs the frame's own bottom edge, and a bold vertical title running
// down the exposed right edge. Extracted out of <FeatureCardStack/> (its
// original, and still only animated, home) so any page can drop this same
// card shape in without re-deriving the notch math or duplicating it.
export const EDITORIAL_CARD_W = 320;
export const EDITORIAL_CARD_H = 480;
const NOTCH = 38;

export default function EditorialCard({
  eyebrow,
  title,
  visual,
  panelTone = "dark",
  className = "",
}: {
  /** Small uppercase blurb under the "///" mark, top-left. */
  eyebrow: string;
  /** Runs vertically down the card's right edge, keep this short, it's set in a single line. */
  title: string;
  /** Fills the lower visual area. */
  visual: ReactNode;
  /**
   * How `visual` sits on the sheet.
   *
   * "dark" (default), the original navy→black panel that overhangs the
   * frame's bottom edge, so the card reads as a printed sheet with something
   * laid on top of it. Suits the glowing vector scene mockups
   * <FeatureCardStack/> puts in here.
   *
   * "embedded", no panel at all: the artwork prints straight onto the paper,
   * contained inside the frame rather than breaking it. For transparent
   * illustrations, where a panel would read as a photo stuck onto the sheet.
   */
  panelTone?: "dark" | "embedded";
  className?: string;
}) {
  const embedded = panelTone === "embedded";
  return (
    <article className={`relative h-full w-full ${className}`}>
      {/* The frame is drawn as a single stroked path rather than a bordered
          div: a CSS border can't follow the clipped diagonal at the top-right,
          so a clip-path + border approach leaves that one edge unstroked. */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${EDITORIAL_CARD_W} ${EDITORIAL_CARD_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ filter: "drop-shadow(0 18px 30px rgba(20,26,24,0.13))" }}
      >
        <path
          d={`M0.5 0.5 H${EDITORIAL_CARD_W - NOTCH - 0.5} L${EDITORIAL_CARD_W - 0.5} ${NOTCH + 0.5} V${EDITORIAL_CARD_H - 0.5} H0.5 Z`}
          fill="#fdfefc"
          stroke="#12100e"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Kicker + blurb, top-left */}
      <div className="absolute left-[6.5%] right-[24%] top-[5.5%]">
        {/* Braced string, not a bare `///` text node, unbraced it parses as
            a comment to JSX tooling. */}
        <p className="text-[0.6rem] leading-none tracking-[0.3em] text-[#12100e] sm:text-[0.7rem]">
          {"///"}
        </p>
        {/* line-clamp-5, not 3: there is room for roughly five lines between
            the kicker and the visual panel below, and clamping at three was
            cutting every card's copy off mid-sentence with an ellipsis , 
            which reads as a broken section rather than a designed one. The
            clamp stays as a backstop so unusually long copy degrades
            gracefully instead of colliding with the panel. */}
        <p className="mt-[0.9em] line-clamp-5 text-[0.54rem] font-medium uppercase leading-[1.6] tracking-[0.12em] text-[#3f413e] sm:text-[0.63rem]">
          {eyebrow}
        </p>
      </div>

      {/* Panelled: the visual deliberately overhangs the frame's bottom edge , 
          the reference's images break their own card outline, which is what
          makes the card read as a printed sheet with something laid on top
          rather than a UI panel with a contained thumbnail.

          Embedded: no panel, no shadow, no overhang, the artwork is printed
          onto the paper and stays inside the frame. Slightly more bottom inset
          than the panel version so it sits on the sheet rather than running
          off it. */}
      <div
        className={
          embedded
            ? "absolute bottom-[7%] left-[6.5%] right-[19%] top-[32%]"
            : "absolute bottom-[-3.5%] left-[6.5%] right-[19%] top-[31%] overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-bg-navy-soft to-bg-black p-4 shadow-[0_14px_26px_rgba(20,26,24,0.22)] sm:p-5"
        }
      >
        {visual}
      </div>

      {/* Vertical title down the exposed right edge */}
      <div className="absolute bottom-[7%] right-0 top-[4%] flex w-[19%] items-start justify-center">
        <span
          className="whitespace-nowrap text-[1.05rem] font-bold uppercase leading-none tracking-[-0.02em] text-[#12100e] sm:text-[1.35rem]"
          style={{ writingMode: "vertical-rl" }}
        >
          /{title}
        </span>
      </div>
    </article>
  );
}
