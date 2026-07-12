"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-page py-24 text-center">
      <h1 className="text-3xl">Something didn't load</h1>
      <p className="mt-2 text-[color:var(--ink)]/70">Try refreshing — we're on it.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={() => reset()} className="btn-primary">
          Try again
        </button>
        <a href="/" className="btn-ghost">
          Go home
        </a>
      </div>
    </section>
  );
}
