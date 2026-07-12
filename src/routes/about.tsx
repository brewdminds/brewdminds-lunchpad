import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Brewdminds — Strategy-first creative agency" },
      { name: "description", content: "The Brewdminds story: a strategy-led, craft-obsessed agency built for brands that refuse to be forgettable." },
      { property: "og:title", content: "About Brewdminds" },
      { property: "og:description", content: "Strategy-first, craft-obsessed. The origin story of Brewdminds." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: "compass-outline", title: "Strategy over spectacle", body: "We'd rather ship one right thing than ten loud ones." },
  { icon: "diamond-outline", title: "Craft is non-negotiable", body: "Every frame, headline, and pixel earns its place." },
  { icon: "flash-outline", title: "Bias for the new", body: "AEO, AI-native workflows, novel formats — we move first." },
  { icon: "heart-outline", title: "Partnership, not vendorship", body: "Our best work happens when clients feel like collaborators." },
];

const team = [
  { name: "Founding Team", role: "Strategy & Craft" },
  { name: "Content Studio", role: "Production & Post" },
  { name: "Growth Lab", role: "Performance, SEO & AEO" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            We started Brewdminds because "post more" isn't a strategy.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--ink)]/75">
            After years inside content mills and quick-turn agencies, we saw the same failure mode
            everywhere: activity dressed up as marketing. Reels with no thesis. Grids with no voice.
            KPIs no one actually cared about. So we built the agency we wished existed —
            strategy-first, obsessed with craft, and native to what's coming next.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--cream)]">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Help ambitious brands become impossible to ignore — for the right reasons.
            </h2>
          </div>
          <div>
            <p className="eyebrow">Vision</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              A world where great brands stop settling for template marketing.
            </h2>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <p className="eyebrow">What we stand for</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold mb-12">Our values</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-[color:var(--border)] p-6 hover:border-[color:var(--ember)] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--cream)] text-[color:var(--ember)]">
                <ion-icon name={v.icon} style={{ fontSize: "22px" }}></ion-icon>
              </div>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink)]/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <p className="eyebrow">The team</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold mb-12">Small, senior, sharp.</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="rounded-2xl bg-[color:var(--cream)] p-8 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-[color:var(--ember)]">
                <ion-icon name="person-outline" style={{ fontSize: "34px" }}></ion-icon>
              </div>
              <h3 className="mt-5 font-semibold">{t.name}</h3>
              <p className="text-sm text-[color:var(--ink)]/70">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-[color:var(--ink)] text-white p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Think we'd click?</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            The best partnerships start with a real conversation. Not a pitch deck.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Start the conversation <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
