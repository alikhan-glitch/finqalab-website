import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import FluidPageBackground from "@/components/FluidPageBackground";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Finqalab and help reshape Pakistan's financial sector. See why our team calls it a career worth having, and view open positions.",
};

// Flow-state Careers page: same chassis as /features/wealth-management
// (FluidPageBackground + Onest body / Fraunces headings + glass panels), but
// tuned to the management-approved reference file's own violet→magenta→
// rose-gold hue band instead of wealth-management's cyan→magenta one.
// Content is verbatim from finqalab.com/careers/. Shares the site's real
// <Navbar/>/<Footer/> rather than the reference's own inline nav/footer.
const stats = [
  { value: "90", label: "Employee Satisfaction Score (%)" },
  { value: "50", label: "Female Employees (%)" },
  { value: "10", label: "Employee Turnover (%)" },
];

const culture = [
  {
    mark: "Ow",
    title: "We Hand Over Real Ownership",
    body: "New hires get real decisions to make in their first few months, not busywork while they “prove themselves.”",
  },
  {
    mark: "De",
    title: "We Sweat the Details Customers Never See",
    body: "A dividend that posts a day late, a chart that loads a second slow, we catch it before you do, and we fix it.",
  },
  {
    mark: "Bu",
    title: "Nobody Builds Alone Here",
    body: "Engineers sit with the research desk. Support sits with product. The best ideas come from people who technically don't have to be talking to each other.",
  },
  {
    mark: "Pe",
    title: "We Invest in People for the Long Run",
    body: "Several of our team have been with Finqalab, or Next Capital before it, for years. We'd rather grow someone than replace them.",
  },
];

const heading ="font-semibold tracking-tight text-text-onDark";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-24 text-center sm:px-10">
          <div className="flex w-full max-w-sm flex-col items-center sm:max-w-2xl lg:max-w-4xl">
            <WordReveal
              as="h1"
              text="Help Pakistan learn to invest"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="We're building the platform and the education to bring an entire country into the market for the first time. That mission runs both ways, the people building it get to grow just as fast as the thing they're building."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <PillButton href="https://finqalab.com/open-positions/" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                View Open Positions
              </PillButton>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Have an impactful career
        --------------------------------------------------------------- */}
        <section id="impact" className="relative z-10 px-5 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal delay={80} className="lg:col-span-7">
                <h2 className={`max-w-lg text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                  Have an impactful career
                </h2>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-text-onDark-muted">
                  At Finqalab, you&apos;ll help shape Pakistan&apos;s financial future by making investing
                  accessible to all. Join us to drive economic growth and empower individuals across the
                  country, while growing alongside a team that&apos;s building the market&apos;s
                  infrastructure from the ground up.
                </p>
              </Reveal>
              <Reveal delay={160} className="lg:col-span-5">
                <GlassCard interactive={false} className="p-6 sm:p-8">
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <div className={`text-[2.2rem] sm:text-[2.7rem] ${heading}`}>{s.value}</div>
                        <div className="mt-1.5 text-[0.78rem] leading-tight text-text-onDark-muted">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Why work with us
        --------------------------------------------------------------- */}
        <section id="why" className="relative z-10 px-5 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal delay={80} className="lg:col-span-5">
                <h2 className={`text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                  Work that actually moves the needle
                </h2>
              </Reveal>
              <Reveal delay={160} className="space-y-4 lg:col-span-7">
                <p className="text-[1.02rem] leading-[1.7] text-text-onDark-muted">
                  Whether you&apos;re on engineering, research, or the support desk, the work you do
                  here shows up in real portfolios, not a slide deck. Finqalab is building the
                  infrastructure and the education that brings retail investing to Pakistan for the
                  first time, and every team plays a direct part in that.
                </p>
                <p className="text-[1.02rem] leading-[1.7] text-text-onDark-muted">
                  This isn&apos;t a place to coast. You&apos;ll take on problems nobody has solved for
                  Pakistan&apos;s market before, whether that&apos;s a technical integration, a
                  research call, or explaining a new asset class to a first-time investor, and grow
                  alongside the platform as it scales.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Our culture
        --------------------------------------------------------------- */}
        <section id="culture" className="relative z-10 px-5 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className={`text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                Four things we hold to
              </h2>
            </Reveal>
            <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {culture.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <GlassCard className="h-full p-6">
                    <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-[0.7rem] text-[1.05rem] text-white ${heading}`}
                      style={{ background: "linear-gradient(135deg, #5B0861, #b452ff)" }}
                    >
                      {c.mark}
                    </span>
                    <h3 className="mt-4 text-[1.1rem] font-semibold text-text-onDark">{c.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-[1.55] text-text-onDark-muted">{c.body}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            We're hiring
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-20 sm:px-10 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div
              className="relative overflow-hidden rounded-[1.5rem] border px-7 py-14 text-center sm:px-12 sm:py-20"
                style={{
                  borderColor: "rgba(255,255,255,0.16)",
                  background:
                    "radial-gradient(120% 160% at 20% 0%, rgba(91,8,97,0.75) 0%, rgba(34,8,58,0.75) 55%, rgba(10,5,18,0.75) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
              <h2 className={`mx-auto max-w-xl text-3xl leading-[1.15] sm:text-4xl lg:text-[2.8rem] ${heading}`}>
                  Join the financial revolution
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-[1.02rem] leading-relaxed text-text-onDark-muted">
                  We&apos;re hiring passionate individuals eager to shape the future of finance in Pakistan.
                  Whether you&apos;re experienced or just starting out, there&apos;s a place for you here.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                  <PillButton href="https://finqalab.com/open-positions/" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                    View Open Positions
                  </PillButton>
                  <PillButton href="mailto:Careers@finqalab.com" variant="outlineDark" className="px-7 py-3.5 text-[0.95rem]">
                    Careers@finqalab.com
                  </PillButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
