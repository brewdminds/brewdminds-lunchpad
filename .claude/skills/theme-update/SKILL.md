---
name: theme-update
description: Use when changing brand colors, fonts, or other design tokens on the Brewdminds site — walks through updating globals.css safely, finding hardcoded duplicates elsewhere, recoloring SVG assets, and verifying visually before considering it done.
---

Tailwind v4 in this repo is CSS-first: every theme token (`--ember`, `--ember-deep`, `--ink`,
`--foreground`, `--cream`, `--font-body`, `--font-heading`, etc.) lives in
`src/app/globals.css` under `@theme inline` / `:root`. There is no `tailwind.config.ts` — don't
create one.

## Steps

1. **Compute exact values, don't eyeball.** If changing an OKLCH color, convert it to hex with a
   real OKLab→linear-sRGB→gamma-encoded conversion (a short Python/Node script is fine). Sanity
   check the conversion against a value already in the codebase whose hex is documented in a
   comment (e.g. `--ember: oklch(...); /* was ~#C65D3A */`) before trusting new output.

2. **Edit `globals.css`.** Remember `--ink` and `--foreground` are independent declarations that
   happen to share a value by convention — update both together, or body text and headings will
   diverge. If `.dark { }` redefines the same tokens, decide deliberately whether dark mode should
   track the change (note: dark mode isn't actively toggled anywhere in this app today, so it's
   low-stakes either way, but stay consistent about it).

3. **Find hardcoded duplicates.** `grep` the *old* hex value across the whole repo (not just
   `src/`). Known offenders in this codebase:
   - `src/lib/email-template.ts` — raw inline hex styles (email clients can't read CSS variables)
   - `public/brewd-color.svg` (and any other brand SVG) — baked-in hex fills
   - `public/*.png` — raster assets carry their own baked-in colors; recoloring these is
     meaningfully harder (see the logo-recolor method below, which only applies to flat-fill SVGs,
     not raster line art) — flag to the user rather than silently skipping or silently attempting a
     risky pixel-level recolor.

4. **Recoloring a multi-fill SVG logo/asset**: these are frequently auto-traced/AI-exported and
   have two recurring bugs worth checking for regardless of whether you're recoloring:
   - A background rectangle baked into the first `<path>`'s data, invisible only because it
     inherits the parent `<g>`'s default `fill` — becomes a visible white box once you crop the
     viewBox tight. Fix: set that group's default fill to `none` (verify no visible letterform
     depends on inheriting it first).
   - "Gradient" effects that are actually N separately hardcoded hex fills, often drifting through
     unintended hues (real greens/blues) instead of staying in the intended warm family — a strong
     sign of a bad auto-trace.

   To recolor while preserving the artwork's shape: read every unique `fill="#..."` value, sort by
   luminance, then re-interpolate a new ramp between chosen clean endpoints (e.g. light → new accent
   → new accent-deep) and substitute 1:1 by original hex string, in rank order. Don't hand-edit
   individual path fills — the rank-based substitution is what keeps the shading/shape intact.

   Also measure the artwork's real bounding box via a headless browser (`element.getBBox()` on the
   monochrome/no-color variant if one exists, since a colored variant's background square will
   contaminate the measurement) to crop the `viewBox` tight — don't guess padding.

5. **Verify visually before calling it done** — see the `verify` skill. Screenshot the real pages
   (not just a components-in-isolation demo): homepage hero, a primary button, an icon, the footer,
   the logo (zoomed/cropped, not full-page — small accent colors don't read at thumbnail scale). If
   there's an HTML email template, render it to a file and screenshot that too.

6. **Clean up** every temporary conversion script, comparison page/route, and screenshot — this
   project keeps no scaffolding lying around after a design pass.
