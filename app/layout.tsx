import type { Metadata } from "next";
import { Onest } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

// Onest is the site's single typeface — every font utility resolves to it
// (see the token block in globals.css). The weights below cover the whole
// range in use: 400 for body copy, 500/600 for headings, 700 where extra
// emphasis is wanted.
//
// This replaced three separate families that used to run side by side —
// Figtree (body), Playfair Display (the /academy serif) and Fraunces
// (flow-state display headings). Dropping them removes three font downloads
// as well as the typeface mixing.
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finqalab.com"),
  title: {
    default:
      "Finqalab: Invest in PSX Stocks & ETFs | SECP-Regulated Trading App",
    template: "%s | Finqalab",
  },
  description:
    "Trade Pakistan Stock Exchange stocks and ETFs from your phone with Finqalab. SECP-regulated through Next Capital Limited. Start investing with as little as Rs. 5,000.",
  keywords: [
    "Finqalab",
    "invest in PSX",
    "Pakistan Stock Exchange app",
    "online stock trading Pakistan",
    "invest in ETFs Pakistan",
    "SECP regulated broker",
    "Next Capital Limited",
    "stock trading app Pakistan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://finqalab.com",
    siteName: "Finqalab",
    title: "Finqalab: Invest in PSX Stocks & ETFs",
    description:
      "Trade Pakistan Stock Exchange stocks and ETFs from your phone. SECP-regulated through Next Capital Limited.",
    images: ["/video/hero-bg-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finqalab: Invest in PSX Stocks & ETFs",
    description:
      "Trade Pakistan Stock Exchange stocks and ETFs from your phone. SECP-regulated through Next Capital Limited.",
    images: ["/video/hero-bg-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finqalab",
  url: "https://finqalab.com",
  description:
    "Finqalab is a mobile investing app for trading Pakistan Stock Exchange (PSX) stocks and ETFs, regulated through Next Capital Limited.",
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.mobile.finqalab",
    "https://apps.apple.com/pk/app/finqalab/id6444642084",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Next Capital Limited",
    identifier: "NEXT",
    description:
      "SECP-licensed brokerage firm and Pakistan Stock Exchange member, publicly listed on PSX under ticker NEXT.",
  },
};

const mobileApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Finqalab",
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  description:
    "Invest in PSX stocks and ETFs, track your portfolio, and get real-time market alerts with the Finqalab app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-black text-text-onDark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplicationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only rounded-full bg-primary px-6 py-3 text-sm font-semibold text-onPrimary focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to main content
        </a>
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
