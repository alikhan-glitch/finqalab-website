import type { ContentBlock } from "@/lib/blog-posts";

// The p/h3/ul/quote renderer for a blog post's body, shared between the
// current light /blog/[slug] and the flow-state /blog-flow/[slug] so the
// same post can't render differently in the two designs.
//
// Extracted from /blog/[slug]'s own local `Block` function, the light
// branch below reproduces those exact classes, so that page renders
// identically to before. `dark` switches to the flow-state palette
// (Fraunces headings, onDark text, violet-light accents).
export default function BlogBlocks({
  blocks,
  dark = false,
}: {
  blocks: ContentBlock[];
  dark?: boolean;
}) {
  const headingClass = dark
    ? " text-text-onDark"
    : "font-heading text-text-onLight";
  const bodyClass = dark ? "text-text-onDark-muted" : "text-text-onLight-muted";
  const accentClass = dark ? "bg-primary-light" : "bg-primary";
  const quoteBorder = dark ? "border-primary-light" : "border-primary";
  const quoteText = dark ? "text-text-onDark" : "text-text-onLight";

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h3":
            return (
              <h2
                key={i}
                className={`mt-10 text-2xl font-semibold leading-tight first:mt-0 ${headingClass}`}
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className={`mt-5 text-base leading-relaxed sm:text-lg ${bodyClass}`}>
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className={`flex gap-3 text-base leading-relaxed sm:text-lg ${bodyClass}`}>
                    <span
                      aria-hidden="true"
                      className={`mt-3 h-1.5 w-1.5 shrink-0 rounded-full ${accentClass}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className={`mt-8 border-l-2 py-1 pl-6 text-lg italic leading-relaxed sm:text-xl ${quoteBorder} ${quoteText}`}
              >
                {"“"}
                {block.text}
                {"”"}
                {block.attribution && (
                  <footer className={`mt-2 text-sm not-italic ${bodyClass}`}>
                   , {block.attribution}
                  </footer>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
