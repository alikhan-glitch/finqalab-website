// Minimal, hand-drawn glyphs for the "Follow us" row on <AcademyStripeFooter/>
// — same approach as FeatureIcons.tsx (simplified custom paths representing
// each platform, not traced brand assets), sized for a small solid-fill
// badge rather than a multi-color logo.

export type SocialIconName = "facebook" | "x" | "linkedin" | "instagram" | "tiktok" | "youtube" | "whatsapp";

export default function SocialIcon({ name, className }: { name: SocialIconName; className?: string }) {
  switch (name) {
    case "facebook":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M14.5 8.5H16.5V5.5H14.5C12.29 5.5 10.5 7.29 10.5 9.5V11.5H8.5V14.5H10.5V19.5H13.5V14.5H15.5L16.5 11.5H13.5V9.5C13.5 8.95 13.95 8.5 14.5 8.5Z" />
        </svg>
      );
    case "x":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 6L18 18" />
          <path d="M18 6L6 18" />
        </svg>
      );
    case "linkedin":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="5" y="10" width="2.6" height="8.5" rx="0.4" />
          <circle cx="6.3" cy="6.3" r="1.6" />
          <path d="M10.5 10H13v1.3c.5-.9 1.5-1.6 3-1.6 2.3 0 3.5 1.5 3.5 4.2v4.6H17v-4.1c0-1.3-.5-2.1-1.6-2.1-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.9v4.1h-2.5c0-.1.1-7.6.1-8.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="16.3" cy="7.7" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M14 4h2.2c.2 1.7 1.4 3 3.3 3.3v2.3c-1.3 0-2.4-.4-3.3-1.1v5.2c0 2.9-2 5-4.9 5-2.8 0-4.9-2.1-4.9-4.8 0-2.8 2.2-4.9 5.1-4.8v2.3c-1.5-.1-2.7.9-2.7 2.5 0 1.4 1.1 2.5 2.5 2.5 1.5 0 2.6-1.1 2.6-2.6V4Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="3.5" y="6.5" width="17" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10.5 9.8L15 12L10.5 14.2V9.8Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 4.5a7.4 7.4 0 0 0-6.3 11.3L4.5 19.5l3.8-1.1A7.4 7.4 0 1 0 12 4.5Zm0 1.8a5.6 5.6 0 0 1 4.5 8.9l-.3.4.2 1.6-1.6-.4-.4.2A5.6 5.6 0 1 1 12 6.3Zm-2.4 2.5c-.2 0-.4.1-.6.4-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.3 3.5 3.1 1.7.7 2 .6 2.4.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.6-1-.6-.6-1-1.3-1.2-1.5-.1-.2 0-.3.1-.5l.3-.4c.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4Z" />
        </svg>
      );
  }
}
