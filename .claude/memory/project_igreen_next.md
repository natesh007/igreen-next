---
name: igreen-next Project
description: Full project record for igreen-next — Next.js 16 site for iGreen Systems, IoT & Digital Transformation company. Covers stack, brand, structure, portfolio cards, animation setup, SEO, and key decisions.
type: project
originSessionId: f05839b9-b5a2-4447-9ef4-e1a3d2c468b1
---
## What This Is
igreen-next is a Next.js 16 rebuild of the igreen CodeIgniter 4 PHP project.
- **PHP source:** `e:/xampp/htdocs/igreen` (CodeIgniter 4, MySQL db: igreen_main)
- **Next.js project:** `e:/xampp/htdocs/igreen-next`
- **Dev server:** `npm run dev` → http://localhost:3000 (kill any running instance with `taskkill /F /IM node.exe` first)

**Why:** Modernising the company website from LAMP/CI4 to Next.js/React/Tailwind.

---

## Stack
- Next.js 16.2.4, React 19, TypeScript
- Tailwind CSS 4 (no tailwind.config.js — uses `@theme` in globals.css)
- **Framer Motion** (installed) — used for scroll reveals, entrance animations, hover glows, counter animation
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
- **Logo:** `/public/igreen_1.png` — rendered via `Logo.tsx`
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

## SEO Keywords (in layout.tsx)
IoT solutions Hyderabad, IoT solutions Kakinada, IoT solutions Andhra Pradesh, smart building management, digital transformation company India, connected devices IoT, facility management IoT, industrial IoT India, web application development Hyderabad, mobile app development India.

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

## Homepage — FROZEN (do not change without user instruction)
Homepage scored ~8.8/10 after full content + UI polish pass. Considered launch-ready.

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
- **Services intro:** "From IoT strategy to digital delivery, we build technology solutions that connect operations, improve visibility, and support long-term growth."
- **Testimonials heading:** "Trusted by Builders, Operators, and Founders"
- **Testimonials support line:** "Real feedback from clients who trusted us to build, improve, and support critical systems."
- **Process intro:** "A clear, collaborative process that keeps your project moving from planning to launch."
- **CTA heading:** "Your next project belongs on this page."
- **CTA body:** "If you need an IoT platform, web application, mobile app, or cloud solution that actually ships — let's talk."

### Testimonials (approved by clients):
- **Hriday** (Co-Founder, Wenalytics IoT Solutions) — WIS platform, 10+ modules
- **Ghanshyam Power** (Director, VWI Travel Pvt Ltd) — 80% faster visa processing
- **Mohd Maqdoom Shahnawaz** (Founder, MubarakRishte.com) — AI matrimonial platform

---

## File Structure
```
src/
├── app/
│   ├── layout.tsx                  — root layout, fonts, Header+Footer, full SEO metadata
│   ├── globals.css                 — Tailwind 4 @theme, noise texture, .btn-primary shimmer, scrollbar
│   ├── page.tsx                    — Home (Hero + ServicesOverview + Stats + Testimonials + Process + CTA)
│   ├── about/page.tsx              — Reveal animations, radial spotlights, gradient value cards
│   ├── contact/page.tsx            — Reveal animations, office cards, form (static, unwired)
│   ├── careers/page.tsx            — 4 open positions + open application
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
│   │   ├── Logo.tsx
│   │   └── Reveal.tsx              — scroll-triggered fade+slide-up (Framer Motion, client)
│   ├── layout/
│   │   ├── Header.tsx              — sticky nav, Services dropdown ("IoT & Digital"), mobile hamburger
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx                — client, Framer Motion entrance, animated glow blobs, radial spotlight
│   │   ├── ServicesOverview.tsx    — client, Reveal stagger, whileHover glow tied to accent color
│   │   ├── Stats.tsx               — client, count-up animation, whileInView, whileHover glow
│   │   ├── Testimonials.tsx        — 3 approved client quotes (Wenalytics, VWI, MubarakRishte)
│   │   ├── Process.tsx             — Reveal stagger, hover glow
│   │   └── CTA.tsx                 — Reveal, shimmer btn-primary button
│   └── services/
│       └── ServicePageTemplate.tsx
public/
└── igreen_1.png
```

---

## Key Decisions & Rules
- **`.btn-primary` class** — always use this for primary CTA buttons (shimmer gradient animation). Do NOT use inline `style={{ background: 'linear-gradient(...)' }}` for primary buttons.
- **`Reveal` component** — use for any section/card that should animate on scroll. Import from `@/components/ui/Reveal`.
- **Cubic bezier in Framer Motion** — must define as `const EASE: [number, number, number, number]`, not inline `number[]` (TypeScript error).
- **No `<div>` inside `<p>`** — AnimatedNumber uses `<span>` not `<div>` to avoid hydration errors.
- **Contact form is static** — no backend wiring; form submit does nothing yet.
- **Single logo file** — `igreen_1.png` is the authoritative logo.
- **All service pages share `ServicePageTemplate`** — accepts badge, title, subtitle, accent color, features[], useCases[], relatedServices[].
- **Tailwind 4 custom colors** — defined in `globals.css` under `@theme`.
- **Addresses appear in:** Footer (Offices column) and Contact page (office cards above the form).
- **Homepage is FROZEN** — do not change without explicit user instruction.

---

## Pending / Next Steps
- **SEO fixes** (when user says "Let's work on SEO"): sitemap.xml, robots.txt, JSON-LD LocalBusiness schema, OG image, fix service page titles/descriptions, fix logo alt text. Full audit in `.claude/memory/seo_audit.md`.
- **Contact form:** wire to email API (Resend or Nodemailer) when ready.
- **Services pages:** content improvements (location keywords, outcome-focused descriptions). Could also add Reveal animations.
- **Deploy:** not yet deployed; runs locally at localhost:3000.
- **More portfolio PDFs** may be provided by user to add additional cards.
- **Next gains** (per review): case studies, portfolio depth, stronger service detail pages.
