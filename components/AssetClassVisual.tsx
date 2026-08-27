export type AssetVisualKind = "stocks" | "etfs" | "gold" | "more";

// Visual tiles for the homepage's asset-class cards, replacing the small
// line icons those cards used to carry.
//
// Stocks / ETFs / Gold use supplied photography, pre-cropped to this tile's
// wide format (see public/images/assets). "More Asset Classes" has no photo
// to use — it's a roadmap, not a product that exists yet — so it stays a
// drawn tile naming the classes the copy promises, which also keeps it from
// looking like a stock-photo stand-in for something shippable.
//
// Every tile shares the same chassis: a dark inset panel with a hairline
// edge, sized to the card's full width so it reads as a small product
// surface rather than a decorative glyph.

const VIOLET = "#a855f7";
const VIOLET_DEEP = "#7e22ce";
const TEAL = "#3fd6c4";

const PHOTOS: Partial<Record<AssetVisualKind, { src: string; alt: string }>> = {
  stocks: {
    src: "/images/assets/stocks.webp",
    alt: "A phone showing a live candlestick price chart against market data",
  },
  etfs: {
    src: "/images/assets/etfs.webp",
    alt: "An ETF concept graphic surrounded by linked financial icons",
  },
  gold: { src: "/images/assets/gold.webp", alt: "Stacked rows of gold bullion bars" },
};

/* ------------------------------------------------------------------ More */
// Chips naming the asset classes the copy promises are on the way, plus a
// trailing "+" — reads as a roadmap rather than a finished product surface.
const CHIPS = ["Fixed Income", "Mutual Funds", "Insurance"];

function MoreVisual() {
  return (
    <svg
      viewBox="0 0 220 96"
      preserveAspectRatio="xMinYMid meet"
      className="h-full w-full"
      aria-hidden="true"
    >
      {CHIPS.map((label, i) => (
        <g key={label} transform={`translate(16 ${16 + i * 24})`}>
          <rect
            width={i === 0 ? 118 : i === 1 ? 126 : 96}
            height="18"
            rx="9"
            fill="rgba(255,255,255,0.07)"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <circle cx="13" cy="9" r="3.5" fill={i === 0 ? VIOLET : i === 1 ? TEAL : VIOLET_DEEP} />
          <text x="25" y="13" fill="#b9becf" fontSize="9.5" fontFamily="var(--font-onest), sans-serif">
            {label}
          </text>
        </g>
      ))}
      <g transform="translate(160 40)">
        <circle r="17" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
        <path d="M-7 0 H7 M0 -7 V7" stroke={VIOLET} strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function AssetClassVisual({ kind }: { kind: AssetVisualKind }) {
  const photo = PHOTOS[kind];

  return (
    <div
      className="relative h-28 w-full overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(255,255,255,0.10)",
        background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(5,7,13,0.55) 100%)",
      }}
    >
      {photo ? (
        <>
          {/* Plain <img>: already emitted at exactly the size this tile needs,
              so next/image's optimizer adds nothing here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* These are bright blue/gold stock photos dropped onto a near-black
              violet page. The scrim knocks them back so they read as part of
              the card rather than three glowing rectangles, and keeps the
              title below them the brightest thing in the card. */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,7,13,0.30) 0%, rgba(5,7,13,0.18) 45%, rgba(5,7,13,0.72) 100%)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0">
          <MoreVisual />
        </div>
      )}
    </div>
  );
}
