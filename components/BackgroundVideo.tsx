"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo({
  webmSrc,
  mp4Src,
  poster,
  opacity = 20,
  className = "",
  filter = "contrast(1.2) saturate(1.4) brightness(1.05)",
}: {
  webmSrc?: string;
  mp4Src: string;
  poster: string;
  opacity?: number;
  className?: string;
  filter?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      style={{ opacity: opacity / 100, filter }}
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
