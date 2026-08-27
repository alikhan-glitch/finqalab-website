import PillButton from "./PillButton";
import Reveal from "./Reveal";
import BackgroundVideo from "./BackgroundVideo";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-black px-6 py-24 text-center">
      <BackgroundVideo
        mp4Src="/video/closing-bg.mp4"
        poster="/video/closing-bg-poster.jpg"
        opacity={40}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 50%, transparent 0%, rgba(5,7,13,0.95) 100%)",
        }}
      />

      <div className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold leading-tight text-text-onDark sm:text-5xl">
            Ready to invest with a regulated platform?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <PillButton href="https://finqalab.com/download/" variant="solidWhite" className="px-8 py-3.5 text-base">
              Download the App
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
