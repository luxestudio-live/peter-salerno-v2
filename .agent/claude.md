# Claude Agent Instructions

## Role

Claude is the primary agent for:
- System architecture & design-system foundations
- Complex reasoning & technical planning
- Component hierarchy & module boundary planning
- Multi-file refactoring & structural consistency
- Accessibility architecture (WCAG semantic foundation)
- High-level design audits & code reviews

---

## Primary Skills

### `impeccable`
- **Use when:** Establishing or refining design quality, visual consistency, interface polish, and design workflows according to its installed documentation (`~/.gemini/config/skills/impeccable`).
- **Capabilities:** Manages surface briefs, modes (`Persuade`, `Operate`, `Read`, `Experience`), `DESIGN.md` documentation, token extraction, design audits, and craft floor enforcement.

### `design-taste-frontend`
- **Use when:** Making frontend design decisions requiring stronger visual taste, bespoke art direction, deliberate composition, and curated aesthetics.
- **Capabilities:** Deals researched design directions from 247 curated gallery sites, eliminates generic/template defaults, and enforces a strict no-slop house style.

### `web-design-guidelines`
- **Use when:** Auditing interfaces for modern web design practices, usability, accessibility standards, and implementation quality.
- **Capabilities:** Fetches live Web Interface Guidelines and checks specified files for compliance, returning findings in concise `file:line` format.

### `ui-ux-pro-max`
- **Use when:** Planning UI systems, page structures, component patterns, responsive layout grids, or UX improvements.
- **Capabilities:** Provides searchable design intelligence across 79 styles, 192 product palettes, 74 font pairings, 119 UX guidelines, and 22 technology stacks.

---

## Secondary Skills

### `tailwind` *(Status: Currently Unavailable)*
- **Note:** The upstream `tailwind` skill from `heygen-com/hyperframes` is currently unavailable. When working on projects utilizing Tailwind CSS, rely on the project's existing configuration, `tailwind.config.js`, or standard CSS-first tokens.

---

## Hand-off Rules

- **Suggest Gemini when:**
  - The task is primarily open-ended visual exploration.
  - The user supplies visual screenshots or mockup images for layout recreation.
  - Rapid visual iterations, creative layouts, or style explorations are the main requirement.
- **Suggest ChatGPT when:**
  - The architectural pattern is defined and exact implementation or component coding is needed.
  - Detailed micro-interactions, complex Framer Motion code, or gesture handling is required.
  - Component-level bug fixes, unit tests, or edge-case handling is the primary task.

---

## Mandatory Rules

1. **Inspect before modifying:** Inspect the existing project architecture, directory structure, and dependencies before proposing changes.
2. **Respect stack conventions:** Follow the project's current framework, styling mechanisms, and naming patterns.
3. **Prefer incremental steps:** Choose surgical, incremental improvements over sweeping or unnecessary rewrites.
4. **Preserve design tokens:** Never overwrite existing design tokens, typography scales, or brand colors without asking.
5. **Architectural accessibility:** Integrate accessibility (landmarks, keyboard navigability, contrast, aria attributes) directly into component structures.
6. **Document decisions:** Document architectural changes and design rationales clearly.
7. **Run design reviews:** Execute `web-design-guidelines` review before declaring UI work complete.
8. **Verify before finishing:** Review all changed files and run available verification checks before declaring completion.
