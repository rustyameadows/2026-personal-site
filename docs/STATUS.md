# Status

Last updated: 2026-08-17

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
- temporary teaser homepage at `/`, the preserved working homepage at `/home`, project and experiment detail routes, not-found route, and local-only playground route under `src/app/`
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
- complete MDX narratives for three projects and two experiments, rendered through one shared case-study page system
- reusable facts, figure, and figure-grid components backed by the existing flat-gray PNG placeholder library

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
- Published complete MDX case studies for Pineapple Productions, Little Plains, and I’ve Seen the Future: Interpolations, with project-specific facts, narrative structure, and temporary gray image placements.
- Published complete MDX experiment pages for Explore Art and **Creating Visuals with Agents**. Orbs is correctly presented as one entry in the latter collection and links to its complete external archive.
- Moved narrative ownership out of the generic viewer and into each project or experiment MDX file while retaining a shared static-export-compatible presentation shell.
- Replaced the public Orbs experiment route and index entry with **Creating Visuals with Agents**.
- Kept draft metadata, visual directions, editorial cautions, and follow-up questions out of the public pages.
- Verified the homepage and all five case studies in the Codex in-app browser at 1360px and 390px. Titles, navigation, placeholder media, document flow, and responsive widths passed with no console errors or horizontal overflow.
- Passed `npm run lint`, `npm run typecheck`, and `npm run build` for the five-page publishing pass.
- Added confirmed X and LinkedIn profile links beside Contact in the shared site footer.
- Added provisional, asset-specific captions to all 24 content placeholders across Explore Art and **Creating Visuals with Agents**, giving the future real-asset pass both visible caption slots and a concrete editorial brief.
- Verified the updated experiment captions and shared footer in the Codex in-app browser at desktop and 390px mobile widths, with no horizontal overflow or console errors.
- Standardized the fact block on all five published case studies as **Role**, **Timeline**, and **Status**, in that order, with project-specific answers.
- Completed a voice pass across the three project and two experiment narratives, removing em dashes, en dashes, and formulaic language while preserving the facts and the distinct character of each story.
- Verified all five revised pages in the Codex in-app browser at 1280px and 390px. The shared metadata structure, captions, document flow, and responsive widths passed with no console errors or horizontal overflow.
- Passed `npm run lint`, `npm run typecheck`, and `npm run build` after the metadata and editorial pass.
- Preserved the complete project-stack homepage at `/home` and replaced `/` with a temporary teaser containing the existing introduction, three text-only project links, and the shared footer.
- Verified the teaser at 1280px and 390px and the preserved `/home` route at 390px in the Codex in-app browser. The project links, responsive columns, retained project and experiment cards, footer, and horizontal bounds passed without console errors.
- Passed `npm run lint`, `npm run typecheck`, and `npm run build` after the homepage split.

## Not Started

- Define the site's audience, core message, sections, and content inventory.
- Add more project MDX files.
- Continue evaluating the emerging typography direction before extending it to additional roles.
- Replace the temporary gray case-study images with the separate, rights-aware real-asset edit.
- Add accessibility checks beyond lint/typecheck/build.
- Add CI and deploy preview checks.

## Next Likely Moves

- Complete the separate real-asset pass, including sanitization, rights/provenance review, captions, and useful alt text.
- Continue developing the full homepage at `/home`, then replace the temporary root teaser when that experience is ready to publish.
- Perform a final editorial polish pass after reviewing the five published narratives in context with real media.
- Connect the GitHub repo to Cloudflare Pages with build command `npm run build` and output directory `out`.
- Add additional projects by creating MDX files and registering them in `src/lib/content.ts`.
- Use `/playground` later only when intentionally starting typography or CSS exploration.

## Blockers And Open Questions

- What should the personal site primarily do: portfolio, writing hub, creative playground, resume/contact surface, experiments, or a blend?
- What public identity, tone, and visual style should the site express?
- Which real visual assets should replace each gray case-study placement, and which require sanitization or rights confirmation?
- What final public contact address should replace `hello@rustymeadows.com`?
- Should future project registration stay explicit or move to a file discovery helper once there are more than a handful of pages?

## Update Rules

Update this file after meaningful repo changes. Keep entries factual and current. Move completed work from `Next Likely Moves` or `Not Started` into `Done` as implementation proceeds.
