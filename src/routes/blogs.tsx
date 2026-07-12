import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Journal — Brewdminds" },
      { name: "description", content: "Sharp writing on brand, content, influence, performance and the next era of search (AEO)." },
      { property: "og:title", content: "Journal — Brewdminds" },
      { property: "og:description", content: "Field notes from a strategy-first, craft-obsessed agency." },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

const posts = [
  { tag: "AEO", title: "Why AEO Will Matter More Than SEO in 2026", excerpt: "Search is being rewritten. If you're only optimizing for links, you're already losing the customer that never clicked.", read: "6 min", date: "Nov 12, 2025", icon: "sparkles-outline" },
  { tag: "Content", title: "The Case for Cinematic Content Over Stock Reels", excerpt: "Trending audio is a shortcut to invisibility. A production argument for original, cinematic craft.", read: "5 min", date: "Oct 28, 2025", icon: "film-outline" },
  { tag: "Influence", title: "Building an Influencer Network vs Renting One", excerpt: "Why the agencies winning the luxury and hospitality space own their creator pipeline.", read: "7 min", date: "Oct 14, 2025", icon: "people-outline" },
  { tag: "Strategy", title: "The Positioning Sentence That Runs Everything", excerpt: "One sentence, ruthlessly written, kills a hundred bad brief decisions. Here's the framework.", read: "4 min", date: "Sep 30, 2025", icon: "compass-outline" },
  { tag: "AI", title: "AI Workflows That Actually Compound", excerpt: "Where AI-assisted marketing pays back — and where it silently makes your brand more generic.", read: "8 min", date: "Sep 18, 2025", icon: "hardware-chip-outline" },
  { tag: "Performance", title: "Reading Meta Ads Like a Strategist, Not a Dashboard", excerpt: "The four numbers that actually tell you if your paid social is working. Everything else is noise.", read: "6 min", date: "Sep 04, 2025", icon: "trending-up-outline" },
];

const categories = ["All", "AEO", "Content", "Influence", "Strategy", "AI", "Performance"];

function BlogsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.tag === active);

  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Field notes from an agency that thinks first.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--ink)]/75">
            No SEO word salad. No "10 tips" listicles. Just the arguments and frameworks we
            actually use with clients.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === c
                  ? "bg-[color:var(--ember)] border-[color:var(--ember)] text-white"
                  : "border-[color:var(--border)] text-[color:var(--ink)]/70 hover:border-[color:var(--ember)] hover:text-[color:var(--ember)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-[color:var(--border)] overflow-hidden bg-white hover:border-[color:var(--ember)] transition-colors">
              <div className="aspect-[16/10] bg-gradient-to-br from-[color:var(--cream)] to-[color:var(--ember)]/20 grid place-items-center">
                <ion-icon name={p.icon} style={{ fontSize: "48px", color: "var(--ember)" }}></ion-icon>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[color:var(--ink)]/60">
                  <span className="font-semibold uppercase tracking-widest text-[color:var(--ember)]">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold group-hover:text-[color:var(--ember)] transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-[color:var(--ink)]/70">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-[color:var(--ink)]/50">
                  <span>{p.read} read</span>
                  <span className="inline-flex items-center gap-1 text-[color:var(--ember)] font-medium">
                    Read <ion-icon name="arrow-forward-outline"></ion-icon>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-ghost">Load more</button>
        </div>
      </section>
    </SiteLayout>
  );
}
