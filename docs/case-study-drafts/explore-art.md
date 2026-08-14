# Explore Art

Draft status: First full draft for Rusty Meadows's review. Not yet approved or published.

## Page metadata

**Experiment:** Explore Art
**Working headline:** Building a search engine for looking at art
**Working summary:** Explore Art lets people search across public art collections by natural language, exact color, visual similarity, selected details, and conversation—while keeping every result connected to its source and rights evidence.
**Role:** Concept, product strategy, interaction and visual design, full-stack engineering, multimodal retrieval, data and ingestion architecture, evaluation, research, and deployment
**Timeline:** Approximately two weeks of concentrated initial development, ongoing
**Status:** Live V0 experiment

## Building a search engine for looking at art

Explore Art is a search engine for moving through art by what you see, remember, or wonder about.

You can describe an atmosphere in ordinary language. You can begin with an artwork and ask for something visually related. You can click a particular blue in a painting's palette and find the same color in works from other periods and collections. You can select one small region inside an image and search from that detail. When looking turns into a question, you can ask about the work, its artist, its context, or its relationship to something else.

The current site is a first version, but the subject is not new for me. I studied art history, worked in a museum for four years, and once curated a Warhol exhibition with institutional loans, previously unseen material, and speakers connected directly to his life and methods. After moving to New York, I built an earlier product called Discover Art to help people find exhibitions across the city's museums.

I did not ultimately want a career inside museums. I did keep returning to the same product: a better way for people to find art and follow their curiosity through it.

Explore Art is the most ambitious version I have made so far.

> **Visual 01 — The product, immediately**
> Begin with a current, rights-cleared search sequence rather than an architecture diagram: type a natural-language query, reveal the image field, and open one unexpected work. Pair a desktop field of images with a close mobile crop so the product reads as a real public experience rather than a research dashboard.

## The open corpus I thought I was building

The project began as something more infrastructural.

I had built several products with multimodal embeddings and noticed that I kept caching the same results. Within a fixed model and embedding space, a phrase does not need to be converted into a vector again every time a small application wants to use it. I began talking through an idea with ChatGPT Pro: what if there were an open corpus of the most useful visual phrases around art and design?

It might include ten thousand concepts—materials, movements, compositions, moods, subjects, and terms related to systems such as the Art Genome. A developer could download those vectors instead of making the same calls again. The corpus could also include canonical artworks. If somebody wanted to compare an archive against the Mona Lisa, they could begin with a known compatible reference rather than locating, verifying, and embedding another copy themselves.

I liked the idea of a shared visual vocabulary. The more I developed it, however, the harder it became to imagine raw vectors being the thing people would actually use.

An embedding is only one ingredient. It does not establish which image represents a work, whether that image may be used, where it came from, how two museums describe the same kind of object, which relationships are facts, how exact constraints should behave, or why a result is worth seeing. It does not make an interface people want to spend time with.

So the experiment changed. Instead of publishing the corpus by itself, I decided to build the best art-discovery experience I could around it.

> **Visual 02 — From corpus to instrument**
> A small diagram can preserve the original idea without making it the headline: shared phrases and artwork references on the left; source intake, rights, representations, analysis, retrieval, and interface accumulating around them; the public search experience on the right. Caption it as a change in thesis, not a technical architecture overview.

## Build the product, not the model demo

Art and vector search are natural companions, so versions of this idea already exist. The ones I encountered tended to stop at the demonstration: a model launches, a design team collaborates with a museum, and a thousand selected works become an impressive proof of what visual similarity could do.

Then the demo ends. The institution's full catalog, real search, source records, rights, ingestion, and public website remain somewhere else.

I wanted to begin on the other side of that boundary. If Explore Art worked for hundreds of artworks, scaling it to a million should demand more resources—not a new product model. That meant treating operational concerns as part of the experiment from the beginning.

The initial catalog is deliberately small and heterogeneous. I could have filled it from one convenient source. Instead, I brought in works from large museums, smaller institutions, portrait and art collections, and public archives with different APIs, metadata, image behavior, and rights language. Every new source exposes assumptions the previous one allowed the product to avoid.

The application continuously moves individual works through source archival, rights review, image processing, embeddings, visual analysis, checking, and publication. PostgreSQL decides what is actually live. The vector index can be rebuilt. One failed artwork remains out without holding back everything that finished correctly.

This is excessive infrastructure for a disposable prototype. It is the minimum useful foundation for an experiment intended to survive its own success.

> **Visual 03 — Designed beyond one collection**
> Show a diverse, rights-cleared field of works from several sources with their institution labels intact. Follow it with a restrained intake diagram showing one artwork moving independently from source to publication. Avoid dashboard totals that will become stale.

## Search by what you mean

Museum search is usually strongest when you already know the title, artist, period, or accession language. Explore Art is designed for the less settled beginning: a half-memory, visual quality, feeling, material, gesture, or comparison.

Natural language supplies that open territory. Embeddings can relate a phrase to appearance and meaning even when the words never occur in the museum record. But open-ended similarity is not allowed to rewrite facts. Artist, institution, date, medium, geography, checked taxonomy, and other recognized constraints remain exact. Boolean relationships remain the relationships the person wrote. An empty intersection stays empty rather than being filled with vaguely plausible substitutes.

That division of labor became one of the core product rules: structured evidence decides what is eligible; semantic similarity helps rank what remains.

The interface keeps both forms of thinking in one sentence. A person can begin conversationally, add an exact artist or color, combine terms, and continue editing without crossing into a separate advanced-search product. The goal is not to make search feel technical. It is to let curiosity become more precise without changing tools.

> **Visual 04 — Language plus evidence**
> Use a query that begins as an evocative phrase and gains one or two visible structured constraints. Show the submitted sentence and resulting artworks together. The example should be selected from Rusty's retained screenshots or recaptured after evaluating result quality; do not invent a perfect query for the case study.

## Color became a way through the collection

Color search is the part that most consistently delights me.

Each suitable artwork receives a deterministic palette extracted from its normalized image. Those saved colors are not decorative swatches. They are retrieval evidence. Click one blue in an artwork and Explore Art finds works carrying perceptually related colors, then shows the matching chips in the results.

The effect can feel improbable. The paintings or objects may have nothing obvious in common, yet the exact dusty blue or saturated red passes through all of them. A tiny piece of one artwork becomes a path across institutions, centuries, subjects, and media.

I also built an original color language so those values could be more expressive than a hex code without sacrificing their precision. The human-facing names help a person navigate; the measured color remains authoritative underneath.

The extraction itself is not solved. I have been comparing palette methods, and some studies have reached the honest conclusion that there is no winner yet. That uncertainty belongs in the work. The public interaction can already be magical while the algorithm behind it remains a V0 worth challenging.

> **Visual 05 — One blue, many works**
> This should be a hero process sequence. Begin on a selected artwork and its palette; activate one distinctive blue; reveal results with their matching color chips visible. Use one of Rusty's saved examples if its image rights are sound. A short loop will communicate the relationship better than separate unlabeled screenshots.

## Change the unit of inquiry

An artwork is not always the smallest thing somebody wants to explore.

On a detail page, you can draw a selection around one region—a face in a crowd, a fragment of pattern, the shape of a hand, a small figure near the horizon—and search from the crop rather than the complete composition. The same selection can become context for a question.

That begins to change the unit of discovery from *the artwork* to *the thing I am looking at inside the artwork*. Future segmentation can take this much further: identified figures, objects, surfaces, backgrounds, gestures, and relationships could all become entrances into the larger corpus.

Ask Art extends the same idea through language. Art history is unusually deep, extensively documented, and relatively stable. Even in its minimally guided current form, the agent can be remarkably useful for moving from “tell me about this” to questions about an artist, period, technique, iconography, or comparison with another work. It receives the current page and stored evidence rather than pretending every conversation begins without context.

I want to make it much more deliberate: stronger art-historical guidance, better research paths, more useful comparisons, and closer integration between explanation and visual discovery. The current version already demonstrates that looking and asking should not be separate products.

> **Visual 06 — Look closer, then ask**
> Use a continuous sequence: select a small region, see detail-based results, then ask a contextual question without losing the work. Pair the interaction with one concise, grounded response rather than a wall of chatbot text.

## Rights before resolution

My art-history background made rights feel like foundation work rather than a cleanup task.

Studying and exhibiting Warhol taught me how difficult modern-art clearance can become. I did not want to build a compelling product and then discover that its underlying corpus made the whole experiment unusable.

Explore Art distinguishes an artwork from the particular image that represents it. It preserves the source, rights statement, attribution, and other evidence for that representation. A work becomes public only when the image and its required analysis are ready. Source and rights remain visible on the artwork page.

The present catalog is a baby version, including its image resolution. Starting from works and representations we can legitimately use gives the product room to become more ambitious: higher-resolution viewing, better crops, segmentation, palettes, and new visual experiences without reopening whether the foundation should exist at all.

Playful exploration depends on conservative truth underneath it.

> **Visual 07 — Trust stays attached**
> Pair the immersive artwork viewer with its expanded Source & rights evidence. If useful, annotate the distinction among work, representation, institution, and image rights. Use only an example with an especially clear reusable record.

## Building with an agent at product scale

I originated, designed, and built Explore Art without human collaborators. ChatGPT Pro was the early conceptual partner. Codex became my primary implementation collaborator across the Rails application, ingestion, retrieval, interface, evaluation, operations, and deployment. Gemini supplies the multimodal embedding space; other model-backed systems analyze the artwork and power Ask Art.

The concentrated first build took roughly two weeks, following several days of conceptual exploration and years of related experiments. The speed matters, but only in context. This was not my first embedding pipeline, art-discovery idea, color system, or product. The agent let accumulated knowledge turn into a much more complete instrument before the idea went cold.

The clearest example came when I wanted to send a working link to a friend just as I had to leave town for three days. Until then, the application and its corpus lived on my computer. I left the machine running, gave Codex scoped access to Render, established a budget and deployment outcome, and enabled the computer access needed to complete it.

Over roughly an hour, the agent deployed the application and migrated the entire local corpus into hosted PostgreSQL. This was not “connect repository and click deploy.” It had to move the data and establish the real remote system. I monitored its progress through periodic check-ins while traveling, and by the end Explore Art had a public address.

That felt like a meaningful change in how software can be made. I was still responsible for the objective, constraints, authority, judgment, and result. But I could delegate a complicated operational outcome and supervise it remotely instead of reducing the task to instructions I personally executed one command at a time.

> **Visual 08 — From local experiment to live product**
> Show a privacy-safe excerpt of the deployment task and progress, a simple local-to-hosted data migration diagram, and the first public URL or message sent to a friend. Never expose credentials, account identifiers, environment values, or operational secrets.

## Everything is V0

Explore Art is live, but I do not consider it finished.

The palettes can improve. The Art Genome was one taxonomy I could implement quickly, not necessarily the permanent organizing system. I am still deciding whether the catalog should favor paintings and two-dimensional visual work for cleaner search or expand further into objects and historical artifacts. I want to add other public visual corpora, including the Library of Congress and National Parks archives. Region selection should grow into segmentation. Ask Art has barely begun to receive the expert guidance it deserves.

Success would not be proving that I can ship a large technical system quickly. It would be making something designers, art historians, and ordinary curious people actually use.

That may ultimately extend beyond a search page. The same foundation could become an ambient art screensaver, a playful history-of-art maker, an Eames-inspired *Powers of Ten* through visual relationships, or a generated history of cerulean across centuries of images. Search is the first complete instrument, not necessarily the final form.

I have made versions of this product for years as the available technology changed. Explore Art is the first one that feels capable of growing from finding what is on view into something more interesting: helping a person notice one thing, follow it somewhere unexpected, and keep looking.

> **Visual 09 — An instrument with room to grow**
> Close on the strongest current field of art, not a speculative feature mockup. A concise margin list can name the open questions—palette, segmentation, corpus breadth, guided histories—while the live product supplies the evidence that this is already more than an idea.

## Editorial cautions before publication

- Keep Rusty's art-history and museum background to a concise entry point. Confirm the museum, Warhol exhibition, loans, and speakers before naming them.
- Describe the concentrated build as approximately two weeks after several days of conceptual work and years of related experiments. Do not create a simplistic overnight-build myth.
- Keep the art-search product—not raw vectors or agentic building—as the headline and primary subject.
- Confirm current catalog and source counts only if exact numbers materially improve the edit.
- Do not imply formal partnerships with museums or public institutions because their open data and images appear in the catalog.
- Treat the current product as a live V0 experiment without inventing adoption, retention, or search-quality outcomes.
- Confirm all artwork and screenshot rights. Prefer newly captured public-domain or explicitly reusable works with visible source evidence.
- Keep the palette study's “no winner yet” conclusion qualified and dated; its active branch contains ongoing work.
- Do not present the Art Genome, current source mix, palette algorithm, or model providers as permanent choices.
- For the deployment story, never reveal credentials, secrets, account identifiers, environment data, or unsafe behavior while driving.
