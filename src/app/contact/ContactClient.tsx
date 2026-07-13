"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { sendContactEmail, type ContactFormState } from "./actions";

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

const initialState: ContactFormState = { status: "idle" };

export function ContactClient() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Say hello</p>
          <h1 className="mt-4 text-5xl md:text-6xl leading-tight">
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
            {state.status === "success" ? (
              <div className="text-center py-16">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--ember)]">
                  <ion-icon name="checkmark-outline" style={{ fontSize: "28px" }}></ion-icon>
                </div>
                <h2 className="mt-5 text-2xl">Message received.</h2>
                <p className="mt-2 text-[color:var(--ink)]/70">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form action={formAction} className="grid gap-5">
                {/* Honeypot — hidden from real visitors, left off-screen rather
                    than display:none so simple bots that check computed style
                    still fill it in. */}
                <input
                  type="text"
                  name="company_site"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
                />

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
                  <select
                    name="service"
                    defaultValue="Not sure yet — let's talk"
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ember)]"
                  >
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
                  <label className="text-sm font-medium text-[color:var(--ink)]">Tell us about your brand</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Where you are, where you want to go, what's in the way..."
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ember)] resize-none"
                  />
                </div>

                <label className="flex items-center gap-3 text-sm text-[color:var(--ink)]/80">
                  <input
                    type="checkbox"
                    name="not_robot"
                    required
                    className="h-4 w-4 rounded border-[color:var(--border)] accent-[color:var(--ember)]"
                  />
                  I'm not a robot
                </label>

                {state.status === "error" && state.message ? (
                  <p className="text-sm text-red-600">{state.message}</p>
                ) : null}

                <SubmitButton />
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

            {/* Studio map — commented out for now, not needed yet.
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[color:var(--cream)] to-[color:var(--ember)]/25 grid place-items-center">
              <div className="text-center">
                <ion-icon name="map-outline" style={{ fontSize: "48px", color: "var(--ember)" }}></ion-icon>
                <p className="mt-3 text-sm font-medium text-[color:var(--ink)]">Studio · Mumbai</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="btn-primary self-start disabled:opacity-60">
      {pending ? "Sending…" : "Send message"}
      <ion-icon name="paper-plane-outline"></ion-icon>
    </button>
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
