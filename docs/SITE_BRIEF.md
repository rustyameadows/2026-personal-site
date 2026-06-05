# Site Brief

Last updated: 2026-06-05

## Working Summary

This repo will become a new personal website. It will likely be built with a static or mostly static JavaScript site builder and hosted on a conventional frontend provider such as Cloudflare or Vercel.

The exact framework, host, styling approach, content source, and site structure are deliberately undecided.

## Early Goals

- Create a personal web presence that feels intentional, current, and maintainable.
- Keep the site fast, responsive, accessible, and easy to iterate on with Codex.
- Support a workflow where agents can understand current context from docs, keep a visible task list, use subagents when helpful, and verify browser-visible work in the Codex in-app browser.
- Avoid premature technical choices before the content and experience direction are clearer.

## Early Non-Goals

- Do not scaffold a framework before the user chooses or asks for one.
- Do not add a CMS, database, auth, analytics, payments, email capture, or deployment provider by default.
- Do not turn the first screen into a generic landing page placeholder.

## Product Questions

- What should visitors understand within the first few seconds?
- Which modes should the site support: work/portfolio, writing, experiments, personal notes, speaking, contact, resume, or something else?
- What should feel unusually "you" about the site?
- Which existing projects, writing, images, links, or artifacts should be included first?
- Should the site be mostly static content, or does it need dynamic data later?

## Design Principles

- Make the actual site experience the first screen.
- Use imagery, motion, typography, and interaction with restraint and purpose.
- Prioritize readability, performance, responsive behavior, and semantic structure.
- Keep visual decisions grounded in the site owner's work and personality.
- Verify meaningful UI changes in the Codex in-app browser before calling them done.

## Technical Posture

- Bias toward a static-first JavaScript builder unless requirements justify server behavior.
- Keep deployment portable until a provider is selected.
- Prefer simple content formats and folder structures that future agents can inspect quickly.
- Record durable technical decisions in `docs/DECISIONS.md`.
