import FeatureIcon from "./FeatureIcons";
import type { FeatureScene } from "@/lib/wealthManagementFeatures";

const toneStyles = {
  up: { dot: "bg-success", text: "text-success" },
  down: { dot: "bg-danger", text: "text-danger" },
  neutral: { dot: "bg-primary", text: "text-primary" },
} as const;

function TrendIcon({ tone }: { tone: "up" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {tone === "up" ? <path d="M5 16 L11 10 L15 14 L19 7" /> : <path d="M5 8 L11 14 L15 10 L19 17" />}
    </svg>
  );
}

function ChatScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "chat" }>; dark?: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      <div className="flex items-start gap-2">
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
            dark ? "bg-white/10 text-text-onDark-muted" : "bg-text-onLight-muted/15 text-text-onLight-muted"
          }`}
        >
          <FeatureIcon name={scene.icon} className="h-3.5 w-3.5" />
        </span>
        <span
          className={`max-w-[80%] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] leading-snug ${
            dark ? "bg-white/10 text-text-onDark" : "bg-bg-light-soft text-text-onLight"
          }`}
        >
          {scene.prompt}
        </span>
      </div>
      <div className="flex items-start justify-end gap-2">
        <span className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-[11px] leading-snug text-onPrimary">
          {scene.reply}
        </span>
      </div>
    </div>
  );
}

function ListScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "list" }>; dark?: boolean }) {
  return (
    <ul className="flex h-full flex-col justify-center gap-3">
      {scene.rows.map((row) => {
        const tone = toneStyles[row.tone];
        return (
          <li key={row.label} className="flex items-center justify-between gap-3">
            <span
              className={`flex min-w-0 items-center gap-2 truncate text-[11px] font-medium ${
                dark ? "text-text-onDark" : "text-text-onLight"
              }`}
            >
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`} />
              <span className="truncate">{row.label}</span>
            </span>
            {row.tone === "neutral" ? (
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-primary ${
                  dark ? "bg-primary/20" : "bg-primary/10"
                }`}
              >
                {row.value}
              </span>
            ) : (
              <span className={`flex shrink-0 items-center gap-1 text-[11px] font-semibold ${tone.text}`}>
                <TrendIcon tone={row.tone as "up" | "down"} />
                {row.value}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ChecklistScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "checklist" }>; dark?: boolean }) {
  return (
    <ul className="flex h-full flex-col justify-center gap-3">
      {scene.items.map((item, i) => (
        <li
          key={item}
          className={`flex items-center gap-2.5 text-[11px] font-medium ${dark ? "text-text-onDark" : "text-text-onLight"}`}
        >
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              i === 0
                ? "bg-success/15 text-success"
                : dark
                  ? "bg-white/10 text-text-onDark-muted"
                  : "bg-text-onLight-muted/12 text-text-onLight-muted"
            }`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13 L9 17 L19 7" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function BellScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "bell" }>; dark?: boolean }) {
  const muted = dark ? "text-text-onDark-muted" : "text-text-onLight-muted";
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center gap-2">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary/12 text-primary">
          <FeatureIcon name="bellSlider" className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-danger" />
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-wide ${muted}`}>Alerts</span>
      </div>
      <ul className="flex flex-col gap-2">
        {scene.items.map((item) => (
          <li
            key={item.label}
            className={`flex items-center justify-between gap-2 text-[11px] ${dark ? "text-text-onDark" : "text-text-onLight"}`}
          >
            <span className="truncate">{item.label}</span>
            <span className={`shrink-0 text-[10px] ${muted}`}>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BadgeScene({ scene }: { scene: Extract<FeatureScene, { type: "badge" }> }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 text-center">
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full text-primary"
        style={{ background: "radial-gradient(circle, rgba(147,51,234,0.16) 0%, rgba(147,51,234,0) 72%)" }}
      >
        <FeatureIcon name={scene.icon} className="h-8 w-8" />
      </span>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
        {scene.label}
      </span>
    </div>
  );
}

function AvatarScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "avatars" }>; dark?: boolean }) {
  const colors = ["#9333ea", "#3fd6c4", "#a855f7", "#7e22ce", "#1f9c8c"];
  // Ring color matches each panel's own base, not a fixed white — the ring's
  // job is to separate overlapping avatars from what's behind them, so it
  // has to be the panel's color, not the opposite of it.
  const ring = dark ? "border-bg-black" : "border-white";
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex items-center">
        {Array.from({ length: scene.count }).map((_, i) => (
          <span
            key={i}
            className={`-ml-2.5 flex h-8 w-8 items-center justify-center rounded-full border-2 first:ml-0 ${ring}`}
            style={{ backgroundColor: colors[i % colors.length] }}
          />
        ))}
        <span
          className={`-ml-2.5 flex h-8 w-8 items-center justify-center rounded-full border-2 text-[9px] font-bold ${ring} ${
            dark ? "bg-white/10 text-text-onDark" : "bg-bg-light-soft text-text-onLight"
          }`}
        >
          {scene.extra}
        </span>
      </div>
      <span className={`text-[10px] font-medium ${dark ? "text-text-onDark-muted" : "text-text-onLight-muted"}`}>
        Investors nearby
      </span>
    </div>
  );
}

function PieScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "pie" }>; dark?: boolean }) {
  const colorFor = { primary: "#9333ea", teal: "#3fd6c4", muted: "#d8d3e5" } as const;
  const cumulative = scene.segments.reduce<number[]>(
    (acc, s) => [...acc, (acc[acc.length - 1] ?? 0) + s.value],
    []
  );
  const stops = scene.segments
    .map((s, i) => `${colorFor[s.tone]} ${i === 0 ? 0 : cumulative[i - 1]}% ${cumulative[i]}%`)
    .join(", ");

  return (
    <div className="flex h-full items-center gap-4">
      <div
        className="h-16 w-16 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(${stops})`,
          mask: "radial-gradient(farthest-side, transparent calc(100% - 9px), black calc(100% - 8px))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 9px), black calc(100% - 8px))",
        }}
      />
      <ul className="flex flex-1 flex-col gap-1.5">
        {scene.segments.map((s) => (
          <li
            key={s.label}
            className={`flex items-center justify-between gap-2 text-[11px] ${dark ? "text-text-onDark" : "text-text-onLight"}`}
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: colorFor[s.tone] }} />
              {s.label}
            </span>
            <span className={`font-semibold ${dark ? "text-text-onDark-muted" : "text-text-onLight-muted"}`}>
              {s.value}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChartScene({ dark }: { dark?: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] font-semibold uppercase tracking-wide ${
            dark ? "text-text-onDark-muted" : "text-text-onLight-muted"
          }`}
        >
          This month
        </span>
        <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">+3.2%</span>
      </div>
      <svg viewBox="0 0 200 60" className="mt-2 h-14 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="scenesAreaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 46 C 24 40, 36 52, 50 46 S 76 24, 100 28 S 136 10, 200 6 L200 60 L0 60 Z"
          fill="url(#scenesAreaFill)"
        />
        <path
          d="M0 46 C 24 40, 36 52, 50 46 S 76 24, 100 28 S 136 10, 200 6"
          fill="none"
          stroke="#9333ea"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function WalletScene({ scene, dark }: { scene: Extract<FeatureScene, { type: "wallet" }>; dark?: boolean }) {
  const muted = dark ? "text-text-onDark-muted" : "text-text-onLight-muted";
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex w-full items-center justify-between gap-2">
        <div className={`flex-1 rounded-xl px-3 py-2.5 text-center ${dark ? "bg-white/10" : "bg-bg-light-soft"}`}>
          <p className={`text-[10px] font-medium ${muted}`}>{scene.from}</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent-teal" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <div className="flex-1 rounded-xl bg-primary/10 px-3 py-2.5 text-center">
          <p className="text-[10px] font-semibold text-primary">{scene.to}</p>
        </div>
      </div>
      <span className={`text-[10px] font-medium ${muted}`}>Instant via Raast</span>
    </div>
  );
}

export default function FeatureSceneView({ scene, dark }: { scene: FeatureScene; dark?: boolean }) {
  switch (scene.type) {
    case "chat":
      return <ChatScene scene={scene} dark={dark} />;
    case "list":
      return <ListScene scene={scene} dark={dark} />;
    case "checklist":
      return <ChecklistScene scene={scene} dark={dark} />;
    case "bell":
      return <BellScene scene={scene} dark={dark} />;
    case "badge":
      return <BadgeScene scene={scene} />;
    case "avatars":
      return <AvatarScene scene={scene} dark={dark} />;
    case "pie":
      return <PieScene scene={scene} dark={dark} />;
    case "chart":
      return <ChartScene dark={dark} />;
    case "wallet":
      return <WalletScene scene={scene} dark={dark} />;
    default:
      return null;
  }
}
