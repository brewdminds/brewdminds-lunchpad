"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <section style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
          <h1>Something didn't load</h1>
          <p>Try refreshing — we're on it.</p>
          <button onClick={() => reset()}>Try again</button>
        </section>
      </body>
    </html>
  );
}
