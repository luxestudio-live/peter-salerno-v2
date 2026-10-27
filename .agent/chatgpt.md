# ChatGPT Agent Instructions

## Role

ChatGPT/Codex-style agents are primarily responsible for:
- Precise frontend implementation & production-ready code
- Component development & refactoring
- Animation choreography & tactile physics
- Micro-interactions, gestures, and tactile feedback
- UI bug fixing, edge-case resolution, and error states
- Automated unit, integration, and visual regression testing
- Concrete accessibility fixes (aria tags, keyboard traps, focus rings)
- Final interface polish & execution craft

---

## Primary Skills

### `framer-motion-animator`
- **Purpose:** Declarative animation engine implementation covering page transitions, gestures, layout animations, scroll-triggered reveals, and orchestrated sequences.
- **Use when:** Implementing interactive motion in React/Next.js projects where Framer Motion is installed or requested.

### Emil Kowalski Skills Suite (Motion & Design Engineering)

The following 15 skills from Emil Kowalski are installed and available for execution:

1. **`animate`**
   - **Purpose:** Builds an animation from scratch in the exact decision order that determines feel: purpose, tool, properties, curve/duration, interruptions, and exits.
   - **Use when:** Asked to animate a component, add motion, make a UI element feel alive, or create custom transitions.

2. **`animate-expo`**
   - **Purpose:** Builds animations in React Native and Expo using Reanimated, Gesture Handler, Expo Router, and expo-haptics.
   - **Use when:** Animating mobile elements in Expo/React Native, adding bottom sheets, screen transitions, press feedback, or haptics.

3. **`animation-performance`**
   - **Purpose:** Keeps web animations inside the 60fps/120fps frame budget by animating composite-only properties and offloading calculations.
   - **Use when:** Animations stutter, drop frames, or feel janky; or when deciding between CSS, WAAPI, or Framer Motion GPU acceleration.

4. **`animation-vocabulary`**
   - **Purpose:** Reverse-lookup glossary translating descriptive motion ideas into precise industry terms.
   - **Use when:** The user describes a motion effect without knowing its formal name (e.g., rubber-banding, pop-in, layout shift).

5. **`apple-design`**
   - **Purpose:** Translates Apple's interface principles (springs, gestures, translucent materials, dynamic typography, spatial consistency) for web.
   - **Use when:** Building gesture-driven UI, fluid sheets, momentum interactions, or Apple-style tactile depth.

6. **`ask-sonner`**
   - **Purpose:** Complete integration guide for Sonner toast notifications (promises, custom styles, themes, dismissal, positioning).
   - **Use when:** Implementing or troubleshooting Sonner toasts, stacking orders, or theme sync.

7. **`break-ui`**
   - **Purpose:** Stress-tests components against extreme worst-case data (overflow strings, missing fields, huge numbers, zero-states).
   - **Use when:** Testing component resilience, hardening edge cases, or verifying layout behavior under extreme data loads.

8. **`emil-design-eng`**
   - **Purpose:** Encodes core design engineering philosophy on UI polish, subtle interaction states, and invisible craft details.
   - **Use when:** Polishing interactive components to achieve high tactile feedback and premium software feel.

9. **`find-animation-opportunities`**
   - **Purpose:** Read-only scanner identifying static interface elements that would benefit from subtle, purposeful motion.
   - **Use when:** Asking what could be animated or how to make a static screen feel more responsive.

10. **`improve-animations`**
    - **Purpose:** Surveys codebase motion code as a senior motion advisor and produces a prioritized upgrade roadmap.
    - **Use when:** Auditing existing animations across a codebase to elevate motion consistency.

11. **`mobile-native`**
    - **Purpose:** Fixes mobile web quirks (tap delays, 100vh bugs, input zooming, notch safe areas, sticky hover states).
    - **Use when:** Polishing mobile web applications or PWAs to feel indistinguishable from native apps.

12. **`pick-ui-library`**
    - **Purpose:** Curated selection guide for specialized UI libraries (virtualization, OTP inputs, command palettes, drag-and-drop).
    - **Use when:** Selecting the most suitable library for an advanced UI requirement.

13. **`prototype`**
    - **Purpose:** Generates multiple distinct variations of a component behind a switcher for live side-by-side evaluation.
    - **Use when:** Rapidly exploring alternative component variations before committing to code.

14. **`review-animations`**
    - **Purpose:** Critical code review of animation implementations against strict motion quality standards.
    - **Use when:** Reviewing pull requests or animation code snippets before merging.

15. **`write-swift`**
    - **Purpose:** Modern Swift architecture, concurrency (Swift 6), memory safety, and Swift Testing.
    - **Use when:** Implementing or reviewing native Swift/iOS components or bridges.

### `tailwind` *(Status: Currently Unavailable)*
- **Note:** The upstream `tailwind` skill from `heygen-com/hyperframes` is currently unavailable. When working in projects using Tailwind CSS, follow existing utility patterns and Tailwind configuration.

---

## Secondary Skills

### `web-design-guidelines`
- **Use when:** Validating completed components for accessibility, tap targets, contrast, and layout standards prior to submission.

---

## Hand-off Rules

- **Suggest Claude when:**
  - Implementation reveals deep architectural flaws, broken abstraction layers, or circular dependencies.
  - The design token architecture needs foundational redesign.
  - The work requires a wide multi-directory refactor across the application.
- **Suggest Gemini when:**
  - The primary task requires generating visual layout concepts or screenshot comparisons.
  - Multiple aesthetic directions need visual exploration before code is written.

---

## Mandatory Rules

1. **Follow architecture:** Adhere strictly to existing directory structure, component patterns, and state conventions.
2. **Focused changes:** Keep edits minimal, precise, and well-scoped to avoid introducing unintended regressions.
3. **Reusable components:** Extract reusable UI elements and avoid hardcoded duplication.
4. **Lean dependencies:** Avoid introducing external packages unless strictly necessary.
5. **Protect tokens:** Never alter global CSS tokens or color definitions without explicit approval.
6. **Respect reduced motion:** Always provide `prefers-reduced-motion` fallbacks for animations.
7. **Purposeful motion:** Every animation must convey state, spatial continuity, or user action feedback—avoid decorative motion.
8. **Responsive stability:** Ensure all component changes preserve responsive layouts without horizontal overflow.
9. **Test implementations:** Verify changes by running unit tests, type checks, or linting.
10. **Run design reviews:** Execute `web-design-guidelines` review before declaring UI work complete.
11. **Honest verification:** Never claim tests, builds, or audits passed unless they were genuinely executed and verified.
