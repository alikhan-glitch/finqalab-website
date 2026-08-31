"use client";

import { Fragment, useEffect, useState, type ElementType } from "react";

// Word-by-word entrance for the fluid hero's heading/sub-line -- distinct
// from <Reveal/>, which animates a whole block on scroll-into-view. This is
// a mount-triggered per-word stagger (the hero is always in view on load,
// so there's nothing to scroll-observe), splitting on spaces and giving
// each word its own transition-delay = baseDelay + index * stagger.
export default function WordReveal({
  text,
  as: Tag = "p",
  baseDelay,
  stagger,
  duration,
  fromY,
  className = "",
}: {
  /** A "\n" forces a hard line break, see the note below. */
  text: string;
  as?: ElementType;
  baseDelay: number;
  stagger: number;
  duration: number;
  fromY: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // A timer, not requestAnimationFrame: this only needs to defer past the
    // initial paint so the "from" state renders before the transition to
    // "to" starts, and a backgrounded/inactive tab can throttle rAF for a
    // long time (sometimes not run it at all), which would leave an
    // above-the-fold hero stuck invisible. setTimeout doesn't have that
    // dependency and still lands well within a frame in practice.
    const id = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  // A "\n" in `text` forces a hard break. Needed because every word renders
  // as its own inline-block, which wraps at slightly different points than
  // plain text would, so a headline that has to break at a particular
  // phrase can't be left to natural wrapping (the homepage H1 was splitting
  // "…ETFs and / more."). The stagger index runs continuously across lines,
  // so the entrance choreography is unchanged.
  const lines = text.split("\n").map((line) => line.split(" "));
  // Global word index each line starts at, so the stagger keeps counting
  // across a hard break instead of restarting. Computed rather than
  // accumulated in a mutable counter, which would be a render-phase
  // reassignment.
  const lineOffsets = lines.map((_, i) =>
    lines.slice(0, i).reduce((sum, line) => sum + line.length, 0)
  );

  return (
    <Tag className={className}>
      {lines.map((words, lineIndex) => (
        <span key={lineIndex}>
          {lineIndex > 0 && <br />}
          {words.map((word, i) => {
            const wordIndex = lineOffsets[lineIndex] + i;
            const isLastInLine = i === words.length - 1;
            const style = {
              display: "inline-block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(" + fromY + "px)",
              transition:
                "opacity " + duration + "ms cubic-bezier(0.2,0,0,1), transform " + duration + "ms cubic-bezier(0.2,0,0,1)",
              transitionDelay: baseDelay + wordIndex * stagger + "ms",
            } as const;
            return (
              <Fragment key={i}>
                <span style={style}>{word}</span>
                {/* The separating space is a sibling text node, deliberately
                    NOT inside the span: CSS trims trailing white space inside
                    an inline-block box, so a space kept in there renders as
                    nothing and the words run together
                    ("InvestinPSXstocks…"). Out here it sits in the parent's
                    inline formatting context, where it both renders as a real
                    space and still offers a soft-wrap opportunity, which a
                    non-breaking space inside the span would not. */}
                {!isLastInLine && " "}
              </Fragment>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
