import PillButton from "./PillButton";
import Reveal from "./Reveal";

// Flow-state counterpart to <ClosingCTA/>, same copy/CTA by default, but a
// glass radial-gradient panel (matching the banner treatment on
// /careers and /updates) instead of a background video, since <ClosingCTA/>
// is still shared with the homepage and other untouched pages and can't be
// retheme in place.
export default function FlowClosingCTA({
  title = "Ready to invest with a regulated platform?",
  ctaLabel = "Download the App",
  ctaHref = "https://finqalab.com/download/",
}: {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative z-10 px-5 pb-20 pt-4 sm:px-10 sm:pb-28">
      <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
        <Reveal>
          <div
          className="relative overflow-hidden rounded-[1.5rem] border px-7 py-16 text-center sm:px-12 sm:py-24"
            style={{
              borderColor: "rgba(255,255,255,0.16)",
              background:
                "radial-gradient(120% 160% at 50% 0%, rgba(91,8,97,0.75) 0%, rgba(34,8,58,0.75) 55%, rgba(10,5,18,0.75) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold leading-tight text-text-onDark sm:text-5xl">
              {title}
            </h2>
            <div className="mt-8">
              <PillButton href={ctaHref} variant="solidWhite" className="px-8 py-3.5 text-base">
                {ctaLabel}
              </PillButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
