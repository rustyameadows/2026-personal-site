# Site Brief

Last updated: 2026-08-13

## Working Summary

This repo is becoming a new personal website built with a static-exported Next.js app, repo-backed MDX content, and Cloudflare Pages deployment from GitHub.

The first version is intentionally focused: a homepage, three complete project case studies, two complete experiment case studies, focused MDX files, and a local-only DialKit playground for later typography/style tuning.

The site has entered an incremental design pass while keeping the visual system focused and repo-native. The first explicit typography direction pairs Junicode 2 with Young Serif.

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
- Evolve imagery, motion, typography, and interaction polish incrementally from explicit design requests.
- Use Junicode 2 for the homepage description and project-page narrative body, and Young Serif for homepage project names, until further typography exploration changes those roles.
- Open project pages with a free-flowing 60/40 landing composition: representative media on the left and the project title, concise introduction, and continuation CTA on the right. Stack that composition on smaller screens.
- Let the browser own project-page scrolling. Keep project navigation out of the content flow and expose it through a full-viewport overlay grid opened from the top chrome. Use Young Serif consistently for project names on both the homepage and project overlay.
- Let the outer project shell and project media fields use the viewport generously so imagery and the footer rule reach the edges at standard widths, with an ultra-wide maximum on very large displays. Keep the project chrome and case-study text deliberately inset for readability.
- Keep the public project index intentionally edited: show Pineapple Productions, Little Plains, and I’ve Seen the Future for now. Present Explore Art and **Creating Visuals with Agents** separately as experiments, using the same stack language and their own static routes. The latter balances substantial writing with at least equal visual emphasis; its agent-made studies remain independent rather than forming one art-direction case study.
- Use a small shared footer on the homepage, project pages, and experiment pages so contact and site identity remain available at the end of each page.
- Prioritize readability, performance, responsive behavior, and semantic structure.
- Keep visual decisions grounded in the site owner's work and personality.
- Verify meaningful UI changes in the Codex in-app browser before calling them done.

## Published Content Model

- Projects: Pineapple Productions, Little Plains, and I’ve Seen the Future: Interpolations.
- Experiments: Explore Art and **Creating Visuals with Agents**.
- Each page owns its complete public narrative and media sequence in MDX.
- Projects and experiments share the same static case-study presentation components and responsive landing shell.
- Gray PNGs intentionally occupy every planned media position until the separate real-asset, rights, and provenance pass.
- Orbs remains an independent study inside **Creating Visuals with Agents**, with a link to its full external archive; it is not a separate experiment page in this site.

## Technical Posture

- Keep the Next.js app compatible with static export unless requirements justify server behavior.
- Deploy through Cloudflare Pages from GitHub.
- Prefer simple content formats and folder structures that future agents can inspect quickly. Full project and experiment narratives live under `content/`, while their public registries remain explicit in `src/lib/content.ts`.
- Record durable technical decisions in `docs/DECISIONS.md`.
