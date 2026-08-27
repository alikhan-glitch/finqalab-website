"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Content renders fully visible until JS confirms it can animate it in —
  // avoids opacity:0-by-default content for no-JS users/crawlers.
  const [state, setState] = useState({ armed: false, visible: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Guards against a real bug: IntersectionObserver is not guaranteed to
    // catch every element on every scroll frame. Under a fast fling, an
    // element can go from "below viewport" straight to "above viewport"
    // without the browser ever sampling the moment it was on-screen — if
    // that happens, .reveal.js-armed leaves it at opacity:0 permanently,
    // with nothing left to trigger a re-check. `done` below is the single
    // source of truth so the two independent triggers (observer + scroll
    // fallback) can't race or double-fire.
    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      setState({ armed: true, visible: true });
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    const markArmedHidden = () => {
      setState((prev) => (prev.visible ? prev : { armed: true, visible: false }));
    };

    const checkGeometry = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
        } else {
          markArmedHidden();
        }
      },
      // Generous trigger zone (starts 20% of viewport height before the
      // element arrives) so a fast scroll has a wide window to be caught,
      // rather than a narrow band that's easy to skip past entirely.
      { threshold: 0, rootMargin: "20% 0px -10% 0px" }
    );
    observer.observe(el);

    // Independent fallback: a throttled scroll listener double-checks the
    // element's actual position directly, regardless of whether the
    // IntersectionObserver above ever reported it. This can only ever
    // reveal content (never hide it), so it's purely corrective.
    let ticking = false;
    const onScroll = () => {
      if (done || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        checkGeometry();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Also catch elements already on-screen at mount time.
    checkGeometry();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const classes = ["reveal"];
  if (state.armed) classes.push("js-armed");
  if (state.visible) classes.push("is-visible");
  if (className) classes.push(className);

  return (
    <div
      ref={ref}
      className={classes.join(" ")}
      style={{ transitionDelay: state.visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
