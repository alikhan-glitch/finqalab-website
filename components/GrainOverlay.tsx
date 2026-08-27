export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage: "url('/images/noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}
