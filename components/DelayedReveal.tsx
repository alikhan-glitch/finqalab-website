"use client";

import { useEffect, useState, type ReactNode } from "react";

// A fade+rise-in that actually works for above-the-fold content, unlike
// <Reveal/>. <Reveal/> is scroll/IntersectionObserver-based and, by design,
// renders at full opacity until JS "arms" it, for anything already in the
// initial viewport, arming and becoming visible happen in the same render,
// so it never passes through a hidden state and no transition ever plays;
// its `delay` prop is silently a no-op there. This instead mounts hidden and
// flips to visible after a timer, the same technique <WordReveal/> already
// uses for the hero headline/subtitle, so a `delay` here genuinely holds
// the element invisible until it elapses, regardless of scroll position.
export default function DelayedReveal({
  children,
  delay,
  duration = 600,
  fromY = 14,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  duration?: number;
  fromY?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${fromY}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.2,0,0,1), transform ${duration}ms cubic-bezier(0.2,0,0,1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
