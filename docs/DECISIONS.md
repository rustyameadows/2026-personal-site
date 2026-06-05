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

Status: Accepted

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
