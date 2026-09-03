import Link from "next/link";
import SocialIcon, { type SocialIconName } from "./academy/SocialIcons";

// Exported so AcademyFooter (a differently-styled light-theme footer used
// only on /academy) can reuse the same link and legal copy rather than a
// forked duplicate that would drift out of sync, the legal paragraphs in
// particular are compliance text, not just filler.
export const columns = [
  {
    heading: "Product",
    links: ["Stocks", "ETFs", "Gold"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Updates"],
  },
  {
    heading: "Learn",
    links: ["Academy"],
  },
  {
    heading: "Legal & Regulatory",
    links: [
      "Terms & Conditions",
      "Risk Disclosures",
      "Privacy Statement",
      "Disclaimer",
    ],
  },
];

export const legalParagraphs = [
  "Finqalab is a subsidiary of Next Capital Limited, a licensed brokerage firm and member of the Pakistan Stock Exchange, operating out of Karachi, Pakistan. Next Capital Limited is regulated by the Securities and Exchange Commission of Pakistan (SECP), and is also a publicly listed entity on the Pakistan Stock Exchange, trading under the ticker NEXT.",
  "All investments involve risk, including the loss of principal. The content of this website does not constitute a recommendation to buy, sell, or hold any security or asset. Past performance does not guarantee future results.",
  "If your complaint has not been properly redressed by us, you may lodge it with the Securities and Exchange Commission of Pakistan (SECP).",
];

const socials: { name: SocialIconName; label: string }[] = [
  { name: "x", label: "X" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "instagram", label: "Instagram" },
  { name: "facebook", label: "Facebook" },
  { name: "youtube", label: "YouTube" },
  { name: "tiktok", label: "TikTok" },
  { name: "reddit", label: "Reddit" },
];

const contact = {
  email: "hello@finqalab.com",
  address:
    "Office 124, 2nd Floor, Imperial Court, Dr Ziauddin Ahmed Rd, opposite Karachi Club, Civil Lines Kashmir Mujahid Colony, Karachi, 75530",
};

const linkFocus =
  "rounded-sm transition-colors hover:text-text-onDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark-muted focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-bg-black px-6 py-16 text-text-onDark-muted">
      <div className="mx-auto max-w-[clamp(72rem,92vw,110rem)]">
        <div className="flex flex-col justify-between gap-8 border-b border-border-onDark pb-12 sm:flex-row sm:items-center">
          <p className="font-heading text-lg font-semibold text-text-onDark">
            Finqalab
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span>Follow us</span>
            {socials.map((s) => (
              <Link
                key={s.name}
                href="#"
                aria-label={s.label}
                className={`flex h-9 w-9 items-center justify-center rounded-full ${linkFocus}`}
              >
                <SocialIcon name={s.name} className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-12 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-heading text-sm font-semibold text-text-onDark">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-4 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className={`inline-block py-1 ${linkFocus}`}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-heading text-sm font-semibold text-text-onDark">Contact</p>
            <ul className="mt-4 flex flex-col gap-4 text-sm">
              <li>
                <Link href={`mailto:${contact.email}`} className={`inline-block py-1 ${linkFocus}`}>
                  {contact.email}
                </Link>
              </li>
              <li className="max-w-[20rem] py-1 leading-relaxed">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 border-t border-border-onDark pt-10 text-xs leading-relaxed">
          <p className="font-semibold text-text-onDark-muted">
            All investing involves risk.
          </p>
          {legalParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pt-4 text-text-onDark-muted/70">
            Finqalab, Karachi, Pakistan. © 2026 Finqalab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
