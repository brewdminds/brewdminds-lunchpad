import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Brewdminds",
  description:
    "Nine service pillars: brand strategy, content production, creative & motion, social, influencer marketing, performance & SEO, AEO, AI marketing, and web development.",
  openGraph: {
    title: "Services — Brewdminds",
    description: "Strategy, content, influence, performance, AEO and more. The full Brewdminds capability stack.",
  },
  alternates: { canonical: "/services" },
};

type Pillar = {
  icon: string;
  title: string;
  intro: string;
  items: string[];
};

const pillars: Pillar[] = [
  {
    icon: "compass-outline",
    title: "Brand Strategy & Positioning",
    intro: "The foundation before anything gets posted. We define who you are before we decide how you show up.",
    items: ["Brand Identity & Positioning", "Market & Competitor Analysis", "Go-to-Market Strategy", "Brand Voice & Narrative"],
  },
  {
    icon: "videocam-outline",
    title: "Content Production",
    intro: "Cinematic, craft-led visuals — never stock-feeling content.",
    items: ["Brand Films & Short Videos", "Photography (Product, Lifestyle, Aerial)", "Reels & Social-First Content", "Audio & Voiceover Production"],
  },
  {
    icon: "color-palette-outline",
    title: "Creative Visuals & Motion",
    intro: "Identity systems that move — literally. Design, animation and print, all in one voice.",
    items: ["Logo & Visual Identity Design", "Motion Graphics & Logo Animation", "Print & Outdoor Media (Hoardings, Press Ads)", "Post-Production & Animation"],
  },
  {
    icon: "share-social-outline",
    title: "Social Media Management",
    intro: "Managed with a thesis, not just a content calendar. Every post ladders to positioning.",
    items: ["Content Strategy & Calendar", "Community Management", "Platform-Specific Content Adaptation", "Paid Social Campaigns"],
  },
  {
    icon: "people-outline",
    title: "Influencer Marketing",
    intro: "A standalone pillar, not a buried bullet — because it matters for luxury and hospitality clients.",
    items: ["Industry-Specific Influencer Curation", "Campaign & Deliverable Management", "Influencer Targeting & Vetting", "In-House Amplification Network"],
  },
  {
    icon: "trending-up-outline",
    title: "Performance Marketing & SEO",
    intro: "Numbers that move the P&L, not vanity dashboards. Full-funnel, honestly reported.",
    items: ["SEO & Keyword Strategy", "Meta & Google Ads", "Landing Page Design & CRO", "Lead Generation Campaigns"],
  },
  {
    icon: "sparkles-outline",
    title: "AEO — Answer Engine Optimization",
    intro: "Our genuine point of differentiation. Almost no small agency offers this yet.",
    items: ["AI Search Visibility (ChatGPT, Perplexity, Google AI Overviews)", "Zero-Click Result Optimization", "Voice Search Optimization"],
  },
  {
    icon: "hardware-chip-outline",
    title: "AI-Powered Marketing",
    intro: "AI without the buzzwords. Systems and workflows that quietly compound over time.",
    items: ["AI Workflow Automation", "Predictive Insights & Analytics", "AI-Assisted Content Systems", "Chatbot & Conversational Tools"],
  },
  {
    icon: "code-slash-outline",
    title: "Web Development",
    intro: "Sites that convert as beautifully as they render. Built to be maintained, not rebuilt.",
    items: ["Website & Landing Page Design", "E-Commerce Development", "UI/UX Audit", "Ongoing Website Management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Capabilities</p>
          <h1 className="mt-4 text-5xl md:text-6xl leading-tight">
            Nine pillars.
            <br />
            One integrated engine.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--ink)]/75">
            We don't sell menus of deliverables. We sell the engine — strategy, production,
            influence, performance and AEO working as one system. Below is what's inside.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white transition-colors hover:border-[color:var(--ember)]"
            >
              {/* visual block — icon placeholder for now, swap for an image/illustration later */}
              <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-[color:var(--cream)] to-[color:var(--ember)]/20">
                <ion-icon name={p.icon} style={{ fontSize: "40px", color: "var(--ember)" }}></ion-icon>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold tracking-widest text-[color:var(--ember)]">
                  0{i + 1}
                </span>
                <h2 className="mt-2 text-xl transition-colors group-hover:text-[color:var(--ember)]">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-[color:var(--ink)]/70">{p.intro}</p>

                <ul className="mt-4 space-y-2 border-t border-[color:var(--border)] pt-4">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[color:var(--ink)]/85">
                      <ion-icon
                        name="checkmark-circle-outline"
                        style={{ fontSize: "16px", color: "var(--ember)", marginTop: "2px", flexShrink: 0 }}
                      ></ion-icon>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-[color:var(--cream)] p-12 md:p-16 text-center">
          <p className="eyebrow justify-center">Let's map it to your brand</p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            Not sure which pillars you need? That's the first conversation.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Book a strategy call <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
            <Link href="/about" className="btn-ghost">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
