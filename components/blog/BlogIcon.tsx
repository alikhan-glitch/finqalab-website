import type { ComponentType } from "react";

export type IconName =
  | "rocket"
  | "idea"
  | "shape"
  | "thinking"
  | "writing"
  | "stocks"
  | "chart"
  | "calendar"
  | "shield"
  | "scale"
  | "coins"
  | "compass";

const rasterNames = ["rocket", "idea", "shape", "thinking", "writing"] as const;
type RasterName = (typeof rasterNames)[number];

const rasterIcons: Record<RasterName, string> = {
  rocket: "/images/blog/icons/rocket.webp",
  idea: "/images/blog/icons/idea.webp",
  shape: "/images/blog/icons/shape.webp",
  thinking: "/images/blog/icons/thinking.webp",
  writing: "/images/blog/icons/writing.webp",
};

function isRasterName(name: IconName): name is RasterName {
  return (rasterNames as readonly string[]).includes(name);
}

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 16,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M78 420 L78 130" />
      <path {...lineProps} d="M78 420 L440 420" />
      <path {...lineProps} d="M120 360 L210 270 L280 325 L410 165" />
      <path {...lineProps} d="M350 165 L410 165 L410 222" />
      <circle cx="120" cy="360" r="14" fill="currentColor" stroke="none" />
      <circle cx="210" cy="270" r="14" fill="currentColor" stroke="none" />
      <circle cx="280" cy="325" r="14" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <rect x="86" y="110" width="340" height="330" rx="34" {...lineProps} />
      <path {...lineProps} d="M170 68 L170 140" />
      <path {...lineProps} d="M342 68 L342 140" />
      <path {...lineProps} d="M86 210 L426 210" />
      <circle cx="170" cy="290" r="15" fill="currentColor" stroke="none" />
      <circle cx="256" cy="290" r="15" fill="currentColor" stroke="none" />
      <circle cx="170" cy="360" r="15" fill="currentColor" stroke="none" />
      <circle cx="256" cy="360" r="15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
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

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <path {...lineProps} d="M256 78 L256 430" />
      <path {...lineProps} d="M150 445 L362 445" />
      <path {...lineProps} d="M100 140 L412 140" />
      <path {...lineProps} d="M70 150 L60 230" />
      <path {...lineProps} d="M130 150 L140 230" />
      <path {...lineProps} d="M60 230 Q100 280 140 230" />
      <path {...lineProps} d="M382 150 L372 230" />
      <path {...lineProps} d="M442 150 L452 230" />
      <path {...lineProps} d="M372 230 Q412 280 452 230" />
    </svg>
  );
}

function CoinsIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <ellipse cx="256" cy="370" rx="150" ry="52" {...lineProps} />
      <ellipse cx="256" cy="300" rx="150" ry="52" {...lineProps} />
      <ellipse cx="256" cy="230" rx="150" ry="52" {...lineProps} />
      <path {...lineProps} d="M226 200 L286 200" />
      <path {...lineProps} d="M256 175 L256 255" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className}>
      <circle cx="256" cy="256" r="185" {...lineProps} />
      <path {...lineProps} d="M256 50 L256 90" />
      <path {...lineProps} d="M256 422 L256 462" />
      <path {...lineProps} d="M50 256 L90 256" />
      <path {...lineProps} d="M422 256 L462 256" />
      <path {...lineProps} d="M310 202 L282 282 L202 310 L230 230 Z" />
      <circle cx="256" cy="256" r="14" fill="currentColor" stroke="none" />
    </svg>
  );
}

function StocksIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 640"
      className={className}
    >
      <path
        fill="currentColor"
        d="M215.15,431.39c7.26,0,13.15,5.9,13.15,13.15c0,7.29-5.9,13.18-13.15,13.18c-7.29,0-13.18-5.9-13.18-13.18  C201.97,437.29,207.87,431.39,215.15,431.39L215.15,431.39z M268.93,334.51c0-5.24,7.99-5.24,7.99,0V377c0,5.27-7.99,5.27-7.99,0  V334.51z M306.06,304.86c0-5.27,7.99-5.27,7.99,0V377c0,5.27-7.99,5.27-7.99,0V304.86z M343.22,275.63c0-5.27,7.99-5.27,7.99,0V377  c0,5.27-7.99,5.27-7.99,0V275.63z M392.32,71.93c45.27,1.73,81.44,38.98,81.44,84.67s-36.17,82.94-81.44,84.7v198.96  c0,21-17.15,38.18-38.15,38.18H76.14c-21,0-38.18-17.18-38.18-38.18V71.17c0-21,17.18-38.18,38.18-38.18h278.02  c21,0,38.15,17.18,38.15,38.18V71.93z M384.33,241.25c-44.65-2.41-80.11-39.4-80.11-84.64c0-25.99,11.71-49.27,30.16-64.8H45.98  v318.98h338.34V241.25z M345.58,83.78c11.45-6.83,24.63-11.03,38.75-11.79v-0.82c0-16.61-13.58-30.19-30.16-30.19H76.14  c-16.58,0-30.16,13.58-30.16,30.19v12.61H345.58z M384.98,101.22c0-5.24,8.02-5.24,8.02,0v8.93c12.9,1.59,24.77,11.37,24.77,25.12  c0,5.24-8.02,5.24-8.02,0c0-9.27-8.25-15.68-16.75-17.04v34.64c12.9,1.59,24.77,11.37,24.77,25.12S405.9,201.5,393,203.09v8.9  c0,5.27-8.02,5.27-8.02,0v-8.9c-12.9-1.59-24.77-11.37-24.77-25.11c0-5.27,7.99-5.27,7.99,0c0,9.24,8.28,15.65,16.78,17.04v-34.64  c-12.9-1.59-24.77-11.37-24.77-25.11s11.88-23.53,24.77-25.12V101.22z M393,160.94v34.07c8.5-1.39,16.75-7.8,16.75-17.04  C409.75,168.71,401.5,162.3,393,160.94L393,160.94z M384.98,152.3v-34.07c-8.5,1.36-16.78,7.77-16.78,17.04  C368.2,144.5,376.47,150.91,384.98,152.3L384.98,152.3z M388.97,79.84c-42.38,0-76.76,34.38-76.76,76.76  c0,42.41,34.38,76.76,76.76,76.76c42.41,0,76.76-34.36,76.76-76.76C465.74,114.23,431.38,79.84,388.97,79.84L388.97,79.84z   M110.9,306.7c3.66,0.51,6.92,2.04,9.55,4.22l46.8-27.27c-1.25-3.43-1.7-7.23-1.19-11.11c1.76-12.67,13.46-21.51,26.11-19.76  c5.87,0.79,10.91,3.74,14.48,7.94l39.32-22.9c-1.81-4.54-2.49-9.55-1.79-14.71c2.18-15.85,16.84-26.93,32.68-24.75  c15.85,2.18,26.93,16.84,24.75,32.68c-2.18,15.85-16.84,26.93-32.68,24.75c-7.85-1.08-14.51-5.22-18.99-11.06l-39.26,22.88  c1.3,3.49,1.79,7.31,1.25,11.25c-1.73,12.67-13.44,21.52-26.08,19.76c-5.92-0.79-11.03-3.8-14.6-8.05l-45.84,26.7  c1.56,3.26,2.24,7,1.7,10.86c-0.74,5.19-3.49,9.61-7.37,12.53c-8.36,6.35-20.27,4.68-26.59-3.69c-6.32-8.36-4.68-20.27,3.68-26.59  C100.72,307.44,105.71,305.99,110.9,306.7L110.9,306.7z M275.76,206.27c-11.45-1.59-22.08,6.43-23.67,17.92s6.46,22.11,17.92,23.7  c11.48,1.59,22.11-6.46,23.7-17.94C295.29,218.46,287.24,207.85,275.76,206.27L275.76,206.27z M191.09,260.69  c-8.31-1.16-15.96,4.65-17.12,12.93c-1.13,8.31,4.68,15.96,12.95,17.12c8.28,1.13,15.96-4.68,17.09-12.95  C205.18,269.51,199.36,261.83,191.09,260.69L191.09,260.69z M109.79,314.61c-3-0.4-5.9,0.45-8.14,2.15  c-4.85,3.66-5.81,10.54-2.13,15.39c3.66,4.88,10.57,5.81,15.42,2.13c2.24-1.7,3.83-4.25,4.25-7.26  C120.02,321.01,115.8,315.46,109.79,314.61L109.79,314.61z M202.2,66.49c-5.24,0-5.24-7.99,0-7.99h25.68c5.27,0,5.27,7.99,0,7.99  H202.2z M45.98,418.78v21.49c0,16.58,13.58,30.16,30.16,30.16h278.02c16.58,0,30.16-13.58,30.16-30.16v-21.49H45.98z M215.15,439.39  c-2.86,0-5.16,2.32-5.16,5.16c0,2.86,2.3,5.16,5.16,5.16c2.83,0,5.16-2.3,5.16-5.16C220.31,441.71,217.99,439.39,215.15,439.39  L215.15,439.39z"
      />
    </svg>
  );
}

const vectorIcons: Record<Exclude<IconName, RasterName>, ComponentType<{ className?: string }>> = {
  stocks: StocksIcon,
  chart: ChartIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
  scale: ScaleIcon,
  coins: CoinsIcon,
  compass: CompassIcon,
};

export default function BlogIcon({
  name,
  tone,
  className,
}: {
  name: IconName;
  tone: "light" | "dark";
  className?: string;
}) {
  if (!isRasterName(name)) {
    const VectorIcon = vectorIcons[name];
    return (
      <VectorIcon className={`${className ?? ""} ${tone === "light" ? "text-onPrimary" : "text-text-onLight"}`} />
    );
  }

  return (
    <img
      src={rasterIcons[name]}
      alt=""
      aria-hidden="true"
      className={className}
      style={tone === "light" ? { filter: "brightness(0) invert(1)" } : { filter: "brightness(0)" }}
    />
  );
}
