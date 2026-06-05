# PLANS.md

Use execution plans for work that is complex, risky, multi-step, cross-cutting, or likely to span more than one session.

Plans live in `docs/plans/` and should be named with the date plus a short slug, for example `docs/plans/2026-06-05-site-framework-selection.md`.

## When To Create A Plan

Create or update a plan when:

- The task affects multiple future app areas, such as content, design system, routing, build tooling, deployment, analytics, and browser verification.
- The task involves product, design, framework, hosting, or content-model tradeoffs.
- The task may take multiple sessions.
- The task needs careful validation or rollback notes.
- The user asks for a plan before implementation.

Small docs updates, typo fixes, and narrowly scoped edits usually do not need a new plan.

## Required Sections

Each plan must be self-contained and include these sections:

- `Purpose / Big Picture`
- `Progress`
- `Surprises & Discoveries`
- `Decision Log`
- `Outcomes & Retrospective`
- `Context and Orientation`
- `Plan of Work`
- `Concrete Steps`
- `Validation and Acceptance`
- `Idempotence and Recovery`
- `Artifacts and Notes`
- `Interfaces and Dependencies`

## Plan Rules

- Write plans so a future agent or human can continue without reading the whole thread.
- Use prose for orientation and reasoning. Use checkboxes only in `Progress`.
- Keep `Progress` updated with timestamps at every stopping point.
- Record decisions with rationale and date.
- Include exact commands and working directories once commands exist.
- Phrase acceptance as observable behavior.
- If the app is still unscaffolded, say so clearly instead of inventing files or commands.
- Prefer additive, reversible steps.
- Update the plan whenever implementation diverges from it.
- Keep the active Codex task list aligned with the plan during execution.

## Starter Template

```markdown
# <Short, action-oriented title>

This ExecPlan is a living document. Keep `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose / Big Picture

Explain what the user gains after this change and how they can see it working.

## Progress

- [ ] (YYYY-MM-DD HH:MM TZ) Initial step.

## Surprises & Discoveries

- Observation:
  Evidence:

## Decision Log

- Decision:
  Rationale:
  Date/Author:

## Outcomes & Retrospective

Summarize outcomes, gaps, and lessons learned at major milestones or completion.

## Context and Orientation

Describe the relevant repository state, files, concepts, and assumptions.

## Plan of Work

Describe the sequence of edits and why they are ordered this way.

## Concrete Steps

List exact commands and working directories once they exist.

## Validation and Acceptance

Describe tests, checks, browser verification, manual review, and expected observations.

## Idempotence and Recovery

Explain what can be rerun safely and how to recover from partial work.

## Artifacts and Notes

Capture concise evidence, transcripts, snippets, URLs, screenshots, or links that prove progress.

## Interfaces and Dependencies

Name new interfaces, external services, libraries, and configuration the plan depends on.
```
