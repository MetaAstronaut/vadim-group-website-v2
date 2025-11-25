# DESIGN SYSTEM V2 — The Vadim Group

**Version:** 2.1
**Status:** Draft
**Date:** November 2025

---

## 1. DESIGN PHILOSOPHY

### 1.1 Core Design Principles

1.  **"European Precision" (The Craftsman)**
    *   **Concept:** Design should feel engineered, not decorated. Every line, space, and color should have a purpose.
    *   **Visual Translation:** Clean alignment, structured grids, refined typography, lack of unnecessary "fluff."

2.  **"Calm Authority" (The Guardian)**
    *   **Concept:** We reduce the client's anxiety through order and clarity. The site must feel stable and grounded.
    *   **Visual Translation:** Generous whitespace, cool/neutral tones, solid typography, no jarring animations.

3.  **"Transparent Quality" (The Trust)**
    *   **Concept:** Nothing to hide. We show the work and the process clearly.
    *   **Visual Translation:** High-quality imagery, high contrast for readability, clear hierarchy, obvious interactive states.

### 1.2 Design Rationale for Target Audience

*   **Homeowners (30-65):** This demographic values readability and clarity over trends. The design must be intuitive and accessible, avoiding "tech-heavy" dark modes or low-contrast text that strains the eyes.
*   **Affluent/Middle Class:** Expects a level of polish that signals "premium" service. A cheap-looking site implies cheap work. A chaotic site implies a chaotic contractor.
*   **Pain Point Solution:** The design counters the "unreliable contractor" stereotype by being immaculately organized and professional.

---

## 2. COLOR SYSTEM

We move away from a purely "Dark Mode" interface to a **"Light Premium"** foundation (better for trust and readability) with **"Dark Luxury"** accents for specific sections.

### 2.1 Primary Palette (Brand Identity)

| Token Name | Hex Value | Description | Rationale |
| :--- | :--- | :--- | :--- |
| `primary-900` | **#0F172A** | Deep Oxford Blue | **Trust, Authority, Stability.** Replaces harsh black. |
| `primary-700` | **#334155** | Slate Charcoal | Lighter text, icons. |
| `accent-500` | **#C6A778** | Artisan Gold | **Craftsmanship, Quality.** Used sparingly for calls-to-action and highlights. |
| `accent-600` | **#A68A56** | Deep Gold | Hover states for accent elements. |

### 2.2 Background & Surface Colors

| Token Name | Hex Value | Description | Rationale |
| :--- | :--- | :--- | :--- |
| `bg-body` | **#FAFAF9** | Warm Alabaster | **Organic, Clean.** Pure white (#FFF) can be sterile/clinical. A slight warmth feels more "home." |
| `bg-surface` | **#FFFFFF** | Pure White | Cards, input fields, elevated areas. |
| `bg-dark` | **#0F172A** | Deep Oxford Blue | For high-impact sections (Hero, Footer) to create depth/contrast. |
| `bg-subtle` | **#F1F5F9** | Light Blue-Grey | Secondary sections (FAQ, Features). |

### 2.3 Semantic Colors (Functional)

| Token Name | Hex Value | Description |
| :--- | :--- | :--- |
| `success` | **#15803D** | Form success, verified badges. (Green) |
| `error` | **#B91C1C** | Form errors, critical alerts. (Red) |
| `warning` | **#B45309** | Important notices. (Amber) |
| `info` | **#0369A1** | Informational tooltips. (Blue) |

### 2.4 Text Colors

| Token Name | Hex Value | Description |
| :--- | :--- | :--- |
| `text-primary` | **#0F172A** | Headings, primary copy. |
| `text-secondary` | **#475569** | Body text, supporting descriptions. |
| `text-muted` | **#94A3B8** | Meta data, placeholders. |
| `text-inverse` | **#F8FAFC** | Text on dark backgrounds. |

### 2.5 Border Colors

| Token Name | Hex Value | Description |
| :--- | :--- | :--- |
| `border-light` | **#E2E8F0** | Card borders, dividers. |
| `border-focus` | **#C6A778** | Input focus states. |

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Families

1.  **Headings:** `Playfair Display` (Serif)
    *   *Rationale:* Evokes tradition, high-end editorial, and "European" elegance. Sets the tone of craftsmanship.
2.  **Body:** `Inter` or `Lato` (Sans-Serif)
    *   *Rationale:* Clean, highly legible, neutral. Balances the character of the headings with modern utility.
3.  **Mono:** `JetBrains Mono` or `Space Mono`
    *   *Rationale:* (Optional) Used strictly for technical specs (dimensions, pricing breakdowns) to imply precision/data.

### 3.2 Type Scale (Mobile / Desktop)

| Level | Mobile Size | Desktop Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | 36px | 56px | 700 (Bold) | 1.1 | Hero Headlines |
| **H1** | 30px | 48px | 700 (Bold) | 1.2 | Page Titles |
| **H2** | 24px | 36px | 600 (Semi) | 1.3 | Section Headings |
| **H3** | 20px | 24px | 600 (Semi) | 1.4 | Card Titles |
| **H4** | 18px | 20px | 500 (Med) | 1.4 | Subsections |
| **Body Lg** | 16px | 18px | 400 (Reg) | 1.6 | Intro text |
| **Body** | 16px | 16px | 400 (Reg) | 1.6 | Standard copy |
| **Small** | 14px | 14px | 500 (Med) | 1.5 | Labels, Meta |

### 3.3 Hierarchy Rules

*   **Headings:** Always `text-primary`. Use Serif font.
*   **Subheadings:** `text-secondary`, Sans-Serif.
*   **Body:** Never lighter than `text-secondary` for accessibility.
*   **Tracking:**
    *   Headings: Slightly tight (-0.02em) for compact impact.
    *   Caps (Labels): Widen tracking (+0.05em) for readability.

---

## 4. SPACING SYSTEM

We use a **4px baseline grid**. All spacing is a multiple of 4.

### 4.1 Spacing Scale (Tailwind-compatible)

| Token | Value | Usage |
| :--- | :--- | :--- |
| `space-1` | 4px | Icon adjustment, minimal separation |
| `space-2` | 8px | Related elements (icon + text) |
| `space-3` | 12px | Tight grouping |
| `space-4` | 16px | **Standard component padding** |
| `space-6` | 24px | Card padding, group separation |
| `space-8` | 32px | Section sub-groups |
| `space-12` | 48px | Major component separation |
| `space-16` | 64px | Section spacing (Mobile) |
| `space-24` | 96px | Section spacing (Desktop) |

### 4.2 Component Spacing Logic

*   **Card Internal:** 24px padding minimum.
*   **Button Internal:** 12px vertical, 24px horizontal.
*   **Section Vertical:** 96px on Desktop, 64px on Mobile. *Give the content room to breathe.*

---

## 5. LAYOUT SYSTEM

### 5.1 Grid Structure

*   **Columns:** 12 Columns (Desktop), 4 Columns (Mobile).
*   **Gutter:** 24px (Desktop), 16px (Mobile).
*   **Max Width:** 1280px (Standard), 1440px (Hero/Full).

### 5.2 Container Widths

*   `container-sm`: 640px (Blog posts, focused reading)
*   `container-md`: 768px (Forms, tablets)
*   `container-lg`: 1024px (Content with sidebars)
*   `container-xl`: 1280px (Standard Site Width)

### 5.3 Breakpoints

*   `sm`: 640px (Mobile Landscape)
*   `md`: 768px (Tablet Portrait)
*   `lg`: 1024px (Tablet Landscape/Small Laptop)
*   `xl`: 1280px (Desktop)

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Buttons

*   **Primary Button (CTA):**
    *   Bg: `primary-900` (Oxford Blue)
    *   Text: `white`
    *   Border: None
    *   Radius: `2px` (Sharp, precise feel - not fully rounded)
    *   Hover: Lift translateY(-2px), brighten bg slightly.
*   **Secondary Button:**
    *   Bg: Transparent
    *   Text: `primary-900`
    *   Border: 1px solid `primary-900`
    *   Radius: `2px`
*   **Accent Button:**
    *   Bg: `accent-500` (Gold)
    *   Text: `primary-900` (for contrast)
    *   Usage: Primary conversion actions (e.g., "Get Quote")

### 6.2 Cards (Services, Reviews)

*   **Style:** Minimalist, high structure.
*   **Bg:** `white`
*   **Border:** 1px solid `border-light`
*   **Shadow:** `shadow-sm` (subtle lift).
*   **Hover:** `shadow-md`, Border color -> `accent-500` (Gold).
*   **Radius:** `4px` (Slightly softer than buttons, but still structured).

### 6.3 Forms

*   **Fields:**
    *   Height: 48px (Touch friendly)
    *   Bg: `bg-body` or `white`
    *   Border: 1px solid `border-light`
    *   Radius: `4px`
    *   Focus: Border becomes `primary-900`, minimal ring.
*   **Labels:** `text-primary`, weight 500, size 14px.
*   **Validation:** Inline error messages below field in `error` color.

### 6.4 Navigation

*   **Header (Dark Glass & Gold):**
    *   **Style:** Dark Glassmorphism.
    *   **State (Top):** Transparent with dark gradient overlay (top-to-bottom) for readability on Hero.
    *   **State (Scroll):** `primary-900` with 85% opacity + `backdrop-blur-md`.
    *   **Accent:** 1px solid `accent-500` (Gold) border-bottom on scroll.
    *   **Typography:** White (`text-inverse`) for all states. Logo in Playfair Display.
    *   **CTA:** Ghost button (Gold border + Gold text) or Gold fill on hover.
*   **Mobile Menu:**
    *   Full screen or Slide-over.
    *   Dark theme (`primary-900`) to match header.
    *   Large touch targets (48px+).

### 6.5 Footer (Dark Luxury)

*   **Style:** Deep, heavy footer grounding the site.
*   **Bg:** `primary-900` (Oxford Blue) or darker `bg-black`.
*   **Typography:** Large section headings in Playfair Display.
*   **Visuals:** Semi-transparent logo watermark (optional).
*   **Social:** Icons inside Gold (`accent-500`) circles/outlines.
*   **Copyright:** Subtle, low contrast text.

### 6.5 Call-to-Action (CTA) Blocks

*   **Placement:** End of every service page, middle of Home.
*   **Style:** Dark background (`primary-900`) with light text + Gold button.
*   **Hierarchy:** Headline -> Value Prop -> Button.

---

## 7. MOTION & INTERACTION

*   **Philosophy:** "Calm & smooth". No jumpy, flashy animations.
*   **Transitions:** `ease-out`, 200ms - 300ms.
*   **Hover Effects:**
    *   Buttons: Subtle color shift, minor lift.
    *   Cards: Border color change, subtle shadow increase.
*   **Loading:**
    *   Skeleton screens (gray pulses) instead of spinning loaders.
*   **Scroll:**
    *   Fade-in + Slide-up (20px) for entering elements.

---

## 8. ACCESSIBILITY STANDARDS

### 8.1 Color Contrast

*   All text must meet **WCAG AA** (4.5:1 ratio).
*   Large text (18pt+) must meet 3:1.
*   *Note:* Gold/Yellow often fails contrast on white. Use dark text on gold buttons, or dark gold text on white backgrounds.

### 8.2 Focus States

*   **Mandatory:** All interactive elements must have a visible focus ring (outline) for keyboard navigation.
*   Style: 2px solid `primary-900` (or `accent-500` on dark backgrounds) with 2px offset.

### 8.3 Semantic HTML

*   Use proper `<button>` vs `<a>` tags.
*   Use `<main>`, `<nav>`, `<aside>`, `<footer>` landmarks.
*   Headings must follow logical order (H1 -> H2 -> H3), no skipping.

### 8.4 Touch Targets

*   Minimum **44x44px** for all clickable elements on mobile.

---

## 9. IMAGE GUIDELINES

### 9.1 Aspect Ratios
*   **Hero:** 16:9 (1920x1080) or 21:9 (ultrawide)
*   **Service Cards:** 4:3 (800x600)
*   **Thumbnails:** 1:1 (600x600)
*   **OG Images:** 1.91:1 (1200x630)

### 9.2 Optimization
*   **Format:** WebP with JPG fallback
*   **Hero images:** < 200KB
*   **Card images:** < 100KB
*   **Lazy loading:** All images below fold

### 9.3 Image Treatment
*   **Overlay:** Dark gradient (`rgba(15, 23, 42, 0.6)`) for text readability
*   **Aspect-ratio CSS:** Always maintain proportions
*   **Alt text:** Descriptive, SEO-friendly

---

## 10. PERFORMANCE TARGETS

### 10.1 Lighthouse Scores (Minimum)
*   **Performance:** > 90
*   **Accessibility:** > 95
*   **Best Practices:** > 90
*   **SEO:** > 90

### 10.2 Bundle Size
*   **Initial JS:** < 200KB (gzipped)
*   **Total JS:** < 500KB (gzipped)
*   **CSS:** < 50KB (gzipped)

### 10.3 Core Web Vitals
*   **LCP (Largest Contentful Paint):** < 2.5s
*   **FID (First Input Delay):** < 100ms
*   **CLS (Cumulative Layout Shift):** < 0.1

---

## 11. RESPONSIVE BREAKPOINTS DETAILED

### 11.1 Mobile First Approach

```css
/* Base (Mobile): 320px - 639px */
.container { padding: 0 16px; }
.section { padding: 64px 0; }
.heading-1 { font-size: 36px; }

/* SM (Tablet Portrait): 640px+ */
@media (min-width: 640px) {
  .container { padding: 0 24px; }
  .section { padding: 80px 0; }
}

/* MD (Tablet Landscape): 768px+ */
@media (min-width: 768px) {
  .container { padding: 0 40px; }
  .heading-1 { font-size: 48px; }
}

/* LG (Desktop): 1024px+ */
@media (min-width: 1024px) {
  .container { max-width: 1280px; margin: 0 auto; }
  .section { padding: 96px 0; }
  .heading-1 { font-size: 56px; }
}

/* XL (Wide Desktop): 1280px+ */
@media (min-width: 1280px) {
  .container { max-width: 1440px; }
}
```
