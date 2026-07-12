"use client";

import Link from "next/link";

import { Logo } from "./Logo";

const socials = [
  { name: "Instagram", icon: "logo-instagram", href: "https://instagram.com" },
  { name: "LinkedIn", icon: "logo-linkedin", href: "https://linkedin.com" },
  { name: "Twitter / X", icon: "logo-twitter", href: "https://twitter.com" },
  { name: "YouTube", icon: "logo-youtube", href: "https://youtube.com" },
];

const pillars = [
  "Brand Strategy",
  "Content Production",
  "Social Media",
  "Influencer Marketing",
  "Performance & SEO",
  "AEO",
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] text-[color:var(--ink)] mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-[color:var(--ink)]/80 max-w-xs">
            Strategy-first, craft-obsessed. We help ambitious brands show up with intention — not just content.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/70 hover:bg-[color:var(--ember)] hover:text-white transition-colors"
              >
                <ion-icon name={s.icon} style={{ fontSize: "18px" }}></ion-icon>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blogs", label: "Blogs" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="hover:text-[color:var(--ember)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4">What we do</h4>
          <ul className="space-y-2 text-sm">
            {pillars.map((p) => (
              <li key={p}>
                <Link href="/services" className="hover:text-[color:var(--ember)] transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4">Say hello</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <ion-icon name="mail-outline" style={{ fontSize: "18px", color: "var(--ember)" }}></ion-icon>
              hello@brewdminds.com
            </li>
            <li className="flex items-center gap-3">
              <ion-icon name="call-outline" style={{ fontSize: "18px", color: "var(--ember)" }}></ion-icon>
              +91 90000 00000
            </li>
            <li className="flex items-center gap-3">
              <ion-icon name="location-outline" style={{ fontSize: "18px", color: "var(--ember)" }}></ion-icon>
              Mumbai · Remote worldwide
            </li>
          </ul>

          <form
            className="mt-6 flex w-full items-center gap-2 rounded-full bg-white p-1.5 pl-4 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[color:var(--ink)]/50"
            />
            <button type="submit" className="btn-primary shrink-0 !py-2 !px-4 text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[color:var(--ink)]/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[color:var(--ink)]/70">
          <p>© {new Date().getFullYear()} Brewdminds. Crafted with intent.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[color:var(--ember)]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[color:var(--ember)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
