---
name: SEO Audit — igreen-next
description: SEO audit for igreen-next. All items completed 2026-05-05. Kept for reference and remaining opportunities.
type: project
originSessionId: f05839b9-b5a2-4447-9ef4-e1a3d2c468b1
---

## Status: COMPLETED ✅ (2026-05-05)
All items from the original audit have been implemented.

---

## What Was Implemented

### ✅ High Priority (all done)
1. **`sitemap.ts`** — `src/app/sitemap.ts`, 16 pages with priority/changeFreq, auto-served at `/sitemap.xml`
2. **`robots.ts`** — `src/app/robots.ts`, allows all crawlers, disallows `/api/`, points to sitemap
3. **JSON-LD structured data** — `layout.tsx`: `Organization` + `LocalBusiness` x2 (Hyderabad with geo + Kakinada) + `WebSite`. Per-page: `BreadcrumbList` + `Service` on all 8 service pages, `JobPosting` x2 on careers, `ContactPage` on contact.

### ✅ Medium Priority (all done)
4. **OG image** — `src/app/opengraph-image.tsx`: programmatic 1200×630 via Next.js `ImageResponse` (edge runtime). Dark branded card. Auto-serves `og:image` + `twitter:image`.
5. **Service page titles fixed** — all removed manual `| iGreen`, now use template `%s | iGreen Systems`
6. **Service page descriptions** — all include Hyderabad / Kakinada / Andhra Pradesh / India keywords

### ✅ Low Priority (done)
7. **Logo alt text** — changed from `"iGreen"` to `"iGreen Systems logo"` in `Logo.tsx`

---

## Remaining Opportunities
- **Google Search Console:** submit `https://igreensystems.com/sitemap.xml` to accelerate indexing
- **OG image upgrade:** current programmatic image is text-only; a richer illustrated version would improve click-through on social shares
- **Review/Rating schema:** could add `AggregateRating` once enough client reviews are collected
