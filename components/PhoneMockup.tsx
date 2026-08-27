import FeatureIcon from "./FeatureIcons";
import type { Feature } from "@/lib/features";

type Slide = Feature & {
  /**
   * Real in-app screenshot to show instead of the generic icon mock. These
   * already carry their own status bar and home indicator (they're actual
   * device captures), so when present it replaces the synthetic chrome
   * below entirely rather than sitting inside it.
   */
  image?: string;
};

export default function PhoneMockup({ slide, className }: { slide: Slide; className?: string }) {
  return (
    <div
      className={`relative w-[240px] shrink-0 sm:w-[264px] ${className ?? ""}`}
      style={{ aspectRatio: "1878 / 3876" }}
    >
      {/* Screen content sits inside the frame's actual screen cutout,
          measured from the source mockup: ~2.9% / 1.0% / 2.5% / 1.1% insets. */}
      <div
        className="absolute overflow-hidden bg-[#0a0c14]"
        style={{
          left: "2.93%",
          top: "1.01%",
          right: "2.5%",
          bottom: "1.08%",
          borderRadius: "12%/6%",
        }}
      >
        {slide.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            className="h-full w-full object-cover object-top animate-[fadeIn_0.5s_ease]"
          />
        ) : (
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center justify-between px-6 pt-8 text-[11px] font-semibold text-white/90 sm:pt-9">
              <span>9:41</span>
              <span className="h-2.5 w-5 rounded-[3px] border border-white/70" />
            </div>

            <div key={slide.title} className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center animate-[fadeIn_0.5s_ease]">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${
                  slide.accent === "primary" ? "bg-primary/20" : "bg-accent-teal/20"
                }`}
              >
                <FeatureIcon
                  name={slide.icon}
                  className={`h-7 w-7 sm:h-9 sm:w-9 ${slide.accent === "primary" ? "text-primary-light" : "text-accent-teal"}`}
                />
              </span>
              <p className="mt-4 font-heading text-base font-semibold text-white sm:text-lg">{slide.title}</p>
              <p className="mt-2 text-[11px] leading-relaxed text-white/60 sm:text-xs">{slide.description}</p>
            </div>

            <div className="flex shrink-0 justify-center pb-3">
              <span className="h-1 w-20 rounded-full bg-white/50" />
            </div>
          </div>
        )}
      </div>

      {/* Plain <img>, not next/image: the optimizer flattens this WebP's
          alpha channel during resize, destroying the transparent screen cutout. */}
      <img
        src="/images/iphone-frame.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
