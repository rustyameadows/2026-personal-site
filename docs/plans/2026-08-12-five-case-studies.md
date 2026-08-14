# Write and publish the five featured case studies

This ExecPlan is a living document. Keep `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose / Big Picture

Create final, first-person portfolio content for the three featured projects—Pineapple Productions, Little Plains, and I’ve Seen the Future—and the two featured experiments—Explore Art and **Creating Visuals with Agents**. Orbs is one independent entry within the latter collection rather than the complete subject or an anchor that must explain the other work. Each story should be grounded in Rusty Meadows’s account, corroborated where useful by nearby repositories and live products, and shaped around the work’s real character instead of a forced case-study formula. The finished pages should be primarily text with a deliberate edit of screenshots, motion, process artifacts, diagrams, and other visual evidence.

The work is complete when Rusty has approved all five narratives and their disclosure boundaries, each page owns its narrative and media in repo-backed content, the site no longer renders generic placeholder prose for these five entries, final assets have provenance and useful alt text or captions, automated checks pass, and every page has been inspected in the Codex in-app browser at desktop and mobile widths.

## Progress

- [x] (2026-08-12 16:09 PDT) Inspected the personal-site content model, current featured-project and experiment routes, durable documentation, and uncommitted working state.
- [x] (2026-08-12 16:09 PDT) Completed initial read-only reconnaissance of Pineapple Portal, the Little Plains Content Pipeline and website, Explore Art, the live I’ve Seen the Future site, and the live/public Orbs experiment record.
- [x] (2026-08-12) Interviewed Rusty about Pineapple Productions in one broad round and one targeted follow-up; captured the thesis, role, outcomes, disclosure posture, and preliminary visual evidence in `docs/case-study-notes/pineapple-productions.md`.
- [x] (2026-08-12) Drafted and received Rusty's editorial approval for the Pineapple Productions case study in `docs/case-study-drafts/pineapple-productions.md`; implementation remains for the shared publishing pass.
- [x] (2026-08-13) Reviewed the Little Plains collective source article and nearby repositories, completed the personal-contribution interview, wrote the full draft in `docs/case-study-drafts/little-plains.md`, and received Rusty's editorial approval. Publishing remains for the shared content-integration pass.
- [x] (2026-08-13) Completed the I’ve Seen the Future / Interpolations source review and interview, wrote the full draft in `docs/case-study-drafts/ive-seen-the-future.md`, and received Rusty's editorial approval. The story treats Interpolations as the first public activation and excludes the ISTF Lab. Publishing remains for the shared content-integration pass.
- [ ] Repeat the interview and approval loop for Explore Art. Fresh live-product and repository reconnaissance and the full experiment interview are complete, and the first full draft is written in `docs/case-study-drafts/explore-art.md`; Rusty's review and approval remain.
- [x] (2026-08-13) Completed the Creating Visuals with Agents interview and first full draft. Visual-asset work will follow in a separate round.
- [ ] Refactor the case-study content boundary so real narrative and media live with the MDX content rather than in generic viewer placeholders.
- [ ] Add the five approved narratives and selected local assets, with captions, alt text, provenance, and external links where appropriate.
- [ ] Run lint, typecheck, and static-export build; verify all five pages at desktop and mobile widths in the Codex in-app browser.
- [ ] Update status, brief, decisions, backlog, and this plan to reflect the delivered content system and remaining follow-ups.

## Surprises & Discoveries

- Observation: The public edit already matches the requested inventory: three projects and two experiments.
  Evidence: `src/lib/content.ts` exposes the first three featured projects as `visibleProjects` and separately registers Explore Art and Orbs as experiments.

- Observation: Project MDX files currently contain metadata only; generic narrative and media placeholders are hard-coded in the shared viewer.
  Evidence: `content/projects/*.mdx` exports metadata while `src/components/ProjectViewer.tsx` owns `sharedProjectDrafts`, `expandedProjectDrafts`, and raster placeholders.

- Observation: The experiment routes are metadata-driven temporary landers rather than MDX case studies.
  Evidence: `src/app/experiments/[slug]/page.tsx` renders a shared “in progress” message from `ExperimentMeta`.

- Observation: The nearby repositories contain enough evidence to reduce interview burden, but they cannot establish personal intent, authorship, business outcomes, or public-disclosure permission.
  Evidence: Pineapple Portal documents a canonical event plan with tailored planner/client/publishing outputs; Little Plains documents a placement-level visual corpus plus reviewed knowledge; Explore Art documents a rights-aware multimodal discovery system; Orbs publishes a twelve-round experimental record.

- Observation: The existing personal-site metadata incorrectly describes I’ve Seen the Future as a working creative-AI lab.
  Evidence: Rusty clarified on 2026-08-13 that the case study covers I’ve Seen the Future as his umbrella brand and Interpolations as its first public activation. The ISTF Lab is not part of this story and must not inform the narrative or final media.

- Observation: The current working tree contains substantial uncommitted site changes made before this plan.
  Evidence: `git status --short --branch` showed modified project content, viewer, styles, site docs, and untracked experiment/public files. All future work must preserve and build on those changes without broad rewrites.

- Observation: Orbs is not the real boundary of the second experiment, and the broader collection does not need a shared visual or project logic.
  Evidence: Rusty described unrelated work spanning Orbs, Little Plains watercolor controls, current editorial illustrations, an earlier synthetic modeling-agency project, and future visual studies. The only required connection is that he made the work conversationally with agents. The substantive larger story is his surprise at how well reasoning models operate image-generation and production tools.

## Decision Log

- Decision: Work one story at a time in the order Pineapple Productions, Little Plains, I’ve Seen the Future, Explore Art, then Orbs.
  Rationale: Pineapple offers the clearest bounded operational story and is a good calibration exercise; Little Plains is the most cross-cutting project; I’ve Seen the Future needs owner context before synthesis; the experiments can then use a more process-forward format without delaying the principal work.
  Date/Author: 2026-08-12 / Codex, pending Rusty’s correction.

- Decision: Use repository and live-product evidence to ask better questions, not to manufacture Rusty’s motives or outcomes.
  Rationale: Code can establish functionality and chronology but not personal meaning, contribution boundaries, user impact, or permission to disclose.
  Date/Author: 2026-08-12 / Codex.

- Decision: Let form follow each story while using a shared editorial backbone.
  Rationale: Every page needs a clear premise, Rusty’s role, consequential decisions, evidence, and an honest ending, but projects and experiments should not be flattened into identical Problem/Process/Result templates.
  Date/Author: 2026-08-12 / Codex.

- Decision: Separate drafting from publishing.
  Rationale: Rusty should be able to approve language and disclosure before implementation details or asset production make revision expensive.
  Date/Author: 2026-08-12 / Codex.

- Decision: Treat I’ve Seen the Future as the enduring personal platform and Interpolations as its first executed activation; exclude the ISTF Lab completely.
  Rationale: This is the relationship Rusty explicitly supplied. It keeps the case study centered on the lifelong motivation, brand, and public conference rather than an unrelated software surface.
  Date/Author: 2026-08-13 / Rusty Meadows.

- Decision: Replace the single Orbs case study with the growing visual collection **Creating Visuals with Agents**. Keep every entry independent, avoid miniature case-study analysis, and use the opening essay to explain Rusty's fascination with reasoning agents as operators of image generation and production tools.
  Rationale: Rusty wants the page to communicate the fun and improbable breadth of what he has made, not impose one art-direction methodology or visual system on unrelated work. Assets will be handled in a separate round.
  Date/Author: 2026-08-13 / Rusty Meadows and Codex.

## Outcomes & Retrospective

The Pineapple Productions, Little Plains, and I’ve Seen the Future case studies have all been interviewed, drafted, and editorially approved. Explore Art's interview and first full draft are complete. Creating Visuals with Agents also has its first full draft. None is published yet. Update this section after every approved story and at final delivery.

## Context and Orientation

The site is a static-exported Next.js App Router application. Featured project metadata lives in `content/projects/*.mdx`; project registration lives in `src/lib/content.ts`; the current shared page implementation lives in `src/components/ProjectViewer.tsx`; experiments use `src/app/experiments/[slug]/page.tsx`; styling lives in `src/app/globals.css`; local project media lives under `public/projects/`.

The five stories and primary grounding sources are:

- Pineapple Productions: `/Users/rustymeadows/Dev/pineapple-portal` plus the older `/Users/rustymeadows/Dev/pineapple` site.
- Little Plains: `/Users/rustymeadows/Dev/lp-content-pipeline` and `/Users/rustymeadows/Dev/lp-website-vibe`.
- I’ve Seen the Future: `https://iveseenthefuture.com`, `/Users/rustymeadows/Dev/interpolations`, and relevant umbrella-brand artifacts under `/Users/rustymeadows/Dev/future`. Do not use `/Users/rustymeadows/Dev/istf-lab`.
- Explore Art: `https://explore-art.com` and `/Users/rustymeadows/Dev/art-explorer` / `/Users/rustymeadows/Dev/art-explorer-home-horizontal-gallery`.
- Creating Visuals with Agents: Orbs at `https://orb.rustymeadows.com` and `/Users/rustymeadows/Dev/Orb`; Little Plains watercolor and editorial-image work in `/Users/rustymeadows/Dev/lp-website-vibe`; additional independent study locations to be confirmed.

For each story, maintain three distinct kinds of material: verified facts from sources; first-person interpretation and outcomes supplied or approved by Rusty; and editorial language drafted by Codex. Do not convert repository scope metrics into claims of user or business impact.

## Plan of Work

Begin each case study with a compact source brief that identifies a promising thesis, known facts, uncertain claims, privacy or attribution risks, and a visual shortlist. Ask Rusty five to seven broad questions in one batch. Questions should cover the trigger, Rusty’s actual role, the pivotal constraint or decision, the work’s distinguishing idea, evidence of change, what did not work, and what may be said or shown publicly.

After Rusty answers, return a short editorial synthesis: the proposed thesis, narrative arc, fact/claim corrections, and remaining gaps. Ask at most three to five follow-up questions only when they materially affect the story. Then write the complete web draft in Rusty’s voice, including metadata, section copy, captions or callouts, suggested visual placements, and credits. Revise until Rusty explicitly approves the narrative and disclosure boundaries before moving to the next story.

Once the five drafts are stable—or earlier if one approved page is useful as an implementation pilot—move narrative ownership out of `ProjectViewer.tsx`. Add small repo-native MDX components only for recurring semantic needs such as fact rows, figures, paired media, video, pull quotes, and diagrams. Preserve variable page length and ordering. Use the same content pathway for experiments rather than maintaining a separate temporary metadata-only template.

Copy or generate only the approved visual edit. Prefer sanitized, purpose-built screenshots over operational data, especially for Pineapple Portal. Prefer confirmed public-domain artworks for Explore Art. Preserve source notes under `public/projects/` or an equivalent asset manifest. Optimize media for static delivery and include meaningful alt text, captions, and motion fallbacks.

## Concrete Steps

All implementation commands run from `/Users/rustymeadows/Dev/2026-personal-site`.

1. Interview and draft one story at a time in the agreed order.
2. Record approved copy in the corresponding MDX content file or a clearly linked drafting artifact until the MDX renderer is ready.
3. Refactor the viewer and experiment route with focused `apply_patch` edits after checking the latest working-tree diff.
4. Add approved assets under project- or experiment-specific folders in `public/` and update source/provenance notes.
5. Run `npm run lint`, `npm run typecheck`, and `npm run build`.
6. Run the local site, then inspect all five routes in the Codex in-app browser at a representative desktop width and at 390px mobile width. Exercise navigation, external links, media playback or fallbacks, and contact/overlay interactions affected by the refactor.
7. Update repo status and this plan with the final content inventory, verification evidence, and residual risks.

## Validation and Acceptance

Editorial acceptance requires Rusty to recognize each story as accurate, personally attributable, appropriately candid, and free of invented outcomes. Every substantial factual claim must be traceable to a source or explicitly confirmed by Rusty. Draft labels and placeholder language must be absent from the five public pages.

Visual acceptance requires each selected image or clip to do editorial work: show an outcome, decision, contrast, system, interaction, or meaningful process step. Assets must be legible at their rendered size, avoid private information, have documented provenance, and use alt text or captions appropriate to their purpose.

Technical acceptance requires successful lint, typecheck, and static-export build. Browser acceptance requires the five routes to render without visible breakage on desktop and mobile, preserve usable reading measure and hierarchy, load local media correctly, support keyboard navigation, respect reduced-motion behavior where relevant, and keep all public navigation functional.

## Idempotence and Recovery

Interviews and drafts are additive and can be repeated without changing the application. Before every implementation session, re-read `git status --short --branch` and the relevant diff because the starting tree is intentionally dirty. Keep edits localized; never discard unrelated work. Add assets under unique case-study folders and source manifests so copies can be replaced without changing unrelated pages. If the content refactor is interrupted, keep the existing renderer working until one page has been fully migrated and verified; then migrate the remaining pages incrementally.

## Artifacts and Notes

Initial working theses, subject to Rusty’s correction:

- Pineapple Productions: Pineapple outgrew a planning process assembled from Google Sheets and hand-designed PDF packets; what began as a website refresh and client portal became a bespoke operating system built around the exact way the company plans, communicates, and delivers complex events. “One plan, many outputs” is supporting product logic rather than the headline.
- Little Plains: a studio website with memory and eyes—reviewed knowledge plus a searchable visual corpus.
- I’ve Seen the Future: a personal platform for making consequential ideas about technology and the future understandable and worth gathering around; Interpolations was its first public activation, a 2025 design-and-AI conference in New York.
- Explore Art: a tool for looking, not another museum index; exploratory discovery backed by conservative provenance and deterministic truth.
- Creating Visuals with Agents: a growing shelf of unrelated visual experiments made conversationally with reasoning agents and image-generation systems. The larger essay is about how effectively agents can plan, prompt, evaluate, correct, manipulate, composite, and animate; individual pieces do not need to share a style, use, or process narrative, but the strongest entries should retain meaningful context and receive at least equal visual emphasis.

Primary privacy and attribution cautions: Pineapple screens must use sanitized demo data; Little Plains contribution boundaries require confirmation; I’ve Seen the Future’s entities and collaborators require accurate scoping; Explore Art imagery requires rights-aware selection; Creating Visuals with Agents must identify reference provenance and credit external motion or visual references where used without turning the page into a defensive authorship treatise.

## Interfaces and Dependencies

No new external service is expected. The implementation should continue using static Next.js export, local MDX, and local public assets. The likely internal interface is a small set of typed or semantic MDX presentation components consumed by both project and experiment pages. Exact component names and props should be decided only after the first approved narrative establishes real content needs.
