import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FluidPageBackground from "@/components/FluidPageBackground";
import GlassCard from "@/components/GlassCard";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import CommunityShowcase, { type CommunityScene } from "@/components/CommunityShowcase";
import FlowFAQSection from "@/components/FlowFAQSection";
import FlowClosingCTA from "@/components/FlowClosingCTA";

export const metadata: Metadata = {
  title: "Finqalab Community",
  description:
    "Connect with fellow investors, access expert insights, and join daily market discussions. Free with your Finqalab account.",
};

// Flow-state rebuild of the old standalone /finqalab-circle.html landing
// page: same section order and content, restyled onto the site's shared
// chassis (Navbar/Footer, Fraunces headings, GlassCard panels,
// <FluidPageBackground/>) instead of that page's own hand-rolled nav/footer
// and light "aurora blob" theme.
//
// One deliberate behavior change from the reference: `pointerOnly` on the
// ink canvas. Every other flow-state page uses the default ambient
// orbiting-cursor ink (see <FluidCanvas/>'s driveVirtualPointer), but this
// page was specifically asked to drop that autonomous drift entirely, ink
// should only ever appear where the visitor's own cursor goes.
const ticker = [
  "1,000+ investors",
  "Daily market debates",
  "Juice List picks",
  "Live Fintalk AMAs",
  "Zero-noise forum",
  "Weekly research reports",
  "Free with your account",
];
const TICKER_REPEATS = 3;
const tickerHalf = Array.from({ length: TICKER_REPEATS }, () => ticker).flat();
const tickerTrack = [...tickerHalf, ...tickerHalf];

const showcaseScenes: CommunityScene[] = [
  {
    icon: "certificate",
    accent: "primary",
    eyebrow: "What you get · 01",
    title: "Expert Insights",
    description:
      "Market reports and curated picks from our research desk, including early access to the Juice List.",
  },
  {
    icon: "users",
    accent: "teal",
    eyebrow: "What you get · 02",
    title: "Peer Discussion",
    description:
      "Serious, focused conversation with fellow investors in a dedicated Discussion Forum, built for genuine investing dialogue.",
  },
  {
    icon: "signal",
    accent: "primary",
    eyebrow: "What you get · 03",
    title: "Community Fun",
    description:
      "A space to step away from the market for a bit. Bold opinions, off-topic banter, and the occasional joke are welcome.",
  },
  {
    icon: "pulse",
    accent: "teal",
    eyebrow: "Community highlights",
    title: "Members Weigh In",
    description:
      "Live polls, real debates, and reactions from the community, shaping the conversation every single day.",
  },
];

const stats = [
  { value: "1,000+", label: "Community members" },
  { value: "200+", label: "Discussions every day" },
  { value: "520+", label: "Reports & insights shared" },
  { value: "100%", label: "Free with your account" },
];

const howItWorks = [
  {
    n: "1",
    title: "Download The App",
    body: "Get Finqalab on iOS or Android and open it up. It takes under a minute.",
  },
  {
    n: "2",
    title: "Create Your Account",
    body: "Complete your account setup with a few quick details. That's all it takes to unlock everything.",
  },
  {
    n: "3",
    title: "Instant Community Access",
    body: "Once your account is created, you'll get an email with everything you need to join the community.",
  },
];

const standards = [
  "Honest, thoughtful discussion is always encouraged",
  "Respect comes first, every member, every thread",
  "Active moderation keeps conversations meaningful",
  "A welcoming home for investors of every level",
];

const faqs = [
  {
    q: "Is the Finqalab Community free?",
    a: "Yes, it's included free with your Finqalab account. There's no separate subscription or hidden fee.",
  },
  {
    q: "Who can join?",
    a: "Any Finqalab account holder. Whether you're placing your first trade or you've been investing for years, there's a place for you.",
  },
  {
    q: "How do I get access?",
    a: "Download the app, create your account, and you'll receive an email with everything you need to join the community.",
  },
  {
    q: "What do members talk about?",
    a: "Serious market discussion in the Discussion Forum, expert insights and reports in Announcements, and lighter, off-topic fun in between.",
  },
  {
    q: "Is the community moderated?",
    a: "Yes. Team Finqalab actively moderates to keep conversations meaningful, respectful, and welcoming for investors of every level.",
  },
  {
    q: "Do I need investing experience?",
    a: "Not at all. The community is built so beginners can learn from others while seasoned investors share what they know.",
  },
];

const heading = "font-semibold tracking-tight text-text-onDark";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative flex-1 bg-[#04050c]">
        <FluidPageBackground hueMin={0.75} hueMax={1.03} pointerOnly />

        {/* ---------------------------------------------------------------
            Hero
        --------------------------------------------------------------- */}
        <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-24 text-center sm:px-10">
          <div className="flex w-full max-w-sm flex-col items-center sm:max-w-2xl lg:max-w-4xl">
            <WordReveal
              as="h1"
              text="The Finqalab Community"
              baseDelay={320}
              stagger={85}
              duration={720}
              fromY={26}
              className={`max-w-xs text-[2rem] leading-[1.1] sm:max-w-2xl sm:text-6xl lg:max-w-3xl lg:text-7xl ${heading}`}
            />

            <WordReveal
              as="p"
              text="Built by Finqalab, powered by investor conversations. Connect with fellow investors, trade ideas, and get expert insights, free with your account."
              baseDelay={1150}
              stagger={22}
              duration={600}
              fromY={14}
              className="mt-4 max-w-xs text-base leading-relaxed text-text-onDark-muted sm:mt-5 sm:max-w-2xl sm:text-lg lg:max-w-2xl lg:text-xl"
            />

            <Reveal delay={1450} className="mt-7 sm:mt-10">
              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <PillButton href="https://finqalab.com/download/" variant="solidWhite" className="px-7 py-3.5 text-[0.95rem]">
                  Download the App
                </PillButton>
                <PillButton href="#showcase" variant="outlineDark" className="px-7 py-3.5 text-[0.95rem]">
                  See what&apos;s inside
                </PillButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Ticker
        --------------------------------------------------------------- */}
        <section aria-label="Inside the Finqalab Community" className="relative z-10 overflow-hidden border-y" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          <div
            aria-hidden="true"
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            }}
          >
            <div className="flex w-max animate-[marquee_45s_linear_infinite] items-center py-3 motion-reduce:animate-none">
              {tickerTrack.map((item, i) => (
                <span key={i} className="flex items-center whitespace-nowrap text-sm text-text-onDark-muted">
                  {item}
                  <span aria-hidden="true" className="mx-10 text-primary-light/60 sm:mx-16">
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
          <ul className="sr-only">
            {ticker.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------------
            Showcase — "One app. Every conversation."
        --------------------------------------------------------------- */}
        <section id="showcase" className="relative z-10 scroll-mt-20 px-5 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-center text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
                Inside the community
              </p>
              <h2 className={`mt-4 text-balance text-center text-3xl leading-[1.1] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                One app. Every conversation.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-center text-[1.02rem] leading-relaxed text-text-onDark-muted">
                Scroll through the spaces that make up the Finqalab Community, insights, debate, and the fun in between.
              </p>
            </Reveal>

            <div className="mt-14">
              <CommunityShowcase scenes={showcaseScenes} />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Stats
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-20 sm:px-10 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <GlassCard interactive={false} className="p-6 sm:p-10">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className={`text-[2rem] sm:text-[2.6rem] ${heading}`}>{s.value}</div>
                      <div className="mt-1.5 text-[0.82rem] leading-tight text-text-onDark-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            How it works
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-20 sm:px-10 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-center text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
                How it works
              </p>
              <h2 className={`mt-4 text-balance text-center text-3xl leading-[1.1] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                Getting started is simple.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-center text-[1.02rem] leading-relaxed text-text-onDark-muted">
                Three steps and you&apos;re in. No invite codes, no waitlist, your community comes bundled with your account.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {howItWorks.map((step, i) => (
                <Reveal key={step.n} delay={i * 100} className="h-full">
                  <GlassCard interactive={false} className="flex h-full flex-col p-6 sm:p-8">
                    <span className={`font-heading text-sm tabular-nums text-primary-light`}>{step.n}</span>
                    <h3 className="mt-3 text-[1.1rem] font-semibold text-text-onDark">{step.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-[1.55] text-text-onDark-muted">{step.body}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Standards & moderation
        --------------------------------------------------------------- */}
        <section className="relative z-10 px-5 pb-20 sm:px-10 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-7">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
                  Community standards &amp; moderation
                </p>
                <h2 className={`mt-4 max-w-lg text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${heading}`}>
                  A space built on respect and quality.
                </h2>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-text-onDark-muted">
                  Our community thrives because of clear standards. We encourage honest, thoughtful discussion
                  while maintaining respect, and Team Finqalab actively moderates to keep conversations
                  meaningful and welcoming for every investor.
                </p>
                <ul className="mt-6 space-y-3">
                  {standards.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] text-text-onDark-muted">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: "linear-gradient(135deg, #5B0861, #b452ff)" }}
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120} className="flex justify-center lg:col-span-5">
                <div className="relative flex h-52 w-52 items-center justify-center sm:h-64 sm:w-64">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-6 rounded-full border"
                    style={{ borderColor: "rgba(255,255,255,0.18)" }}
                  />
                  <GlassCard interactive={false} className="flex h-28 w-28 items-center justify-center rounded-full sm:h-32 sm:w-32">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-primary-light" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </GlassCard>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            FAQ
        --------------------------------------------------------------- */}
        <FlowFAQSection eyebrow="FAQ" title="Got questions?" faqs={faqs} />

        {/* ---------------------------------------------------------------
            Closing CTA
        --------------------------------------------------------------- */}
        <FlowClosingCTA
          title="Become part of our growing investor community."
          ctaLabel="Download the App"
          ctaHref="https://finqalab.com/download/"
        />
      </main>
      <Footer />
    </>
  );
}
