import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const items = [
  {
    caption:
      "Regulated by the SECP, PSX, NCCPL, and CDC, with every trade settling through licensed infrastructure.",
    icon: "/icons/trust-1.png",
  },
  {
    caption:
      "Your shares are held in your name in a CDC sub-account, never commingled with company funds.",
    icon: "/icons/trust-2.png",
  },
  {
    caption:
      "Backed by Next Capital Limited, a PSX-listed broker (ticker: NEXT) holding TREC #048.",
    icon: "/icons/trust-3.png",
  },
  {
    caption: "Have a question? Our support team is here to help, every step of the way.",
    icon: "/icons/trust-4.png",
  },
];

export default function TrustGrid() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(147,51,234,0.16) 0%, rgba(5,7,13,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 100%, rgba(63,214,196,0.14) 0%, rgba(5,7,13,0) 70%)",
        }}
      />

      <div className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-4xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-6xl">
            Built on trust
          </h2>
        </Reveal>

        {/* Glass panels rather than the previous bare icon + caption columns,
            to match the card treatment used across the rest of the site. The
            icons themselves (masked PNGs, tinted with the brand violet) are
            unchanged, just sized down to sit inside a card. */}
        {/* auto-rows-fr so both rows match height — without it each row sizes
            to its own longest caption and the 2x2 reads as uneven. */}
            <div className="mx-auto mt-14 grid max-w-4xl auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.caption} delay={i * 60} className="h-full">
              <GlassCard className="flex h-full flex-col items-center p-7 text-center sm:p-8">
                <div
                className="h-24 w-24 bg-primary-light sm:h-28 sm:w-28"
                  style={{
                    maskImage: `url(${item.icon})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${item.icon})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                  aria-hidden="true"
                />
                <p className="mt-5 max-w-[20rem] text-[0.95rem] leading-relaxed text-text-onDark-muted">
                  {item.caption}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
