import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Brewdminds" },
      { name: "description", content: "Tell us about your brand. We reply within 24 hours." },
      { property: "og:title", content: "Contact Brewdminds" },
      { property: "og:description", content: "Start a conversation with a strategy-first creative agency." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const contactInfo = [
  { icon: "mail-outline", label: "Email", value: "hello@brewdminds.com" },
  { icon: "call-outline", label: "Phone", value: "+91 90000 00000" },
  { icon: "location-outline", label: "Studio", value: "Mumbai · Remote worldwide" },
  { icon: "time-outline", label: "Hours", value: "Mon–Fri, 10:00–19:00 IST" },
];

const socials = [
  { icon: "logo-instagram", name: "Instagram", href: "https://instagram.com" },
  { icon: "logo-linkedin", name: "LinkedIn", href: "https://linkedin.com" },
  { icon: "logo-twitter", name: "Twitter / X", href: "https://twitter.com" },
  { icon: "logo-youtube", name: "YouTube", href: "https://youtube.com" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Say hello</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Tell us about your brand.
            <br />
            We'll reply within 24 hours.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--ink)]/75">
            No sales tricks, no automated funnels. A real conversation with someone who'll
            actually be on your project.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 md:p-10">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--ember)]">
                  <ion-icon name="checkmark-outline" style={{ fontSize: "28px" }}></ion-icon>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Message received.</h2>
                <p className="mt-2 text-[color:var(--ink)]/70">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your full name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@brand.com" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" name="phone" placeholder="+91 ..." />
                  <Field label="Company" name="company" placeholder="Brand or company name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[color:var(--ink)]">Service of interest</label>
                  <select className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ember)]">
                    <option>Not sure yet — let's talk</option>
                    <option>Brand Strategy & Positioning</option>
                    <option>Content Production</option>
                    <option>Social Media Management</option>
                    <option>Influencer Marketing</option>
                    <option>Performance Marketing & SEO</option>
                    <option>AEO — Answer Engine Optimization</option>
                    <option>AI-Powered Marketing</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[color:var(--ink)]">Budget range</label>
                  <select className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ember)]">
                    <option>Under ₹2L / month</option>
                    <option>₹2L – ₹5L / month</option>
                    <option>₹5L – ₹10L / month</option>
                    <option>₹10L+ / month</option>
                    <option>Project-based</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[color:var(--ink)]">Tell us about your brand</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Where you are, where you want to go, what's in the way..."
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ember)] resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary self-start">
                  Send message <ion-icon name="paper-plane-outline"></ion-icon>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl bg-[color:var(--cream)] p-8">
              <p className="eyebrow">Details</p>
              <ul className="mt-6 space-y-5">
                {contactInfo.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[color:var(--ember)]">
                      <ion-icon name={c.icon} style={{ fontSize: "20px" }}></ion-icon>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[color:var(--ink)]/60">{c.label}</p>
                      <p className="text-sm font-medium text-[color:var(--ink)] mt-0.5">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[color:var(--border)] p-8">
              <p className="eyebrow">Follow along</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm hover:border-[color:var(--ember)] hover:text-[color:var(--ember)] transition-colors"
                  >
                    <ion-icon name={s.icon} style={{ fontSize: "18px" }}></ion-icon>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[color:var(--cream)] to-[color:var(--ember)]/25 grid place-items-center">
              <div className="text-center">
                <ion-icon name="map-outline" style={{ fontSize: "48px", color: "var(--ember)" }}></ion-icon>
                <p className="mt-3 text-sm font-medium text-[color:var(--ink)]">Studio · Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-[color:var(--ink)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ember)]"
      />
    </div>
  );
}
