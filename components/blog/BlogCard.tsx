import Link from "next/link";
import BlogIcon from "./BlogIcon";
import type { BlogPost } from "@/lib/blog-posts";

const accentClasses: Record<BlogPost["accent"], { bg: string; text: string; sub: string; tone: "light" | "dark" }> = {
  primary: {
    bg: "bg-primary",
    text: "text-onPrimary",
    sub: "text-onPrimary",
    tone: "light",
  },
  teal: {
    bg: "bg-accent-teal",
    text: "text-text-onLight",
    sub: "text-text-onLight",
    tone: "dark",
  },
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const accent = accentClasses[post.accent];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex min-h-[520px] flex-col justify-between rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-onDark focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black sm:p-10 ${accent.bg}`}
    >
      <div>
        <h3
          className={`font-heading text-2xl font-semibold leading-tight text-balance sm:text-3xl ${accent.text}`}
        >
          {post.title}
        </h3>
        <p className={`mt-4 max-w-sm text-base leading-relaxed ${accent.sub}`}>
          {post.excerpt}
        </p>
      </div>

      <div className="mt-10 flex items-end justify-center">
        <BlogIcon
          name={post.icon}
          tone={accent.tone}
          className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40"
        />
      </div>
    </Link>
  );
}
