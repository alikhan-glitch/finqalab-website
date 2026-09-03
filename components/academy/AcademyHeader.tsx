"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PillButton from "../PillButton";
import GridMotif from "./GridMotif";
import { navItems } from "../Navbar";

// Light-theme header used only on /academy, matching the reference design's
// minimal wordmark + grid-icon + hamburger pattern, visually distinct from
// the shared dark <Navbar/> used everywhere else on the site.
//
// Unlike Navbar (inline links on desktop, hamburger only below `md`), this
// header has no inline nav at any width, the reference never shows one, even
// at desktop size, so the hamburger drives one shared drawer at every
// breakpoint. It reuses Navbar's own `navItems` so the two headers can never
// drift to different link sets.

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function AcademyHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-50 border-b border-black bg-white"
    >
      <nav className="mx-auto flex max-w-[clamp(72rem,92vw,110rem)] items-center justify-between px-6 py-4 sm:py-5">
        <Link
          href="/"
          className="rounded-sm font-serif text-xl font-bold tracking-tight text-text-onLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-2xl"
        >
          Finqalab Academy.
        </Link>

        <div className="flex items-center gap-4">
          <GridMotif
            cols={3}
            rows={2}
            cells={[
              { col: 2, row: 1, tone: "primaryLight" },
              { col: 1, row: 2, tone: "primary" },
              { col: 2, row: 2, tone: "teal" },
            ]}
            className="hidden h-9 w-14 border-l border-t border-black sm:grid"
          />

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span
              className={`h-0.5 w-6 bg-text-onLight transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-text-onLight transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black bg-white px-6 py-6">
          <ul className="mx-auto flex max-w-[clamp(72rem,92vw,110rem)] flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="border-b border-text-onLight/10 py-1">
                  <button
                    type="button"
                    aria-expanded={openGroup === item.label}
                    onClick={() => setOpenGroup((cur) => (cur === item.label ? null : item.label))}
                    className="flex min-h-11 w-full items-center justify-between text-left font-sans text-base font-medium text-text-onLight"
                  >
                    {item.label}
                    <ChevronIcon open={openGroup === item.label} />
                  </button>
                  {openGroup === item.label && (
                    <ul className="ml-3 flex flex-col gap-1 border-l border-text-onLight/15 pl-3 pb-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-11 items-center text-sm text-text-onLight-muted transition-colors hover:text-text-onLight"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label} className="border-b border-text-onLight/10 py-1">
                  <Link
                    href={item.href!}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center font-sans text-base font-medium text-text-onLight"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="mx-auto mt-5 max-w-[clamp(72rem,92vw,110rem)]">
            <PillButton href="#" variant="solidDark">
              Get Support
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
