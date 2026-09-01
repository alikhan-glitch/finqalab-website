import AssetClassVisual, { type AssetVisualKind } from "./AssetClassVisual";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

// The homepage's asset-class overview.
//
// Content is exactly as supplied. Note that Sukuks are not listed here even
// though Finqalab sells them (see /sukuks), that's the supplied copy, not
// an omission
// introduced here.
const assets: {
  visual: AssetVisualKind;
  title: string;
  description: string;
  status?: string;
}[] = [
  {
    visual: "stocks",
    title: "Stocks",
    description:
      "Trade PSX-listed companies in real time, with live prices, order books, and portfolio tracking built right into the app.",
  },
  {
    visual: "etfs",
    title: "ETFs",
    description:
      "Get exposure to a whole sector or index in a single ETF trade, an easy way to diversify without picking stocks one by one.",
  },
  {
    visual: "gold",
    title: "Gold",
    description:
      "Digital gold trading is coming soon through our partnership with the Pakistan Mercantile Exchange (PMEX), right inside the same app.",
    status: "Coming soon",
  },
  {
    visual: "more",
    title: "More Asset Classes",
    description:
      "More asset classes, including fixed income, mutual funds, and insurance, are on the way as Finqalab keeps growing.",
    status: "Coming soon",
  },
];

export default function AssetClassesSection() {
  return (
    <section className="relative px-6 py-10 sm:py-14">
      {/* No accent-color glow here anymore: this section and <TrustGrid/>
          both sit directly on the shared, page-fixed ink canvas
          (<HomeInkBackground/>) with no opaque background of their own, and
          any section-level tint that fades toward a shared edge creates a
          visible seam/shade mismatch there, since a radial gradient is
          clipped to its own box and can't blend across into the next
          element. Removed rather than re-tuned a third time, the canvas
          underneath is already the uniform background these two sections
          are meant to share. */}

      <div className="relative mx-auto max-w-[clamp(60rem,80vw,76rem)]">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
            One app, every asset class you need
          </h2>
        </Reveal>

        {/* 2x2 rather than a 4-up row: the card copy varies a lot in length
            (Gold is one line, ETFs is four), which reads badly as four narrow
            columns. auto-rows-fr keeps both rows matched in height. */}
            <div className="mx-auto mt-8 grid max-w-5xl auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
          {assets.map((asset, i) => (
            <Reveal key={asset.title} delay={i * 120} className="h-full">
              <GlassCard className="flex h-full flex-col p-6 sm:p-7">
                <AssetClassVisual kind={asset.visual} />

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold leading-tight text-text-onDark">
                    {asset.title}
                  </h3>
                  {asset.status && (
                    <span
                    className="rounded-full border px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-accent-teal"
                      style={{
                        borderColor: "rgba(63,214,196,0.35)",
                        background: "rgba(63,214,196,0.10)",
                      }}
                    >
                      {asset.status}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-[0.95rem] leading-relaxed text-text-onDark-muted">
                  {asset.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
