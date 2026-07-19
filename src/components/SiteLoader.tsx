"use client";

import { useEffect, useState } from "react";

const VISIBLE_MS = 1400;
const FADE_MS = 300;

export function SiteLoader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), VISIBLE_MS);
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[color:var(--background)] transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="brew-loader-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} />
        ))}
      </div>
      <p className="eyebrow">Brewing…</p>
    </div>
  );
}
