import Link from "next/link";
import PillButton from "../PillButton";
import { columns, legalParagraphs } from "../Footer";

// Dark-theme fork of <AcademyFooter/>, used only on /academy-dark. Reuses
// the same shared link/legal copy from Footer.tsx as the light footer, so
// compliance wording can't drift between the three footers on the site.

const linkFocus =
  "rounded-sm transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black";

export default function AcademyFooterDark() {
  return (
    <footer className="border-t border-white/40 bg-bg-black text-text-onDark">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-16 sm:px-10 lg:py-20">
          <Link
            href="/"
            className="inline-block rounded-sm font-serif text-4xl font-bold leading-none tracking-tight text-text-onDark transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black sm:text-5xl lg:text-[3.75rem]"
          >
            Finqalab
          </Link>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="font-sans text-sm font-semibold text-text-onDark">{col.heading}</p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-text-onDark-muted">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className={linkFocus}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <PillButton href="#" variant="primary">
              Get Support
            </PillButton>
          </div>

          <div className="mt-12 max-w-xl space-y-3 border-t border-white/24 pt-8 text-xs leading-relaxed text-text-onDark-muted">
            <p className="font-semibold text-text-onDark">All investing involves risk.</p>
            {legalParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="pt-2 text-text-onDark-muted/70">
              Finqalab, Karachi, Pakistan. © 2026 Finqalab. All rights reserved.
            </p>
          </div>
        </div>

        <div className="hidden border-l border-white/40 lg:block">
          <div className="aspect-square w-full">
            {/* Plain <img>, matching this codebase's convention of not routing
                local images through next/image (see Navbar.tsx). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/academy-footer-team.webp"
              alt="The Finqalab team reviewing live market data together"
              width={1800}
              height={1350}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
