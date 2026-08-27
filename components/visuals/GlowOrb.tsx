export default function GlowOrb({
  color = "primary",
  className = "",
}: {
  color?: "primary" | "teal";
  className?: string;
}) {
  const rgb = color === "primary" ? "242,184,75" : "63,214,196";

  return (
    <div
      className={`relative flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-border-onDark bg-black ${className}`}
    >
      <div
        aria-hidden
        className="h-40 w-40 rounded-full blur-2xl"
        style={{ background: `rgba(${rgb}, 0.55)` }}
      />
      <div
        aria-hidden
        className="absolute h-24 w-24 rounded-full border"
        style={{ borderColor: `rgba(${rgb}, 0.4)` }}
      />
    </div>
  );
}
