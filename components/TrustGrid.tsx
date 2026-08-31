import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const items = [
  {
    caption:
      "Regulated by the SECP, PSX, NCCPL, and CDC, with every trade settling through licensed infrastructure.",
    logo: "/images/trust-logos/secp.webp",
    alt: "SECP",
  },
  {
    caption:
      "Your shares are held in your name in a CDC sub-account, never commingled with company funds.",
    logo: "/images/trust-logos/cdc.webp",
    alt: "Central Depository Company",
  },
  {
    caption:
      "Backed by Next Capital Limited, a PSX-listed broker (ticker: NEXT) holding TREC #048.",
    logo: "/images/trust-logos/next-capital.webp",
    alt: "Next Capital Limited",
  },
  {
    caption: "Have a question? Our support team is here to help, every step of the way.",
    logo: "/images/trust-logos/support-team.webp",
    alt: "",
  },
];

export default function TrustGrid() {
  return (
    <section className="relative px-6 py-10 sm:py-14">
      {/* No accent-color glow here anymore: this section and
          <AssetClassesSection/> both sit directly on the shared, page-fixed
          ink canvas (<HomeInkBackground/>) with no opaque background of
          their own, and any section-level tint that fades toward a shared
          edge creates a visible seam/shade mismatch there, since a radial
          gradient is clipped to its own box and can't blend across into the
          next element. Removed rather than re-tuned a third time, the
          canvas underneath is already the uniform background these two
          sections are meant to share. */}
      <div className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
            Built on trust
          </h2>
        </Reveal>

        {/* Glass panels rather than the previous bare icon + caption columns,
            to match the card treatment used across the rest of the site.
            Real institutional logos (SECP, CDC, Next Capital) plus a generic
            mark for support, each on its own white badge so every logo's
            native branding/colors stay intact regardless of which one has a
            transparent background and which doesn't. */}
        {/* auto-rows-fr so both rows match height, without it each row sizes
            to its own longest caption and the 2x2 reads as uneven. */}
            <div className="mx-auto mt-8 grid max-w-4xl auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.caption} delay={i * 60} className="h-full">
              <GlassCard className="flex h-full flex-col items-center p-5 text-center sm:p-6">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white p-2 sm:h-32 sm:w-32 sm:p-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={item.alt}
                    aria-hidden={item.alt === "" ? "true" : undefined}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="mt-3 max-w-[20rem] text-[0.95rem] leading-relaxed text-text-onDark-muted">
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
