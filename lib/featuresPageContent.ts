import { features as coreFeatures } from "./features";
import type { Feature } from "./features";

// Extends the homepage's 10-feature list with 6 more for the dedicated
// features page. Kept separate from lib/features.ts on purpose, the
// homepage carousel is locked and must keep showing exactly its original
// 10 slides.
const additionalFeatures: Feature[] = [
  {
    icon: "candlestick",
    title: "Stocks Trading",
    description:
      "Buy and sell PSX-listed stocks in a few taps, with real-time pricing and instant order execution.",
    accent: "primary",
  },
  {
    icon: "certificate",
    title: "Sukuk Investing",
    description:
      "Grow your wealth the halal way with Shariah-compliant Sukuks, backed by tangible assets.",
    accent: "teal",
  },
  {
    icon: "signal",
    title: "Finqalab Technicals",
    description:
      "Weekly market outlooks, trade setups, and risk management guidance from our research desk.",
    accent: "primary",
  },
  {
    icon: "pulse",
    title: "Real-Time Market Data",
    description:
      "Live PSX quotes, price charts, and market depth, updated the instant the exchange moves.",
    accent: "teal",
  },
  {
    icon: "shieldCheck",
    title: "Bank-Grade Security",
    description:
      "SECP-regulated and CDC-backed, with modern encryption protecting your account at every step.",
    accent: "primary",
  },
  {
    icon: "clipboard",
    title: "Order Management",
    description:
      "Track every pending, executed, and historical order in one clean, searchable view.",
    accent: "teal",
  },
];

export const allFeatures: Feature[] = [...coreFeatures, ...additionalFeatures];
