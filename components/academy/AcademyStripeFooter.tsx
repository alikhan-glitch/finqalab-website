"use client";

import Link from "next/link";
import SocialIcon, { type SocialIconName } from "./SocialIcons";
import { legalParagraphs } from "../Footer";

// Footer used only on /academy-stripe (and its /academy-stripe/[slug]
// articles) — matches "Finqalab Academy Footer.png", the real site footer,
// rather than the Primer-editorial <AcademyFooter/> used on /academy. Not a
// mockup: logo, link labels, and column structure are the real ones from
// that reference. The disclaimer paragraph is the one exception — the
// reference screenshot's last line is cropped off mid-sentence, so rather
// than guess at compliance wording, this reuses the same complete,
// already-verified legalParagraphs the rest of the site's footers share.

const socials: { name: SocialIconName; label: string }[] = [
  { name: "facebook", label: "Facebook" },
  { name: "x", label: "X" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "instagram", label: "Instagram" },
  { name: "tiktok", label: "TikTok" },
  { name: "youtube", label: "YouTube" },
  { name: "whatsapp", label: "WhatsApp" },
];

const footerColumns = [
  {
    heading: "Important Links",
    links: [
      { label: "Stocks", href: "#" },
      { label: "Sukuks", href: "#" },
      { label: "Download", href: "#" },
    ],
  },
  {
    heading: "Education",
    links: [
      { label: "Glossary", href: "#" },
      { label: "Updates", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
];

const linkFocus =
  "rounded-sm text-primary transition-colors hover:text-primary-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function AcademyStripeFooter() {
  return (
    <footer className="relative border-t border-black/10 bg-white text-text-onLight">
      <div className="mx-auto max-w-[clamp(72rem,86vw,90rem)] px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {/* Plain <img>, matching this codebase's convention of not routing
              local images through next/image (see Navbar.tsx). Reuses the
              same real logo file Navbar uses on dark backgrounds — brightness(0)
              turns its white glyph fully black on transparent, rather than
              maintaining a second logo asset just for colour. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/finqalab-logo-white.webp"
            alt="Finqalab"
            width={628}
            height={162}
            className="h-7 w-auto"
            style={{ filter: "brightness(0)" }}
          />
        </Link>
        <p className="mt-4 max-w-sm text-sm text-text-onLight-muted">
          Invest in stocks and other assets all within one real-time app.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          <div>
            <p className="font-sans text-sm font-semibold text-text-onLight">Follow us</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-black text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-sans text-sm font-semibold text-text-onLight">{col.heading}</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkFocus}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl border-t border-black/10 pt-8">
          <p className="font-sans text-sm font-semibold text-text-onLight-muted">Disclaimer</p>
          <div className="mt-3 space-y-3 text-xs leading-relaxed text-text-onLight-muted">
            <p>
              <strong className="font-semibold text-text-onLight">
                Finqalab is a subsidiary of Next Capital Limited
              </strong>
              , a licensed brokerage firm and member of the Pakistan Stock Exchange, operating out of
              Karachi, Pakistan. Next Capital Limited holds TREC license #048 and is regulated by the
              Securities and Exchange Commission of Pakistan (SECP). Next Capital Limited is also a
              publicly listed entity on the Pakistan Stock Exchange, trading under the ticker NEXT.
            </p>
            {legalParagraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-bg-black text-white shadow-lg transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:bottom-10 sm:right-10"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 15l6-6 6 6" />
        </svg>
      </button>
    </footer>
  );
}
