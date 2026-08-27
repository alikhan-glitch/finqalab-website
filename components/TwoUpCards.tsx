import Reveal from "./Reveal";

const cards = [
  {
    title: "Finbot",
    description:
      "Ask Finqalab's in-app AI assistant about your portfolio, a stock, or how the market's moving, and get a straight answer in plain language, no digging through menus or reports.",
    image: "/images/finbot-bg.webp",
  },
  {
    title: "Custom Alerts",
    description:
      "Set custom price, volume, and news alerts so you never miss a move in the stocks and Sukuks you care about.",
    image: "/images/custom-alerts-bg.webp",
  },
];

export default function TwoUpCards() {
  return (
    <section className="relative z-[10] bg-bg-black px-6 py-16 sm:py-20">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-balance text-center text-4xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-6xl">
          Built for how you invest
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-[1187px] grid-cols-1 gap-8 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 120} className="w-full">
            <div
            className="relative mx-auto w-full max-w-[577px] overflow-hidden rounded-[20px]"
              style={{ aspectRatio: "577 / 801" }}
            >
              {/* Plain <img>, not next/image: Turbopack's static-import
                  decoder fails on this specific WebP's bytes even though
                  every other webp in this project works fine and the
                  runtime /_next/image endpoint can serve it without issue. */}
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(5,7,13,0.85) 0%, rgba(5,7,13,0) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-end px-8 pb-10 text-right sm:px-16 sm:pb-12">
                <h3 className="text-[32px] font-semibold leading-tight text-white sm:text-[40px]">
                  {card.title}
                </h3>
                {/* Fixed min-height, not line-clamp: the two cards' copy
                    wraps to a different number of lines at this width, and
                    since the whole block is bottom-anchored, a shorter
                    description let its card's heading sit lower than the
                    other's — reserving the taller card's height for both
                    keeps "Finbot" and "Custom Alerts" level. */}
                <p className="mt-2 min-h-[6rem] max-w-[450px] text-base text-white">
                  {card.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
