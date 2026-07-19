# Brewdminds — CLAUDE.md

Marketing site for Brewdminds, a strategy-first social & marketing agency. Next.js App Router,
React 19, Tailwind CSS v4, bun. No CMS/database — all copy lives directly in the page files.

## Stack & package manager

- **Package manager is bun.** Always `bun add` / `bun run` / `bun install` — never npm/yarn/pnpm.
- Next.js 16 App Router, TypeScript strict mode, ESLint flat config (`next/core-web-vitals` +
  `next/typescript`), Prettier.
- **Tailwind v4 is CSS-first** — there is no `tailwind.config.ts`. All theme tokens (colors, fonts,
  radii) live in `src/app/globals.css` under `@theme inline` and `:root`. Don't create a Tailwind
  config file; extend the theme there instead.
- Path alias `@/*` → `./src/*`.

## Structure

- `src/app/` — routes. Each page that needs client interactivity (`useState`, forms, etc.) is
  split into `page.tsx` (server component, holds the `metadata` export) + a co-located
  `*Client.tsx` component (`"use client"`, the actual interactive UI). Next.js disallows exporting
  `metadata` from a client component, hence the split — see `contact/page.tsx` +
  `contact/ContactClient.tsx` or `blogs/page.tsx` + `blogs/BlogsClient.tsx` for the pattern.
- `src/components/SiteLayout.tsx` wraps every page with `Navbar` + `Footer`; mounted once in
  `src/app/layout.tsx` alongside `SiteLoader` (the first-load splash) and the ionicons `<Script>`.
- `src/lib/email-template.ts` — HTML email template (inline styles, no external CSS — email
  clients don't support it) for the contact-form notification, sent via `src/app/contact/actions.ts`
  (a Server Action using `useActionState`, not a client-side fetch).
- Icons are [Ionicons](https://ionic.io/ionicons), used as the `<ion-icon name="...">` custom
  element directly in JSX (typed via `src/types/ionicons.d.ts`). They're **self-hosted** at
  `public/ionicons/` (not loaded from a CDN) and loaded via `next/script` with
  `strategy="afterInteractive"` in `layout.tsx` — see "Known gotchas" below for why that strategy
  matters.

## Theme tokens (`src/app/globals.css`)

| Token | Purpose |
|---|---|
| `--ember` / `--ember-deep` | Brand accent (muted terracotta-brown). Used for buttons, links, icons, the italic accent word in headlines. |
| `--ink` / `--foreground` | Body/heading text color (independent declarations — see gotcha below). |
| `--cream` | Light neutral background (footer, cards, subtle section fills). |
| `--font-body` (Poppins) / `--font-heading` (Bricolage Grotesque) | Loaded via `next/font/google` in `layout.tsx`. |

Reusable style primitives (`eyebrow`, `btn-primary`, `btn-ghost`, `container-page`, `link-underline`)
are defined as `@utility` blocks in `globals.css` — use these instead of re-styling buttons/labels
ad hoc.

## Known gotchas (hard-won in this repo — read before touching related code)

- **`--ink` and `--foreground` are independent CSS variables**, not one referencing the other, even
  though they're kept at the same value by convention. If you change one for a color-theme update,
  change both, or headings and body text will diverge in color.
- **next/font raw variable name must differ from the semantic Tailwind theme token name.** E.g. the
  Poppins font's own CSS variable is `--font-poppins`; the *semantic* theme token consumed by
  Tailwind utilities is `--font-body: var(--font-poppins), sans-serif;` in `@theme inline`. Naming
  them the same creates a circular `var()` reference and silently breaks.
- **Ionicons must load with `strategy="afterInteractive"`, not `beforeInteractive`.** Ionicons is a
  web component that mutates the DOM (adds `role="img"` + `class="...hydrated"`) the moment it
  loads. If it loads before React hydrates, React sees DOM attributes it didn't render and throws a
  hydration mismatch on every single icon on the page.
- **Next's image-optimizer cache can go stale.** If you edit a raster image in `public/` (e.g. fix
  its transparency/color) and the served result doesn't reflect the change even after a rebuild,
  clear `.next/cache/images/` and restart — it caches optimized output independent of source-file
  edits in some cases.
- **Auto-traced/AI-exported SVG logos are frequently broken in two specific ways**: (1) a
  background rectangle baked into the compound `<path>` data relying on the parent `<g>`'s default
  `fill`, invisible until you crop the viewBox tight and it suddenly shows as a white box — fix by
  setting that group's default fill to `none`; (2) multi-stop "gradients" that are actually N
  separate hardcoded hex fills which drift through unintended hues (e.g. actual greens/blues)
  instead of staying within the intended warm palette. Fix: read all unique fills, sort by
  luminance, and re-interpolate between clean chosen endpoints, substituting 1:1 by original hex
  string (preserves the artwork's shape, only fixes the hue). Also measure the real bounding box via
  a headless browser's `element.getBBox()` to crop the wasted-whitespace viewBox — don't guess it.
- **A `min-h-[calc(100vh-...)]` hero makes a fixed `--window-size` screenshot show only the hero.**
  When verifying below-the-fold content, use a proper full-page screenshot (e.g. Puppeteer's
  `page.screenshot({ fullPage: true })`), not a taller `--window-size` (that just makes the
  100vh-based hero taller too, and you still only see the hero).

## Verification workflow

There's a project-specific `/verify` skill (`.claude/skills/verify/`) — use it (or follow its steps
manually) after any visual or behavioral change: `bun run build` → `bun run start` in the
background → smoke-check routes with `curl` → screenshot with headless Chromium → confirm visually
→ clean up (`pkill` the server, remove temp scripts/screenshots, `bun remove` any devDependency
installed solely for verification like `puppeteer-core`). Don't consider a UI change done until
you've actually looked at a rendered screenshot.
