import type { CourseBlock } from "@/lib/academyCourses";

// The h/p/ul/ol renderer for a course's written article, shared between
// <CourseAccordion/> (the in-page panel on /academy), the standalone article
// page at /academy-stripe/[slug], and the flow-state article at
// /academy-flow/[slug], so the three can't drift apart on how a block
// renders. No "use client": pure presentational markup, safe to render from
// a server component.
//
// `dark` switches the palette for the flow-state pages (Fraunces headings on
// the dark ink background) rather than forking this file, the block
// structure and spacing stay identical either way, only colour/typeface
// change.
export default function CourseBlocks({
  blocks,
  dark = false,
}: {
  blocks: CourseBlock[];
  dark?: boolean;
}) {
  const headingClass = dark
    ? " text-text-onDark"
    : "font-serif text-text-onLight";
  const bodyClass = dark ? "text-text-onDark-muted" : "text-text-onLight-muted";
  const strongClass = dark ? "text-text-onDark" : "text-text-onLight";
  const bulletClass = dark ? "bg-primary-light" : "bg-primary";

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h4
                key={i}
                className={`mt-9 text-xl font-bold leading-snug first:mt-0 ${headingClass}`}
              >
                {block.text}
              </h4>
            );
          case "p":
            return (
              <p key={i} className={`mt-4 text-[15px] leading-relaxed ${bodyClass}`}>
                {block.text}
              </p>
            );
          case "ul":
          case "ol": {
            const List = block.type === "ol" ? "ol" : "ul";
            return (
              <List key={i} className="mt-4 flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className={`flex gap-3 text-[15px] leading-relaxed ${bodyClass}`}>
                    <span
                      aria-hidden="true"
                      className={`mt-[0.55em] h-1 w-1 shrink-0 rounded-full ${bulletClass}`}
                    />
                    <span>
                      {item.label && (
                        <strong className={`font-semibold ${strongClass}`}>{item.label}: </strong>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </List>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}
