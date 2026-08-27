import type { ComponentType } from "react";

export type FeatureIconName =
  | "megaphone"
  | "bolt"
  | "userCheck"
  | "pieChart"
  | "badge"
  | "eye"
  | "bellSlider"
  | "newspaper"
  | "bellChart"
  | "lifeBuoy"
  | "candlestick"
  | "certificate"
  | "signal"
  | "pulse"
  | "shieldCheck"
  | "clipboard"
  | "download"
  | "wallet"
  | "bot"
  | "list"
  | "queue"
  | "users"
  | "coins";

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 15,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Megaphone({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M90 210 L90 302 L150 302 L340 372 L340 140 L150 210 Z" />
      <path {...lineProps} d="M340 190 C384 190 420 222 420 256 C420 290 384 322 340 322" />
      <path {...lineProps} d="M150 302 L150 400 C150 418 168 432 186 428 L214 420 C226 416 232 402 228 390 L204 310" />
      <path {...lineProps} d="M60 226 L60 286" />
    </svg>
  );
}

// Stacked coins — added for the homepage's Gold asset-class card; the set
// had no precious-metal/currency metaphor before it.
function Coins({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <ellipse cx="256" cy="152" rx="130" ry="50" {...lineProps} />
      <path
        {...lineProps}
        d="M126 152 V292 C126 320 184 342 256 342 C328 342 386 320 386 292 V152"
      />
      <path {...lineProps} d="M126 222 C126 250 184 272 256 272 C328 272 386 250 386 222" />
    </svg>
  );
}

function Bolt({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} strokeLinejoin="round" d="M286 60 L146 296 L240 296 L222 452 L378 226 L280 226 Z" />
    </svg>
  );
}

function UserCheck({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="216" cy="176" r="86" {...lineProps} />
      <path {...lineProps} d="M76 440 C76 336 136 284 216 284 C258 284 292 298 316 322" />
      <path {...lineProps} d="M330 350 L372 392 L448 306" />
    </svg>
  );
}

function PieChart({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="256" cy="256" r="180" {...lineProps} />
      <path {...lineProps} d="M256 76 L256 256 L410 340" />
      <path {...lineProps} d="M256 256 L120 340" />
    </svg>
  );
}

function Badge({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="256" cy="200" r="120" {...lineProps} />
      <path {...lineProps} d="M196 305 L150 452 L256 392 L362 452 L316 305" />
      <path {...lineProps} d="M256 130 L276 178 L326 184 L290 218 L300 268 L256 242 L212 268 L222 218 L186 184 L236 178 Z" />
    </svg>
  );
}

function Eye({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M46 256 C110 150 186 116 256 116 C326 116 402 150 466 256 C402 362 326 396 256 396 C186 396 110 362 46 256 Z" />
      <circle cx="256" cy="256" r="64" {...lineProps} />
    </svg>
  );
}

function BellSlider({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M150 300 C150 190 190 120 256 120 C322 120 362 190 362 300 L392 350 L120 350 Z" />
      <path {...lineProps} d="M222 396 C222 416 237 432 256 432 C275 432 290 416 290 396" />
      <path {...lineProps} d="M256 90 L256 120" />
    </svg>
  );
}

function Newspaper({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <rect x="70" y="130" width="300" height="270" rx="18" {...lineProps} />
      <path {...lineProps} d="M370 190 L410 190 C424 190 434 202 434 216 L434 356 C434 380 414 400 390 400 L120 400" />
      <path {...lineProps} d="M116 180 L322 180" />
      <path {...lineProps} d="M116 232 L322 232" />
      <path {...lineProps} d="M116 284 L260 284" />
      <path {...lineProps} d="M116 336 L220 336" />
    </svg>
  );
}

function BellChart({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M120 300 C120 190 165 120 240 120 C315 120 360 190 360 300 L392 350 L88 350 Z" />
      <path {...lineProps} d="M198 396 C198 416 217 432 240 432 C263 432 282 416 282 396" />
      <path {...lineProps} d="M330 250 L370 200 L410 230 L452 160" strokeWidth={16} />
    </svg>
  );
}

function LifeBuoy({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="256" cy="256" r="180" {...lineProps} />
      <circle cx="256" cy="256" r="80" {...lineProps} />
      <path {...lineProps} d="M136 136 L196 196" />
      <path {...lineProps} d="M376 136 L316 196" />
      <path {...lineProps} d="M136 376 L196 316" />
      <path {...lineProps} d="M376 376 L316 316" />
    </svg>
  );
}

function Candlestick({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M180 120 L180 380" />
      <rect x="150" y="200" width="60" height="120" rx="10" {...lineProps} />
      <path {...lineProps} d="M340 80 L340 320" />
      <rect x="310" y="150" width="60" height="100" rx="10" {...lineProps} />
    </svg>
  );
}

function Certificate({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <rect x="120" y="70" width="272" height="220" rx="16" {...lineProps} />
      <path {...lineProps} d="M164 130 L348 130" />
      <path {...lineProps} d="M164 170 L348 170" />
      <path {...lineProps} d="M164 210 L280 210" />
      <circle cx="256" cy="368" r="52" {...lineProps} />
      <path {...lineProps} d="M224 410 L196 468 L256 436 L316 468 L288 410" />
    </svg>
  );
}

function Signal({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="256" cy="392" r="22" fill="currentColor" stroke="none" />
      <path {...lineProps} d="M192 344 C192 306 220 278 256 278 C292 278 320 306 320 344" />
      <path {...lineProps} d="M138 300 C138 226 190 172 256 172 C322 172 374 226 374 300" />
      <path {...lineProps} d="M84 256 C84 148 160 66 256 66 C352 66 428 148 428 256" />
    </svg>
  );
}

function Pulse({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M50 256 L160 256 L200 140 L256 372 L306 190 L344 256 L462 256" />
    </svg>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path
        {...lineProps}
        d="M256 58 L392 108 L392 250 C392 358 330 420 256 452 C182 420 120 358 120 250 L120 108 Z"
      />
      <path {...lineProps} d="M190 258 L235 305 L332 195" />
    </svg>
  );
}

function Clipboard({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <rect x="130" y="100" width="252" height="330" rx="20" {...lineProps} />
      <rect x="196" y="70" width="120" height="50" rx="16" {...lineProps} />
      <circle cx="180" cy="210" r="12" {...lineProps} />
      <path {...lineProps} d="M172 210 L178 218 L192 200" strokeWidth={10} />
      <path {...lineProps} d="M216 210 L340 210" />
      <circle cx="180" cy="280" r="12" {...lineProps} />
      <path {...lineProps} d="M172 280 L178 288 L192 270" strokeWidth={10} />
      <path {...lineProps} d="M216 280 L340 280" />
      <path {...lineProps} d="M170 350 L340 350" />
    </svg>
  );
}

function Download({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M256 70 L256 320" />
      <path {...lineProps} d="M156 230 L256 330 L356 230" />
      <path {...lineProps} d="M96 380 L96 420 C96 431 105 440 116 440 L396 440 C407 440 416 431 416 420 L416 380" />
    </svg>
  );
}

function Wallet({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M86 160 C86 138 104 120 126 120 L376 120 C398 120 416 138 416 160 L416 370 C416 392 398 410 376 410 L126 410 C104 410 86 392 86 370 Z" />
      <path {...lineProps} d="M86 200 L340 200 C362 200 380 218 380 240 L380 270 C380 292 362 310 340 310 L86 310" />
      <circle cx="330" cy="255" r="16" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Bot({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <rect x="106" y="170" width="300" height="230" rx="40" {...lineProps} />
      <path {...lineProps} d="M256 170 L256 110" />
      <circle cx="256" cy="86" r="24" {...lineProps} />
      <circle cx="196" cy="280" r="18" fill="currentColor" stroke="none" />
      <circle cx="316" cy="280" r="18" fill="currentColor" stroke="none" />
      <path {...lineProps} d="M196 345 L316 345" />
      <path {...lineProps} d="M70 230 L106 230 L106 300 L70 300" />
      <path {...lineProps} d="M442 230 L406 230 L406 300 L442 300" />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="100" cy="140" r="20" fill="currentColor" stroke="none" />
      <circle cx="100" cy="256" r="20" fill="currentColor" stroke="none" />
      <circle cx="100" cy="372" r="20" fill="currentColor" stroke="none" />
      <path {...lineProps} d="M180 140 L442 140" />
      <path {...lineProps} d="M180 256 L442 256" />
      <path {...lineProps} d="M180 372 L442 372" />
    </svg>
  );
}

function Queue({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <rect x="70" y="100" width="372" height="70" rx="18" {...lineProps} />
      <rect x="70" y="221" width="300" height="70" rx="18" {...lineProps} />
      <rect x="70" y="342" width="228" height="70" rx="18" {...lineProps} />
    </svg>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="190" cy="180" r="80" {...lineProps} />
      <path {...lineProps} d="M60 420 C60 320 116 270 190 270 C264 270 320 320 320 420" />
      <circle cx="345" cy="200" r="60" {...lineProps} />
      <path {...lineProps} d="M330 270 C395 270 452 315 452 400" />
    </svg>
  );
}

const icons: Record<FeatureIconName, ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  bolt: Bolt,
  userCheck: UserCheck,
  pieChart: PieChart,
  badge: Badge,
  eye: Eye,
  bellSlider: BellSlider,
  newspaper: Newspaper,
  bellChart: BellChart,
  lifeBuoy: LifeBuoy,
  candlestick: Candlestick,
  certificate: Certificate,
  signal: Signal,
  pulse: Pulse,
  shieldCheck: ShieldCheck,
  clipboard: Clipboard,
  download: Download,
  wallet: Wallet,
  bot: Bot,
  list: ListIcon,
  queue: Queue,
  users: Users,
  coins: Coins,
};

export default function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
