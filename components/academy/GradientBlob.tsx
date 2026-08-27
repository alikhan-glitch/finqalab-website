// The Stripe-blog reference's atmospheric ribbon behind the floating card:
// a large, blurred, rotated multi-stop gradient rather than a hard-edged
// shape — the blur is what gives it that "soft, flowing graphic, no
// geometric boundary" quality instead of reading as a rotated rectangle.
// Colour stops were pixel-sampled from the reference screenshot rather than
// guessed, so the hue transitions (purple → pink → orange → yellow → cyan)
// land in the same places.
export default function GradientBlob({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  const stops = flip
    ? "#5EB8F5 0%, #8FDEFD 22%, #FAC85E 42%, #F0A868 58%, #D66A94 78%, #9C6ADE 100%"
    : "#9C6ADE 0%, #D66A94 22%, #F0A868 42%, #FAC85E 58%, #8FDEFD 78%, #5EB8F5 100%";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        background: `linear-gradient(${flip ? 116 : -116}deg, ${stops})`,
        filter: "blur(70px)",
        transform: `rotate(${flip ? 8 : -8}deg)`,
      }}
    />
  );
}
