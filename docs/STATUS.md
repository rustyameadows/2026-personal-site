# Status

Last updated: 2026-06-05

## Current State

The repo is a docs-first bootstrap for a new personal website.

Current contents:

- root `AGENTS.md` for durable agent instructions
- root `PLANS.md` for execution-plan rules
- root `README.md` for orientation
- lightweight `.gitignore` for likely future JavaScript/static-site tooling
- `docs/SITE_BRIEF.md` for early site direction
- `docs/CODEX_WORKFLOW.md` for the Codex operating workflow
- `docs/DECISIONS.md` for durable decisions
- `docs/BACKLOG.md` for future work
- `docs/plans/README.md` for future execution plans

No app framework, package manager, hosting provider, CMS, styling system, analytics tool, or deployment workflow has been selected yet.

## Done

- Established durable agent instructions.
- Added a visible planning/status workflow for Codex sessions.
- Recorded that useful subagent use should be encouraged for bounded parallel work.
- Recorded that user-visible frontend changes must be verified with the Codex in-app browser and Browser skill.
- Added a lightweight decision log, backlog, status doc, site brief, workflow doc, and execution-plan template.
- Kept the setup framework-neutral so future Next/Vue/Astro/SvelteKit/other choices remain open.

## Not Started

- Define the site's audience, core message, sections, and content inventory.
- Choose the framework/static builder.
- Choose package manager and Node version.
- Choose hosting target and deployment workflow.
- Choose styling approach, design system, and asset strategy.
- Scaffold the app.
- Add tests, linting, formatting, accessibility checks, and browser verification scripts.
- Add CI and deploy preview checks.

## Next Likely Moves

- Clarify the site's purpose, desired feel, and first-pass content structure.
- Compare candidate builders and hosting targets against the actual content/design needs.
- Record framework and hosting decisions in `docs/DECISIONS.md`.
- Scaffold the app only after the initial technical direction is chosen.
- Update `AGENTS.md`, `README.md`, and `docs/CODEX_WORKFLOW.md` with exact commands once the app exists.

## Blockers And Open Questions

- What should the personal site primarily do: portfolio, writing hub, creative playground, resume/contact surface, experiments, or a blend?
- What public identity, tone, and visual style should the site express?
- What content already exists, and what needs to be written or gathered?
- Does the site need a CMS, MD/MDX content, external data, or fully static files?
- Should the hosting bias be Cloudflare, Vercel, or decided after framework selection?

## Update Rules

Update this file after meaningful repo changes. Keep entries factual and current. Move completed work from `Next Likely Moves` or `Not Started` into `Done` as implementation proceeds.
