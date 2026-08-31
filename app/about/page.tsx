import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import FlowClosingCTA from "@/components/FlowClosingCTA";
import FlowFAQSection from "@/components/FlowFAQSection";
import FlowPageHero from "@/components/FlowPageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Finqalab is on a mission to bring financial empowerment to every Pakistani household. Meet the team and the story behind the platform.",
};

// About page, laid out on a reference template (large intro panel with a
// collaged photo + decorative flourish, then a team grid below) but rebuilt
// entirely in Finqalab's own system: <GlassCard/> instead of the template's
// solid pastel card, a violet/teal radial glow instead of its flat mint
// background, and the site's usual dark base instead of its off-white one.
// Theme is now the flow-state system, same swap as /stocks and /sukuks:
// <FluidPageBackground/> + <FlowPageHero/>/<FlowClosingCTA/> + Fraunces for
// display headings and stat numbers, Onest (inherited) for everything else.
// Every photo is real, downloaded from the live finqalab.com/about/ page,
// not stock art, and every word of copy below is either verbatim from that
// page or a direct, honest derivation of it (see comments per section).
//
// Two departures from the reference worth flagging:
//   - The live site's team roster is a 2-slide carousel that (confusingly)
//     lists Humaira Asad twice with two different titles. Reconciled here
//     into one 5-person grid using her more senior/current title (Chief
//     Operating Officer) rather than reproducing that inconsistency.
//   - The template's per-card social icons are dropped, the source page
//     doesn't expose real per-person profile links, and wiring placeholder
//     "#" links under named executives' photos would read as broken or
//     fake rather than simply absent.

const team = [
  {
    name: "Najam Ali",
    title: "Co-Founder and Chairman",
    tag: "The Visionary",
    photo: "/images/about/about-najam.webp",
  },
  {
    name: "Irtaza Ali",
    title: "Co-Founder",
    tag: "The Mastermind",
    photo: "/images/about/about-irtaza.webp",
  },
  {
    name: "Humaira Asad",
    title: "Chief Operating Officer",
    tag: "The Catalyst",
    photo: "/images/about/about-humaira.webp",
  },
  {
    name: "Syed Faizan Hasan",
    title: "Chief Technology Officer",
    tag: "The Architect",
    photo: "/images/about/about-faizan.webp",
  },
];

const faqs = [
  {
    q: "Is Finqalab a licensed and regulated platform?",
    a: "Yes. Finqalab operates through Next Capital Limited, a PSX-listed brokerage firm, and is regulated by the Securities and Exchange Commission of Pakistan (SECP). Finqalab is a 60% subsidiary of Next Capital.",
  },
  {
    q: "Who owns Finqalab?",
    a: "Finqalab Technologies (Private) Limited is 60% owned by Next Capital Limited, a PSX-listed licensed brokerage firm. The remaining 40% is held by co-founders Najam Ali and Irtaza Ali.",
  },
  {
    q: "Who leads Finqalab?",
    a: "Najam Ali serves as CEO and Co-founder of Finqalab and Vice Chairman of Next Capital. Humaira Asad is Managing Director of Finqalab and CEO of Next Capital. Irtaza Ali is Co-founder.",
  },
];

// A soft, blurred glow pair standing in for the template's flat decorative
// shape band, reuses the exact violet/teal radial-glow language already
// established in <PageHero/> and <Hero/>, rather than inventing a new motif.
function GlowFlourish({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden">
      <div
      className="absolute h-56 w-56 rounded-full"
        style={{
          left: flip ? "auto" : "8%",
          right: flip ? "8%" : "auto",
          bottom: "-40%",
          background: "radial-gradient(closest-side, rgba(128,103,218,0.35) 0%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />
      <div
      className="absolute h-40 w-40 rounded-full"
        style={{
          left: flip ? "22%" : "auto",
          right: flip ? "auto" : "22%",
          bottom: "-30%",
          background: "radial-gradient(closest-side, rgba(63,214,196,0.28) 0%, transparent 75%)",
          filter: "blur(26px)",
        }}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pauseOrbitPastHero />

        <FlowPageHero
          title={
            <>
              We built the app
              <br />
              we wished existed
            </>
          }
          subtitle="Three decades inside Pakistan's stock market taught us investing shouldn't be this hard, so we fixed it."
        />

        {/* ---------------------------------------------------------------
            Our Vision, verbatim from finqalab.com/about
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pt-24 sm:pt-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <GlassCard interactive={false} className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
              <GlowFlourish />
              <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <p
                      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] text-text-onDark-muted sm:text-[0.8rem]"
                      style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                      Our Vision
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-text-onDark sm:text-4xl">
                      Every rupee sitting idle is a rupee losing to inflation.
                    </h2>
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="mt-6 text-[15px] leading-relaxed text-text-onDark-muted">
                      We built Finqalab to remove the friction between wanting to invest and
                      actually doing it, no branch visits, no paperwork, no specialized knowledge
                      required. Just a direct, transparent path to putting your money to work in
                      Pakistan&apos;s stock market.
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={150} className="lg:col-span-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about/about-vision.webp"
                    alt="The Finqalab team mapping out the app's vision on a whiteboard"
                    width={1600}
                    height={1200}
                    className="h-64 w-full rounded-2xl object-cover shadow-[0_20px_50px_rgba(5,7,13,0.5)] sm:h-80 lg:h-96"
                  />
                </Reveal>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Our Story, verbatim from finqalab.com/about, photo mirrored to
            the left for the same alternating rhythm as the reference.
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 py-16">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <GlassCard interactive={false} className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
              <GlowFlourish flip />
              <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal className="lg:order-1 lg:col-span-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about/about-story.webp"
                    alt="A Finqalab team member presenting live PSX data to colleagues"
                    width={1600}
                    height={1200}
                    className="h-64 w-full rounded-2xl object-cover shadow-[0_20px_50px_rgba(5,7,13,0.5)] sm:h-80 lg:h-96"
                  />
                </Reveal>

                <div className="lg:order-2 lg:col-span-5">
                  <Reveal>
                    <p
                      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] text-text-onDark-muted sm:text-[0.8rem]"
                      style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                      Our Story
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-text-onDark sm:text-4xl">
                      Three decades in Pakistan&apos;s capital markets, reimagined for everyone.
                    </h2>
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="mt-6 text-[15px] leading-relaxed text-text-onDark-muted">
                      Najam Ali and Irtaza Ali spent over three decades working inside Pakistan&apos;s
                      capital markets before they set out to build Finqalab. That time taught them
                      a frustrating truth, millions of Pakistanis were watching inflation quietly
                      erode their savings, with no easy way to put that money to work in the stock
                      market instead.
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-text-onDark-muted">
                      So they built the platform they wished had existed for their own families and
                      friends, one that treats investing not as something reserved for a select
                      few, but as something every household in Pakistan can access, understand,
                      and trust.
                    </p>
                  </Reveal>
                </div>
              </div>

              {/* Stat callout pulled out of the narrow text column and given
                  the full panel width, stacked under two paragraphs in a
                  5/12-wide column it read as just more text with a border;
                  as its own horizontal band it reads as the distinct,
                  intentional highlight it's meant to be. */}
                  <Reveal delay={180} className="relative mt-10 lg:mt-14">
                <div
                className="flex flex-col items-start gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
                  style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)" }}
                >
                <p className="shrink-0 text-4xl font-semibold text-text-onDark sm:text-5xl">
                    40,000%
                  </p>
                  <p className="text-[15px] leading-relaxed text-text-onDark-muted sm:border-l sm:pl-8" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
                    The return everyday name stocks (Sazgar Engineering, Colgate Palmolive, Meezan
                    Bank, Unilever Foods, and others) have yielded over the last 20 years, which
                    Pakistani households have largely missed. Despite the cyclical ups and downs
                    along the way, Pakistani equities have proven remarkably resilient over time,
                    and Finqalab exists to help every household in the country take part in that
                    resilience and opportunity, and build a stronger financial future together.
                  </p>
                </div>
              </Reveal>
            </GlassCard>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Meet the Team
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 pt-8 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-5xl">
                Meet The Team
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-text-onDark-muted">
                Three decades of experience navigating Pakistan&apos;s capital markets, now building
                the platform we wished we&apos;d had.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={(i % 4) * 90}>
                  <GlassCard className="overflow-hidden p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      width={800}
                      height={1067}
                      className="aspect-[3/4] w-full rounded-xl object-cover"
                    />
                    <div className="px-1 pb-1 pt-4">
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-primary-light">
                        {member.tag}
                      </p>
                      <p className="mt-1.5 text-base font-semibold leading-tight text-text-onDark">
                        {member.name}
                      </p>
                      <p className="mt-0.5 text-sm text-text-onDark-muted">{member.title}</p>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Regulated & Trusted, the same real compliance facts already
            established on /stocks and /sukuks, not new claims.
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-6 pb-24 sm:pb-28">
          <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)]">
            <GlassCard interactive={false} className="p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
                      Regulated. Licensed. Publicly listed.
                    </h2>
                  </Reveal>

                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                    {[
                      { value: "Nationwide", label: "Accessible from anywhere in Pakistan" },
                      { value: "2 Years", label: "Strong and growing" },
                      { value: "NEXT", label: "Publicly listed on PSX" },
                      { value: "Karachi", label: "Where we're based" },
                    ].map((fact, i) => (
                      <Reveal key={fact.label} delay={i * 90}>
                        <p className="text-xl font-semibold text-text-onDark sm:text-2xl">
                          {fact.value}
                        </p>
                        <p className="mt-1 text-sm text-text-onDark-muted">{fact.label}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={100}>
                    <p className="max-w-[62ch] text-[15px] leading-relaxed text-text-onDark-muted">
                      Finqalab is a subsidiary of Next Capital Limited, a licensed brokerage firm and
                      member of the Pakistan Stock Exchange, operating out of Karachi, Pakistan. Next
                      Capital Limited is regulated by the Securities and Exchange Commission of
                      Pakistan (SECP), and is itself a publicly listed entity on the Pakistan Stock
                      Exchange, trading under the ticker NEXT. The same market discipline and
                      oversight our team has operated under for three decades now stands behind
                      every account Finqalab opens.
                    </p>
                  </Reveal>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <FlowFAQSection title="Frequently asked questions" faqs={faqs} />

        <FlowClosingCTA />
      </main>

      <Footer />
    </>
  );
}
