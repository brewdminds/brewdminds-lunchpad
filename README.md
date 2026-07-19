# Brewdminds

Marketing site for **Brewdminds** — a strategy-first, craft-obsessed social & marketing agency.
Built with Next.js (App Router), React 19, and Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first theming, no `tailwind.config.ts`; all tokens live in
  `src/app/globals.css`
- **[Resend](https://resend.com)** for contact-form email delivery (via a Server Action)
- **[Ionicons](https://ionic.io/ionicons)**, self-hosted under `public/ionicons/`
- **bun** as the package manager and task runner

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Start the dev server |
| `bun run build` | Production build (also runs TypeScript + ESLint) |
| `bun run start` | Serve the production build |
| `bun run lint` | ESLint only |
| `bun run format` | Prettier, writes in place |

### Environment variables

The contact form (`src/app/contact/`) sends email via Resend. Copy `.env.example` to `.env.local`
and fill in real values:

```bash
cp .env.example .env.local
```

| Variable | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | Yes | From the [Resend dashboard](https://resend.com/api-keys). Without it, the contact form fails gracefully with a user-facing error instead of crashing. |
| `CONTACT_EMAIL_TO` | No | Defaults to `hello@brewdminds.com`. |
| `CONTACT_EMAIL_FROM` | No | Defaults to Resend's shared testing sender, which can only deliver to the email on the Resend account itself. For real production delivery, verify your own sending domain in Resend and set this to an address on it. |

## Project structure

```
src/
  app/                    Routes (App Router)
    <route>/page.tsx      Server component — holds `metadata`, renders the client piece if any
    <route>/*Client.tsx    "use client" — interactive UI, co-located with its page
    layout.tsx             Root layout: fonts, metadata, SiteLoader, SiteLayout, ionicons script
    globals.css            All Tailwind v4 theme tokens + custom utilities live here
    contact/actions.ts      Server Action for the contact form (Resend email send)
  components/              Navbar, Footer, Logo, SiteLayout, SiteLoader
  lib/email-template.ts    HTML email template for contact-form notifications
  types/ionicons.d.ts       JSX typing for the <ion-icon> custom element
public/
  ionicons/                 Self-hosted Ionicons bundle (not loaded from a CDN)
  brewd.svg, brewd-color.svg  Logo (mono / accent-colored)
```

## Working with Claude Code

This repo has a `CLAUDE.md` with project-specific conventions and hard-won gotchas (Tailwind v4
theming, the Server Action + client-split pattern, ionicons hydration timing, SVG-recoloring
pitfalls, and more) — read it before making structural or theme changes. There are also two project
subagents (`.claude/agents/`) — `engineering` for feature/structural work, `style-theme` for
color/typography/brand-consistency work — and two skills (`.claude/skills/`) — `verify` (the
project's build → serve → screenshot verification workflow) and `theme-update` (the safe process
for changing brand colors/fonts across CSS, the email template, and SVG assets).
