# Status

Last updated: 2026-08-13

## Current State

The repo contains an actively iterating static Next.js personal website.

Current contents:

- root `AGENTS.md` for durable agent instructions
- root `PLANS.md` for execution-plan rules
- root `README.md` for orientation and commands
- Next.js App Router configured for static export
- npm package and lockfile
- TypeScript and ESLint configuration
- MDX content under `content/`
- explicit content registry under `src/lib/content.ts`
- homepage route, project and experiment detail routes, not-found route, and local-only playground route under `src/app/`
- custom homepage, project-viewer, route-transition, and responsive styles under `src/app/globals.css`
- locally hosted Young Serif and Junicode 2 variable font families under `public/fonts/`, including their SIL Open Font License text and source notes
- local project hero imagery under `public/projects/`, with source notes for the copied workspace assets
- DialKit dependency for the local-only playground
- lightweight `.gitignore` for likely future JavaScript/static-site tooling
- `docs/SITE_BRIEF.md` for early site direction
- `docs/CODEX_WORKFLOW.md` for the Codex operating workflow
- `docs/DECISIONS.md` for durable decisions
- `docs/BACKLOG.md` for future work
- `docs/plans/README.md` for future execution plans
- working interview notes and publication drafts under `docs/case-study-notes/` and `docs/case-study-drafts/`

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
- Established the first typography roles: Junicode 2 for the homepage description and project-page narrative body, and Young Serif for homepage project names.
- Verified the typography in the Codex in-app browser at the default viewport and at 390px wide.
- Reworked every project landing moment into a bordered 60/40 canvas with a full-bleed hero image, project title, sourced intro copy, and a working in-canvas “Learn more” link.
- Softened and tightened the project section rail, and matched the bottom project-picker labels to the homepage with stable-weight Young Serif.
- Removed the project-view nav underlines and compacted the bottom project reel to return more vertical space to the bordered canvas.
- Replaced the project-view “Home” link with a “Contact” action that copies the placeholder email `hello@rustymeadows.com` and confirms the action with an accessible toast.
- Replaced the fixed-height bordered project canvas, internal scrolling, progress rail, and bottom project reel with a normal free-flowing project page. Added a “Projects” action beside “Contact” that opens an accessible full-viewport grid of project stacks.
- Limited the public homepage and project overlay to Pineapple Productions, Little Plains, and I’ve Seen the Future while keeping the other project routes available directly.
- Added a homepage Experiments section and project-page Experiments overlay for Explore Art and Orbs, with linked static destination pages for both.
- Added a simple shared Junicode footer to the homepage, every project page, and both experiment pages. Its Contact action copies the placeholder address and shows the same status toast as the project-page chrome.
- Opened the outer project shell and case-study media fields to a full-width canvas with an ultra-wide maximum so imagery and the footer rule can reach the viewport edges, while preserving the original inset and 1400px maximum for case-study text.
- Replaced every CSS-drawn project-content placeholder with reusable flat-gray PNG assets created locally with ImageMagick. Only the paper-stack graphics remain CSS-drawn.
- Rebalanced the desktop project narrative into four substantial text sections with follow-up writing between media groups, six grayscale assets per standard project page, shorter full-bleed horizontal fields, and equal paired-media grids. Roman and Williams Guild retains its longer eight-section narrative.
- Completed and received editorial approval for the Pineapple Productions case-study draft; publishing remains part of the shared content-integration pass.
- Reviewed the Little Plains collective source article and nearby repositories, completed the personal-contribution interview, and received Rusty's editorial approval for the full case-study draft; publishing remains.
- Clarified that I’ve Seen the Future is the umbrella brand and Interpolations its first public activation, explicitly excluding the ISTF Lab; completed initial live-site and repository reconnaissance and began the focused interview.
- Completed the I’ve Seen the Future / Interpolations interview and received Rusty's editorial approval for the full case-study draft; publishing remains.
- Began the Explore Art experiment case study with fresh live-product and repository review plus Rusty's art-history, museum, Warhol-exhibition, and earlier Discover Art context.
- Completed the Explore Art interview and wrote the first full experiment case-study draft for Rusty's review.
- Completed the first full **Creating Visuals with Agents** draft after Rusty's interview feedback. It is a balanced visual-and-written growing collection whose entries are not a shared visual system or standalone case studies, but each retains enough context to preserve its real significance, including production use for the Little Plains watercolors and the depth of the Orbs exploration. Asset work remains a separate later round.

## Not Started

- Define the site's audience, core message, sections, and content inventory.
- Replace starter copy with real personal-site content.
- Add more project MDX files.
- Define the visual design direction later, after the bare bootstrap is accepted.
- Continue evaluating the emerging typography direction before extending it to additional roles.
- Replace the remaining project-viewer placeholder sections with real narrative, media, process, and outcome content.
- Replace the temporary experiment-page descriptions and in-progress messages with real experiment content.
- Add accessibility checks beyond lint/typecheck/build.
- Add CI and deploy preview checks.

## Next Likely Moves

- Publish the five completed drafts through the repo-backed site content path using gray PNG placeholders, then complete the separate real-asset pass later.
- After the five narratives are approved, move real case-study content and media into the repo-backed MDX publishing path.
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
