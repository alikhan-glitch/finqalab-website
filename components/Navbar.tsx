"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PillButton from "./PillButton";

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

// Exported so AcademyHeader (a differently-styled header used only on
// /academy) can drive its own menu off the same list rather than a forked
// copy that would drift out of sync.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Investments",
    children: [
      { label: "Stocks", href: "/stocks" },
      { label: "ETF", href: "/etf" },
      { label: "Gold", href: "/gold" },
    ],
  },
  // Wealth Management is now the site's single main feature page, a direct
  // link, not a dropdown with one child. The old listing page (/features)
  // still exists on disk but is no longer linked from navigation.
  { label: "Features", href: "/features/wealth-management" },
  // The original /academy and /blog designs still exist on disk but are no
  // longer linked from navigation, the flow-state versions are now the only
  // ones surfaced here.
  {
    label: "Learn",
    children: [
      { label: "Academy", href: "/academy-flow" },
      { label: "Glossary", href: "/glossary" },
      { label: "Blog", href: "/blog-flow" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Updates", href: "/updates" },
    ],
  },
  { label: "Calculator", href: "/investment-calculator" },
];

const navLinkClasses =
  "relative z-10 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black";

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

// A dropdown's trigger label lights up when the current page is one of its
// children, e.g. "Investments" stays highlighted while browsing /stocks.
function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.href) return item.href === pathname;
  return item.children?.some((child) => child.href === pathname) ?? false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pillListRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
  const [glow, setGlow] = useState({ left: 0, width: 0, visible: false });

  // The label currently "lit up": whatever's hovered takes priority, falling
  // back to an open dropdown so the glow stays put on it while you're
  // browsing the menu rather than snapping off the moment the pointer
  // leaves the trigger.
  const activeLabel = hoveredLabel ?? openMenu;

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Recomputes the glow's position/width off the real DOM rather than
  // tracking pointer coordinates, so it always sits exactly behind whichever
  // item is active regardless of how the pill's contents wrap or resize.
  useEffect(() => {
    if (!activeLabel) {
      setGlow((g) => ({ ...g, visible: false }));
      return;
    }
    const el = itemRefs.current[activeLabel];
    const list = pillListRef.current;
    if (!el || !list) return;
    const elRect = el.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    setGlow({
      left: elRect.left - listRect.left,
      width: elRect.width,
      visible: true,
    });
  }, [activeLabel]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-bg-black px-4 py-4 shadow-[0_4px_20px_rgba(5,7,13,0.4)] sm:px-6 md:bg-transparent md:shadow-none"
    >
      <nav className="mx-auto flex max-w-[clamp(72rem,86vw,90rem)] items-center justify-between">
        <Link
          href="/"
          className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black"
        >
          {/* Plain <img>, not next/image: the optimizer strips this WebP's
              alpha channel (flattens transparency to black) during resize. */}
          <img
            src="/images/finqalab-logo-white.webp"
            alt="Finqalab"
            width={628}
            height={162}
            className="h-6 w-auto"
          />
        </Link>

        {/* The pill floats independently of the logo/CTA, same chassis as
            the flow-state pages' nav-pill (rounded-full, blurred glass,
            centered), but with a solid enough fill of its own that it reads
            clearly against any page background, not just a hero video. */}
        <div
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          onMouseLeave={() => setHoveredLabel(null)}
        >
          <ul
            ref={pillListRef}
            className="relative flex items-center gap-1 rounded-full border border-white/12 bg-bg-black/85 py-1.5 pl-2 pr-2 shadow-[0_8px_32px_rgba(5,7,13,0.45)] backdrop-blur-xl backdrop-saturate-150"
          >
            {/* The glow itself: a soft radial light behind whichever item is
                active, sliding to it rather than popping, this is the
                "spotlight" effect. Sits below the item's own z-10 text. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-1 rounded-full transition-[left,width,opacity] duration-300 ease-out"
              style={{
                left: glow.left,
                width: glow.width,
                opacity: glow.visible ? 1 : 0,
                background:
                  "radial-gradient(120% 160% at 50% 20%, rgba(156,140,224,0.55) 0%, rgba(156,140,224,0.18) 55%, rgba(156,140,224,0) 100%)",
                boxShadow: "0 0 24px 4px rgba(156,140,224,0.35)",
              }}
            />

            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="relative">
                  <button
                    ref={(el) => {
                      itemRefs.current[item.label] = el;
                    }}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    onMouseEnter={() => setHoveredLabel(item.label)}
                    onFocus={() => setHoveredLabel(item.label)}
                    onClick={() =>
                      setOpenMenu((cur) => (cur === item.label ? null : item.label))
                    }
                    className={`flex items-center gap-1 px-3.5 py-2 ${navLinkClasses} ${
                      isItemActive(item, pathname) ? "text-primary-light" : "text-text-onDark"
                    }`}
                  >
                    {item.label}
                    <ChevronIcon open={openMenu === item.label} />
                  </button>

                  {openMenu === item.label && (
                    <div
                      className="absolute left-0 top-full z-10 mt-3 w-56 rounded-2xl border border-white/15 bg-bg-black p-2 shadow-2xl"
                      style={{
                        boxShadow:
                          "inset 0 1px 1px rgba(255,255,255,0.1), 0 16px 40px rgba(5,7,13,0.45)",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-lg px-3 py-2.5 text-sm text-text-onDark-muted transition-colors hover:bg-white/8 hover:text-text-onDark"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label} className="relative">
                  <Link
                    ref={(el) => {
                      itemRefs.current[item.label] = el;
                    }}
                    href={item.href!}
                    onMouseEnter={() => setHoveredLabel(item.label)}
                    onFocus={() => setHoveredLabel(item.label)}
                    className={`block px-3.5 py-2 ${navLinkClasses} ${
                      isItemActive(item, pathname) ? "text-primary-light" : "text-text-onDark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="hidden md:flex">
          <PillButton href="/finqalab-circle.html" variant="outlinePrimary">
            Join Our Community
          </PillButton>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/12 bg-bg-black/85 backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black md:hidden"
        >
          <span className="h-0.5 w-6 bg-text-onDark" />
          <span className="h-0.5 w-6 bg-text-onDark" />
        </button>
      </nav>

      {open && (
        <div
          className="mx-auto mt-3 max-w-[clamp(72rem,86vw,90rem)] rounded-3xl border border-white/12 bg-bg-black px-6 py-4 md:hidden"
          style={{ boxShadow: "0 16px 40px rgba(5,7,13,0.45)" }}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={openMobileGroup === item.label}
                    onClick={() =>
                      setOpenMobileGroup((cur) =>
                        cur === item.label ? null : item.label
                      )
                    }
                    className={`flex min-h-11 w-full items-center justify-between rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black ${
                      isItemActive(item, pathname) ? "text-primary-light" : "text-text-onDark"
                    }`}
                  >
                    {item.label}
                    <ChevronIcon open={openMobileGroup === item.label} />
                  </button>
                  {openMobileGroup === item.label && (
                    <ul className="ml-3 flex flex-col gap-1 border-l border-border-onDark pl-3">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-11 items-center text-sm text-text-onDark-muted transition-colors hover:text-text-onDark"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    className={`flex min-h-11 items-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black ${
                      isItemActive(item, pathname) ? "text-primary-light" : "text-text-onDark"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <PillButton href="/finqalab-circle.html" variant="outlinePrimary">
              Join Our Community
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
