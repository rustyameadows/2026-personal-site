# Site Brief

Last updated: 2026-06-05

## Working Summary

This repo is becoming a new personal website built with a static-exported Next.js app, repo-backed MDX content, and Cloudflare Pages deployment from GitHub.

The first version is intentionally small: a homepage, a project view, focused MDX files, and a local-only DialKit playground for later typography/style tuning.

The current bootstrap is intentionally bare. It should stay black-and-white and lightly styled until the user explicitly asks for a design pass.

## Early Goals

- Create a personal web presence that feels intentional, current, and maintainable.
- Keep the site fast, responsive, accessible, and easy to iterate on with Codex.
- Support a workflow where agents can understand current context from docs, keep a visible task list, use subagents when helpful, and verify browser-visible work in the Codex in-app browser.
- Avoid adding CMS/database/editor machinery while the site is still small.
- Avoid adding visual design machinery while the bootstrap is still being established.

## Early Non-Goals

- Do not add a CMS, database, auth, analytics, payments, email capture, or deployment provider by default.
- Do not turn the first screen into a generic landing page placeholder.
- Do not add Tailwind, shadcn, decorative cards, gradients, animation polish, or a finished visual system during bootstrap work.

## Product Questions

- What should visitors understand within the first few seconds?
- Which modes should the site support: work/portfolio, writing, experiments, personal notes, speaking, contact, resume, or something else?
- What should feel unusually "you" about the site?
- Which existing projects, writing, images, links, or artifacts should be included first?
- Which project MDX files should be written first?

## Design Principles

- Make the actual site experience the first screen.
- Defer imagery, motion, typography exploration, and interaction polish until a design pass is requested.
- Prioritize readability, performance, responsive behavior, and semantic structure.
- Keep visual decisions grounded in the site owner's work and personality.
- Verify meaningful UI changes in the Codex in-app browser before calling them done.

## Technical Posture

- Keep the Next.js app compatible with static export unless requirements justify server behavior.
- Deploy through Cloudflare Pages from GitHub.
- Prefer simple content formats and folder structures that future agents can inspect quickly.
- Record durable technical decisions in `docs/DECISIONS.md`.
