// Recolors a flat black-on-transparent icon PNG to match its parent's text
// color, via CSS mask rather than an <img> — the same "currentColor" trick
// <FeatureIcon/>'s inline SVGs get for free, needed here because these
// client-supplied icons are raster art, not vectors we can restyle directly.
export default function MaskIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
