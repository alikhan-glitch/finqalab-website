import Link from "next/link";
import PillButton from "../PillButton";
import { columns, legalParagraphs } from "../Footer";

// Light-theme footer used only on /academy, matching the reference design's
// big wordmark + flat link columns + full-height photo layout. Reuses the
// shared <Footer/>'s link and legal copy (see Footer.tsx) rather than a
// forked duplicate — the legal paragraphs are compliance text, not filler,
// and must not drift between the two footers.

const linkFocus =
  "rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function AcademyFooter() {
  return (
    <footer className="border-t border-black bg-white text-text-onLight">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-16 sm:px-10 lg:py-20">
          <Link
            href="/"
            className="inline-block rounded-sm font-serif text-4xl font-bold leading-none tracking-tight text-text-onLight transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-5xl lg:text-[3.75rem]"
          >
            Finqalab
          </Link>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="font-sans text-sm font-semibold text-text-onLight">{col.heading}</p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-text-onLight-muted">
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
            <PillButton href="#" variant="solidDark">
              Get Support
            </PillButton>
          </div>

          <div className="mt-12 max-w-xl space-y-3 border-t border-black/15 pt-8 text-xs leading-relaxed text-text-onLight-muted">
            <p className="font-semibold text-text-onLight">All investing involves risk.</p>
            {legalParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="pt-2 text-text-onLight-muted/70">
              Finqalab, Karachi, Pakistan. © 2026 Finqalab. All rights reserved.
            </p>
          </div>
        </div>

        {/* Matches primer.com/tuition's own footer image treatment: no
            padding, image flush against the column — their photo reads
            "square" only because their whole footer is short; ours runs
            much taller (real compliance text), so the outer column still
            stretches full height for the divider line, but the photo itself
            is pinned to the top at its own square ratio rather than being
            padded down or stretched to fill the extra height. */}
        <div className="hidden border-l border-black lg:block">
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
