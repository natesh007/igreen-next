---
name: SEO Audit — igreen-next
description: Full SEO audit of igreen-next. Load this when user says "Let's work on SEO". Lists what's good and what's missing with priority levels.
type: project
originSessionId: f05839b9-b5a2-4447-9ef4-e1a3d2c468b1
---
## Trigger
Load this memory whenever the user says "Let's work on SEO" or asks about SEO for igreen-next.

---

## What's Already Good
- `lang="en"` on `<html>`
- Title template (`%s | iGreen Systems`) in layout.tsx
- Meta descriptions on most pages
- OpenGraph + Twitter card tags in layout.tsx
- Robots meta (`index: true, follow: true`)
- `metadataBase` set to `https://igreensystems.com`
- Semantic HTML — `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`
- `aria-label` on social icons in Footer
- `rel="noopener noreferrer"` on external links
- Internal linking via nav + footer
- `next/image` with `priority` on logo

---

## Issues to Fix (priority order)

### 🔴 High Priority
1. **No `sitemap.xml`** — Google can't discover all pages. Fix: create `src/app/sitemap.ts` using Next.js built-in sitemap API.
2. **No `robots.txt`** — No crawl guidance for bots. Fix: create `src/app/robots.ts`.
3. **No JSON-LD structured data** — Critical for local SEO (Hyderabad/Kakinada searches). Need `LocalBusiness` schema for both offices + `Organization` schema. Add to `layout.tsx` via `<script type="application/ld+json">`.

### 🟠 Medium Priority
4. **No OG image** — Social shares show blank preview. Fix: add a default OG image (1200×630px) to `/public/` and reference in `metadataBase` openGraph.images.
5. **Service page titles inconsistent** — All service pages use `'IoT Solutions | iGreen'` format (hardcoded, bypasses the `%s | iGreen Systems` template, and says "iGreen" not "iGreen Systems"). Fix: change to just `'IoT Solutions'` so the template applies.
6. **Service page descriptions lack location keywords** — Missing Hyderabad/Kakinada/Andhra Pradesh in individual service page descriptions.

### 🟡 Low Priority
7. **Logo alt text** — Currently `"iGreen"`, should be `"iGreen Systems logo"`.

---

## Files to Touch When Fixing
- `src/app/sitemap.ts` — create new
- `src/app/robots.ts` — create new
- `src/app/layout.tsx` — add JSON-LD script block, add OG image
- `src/app/services/*/page.tsx` — fix titles + descriptions (8 files)
- `src/components/ui/Logo.tsx` — fix alt text
