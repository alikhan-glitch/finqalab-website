import FeatureSceneView from "./FeatureScenes";
import type { WealthFeature } from "@/lib/wealthManagementFeatures";

// Frosted-glass panels: translucent black + backdrop-blur, matching the
// border/blur/saturate combination PillButton's outlineDark variant already
// uses elsewhere on the site, rather than a one-off glass recipe. darkPurple
// only swaps the border for a thin violet outline (border-primary-light/35 —
// deliberately faint, not a bordered "box" look).
//
// bg-bg-black, not Tailwind's generic bg-black: this site's "black" is
// #05070d (a hair of blue in it, see globals.css), not pure #000. Tinting
// with true black sat visibly off against every surface around it — the
// card body, the section, the cloud bank — all of which use this same
// token. Matching it is what makes the panel blend instead of just being dark.
export const panelClasses: Record<"light" | "dark" | "darkPurple", string> = {
  light: "bg-white/95",
  dark: "border border-white/10 bg-bg-black/70 backdrop-blur-md backdrop-saturate-150",
  darkPurple: "border border-primary-light/35 bg-bg-black/70 backdrop-blur-md backdrop-saturate-150",
};

export default function FeatureGridCard({ feature }: { feature: WealthFeature }) {
  const theme = feature.panelTheme ?? "light";
  const dark = theme !== "light";

  return (
    // The bottom padding is the "submerged" zone: the row's cloud bank rises to
    // roughly here, so leaving it empty keeps every bit of copy above the
    // waterline. Sized to just clear the band, not more — surplus reads as dead
    // space on cards where the cloud happens to thin out.
    <div className="flex h-full min-h-[28rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-navy-soft to-bg-black p-8 pb-32 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 sm:p-10 sm:pb-32">
      <div>
        <h3 className="font-heading text-lg font-semibold leading-tight text-text-onDark">{feature.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-text-onDark-muted">{feature.description}</p>
      </div>

      <div className={`relative mt-6 flex-1 rounded-2xl p-5 ${panelClasses[theme]}`}>
        <FeatureSceneView scene={feature.scene} dark={dark} />
      </div>
    </div>
  );
}
