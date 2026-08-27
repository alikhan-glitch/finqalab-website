import FeatureIcon from "./FeatureIcons";
import type { Feature } from "@/lib/features";

const cardClasses: Record<Feature["accent"], { bg: string; text: string; sub: string; iconColor: string }> = {
  primary: {
    bg: "bg-gradient-to-br from-primary-light to-primary-strong",
    text: "text-onPrimary",
    sub: "text-onPrimary/80",
    iconColor: "text-primary",
  },
  teal: {
    bg: "bg-gradient-to-br from-accent-teal to-[#1f9c8c]",
    text: "text-text-onLight",
    sub: "text-text-onLight/70",
    iconColor: "text-accent-teal",
  },
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  const c = cardClasses[feature.accent];
  return (
    <div
      className={`flex w-[280px] shrink-0 flex-col gap-6 rounded-3xl p-7 sm:w-[320px] sm:p-8 ${c.bg}`}
      style={{ scrollSnapAlign: "start" }}
    >
      <h3 className={`font-heading text-xl font-bold uppercase leading-tight tracking-tight ${c.text}`}>
        {feature.title}
      </h3>

      <div className="flex flex-1 items-center justify-center rounded-2xl bg-white/95 p-8">
        <FeatureIcon name={feature.icon} className={`h-16 w-16 sm:h-20 sm:w-20 ${c.iconColor}`} />
      </div>

      <div>
        <p className={`text-sm leading-relaxed ${c.sub}`}>{feature.description}</p>
        <a href="#" className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}`}>
          Learn more
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
