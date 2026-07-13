import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brewdminds — Strategy-first social & marketing agency",
  description:
    "We help ambitious brands show up with strategy and craft — from brand identity to AEO. Meet Brewdminds.",
};

const trustedBrands = ["ATELIER", "NORTH&CO", "LUMEN", "SAVANT", "MERAKI", "OKTA STUDIOS"];

const servicePillars = [
  { icon: "compass-outline", title: "Brand Strategy", line: "The foundation before anything gets posted." },
  { icon: "videocam-outline", title: "Content Production", line: "Cinematic, craft-led visuals." },
  { icon: "color-palette-outline", title: "Creative & Motion", line: "Identity systems, animated." },
  { icon: "share-social-outline", title: "Social Media", line: "Managed with intent, not just a calendar." },
  { icon: "people-outline", title: "Influencer Marketing", line: "A pillar, not a bullet point." },
  { icon: "trending-up-outline", title: "Performance & SEO", line: "Numbers that actually move." },
  { icon: "sparkles-outline", title: "AEO", line: "Show up in AI answers — before your competitors do." },
  { icon: "hardware-chip-outline", title: "AI-Powered Marketing", line: "Automation, insights, systems." },
  { icon: "code-slash-outline", title: "Web Development", line: "Sites that convert, not just look good." },
];

const differentiators = [
  { icon: "bulb-outline", title: "Strategy before pixels", body: "We don't design a grid before we understand your positioning. Ever." },
  { icon: "film-outline", title: "Cinematic craft", body: "Our production is closer to a studio than a content mill. It shows." },
  { icon: "planet-outline", title: "AEO-native", body: "We optimize for the answer engines your customers are already asking." },
  { icon: "people-circle-outline", title: "In-house creators", body: "A curated influencer network, not a rented rolodex." },
];

const steps = [
  { n: "01", title: "Discover", body: "We audit, listen, and pressure-test what your brand actually stands for." },
  { n: "02", title: "Strategize", body: "A sharp playbook — positioning, narrative, channels, KPIs. No fluff." },
  { n: "03", title: "Create", body: "Original, on-brand content produced with the care of a boutique studio." },
  { n: "04", title: "Amplify", body: "Distribution, paid, influencer and AEO working as one engine." },
];

const testimonials = [
  { quote: "Brewdminds rebuilt our brand voice and our feed hasn't looked stock since. Bookings are up 40%.", who: "Aarav K.", role: "Founder, Hospitality" },
  { quote: "They actually understand AEO. Our brand started showing up in ChatGPT answers within two months.", who: "Priya S.", role: "CMO, D2C Skincare" },
  { quote: "The films they produce feel like something a Netflix show would drop. Full stop.", who: "Rohan M.", role: "Creative Director, Fashion Label" },
];

const posts = [
  { tag: "AEO", title: "Why AEO Will Matter More Than SEO in 2026", excerpt: "Search is being rewritten in real time. Here's how to be an answer, not a link.", read: "6 min" },
  { tag: "Content", title: "The Case for Cinematic Content Over Stock Reels", excerpt: "If everyone's using the same trending audio, no one is memorable. A production argument.", read: "5 min" },
  { tag: "Influence", title: "Building an Influencer Network vs Renting One", excerpt: "Why the agencies winning right now own their creator pipeline.", read: "7 min" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[calc(100vh-6rem)] items-center overflow-hidden">
        {/*
          Background layer — swap this for an image, video, or animation later.
          It stays behind the content (-z-10 within this section's own stacking
          context via `isolate`). If the future media needs it, add a scrim div
          here (e.g. `bg-black/40`) before the content block for text legibility.
        */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-1/2 right-[10%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[color:var(--ember)]/10 blur-3xl" />
          <div className="absolute top-1/2 right-0 hidden w-[65%] max-w-[820px] -translate-y-1/2 lg:block">
            <div className="animate-rise">
              <div className="animate-float">
                <Image
                  src="/brew-hero-v2.png"
                  alt=""
                  aria-hidden="true"
                  width={1536}
                  height={1024}
                  priority
                  sizes="820px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-page animate-rise">
          <p className="eyebrow">Social · Strategy · Craft</p>
          <h1 className="mt-5 max-w-xl text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Brands don't go viral.
            <br />
            They get <span className="italic text-[color:var(--ember)]">built</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[color:var(--ink)]/75">
            We combine sharp strategy with cinematic craft to help ambitious brands show up
            right — everywhere it matters.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Let's Talk Strategy
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
            <Link href="/services" className="btn-ghost">
              See Our Thinking
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 md:py-20">
        <div className="container-page border-t border-[color:var(--border)] pt-8">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]/50">
            Trusted by ambitious brands
          </p>
          <span className="sr-only">
            {trustedBrands.join(", ")}
          </span>
        </div>
        <div className="mt-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div aria-hidden="true" className="marquee-track flex w-max items-center gap-16">
            {[...trustedBrands, ...trustedBrands].map((n, i) => (
              <span
                key={`${n}-${i}`}
                className="shrink-0 text-sm font-semibold tracking-widest text-[color:var(--ink)]/70 opacity-70 md:text-base"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-page py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Nine pillars. One point of view.</h2>
          </div>
          <Link href="/services" className="btn-ghost self-start md:self-end">
            Explore all services
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((s) => (
            <Link
              key={s.title}
              href="/services"
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-6 hover:border-[color:var(--ember)] hover:shadow-[0_20px_60px_-30px_rgba(198,93,58,0.35)] transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--cream)] text-[color:var(--ember)] group-hover:bg-[color:var(--ember)] group-hover:text-white transition-colors">
                <ion-icon name={s.icon} style={{ fontSize: "22px" }}></ion-icon>
              </div>
              <h3 className="mt-5 text-lg">{s.title}</h3>
              <p className="mt-1 text-sm text-[color:var(--ink)]/70">{s.line}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY BREWDMINDS */}
      <section className="bg-[color:var(--cream)]">
        <div className="container-page py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <p className="eyebrow">Why Brewdminds</p>
              <h2 className="mt-3 text-4xl md:text-5xl">
                We're built for brands who refuse to sound like everyone else.
              </h2>
              <p className="mt-6 text-[color:var(--ink)]/75">
                Most agencies sell you activity. We sell you intention. Every deliverable ladders back
                to a positioning decision — because craft without strategy is just decoration.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {differentiators.map((d) => (
                <div key={d.title} className="rounded-2xl bg-white p-6 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--ember)] text-white">
                    <ion-icon name={d.icon} style={{ fontSize: "22px" }}></ion-icon>
                  </div>
                  <h3 className="mt-4 text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--ink)]/70">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A process built for clarity.</h2>
          <p className="mt-4 text-[color:var(--ink)]/75">Four phases, zero ambiguity. Every engagement runs on the same rigorous rhythm.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-[color:var(--border)] p-6">
              <span className="text-sm font-semibold tracking-widest text-[color:var(--ember)]">{s.n}</span>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink)]/70">{s.body}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-8 -right-3 text-[color:var(--ember)]/40">
                  <ion-icon name="arrow-forward-outline" style={{ fontSize: "20px" }}></ion-icon>
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.who} className="rounded-2xl bg-[color:var(--cream)] p-8">
              <ion-icon name="chatbubble-ellipses-outline" style={{ fontSize: "24px", color: "var(--ember)" }}></ion-icon>
              <blockquote className="mt-4 text-base leading-relaxed text-[color:var(--ink)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{t.who}</span>
                <span className="text-[color:var(--ink)]/60"> — {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="container-page pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow">Journal</p>
            <h2 className="mt-3 text-4xl">Sharp takes, not thought-leadership fluff.</h2>
          </div>
          <Link href="/blogs" className="hidden md:inline-flex btn-ghost">
            All posts <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-[color:var(--border)] overflow-hidden bg-white hover:border-[color:var(--ember)] transition-colors">
              <div className="aspect-[16/10] bg-gradient-to-br from-[color:var(--cream)] to-[color:var(--ember)]/20 grid place-items-center">
                <ion-icon name="reader-outline" style={{ fontSize: "42px", color: "var(--ember)" }}></ion-icon>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--ember)]">{p.tag}</span>
                <h3 className="mt-3 text-lg group-hover:text-[color:var(--ember)] transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink)]/70">{p.excerpt}</p>
                <p className="mt-4 text-xs text-[color:var(--ink)]/50">{p.read} read</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--ink)] px-8 py-16 md:px-16 md:py-24 text-white">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[color:var(--ember)]/40 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="eyebrow !text-[color:var(--ember)]">Ready when you are</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-white">
              Let's build a brand people actually remember.
            </h2>
            <p className="mt-4 text-white/70">
              Tell us where you are — we'll show you where you could be. First conversation is on us.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Call <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white hover:text-[color:var(--ink)] transition-colors">
                See what we do
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
