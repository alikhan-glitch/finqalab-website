export default function AbstractChart({ className = "" }: { className?: string }) {
  const bars = [40, 65, 50, 80, 55, 90, 70, 100, 85, 60, 95, 75];

  return (
    <div
      className={`flex h-56 items-end gap-2 rounded-2xl border border-border-onDark bg-bg-navy-soft p-6 ${className}`}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{
            height: `${h}%`,
            background:
              i % 3 === 0
                ? "var(--color-primary)"
                : "rgba(247, 245, 239, 0.18)",
          }}
        />
      ))}
    </div>
  );
}
