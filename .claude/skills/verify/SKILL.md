---
name: verify
description: Project-specific steps for verifying a change to the Brewdminds Next.js site actually works — build, launch, exercise the affected route(s), screenshot, confirm, clean up. Used by the generic /verify skill for this repo.
---

## Launch

```bash
bun run build          # must stay clean — this also runs the TypeScript check + ESLint
bun run start           # run in the background; it's a production server, not dev
```

Wait ~2-3s after starting, then smoke-check the routes you touched:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/<route>
```

If port 3000 is already bound from a previous session, `pkill -f "next-server"` first — background
`bun run build && bun run start` chains occasionally report a spurious non-zero exit from an
unrelated `pkill` earlier in the same chain; just re-run the command, don't assume it actually
failed without checking.

## Look at it — don't just check it returns 200

Take an actual screenshot with headless Chromium:

```bash
chromium-browser --headless=new --disable-gpu --no-sandbox \
  --screenshot=/tmp/check.png --window-size=1600,900 --virtual-time-budget=4000 \
  http://localhost:3000/<route>
```

Then read the resulting PNG. For anything below the first screen, don't just make `--window-size`
taller — **the homepage hero is `min-h-[calc(100vh-6rem)]`, so a taller `--window-size` just makes
the hero taller too and you still only see the hero.** Either navigate to a page without that hero
section to check the footer/shared components, or use a real full-page screenshot (Puppeteer's
`page.screenshot({ fullPage: true })`) if you need the homepage specifically.

For pixel-level detail (logo accent color, icon crispness, small UI elements), crop and/or upscale
the screenshot rather than trying to eyeball a full-page shot — a rendered detail can look fine at
thumbnail scale and be visibly wrong up close.

## When you need real DOM interaction, not just a static screenshot

Static screenshots can't confirm things like: a checkbox actually got checked, a form action fired
and returned the expected state, or an animation is present in the DOM. For that, install
`puppeteer-core` **as a temporary devDependency**:

```bash
bun add -d puppeteer-core
```

launch it pointed at the system Chromium (`executablePath: "/usr/bin/chromium-browser"`), drive the
interaction, assert on the result, then immediately:

```bash
bun remove puppeteer-core
```

Never leave it in `package.json` after verification is done.

Known Puppeteer gotcha in this repo: `html { scroll-behavior: smooth; }` is set globally, and
`page.click(selector)` auto-scrolls the target into view before clicking — if that scroll hasn't
settled yet, the click can land on stale pre-scroll coordinates and silently miss. Prefer
`page.evaluate(() => el.click())` (a real DOM `.click()` call) over coordinate-based clicking when
a `page.click()` result looks suspicious (e.g. a checkbox that won't check).

## Clean up, always

Before considering verification done:
- `pkill` any server you started in the background
- Delete every temporary check script (`.mjs`/`.ts`), preview HTML file, and screenshot you created
  — in the repo, in `/tmp`, and anywhere else
- `bun remove` any devDependency (typically `puppeteer-core`) installed solely for this
  verification pass
- Confirm with `git status` that only the intended source files show as changed
