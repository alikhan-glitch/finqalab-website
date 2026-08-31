import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export type FAQItem = { q: string; a: string };

// Flow-state FAQ block, same <details>/<summary> accordion pattern as the
// homepage's <FAQSection/>, but themed to match the product pages (Fraunces
// heading, glass panel, violet eyebrow) and packaged as a reusable component
// with its own JSON-LD, since Stocks/Sukuks/other product pages each need
// their own FAQPage structured data rather than sharing the homepage's.
export default function FlowFAQSection({
  eyebrow,
  title = "Frequently asked questions",
  faqs,
}: {
  eyebrow?: string;
  title?: string;
  faqs: FAQItem[];
}) {
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

  return (
    <section className="relative z-10 px-6 pb-24 sm:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        {eyebrow && (
          <Reveal>
            <p className="inline-flex items-center justify-center gap-2 text-center text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-primary-light">
              <span aria-hidden="true" className="h-px w-5 bg-primary-light"/>
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={eyebrow ? 60 : 0}>
          <h2 className="mt-4 text-balance text-center text-3xl font-semibold leading-[1.05] tracking-tight text-text-onDark sm:text-4xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <GlassCard interactive={false} className="divide-y divide-white/10 p-2 sm:p-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-4 py-5 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-text-onDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black [&::-webkit-details-marker]:hidden">
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
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
