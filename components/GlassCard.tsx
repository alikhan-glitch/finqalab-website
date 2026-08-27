import type { ReactNode } from "react";

// The site's "liquid glass" surface, lifted from the fluid feature page's
// card treatment (translucent white fill + hairline white border +
// backdrop-blur) and made shared so every page rolled onto the home-page
// design language uses the identical recipe rather than a near-miss copy.
//
// Deliberately a white *tint* rather than a tinted-black panel: over the
// dark base these read as frosted glass catching light, which is what makes
// the violet/teal glows behind them show through instead of being occluded.
export default function GlassCard({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  /** Set false for static panels that aren't links/buttons. */
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border backdrop-blur-md ${
        interactive
          ? "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
          : ""
      } ${className}`}
      style={{
        borderColor: "rgba(255,255,255,0.16)",
        background: "rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </div>
  );
}
