import Reveal from "./Reveal";

const faqs = [
  {
    q: "Is Finqalab safe and regulated?",
    a: "Yes. Finqalab operates through Next Capital, a PSX-listed brokerage regulated by the Securities and Exchange Commission of Pakistan (SECP) and holding TREC #048. Finqalab is 60% owned by Next Capital, so every trade runs through an established, licensed brokerage.",
  },
  {
    q: "What can I invest in on Finqalab?",
    a: "Finqalab currently offers PSX-listed stocks and ETFs, with gold trading coming soon through a partnership with the Pakistan Mercantile Exchange (PMEX). More asset classes, including fixed income, mutual funds, insurance and digital lending, are planned as the platform grows.",
  },
  {
    q: "Do I need experience to start investing with Finqalab?",
    a: "No. Finqalab's account opening and trading process is built for new and experienced investors alike, with a fully digital sign-up, in-app educational content, and a free investor community to help you learn as you go.",
  },
  {
    q: "How do I open an account with Finqalab?",
    a: "Account opening is fully digital. You'll need a valid CNIC and a Pakistani bank account. Complete the application in the app, and once verified, fund your account and start trading PSX stocks and ETFs.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  return (
    <section id="faqs" className="relative px-6 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold text-text-onDark sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 divide-y divide-border-onDark border-y border-border-onDark">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-text-onDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-text-onDark-muted transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-onDark-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
