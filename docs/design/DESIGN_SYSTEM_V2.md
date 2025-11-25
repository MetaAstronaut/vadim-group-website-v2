# DESIGN SYSTEM V2 — The Vadim Group

**Version:** 2.2  
**Status:** Active  
**Date:** November 2025  
<!-- CHANGED: Updated version and status to reflect current production state -->

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

We use a **"Light Premium"** foundation (better for trust and readability) with **"Dark Luxury"** accents for high-impact sections. Gold is used strategically as a visual anchor for quality and craftsmanship.

### 2.1 Primary Palette (Brand Identity)

| Token Name | Hex Value | Description | Rationale |
| :--- | :--- | :--- | :--- |
| `primary-900` | **#0F172A** | Deep Oxford Blue | **Trust, Authority, Stability.** Used for dark sections, text, and secondary CTAs. |
| `primary-700` | **#334155** | Slate Charcoal | Lighter text, icons, subdued elements. |
| `accent-500` | **#C6A778** | Artisan Gold | **Craftsmanship, Quality, Premium.** Primary CTA color, section headers, decorative accents. |
| `accent-600` | **#A68A56** | Deep Gold | Hover states for accent elements. |

<!-- CHANGED: Updated rationale to reflect that Gold is the primary CTA color and used more prominently -->

### 2.2 Background & Surface Colors

| Token Name | Hex Value | Description | Rationale |
| :--- | :--- | :--- | :--- |
| `bg-body` | **#FAFAF9** | Warm Alabaster | **Organic, Clean.** Pure white (#FFF) can be sterile/clinical. A slight warmth feels more "home." |
| `bg-surface` | **#FFFFFF** | Pure White | Cards, input fields, elevated areas. |
| `bg-dark` | **#0F172A** | Deep Oxford Blue | For high-impact sections (Hero, Process, CTA blocks, Footer) to create depth/contrast. |
| `bg-subtle` | **#F1F5F9** | Light Blue-Grey | Alternate sections (Features, FAQ) for visual rhythm. |

### 2.3 Color Usage Guidelines

<!-- CHANGED: NEW SECTION - Defines clear rules for gold usage throughout the site -->

**Gold (`accent-500`) Usage:**
*   **Primary Purpose:** Signal quality, craftsmanship, and primary actions
*   **Strategic Placement:**
    *   Primary CTA buttons (calls-to-action)
    *   Section header labels (e.g., "WHY CHOOSE US", "WHAT WE OFFER")
    *   Process/timeline numbers and decorative elements
    *   Icon accent colors in dark sections
    *   Hover states for interactive elements
    *   Focus states for form inputs

**Oxford Blue (`primary-900`) Usage:**
*   **Primary Purpose:** Establish trust, structure, and hierarchy
*   **Strategic Placement:**
    *   Main text and headings
    *   Dark section backgrounds
    *   Secondary CTAs (outline buttons)
    *   Navigation bars (scrolled state)
    *   Footer background

**Balance Rule:** Gold should appear in ~15-20% of visible viewport to maintain visual hierarchy without overwhelming. Always pair gold elements with ample whitespace.

### 2.4 Semantic Colors (Functional)

| Token Name | Hex Value | Description |
| :--- | :--- | :--- |
| `success` | **#15803D** | Form success, verified badges. (Green) |
| `error` | **#B91C1C** | Form errors, critical alerts. (Red) |
| `warning` | **#B45309** | Important notices. (Amber) |
| `info` | **#0369A1** | Informational tooltips. (Blue) |

### 2.5 Text Colors

| Token Name | Hex Value | Description |
| :--- | :--- | :--- |
| `text-primary` | **#0F172A** | Headings, primary copy. |
| `text-secondary` | **#475569** | Body text, supporting descriptions. |
| `text-muted` | **#94A3B8** | Meta data, placeholders. |
| `text-inverse` | **#F8FAFC** | Text on dark backgrounds. |
| `text-accent` | **#C6A778** | Gold text for section labels and emphasis. |

<!-- CHANGED: Added text-accent token for gold text -->

### 2.6 Border Colors

| Token Name | Hex Value | Description |
| :--- | :--- | :--- |
| `border-light` | **#E2E8F0** | Card borders, dividers. |
| `border-focus` | **#C6A778** | Input focus states, active card borders. |

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Families

1.  **Headings:** `Playfair Display` (Serif)
    *   *Rationale:* Evokes tradition, high-end editorial, and "European" elegance. Sets the tone of craftsmanship.
2.  **Body:** `Inter` or `Lato` (Sans-Serif)
    *   *Rationale:* Clean, highly legible, neutral. Balances the character of the headings with modern utility.
3.  **Labels:** `Inter` or `Lato` (Sans-Serif, Uppercase, Medium Weight)
    *   *Rationale:* Used for section eyebrow labels (e.g., "WHY CHOOSE US") in gold.
4.  **Mono:** `JetBrains Mono` or `Space Mono`
    *   *Rationale:* (Optional) Used strictly for technical specs (dimensions, pricing breakdowns) to imply precision/data.

<!-- CHANGED: Added Labels font usage for section eyebrows -->

### 3.2 Type Scale (Mobile / Desktop)

<!-- CHANGED: Clarified usage rules and reduced ambiguity in size application -->

| Level | Mobile Size | Desktop Size | Weight | Line Height | Usage | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | 36px | 56px | 700 (Bold) | 1.1 | Hero Headlines only | Playfair Display |
| **H1** | 30px | 48px | 700 (Bold) | 1.2 | Page Titles (max 1 per page) | Playfair Display |
| **H2** | 24px | 36px | 600 (Semi) | 1.3 | Major Section Headings | Playfair Display |
| **H3** | 20px | 24px | 600 (Semi) | 1.4 | Card Titles, Subsections | Playfair Display |
| **H4** | 18px | 20px | 600 (Semi) | 1.4 | Minor Subsections | Inter/Lato |
| **Eyebrow** | 12px | 14px | 500 (Med) | 1.4 | Section Labels (uppercase) | Inter/Lato |
| **Body Lg** | 16px | 18px | 400 (Reg) | 1.6 | Intro paragraphs, lead text | Inter/Lato |
| **Body** | 16px | 16px | 400 (Reg) | 1.6 | Standard copy, descriptions | Inter/Lato |
| **Small** | 14px | 14px | 400 (Reg) | 1.5 | Meta info, captions | Inter/Lato |
| **Tiny** | 12px | 12px | 500 (Med) | 1.4 | Timestamps, legal text | Inter/Lato |

<!-- CHANGED: Added Eyebrow level for section labels, added font family column, added Tiny level -->

### 3.3 Hierarchy Rules

*   **Display/H1/H2/H3:** Always use Playfair Display. Color: `text-primary` or `text-inverse` on dark backgrounds.
*   **Eyebrow Labels:** Uppercase, `text-accent` (gold), medium weight, tracked at +0.08em for legibility.
*   **Body Text:** Use `text-secondary` for body copy, `text-primary` only for strong emphasis.
*   **Line Length:** Maximum 65-75 characters per line for optimal readability.
*   **Paragraph Spacing:** 1.5em between paragraphs.
*   **Never:**
    *   Use more than 3 font sizes in a single component.
    *   Use body text lighter than `text-secondary` for accessibility.

<!-- CHANGED: Added explicit rules for eyebrow labels and line length limits -->

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
| `space-20` | 80px | Section spacing (Tablet) |
| `space-24` | 96px | Section spacing (Desktop) |

<!-- CHANGED: Added space-20 for tablet breakpoint -->

### 4.2 Component Spacing Logic

*   **Card Internal:** 24px padding minimum, 32px on desktop.
*   **Button Internal:** 12px vertical, 24px horizontal for standard; 16px vertical, 32px horizontal for large.
*   **Section Vertical:** 96px on Desktop, 80px on Tablet, 64px on Mobile.
*   **Section Horizontal:** 16px mobile, 24px tablet, 40px desktop margins.
*   **Component Separation:** 48px between major components within a section.

<!-- CHANGED: Added more specific spacing rules for different screen sizes -->

---

## 5. LAYOUT SYSTEM

### 5.1 Grid Structure

*   **Columns:** 12 Columns (Desktop), 6 Columns (Tablet), 4 Columns (Mobile).
*   **Gutter:** 24px (Desktop), 20px (Tablet), 16px (Mobile).
*   **Max Width:** 1280px (Standard Content), 1440px (Hero/Full-Width Sections).

<!-- CHANGED: Added 6 columns for tablet and gutter sizes for different breakpoints -->

### 5.2 Container Widths

*   `container-sm`: 640px (Blog posts, focused reading)
*   `container-md`: 768px (Forms, tablets)
*   `container-lg`: 1024px (Content with sidebars)
*   `container-xl`: 1280px (Standard Site Width)
*   `container-2xl`: 1440px (Hero, full-width sections)

<!-- CHANGED: Added container-2xl -->

### 5.3 Breakpoints

*   `sm`: 640px (Mobile Landscape)
*   `md`: 768px (Tablet Portrait)
*   `lg`: 1024px (Tablet Landscape/Small Laptop)
*   `xl`: 1280px (Desktop)
*   `2xl`: 1440px (Wide Desktop)

<!-- CHANGED: Added 2xl breakpoint -->

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Buttons

<!-- CHANGED: CRITICAL FIX - Swapped primary and accent button definitions to match actual site -->

**Visual Hierarchy:**
*   **Primary CTA:** Gold button (high contrast, maximum visibility)
*   **Secondary CTA:** Oxford Blue outline (supports primary without competing)
*   **Tertiary CTA:** Text link with underline (lowest visual weight)

**Primary Button (Main CTA):**
*   **Purpose:** Primary conversion actions (Get Quote, WhatsApp Us, Contact Us)
*   Bg: `accent-500` (Gold #C6A778)
*   Text: `primary-900` (Oxford Blue) for maximum contrast
*   Border: None
*   Radius: `2px` (Sharp, precise feel)
*   Padding: `12px 24px` (standard), `16px 32px` (large)
*   Hover: 
    *   Bg: `accent-600` (darker gold)
    *   Transform: `translateY(-2px)`
    *   Shadow: `shadow-md`
*   **Icon Support:** Optional icon prefix (e.g., WhatsApp logo)

**Secondary Button (Supporting CTA):**
*   **Purpose:** Alternative actions that support the primary CTA
*   Bg: Transparent
*   Text: `text-inverse` (on dark backgrounds) or `primary-900` (on light backgrounds)
*   Border: 1px solid `accent-500` (Gold) on dark backgrounds, or `primary-900` on light backgrounds
*   Radius: `2px`
*   Padding: Same as primary
*   Hover:
    *   Bg: `rgba(198, 167, 120, 0.1)` (subtle gold tint)
    *   Border: `accent-600`

**Tertiary Button (Text Link):**
*   **Purpose:** Low-priority actions, "Learn More" links
*   Text: `accent-500` with arrow icon →
*   Underline: on hover
*   Hover: `accent-600`

**Button Sizing:**
*   **Small:** Height 40px, padding `8px 16px`, font-size 14px
*   **Standard:** Height 48px, padding `12px 24px`, font-size 16px
*   **Large:** Height 56px, padding `16px 32px`, font-size 18px

**Accessibility:**
*   All buttons must pass WCAG AA contrast ratio (4.5:1)
*   Minimum touch target: 44x44px on mobile
*   Focus state: 2px outline offset 2px in `primary-900`

### 6.2 Cards (Services, Reviews, Features)

<!-- CHANGED: Added height normalization rules to fix inconsistent card heights -->

**Base Style:**
*   Bg: `white`
*   Border: 1px solid `border-light`
*   Shadow: `shadow-sm` (subtle)
*   Radius: `4px`
*   Padding: `24px` (mobile), `32px` (desktop)

**Card Height Rules:**
*   **Requirement:** Cards in the same row MUST have equal heights
*   **Implementation:** 
    ```css
    .card-container {
      display: grid; /* or flex */
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      align-items: stretch; /* Force equal heights */
    }
    .card {
      display: flex;
      flex-direction: column;
      height: 100%; /* Fill available space */
    }
    .card-content {
      flex-grow: 1; /* Push footer to bottom */
    }
    ```
*   **Min-height:** 
    *   Service cards: `min-height: 400px` on desktop
    *   Feature cards: `min-height: 280px` on desktop
    *   Review cards: `min-height: 320px` on desktop

**Card Hover State:**
*   Border: `accent-500`
*   Shadow: `shadow-md`
*   Transform: `translateY(-4px)` (subtle lift)
*   Transition: `all 300ms ease-out`

**Card Variants:**

1.  **Service Card:**
    *   Icon at top (48x48px in gold circle)
    *   H3 title
    *   Body text (line-clamp after 4 lines)
    *   Optional: "Learn More" link at bottom

2.  **Review/Testimonial Card:**
    *   5-star rating at top (gold stars)
    *   Quote text in italic (line-clamp after 6 lines)
    *   Author name + timestamp at bottom
    *   Google logo in corner

3.  **Feature Card:**
    *   Icon at top (32x32px)
    *   H4 title
    *   Short description (2-3 lines)

### 6.3 Forms

**Field Specifications:**
*   Height: 48px (touch friendly)
*   Bg: `bg-body` or `white`
*   Border: 1px solid `border-light`
*   Radius: `4px`
*   Padding: `12px 16px`
*   Font: `Body` size, `text-primary`
*   Focus State:
    *   Border: `border-focus` (gold)
    *   Ring: `0 0 0 3px rgba(198, 167, 120, 0.1)`
*   Error State:
    *   Border: `error` (red)
    *   Background: `rgba(185, 28, 28, 0.05)`
*   Success State:
    *   Border: `success` (green)
    *   Icon: checkmark in success color

**Labels:**
*   Color: `text-primary`
*   Weight: 500 (medium)
*   Size: 14px
*   Position: Above field with 8px spacing

**Validation:**
*   Inline error messages below field
*   Color: `error`
*   Size: 14px
*   Icon: warning symbol

**Textarea:**
*   Min-height: 120px
*   Resize: vertical only
*   Max-height: 300px

### 6.4 Navigation

**Header (Dark Glass & Gold):**
*   **Style:** Dark Glassmorphism with gold accents
*   **State (Top):** 
    *   Background: Transparent with dark gradient overlay `linear-gradient(180deg, rgba(15, 23, 42, 0.8), transparent)`
    *   Border: None
*   **State (Scrolled):** 
    *   Background: `primary-900` with 90% opacity + `backdrop-blur-md`
    *   Border-bottom: 1px solid `accent-500` (gold accent line)
    *   Shadow: `shadow-md`
*   **Typography:** 
    *   Logo: Playfair Display, 24px, `text-inverse` or `accent-500`
    *   Nav links: Sans-serif, 16px, `text-inverse`
    *   Active link: Gold underline 2px
*   **CTA Button:** Primary button style (gold fill)
*   **Height:** 80px (desktop), 64px (mobile)
*   **Spacing:** 16px horizontal padding on mobile, 40px on desktop

**Mobile Menu:**
*   Type: Slide-over panel from right
*   Background: `primary-900`
*   Width: 100% (mobile), 320px (tablet)
*   Links: Large touch targets (56px height)
*   Close button: Top-right, 44x44px
*   Overlay: Dark backdrop with blur

### 6.5 Footer (Dark Luxury)

*   **Background:** `primary-900` or `#0A0F1C` (darker variant)
*   **Padding:** 64px vertical (mobile), 96px vertical (desktop)
*   **Layout:** 
    *   Mobile: Single column, stacked
    *   Desktop: 4-column grid (Logo + About | Services | Contact | Social)
*   **Typography:**
    *   Section headings: Playfair Display, 20px, `text-inverse`
    *   Links: Sans-serif, 16px, `text-muted`, hover: `accent-500`
*   **Logo:** Large wordmark + optional watermark background
*   **Social Icons:** 
    *   Size: 40x40px
    *   Style: Gold outline circles
    *   Hover: Gold fill
*   **Copyright:** 
    *   Size: 14px
    *   Color: `text-muted`
    *   Position: Bottom, centered
    *   Border-top: 1px solid `primary-700`

### 6.6 Call-to-Action (CTA) Blocks

<!-- CHANGED: Added CTA hierarchy rules to solve competing CTAs problem -->

**CTA Hierarchy Rules:**
*   **Rule:** Maximum 2 CTAs per viewport section
*   **Hierarchy:**
    *   **Primary CTA (Gold Button):** Main conversion action (e.g., "WhatsApp Us", "Get Free Estimate")
    *   **Secondary CTA (Outline Button):** Alternative action (e.g., "Contact Us", "Learn More")
*   **Positioning:**
    *   Primary: Left or top position
    *   Secondary: Right or bottom position
    *   Spacing: 16px between buttons (mobile), 24px (desktop)

**Visual Hierarchy Enforcement:**
*   Primary button should be 1.5x more visually prominent than secondary
*   Never use two gold buttons in the same group
*   On dark backgrounds: Primary = Gold fill, Secondary = Gold outline
*   On light backgrounds: Primary = Gold fill, Secondary = Oxford Blue outline

**CTA Block Specifications:**
*   **Placement:** End of every service page, middle of Home, above footer
*   **Background:** `primary-900` (dark) with optional texture/pattern
*   **Padding:** 64px vertical (mobile), 96px vertical (desktop)
*   **Structure:**
    1.  Headline (H2 in white)
    2.  Value proposition (Body Lg in light text)
    3.  Button group (Primary + Secondary CTAs)
*   **Optional:** Contact method badges (phone icon, WhatsApp icon) with subtle gold accent

### 6.7 Icon System

<!-- CHANGED: NEW SECTION - Comprehensive icon guidelines -->

**Icon Style:**
*   **Type:** Line icons (outlined, not filled)
*   **Library:** Lucide Icons, Heroicons, or similar
*   **Weight:** 2px stroke for consistency with design

**Icon Sizes:**
| Size | Dimension | Usage |
| :--- | :--- | :--- |
| XS | 16x16px | Inline with text, nav indicators |
| SM | 20x20px | Button prefixes, form labels |
| MD | 24x24px | Card icons, feature highlights |
| LG | 32x32px | Section icons, feature cards |
| XL | 48x48px | Service cards, hero icons |
| XXL | 64x64px | Major section headers (rare) |

**Icon Colors:**
*   **On light backgrounds:**
    *   Primary: `primary-900` (Oxford Blue)
    *   Accent: `accent-500` (Gold)
    *   Muted: `text-muted`
*   **On dark backgrounds:**
    *   Primary: `text-inverse` (off-white)
    *   Accent: `accent-500` (Gold)
*   **Interactive states:**
    *   Hover: Scale 1.1, color shift to `accent-500`

**Icon Containers:**
*   **Circle Badges (Service Cards):**
    *   Size: Icon size + 32px (e.g., 48px icon = 80px circle)
    *   Background: `primary-900` or `accent-500`
    *   Icon color: Inverse of background
    *   Border: Optional 2px in contrasting color
*   **Square Badges (Feature Cards):**
    *   Size: Icon size + 16px padding
    *   Background: `bg-subtle` or transparent
    *   Radius: 4px

**Icon Usage Rules:**
*   Always pair icons with labels (accessibility)
*   Maintain 8px minimum spacing between icon and text
*   Use consistent icons for same concepts across site
*   Provide alt text or aria-labels for standalone icons

### 6.8 Timeline / Process Visualization

<!-- CHANGED: NEW SECTION - Defines timeline component used in "How We Work" section -->

**Component Purpose:** Visualize multi-step processes (e.g., repair workflow, project phases)

**Visual Structure:**
*   **Layout:** Vertical on mobile, vertical or alternating on desktop
*   **Connector Line:**
    *   Width: 2px
    *   Color: `accent-500` (gold) with 40% opacity
    *   Position: Center of step numbers
    *   Length: Connects all steps

**Step Number Badges:**
*   **Size:** 48px diameter (mobile), 56px (desktop)
*   **Shape:** Circle
*   **Background:** `accent-500` (gold)
*   **Text:** 
    *   Color: `primary-900` (Oxford Blue)
    *   Font: Sans-serif, bold
    *   Size: 20px (mobile), 24px (desktop)
*   **Position:** Aligned vertically with connector line

**Step Content:**
*   **Spacing from badge:** 24px horizontal
*   **Title:**
    *   Font: Playfair Display (serif)
    *   Size: H3 level (20px mobile, 24px desktop)
    *   Color: `accent-500` on dark backgrounds, `primary-900` on light
*   **Description:**
    *   Font: Sans-serif
    *   Size: Body (16px)
    *   Color: `text-inverse` on dark backgrounds, `text-secondary` on light
    *   Max-width: 500px

**Step Spacing:**
*   Vertical gap between steps: 48px (mobile), 64px (desktop)
*   Alignment: Left-aligned content

**Animation (optional):**
*   Fade in + slide up on scroll
*   Stagger delay: 100ms between steps
*   Connector line draws from top to bottom

**Accessibility:**
*   Use `<ol>` (ordered list) for semantic HTML
*   Step numbers should be actual list numbers
*   Ensure connector line is decorative (aria-hidden)

### 6.9 Testimonial / Review Cards

<!-- CHANGED: NEW SECTION - Specific rules for review/testimonial display -->

**Layout:**
*   **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
*   **Gap:** 24px between cards
*   **Alignment:** Equal heights using flexbox

**Card Structure:**

1.  **Rating Display (Top):**
    *   5 gold stars (filled or outlined)
    *   Size: 20px each
    *   Color: `accent-500` (filled), `border-light` (empty)
    *   Spacing: 4px between stars
    *   Aligned: Left

2.  **Logo/Badge (Top-Right):**
    *   Google logo or verification badge
    *   Size: 24x24px
    *   Position: Absolute top-right corner
    *   Padding: 16px from edges

3.  **Quote Text (Body):**
    *   Font: Sans-serif, italic
    *   Size: 16px
    *   Color: `text-primary`
    *   Line-height: 1.6
    *   Max-lines: 6 (use line-clamp)
    *   Quotes: Use proper typographic quotes " "

4.  **Attribution (Footer):**
    *   **Name:**
        *   Font: Sans-serif, semi-bold
        *   Size: 16px
        *   Color: `text-primary`
    *   **Timestamp:**
        *   Font: Sans-serif, regular
        *   Size: 14px
        *   Color: `text-muted`
        *   Format: "2 weeks ago", "1 month ago"
    *   Spacing: 8px between name and timestamp

**Visual Styling:**
*   Background: `white`
*   Border: 1px solid `border-light`
*   Radius: 4px
*   Padding: 24px
*   Shadow: `shadow-sm`
*   Min-height: 320px (enforced)

**Hover State:**
*   Border: `accent-500`
*   Shadow: `shadow-md`
*   Transform: `translateY(-2px)`

**Accessibility:**
*   Mark stars as decorative (aria-hidden)
*   Include text rating for screen readers: "Rated 5 out of 5 stars"
*   Ensure quote is in `<blockquote>` tag

### 6.10 FAQ Accordion

<!-- CHANGED: NEW SECTION - Defines accordion behavior and styling -->

**Component Purpose:** Collapsible Q&A sections to reduce cognitive load

**Accordion Item Structure:**

1.  **Question Header (Button):**
    *   **Element:** `<button>` (interactive, keyboard accessible)
    *   **Font:** Playfair Display (serif)
    *   **Size:** 18px (mobile), 20px (desktop)
    *   **Color:** `text-primary`
    *   **Weight:** 600 (semi-bold)
    *   **Padding:** 20px vertical, 24px horizontal
    *   **Alignment:** Left-aligned text, right-aligned icon
    *   **Width:** 100% (full-width clickable area)

2.  **Expand/Collapse Icon:**
    *   **Type:** Chevron down ▼ or plus/minus
    *   **Size:** 24x24px
    *   **Color:** `accent-500` (gold)
    *   **Position:** Absolute right, vertically centered
    *   **Animation:** Rotate 180deg when expanded (chevron) or fade between + and - (plus/minus)
    *   **Transition:** 300ms ease

3.  **Answer Content (Panel):**
    *   **Font:** Sans-serif
    *   **Size:** 16px
    *   **Color:** `text-secondary`
    *   **Line-height:** 1.6
    *   **Padding:** 0 24px 24px 24px
    *   **Animation:** 
        *   Expand: `max-height` from 0 to auto, fade in
        *   Collapse: Reverse animation
        *   Duration: 300ms ease-out

**Visual Styling:**
*   **Container:** 
    *   Background: `white` or `bg-subtle`
    *   Border: 1px solid `border-light`
    *   Radius: 4px (per item) or none (if stacked)
*   **Spacing:**
    *   Between items: 16px gap (if separated), or 0 with 1px divider (if stacked)
    *   Section padding: 64px vertical
*   **Divider:** 
    *   1px solid `border-light` between items
    *   Full-width or inset 24px

**States:**

*   **Default (Collapsed):**
    *   Question visible
    *   Answer hidden (height: 0, opacity: 0)
    *   Chevron pointing down

*   **Expanded:**
    *   Question remains visible
    *   Answer visible (height: auto, opacity: 1)
    *   Chevron pointing up
    *   Optional: Slightly darker background for header

*   **Hover (on Question):**
    *   Background: `bg-subtle` (subtle highlight)
    *   Cursor: pointer
    *   Icon color: `accent-600` (darker gold)

*   **Focus (Keyboard):**
    *   Outline: 2px solid `primary-900`, offset 2px
    *   Background: Same as hover

**Behavior:**
*   **Default state:** All items collapsed OR first item expanded
*   **Multi-expand:** Allow multiple items open simultaneously (preferred for UX)
*   **Single-expand:** Close others when one opens (alternative)
*   **Scroll behavior:** If page loads with hash (#faq-item-3), auto-expand and scroll to that item

**Accessibility:**
*   Use `aria-expanded="true|false"` on button
*   Use `aria-controls="panel-id"` to link button to content
*   Use `role="region"` on answer panel
*   Ensure keyboard navigation (Enter/Space to toggle)
*   Provide clear focus indicators

---

## 7. MOTION & INTERACTION

*   **Philosophy:** "Calm & smooth". No jumpy, flashy animations.
*   **Timing Function:** `ease-out` for most transitions (feels natural and responsive)
*   **Duration:**
    *   Micro-interactions (hover, focus): 150-200ms
    *   Component transitions (accordion, modal): 300ms
    *   Page transitions: 400-500ms
    *   Never exceed 500ms (feels sluggish)

**Hover Effects:**
*   **Buttons:** 
    *   Color shift to darker variant
    *   Transform: `translateY(-2px)`
    *   Shadow: Increase from `sm` to `md`
    *   Transition: 200ms ease-out
*   **Cards:** 
    *   Border color: `border-light` → `accent-500`
    *   Shadow: `shadow-sm` → `shadow-md`
    *   Transform: `translateY(-4px)`
    *   Transition: 300ms ease-out
*   **Links:**
    *   Underline appears
    *   Color: Standard → `accent-500`
    *   Transition: 150ms ease

**Loading States:**
*   **Preferred:** Skeleton screens (gray pulses) instead of spinning loaders
*   **Skeleton Style:**
    *   Background: `bg-subtle`
    *   Animation: Shimmer effect moving left-to-right
    *   Duration: 1.5s infinite
*   **Fallback:** Minimal spinner in `accent-500` if skeleton not feasible

**Scroll Animations:**
*   **Entry Effect:**
    *   Fade-in: Opacity 0 → 1
    *   Slide-up: `translateY(20px)` → `translateY(0)`
    *   Duration: 400ms
    *   Easing: `ease-out`
    *   Trigger: Element enters viewport (intersection observer)
*   **Stagger:** If multiple items (e.g., cards), add 100ms delay between each
*   **Scroll-to-top button:**
    *   Appears after 400px scroll
    *   Position: Fixed bottom-right
    *   Style: Gold circle with up arrow
    *   Animation: Fade + scale in

**Parallax (Subtle):**
*   Hero background images can move at 0.5x scroll speed
*   Maximum 50px movement to avoid motion sickness
*   Disable on mobile (performance)

---

## 8. ACCESSIBILITY STANDARDS

### 8.1 Color Contrast

*   All text must meet **WCAG AA** (4.5:1 ratio minimum).
*   Large text (18pt+ or 14pt+ bold) must meet 3:1.
*   **Critical:** Gold text on white backgrounds must use `accent-600` (darker gold) or be 18pt+ to pass contrast.
*   Gold buttons with Oxford Blue text: Verified 4.7:1 ratio (passes AA).

### 8.2 Focus States

*   **Mandatory:** All interactive elements must have a visible focus ring for keyboard navigation.
*   **Style:** 
    *   Outline: 2px solid `primary-900`
    *   Offset: 2px
    *   On dark backgrounds: Use `accent-500` (gold) outline instead
*   **Remove default:** `outline: none` only if custom focus style is implemented

### 8.3 Semantic HTML

*   Use proper `<button>` for actions, `<a>` for navigation
*   Use landmark elements: `<main>`, `<nav>`, `<aside>`, `<footer>`, `<header>`
*   Headings must follow logical order (H1 → H2 → H3), no skipping levels
*   Use `<section>` with `aria-labelledby` for major page sections
*   Lists: `<ul>` for unordered, `<ol>` for processes/steps

### 8.4 Touch Targets

*   Minimum **44x44px** for all clickable elements on mobile (Apple/Google standard)
*   Increase to 48x48px for primary CTAs
*   Ensure 8px minimum spacing between adjacent touch targets

### 8.5 Screen Reader Support

*   Provide `alt` text for all images (descriptive, not "image of...")
*   Use `aria-label` for icon-only buttons
*   Use `aria-live` regions for dynamic content updates
*   Ensure form labels are properly associated with inputs (`for` attribute)
*   Provide skip navigation link for keyboard users

### 8.6 Motion & Animation

*   Respect `prefers-reduced-motion` media query
*   Disable or simplify animations for users who enable this setting
*   Example:
    ```css
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
    ```

---

## 9. IMAGE GUIDELINES

### 9.1 Aspect Ratios

*   **Hero:** 16:9 (1920x1080) or 21:9 (2560x1080 ultrawide)
*   **Service Cards:** 4:3 (800x600)
*   **Gallery/Portfolio:** 3:2 (1200x800)
*   **Thumbnails:** 1:1 (600x600)
*   **OG Images:** 1.91:1 (1200x630)

### 9.2 Optimization

*   **Format:** WebP with JPG fallback for older browsers
*   **Compression:**
    *   Hero images: < 200KB (quality 80)
    *   Card images: < 100KB (quality 75)
    *   Thumbnails: < 50KB (quality 70)
*   **Lazy loading:** All images below fold (use `loading="lazy"` attribute)
*   **Responsive images:** Use `<picture>` with multiple sources for different screen sizes
*   **Dimensions:** Always specify width and height attributes to prevent layout shift

### 9.3 Image Treatment

*   **Overlay (for text readability):**
    *   Gradient: `linear-gradient(180deg, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.4))`
    *   Solid: `rgba(15, 23, 42, 0.6)` for uniform darkening
*   **Aspect-ratio CSS:** Always use `aspect-ratio` property to maintain proportions
*   **Alt text:** 
    *   Descriptive for content images: "Craftsman repairing wooden deck railing"
    *   Empty `alt=""` for decorative images
    *   SEO-friendly but natural language

### 9.4 Image Content Guidelines

*   **Preferred subjects:**
    *   High-quality shots of completed work
    *   Craftsman at work (professional, clean presentation)
    *   Before/after comparisons
    *   Detail shots showing precision
*   **Avoid:**
    *   Stock photos (use real project photos)
    *   Low-resolution or blurry images
    *   Cluttered or unprofessional job sites
    *   Faces without permission/releases

---

## 10. PERFORMANCE TARGETS

### 10.1 Lighthouse Scores (Minimum)

*   **Performance:** > 90 (mobile), > 95 (desktop)
*   **Accessibility:** > 95
*   **Best Practices:** > 95
*   **SEO:** > 95

### 10.2 Bundle Size

*   **Initial JS:** < 150KB (gzipped)
*   **Total JS:** < 400KB (gzipped)
*   **CSS:** < 40KB (gzipped)
*   **Fonts:** < 100KB (use woff2 format, subset to Latin characters)

<!-- CHANGED: Reduced bundle size targets for better performance -->

### 10.3 Core Web Vitals

*   **LCP (Largest Contentful Paint):** < 2.5s (good), < 4.0s (acceptable)
*   **INP (Interaction to Next Paint):** < 200ms (good), < 500ms (acceptable)
*   **CLS (Cumulative Layout Shift):** < 0.1 (good), < 0.25 (acceptable)

<!-- CHANGED: Replaced FID with INP (new metric as of 2024) -->

### 10.4 Loading Strategy

*   **Critical CSS:** Inline above-the-fold styles
*   **Font loading:** Use `font-display: swap` to prevent FOIT
*   **JavaScript:** Defer non-critical scripts
*   **Third-party scripts:** Load asynchronously (analytics, chat widgets)
*   **Code splitting:** Separate bundles for each route

---

## 11. RESPONSIVE DESIGN SPECIFICATIONS

### 11.1 Mobile First Approach

Base styles target mobile (320px-639px), then progressively enhance for larger screens.

```css
/* Base (Mobile): 320px - 639px */
.container { 
  padding: 0 16px; 
  max-width: 100%;
}
.section { 
  padding: 64px 0; 
}
.heading-display { 
  font-size: 36px; 
  line-height: 1.1;
}
.grid-services {
  grid-template-columns: 1fr; /* Single column */
  gap: 24px;
}

/* SM (Mobile Landscape): 640px+ */
@media (min-width: 640px) {
  .container { 
    padding: 0 24px; 
  }
  .section { 
    padding: 72px 0; 
  }
  .grid-services {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* MD (Tablet Portrait): 768px+ */
@media (min-width: 768px) {
  .container { 
    padding: 0 32px; 
    max-width: 768px;
    margin: 0 auto;
  }
  .section {
    padding: 80px 0;
  }
  .heading-display { 
    font-size: 48px; 
  }
}

/* LG (Desktop): 1024px+ */
@media (min-width: 1024px) {
  .container { 
    max-width: 1024px; 
    padding: 0 40px;
  }
  .section { 
    padding: 96px 0; 
  }
  .heading-display { 
    font-size: 56px; 
  }
  .grid-services {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 32px;
  }
}

/* XL (Wide Desktop): 1280px+ */
@media (min-width: 1280px) {
  .container { 
    max-width: 1280px; 
  }
}

/* 2XL (Ultra-wide): 1440px+ */
@media (min-width: 1440px) {
  .container-hero { 
    max-width: 1440px; 
  }
}
```

### 11.2 Component Responsiveness

<!-- CHANGED: NEW SECTION - Defines how each component adapts across breakpoints -->

**Navigation:**
*   Mobile (< 768px): Hamburger menu, slide-over panel
*   Tablet (768px - 1023px): Hamburger menu, wider slide-over
*   Desktop (1024px+): Horizontal nav bar, all links visible

**Hero Section:**
*   Mobile: Single column, centered text, stacked buttons
*   Tablet: Same layout, larger text
*   Desktop: Text max-width 700px, buttons inline

**Service Cards:**
*   Mobile: 1 column
*   Tablet (640px+): 2 columns
*   Desktop (1024px+): 3 columns

**Timeline/Process:**
*   Mobile: Vertical with small badges (48px)
*   Desktop: Vertical with larger badges (56px), optional alternating layout

**Review Cards:**
*   Mobile: 1 column
*   Tablet (640px+): 2 columns
*   Desktop (1024px+): 3 columns

**Footer:**
*   Mobile: Single column, stacked sections
*   Tablet: 2 columns (2x2 grid)
*   Desktop: 4 columns, horizontal layout

---

## 12. IMPLEMENTATION CHECKLIST

<!-- CHANGED: NEW SECTION - Practical checklist for developers -->

### 12.1 Before Starting Development

- [ ] Review this design system document completely
- [ ] Set up Tailwind config with custom tokens from Section 2
- [ ] Install and configure font families (Playfair Display, Inter/Lato)
- [ ] Set up ESLint/Prettier for code consistency
- [ ] Configure responsive image optimization pipeline

### 12.2 For Each Component

- [ ] Match typography scale exactly (Section 3.2)
- [ ] Apply correct spacing using 4px grid (Section 4)
- [ ] Ensure color contrast passes WCAG AA (Section 8.1)
- [ ] Add focus states for keyboard navigation (Section 8.2)
- [ ] Test on mobile, tablet, and desktop breakpoints (Section 11)
- [ ] Add hover/transition effects per specifications (Section 7)
- [ ] Verify touch targets are 44x44px minimum (Section 8.4)

### 12.3 Before Launch

- [ ] Run Lighthouse audit (targets in Section 10.1)
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Verify all images have alt text and are optimized (Section 9)
- [ ] Test keyboard navigation through entire site
- [ ] Verify forms have proper validation and error states
- [ ] Test on real devices (iPhone, Android, tablets)
- [ ] Check Core Web Vitals in Google Search Console (Section 10.3)

---

## 13. DESIGN TOKENS REFERENCE

<!-- CHANGED: NEW SECTION - Quick reference for developers -->

For easy integration with Tailwind or CSS variables:

```css
:root {
  /* Colors - Primary */
  --color-primary-900: #0F172A;
  --color-primary-700: #334155;
  
  /* Colors - Accent */
  --color-accent-500: #C6A778;
  --color-accent-600: #A68A56;
  
  /* Colors - Background */
  --color-bg-body: #FAFAF9;
  --color-bg-surface: #FFFFFF;
  --color-bg-dark: #0F172A;
  --color-bg-subtle: #F1F5F9;
  
  /* Colors - Text */
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #94A3B8;
  --color-text-inverse: #F8FAFC;
  --color-text-accent: #C6A778;
  
  /* Colors - Border */
  --color-border-light: #E2E8F0;
  --color-border-focus: #C6A778;
  
  /* Colors - Semantic */
  --color-success: #15803D;
  --color-error: #B91C1C;
  --color-warning: #B45309;
  --color-info: #0369A1;
  
  /* Spacing (4px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  
  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', 'Lato', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Space Mono', monospace;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  
  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
}
```

---

## REVISION HISTORY

<!-- CHANGED: NEW SECTION - Document changes -->

**v2.2 (November 2025) - Production Alignment Update:**
- Fixed button hierarchy: Gold is now primary CTA, Oxford Blue is secondary
- Added comprehensive color usage guidelines (Section 2.3)
- Defined CTA hierarchy rules to prevent competing buttons (Section 6.6)
- Added card height normalization rules (Section 6.2)
- Created Icon System section (6.7)
- Created Timeline/Process Visualization section (6.8)
- Created Testimonial Cards section (6.9)
- Created FAQ Accordion section (6.10)
- Clarified typography scale with font family column (Section 3.2)
- Added eyebrow label typography rules
- Updated spacing system with tablet breakpoint
- Replaced FID with INP in Core Web Vitals
- Reduced bundle size targets for better performance
- Added component responsiveness rules (Section 11.2)
- Added implementation checklist (Section 12)
- Added design tokens reference (Section 13)

**v2.1 (November 2025) - Initial Draft:**
- Established core design philosophy
- Defined color system and typography scale
- Created component specifications
- Set accessibility standards

---

**END OF DESIGN SYSTEM V2.2**
