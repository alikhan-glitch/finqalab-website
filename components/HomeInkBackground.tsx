import FluidCanvas from "./FluidCanvas";

// One continuous, page-fixed ink canvas behind the homepage, instead of a
// separate <SectionFluidBackground/> per section (Built on Trust, One app
// every asset class, FAQ). Each of those had its own canvas scoped to that
// section's own box — visually correct in isolation, but since a canvas
// only fills its own rectangle, the seam where one section's canvas ended
// and the next began showed up as a hard-edged rectangle cut across the
// swirl, breaking the illusion of one continuous ink surface (reported: a
// visible line between Built on Trust and the asset-class grid).
//
// `fixed`, mounted once at the page root, this shows through any section
// that doesn't paint its own opaque background over it — Built on Trust,
// the asset-class grid, and the FAQ section have `bg-bg-black` removed for
// exactly that reason, while every other homepage section keeps its own
// solid/video background untouched and simply covers this canvas.
//
// No Lenis here (unlike <FluidPageBackground/>, the flow-state pages'
// equivalent): this is scoped to fixing the background-continuity bug on
// three sections of the homepage, not adopting smooth-scroll site-wide.
export default function HomeInkBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#04050c]">
      <FluidCanvas hueMin={0.75} hueMax={1.03} pointerOnly />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(5,7,13,0.6)" }}
      />
    </div>
  );
}
