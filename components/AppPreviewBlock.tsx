import PillButton from "./PillButton";
import Reveal from "./Reveal";
import AcademyVideoCarousel from "./AcademyVideoCarousel";

export default function AppPreviewBlock() {
  return (
    <section
      id="academy"
      className="bg-primary px-6 pt-10 pb-6 text-center text-onPrimary"
    >
      <Reveal>
        <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
          Become a better investor by learning from Finqalab
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-balance text-[0.95rem] font-medium text-onPrimary/80">
          Bite-sized video lessons from Finqalab Academy, ready to watch right here.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-5">
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
