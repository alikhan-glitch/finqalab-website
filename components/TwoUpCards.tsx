import Reveal from "./Reveal";

const cards = [
  {
    title: "Hassle-Free Account Opening",
    description:
      "Go from application to investing without the usual hassle. Complete your account opening digitally, right from the app, and get started investing from wherever you happen to be.",
    image: "/images/open-account-bg.webp",
    objectPosition: "60% 50%",
  },
  {
    title: "A Better Way to Invest",
    description:
      "Our sleek, intuitive UX/UI makes the app easy to navigate, whether you're making your first investment or managing an existing portfolio. Everything sits right where you expect it.",
    image: "/images/seamless-experience-bg.webp",
    objectPosition: "50% 50%",
  },
  {
    title: "Instant Deposits. Quick Withdrawals.",
    description:
      "Put money into your account instantly and withdraw it quickly when you need it. Move funds in and out of Finqalab with minimal friction and full control.",
    image: "/images/instant-deposits-bg.webp",
    objectPosition: "50% 50%",
  },
  {
    title: "An App You Can Trust",
    description:
      "Accurate prices, charts, and portfolio data, presented exactly as they should be. A reliable experience that keeps you focused on your investments, not on the app itself.",
    image: "/images/reliable-app-bg.webp",
    objectPosition: "50% 50%",
  },
];

export default function TwoUpCards() {
  return (
    <section className="relative z-[10] px-6 py-8 sm:py-10">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
          Built for how you invest
        </h2>
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-[1187px] grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 120} className="w-full">
            <div
            className="relative mx-auto w-full max-w-[577px] overflow-hidden rounded-[20px]"
              style={{ aspectRatio: "577 / 460" }}
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
                style={{ objectPosition: card.objectPosition }}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(5,7,13,0.85) 0%, rgba(5,7,13,0) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-end px-6 pb-6 text-right sm:px-10 sm:pb-8">
                <h3 className="text-[26px] font-semibold leading-tight text-white sm:text-[32px]">
                  {card.title}
                </h3>
                {/* Fixed min-height, not line-clamp: the two cards' copy
                    wraps to a different number of lines at this width, and
                    since the whole block is bottom-anchored, a shorter
                    description let its card's heading sit lower than the
                    other's, reserving the taller card's height for both
                    keeps the two cards' titles level. */}
                <p className="mt-2 min-h-[4rem] max-w-[420px] text-[0.95rem] text-white">
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
