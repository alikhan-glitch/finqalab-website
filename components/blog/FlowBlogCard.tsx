import Link from "next/link";
import BlogIcon from "./BlogIcon";
import GlassCard from "../GlassCard";
import type { BlogPost } from "@/lib/blog-posts";

// Formats a post's date once, in a fixed locale, so server and client agree.
// Exported because the list page's featured panel and the article page need
// the identical string.
export function formatPostDate(date: string) {
  // Parsed as a LOCAL date: `new Date("2026-03-12")` is treated as UTC
  // midnight, which renders a day early for anyone west of UTC.
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Flow-state blog card, the glass-panel counterpart to <BlogCard/> (the
// solid violet/teal card on the current /blog).
//
// Deliberately much shorter than <BlogCard/>'s 520px: that card was built
// for a big-icon, few-per-row reading, and there are 25 posts in the index.
// At that volume a tall card turns the page into an endless scroll, so the
// icon shrinks to a corner accent and the card sizes to its text instead.
export default function FlowBlogCard({ post }: { post: BlogPost }) {
  // The post's accent shows as a small dot beside the date rather than as a
  // tint on the icon: <BlogIcon/> appends its own tone colour class after
  // whatever className it's given, so a colour passed in here would collide
  // with that rather than reliably win. tone="light" keeps every icon a
  // consistent white on the dark panel, which is what this theme wants.
  const accentDot = post.accent === "teal" ? "bg-accent-teal" : "bg-primary-light";

  return (
    <Link
      href={`/blog-flow/${post.slug}`}
      className="group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black"
    >
    <GlassCard className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-text-onDark-muted">
          <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`} />
            {formatPostDate(post.date)}
          </p>
          <BlogIcon
            name={post.icon}
            tone="light"
            className="h-8 w-8 shrink-0 object-contain opacity-70 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-4 text-balance text-xl font-semibold leading-snug text-text-onDark">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.92rem] leading-relaxed text-text-onDark-muted">
          {post.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.85rem] font-medium text-text-onDark-muted transition-colors group-hover:text-text-onDark">
          Read article
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </GlassCard>
    </Link>
  );
}
