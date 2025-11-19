# INSTRUCTIONS_FOR_CURSOR.md — How to Work With This Repo

These instructions describe how AI assistants (Cursor agents) must work with this repository. They complement `PROJECT_RULES.md` and `ROADMAP.md`.

Main goals:

* Keep the codebase stable and predictable
* Respect the content system and brand
* Follow the development roadmap
* Avoid generating new business logic or services without approval

---

## 1. Key Reference Files

Before making non-trivial changes, always be aware of these files:

* Product & planning:

  * `docs/product/ROADMAP.md`
  * `docs/product/SITE_STRUCTURE.md` (if present)

* Rules & constraints:

  * `docs/rules/PROJECT_RULES.md`

* Design:

  * `docs/design/DESIGN_SYSTEM_EN.md`

* Content system:

  * `src/content/cleaned.md`
  * `src/content/content-blocks.md`
  * `src/content/pages/*.md`

Do **not** modify these files unless the user explicitly asks you to.

Exceptions:

* You may update checkboxes or short status notes in `docs/product/ROADMAP.md` when a roadmap item is clearly completed and the user expects this.

---

## 2. General Behavior

1. Always try to follow `docs/product/ROADMAP.md` when working on implementation tasks.
2. If the user’s request conflicts with the roadmap, **fulfill the user’s request**, but do **not** rewrite the roadmap.
3. If the user asks something outside this project, just answer normally.
4. Never introduce new services, features, or business logic unless the user explicitly asks for them.
5. Prefer small, focused changes over large refactors unless requested.

---

## 3. Working With Content

All textual content for the site must come from the content system:

* `src/content/cleaned.md` — main content library
* `src/content/content-blocks.md` — structured content blocks with IDs
* `src/content/pages/*.md` — page-level content files

Rules:

1. **Do not invent new content** (services, claims, features, areas of expertise). You may:

   * rearrange sections
   * slightly rephrase for clarity
   * combine existing blocks
     as long as the meaning stays the same.

2. When updating a page:

   * Prefer to reuse existing text from `content-blocks.md`.
   * If you need a new block, first add it to `content-blocks.md` with a clear ID and only after that insert it into the corresponding page.

3. Do not remove SEO-relevant sections unless the user explicitly approves.

4. Keep page `.md` files content-only (no layout or JSX, only headings and text).

---

## 4. Working With Design & Components

Design must follow:

* `docs/design/DESIGN_SYSTEM_EN.md`

Guidelines:

1. Use the existing design tokens (colors, spacing, typography) where possible.

2. Do not introduce new color variables or font families without user approval.

3. When creating new components:

   * Keep them reusable and clean
   * Avoid inline styles; use the existing styling approach (Tailwind/CSS variables/etc.)
   * Ensure spacing and hierarchy match the design system

4. Do not change the global design system file unless requested.

---

## 5. Working With ROADMAP.md

* File: `docs/product/ROADMAP.md`

Behavior:

1. Treat the roadmap as the **main plan** for implementation.
2. Before making larger changes, briefly check which roadmap section they belong to.
3. If the user directly asks for something that is not the “next” item, still do it.
4. You may update checkboxes or short status labels when you clearly complete a listed item.
5. Do **not** restructure or rewrite the roadmap without an explicit request.

When you update the roadmap, add a short note in the chat: **"Roadmap has been updated."**

---

## 6. Working With PROJECT_RULES.md

* File: `docs/rules/PROJECT_RULES.md`

This file contains high-level project rules. You must:

1. Follow all constraints described there.
2. Respect prohibited actions (no new services, no arbitrary brand changes, etc.).
3. Use Block IDs when connecting content to components.

If something in `PROJECT_RULES.md` conflicts with what the user requests, ask for clarification or follow the user’s explicit instruction and mention the conflict.

---

## 7. Code Quality & Tooling

When setting up or editing tooling:

* Prefer using ESLint and Prettier for consistent formatting.
* Keep configuration minimal and readable.
* Do not introduce heavy dependencies unless there is a clear benefit.
* When editing config files, explain to the user what changed and why.

---

## 8. Safety & Scope

1. Do not delete large sections of code or content without clear user approval.
2. Avoid “big-bang” refactors unless explicitly requested.
3. If unsure, propose a plan in the chat and wait for confirmation before applying large changes.

---

## 9. Summary

* Follow roadmap and rules, but always prioritize the explicit user request.
* Use the content system as the only source of truth for text.
* Keep design and components aligned with the design system.
* Make small, safe, explainable changes.
* Ask for confirmation before large refactors or structural changes.