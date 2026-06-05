# 2026 Personal Site

This repository is the starting point for a new personal website.

The site is a static-exported Next.js app with repo-backed MDX content and a local-only DialKit playground. It is intended to deploy from GitHub to Cloudflare Pages.

This is a bare bootstrap, not a design pass. The app uses minimal black-and-white CSS only.

## Read First

- [AGENTS.md](AGENTS.md) - durable instructions for Codex and other coding agents.
- [PLANS.md](PLANS.md) - execution-plan rules for multi-step work.
- [docs/STATUS.md](docs/STATUS.md) - current state, next moves, and blockers.
- [docs/SITE_BRIEF.md](docs/SITE_BRIEF.md) - early site direction and open questions.
- [docs/BACKLOG.md](docs/BACKLOG.md) - high-level future work queue.
- [docs/DECISIONS.md](docs/DECISIONS.md) - lightweight decision log.
- [docs/CODEX_WORKFLOW.md](docs/CODEX_WORKFLOW.md) - repo workflow based on current Codex guidance.
- [docs/plans/](docs/plans/) - future execution plans for complex work.

## Current State

- Next.js App Router with `output: "export"`
- MDX content under `content/`
- Explicit project registry in `src/lib/content.ts`
- Local-only `/playground` powered by DialKit
- Minimal black-and-white styling; no Tailwind or UI kit
- Cloudflare Pages target: build `npm run build`, publish `out`

## Commands

```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview:static
```

`npm run preview:static` serves the exported `out/` directory at `http://localhost:4173` after a build.
