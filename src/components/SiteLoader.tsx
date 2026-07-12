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
      <div className="flex items-center gap-2">
        <span className="brew-dot brew-dot-1 h-[18px] w-[18px] rounded-full bg-[color:var(--ember)]" />
        <span className="brew-dot brew-dot-2 h-[18px] w-[18px] rounded-full bg-[color:var(--ember)]" />
        <span className="brew-dot h-[18px] w-[18px] rounded-full bg-[color:var(--ember)]" />
      </div>
      <p className="eyebrow">Brewing…</p>
    </div>
  );
}
