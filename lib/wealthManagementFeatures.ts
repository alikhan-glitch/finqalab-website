import type { FeatureIconName } from "@/components/FeatureIcons";

export type FeatureScene =
  | { type: "chat"; icon: FeatureIconName; prompt: string; reply: string }
  | { type: "list"; rows: { label: string; value: string; tone: "up" | "down" | "neutral" }[] }
  | { type: "checklist"; items: string[] }
  | { type: "bell"; items: { label: string; time: string }[] }
  | { type: "badge"; icon: FeatureIconName; label: string }
  | { type: "avatars"; count: number; extra: string }
  | { type: "pie"; segments: { label: string; value: number; tone: "primary" | "teal" | "muted" }[] }
  | { type: "chart" }
  | { type: "wallet"; from: string; to: string };

export type WealthFeature = {
  icon: FeatureIconName;
  title: string;
  description: string;
  accent: "primary" | "teal";
  scene: FeatureScene;
  // Pre-composited mockup for this feature, a real in-app screenshot
  // already set inside a device frame (status bar, notch, and all), supplied
  // as one flat image rather than assembled from a separate frame + cutout
  //, see <FluidFeatureGrid/>. Optional in the type for resilience, but
  // every feature currently has one.
  image?: string;
  // Testing alternate scene-panel treatments on a few cards, rather than the
  // default white one, see FeatureGridCard / FeatureScenes for the styling.
  // "dark" / "darkPurple" are both frosted glass; darkPurple additionally
  // gets a thin violet outline instead of the plain white one.
  panelTheme?: "light" | "dark" | "darkPurple";
  // Short form for layouts that can't fit the full title, currently the
  // vertical title rail on <FeatureCardStack/>, where the text runs down the
  // card's edge and a 50-character title would be unreadably small. Only set
  // where `title` is too long; everything else falls back to `title`.
  shortLabel?: string;
};

// Icons and scene mockups are final; titles and descriptions are the
// client-supplied copy.
export const wealthManagementFeatures: WealthFeature[] = [
  {
    icon: "lifeBuoy",
    title: "Help Center",
    image: "/images/features-mockups/help-center.webp",
    description:
      "Encounter an issue with your account or the app? Raise a support ticket directly in the app, track its progress with a ticket number, and get a clear resolution from our team.",
    accent: "primary",
    scene: {
      type: "chat",
      icon: "lifeBuoy",
      prompt: "How do I reset my PIN?",
      reply: "Sure, here's how to reset it.",
    },
    panelTheme: "dark",
  },
  {
    icon: "bot",
    title: "FinBot",
    image: "/images/features-mockups/finbot.webp",
    description:
      "Instant, round the clock answers to questions about your account and PSX basics. If your issue needs more help, FinBot escalates it to the Help Center for an agent to take over.",
    accent: "teal",
    scene: {
      type: "chat",
      icon: "bot",
      prompt: "Should I diversify more?",
      reply: "Here's a quick breakdown for you.",
    },
    panelTheme: "dark",
  },
  {
    icon: "megaphone",
    title: "Corporate Announcements",
    image: "/images/features-mockups/corporate-announcements.webp",
    description:
      "Never miss announcements that affect your investments. Get notified about dividends, bonus issues, share splits, right issues, board meetings, AGMs, and EOGMs as soon as they're announced.",
    accent: "primary",
    scene: {
      type: "list",
      rows: [
        { label: "HBL · Dividend", value: "New", tone: "neutral" },
        { label: "LUCK · Bonus Issue", value: "New", tone: "neutral" },
        { label: "OGDC · AGM Notice", value: "New", tone: "neutral" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "wallet",
    title: "RAAST Instant Deposit",
    image: "/images/features-mockups/in-app-payments.webp",
    description:
      "Fund your account instantly through RAAST, then withdraw your money digitally whenever you want. Your money moves when you need it to.",
    accent: "teal",
    scene: { type: "wallet", from: "Bank Account", to: "Finqalab Wallet" },
    panelTheme: "dark",
  },
  {
    icon: "userCheck",
    title: "Digital Onboarding",
    image: "/images/features-mockups/digital-onboarding.webp",
    description:
      "Open your account entirely from your phone, from the comfort of your home. Complete your verification, add your bank details, and get started with investing digitally.",
    accent: "primary",
    scene: {
      type: "checklist",
      items: ["Verify identity", "Add bank details", "Start investing"],
    },
    panelTheme: "dark",
  },
  {
    icon: "pieChart",
    title: "Portfolio Weightage",
    image: "/images/features-mockups/portfolio-weightage.webp",
    description:
      "Understand your investment profile at a glance. See how your portfolio is spread across individual stocks, sectors, and cash, so you know where your money is concentrated.",
    accent: "teal",
    scene: {
      type: "pie",
      segments: [
        { label: "Stocks", value: 62, tone: "primary" },
        { label: "Sukuks", value: 28, tone: "teal" },
        { label: "Cash", value: 10, tone: "muted" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "badge",
    title: "Technical Trading Insights",
    image: "/images/features-mockups/in-app-subscriptions.webp",
    description:
      "Get access to Finqalab Technicals Trading Insights, a dedicated group for technical trading ideas, weekly outlooks, trade setups, and risk calls. Follow the insights and use them on your own terms.",
    accent: "primary",
    scene: { type: "badge", icon: "badge", label: "Finqalab Technicals" },
    panelTheme: "dark",
  },
  {
    icon: "eye",
    title: "Multiple Watchlists",
    image: "/images/features-mockups/watchlist.webp",
    description:
      "Create your watchlist and track your favorite PSX stocks with live prices and daily changes. Build multiple watchlists for different strategies, ideas, or stocks you are researching.",
    accent: "teal",
    scene: {
      type: "list",
      rows: [
        { label: "OGDC", value: "+1.4%", tone: "up" },
        { label: "HBL", value: "-0.6%", tone: "down" },
        { label: "LUCK", value: "+2.1%", tone: "up" },
      ],
    },
    panelTheme: "darkPurple",
  },
  {
    icon: "list",
    title: "Juice List",
    image: "/images/features-mockups/juice-list.webp",
    description:
      "A shortlist of stocks our research team believes still have juice left. Stocks are grouped by risk level and selected with a medium to long-term view. Use it as a starting point for your own research.",
    accent: "primary",
    scene: {
      type: "list",
      rows: [
        { label: "Top Pick · ENGRO", value: "Curated", tone: "neutral" },
        { label: "Top Pick · PSO", value: "Curated", tone: "neutral" },
        { label: "Top Pick · MEBL", value: "Curated", tone: "neutral" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "bellSlider",
    title: "Custom Alerts",
    image: "/images/features-mockups/custom-alerts.webp",
    description:
      "Set a price or volume alert for any PSX stock and get notified when your trigger is reached. Know when something happens without constantly checking the market.",
    accent: "teal",
    scene: {
      type: "bell",
      items: [
        { label: "OGDC hit Rs. 145", time: "2m ago" },
        { label: "Volume spike · HBL", time: "18m ago" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "pulse",
    title: "Portfolio Analytics",
    image: "/images/features-mockups/portfolio-analytics.webp",
    description:
      "See how your portfolio is actually performing over time. Track your gains, losses, and portfolio value to understand your progress beyond a single day's numbers.",
    accent: "primary",
    scene: { type: "chart" },
    panelTheme: "dark",
  },
  {
    icon: "newspaper",
    title: "News",
    image: "/images/features-mockups/news.webp",
    description:
      "PSX headlines, SECP updates, and economic developments, all in one tab. Stay on top of news that affects the companies and sectors you're invested in.",
    accent: "teal",
    scene: {
      type: "list",
      rows: [
        { label: "PSX closes higher on...", value: "News", tone: "neutral" },
        { label: "SECP issues new...", value: "News", tone: "neutral" },
        { label: "Circular debt talks...", value: "News", tone: "neutral" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "bellChart",
    title: "Portfolio Alerts",
    image: "/images/features-mockups/portfolio-alerts.webp",
    description:
      "One alert covers your entire portfolio. Set your threshold and get notified the moment your total value crosses it. No need to set individual alerts for every stock.",
    accent: "primary",
    scene: {
      type: "bell",
      items: [
        { label: "Portfolio up 3.2% today", time: "Just now" },
        { label: "LUCK crossed target price", time: "1h ago" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "queue",
    title: "Finqueue",
    image: "/images/features-mockups/finqueue.webp",
    description:
      "Your unexecuted Friday order doesn't have to be placed again after the midday break. Finqueue holds its place and sends it for execution when the trading session resumes.",
    accent: "teal",
    scene: {
      type: "list",
      rows: [
        { label: "Buy · OGDC x100", value: "Queued", tone: "neutral" },
        { label: "Sell · HBL x50", value: "Queued", tone: "neutral" },
        { label: "Buy · LUCK x25", value: "Filled", tone: "up" },
      ],
    },
    panelTheme: "dark",
  },
  {
    icon: "users",
    title: "Exclusive Community",
    image: "/images/features-mockups/circle.webp",
    description:
      "Join Finqalab's exclusive investing community on Circle. Discuss PSX stocks and ETFs, ask questions, share ideas, and follow conversations with fellow investors.",
    accent: "primary",
    scene: { type: "avatars", count: 5, extra: "+128" },
    panelTheme: "dark",
  },
  {
    icon: "shieldCheck",
    title: "Finqalab Premium",
    image: "/images/features-mockups/finqalab-premium.webp",
    description:
      "Priority support and a free Finqalab Technicals subscription, bundled into one membership, for investors who want more from the app and want it included.",
    accent: "teal",
    scene: { type: "badge", icon: "shieldCheck", label: "Premium Member" },
    panelTheme: "dark",
  },
];
