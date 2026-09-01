"use client";

import { useId, useState, type FormEvent } from "react";
import GlassCard from "./GlassCard";

// Standard future-value-of-an-ordinary-annuity formula: the initial lump sum
// compounds on its own, and each month's contribution compounds for the
// remaining months after it's made. Guards r === 0 (0% return) separately
// since the annuity formula divides by r.
function calculateFutureValue(initial: number, monthly: number, annualRatePct: number, years: number) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  let fvInitial: number;
  let fvContrib: number;
  if (r === 0) {
    fvInitial = initial;
    fvContrib = monthly * n;
  } else {
    fvInitial = initial * Math.pow(1 + r, n);
    fvContrib = monthly * ((Math.pow(1 + r, n) - 1) / r);
  }
  const futureValue = fvInitial + fvContrib;
  const totalInvested = initial + monthly * n;
  return { futureValue, totalInvested, growth: futureValue - totalInvested };
}

function formatPKR(n: number) {
  return "PKR " + Math.round(n).toLocaleString("en-PK");
}

const DEFAULTS = { initial: 100000, monthly: 10000, rate: 12, years: 10 };

const fieldWrap =
  "flex h-[3.25rem] items-center rounded-[0.9rem] border px-4 focus-within:border-primary-light";
const fieldInput =
  "min-w-0 flex-1 bg-transparent  text-[1.05rem] text-text-onDark outline-none placeholder:text-text-onDark-muted/50";

export default function InvestmentCalculator() {
  const [values, setValues] = useState(DEFAULTS);
  const [result, setResult] = useState(() =>
    calculateFutureValue(DEFAULTS.initial, DEFAULTS.monthly, DEFAULTS.rate, DEFAULTS.years)
  );
  const idPrefix = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(calculateFutureValue(values.initial, values.monthly, values.rate, values.years));
    document.getElementById("calculator-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function field(key: keyof typeof values, value: number) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
    <GlassCard interactive={false} className="mx-auto max-w-2xl p-6 sm:p-11">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <label htmlFor={`${idPrefix}-initial`} className="mb-2 block text-[0.8rem] text-text-onDark-muted">
                Initial Investment Amount
              </label>
              <div className={fieldWrap} style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
                <span className="mr-1.5 text-[0.9rem] text-text-onDark-muted">PKR</span>
                <input
                  id={`${idPrefix}-initial`}
                  type="number"
                  min={0}
                  step={1}
                  placeholder="100,000"
                  value={values.initial}
                  onChange={(e) => field("initial", Number(e.target.value))}
                  required
                  className={fieldInput}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${idPrefix}-monthly`} className="mb-2 block text-[0.8rem] text-text-onDark-muted">
                Monthly Contribution
              </label>
              <div className={fieldWrap} style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
                <span className="mr-1.5 text-[0.9rem] text-text-onDark-muted">PKR</span>
                <input
                  id={`${idPrefix}-monthly`}
                  type="number"
                  min={0}
                  step={1}
                  placeholder="10,000"
                  value={values.monthly}
                  onChange={(e) => field("monthly", Number(e.target.value))}
                  required
                  className={fieldInput}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${idPrefix}-rate`} className="mb-2 block text-[0.8rem] text-text-onDark-muted">
                Expected Return (%)
              </label>
              <div className={fieldWrap} style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
                <input
                  id={`${idPrefix}-rate`}
                  type="number"
                  min={0}
                  max={100}
                  step={0.1}
                  placeholder="12"
                  value={values.rate}
                  onChange={(e) => field("rate", Number(e.target.value))}
                  required
                  className={fieldInput}
                />
                <span className="ml-1.5 text-[0.9rem] text-text-onDark-muted">% / yr</span>
              </div>
            </div>

            <div>
              <label htmlFor={`${idPrefix}-years`} className="mb-2 block text-[0.8rem] text-text-onDark-muted">
                Period (Years)
              </label>
              <div className={fieldWrap} style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)" }}>
                <input
                  id={`${idPrefix}-years`}
                  type="number"
                  min={1}
                  max={60}
                  step={1}
                  placeholder="10"
                  value={values.years}
                  onChange={(e) => field("years", Number(e.target.value))}
                  required
                  className={fieldInput}
                />
                <span className="ml-1.5 text-[0.9rem] text-text-onDark-muted">yrs</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 h-[3.4rem] w-full rounded-[0.9rem] bg-white text-[1rem] font-semibold text-[#241a2c] transition-[background-color] duration-150 hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black"
          >
            Calculate
          </button>
        </form>
      </GlassCard>

      <div id="calculator-results" className="mx-auto mt-16 max-w-2xl scroll-mt-24 text-center">
        <p className="text-[0.8rem] text-text-onDark-muted">Estimated future value</p>
        <div className="mt-2.5 text-[2.6rem] font-semibold tracking-tight text-text-onDark sm:text-[3.6rem]">
          {formatPKR(result.futureValue)}
        </div>
        <div className="mt-9 grid grid-cols-2 gap-4 text-left">
          <div className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: "rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.04)" }}>
            <div className="text-[1.4rem] text-text-onDark">
              {formatPKR(result.totalInvested)}
            </div>
            <div className="mt-1 text-[0.76rem] text-text-onDark-muted">Total invested</div>
          </div>
          <div className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: "rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.04)" }}>
            <div className="text-[1.4rem] text-text-onDark">
              {formatPKR(Math.max(result.growth, 0))}
            </div>
            <div className="mt-1 text-[0.76rem] text-text-onDark-muted">Estimated growth</div>
          </div>
        </div>
        <p className="mt-7 text-[0.78rem] leading-relaxed text-text-onDark-muted">
          Figures assume monthly compounding at a constant rate, and are not a guarantee of future
          performance. All investments involve risk, including loss of principal.
        </p>
      </div>
    </>
  );
}
