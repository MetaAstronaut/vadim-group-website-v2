# Color Scheme Guidelines - The Vadim Group Website

## 🎨 Purpose

This document defines the color alternation patterns for all pages to maintain professional UX standards, visual hierarchy, and consistent brand experience.

---

## 📐 Core Principles

### 1. **No Adjacent Sections with Same Background**
Never place two sections with identical background colors next to each other.

❌ **BAD:**
```
White Section
White Section ← Merges visually
```

✅ **GOOD:**
```
White Section
Grey Section ← Clear separator
```

---

### 2. **Strategic Blue Accents**

Blue background (`#0F172A`) should be used for:
- **High-priority actions** (Priority Services, Emergency Services)
- **Trust-building** (Process, How We Work)
- **Final conversion** (CTA sections)

**Recommended frequency:** 20-30% of total sections

---

### 3. **Balanced Distribution**

Target distribution across a full page:
- **White (`#FFFFFF`):** 25-35% - Content-focused sections
- **Grey (`#F1F5F9`):** 35-45% - Supporting information, transitions
- **Blue (`#0F172A`):** 20-30% - Action zones, trust builders
- **Dark Hero:** 1 section (top of page)

---

### 4. **Visual Rhythm Pattern**

Follow this repeating pattern when possible:
```
White → Grey → White → BLUE → Grey → White → Grey → BLUE
```

Or variations:
```
White → BLUE → Grey → White → Grey → White → BLUE
Grey → White → BLUE → Grey → White → BLUE → Grey
```

**Key:** Alternate light backgrounds, inject blue at strategic points.

---

## 🎯 Color Token Reference

### Design System v2.2 Tokens

```css
/* Primary Backgrounds */
--color-bg-surface: #FFFFFF;        /* Pure White */
--color-bg-subtle: #F1F5F9;         /* Light Blue-Grey */
--color-bg-dark: #0F172A;           /* Deep Oxford Blue */

/* Brand Colors */
--color-brand-primary: #0F172A;     /* Oxford Blue */
--color-brand-accent: #C6A778;      /* Artisan Gold */

/* Text on Different Backgrounds */
/* White Background: */
  --color-text-primary: #0F172A;    /* Headings */
  --color-text-secondary: #475569;  /* Body */
  
/* Blue Background: */
  text-white                        /* Headings */
  text-gray-300                     /* Body */
  text-brand-accent                 /* Labels, emphasis */
```

### Tailwind Classes

```tsx
// White background
<Section className="bg-surface">

// Light grey background  
<Section className="bg-surface-subtle">

// Blue background
<Section className="bg-brand-primary text-white">

// Dark hero with gradient
<div className="bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
  <div style={{ background: 'linear-gradient(...)' }} />
</div>
```

---

## 📋 Section Type Guidelines

### 1. **Hero Sections**
- **Always:** Dark gradient overlay on image
- **Text:** White with gold accents
- **Purpose:** Set the tone, grab attention

```tsx
<div className="relative h-[calc(100vh-80px)] min-h-[600px]">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }} />
  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85))' }} />
  {/* Content */}
</div>
```

---

### 2. **Service Catalogs / Grids**
- **Recommended:** White (`bg-surface`)
- **Alternative:** Light grey if preceded by white
- **Purpose:** Clean, spacious presentation

```tsx
<Section className="bg-surface py-24">
  {/* Service cards */}
</Section>
```

---

### 3. **Priority / Urgent Sections**
- **Required:** Blue (`bg-brand-primary`)
- **Text:** White + gold accents
- **Cards:** Glassmorphic (`bg-white/5`, `border-brand-accent/20`)
- **Purpose:** Visual emphasis on urgency

```tsx
<Section className="bg-brand-primary text-white py-24">
  <h2 className="text-white mb-4">Priority Scheduling</h2>
  <p className="text-gray-300">Description...</p>
  <div className="bg-white/5 border border-brand-accent/20">
    {/* Card content */}
  </div>
</Section>
```

---

### 4. **Educational / Informational**
- **Recommended:** Light grey (`bg-surface-subtle`)
- **Alternative:** White if well-separated
- **Purpose:** Soft background for readability

```tsx
<Section className="bg-surface-subtle py-24">
  {/* Educational content */}
</Section>
```

---

### 5. **Social Proof / Testimonials**
- **Recommended:** White (`bg-surface`)
- **Purpose:** Clean showcase, maximum readability

```tsx
<Section className="bg-surface py-24">
  {/* Review cards */}
</Section>
```

---

### 6. **Process / How It Works**
- **Recommended:** Blue (`bg-brand-primary`)
- **Purpose:** Build trust, show methodology
- **Style:** Horizontal cards with gold badges

```tsx
<Section className="bg-brand-primary text-white py-20">
  <div className="bg-white/5 border border-brand-accent/20">
    <div className="bg-brand-accent text-brand-primary">{stepNumber}</div>
    {/* Step content */}
  </div>
</Section>
```

---

### 7. **FAQ Sections**
- **Recommended:** Light grey (`bg-surface-subtle`)
- **Purpose:** Neutral zone before CTA

```tsx
<Section className="bg-surface-subtle py-24">
  <Accordion>
    {/* FAQ items */}
  </Accordion>
</Section>
```

---

### 8. **Final CTA**
- **Required:** Blue (`bg-brand-primary`)
- **Purpose:** Strong conversion focus
- **Button:** Gold (`bg-brand-accent`)

```tsx
<Section className="bg-brand-primary text-white py-24 text-center">
  <h2 className="text-white mb-8">Ready to Get Started?</h2>
  <Button className="bg-brand-accent text-brand-primary">
    Get Free Estimate
  </Button>
</Section>
```

---

## 📄 Page-Specific Examples

### ✅ Home Page (Reference Standard)
```
1. Hero - Dark gradient
2. Why Choose Us - White
3. Services - Grey
4. Process - BLUE
5. Testimonials - Grey
6. About - White
7. FAQ - Grey
8. Final CTA - BLUE
```

**Distribution:** 25% White, 37.5% Grey, 25% Blue, 12.5% Dark

---

### ✅ Home Repairs Page (Optimized)
```
1. Hero - Dark gradient
2. Services Grid - White
3. Priority Services - BLUE 🎯
4. Education - Grey
5. Maintenance - White
6. Why Choose Us - Grey
7. Testimonials - White
8. Process - BLUE
9. FAQ - Grey
10. Final CTA - BLUE
```

**Distribution:** 30% White, 40% Grey, 30% Blue

---

### 🔧 Marine & RV Page (To Review)
Apply same principles:
- No adjacent same-color sections
- Blue for urgent/priority services
- Balance white/grey/blue (25-35% / 35-45% / 20-30%)

---

## ⚠️ Common Mistakes to Avoid

### 1. **Too Much Grey**
❌ 50%+ grey sections = monotonous
✅ Keep grey at 35-45%

### 2. **Delayed Blue Accent**
❌ First blue section at position #8+
✅ Introduce blue by section #3-4

### 3. **White Section Clusters**
❌ Three or more white sections in a row
✅ Alternate with grey

### 4. **No Visual Hierarchy**
❌ All sections equal visual weight
✅ Use blue for priority zones

---

## 🔍 How to Audit a Page

### Step 1: List All Sections
Create a numbered list of all page sections.

### Step 2: Note Current Colors
Mark each section's background color.

### Step 3: Check for Issues
- [ ] Any adjacent same-color sections?
- [ ] Is grey usage over 45%?
- [ ] Is blue usage under 20% or over 35%?
- [ ] Does blue appear early enough (by section #3-4)?

### Step 4: Calculate Distribution
```
White %: (white sections / total sections) × 100
Grey %: (grey sections / total sections) × 100
Blue %: (blue sections / total sections) × 100
```

Target: 25-35% / 35-45% / 20-30%

### Step 5: Propose Adjustments
Use the patterns from this document to optimize.

---

## 🎨 Glassmorphic Cards (Blue Backgrounds)

When using cards on blue backgrounds:

```tsx
<div className="
  bg-white/5                          /* Subtle white overlay */
  border border-brand-accent/20       /* Soft gold border */
  rounded-lg p-6
  hover:bg-white/[0.08]              /* Slightly brighter on hover */
  hover:border-brand-accent          /* Full gold border on hover */
  hover:shadow-[0_8px_24px_rgba(198,167,120,0.15)]
  transition-all duration-300
">
  <h3 className="text-brand-accent">Card Title</h3>
  <p className="text-gray-300">Card description...</p>
</div>
```

---

## 📱 Responsive Considerations

All color schemes must work across:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** 1280px+

No color changes should be needed at different breakpoints.

---

## ✅ Quality Checklist

Before deploying changes:

- [ ] No adjacent sections with same background
- [ ] White usage: 25-35%
- [ ] Grey usage: 35-45%
- [ ] Blue usage: 20-30%
- [ ] Blue appears by section #3-4
- [ ] Priority/urgent sections use blue
- [ ] Final CTA uses blue
- [ ] All text has sufficient contrast (WCAG AA minimum)
- [ ] Glassmorphic cards on blue backgrounds
- [ ] Color scheme documented in code comments

---

## 📚 Related Documents

- [`COLOR_SCHEME_IMPROVEMENTS.md`](../../COLOR_SCHEME_IMPROVEMENTS.md) - Home Repairs optimization case study
- [`VISUAL_COMPARISON.md`](../../VISUAL_COMPARISON.md) - Before/after visualizations
- [`DESIGN_SYSTEM_V2.md`](./DESIGN_SYSTEM_V2.md) - Full design system specification

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-02 | Initial guidelines based on Home Repairs optimization |

---

**Maintained by:** Design Team  
**Last Updated:** December 2, 2025  
**Status:** Active Standard

