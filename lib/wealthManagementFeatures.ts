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
  // Pre-composited mockup for this feature — a real in-app screenshot
  // already set inside a device frame (status bar, notch, and all), supplied
  // as one flat image rather than assembled from a separate frame + cutout
  // — see <FluidFeatureGrid/>. Optional in the type for resilience, but
  // every feature currently has one.
  image?: string;
  // Testing alternate scene-panel treatments on a few cards, rather than the
  // default white one — see FeatureGridCard / FeatureScenes for the styling.
  // "dark" / "darkPurple" are both frosted glass; darkPurple additionally
  // gets a thin violet outline instead of the plain white one.
  panelTheme?: "light" | "dark" | "darkPurple";
  // Short form for layouts that can't fit the full title — currently the
  // vertical title rail on <FeatureCardStack/>, where the text runs down the
  // card's edge and a 50-character title would be unreadably small. Only set
  // where `title` is too long; everything else falls back to `title`.
  shortLabel?: string;
};

// Titles, icons, and scene mockups are final.
export const wealthManagementFeatures: WealthFeature[] = [
  {
    icon: "lifeBuoy",
    title: "Help Center",
    image: "/images/features-mockups/help-center.webp",
    description:
      "Raise a support ticket for any issue directly from the app and get a ticket number to track it. Our team follows up by email with a resolution timeline, so you always know where your complaint stands.",
    accent: "primary",
    scene: {
      type: "chat",
      icon: "lifeBuoy",
      prompt: "How do I reset my PIN?",
      reply: "Sure — here's how to reset it.",
    },
    panelTheme: "dark",
  },
  {
    icon: "bot",
    title: "Finbot",
    image: "/images/features-mockups/finbot.webp",
    description:
      "Finbot is Finqalab's in-app AI assistant for quick answers on portfolio allocation, market activity, and account questions. Ask in plain language and get a straight response, no digging through menus or reports.",
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
      "See dividend declarations, bonus issues, AGM notices, and other PSX corporate actions for the companies in your portfolio and watchlists as soon as they're announced, right inside the app.",
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
    title: "In-App Payments: Raast Instant Deposit & In-App Withdrawals",
    image: "/images/features-mockups/in-app-payments.webp",
    shortLabel: "In-App Payments",
    description:
      "Fund your account instantly through Raast, Pakistan's real-time payment rail, and withdraw straight back to your bank from inside the app. No branch visits, no waiting on bank transfers to clear.",
    accent: "teal",
    scene: { type: "wallet", from: "Bank Account", to: "Finqalab Wallet" },
    panelTheme: "dark",
  },
  {
    icon: "userCheck",
    title: "Digital Onboarding",
    image: "/images/features-mockups/digital-onboarding.webp",
    description:
      "Open a Finqalab account entirely from your phone: verify your identity, add your bank details, and get approved in about two to three working days. No paperwork, no branch visit.",
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
      "See exactly how your money is spread across individual stocks and sectors, plus how much sits as uninvested cash. Portfolio Weightage breaks your holdings down by allocation, so you can spot when one position has grown too large.",
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
    title: "In-App Subscriptions",
    image: "/images/features-mockups/in-app-subscriptions.webp",
    description:
      "Unlock add-ons like Finqalab Technicals directly inside the app, billed and managed alongside your account. Turn premium tools on when you need them, cancel just as easily.",
    accent: "primary",
    scene: { type: "badge", icon: "badge", label: "Finqalab Technicals" },
    panelTheme: "dark",
  },
  {
    icon: "eye",
    title: "Watchlist & Multiple Custom Watchlists",
    image: "/images/features-mockups/watchlist.webp",
    shortLabel: "Watchlist",
    description:
      "Track the PSX-listed companies you care about with live prices and daily change, organized into as many custom watchlists as you need — one for long-term holdings, another for stocks you're still researching.",
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
      "A research-backed shortlist of PSX stocks, grouped by strategy like long-term growth, curated by Finqalab's desk. It's a starting point for your own research, not a buy or sell recommendation.",
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
      "Set your own price and volume triggers for any PSX stock and get notified the moment they hit, so you hear about a move as it happens instead of the next morning.",
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
      "Track your portfolio's performance over time with charts covering gains, losses, and value trends, so you can see how your investments are actually doing beyond a single day's snapshot.",
    accent: "primary",
    scene: { type: "chart" },
    panelTheme: "dark",
  },
  {
    icon: "newspaper",
    title: "News",
    image: "/images/features-mockups/news.webp",
    description:
      "A live feed of PSX market news, SECP updates, and economic developments, curated so you can stay informed about what's actually moving the companies in your portfolio.",
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
      "Get notified on portfolio-level moves, like your overall value crossing a threshold or a holding hitting your target price, instead of tracking every stock separately.",
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
      "PSX orders placed on Friday get cancelled over the midday break and normally have to be placed again once the market reopens. Finqueue queues your order instead, and carries it forward automatically the moment trading resumes.",
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
    title: "Circle",
    image: "/images/features-mockups/circle.webp",
    description:
      "Join a community of Finqalab investors to swap ideas, ask questions, and follow discussions on PSX stocks and Sukuks, right inside the app you already invest in.",
    accent: "primary",
    scene: { type: "avatars", count: 5, extra: "+128" },
    panelTheme: "dark",
  },
  {
    icon: "shieldCheck",
    title: "Finqalab Premium",
    image: "/images/features-mockups/finqalab-premium.webp",
    description:
      "Finqalab Premium unlocks priority support, advanced portfolio tools, and other member-only perks for investors who want more from the app on a day-to-day basis.",
    accent: "teal",
    scene: { type: "badge", icon: "shieldCheck", label: "Premium Member" },
    panelTheme: "dark",
  },
];
