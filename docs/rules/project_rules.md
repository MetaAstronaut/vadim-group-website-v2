# PROJECT_RULES.md — The Vadim Group Website

These rules define **how development, AI-assisted editing, and content updates must be performed** in this project. This file is binding for all human contributors and AI agents.

The key goals:

- Maintain consistency with the brand and design system
- Prevent accidental rewriting of approved content
- Keep development stable and structured
- Ensure SEO-optimized pages remain intact

---

# 1. GENERAL PRINCIPLES

1. **Single Source of Truth** for all content:
   - `cleaned.md`
   - `content-blocks.md`
   - page `.md` files under `/src/content/pages/`

2. **No AI-generated content outside approved blocks.**
   Agents may transform, restructure or adapt — but NOT invent new facts.

3. **Design rules must follow** `DESIGN_SYSTEM_EN.md`.

4. All new UI elements must visually fit the established design system.

5. Changes must be done explicitly, with confirmation.

6. Cursor AI agent must reference **Block IDs** when placing content.

---

# 2. FILE STRUCTURE RULES

## 2.1 Content Files

Store content here:

```
/src/content/
    cleaned.md
    content-blocks.md
    /pages/
        home.md
        repairs.md
        marine-rv.md
        commercial.md
        about.md
        contact.md
        blog.md
        faq.md
        portfolio.md
```

Rules:

- Only `.md` files inside `/src/content/pages/` represent actual website text.
- These files must NOT contain layout or HTML.
- Cursor may update text only using blocks from `content-blocks.md`.

## 2.2 Design System Files

```
/docs/design/
    DESIGN_SYSTEM_EN.md
    /archive/
        DESIGN_SYSTEM_RU.md
```

## 2.3 Product & Branding Files

```
/docs/branding/            # brand assets, visual identity
/docs/product/             # product documentation
    SITE_STRUCTURE.md
    ROADMAP.md
```

---

# 3. CONTENT UPDATE RULES

## 3.1 Allowed Operations

- Insert approved blocks from `content-blocks.md`
- Restructure order of blocks
- Combine blocks into a new section with **no new semantic content**
- Improve grammar, clarity, or readability IF the meaning stays identical

## 3.2 Forbidden Operations

- Creating new services
- Changing meaning of any service description
- Adding facts not in cleaned.md
- Generating long paragraphs outside of brand voice
- Modifying SEO keywords
- Removing required SEO blocks

## 3.3 Adding New Content

When adding a new text block:

1. Add it to `content-blocks.md` with a **new Block ID**
2. Confirm with user
3. Only then insert it into a page

---

# 4. SEO RULES

1. All pages must include SEO keyword clusters from `cleaned.md`.
2. Titles must be short, clear, and contain a primary keyword.
3. Meta descriptions must be based only on approved blocks.
4. No keyword stuffing.
5. Structured text with headings and bullet lists is preferred.

---

# 5. AI AGENT RULES

## 5.1 Responsibilities

- Maintain consistency with design system
- Keep code clean and follow project style
- Use content-only from approved sources
- Validate changes before applying

## 5.2 Interaction Protocol

1. Agent must request confirmation for any major structural change.
2. When editing a page, the agent SHOULD (when changes are significant) list:
   - Blocks inserted (IDs)
   - Blocks removed
   - Any important SEO considerations

## 5.3 Safety Rules

- Never delete or overwrite page content without explicit permission
- Never modify DESIGN_SYSTEM_EN.md or cleaned.md automatically
- Never create components with arbitrary styling

---

# 6. FRONTEND DEVELOPMENT RULES

## 6.1 Code Style

- Follow Prettier & ESLint configs (to be added)
- Components must be reusable and not page-specific
- Avoid inline styles
- Use Tailwind tokens or CSS variables for colors and spacing

## 6.2 Folder Structure

```
/src/components/ # UI components
/src/content/ # markdown content
/src/router/ # routing setup (if applicable)
```

## 6.3 Component Rules

- Keep components clean and declarative
- No business logic inside UI components
- Use descriptive names

---

# 7. PAGE CREATION RULES

Every new page must follow:

1. Structure defined in SITE_STRUCTURE.md
2. Text blocks from content-blocks.md
3. Styles from DESIGN_SYSTEM_EN.md
4. SEO rules described above

Cursor must:

- Build layout first
- Insert content second
- Apply SEO third

---

# 8. VERSIONING RULES

- Every major content update requires a commit message referencing Block IDs.
- DESIGN_SYSTEM_EN.md changes must be versioned carefully.
- Raw content must remain archived.

---

# 9. PROHIBITED ACTIONS

- Generating new service categories
- Inserting new visual styles
- Editing brand colors or typography without approval
- Writing marketing slogans not based on brand voice
- Replacing structure of pages without confirmation

## 9.1 Protected Files

The following files must NOT be modified by AI agents unless the user explicitly requests it:

- docs/rules/PROJECT_RULES.md
- docs/product/ROADMAP.md
- docs/design/DESIGN_SYSTEM_EN.md
- src/content/cleaned.md

---

# 10. FUTURE EXPANSIONS

This project will later include:

- `design-system.json`
- Component token definitions
- Full SEO meta system
- AEO (AI Engine Optimization) pages
- Portfolio templates

These must follow the same rules and reference this file.

---

description: "Roadmap + rules driven development for The Vadim Group website"
globs:

- "\*_/_.ts"
- "\*_/_.tsx"
- "docs/product/ROADMAP.md"
- "docs/rules/PROJECT_RULES.md"
- "src/content/\*_/_.md"
  alwaysApply: true

---

- Always use [ROADMAP.md](mdc:docs/product/ROADMAP.md) and [PROJECT_RULES.md](mdc:docs/rules/PROJECT_RULES.md) as primary guides.
- Before big changes, briefly check which roadmap section they belong to.
- Fulfill the user's request even if it does not follow the roadmap order, but do not rewrite the roadmap because of this.
- If you clearly complete a roadmap task, you may update [ROADMAP.md](mdc:docs/product/ROADMAP.md) by checking off the corresponding checkbox.
- Never fully rewrite or restructure the roadmap unless explicitly asked.
- Use content from `src/content/cleaned.md`, `src/content/content-blocks.md` and `src/content/pages/*.md` as the single source of truth for text.
- Do not invent new services, features, or claims without explicit user approval.
- When you update the roadmap, write in the chat: "Roadmap has been updated".

# END OF PROJECT RULES
