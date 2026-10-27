# Multi-Agent Routing Architecture

This directory (`.agent/`) provides structured, task-specific routing guidance for Claude, Gemini, and ChatGPT/Codex-style agents working within this repository.

> **Note:** These files are instructional guidance for AI agents, not an automated runtime orchestration framework. They do not automatically switch models or trigger background handoffs.

---

## Global Routing Rule

**"Read your own agent file first, then load only the skills it lists for the task at hand."**

---

## Agent Index

| Agent | Configuration | Responsibility |
|---|---|---|
| **Claude** | [.agent/claude.md](file:///c:/Users/Sonali/Downloads/peter-salerno-v2/.agent/claude.md) | Architecture, reasoning, design systems, large refactors |
| **Gemini** | [.agent/gemini.md](file:///c:/Users/Sonali/Downloads/peter-salerno-v2/.agent/gemini.md) | Visual design, long context, rapid iteration |
| **ChatGPT** | [.agent/chatgpt.md](file:///c:/Users/Sonali/Downloads/peter-salerno-v2/.agent/chatgpt.md) | Implementation, animations, testing, polish |

---

## Installed Skills Inventory

The following skills are globally installed and verified:

### Core Visual & Design System Skills

- **`impeccable`**
  - *Description:* Out-of-distribution frontend craft for designing, reshaping, critiquing, auditing, and polishing interfaces. Covers UX review, hierarchy, typography, color, motion, design systems (`DESIGN.md`, tokens), and surface briefs across modes (Persuade, Operate, Read, Experience).
  - *Location:* `~/.gemini/config/skills/impeccable` (Antigravity global config)

- **`design-taste-frontend`**
  - *Description:* Art direction for websites distilled from 247 curated gallery sites (One Page Love, Awwwards Site of the Day). Deals researched directions, enforces a strict no-slop house style, and executes a screenshot look-and-fix loop.
  - *Location:* `~/.agents/skills/design-taste-frontend`

- **`ui-ux-pro-max`**
  - *Description:* Design intelligence for web, mobile, and desktop. Includes 79 styles (50 active), 192 product palettes, 74 font pairings, 119 UX guidelines, 105 curated icons, 17 GSAP presets, 25 chart types, and 22 technology stacks.
  - *Location:* `~/.agents/skills/ui-ux-pro-max`

- **`web-design-guidelines`**
  - *Description:* Review UI code for Web Interface Guidelines compliance. Fetches live rules and audits accessibility, contrast, touch targets, and layout best practices.
  - *Location:* `~/.agents/skills/web-design-guidelines`

- **`awwwards`**
  - *Description:* Build award-caliber websites from a prompt using Awwwards Site of the Day standards. Covers concept, art direction, typography, motion choreography, WebGL, transitions, SEO, accessibility, and performance.
  - *Location:* `~/.agents/skills/awwwards`

- **`jury`**
  - *Description:* Score websites the way an Awwwards jury would from evidence alone (screenshots, LCP, CLS, FPS, axe-core, focus, hover, SEO, metadata) with an objective ranked fix list.
  - *Location:* `~/.agents/skills/jury`

- **`framer-motion-animator`**
  - *Description:* Creates smooth animations and micro-interactions using Framer Motion (page transitions, gestures, scroll animations, layout animations, and choreographed sequences).
  - *Location:* `~/.agents/skills/framer-motion-animator`

### Emil Kowalski Skills Suite (Motion & Design Engineering)

- **`animate`**: Build animations from scratch in the correct order (purpose, properties, curve, duration, interruption, exits).
- **`animate-expo`**: Build React Native / Expo animations with Reanimated, Gesture Handler, Expo Router, and expo-haptics.
- **`animation-performance`**: Keep web animations inside the frame budget (composite-only properties, off-main-thread motion, avoid jank).
- **`animation-vocabulary`**: Reverse-lookup glossary translating vague descriptions into precise motion terminology.
- **`apple-design`**: Apple's interface design principles, fluid motion, gestures, typography, and depth translated for web.
- **`ask-sonner`**: Complete guide to the Sonner toast notification library (wiring, promises, styling, positioning, themes).
- **`break-ui`**: Stress-test UI components with worst-case data (extreme lengths, empty states, missing fields, emoji).
- **`emil-design-eng`**: Design engineering philosophy on UI polish, component design, animation decisions, and tactile details.
- **`find-animation-opportunities`**: Read-only codebase scanner proposing exact animation opportunities with values.
- **`improve-animations`**: Senior motion advisor audit producing prioritized roadmaps for codebase animation upgrades.
- **`mobile-native`**: Fix mobile web quirks (viewport shifts, 100vh bugs, touch delays, notch safe areas, tap highlights).
- **`pick-ui-library`**: Opinionated selection guide for frontend libraries across common UI challenges.
- **`prototype`**: Build multiple distinct UI variations rendered behind a visual switcher for fast comparison.
- **`review-animations`**: Strict review of animation code against high craft standards.
- **`write-swift`**: Modern Swift architecture, concurrency (Swift 6), memory safety, and Swift Testing.

---

## Unavailable Skills

- **`tailwind`**
  - *Status:* **Failed / Unavailable**
  - *Upstream Source:* `https://github.com/heygen-com/hyperframes`
  - *Detail:* The skill `tailwind` was previously in the repository but has been removed in upstream commits. Neither the repository nor the skills registry currently serves this package under that name. Agents must rely on project-level CSS/Tailwind configuration or other installed design skills.

---

## Common Project Principles

All agents working in this repository must adhere to the following principles:

1. **Respect the existing technology stack**: Never introduce conflicting frameworks, libraries, or runtimes without explicit user instruction.
2. **Follow current architecture and coding conventions**: Match existing file structures, naming conventions, and style patterns.
3. **Reuse existing components**: Check the existing codebase before creating new abstractions or components.
4. **Avoid unnecessary dependencies**: Keep the dependency graph lean; do not install external packages for simple utility logic.
5. **Preserve design tokens**: Respect established brand colors, typography scales, spacing rules, and CSS variables.
6. **Implement responsive and accessible interfaces**: Ensure proper contrast (WCAG AA), semantic HTML, keyboard navigability, and responsive layouts across all viewports.
7. **Avoid unnecessary rewrites**: Make surgical, incremental improvements over full-file or architectural rewrites.
8. **Validate before completion**: Run linters, type checks, build tests, and design guideline reviews before marking tasks complete.
9. **Load skills on demand**: Never preload all installed skills simultaneously; load only the specific skills required for the current task.
