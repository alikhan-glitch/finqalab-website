export default function PlaceholderPanel({
  tone = "warm",
  className = "",
}: {
  tone?: "warm" | "cool";
  className?: string;
}) {
  const gradient =
    tone === "warm"
      ? "linear-gradient(135deg, #3a2f22 0%, #14110b 60%)"
      : "linear-gradient(135deg, #1b2a3a 0%, #0b1220 60%)";

  return (
    <div
      className={`flex h-72 items-center justify-center rounded-2xl border border-border-onDark sm:h-96 ${className}`}
      style={{ background: gradient }}
    >
      <span className="font-heading text-sm tracking-wide text-text-onDark-muted">
        Photography placeholder
      </span>
    </div>
  );
}
