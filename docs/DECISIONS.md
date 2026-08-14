# Decisions

This is a lightweight decision log. Record durable technical, product, design, and workflow choices here.

## 0001 - Keep Initial Setup Docs-First

Date: 2026-06-05

Status: Accepted

Decision: Set up agentic documentation and planning structure without scaffolding an app framework.

Rationale: The user asked to bootstrap workflow before technical choices were solidified. Adding app files now would prematurely choose structure.

## 0002 - Use Root AGENTS.md With Supporting Docs

Date: 2026-06-05

Status: Accepted

Decision: Keep durable agent instructions in root `AGENTS.md`, with site direction, status, decisions, backlog, plans, and workflow detail in supporting docs.

Rationale: Codex guidance supports concise repo-level instructions, while supporting docs keep larger context available without making every task start with too much instruction noise.

## 0003 - Defer Framework And Hosting Choices

Date: 2026-06-05

Status: Superseded by 0008 and 0012

Decision: Treat Next, Vue/Nuxt, Astro, SvelteKit, Cloudflare, Vercel, and similar options as candidates only.

Rationale: The user named possible directions but explicitly said the specifics are not needed yet.

## 0004 - Require Codex In-App Browser Verification For UI Work

Date: 2026-06-05

Status: Accepted

Decision: Future user-visible frontend changes must be verified with the Codex in-app browser and Browser skill.

Rationale: The user specifically asked to always use the in-app Codex browser and skill for browser verification. This is especially important for a personal site where visual quality and responsive behavior matter.

## 0005 - Keep A Visible Codex Task List For Meaningful Work

Date: 2026-06-05

Status: Accepted

Decision: Multi-step work should keep a meaningful task list visible in Codex and update it as progress changes.

Rationale: The user specifically asked to keep a meaningful task list visible. This also makes agent progress easier to inspect during longer tasks.

## 0006 - Encourage Bounded Subagent Use

Date: 2026-06-05

Status: Accepted

Decision: Use subagents when they materially help with independent exploration, review, comparison, or disjoint implementation work, while keeping integration and verification in the main thread.

Rationale: The user asked to encourage useful subagent use. Bounded delegation captures the value without creating duplicate work or scattered ownership.

## 0007 - Bias Static-First Until Requirements Say Otherwise

Date: 2026-06-05

Status: Accepted

Decision: Future implementation should bias toward a static-first JavaScript architecture unless site requirements justify server behavior.

Rationale: The user expects a personal website likely built with a static JavaScript builder and hosted on a conventional frontend provider.

## 0008 - Use Next.js Static Export

Date: 2026-06-05

Status: Accepted

Decision: Use Next.js App Router as the recognizable app/build framework, configured with `output: "export"` for static HTML output.

Rationale: The user wants an employer-recognizable framework and a simple static personal site without server behavior.

## 0009 - Store Content In MDX Files

Date: 2026-06-05

Status: Accepted

Decision: Store homepage and project content in repo-backed MDX modules under `content/`, with project metadata exported from each project file.

Rationale: The user wants file-backed content and is comfortable editing focused MDX files directly.

## 0010 - Avoid CMS, Database, And Editor Frameworks

Date: 2026-06-05

Status: Accepted

Decision: Do not add a CMS framework, database, Vercel database, WYSIWYG library, or server-backed editing surface for this bootstrap.

Rationale: The site is intentionally tiny, and the user explicitly wants custom UI and simple repo files rather than a content/admin framework.

## 0011 - Use DialKit Only For Local Style Tuning

Date: 2026-06-05

Status: Accepted

Decision: Use DialKit only on a local-development `/playground` route for tuning CSS/design parameters.

Rationale: DialKit is useful for quick style experiments, but the public site should remain a simple static export without a design-control UI.

## 0012 - Deploy Through Cloudflare Pages

Date: 2026-06-05

Status: Accepted

Decision: Use Cloudflare Pages GitHub integration with build command `npm run build` and output directory `out`.

Rationale: The user has a Cloudflare account, wants GitHub-managed code, and wants branch/PR preview builds.

## 0013 - Keep The Bootstrap Visually Bare

Date: 2026-06-05

Status: Accepted

Decision: Keep the current app bootstrap black-and-white and minimally styled until the user explicitly asks for design work.

Rationale: The user wants a starter personal website scaffold first, not a visual design pass. Avoid decorative cards, gradients, shadows, oversized hero treatments, animation polish, Tailwind, shadcn, or UI-kit styling during bootstrap work.

## 0014 - Establish The First Serif Typography Roles

Date: 2026-08-11

Status: Accepted

Decision: Vendor the complete Young Serif and Junicode 2 variable webfont families from the neighboring Art Explorer repository. Use Junicode 2 for the homepage description and project-page narrative body, and use Young Serif for homepage project names. Keep the remaining interface typography unchanged for now.

Rationale: The user asked to begin typography exploration with a restrained division of roles. Local font files keep the static site self-contained, while the included source notes and SIL Open Font License text preserve provenance and redistribution terms.

## 0015 - Lead Project Pages With Representative 60/40 Landers

Date: 2026-08-11

Status: Accepted

Decision: Replace the project title floating across the canvas edge with a full-height landing section inside the bordered viewer. Use a representative, locally hosted hero image for the left 60 percent and place the title, sourced introductory copy, and a “Learn more” continuation link in the right 40 percent. Stack the media and copy on smaller screens. Keep the section rail close to the canvas edge in subdued gray, and use stable-weight Young Serif for bottom project-navigation labels without picker-wide opacity animation.

Rationale: The prior placeholder-first view made each project feel interchangeable and visually underdeveloped. A real image and concise factual introduction establish identity immediately while preserving the internal-scroll concept for future narrative sections.

## 0016 - Use A Clipboard Contact Action In Project Chrome

Date: 2026-08-11

Status: Accepted

Decision: Replace the project-page “Home” control with a “Contact” button that copies the public contact email to the visitor’s clipboard and confirms success or failure through a short-lived accessible status toast. Use `hello@rustymeadows.com` as a temporary placeholder until the final public address is chosen.

Rationale: This keeps contact immediate and lightweight without adding a separate route or exposing a mail-client dependency, while preserving the site’s static-only architecture.

## 0017 - Use Free-Flowing Project Pages And An Overlay Project Index

Date: 2026-08-12

Status: Accepted

Decision: Remove the project page’s fixed-height bordered canvas, internal scroll container, section-progress rail, and persistent bottom project reel. Render the existing landing and case-study content as one normal document-flow page. Add a “Projects” button beside “Contact” that opens an accessible full-viewport overlay containing all project stacks in a responsive grid.

Rationale: The canvas-mounted controls reduced the available content area and made the project experience feel like a viewer rather than a full case study. Normal browser scrolling gives the work more space, while the overlay preserves quick access to every project without permanently occupying the viewport.

## 0018 - Separate The Public Projects And Experiments Indexes

Date: 2026-08-12

Status: Accepted

Decision: Show only Pineapple Productions, Little Plains, and I’ve Seen the Future in the homepage Projects section and project overlay. Add a separate Experiments section and overlay for Explore Art and Orbs. Make both experiment stacks real links to lightweight static destination pages, and place the shared Junicode footer on the homepage and every detail page. The footer Contact action copies the public address and confirms it with the existing contact toast instead of opening a mail client.

Rationale: The edited public selection keeps the primary work focused while giving smaller explorations a clear, distinct home. Static experiment routes preserve the existing deployment model and leave room for their content to grow later.

## 0019 - Use Raster Assets For Project Placeholders

Date: 2026-08-12

Status: Accepted

Decision: Use deterministic flat-gray PNG files for project-content placeholders instead of drawing those fields with CSS. Keep CSS-drawn layers only for the intentional paper-stack navigation graphic.

Rationale: Real raster placeholders keep project media behavior explicit and consistent while avoiding a growing collection of placeholder-specific CSS shape rules.

The desktop composition should interleave substantial writing and media rather than grouping placeholder assets into uninterrupted walls. Standard project pages use four narrative sections, follow-up copy between media groups, six raster placeholders, horizontal full-bleed fields, and equal inset pairs.

## 0020 - Treat Orbs As One Study In A Broader Creative-Direction Experiment

Date: 2026-08-13

Status: Superseded by 0021

Decision: Replace the planned standalone Orbs case study with a living experiment page about directing image models and coding agents through visual work. Use Orbs as the anchor process study, consider the Little Plains watercolor controls and launch-ready editorial illustrations as supporting studies, and keep the page under Experiments rather than creating a third top-level portfolio category. Choose the final title after the focused interview. Handle visual-asset selection and production in a separate round after the narrative is structurally approved.

Rationale: Rusty's real subject is a repeatable creative practice spanning references, critique, iteration, generation, deterministic manipulation, compositing, motion, and production. A single-artifact Orbs page would understate that practice, while an “image-generation portfolio” would overemphasize finished outputs and obscure his direction and judgment.

## 0021 - Make The Fifth Story An Open Visual Collection

Date: 2026-08-13

Status: Accepted

Decision: Treat the fifth featured experiment as a balanced, image-led but editorially substantial, growing collection of unrelated things Rusty has made by working conversationally with AI agents and image-generation systems. Do not force a shared visual language, repeatable art-direction framework, or standalone case-study structure onto each entry. Give the strongest entries enough context to preserve what makes them distinct—for example, the Little Plains watercolors reached production, while Orbs documents a much deeper agent-driven exploration. Use Orbs, the watercolors, and other ready work as independent examples; link to detailed source archives where they already exist. Use the exact approved title **Creating Visuals with Agents**, and handle asset selection in a separate later round.

Rationale: Rusty's central discovery is that reasoning models are unusually capable operators of image-generation and production tools: they can turn a brief into coordinated parallel prompts, evaluate the field, correct their instructions, and continue into manipulation, compositing, motion, and usable assets. The works themselves do not need to be aesthetically or functionally related. Over-defining the collection removes its play and surprise, while under-explaining it loses the substantive work and outcomes Rusty wants represented.

## 0022 - Let Each Featured Page Own Its Narrative In MDX

Date: 2026-08-13

Status: Accepted

Decision: Store the complete public narratives and ordered media placements for all three featured projects and both featured experiments in their own MDX files. Render both content types through the shared case-study shell and a small set of reusable fact and figure components. Use the existing flat-gray PNG library for every media placement during this content pass; replace those files with selected, rights-reviewed assets in a separate pass.

Rationale: The prior shared viewer hard-coded generic prose and made the five stories structurally interchangeable. Page-owned MDX keeps each editorial arc legible and maintainable while preserving a consistent responsive presentation and static export. Separating narrative integration from asset selection lets the complete site be reviewed now without inventing, generating, or prematurely clearing visuals.
