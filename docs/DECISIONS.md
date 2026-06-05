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
