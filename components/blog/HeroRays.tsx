const VIEW_W = 1400;
const VIEW_H = 600;
const FOCAL_X = -80;
const FOCAL_Y = 300;
const RAY_COUNT = 52;

function buildRays() {
  const rays: { x1: number; y1: number; x2: number; y2: number; color: string; width: number }[] = [];
  for (let i = 0; i < RAY_COUNT; i++) {
    const t = i / (RAY_COUNT - 1);
    const angleDeg = -60 + t * 120;
    const angle = (angleDeg * Math.PI) / 180;
    const length = 950 + 260 * Math.sin(i * 2.4) + 140 * Math.cos(i * 0.7);
    const x1 = FOCAL_X + 60 * Math.cos(angle);
    const y1 = FOCAL_Y + 60 * Math.sin(angle);
    const x2 = FOCAL_X + length * Math.cos(angle);
    const y2 = FOCAL_Y + length * Math.sin(angle);
    const isAccent = i % 8 === 3;
    const opacity = 0.35 + 0.4 * Math.abs(Math.sin(i * 1.7));
    rays.push({
      x1,
      y1,
      x2,
      y2,
      color: isAccent ? `rgba(156,140,224,${Math.min(opacity + 0.15, 0.9)})` : `rgba(255,255,255,${opacity})`,
      width: i % 5 === 0 ? 2.5 : 1.5,
    });
  }
  return rays;
}

const rays = buildRays();

export default function HeroRays({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="#05070d" />
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={r.color} strokeWidth={r.width} strokeLinecap="round" />
      ))}
      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#hero-rays-vignette)" />
      <defs>
        <radialGradient id="hero-rays-vignette" cx="8%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#05070d" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#05070d" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#05070d" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#05070d" stopOpacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  );
}
