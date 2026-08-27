"use client";

import { useState } from "react";

// Click-to-load facade rather than a bare <iframe>. A YouTube embed pulls well
// over a megabyte of player JS on mount; showing the poster frame first means
// that cost is only paid by someone who actually presses play. The swap sets
// autoplay=1 so the single click still starts the video — the facade is
// invisible to the viewer, not an extra step.
//
// youtube-nocookie.com is YouTube's privacy-enhanced host: it does not write
// tracking cookies unless playback actually begins.

export default function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  // maxresdefault is absent for some uploads; hqdefault always exists, so fall
  // back on error rather than showing a broken poster.
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* Plain <img>, not next/image: i.ytimg.com would need a remotePatterns
          entry in next.config, and the poster is already correctly sized. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onError={() => setPoster(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-onPrimary shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
