# ROADMAP.md — The Vadim Group Website Development Roadmap

This roadmap outlines all phases required to build, refine, launch, and scale The Vadim Group website. It is designed for a solo developer + AI-assisted workflow and follows professional product-development standards.

---

# 0. Foundations — COMPLETE

**Status:** ✔ Completed

* Project structure defined
* Content system established (`cleaned.md`, `content-blocks.md`)
* Page-level `.md` created
* DESIGN_SYSTEM_EN.md created
* PROJECT_RULES.md created
* IA (Information Architecture) established
* Brand positioning and target audience clarified

---

# 1. Build Phase — CURRENT STAGE

Focus: Build all pages using existing content and components.

## 1.1 Component Refactor & Cleanup

* [ ] Normalize existing components under `/src/components/`
* [ ] Remove duplicate/unused components
* [ ] Create standard layout components:

  * `PageHeader`
  * `Section`
  * `Container`
  * `Footer`
  * `Navbar`
* [ ] Ensure spacing and typography follow DESIGN_SYSTEM_EN.md

## 1.2 Page Assembly (using `.md` content files)

* [ ] Home Page
* [ ] Repairs Page
* [ ] Marine & RV Page
* [ ] Commercial Page
* [ ] About Page
* [ ] Contact Page
* [ ] Blog Page (static for now)
* [ ] FAQ Page
* [ ] Portfolio Page (static for now)

## 1.3 Core UX Functionality

* [ ] Navigation menu
* [ ] Sticky header (if needed)
* [ ] Smooth scrolling between sections
* [ ] Responsive breakpoints for:

  * mobile
  * tablet
  * desktop
* [ ] Standard CTA component

---

# 2. Technical Setup

## 2.1 Code Quality Tools

* [ ] Install & configure **ESLint**
* [ ] Install & configure **Prettier**
* [ ] Add pre-commit hook (optional)

## 2.2 Routing

* [ ] Implement React Router or file-based routing (depending on Vite/React config)
* [ ] Add all key routes:

  * `/` (Home)
  * `/repairs`
  * `/marine-rv`
  * `/commercial`
  * `/about`
  * `/contact`
  * `/faq`
  * `/blog`
  * `/portfolio`

## 2.3 Form Handling

* [ ] Create contact form
* [ ] Decide on form submission method:

  * Email (simple)
  * Backend API
  * Form service (Netlify Forms, Formspree, etc.)

---

# 3. Design Polish & High-Quality Finish

This phase focuses on visual refinement and UX.

## 3.1 Design Enhancements

* [ ] Implement consistent grid & spacing
* [ ] Update typography system
* [ ] Enhance visual hierarchy (H1–H6)
* [ ] Add micro-interactions

## 3.2 Media & Visual Assets

* [ ] Integrate final brand colors
* [ ] Add custom photography (home, marine, RV, repairs)
* [ ] Add future logo
* [ ] Replace placeholders with real visuals

## 3.3 CTA & Microcopy Refinement

* [ ] Finalize CTA texts
* [ ] Finalize headlines
* [ ] Finalize subheadlines
* [ ] Add phone number & direct contact links (if needed)

---

# 4. SEO & AEO (AI Engine Optimization)

## 4.1 Technical SEO

* [ ] Add meta title & description for each page
* [ ] Add OpenGraph tags
* [ ] Add structured data (JSON-LD)
* [ ] Create `robots.txt`
* [ ] Create `sitemap.xml`

## 4.2 AI Engine Optimization (AEO)

* [ ] Create `/public/ai-content/` directory
* [ ] Add:

  * `business-info.md`
  * `services.json`
  * `faq.json`
  * `semantic-graph.json`
* [ ] Add AI meta tags to each page

---

# 5. Launch Preparation

## 5.1 Testing

* [ ] Cross-browser testing
* [ ] Mobile responsiveness deep test
* [ ] Lighthouse audit (performance + accessibility)
* [ ] Final proofreading of content

## 5.2 Deployment

* [ ] Choose hosting (Vercel, Netlify, or custom)
* [ ] Configure build settings
* [ ] Connect domain

## 5.3 Post-Launch

* [ ] Error monitoring (Sentry optional)
* [ ] Analytics setup (Plausible, GA4, or self-hosted)
* [ ] Heatmaps (optional — Hotjar/Clarity)

---

# 6. Future Extensions

These are optional but recommended later:

* Blog CMS integration (Headless CMS or MDX + Git-based workflow)
* Portfolio gallery with before/after images
* Scheduling system integration
* Chat widget or AI assistant
* Client portal
* Automated quoting tool
* Video explanations (YouTube integration)

---

# STATUS VISUALIZATION

You may maintain checkmarks as you progress.

Current stage: **1. Build Phase**

---

# END OF ROADMAP.md