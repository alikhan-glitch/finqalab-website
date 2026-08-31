import type { FeatureIconName } from "@/components/FeatureIcons";

export type Feature = {
  icon: FeatureIconName;
  title: string;
  description: string;
  accent: "primary" | "teal";
};

export const features: Feature[] = [
  {
    icon: "megaphone",
    title: "Corporate Announcements",
    description:
      "Dividend declarations, bonus issues, and rights offers, the moment they're announced, not the next morning.",
    accent: "primary",
  },
  {
    icon: "bolt",
    title: "Raast Instant Deposit",
    description:
      "Fund your account in minutes through Pakistan's real-time payment rail. No bank queues, no waiting.",
    accent: "teal",
  },
  {
    icon: "userCheck",
    title: "Digital Onboarding",
    description:
      "Open your account from your phone in about 2–3 working days, no paperwork, no branch visits.",
    accent: "primary",
  },
  {
    icon: "pieChart",
    title: "Portfolio Weightage",
    description:
      "See exactly how your money is spread across stocks and Sukuks, sector by sector, in real time.",
    accent: "teal",
  },
  {
    icon: "badge",
    title: "In-App Subscriptions",
    description:
      "Unlock Finqalab Technicals and other premium research, and manage it all without leaving the app.",
    accent: "primary",
  },
  {
    icon: "eye",
    title: "Watchlist",
    description:
      "Track the stocks you care about and jump straight to a trade when the moment's right.",
    accent: "teal",
  },
  {
    icon: "bellSlider",
    title: "Custom Alerts",
    description:
      "Set your own price and volume triggers, and we'll notify you the instant they hit.",
    accent: "primary",
  },
  {
    icon: "newspaper",
    title: "News",
    description:
      "Market-moving headlines curated for PSX investors, right inside the app you already trade in.",
    accent: "teal",
  },
  {
    icon: "bellChart",
    title: "Portfolio Alerts",
    description:
      "Get notified the moment something in your holdings needs your attention.",
    accent: "primary",
  },
  {
    icon: "lifeBuoy",
    title: "Help Center",
    description:
      "Answers to your account, deposit, and trading questions, searchable, in-app, whenever you need them.",
    accent: "teal",
  },
];
