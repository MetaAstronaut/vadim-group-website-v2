# DESIGN SYSTEM v2 (ENGLISH) — The Vadim Group

This document defines the complete design system for The Vadim Group website. It includes brand principles, layout rules, typography, colors, components, spacing, interactions, and accessibility standards. It serves as a single source of truth for all future development and AI-driven modifications.

---

## 1. Core Brand & UX Principles

1. **Calm Professionalism** — content and visuals must convey confidence without aggression.
2. **Expert & Caring Tone** — the experience should reflect high skill and genuine care.
3. **Clarity Over Decoration** — layouts must be simple, readable, and structured.
4. **Trust-Oriented UI** — always prioritize transparency and ease of understanding.
5. **Consistency** — all components must follow unified spacing, colors, and typography.

UX Tone: Expert & Caring (60%) + Calm Premium Confidence (40%)

---

## 2. Color System

Use CSS variables or Tailwind tokens for consistency.

### 2.1. Brand Colors

| Token                   | Value     | Usage                                      |
| ----------------------- | --------- | ------------------------------------------ |
| `--color-bg-main`       | `#070B12` | Primary background color (dark mode style) |
| `--color-bg-elevated`   | `#0C1A27` | Elevated panels, cards, hero overlays      |
| `--color-primary`       | `#0C1A27` | Primary CTA buttons, key accents           |
| `--color-primary-hover` | `#0A1520` | Button hover state                         |
| `--color-accent-warm`   | `#C6A778` | Thin lines, icons, micro-accents           |
| `--color-border-subtle` | `#1C2630` | Card borders, outlines, separators         |
| `--color-neutral-100`   | `#F5F7FA` | Primary text on dark backgrounds           |
| `--color-neutral-200`   | `#E0E4EA` | Secondary text or subtle highlights        |
| `--color-neutral-600`   | `#7B8794` | Muted text                                 |
| `--color-danger`        | `#C44B4B` | Alerts, error states                       |

### 2.2. Color Usage Rules

- Background is primarily dark.
- Cards use slightly lighter dark backgrounds.
- Warm accent color must be used sparingly.
- Avoid using accent colors for large surfaces.

---

## 3. Typography

### 3.1. Font Pairing

- **Headings:** Modern serif or high-contrast sans (e.g., Playfair Display, DM Serif Display)
- **Body / UI Text:** Inter, IBM Plex Sans, or similar modern sans

### 3.2. Hierarchy

- **H1:** 40–48px, bold, tight line-height
- **H2:** 28–32px
- **H3:** 20–24px
- **Body:** 16–18px, line-height 1.6–1.8 for readability
- **Small:** 13–14px

### 3.3. Copy Style

- Short sentences
- Clear, concise phrasing
- Use lists frequently
- Avoid ALL CAPS except micro-labels

---

## 4. Layout & Spacing

### 4.1. Grid System

- Container width: **1100–1200px**
- Horizontal padding: `16px` (mobile), `24–32px` (desktop)

### 4.2. Spacing Rules

- Section spacing: **80–96px** between major sections
- Heading-to-text: **16–24px**
- Element spacing inside cards: **24–32px**

### 4.3. Corners

- Global border-radius: **6px** (your chosen style)
- Large blocks may use 0px or 8px — but keep consistency

---

## 5. Components

### 5.1. Buttons

#### Primary Button (solid dark)

- Background: `--color-primary`
- Text: `--color-neutral-100`
- Radius: `6px`
- Padding: `14px 28px`
- Font-weight: `600`
- Transition: `0.22s ease-out`

**States:**

- **Hover:** darker background (`--color-primary-hover`), soft shadow
- **Active:** slightly darker + reduced shadow
- **Focus-visible:** warm-accent outline (2px)
- **Disabled:** `opacity: 0.5`, `cursor: not-allowed`

#### Secondary Buttons

- Text-only
- Accent-warm or neutral text
- Underline on hover

---

## 6. Cards

- Background: `--color-bg-elevated` or `rgba(255,255,255,0.02)`
- Border: `1px solid --color-border-subtle`
- Border-radius: `6px`
- Light shadow on hover
- Inside structure:
  - H3 title
  - Short body paragraph
  - Optional bullet list

---

## 7. Sections

### 7.1. Hero Section

- Dark, minimal, premium
- Left side: headline → subheadline → bullets → CTA
- Right side: photo or before/after visual

### 7.2. Testimonials

- Card layout
- Name + location
- 2–4 sentence quote

### 7.3. Process Section

- Linear step-by-step (1 → 2 → 3 …)
- Icons optional (outline style)

---

## 8. Forms

- Clean, simple, minimal
- Input border: `1px solid --color-border-subtle`
- Radius: `6px`
- Background: very dark (`#050910`)
- Button: primary dark solid
- Below form: short trust note: "We respond within 2–4 hours. No spam."

---

## 9. Imagery

### 9.1. Style

- Clean, realistic, high-quality
- Before/after shots preferred
- No filters or heavy edits
- Avoid cheesy stock photos

### 9.2. Vadim Photos

- Natural photos of Vadim working
- Neat clothing, clean environment
- Professional, confident demeanor

---

## 10. Motion & Interaction

- Animation duration: **180–240ms**
- Use fade-in and subtle translateY for cards
- Avoid bounce, spin, or aggressive zoom effects
- Hover states must be soft and controlled

---

## 11. Accessibility

- Contrast AA:
  - Body text ≥ 4.5:1
  - Large text ≥ 3:1

- All interactive elements must have `:focus-visible` states
- Minimum interactive area: **40×40px**
- Avoid text under 14px on mobile

---

## 12. Content & Messaging Rules

Tone guidelines:

- Calm urgency
- Confident, not pushy
- Expert but warm

Preferred phrases:

- "repairs done right the first time"
- "urgent situations handled calmly and professionally"
- "precision European craftsmanship"

Avoid:

- excessive exclamation marks
- aggressive sales language
- exaggerated claims

---

## 13. Implementation Notes

- All design tokens (colors, spacing, corner radius) must be implemented via variables.
- Avoid hardcoding values in multiple files.
- When adding new components, follow the same spacing, radius, and color rules.
- New UI must visually belong to the same system.

---

## 14. Next Steps

This document will be followed by:

- `design-system.json` — machine-readable spec
- Component library tokens
- Page-level UI patterns

This English version is now the **official** design system for development and AI use.
