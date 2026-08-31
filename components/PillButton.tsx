import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "primary"
  | "outlineDark"
  | "outlineLight"
  | "outlinePrimary"
  | "solidDark"
  | "solidWhite";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-onPrimary hover:bg-primary-strong focus-visible:ring-primary focus-visible:ring-offset-bg-black",
  outlineDark:
    "border border-white/15 bg-white/5 text-text-onDark backdrop-blur-md backdrop-saturate-150 hover:bg-white/10 focus-visible:ring-text-onDark focus-visible:ring-offset-bg-navy",
  outlineLight:
    "border border-white/60 bg-white/40 text-text-onLight backdrop-blur-md backdrop-saturate-150 hover:bg-white/60 focus-visible:ring-text-onLight focus-visible:ring-offset-bg-light",
  outlinePrimary:
    "border border-primary-light/50 bg-white/5 text-text-onDark backdrop-blur-md backdrop-saturate-150 hover:bg-primary-light/15 hover:border-primary-light focus-visible:ring-primary-light focus-visible:ring-offset-bg-black",
  solidDark:
    "bg-bg-black text-text-onDark hover:bg-black/80 focus-visible:ring-bg-black focus-visible:ring-offset-primary",
  // High-contrast pill for the flow-state pages (Careers/Updates/Investment
  // Calculator), those pop a solid-white primary CTA against the dark ink
  // canvas rather than the site's usual purple `primary`, per the
  // management-approved reference files.
  solidWhite:
    "bg-white text-[#241a2c] hover:bg-white/85 focus-visible:ring-white focus-visible:ring-offset-bg-black",
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold font-heading transition-[background-color,transform] duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
