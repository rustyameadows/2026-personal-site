# Explore Art experiment case-study notes

Status: Repository and live-product reconnaissance plus the full experiment interview are complete. First full draft in progress.

These are working editorial notes for Rusty Meadows's Explore Art experiment case study. The final story should explain the experiment and what Rusty learned, not read as a feature inventory or imply institutional outcomes the product has not earned.

## Rusty's personal origin

Explore Art sits at the intersection of two long-running parts of Rusty's background: art history and software experiments in discovery.

Rusty earned his degree in art history and originally expected or hoped to work in museums. He worked in a museum for four years during college, but ultimately did not feel at home in the museum world as a profession. The exact source of that mismatch—and whether it belongs in the published case study—still needs clarification.

While there, Rusty curated his own Andy Warhol exhibition. It included loans from MoMA and other institutions, previously unseen works, and speakers from around the world. Participants included people who knew Warhol and people connected directly to his working methods, including someone who taught him silkscreening. Confirm the museum, exhibition title, dates, exact loan language, speaker identities, and publication permissions before using specifics publicly.

After moving to New York, Rusty built an earlier product called Discover Art, focused on helping people find exhibitions happening across New York museums. He describes having made versions of this application “a hundred times”—repeated attempts to use software to make art and cultural discovery easier.

Explore Art is therefore not art chosen as a convenient corpus for a new technical demonstration. It is a culmination: Rusty had been experimenting with analysis and vector embeddings and wanted to “blow it out at an art-world scale,” revisiting a persistent personal ambition with technology finally capable of searching meaning, appearance, visual details, and relationships across institutional collections.

Rusty does not want the personal museum history to dominate the case study. Use the degree, museum work, Warhol exhibition, and Discover Art only as a concise entry point establishing that this is a persistent subject rather than a convenient technical dataset.

## The day-one experiment

Explore Art began in a conceptual conversation with ChatGPT Pro, before Rusty opened the repository.

Rusty had built several products using Google Gemini embeddings and had noticed that he repeatedly cached the resulting vectors. A given model's embedding for a fixed phrase does not need to be purchased and computed anew by every small project. His initial idea was therefore an open embedding corpus for visual culture: perhaps the ten thousand most useful phrases around art and design, organized partly around systems such as the Art Genome, which other builders could download and use.

The corpus might also contain canonical artwork embeddings. Rather than every developer finding an image of the Mona Lisa, checking the asset, and embedding it independently, the project could provide a reusable reference vector for comparing another archive against that work.

This was initially closer to public infrastructure than a consumer product: a portable multimodal vocabulary and reference library for visual applications.

## Why the thesis changed

As Rusty worked through the idea, the standalone corpus became less compelling. He could increasingly imagine fewer people consuming raw vectors directly, because their usefulness depends on the product and systems surrounding them: compatible representations, source evidence, rights, ingestion, metadata, ranking, filters, evaluation, and an interface that turns mathematical proximity into meaningful exploration.

The experiment shifted from **publishing a reusable embedding corpus** to **building the best experience Rusty could make with that corpus**.

This was not his first production use of the pattern. Rusty had already combined embeddings with model analysis in:

- a personal visual swipe database;
- a trip-planning application;
- the Little Plains visual-retrieval system and website;
- earlier color-search research for the swipe database.

Explore Art became the opportunity to apply those accumulated methods at art-world scale rather than invent each technical ingredient from nothing.

Refined thesis formulation:

> The experiment began with the idea that embeddings could be shared. It became an investigation into everything a shared vector cannot supply: trustworthy source material, representations, rights, taxonomy, exact constraints, color evidence, continuous ingestion, interface, and a reason for a person to keep looking.

## Beyond the usual art-and-vector demo

Rusty is aware that art collections and vector search have often been paired. The visual material is rich and the technical demonstration is intuitive. What he has not found is an institution applying the idea convincingly across its complete public product.

The recurring pattern is a temporary collaboration or model launch: a design team selects hundreds or perhaps a thousand works, creates an impressive prototype showing what embeddings could do, and stops. The experiment remains separate from the institution's real catalog, search, rights, ingestion, and website.

From the beginning, Rusty wanted Explore Art to avoid that ceiling. If the system works for hundreds of artworks, reaching a million should primarily require sufficient operational resources—not a product or data-model rewrite. That requirement explains otherwise disproportionate early investment in continuously growing intake, publication gates, representation identity, multi-source normalization, deterministic filters, and rebuildable vector infrastructure.

The current catalog is intentionally distributed across approximately seven or eight sources rather than filled with roughly 700 convenient works from a single provider. The precise live counts need confirmation before publication, but the strategic point is stable: heterogeneity is part of the experiment. The system is testing large and small museums, art institutions and public archives, different metadata conventions, distinct rights statements, two-dimensional works, objects, and historical material from the beginning.

Possible case-study contrast:

> A demo asks whether semantic art search can work. Explore Art asks what it would take for it to keep working when the demo ends.

## Rights as a foundation, not cleanup

Rusty wanted the entire project to remain above board so that rights problems could not later invalidate the corpus or the product built upon it. This instinct is personal and practical. His Warhol scholarship taught him how difficult and expensive it can be to clear modern works; he did not want to discover after building the experience that its underlying images could not be used.

The current system is intentionally a “baby version” in image resolution and breadth. Establishing clear source and rights evidence now creates a path toward using much higher-resolution representations later. The order matters: verify that a work and representation can be included, preserve the evidence, then increase fidelity without reopening the legitimacy of the entire corpus.

The strict distinction among an artwork, a particular representation, its source, and its rights is therefore not merely defensive engineering. It is what lets visual discovery, crop search, palettes, deep zoom, and future segmentation become more ambitious without making the foundation less trustworthy.

## Scale and build period

Rusty accepts approximately thirteen days as a fair description of the concentrated implementation period, with the qualification that he thought through the premise extensively and spent perhaps several days exploring it conversationally with ChatGPT before beginning the repository build.

The final case study should not create a false “idea on Monday, finished product two weeks later” myth. Better language: a long-running art-discovery interest and several prior embedding products converged into roughly two weeks of concentrated implementation after several days of conceptual exploration.

## Authorship and AI-native process

Rusty alone originated, designed, and built Explore Art. There were no human collaborators on product direction, research, interface, code, data work, or deployment.

The AI collaboration had distinct roles:

- ChatGPT Pro served as the early conceptual thought partner through the open-corpus premise and initial product reasoning.
- Codex was the primary implementation collaborator across the Rails product, ingestion and retrieval systems, interface, testing, operations, and deployment.
- Gemini supplies the multimodal embedding space used for retrieval.
- GPT and other model-backed systems perform structured visual analysis and support Ask Art.

The final case study should neither imply that Rusty manually wrote every line unaided nor collapse authorship into “AI built it.” Rusty established the thesis, made product and design judgments, selected directions, supplied constraints, reviewed results, and owned the complete system. Models and agents expanded how much of that intent could be implemented and tested in the concentrated build period.

### The remote deployment

One process scene makes the agentic collaboration concrete. Rusty wanted a public link he could send to a friend, but he had to leave town for three days. He kept his computer powered, authorized Codex with scoped access to his Render account, supplied an explicit budget, enabled computer use, and defined the deployment outcome.

Over roughly an hour, Codex deployed the application and migrated the entire corpus from the local development machine into a hosted PostgreSQL database. This was not a one-click source connection: the product's accumulated data and infrastructure had to move into a real remote environment. Rusty monitored progress through periodic remote check-ins while traveling.

The value of the scene is not “unattended AI magic.” It demonstrates bounded delegation of a complicated operational outcome: clear authority, budget, target, monitored execution, and a working public result. Do not mention or expose credentials, secrets, or unsafe phone use while driving.

Rusty considers building with the agent a meaningful and enjoyable part of the experiment, though the public art-search product remains the subject. Treat the process as one substantive section or sidebar rather than the headline.

## What success would mean

The experiment succeeds if it becomes a site people genuinely use—not only art historians or designers, but ordinary curious people.

Rusty does not necessarily imagine the final expression as only a search interface. The system could produce:

- an art screensaver or ambient discovery experience;
- a playful history-of-art maker;
- an art-powered version of the Eameses' *Powers of Ten*, navigated through visual or natural-language relationships;
- thematic visual histories such as the history of cerulean across artworks and periods;
- other experiences made possible by a rights-aware, searchable, high-resolution visual corpus.

The platform beneath the current interface may be more durable than any one surface. Avoid pretending there is already proven adoption; the ambition is to build an instrument people want to return to and then discover which expressions of it are most alive.

## Everything is V0

Rusty does not regard the current product as finished or even broadly “good” yet, despite liking some of its results. Nearly every visible system is a first version:

- Palette extraction can improve substantially.
- The Art Genome integration was one idea Rusty implemented and then moved beyond. He is unsure whether its current prominence or taxonomy will survive, or whether its tags describe the kinds of relationships he ultimately wants people exploring.
- The catalog currently includes many objects and historical artifacts. Rusty enjoys that breadth but is still considering whether tighter emphasis on visual, two-dimensional, and canvas-based work would produce cleaner discovery.
- In the other direction, he is excited to extend beyond museums into the Library of Congress, National Parks archives, and other public visual corpora.
- Region selection is an early step toward more ambitious segmentation and detail-level exploration.
- Ask Art is already unusually compelling to Rusty but has almost no specialist prompt guidance yet. He wants to develop its art-historical behavior, research pathways, comparisons, and relationship to the rest of the product much further.

The honest ending is not “the system is complete.” It is that building a complete-enough first instrument revealed a much larger design space than the original vector-corpus concept.

## Most memorable interactions

Rusty's strongest interactions are:

1. **Natural-language discovery.** Searching art using an ordinary description remains the essential demonstration of the corpus becoming legible beyond titles and metadata.
2. **Palette-to-palette discovery.** Generated palettes become active search evidence. Clicking a saved red or blue produces results carrying visibly related color chips; the exact shared shade across otherwise unrelated works can feel magical.
3. **Selecting inside an artwork.** A person can choose a particular region and search or ask from that detail. Rusty expects future segmentation work to extend this substantially.
4. **Ask Art.** Art history is unusually rich, static, and well documented, making the agent already powerful for questions about an artist, one work, its period, or comparisons across works. Rusty considers the current agent excellent even before adding expert guidance and more deliberate tools.

Do not force the final page to choose exactly three if four interactions support distinct lessons. Natural language and color show corpus-wide discovery; region selection changes the unit of inquiry; Ask Art turns the corpus into explanation and comparison.

Rusty does not currently name one canonical query or result. Color discovery is the clearest recurring delight: clicking a palette swatch and seeing otherwise unrelated works return with visibly the same precise blue or red. He has saved screenshots in homepage and older archive folders that can be reviewed during the visual-production pass. Do not invent a “perfect query” for the prose before those artifacts are reviewed.

## Headline direction

Rusty rejected “The vectors were the least interesting part” as the headline. It overemphasizes the discarded premise and centers what matters least instead of the product he made. The pivot can remain a narrative beat, but the headline must name the art-search product and its most interesting capability.

Current preferred working headline:

> Building a search engine for looking at art

Other viable direct formulations, if needed during design:

- Search art by meaning, color, and detail
- Building a better way to explore art
- An art search engine for curious people

## Palette research

Rusty's answer does not elevate the active palette-algorithm research into the central story. He agrees that palette work remains unresolved and needs improvement, but the public-facing magic of clicking a saved color and seeing precise related shades is more important to him than presenting the current method study as a headline.

Use the “no winner yet” research only if it helps demonstrate honest iteration and restraint in a short process aside. Do not let a follow-on algorithm bake-off displace the broader experiment.

## Provisional personal thesis

> Rusty studied art history and spent years around museums, but the desire to help people find, understand, and look closely at art outlasted his desire to work inside one. After years of smaller discovery products, multimodal embeddings made a more ambitious version possible: one instrument for moving through art by language, appearance, color, taxonomy, and the details inside an image.

Possible supporting formulation:

> Explore Art is the latest version of a product Rusty has kept remaking as the available technology changes. This time the experiment was not merely to list what was on view. It was to find out whether a machine could help someone look.

## Source-grounded product

Primary sources:

- Live product: `https://explore-art.com/`
- Core repository: `/Users/rustymeadows/Dev/art-explorer`
- Current public/homepage branch and brand work: `/Users/rustymeadows/Dev/art-explorer-home-horizontal-gallery`
- Key documents: `README.md`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/DATA_AND_VECTORS.md`, `docs/EVALUATION.md`, and architecture decisions under `docs/decisions/`.

Explore Art is a Rails/Hotwire visual-discovery system over a continuously growing live catalog aggregated from museum and public-cultural sources. PostgreSQL remains the canonical source of truth; Qdrant serves compatible vector retrieval.

Current public experiences observed on 2026-08-13 include:

- natural-language search over meaning, appearance, composition, palette, subject, material, atmosphere, period, and movement;
- structured filters for medium, subject, look and feel, color, artist, institution, date, geography, Art Genome terms, and Boolean relationships;
- an image-first masonry homepage and result grid;
- artwork pages with deep zoom, source and rights information, color evidence, Art Genome tags, visually similar works, period and artist routes;
- region selection for searching or asking about a chosen visual detail;
- a public color language and structured perceptual-color search;
- an Art Genome index and exact checked-taxonomy navigation;
- route-persistent Ask Art grounded in the current artwork or result context;
- light/dark presentation and responsive behavior.

The current live homepage exposes five or more institutional/source families in visible results, including the Metropolitan Museum of Art, Cleveland Museum of Art, Art Institute of Chicago, National Portrait Gallery/Smithsonian, National Gallery of Art, Rijksmuseum, and appropriately attributed Wikimedia-hosted material. Registered provider adapters and the exact currently live source mix should be confirmed from production state before the final draft states a count.

## Strongest product idea from repository evidence

The strongest source-backed framing is “a tool for looking, not another museum index.” The project began around portable multimodal embeddings but became a much more complete discovery instrument as real use exposed everything embeddings alone could not solve:

- rights and provenance;
- the distinction between an artwork and a particular representation of it;
- continuously growing live intake rather than a frozen demo dataset;
- exact structured constraints that vectors must not override;
- region-level search and questions;
- art-historical taxonomy through the Art Genome;
- deterministic color extraction and an original 170-name color language;
- grounded explanation and Ask Art;
- evaluation, conservative publication gates, and source-visible trust.

The compelling tension is exploratory delight backed by unusually conservative integrity. Empty exact intersections remain empty. Vector similarity may rank evidence but does not decide factual membership. Every live artwork requires verified image, vector, and checked-analysis evidence.

## Chronology visible in Git

Initial reconnaissance found approximately thirteen days of concentrated public-product development from July 30 through August 11, 2026, with more than fifty commits across relevant branches. Confirm Rusty's intended experiment start/end dates and whether earlier uncommitted or adjacent work belongs to the timeline.

Strong milestones include:

- initial product direction and portable multimodal-vector premise;
- vector calibration and evaluation work;
- multi-source gallery and continuous ingestion;
- Ask Art;
- crop/region selection and search;
- checked Art Genome taxonomy;
- deterministic artwork palettes;
- original public color language;
- editorial routes and deterministic Boolean search;
- production hardening;
- ongoing homepage/gallery refinement after the core launch.

Do not convert commit volume into an outcome. It is evidence of speed and scope only after Rusty explains the human/AI working process and what counted as the experiment.

## Palette research as process evidence

A separate working branch documents a reproducible study of color-palette extraction methods across a selected artwork set. The earlier round explicitly concluded “no winner yet.” The branch now contains additional uncommitted research rounds and should be treated as active work rather than a finished claim.

This is potentially excellent evidence of the experiment's mindset: building comparison tools, resisting a convenient answer, and allowing “we do not know yet” to be the result. Confirm whether Rusty sees it as part of the main Explore Art story or a follow-on experiment within the experiment.

## Strong existing visuals

- Current homepage: `/Users/rustymeadows/Dev/art-explorer-home-horizontal-gallery/output/playwright/homepage-desktop-final.png` and related mobile capture.
- Region selection: `/Users/rustymeadows/Dev/art-explorer/output/playwright/detail-canvas-selection-final.png`.
- Region result rail: `/Users/rustymeadows/Dev/art-explorer/output/playwright/select-search-rail-desktop-final.png`.
- Ask Art: `/Users/rustymeadows/Dev/art-explorer/output/playwright/live-chat-viewport-context.png`.
- Art Genome taxonomy: `/Users/rustymeadows/Dev/art-explorer/output/playwright/art-genome-taxonomy-desktop.png`.
- Palette study: `/Users/rustymeadows/Dev/art-explorer/output/playwright/color-research-round-01-comparison.png`.
- Brand exploration: `/Users/rustymeadows/Dev/art-explorer-home-horizontal-gallery/brand/explore-art/proofs/packet-contact-sheet.png`.
- Later identity/motion work: `/Users/rustymeadows/Dev/art-explorer-home-horizontal-gallery/brand/explore-art/round-02-open-set/proofs/packet-contact-sheet.png` and motion artifacts under that round.

Most output screenshots are ignored working artifacts, the homepage branch is dirty and behind its remote, and brand documentation warns that embedded reference imagery may lack durable per-artwork rights records. The final case study should recapture current screens using verified public-domain or explicitly reusable works and should retain source/rights notes for every artwork shown.

## Interview gaps

The substantive product interview is complete. The first draft can proceed without additional questions. Remaining non-blocking verification items:

- Exact public catalog/source counts only if numbers improve the final edit.
- Whether the current live site has meaningful use beyond Rusty yet. Absence of adoption does not block an experiment case study.
- Whether the museum, Warhol exhibition, and Discover Art should be named or remain a compact personal preface. Rusty has already said the museum history should be only an entry point.
- The location and rights status of Rusty's saved color-search screenshots.

## Publication cautions

- Treat this as an experiment unless Rusty explicitly wants a different category.
- Do not imply institutional partnership merely because the product consumes public museum data.
- Do not claim museum-grade authority or completeness.
- Do not turn repository scope, commit count, test count, or catalog size into adoption or impact.
- Distinguish works from their image representations and keep source/rights information attached to visuals.
- Avoid exact provider/model names unless they contribute meaningfully to the experiment's lesson and are dated.
- Use Rusty's own account—not Git authorship—to establish his intent, contribution, and use of coding agents.
