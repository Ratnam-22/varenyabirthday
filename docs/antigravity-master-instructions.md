# Project Varenya

# Antigravity Development Instructions

Version: 1.0

---

# Purpose

This document defines the engineering standards and workflow for implementing Project Varenya.

The goal is to produce production-quality, maintainable code that follows the project documentation exactly.

All implementation decisions should remain consistent with:

- 01-project-vision.md
- 02-storyboard.md
- 04-design-system.md
- 05-implementation-plan.md
- 06-project-architecture.md
- 07-animation-specification.md

If there is a conflict, stop and explain the conflict instead of making assumptions.

---

# General Rules

- Build incrementally.
- Never rewrite large parts of the project without a clear reason.
- Preserve existing architecture.
- Prefer reusable solutions over duplication.
- Keep the codebase easy to understand.

---

# Before Writing Code

Before implementing any feature:

1. Read the relevant documentation.
2. Explain the implementation approach.
3. Identify affected files.
4. Confirm assumptions if requirements are unclear.

Do not invent missing product requirements.

---

# Coding Standards

Use:

- TypeScript (strict mode)
- Functional React components
- App Router
- Named exports where appropriate
- Small reusable hooks
- Clear variable names

Avoid:

- `any`
- Large monolithic components
- Copy-paste logic
- Dead code
- Commented-out code

---

# Component Guidelines

Each component should:

- Have one responsibility.
- Accept typed props.
- Be reusable.
- Avoid unnecessary state.
- Be easy to test.

Split components that become too large.

---

# Animation Guidelines

Animation logic should remain outside UI components whenever practical.

Prefer:

- GSAP timelines
- Reusable animation helpers
- Timeline composition

Avoid duplicated animation code.

---

# Three.js Guidelines

Keep rendering logic isolated.

Separate:

- Camera
- Lighting
- Materials
- Environment
- Particles
- Post-processing

Dispose of WebGL resources when scenes unmount.

---

# Performance

Always:

- Lazy-load heavy scenes.
- Optimize images.
- Compress textures.
- Use dynamic imports where appropriate.
- Avoid unnecessary re-renders.

Provide graceful degradation for lower-powered mobile devices.

---

# Mobile

The experience must work on:

- Mobile
- Tablet
- Desktop

Do not rely solely on hover interactions.

Every interactive element should have a touch equivalent.

---

# Accessibility

Support:

- Keyboard navigation where appropriate
- Reduced motion
- Semantic HTML
- Focus indicators
- Sufficient color contrast

---

# Quality Gates

A phase is complete only if:

- Build succeeds.
- TypeScript passes.
- Lint passes.
- Responsive layout verified.
- No obvious visual regressions.
- Existing scenes still work.

---

# Git Workflow

Treat each phase as a separate milestone.

Recommended flow:

Feature branch

↓

Implementation

↓

Review

↓

Fixes

↓

Commit

↓

Merge

Commit messages should clearly describe the change.

---

# Output Expectations

When implementing a phase:

1. Summarize the work.
2. List created files.
3. List modified files.
4. Explain architectural decisions.
5. Mention any assumptions.
6. Mention remaining work.

---

# Error Handling

Never silently ignore failures.

If a requirement cannot be implemented:

- Explain why.
- Suggest alternatives.
- Continue only when appropriate.

---

# Definition of Done

Implementation is considered complete only when:

- Matches the documentation.
- Responsive.
- Maintainable.
- Production-ready.
- Consistent with the design system.
- No placeholder implementations remain.

---

# Final Goal

The finished experience should feel cohesive, polished, and thoughtfully engineered.

Technology should support the story.

The story should always remain the primary focus.