import PillButton from "./PillButton";
import Reveal from "./Reveal";
import AcademyVideoCarousel from "./AcademyVideoCarousel";

export default function AppPreviewBlock() {
  return (
    <section
      id="academy"
      className="bg-primary px-6 pt-16 pb-12 text-center text-onPrimary"
    >
      <Reveal>
        <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
          Become a better investor by learning from Finqalab
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base font-medium text-onPrimary/80">
          Short, practical video lessons from Finqalab Academy, covering everything from your first trade to smarter market strategy, ready to watch right here.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10">
          <PillButton href="/academy" variant="solidWhite">
            Watch Free Courses
          </PillButton>
        </div>
      </Reveal>

      {/* No Reveal, no absolute positioning: plain document flow so this
          can't be affected by scroll-timing or positioning bugs at all. */}
      <AcademyVideoCarousel />
    </section>
  );
}
