export type AssetVisualKind = "stocks" | "etfs" | "gold" | "more";

// Visual tiles for the homepage's asset-class cards. All four now use
// supplied photography/renders (see public/images/assets), "More Asset
// Classes" previously fell back to a drawn tile of roadmap chips since it
// had no photo, that's no longer needed now that one's been supplied.
//
// Every tile shares the same chassis: a dark inset panel with a hairline
// edge, sized to the card's full width so it reads as a small product
// surface rather than a decorative glyph.

const PHOTOS: Record<AssetVisualKind, { src: string; alt: string }> = {
  stocks: {
    src: "/images/assets/stocks.webp",
    alt: "A phone showing a live candlestick price chart against market data",
  },
  etfs: {
    src: "/images/assets/etfs.webp",
    alt: "An ETF concept graphic surrounded by linked financial icons",
  },
  gold: { src: "/images/assets/gold.webp", alt: "Stacked rows of gold bullion bars" },
  more: {
    src: "/images/assets/more.webp",
    alt: "An abstract render of layered glass blocks, representing more asset classes on the way",
  },
};

export default function AssetClassVisual({ kind }: { kind: AssetVisualKind }) {
  const photo = PHOTOS[kind];

  return (
    <div
      className="relative h-24 w-full overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(255,255,255,0.10)",
        background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(5,7,13,0.55) 100%)",
      }}
    >
      {/* Plain <img>: already emitted at exactly the size this tile needs,
          so next/image's optimizer adds nothing here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* These are bright/reflective renders dropped onto a near-black
          violet page. The scrim knocks them back so they read as part of
          the card rather than a glowing rectangle, and keeps the title
          below them the brightest thing in the card. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,13,0.30) 0%, rgba(5,7,13,0.18) 45%, rgba(5,7,13,0.72) 100%)",
        }}
      />
    </div>
  );
}
