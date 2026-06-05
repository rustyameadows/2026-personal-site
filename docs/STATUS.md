# Status

Last updated: 2026-06-05

## Current State

The repo now contains the first static Next.js bootstrap for a new personal website.

Current contents:

- root `AGENTS.md` for durable agent instructions
- root `PLANS.md` for execution-plan rules
- root `README.md` for orientation and commands
- Next.js App Router configured for static export
- npm package and lockfile
- TypeScript and ESLint configuration
- MDX content under `content/`
- explicit content registry under `src/lib/content.ts`
- homepage route, project route, not-found route, and local-only playground route under `src/app/`
- minimal black-and-white global CSS under `src/app/globals.css`
- DialKit dependency for the local-only playground
- lightweight `.gitignore` for likely future JavaScript/static-site tooling
- `docs/SITE_BRIEF.md` for early site direction
- `docs/CODEX_WORKFLOW.md` for the Codex operating workflow
- `docs/DECISIONS.md` for durable decisions
- `docs/BACKLOG.md` for future work
- `docs/plans/README.md` for future execution plans

Selected stack: Next.js static export, npm, MDX files, minimal plain CSS, local-only DialKit playground, and Cloudflare Pages.

## Done

- Established durable agent instructions.
- Added a visible planning/status workflow for Codex sessions.
- Recorded that useful subagent use should be encouraged for bounded parallel work.
- Recorded that user-visible frontend changes must be verified with the Codex in-app browser and Browser skill.
- Added a lightweight decision log, backlog, status doc, site brief, workflow doc, and execution-plan template.
- Scaffolded the first Next.js static-export app.
- Added homepage and project pages generated from MDX content.
- Added a local-only DialKit `/playground` route for later typography/style tuning.
- Stripped the app back to a bare black-and-white bootstrap with no decorative design layer.
- Added Cloudflare Pages build guidance: `npm run build` publishing `out`.

## Not Started

- Define the site's audience, core message, sections, and content inventory.
- Replace starter copy with real personal-site content.
- Add more project MDX files.
- Define the visual design direction later, after the bare bootstrap is accepted.
- Add accessibility checks beyond lint/typecheck/build.
- Add CI and deploy preview checks.

## Next Likely Moves

- Replace starter homepage and project text with real content.
- Connect the GitHub repo to Cloudflare Pages with build command `npm run build` and output directory `out`.
- Add additional projects by creating MDX files and registering them in `src/lib/content.ts`.
- Use `/playground` later only when intentionally starting typography or CSS exploration.

## Blockers And Open Questions

- What should the personal site primarily do: portfolio, writing hub, creative playground, resume/contact surface, experiments, or a blend?
- What public identity, tone, and visual style should the site express?
- What content already exists, and what needs to be written or gathered?
- What real projects should replace the starter project?
- What visual direction should the first public version express?
- Should future project registration stay explicit or move to a file discovery helper once there are more than a handful of pages?

## Update Rules

Update this file after meaningful repo changes. Keep entries factual and current. Move completed work from `Next Likely Moves` or `Not Started` into `Done` as implementation proceeds.
