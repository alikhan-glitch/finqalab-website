// The thin stat ticker directly under the hero. Figures are the client's own
// supplied numbers.
//
// Runs as a marquee rather than a static row: the `marquee` keyframe (see
// globals.css) slides the track by exactly -50%, so the visible list is
// rendered as two identical halves to make the loop point seamless. Each
// half repeats the stat set a few times so the track is wider than a large
// desktop viewport, otherwise a short track visibly runs out mid-screen
// before the loop restarts.
const stats = [
  { value: "75,260+", label: "signups" },
  { value: "PKR 55 Bn+", label: "traded" },
  { value: "99%", label: "funded-account rate" },
  { value: "SECP", label: "regulated" },
];

const HALF_REPEATS = 3;
const half = Array.from({ length: HALF_REPEATS }, () => stats).flat();
const track = [...half, ...half];

export default function TrustBar() {
  return (
    <section
      aria-label="Finqalab by the numbers"
      className="relative z-[10] overflow-hidden border-y bg-bg-black"
      style={{ borderColor: "rgba(247,245,239,0.12)" }}
    >
      {/* The scrolling copy is decorative duplication, the accessible copy
          is the visually-hidden list below, so screen readers read the four
          stats once rather than twelve times. */}
      <div
        aria-hidden="true"
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
      <div className="flex w-max animate-[marquee_45s_linear_infinite] items-center py-3 motion-reduce:animate-none">
          {track.map((stat, i) => (
            <span key={i} className="flex items-center whitespace-nowrap text-sm">
              <span className="font-semibold text-text-onDark">
                {stat.value}
              </span>
              <span className="ml-1.5 text-text-onDark-muted">{stat.label}</span>
              <span aria-hidden="true" className="mx-10 text-primary-light/60 sm:mx-16">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      <ul className="sr-only">
        {stats.map((stat) => (
          <li key={stat.label}>
            {stat.value} {stat.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
