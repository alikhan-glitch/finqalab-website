"use client";

import { useEffect, useRef, useState } from "react";
import EditorialCard, { EDITORIAL_CARD_H, EDITORIAL_CARD_W } from "./EditorialCard";
import FeatureSceneView from "./FeatureScenes";
import type { WealthFeature } from "@/lib/wealthManagementFeatures";

// A physically-layered deck of editorial "poster" cards that continuously
// deals itself: the front card lifts up and away, every card behind shifts
// forward one slot, and a new card rises into the front position from below.
//
// Deliberately NOT a carousel — nothing translates sideways in lockstep and
// no card is ever fully hidden by a viewport edge; the stack keeps its depth
// and overlap through the whole transition, which is the defining
// characteristic of the reference composition.

const VISIBLE = 5; // slots that are actually on screen at any moment
const CYCLE_MS = 3400; // dwell time per card
const MOVE_MS = 1150; // how long a card takes to travel one slot
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

// Card geometry — sourced from <EditorialCard/> itself so the aspect-ratio
// wrapper below can never drift out of sync with the frame it's sizing.
const CARD_W = EDITORIAL_CARD_W;
const CARD_H = EDITORIAL_CARD_H;

type Placement = { x: number; y: number; scale: number; rot: number; opacity: number; z: number };

// Offsets are percentages of the card's own size, so the whole composition
// scales with the card at every breakpoint without a second set of numbers.
// y decreases toward the front: upcoming cards sit low and behind, the front
// card sits highest and fully exposed, and the outgoing card keeps rising.
const STACK: Placement[] = [
  { x: 0, y: 0, scale: 1, rot: 0, opacity: 1, z: 50 },
  { x: 7, y: 11, scale: 0.965, rot: 0.8, opacity: 1, z: 40 },
  { x: 12.5, y: 20, scale: 0.93, rot: 1.6, opacity: 1, z: 30 },
  { x: 16.5, y: 27, scale: 0.9, rot: 2.4, opacity: 1, z: 20 },
  { x: 19.5, y: 32.5, scale: 0.875, rot: 3.2, opacity: 1, z: 10 },
];

// The card that just left the front — lifted clear of the deck and faded.
// Highest z so it reads as being picked off the top, not sinking through.
const EXIT: Placement = { x: -6, y: -30, scale: 1.03, rot: -2, opacity: 0, z: 60 };
// Everything not yet in play, parked below the deck and invisible. A card
// crosses from EXIT to ENTER while fully transparent, so the wrap is unseen.
const ENTER: Placement = { x: 22, y: 38, scale: 0.86, rot: 3.8, opacity: 0, z: 5 };

function placementFor(pos: number, total: number): Placement {
  if (pos < VISIBLE) return STACK[pos];
  if (pos === total - 1) return EXIT; // one tick after being the front card
  return ENTER;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Card({ feature }: { feature: WealthFeature }) {
  return (
    <EditorialCard
      eyebrow={feature.description}
      title={feature.shortLabel ?? feature.title}
      visual={<FeatureSceneView scene={feature.scene} dark />}
    />
  );
}

export default function FeatureCardStack({ features }: { features: WealthFeature[] }) {
  const total = features.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      // Checked per tick rather than held in state: no extra render, and it
      // picks up an OS-level preference change immediately.
      if (prefersReducedMotion()) return;
      setActive((prev) => (prev + 1) % total);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const handleMove = (e: React.MouseEvent) => {
    const el = frameRef.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    // Restrained on purpose — a few degrees reads as the deck responding to
    // the cursor; more than that starts to look like a toy.
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -5,
      y: ((e.clientX - r.left) / r.width - 0.5) * 7,
    });
  };

  return (
    <div
      ref={frameRef}
      className="relative mx-auto w-[15rem] sm:w-[18rem] lg:w-[20.5rem]"
      style={{ perspective: "1400px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={handleMove}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Sized to the front card; the rest of the deck overhangs it and is
          allowed to, so the stack keeps its depth instead of being boxed in. */}
      <div
        className="relative"
        style={{
          aspectRatio: `${CARD_W} / ${CARD_H}`,
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: `transform 500ms ${EASE}`,
        }}
      >
        <ul className="contents">
          {features.map((feature, i) => {
            const pos = (i - active + total) % total;
            const p = placementFor(pos, total);
            return (
              <li
                key={feature.title}
                className="absolute inset-0"
                aria-hidden={pos >= VISIBLE || undefined}
                style={{
                  zIndex: p.z,
                  opacity: p.opacity,
                  transform: `translate(${p.x}%, ${p.y}%) rotate(${p.rot}deg) scale(${p.scale})`,
                  transition: `transform ${MOVE_MS}ms ${EASE}, opacity ${MOVE_MS}ms ${EASE}`,
                  pointerEvents: pos === 0 ? "auto" : "none",
                }}
              >
                <Card feature={feature} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
