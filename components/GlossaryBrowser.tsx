"use client";

import { useId, useMemo, useState } from "react";
import GlassCard from "./GlassCard";
import { glossaryLetter, glossaryLetters, glossaryTerms } from "@/lib/glossary";

// Search + A-Z filter over the glossary. With ~140 terms a plain alphabetical
// dump would be a very long scroll with no way to find a specific word, so
// this is the interactive layer; the page around it stays a server component.
//
// The two filters are deliberately mutually exclusive rather than combined:
// typing a search clears the active letter, and picking a letter clears the
// search. Combined, they routinely produce an empty intersection ("R" + a
// query that only matches under S) which reads as broken rather than as a
// filter working correctly.

const ALL ="All";

export default function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState(ALL);
  const searchId = useId();

  const letters = useMemo(() => glossaryLetters(), []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryTerms.filter((entry) => {
      if (q) {
        return (
          entry.term.toLowerCase().includes(q) ||
          entry.definition.toLowerCase().includes(q)
        );
      }
      if (letter !== ALL) return glossaryLetter(entry.term) === letter;
      return true;
    });
  }, [query, letter]);

  // Group the survivors by letter, sorting within each group, the source
  // data preserves the live site's own (unsorted) order on purpose, so the
  // alphabetising happens here at render time.
  const groups = useMemo(() => {
    const byLetter = new Map<string, typeof glossaryTerms>();
    for (const entry of visible) {
      const key = glossaryLetter(entry.term);
      const bucket = byLetter.get(key);
      if (bucket) bucket.push(entry);
      else byLetter.set(key, [entry]);
    }
    return Array.from(byLetter.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, entries]) => ({
        letter: key,
        entries: [...entries].sort((a, b) => a.term.localeCompare(b.term)),
      }));
  }, [visible]);

  return (
    <div>
      {/* ---------------- Search ---------------- */}
      <label htmlFor={searchId} className="sr-only">
        Search glossary terms
      </label>
      <div
      className="flex h-[3.4rem] items-center gap-3 rounded-[0.9rem] border px-4 focus-within:border-primary-light"
        style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 shrink-0 text-text-onDark-muted"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // Searching across the whole glossary, not within the active
            // letter, see the note at the top of this file.
            if (e.target.value) setLetter(ALL);
          }}
          placeholder="Search terms and definitions…"
          // type="search" keeps the semantics, but WebKit/Chrome draw their
          // own clear "✕" for it, suppressed here so it doesn't sit next to
          // the styled clear button below.
          className="min-w-0 flex-1 bg-transparent text-[1rem] text-text-onDark outline-none placeholder:text-text-onDark-muted/60 [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="shrink-0 rounded-full p-1 text-text-onDark-muted transition-colors hover:text-text-onDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* ---------------- A-Z filter ---------------- */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {[ALL, ...letters].map((l) => {
          const active = letter === l && !query;
          return (
            <button
              key={l}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setLetter(l);
                setQuery("");
              }}
              className={`min-h-9 rounded-full border px-3 text-[0.82rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black ${
                active ? "text-text-onDark" : "text-text-onDark-muted hover:text-text-onDark"
              }`}
              style={{
                borderColor: active ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.12)",
                background: active ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.04)",
              }}
            >
              {l}
            </button>
          );
        })}
      </div>

      {/* ---------------- Result count ---------------- */}
      <p aria-live="polite" className="mt-6 text-[0.85rem] text-text-onDark-muted">
        {visible.length === glossaryTerms.length
          ? `${glossaryTerms.length} terms`
          : `${visible.length} of ${glossaryTerms.length} terms`}
        {query && ` matching “${query.trim()}”`}
      </p>

      {/* ---------------- Terms ---------------- */}
      {groups.length === 0 ? (
        <GlassCard interactive={false} className="mt-8 p-10 text-center">
          <p className="text-xl font-semibold text-text-onDark">
            No matching terms
          </p>
          <p className="mx-auto mt-2 max-w-sm text-[0.95rem] leading-relaxed text-text-onDark-muted">
            Nothing in the glossary matches that search. Try a shorter word, or browse by letter
            instead.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setLetter(ALL);
            }}
            className="mt-6 min-h-11 rounded-full border px-5 text-[0.9rem] font-medium text-text-onDark transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-black"
            style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)" }}
          >
            Show all terms
          </button>
        </GlassCard>
      ) : (
        <div className="mt-10 flex flex-col gap-12">
          {groups.map((group) => (
            <section key={group.letter} aria-labelledby={`glossary-${group.letter}`}>
              <div className="flex items-center gap-4">
                <h2
                  id={`glossary-${group.letter}`}
                  className="text-3xl font-semibold text-primary-light sm:text-4xl"
                >
                  {group.letter}
                </h2>
                <span
                  aria-hidden="true"
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                />
              </div>

              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.entries.map((entry) => (
                  <GlassCard key={entry.term} className="h-full p-5 sm:p-6">
                    <dt className="text-lg font-semibold leading-snug text-text-onDark">
                      {entry.term}
                    </dt>
                    <dd className="mt-2.5 text-[0.92rem] leading-relaxed text-text-onDark-muted">
                      {entry.definition}
                    </dd>
                  </GlassCard>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
