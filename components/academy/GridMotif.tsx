// The reference design's recurring decorative device: a hairline grid with a
// handful of cells filled in flat colour. Rebuilt here in Finqalab's palette
// (violet / teal) rather than the reference's primary red-yellow-blue, so it
// reads as brand rather than pastiche.
//
// Filled cells are hard-coded rather than random: a random pattern would
// differ between the server and client render and trip a hydration mismatch.

type Cell = { col: number; row: number; tone: "primary" | "teal" | "primaryLight" };

const TONE: Record<Cell["tone"], string> = {
  primary: "bg-primary",
  primaryLight: "bg-primary-light",
  teal: "bg-accent-teal",
};

export default function GridMotif({
  cols,
  rows,
  cells,
  colSizes,
  rowSizes,
  dark = false,
  className = "",
}: {
  cols: number;
  rows: number;
  cells: Cell[];
  /** fr-unit weights, e.g. [1, 1.4, 4.7], must have length `cols`. Omit for equal tracks. */
  colSizes?: number[];
  /** fr-unit weights, e.g. [1, 1.4, 1.2, 3.6], must have length `rows`. Omit for equal tracks. */
  rowSizes?: number[];
  /** Swaps the hairline colour for use on a dark background. */
  dark?: boolean;
  className?: string;
}) {
  const filled = new Map(cells.map((c) => [`${c.col}:${c.row}`, c.tone]));
  const track = (sizes: number[] | undefined, count: number) =>
    sizes ? sizes.map((s) => `minmax(0, ${s}fr)`).join(" ") : `repeat(${count}, minmax(0, 1fr))`;
  const lineColor = dark ? "border-white/40" : "border-black";

  return (
    <div
      aria-hidden="true"
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: track(colSizes, cols),
        gridTemplateRows: track(rowSizes, rows),
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const col = (i % cols) + 1;
        const row = Math.floor(i / cols) + 1;
        const tone = filled.get(`${col}:${row}`);
        return (
          <div
            key={i}
            className={`border-b border-r ${lineColor} ${tone ? TONE[tone] : ""}`}
          />
        );
      })}
    </div>
  );
}
