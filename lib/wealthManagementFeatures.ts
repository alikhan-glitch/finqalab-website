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

// Titles, icons, and scene mockups are final.
export const wealthManagementFeatures: WealthFeature[] = [
  {
    icon: "lifeBuoy",
    title: "Help Center",
    image: "/images/features-mockups/help-center.webp",
    description:
      "What if support actually got back to you? Ours does. Raise a ticket from the app, get a number to track it, and hear back with a real resolution timeline.",
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
    title: "Finbot",
    image: "/images/features-mockups/finbot.webp",
    description:
      "What if support never slept? Finbot doesn't. Instant, 24/7 answers on your account or PSX basics, with a straight handoff to a real person when you need one.",
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
      "Dividends. Bonus issues. AGM notices. The moment a company in your portfolio files one, you know first, straight from the source, not the next morning.",
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
      "Fund your account through Raast in seconds, and withdraw just as instantly when you need it back. No branch visit, no bank queue, no waiting on a transfer.",
    accent: "teal",
    scene: { type: "wallet", from: "Bank Account", to: "Finqalab Wallet" },
    panelTheme: "dark",
  },
  {
    icon: "userCheck",
    title: "Digital Onboarding",
    image: "/images/features-mockups/digital-onboarding.webp",
    description:
      "Open your account entirely from your phone. Verify your identity, add your bank details, and get approved in minutes. We made paperwork and queues extinct.",
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
      "Know exactly where your money sits, by stock, by sector, and how much is still sitting in cash. Catch an oversized position before it becomes a liability.",
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
      "Finqalab Technicals, on your terms. Turn it on for weekly outlooks, trade setups, and risk calls when you need the edge, and cancel the moment you don't.",
    accent: "primary",
    scene: { type: "badge", icon: "badge", label: "Finqalab Technicals" },
    panelTheme: "dark",
  },
  {
    icon: "eye",
    title: "Watchlist",
    image: "/images/features-mockups/watchlist.webp",
    description:
      "Track your favorite PSX names with live prices and daily change. Build as many custom watchlists as your strategy needs, one for conviction, one for research.",
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
      "A shortlist of stocks our desk believes still have juice left. Research-backed and grouped by risk level for the medium to long term, but never a buy or sell call.",
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
      "Set the trigger, price or volume, on any PSX stock, and we tell you the second it hits. No refreshing the app, no next-morning surprises, no missed moves.",
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
      "A single day's number isn't your track record. Track your gains, losses, and value trends over time, and know if you're actually improving.",
    accent: "primary",
    scene: { type: "chart" },
    panelTheme: "dark",
  },
  {
    icon: "newspaper",
    title: "News",
    image: "/images/features-mockups/news.webp",
    description:
      "PSX headlines. SECP updates. The economics that actually move your holdings. Curated by people who read the whole report, not crawled from everywhere at once.",
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
      "Set one threshold for your whole portfolio instead of twenty for twenty different stocks. Get notified the instant your total value crosses it, up or down.",
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
      "What happens to a Friday order over the midday break? Normally, it vanishes. With Finqueue, it holds its place and fires the second trading resumes.",
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
      "Investing alone is optional. Swap ideas, ask questions, and follow real conversations on PSX stocks and ETFs with investors who actually trade them.",
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
