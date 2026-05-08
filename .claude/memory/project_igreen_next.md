---
name: igreen-next Project
description: Full project record for igreen-next — Next.js 16 site for iGreen Systems, IoT & Digital Transformation company. Covers stack, brand, file structure, email/reCAPTCHA setup, SEO implementation, key decisions, and pending work.
type: project
originSessionId: f05839b9-b5a2-4447-9ef4-e1a3d2c468b1
---
## What This Is
igreen-next is a Next.js 16 rebuild of the igreen CodeIgniter 4 PHP project.
- **PHP source:** `e:/xampp/htdocs/igreen` (CodeIgniter 4, MySQL db: igreen_main)
- **Next.js project:** `d:/xampp/htdocs/igreen-next` (current machine — previously e:/)
- **Dev server:** `npm run dev` → http://localhost:3000 (kill any running instance with `taskkill /F /IM node.exe` first)
- **Live site:** https://igreensystems.com (deployed on Vercel; also accessible at https://igreen-next.vercel.app)

**Why:** Modernising the company website from LAMP/CI4 to Next.js/React/Tailwind.

---

## Machine Setup (current dev machine)
- **Node.js:** v24.15.0 LTS — installed via `winget install OpenJS.NodeJS.LTS`
- **npm:** v11.12.1
- **PowerShell execution policy:** `RemoteSigned` (set at user scope) — required to run npm scripts
- **PATH refresh needed** in new PowerShell sessions until reboot: `$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")`
- After reboot, `npm run dev` works directly without PATH refresh

---

## Stack
- Next.js 16.2.4, React 19, TypeScript
- Tailwind CSS 4 (no tailwind.config.js — uses `@theme` in globals.css)
- **Framer Motion** (installed) — used for scroll reveals, entrance animations, hover glows, counter animation
- **Nodemailer** — Gmail SMTP email sending (careers apply + contact form)
- **react-google-recaptcha** — reCAPTCHA v2 "I'm not a robot" widget (careers modal + contact form)
- **@react-pdf/renderer 4.5.1** — server-side PDF generation for company brochure (`/api/company-brochure`)
- Google Fonts: Poppins (headings), Inter (body) via `next/font/google`
- No external component library or icon package — inline SVG icons throughout

---

## Brand & Identity
- **Company name:** iGreen Systems
- **Website:** igreensystems.com
- **Founded:** Hyderabad, 2008 (→ "18+ Years Experience" stat, "Since 2008" in hero)
- **Brand cyan:** `#1DBCD6` (IoT/Digital Transformation services, accents)
- **Brand green:** `#5CB85C` (Digital Delivery services, secondary accents)
- **Dark background:** `#0A0F1C` (primary), `#060A12` (sections), `#111827` (cards)
- **Logo:** `/public/igreen_1.png` — rendered via `Logo.tsx` (alt text: "iGreen Systems logo")
- **Theme:** Dark, premium SaaS/IoT aesthetic with noise/grain texture, radial spotlights, glow effects

---

## Design System (post-enhancement)
- **Noise/grain texture:** `body::before` in globals.css — SVG feTurbulence, 2.8% opacity
- **Shimmer CTA button:** `.btn-primary` CSS class — animated gradient sweep, use instead of inline style buttons
- **Scroll reveals:** `src/components/ui/Reveal.tsx` — wraps any server or client content, animates fade+slide-up on scroll. Props: `delay`, `y`, `className`
- **Cubic bezier easing:** always define as `const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]` — TypeScript rejects plain `number[]` with Framer Motion
- **Hover glow on cards:** use Framer Motion `whileHover={{ boxShadow: ... }}` or Tailwind `hover:shadow-[...]`
- **Section backgrounds:** radial-gradient spotlights at top/bottom of sections for depth
- **Gradient divider lines:** `background: linear-gradient(90deg, #1DBCD630, transparent)` instead of flat borders

---

## Brand Positioning
IoT & Digital Transformation as umbrella, web/mobile/cloud as delivery capabilities underneath.

### Service structure:
**IoT & Digital** (cyan, `#1DBCD6`):
- IoT Solutions → `/services/iot-solutions`
- Connected Devices → `/services/connected-devices`
- Smart Manufacturing → `/services/smart-manufacturing`
- Edge Computing → `/services/edge-computing`
- Digital Transformation → `/services/digital-transformation`

**Digital Delivery** (green, `#5CB85C`):
- Web Applications → `/services/web-applications`
- Mobile Apps → `/services/mobile-apps`
- Cloud Solutions → `/services/cloud-solutions`

---

## Navigation (current state)
- Desktop: Home | About | Services (dropdown) | Portfolio | Careers | [Get in Touch button]
- **"Contact" plain link was removed** — "Get in Touch" gradient button is the sole CTA
- Services dropdown header changed from "IoT & Digital Transformation" to **"IoT & Digital"** (was wrapping to 2 lines)
- Mobile: same links + "Get in Touch" button at bottom

---

## Stats (confirmed by user)
- **18+** Years Experience (founded 2008)
- 25 Team Members
- 232+ Clients
- 521+ Projects Delivered
- Stats animate with count-up when scrolled into view (Stats.tsx)

---

## Contact Details
- **General email:** contact@igreensystems.com
- **HR/Careers email:** hr@igreensystems.com
- **Phone:** +91 9849481081, +91 9676067666

### Hyderabad Office
#1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur, Hyderabad, Telangana 500081, India.

### Kakinada Office
4/52-2, Sita Enclave, Rama Reddy Nagar, Pratap Nagar Bridge, Kakinada, Andhra Pradesh 533004, India.

---

## Social Links
- **LinkedIn:** https://www.linkedin.com/company/igreensystems/ (in Footer, JSON-LD sameAs)
- **Twitter/X:** none — icon removed from footer

---

## reCAPTCHA (production notes)
- v2 "I'm not a robot" on both contact form and careers apply modal
- Keys in `.env.local` (not in git): `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`
- **Production domains must be whitelisted** in Google reCAPTCHA admin: `igreensystems.com` and `igreen-next.vercel.app` are both added
- Vercel env vars also set in Vercel dashboard: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`, `GMAIL_USER`, `GMAIL_APP_PASSWORD`

---

## SEO — IMPLEMENTED ✅
All major SEO work is complete. Key items done:

### Technical
- `src/app/sitemap.ts` — 16 pages with priority + changeFrequency, auto-served at `/sitemap.xml`
- `src/app/robots.ts` — allow all, disallow `/api/`, sitemap pointer
- `src/app/opengraph-image.tsx` — programmatic 1200×630 OG image (dark brand card, auto-serves `og:image` + `twitter:image`)

### Structured Data (JSON-LD)
- `layout.tsx` — sitewide: `Organization` (name, logo, address, LinkedIn, founded 2008), `LocalBusiness` x2 (Hyderabad with geo coords + Kakinada), `WebSite` schema
- All 8 service pages — `BreadcrumbList` + `Service` schema via `ServicePageTemplate` (`path` prop required)
- `careers/page.tsx` — `JobPosting` schema for both open roles (eligible for Google Jobs)
- `contact/page.tsx` — `BreadcrumbList` + `ContactPage` schema

### Metadata
- All page titles fixed: removed manual `| iGreen` (template `%s | iGreen Systems` now handles it)
- All service page descriptions include location keywords (Hyderabad, Kakinada, Andhra Pradesh, India)
- Logo alt text: `"iGreen Systems logo"`
- Global keywords expanded in `layout.tsx`

---

## SEO Keywords (in layout.tsx)
IoT solutions Hyderabad, IoT solutions Kakinada, IoT solutions Andhra Pradesh, smart building management India, digital transformation company Hyderabad, connected devices IoT India, facility management IoT, industrial IoT India, web application development Hyderabad, mobile app development India, iGreen Systems, IoT company Telangana, digital transformation Andhra Pradesh, Flutter developer Hyderabad, cloud solutions India.

---

## Portfolio — 9 Real Project Cards (portfolio/page.tsx)
All use `isReal: true`. Sort: featured first, then real, then placeholder.

| # | Title | Client | Category | Tag Color | Featured |
|---|-------|---------|----------|-----------|---------|
| 1 | WIS — Smart Building Management Platform | Wenalytics IoT Solutions, Hyderabad | IoT | #1DBCD6 | ✅ |
| 2 | VWI — Seamless Visa Processing Platform | VWI Travel Pvt Ltd (Visa World India) | Digital Transformation | #5CB85C | |
| 3 | WIS — Hotel & Enterprise Facility Management | Wenalytics IoT Solutions (Hospitality) | IoT | #1DBCD6 | |
| 4 | WIS — Intelligent Facility Operations Platform | Wenalytics IoT Solutions | Digital Transformation | #5CB85C | |
| 5 | WIS - Fire Pump, IoT Safety Monitoring System | Wenalytics IoT Solutions, Hyderabad | IoT | #1DBCD6 | |
| 6 | WIS CSMS — Cold Storage & Freezer Monitoring | Wenalytics IoT Solutions | IoT | #1DBCD6 | |
| 7 | WIS — Restaurant Facility Automation | Wenalytics IoT Solutions (Americas) | IoT | #1DBCD6 | |
| 8 | MubarakRishte — AI-Powered Matrimonial Platform | MubarakRishte.com, Hyderabad | Digital Transformation | #5CB85C | |
| 9 | Liquidynamics OilCop — Tank Monitoring Web Portal | Liquidynamics, USA | IoT | #1DBCD6 | |

**Card types:** `RealCard` (featured badge, accent bar, capability pills, checkmark highlights) and `PlaceholderCard` (coming soon). No placeholders currently in the grid.

**To add a new project card:** add an object to the `projects` array in `src/app/portfolio/page.tsx` with `isReal: true`, following the existing pattern.

---

## Careers — Open Positions (2 roles, as of 2026-05-05)
Managed in `src/components/careers/CareersJobListings.tsx`. Each card has a collapsed summary + "View more / View less" toggle for full details.

| Role | Dept | Type | Location | Experience |
|------|------|------|----------|------------|
| Flutter Developer (Android & iOS) | Engineering | Full-Time | Hybrid | 0–2+ years |
| Digital Transformation Consultant | Consulting | Full-Time | Hybrid | 0–3+ years |

- **JobCard component** in `CareersJobListings.tsx` handles expand/collapse state per card
- **Open Application CTA** at the bottom for candidates who don't see a matching role
- **Removed roles:** Full Stack Developer, IoT Solutions Engineer

---

## Homepage — FROZEN (do not change without user instruction)
Homepage scored ~8.8/10 after full content + UI polish pass. Considered launch-ready.

### Hero notes:
- Background video (`/hero-bg.mp4`): `opacity-40`, dark overlay `opacity: 0.4`
- "Connected Devices." span has `whiteSpace: 'nowrap'` to prevent mid-phrase line break on desktop

### Homepage section order & backgrounds:
| Section | Background | File |
|---------|-----------|------|
| Hero | `#0A0F1C` | `components/home/Hero.tsx` |
| Services | `#0A0F1C` + radial | `components/home/ServicesOverview.tsx` |
| Stats | gradient `#060A12→#0A0F1C→#060A12` | `components/home/Stats.tsx` |
| Testimonials | `#060A12` | `components/home/Testimonials.tsx` |
| Process | `#0A0F1C` + green top border | `components/home/Process.tsx` |
| CTA | `#060A12` | `components/home/CTA.tsx` |

### Key homepage copy (finalized):
- **Hero headline:** "Smart Buildings. Connected Devices. Real Results — Since 2008."
- **Hero subtext:** "From fire pump monitoring in Hyderabad to large-scale visa processing platforms, we deliver practical technology solutions that solve real business problems."
- **Secondary CTA:** "View Our Work →" → `/portfolio`

### Testimonials (approved by clients):
- **Hriday** (Co-Founder, Wenalytics IoT Solutions) — WIS platform, 10+ modules
- **Ghanshyam Power** (Director, VWI Travel Pvt Ltd) — 80% faster visa processing
- **Mohd Maqdoom Shahnawaz** (Founder, MubarakRishte.com) — AI matrimonial platform

---

## File Structure
```
src/
├── app/
│   ├── layout.tsx                  — root layout, fonts, Header+Footer, full SEO metadata + JSON-LD
│   ├── globals.css                 — Tailwind 4 @theme, noise texture, .btn-primary shimmer, scrollbar
│   ├── page.tsx                    — Home (Hero + ServicesOverview + Stats + Testimonials + Process + CTA)
│   ├── sitemap.ts                  — auto-generates /sitemap.xml (16 pages)
│   ├── robots.ts                   — auto-generates /robots.txt
│   ├── opengraph-image.tsx         — programmatic 1200×630 OG image (edge runtime, ImageResponse)
│   ├── about/page.tsx              — 10-section IoT-focused redesign (see About Page section below)
│   ├── contact/page.tsx            — Reveal animations, office cards, wired form + BreadcrumbList JSON-LD
│   ├── careers/page.tsx            — server component (metadata + header + perks + JobPosting JSON-LD)
│   ├── api/
│   │   ├── apply/route.ts          — POST handler: job applications → hr@igreensystems.com (FormData, resume attachment)
│   │   ├── contact/route.ts        — POST handler: contact form → contact@igreensystems.com (JSON)
│   │   └── company-brochure/route.tsx — GET handler: generates 5-page A4 PDF brochure via @react-pdf/renderer
│   ├── portfolio/page.tsx          — 9 real cards, RealCard + PlaceholderCard, Reveal stagger
│   ├── services/
│   │   ├── page.tsx
│   │   ├── iot-solutions/page.tsx
│   │   ├── connected-devices/page.tsx
│   │   ├── smart-manufacturing/page.tsx
│   │   ├── edge-computing/page.tsx
│   │   ├── digital-transformation/page.tsx
│   │   ├── web-applications/page.tsx
│   │   ├── mobile-apps/page.tsx
│   │   └── cloud-solutions/page.tsx
│   └── useful-links/
│       ├── terms-of-service/page.tsx
│       └── privacy-policy/page.tsx
├── components/
│   ├── ui/
│   │   ├── Logo.tsx                — alt="iGreen Systems logo"
│   │   └── Reveal.tsx              — scroll-triggered fade+slide-up (Framer Motion, client)
│   ├── layout/
│   │   ├── Header.tsx              — sticky nav, Services dropdown ("IoT & Digital"), mobile hamburger
│   │   └── Footer.tsx              — LinkedIn only (Twitter removed), links to /company/igreensystems/
│   ├── home/
│   │   ├── Hero.tsx                — client, Framer Motion entrance, video bg (opacity-40), glow blobs
│   │   ├── ServicesOverview.tsx    — client, Reveal stagger, whileHover glow tied to accent color
│   │   ├── Stats.tsx               — client, count-up animation, whileInView, whileHover glow
│   │   ├── Testimonials.tsx        — 3 approved client quotes (Wenalytics, VWI, MubarakRishte)
│   │   ├── Process.tsx             — Reveal stagger, hover glow
│   │   └── CTA.tsx                 — Reveal, shimmer btn-primary button
│   ├── services/
│   │   └── ServicePageTemplate.tsx — requires `path: string` prop; injects BreadcrumbList + Service JSON-LD
│   ├── careers/
│   │   ├── ApplyModal.tsx          — client, modal popup: cover letter + resume upload + reCAPTCHA v2 + success state
│   │   └── CareersJobListings.tsx  — client, JobCard with expand/collapse, Apply Now modal, Open Application CTA
│   └── contact/
│       └── ContactForm.tsx         — client, wired form with reCAPTCHA v2, POSTs to /api/contact
public/
└── igreen_1.png
```

---

## Key Decisions & Rules
- **`.btn-primary` class** — always use this for primary CTA buttons (shimmer gradient animation). Do NOT use inline `style={{ background: 'linear-gradient(...)' }}` for primary buttons.
- **`Reveal` component** — use for any section/card that should animate on scroll. Import from `@/components/ui/Reveal`.
- **Cubic bezier in Framer Motion** — must define as `const EASE: [number, number, number, number]`, not inline `number[]` (TypeScript error).
- **No `<div>` inside `<p>`** — AnimatedNumber uses `<span>` not `<div>` to avoid hydration errors.
- **Contact form is wired** — POSTs to `/api/contact`, sends to contact@igreensystems.com via Gmail SMTP.
- **Careers apply modal is wired** — POSTs FormData to `/api/apply`, sends to hr@igreensystems.com with resume attachment.
- **Email sender:** hr@igreensystems.com (Google Workspace Gmail) — credentials in `.env.local` (GMAIL_USER, GMAIL_APP_PASSWORD).
- **reCAPTCHA:** v2 "I'm not a robot" — keys in `.env.local` (NEXT_PUBLIC_RECAPTCHA_SITE_KEY, RECAPTCHA_SECRET_KEY). Both forms verify server-side. Production domains must be whitelisted in Google reCAPTCHA admin.
- **Single logo file** — `igreen_1.png` is the authoritative logo.
- **`ServicePageTemplate` requires `path` prop** — e.g. `path="/services/iot-solutions"`. Used to generate BreadcrumbList + Service JSON-LD. All 8 service pages already pass it.
- **Page metadata titles** — never add `| iGreen` manually. Use just the page name (e.g. `title: 'IoT Solutions'`). The template `%s | iGreen Systems` in layout.tsx handles the suffix.
- **Tailwind 4 custom colors** — defined in `globals.css` under `@theme`.
- **Addresses appear in:** Footer (Offices column) and Contact page (office cards above the form).
- **Homepage is FROZEN** — do not change without explicit user instruction.
- **`@react-pdf/renderer` rules** — must add to `serverExternalPackages` in `next.config.ts`; never use `Font.register()` with remote URLs (fails in serverless); for bold-italic use `fontFamily: 'Helvetica-BoldOblique'` not `fontFamily: 'Helvetica-Bold'` + `fontStyle: 'italic'`; wrap `renderToBuffer()` result as `new Uint8Array(buffer)` for `Response`. See `feedback_react_pdf.md`.

---

## About Page — 10-Section Redesign (2026-05-06)
Complete rewrite of `src/app/about/page.tsx`. Sections in order:
1. **Hero** — center-aligned, badge pill, H1, subtext, `btn-primary` CTA → `/contact`
2. **Who We Are** — 2-col: text left + 2×2 stat cards right
3. **What We Do** — 5 pillar cards (Smart Building Automation, Asset Lifecycle Management, Connected Field Operations, System Integrations, Predictive Maintenance)
4. **Founder Story** — centered, pull quote `blockquote` in cyan with decorative `"` marks (use `aria-hidden="true"` on quote spans)
5. **Our Approach** — Fragment-based horizontal step flow (Discover → Design → Build → Deploy → Optimize) with connector lines on desktop
6. **Our Impact** — 2-col grid, 5 outcome items
7. **Vision** — centered, goal bullets with cyan dot accents
8. **Why iGreen** — 5 differentiator cards, 5th card centered in 3-col grid via `lg:col-start-2`
9. **Global Outlook** — gradient-border highlight card (reuses CTA.tsx mask technique)
10. **Download Brochure** — card banner with PDF download link → `/api/company-brochure`
11. **Final CTA** — gradient-border card, "Let's Build Something Intelligent"

Heading fix: `whiteSpace: 'nowrap'` on `"What's Next"` span (same pattern as Hero's "Connected Devices." span).

---

## Company Brochure PDF
- **Route:** `GET /api/company-brochure` → `src/app/api/company-brochure/route.tsx`
- **Library:** `@react-pdf/renderer` 4.5.1
- **Pages:** Cover · About+Stats · Services · Portfolio (6 projects) · Why iGreen+Contact
- **Design:** Light/white, A4, Helvetica built-in fonts, brand cyan/green accents
- **Download filename:** `iGreen-Systems-Company-Profile.pdf`
- **`next.config.ts`** has `serverExternalPackages: ['@react-pdf/renderer']` — required

---

## Pending / Next Steps
- **OG image:** Current programmatic image uses text only. A richer branded image would improve social sharing previews.
- **More portfolio cards** may be provided by user to add to `portfolio/page.tsx` and the PDF brochure.
- **Next gains** (per review): case studies, portfolio depth, stronger service detail pages.
- **Google Search Console:** Submit sitemap at `https://igreensystems.com/sitemap.xml` once site is indexed.
- **Careers:** Add or remove roles as hiring needs change — edit the `openings` array in `CareersJobListings.tsx` and the `careersJsonLd` array in `careers/page.tsx`.
