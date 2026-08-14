# Little Plains case study notes

Status: Source article and targeted personal-contribution interview complete. Full draft in `docs/case-study-drafts/little-plains.md` approved by Rusty on 2026-08-13; not yet published.

These are working editorial notes for Rusty Meadows's personal Little Plains case study. They distinguish the Little Plains team's collective account from Rusty's individual account and from source-corroborated product evidence. They are not final public copy.

## Sources reviewed

- Google Doc `LP Site Article`, linked tab `Rusty v2` (`t.45m8gdfa48tq`).
- User-supplied local copy: `/Users/rustymeadows/.codex/attachments/cedf2823-47f7-41ce-afab-c83709b83da5/pasted-text.txt`.
- Nearby repositories `/Users/rustymeadows/Dev/lp-content-pipeline` and `/Users/rustymeadows/Dev/lp-website-vibe`.

The Google Doc contains four top-level tabs: `Emmett Draft`, `Alex Draft (WIP)`, `Rusty v2`, and `Rusty v3`. The supplied attachment matches the long `Rusty v2` article and is the governing article source for this interview. A later `Rusty v3` tab exists and is shorter and more formally structured; do not silently substitute it for the version Rusty shared.

## What the collective article establishes

### A project with three beginnings

The broader Little Plains website effort began through three streams developed by different people over roughly two years:

1. An archive of Gin Lane and Little Plains writing, presentations, project files, images, films, voice notes, meetings, and other accumulated knowledge.
2. A late-2024 chatbot concept that let visitors ask the studio questions and receive relevant text, images, and video.
3. A web-based proposal Alex Leiphart built in Cursor over a weekend, which helped win a project and left behind a working codebase, Sanity content system, components, and interaction patterns that could be developed into the studio site.

Most of the first eighteen months went into the archive, brand language, and technical foundation. The article describes two later months of rapid product testing, two weeks of around-the-clock building once the direction resolved, and two weeks of QA. It claims only about one percent of the total experiments and prototypes appears in the final site.

### The product emerged through working questions

The team did not begin with the final knowledge architecture. Requirements appeared as successive interface prototypes exposed missing capabilities:

- useful answers required reviewed source material;
- project retrieval required a searchable archive;
- image retrieval required understanding the individual assets;
- basic questions required compact, fast knowledge rather than full archival research;
- project and media actions required validated, structured interface responses;
- visitors needed to see work before they could form useful questions.

The site moved through at least seven recognizable product forms: the proposal, a conventional homepage, a spatial canvas, reorganizing search/chat experiments, a guided conversational version, a centered grid, and the navigation lab that consolidated Explore, Ask, and About in the OmniBar.

### Rusty's most clearly attributed product breakthrough

The article explicitly identifies Rusty as the developer working on the agentic features who built an internal visual-search tool. It let the team search the asset archive using descriptions, colors, and visual similarity and was initially intended to test the image pipeline and retrieval quality.

Internal use revealed that one of the system's most interesting capabilities was hidden in the backend: searching individual images, films, interfaces, and other artifacts rather than returning only project pages. The public product was rebuilt around that capability, and the internal tool became the foundation of Explore.

This is a strong personal case-study scene because it connects technical infrastructure, an unplanned internal tool, working-team adoption, a product reframe, and the final public experience.

### The knowledge product beneath the interface

The system separates the complete source archive from compact reviewed knowledge:

- **Deep knowledge** preserves original documents, transcripts, project files, writing, historical context, and indexed passages for questions that require research.
- **Fast knowledge** keeps reviewed studio facts, common process and sales answers, response rules, and project fact sheets immediately available.

The publishing workflow lets models propose additions, replacements, and deletions while people accept, reject, or rewrite them before publication. A meeting transcript does not automatically become public truth.

Sanity remains authoritative for public project content and media. The Pipeline discovers placement-level assets, enriches eligible images and video for retrieval, preserves project context, and blends vector similarity with exact wording, full-text matches, tags, source fields, and editorial choices.

### Three public modes

- **Explore** turns a phrase or reference image into a ranked field of individual visual artifacts that remain connected to their source projects.
- **Ask** returns grounded text plus validated project cards, media, suggestions, or navigation based on the source appropriate to the question.
- **Voice** uses the same conversation and knowledge as Ask so a visitor can move between typing and speech without beginning again.

The article describes a 74-scenario evaluation set run three times for 222 responses, plus a paired latency experiment that reduced a median response from 6.1 seconds to 3.6 seconds at roughly 1.9 times the cost. The article itself says methodology and pricing dates must be added before public use. Do not reproduce those figures in Rusty's portfolio without current build/date/method confirmation.

### Working software as design material

The OmniBar is the article's clearest process example. Explore, Ask, and About were tested as modes of one persistent object through code labs rather than resolved entirely in static design files. Voice discussion and behavioral specifications could become multiple working variants quickly; the team then judged them with real content, mobile constraints, transitions, conversation state, and interruption behavior.

The article's stated division of labor is that people define the problem, provide references and constraints, and select directions; coding agents accelerate variants and repetitive implementation; people test, reconcile, integrate, and finish the work. The important claim is not that agents supplied product judgment. Faster working prototypes increased the demand for human judgment.

## Collaborators already named by the article

- Emmett Shine: founded Little Plains and spent sustained time collecting and organizing the Gin Lane/Little Plains archive; the collective article is written substantially from his first-person perspective.
- Gordon Sexton: helped develop the early chatbot/library concept and visual/product direction.
- Alex Leiphart: built the decisive web proposal and its initial system in Cursor; the proposal became a forkable foundation for the studio site.
- Robin Willis: established the first retrieval-pipeline foundation beneath the agent and later worked on voice capabilities.
- Rusty Meadows: worked on the agentic features, built the internal visual-search tool that became Explore, and—per Rusty's own account—contributed extensive ideas, working demos, momentum, and energy that helped the team rally and ship.
- Elliot: developed motion and hover behavior for smaller visual details described later in the article.

Additional ownership and final implementation boundaries need Rusty's clarification before the personal case study assigns credit more precisely.

## Rusty's account

Little Plains is the opposite of Pineapple Portal in authorship shape. The company and its desire for a better website predated Rusty's involvement. Over more than two years, the team had maintained some form of website, worked with different people, and repeatedly explored possible directions.

Rusty describes his contribution as helping birth and land the final product. He supplied substantial ideas, but his distinctive contribution was also momentum: turning open possibilities into demos the team could use and react to, making the product feel achievable, and helping people rally around finishing it. Even midway through his participation, the team expected the website might be deferred again. The working demonstrations changed that expectation and contributed to the final push to ship.

Avoid framing Rusty as the sole originator of the website, archive, brand language, chatbot premise, or every final interface decision. Also avoid reducing him to the article's narrow phrase “developer working on the site's agentic features.” The personal case study must identify the precise space between those two inaccurate extremes.

### Entry point and initial mandate

Rusty joined the active build approximately two to three months before this interview. His initial mandate was to take a fresh run at an agentic chat experience for a new Little Plains website, reusing earlier work where helpful but with permission to make something new.

At that point, Little Plains had a long-running desire for a better site, prior website versions, a brand and design language, multiple experiments from different collaborators, an existing proposal codebase, and an archival corpus. The public product direction was still largely “perhaps the new website has a chatbot.” The team did not yet have the visual-first product that ultimately shipped and still expected the website might be deferred again.

Rusty describes his role as helping birth and land the final product: contributing substantial product ideas, turning possibilities into working demonstrations, supplying momentum and energy, and helping the team believe the site could be completed on the current push.

### Visual retrieval and Explore

Rusty built the current visual-search and embedding system from scratch in Rails in a repository he still owns personally. Earlier experiments supplied conceptual references, but little or no production code transferred because they used other languages and architectures.

The need appeared immediately through the chat mandate. One of the first things a visitor would ask was “show me illustration work” or “show me something you made.” Little Plains had not tagged or organized its assets for that kind of request. Rusty therefore built a retrieval pipeline combining multimodal embeddings, structured visual analysis, tags, source text, and ranking so the agent could find individual work.

The decisive product turn came when the public site still felt like an underwhelming, insufficiently visual chatbot. Rusty showed the team the large full-screen visual canvas he had built internally to curate and inspect search results. He suggested making that capability public, built a new version overnight, and the team rallied behind it. The diagnostic tool became the foundation of Explore and helped move the project from “still far away” to something the team believed it could land.

### Fact sheets and knowledge pipeline

The first fact sheets addressed agent speed and repetition. The early agent made live checks against Sanity and other sources even though most visitors asked variations of the same basic questions. Rusty proposed giving the agent compact “cheat sheets” containing the information it needed most often and built several versions of that layer.

Little Plains also had Robin Willis's earlier deep corpus of roughly 150 processed documents. Rusty carried that source work forward into the current knowledge system, implementing the present pipeline that can process broader document collections and make them available for deep search. The compact fact sheets form the fast layer; the larger corpus supports questions requiring research and context.

Do not call the whole system “the Content Pipeline” in narrative copy without explanation. That is the repository/product shorthand, not a phrase Rusty naturally uses for his contribution. Prefer visual-retrieval system, search backend, fact sheets, and knowledge pipeline where each is accurate.

### Ask and Voice

Rusty built the current Ask system: agent behavior, multi-turn conversation, retrieval/tool use, evaluation infrastructure, performance work, and backend integration. Alex helped polish and clean up the UI, and the wider team contributed feedback and judgment, but the agent implementation itself was Rusty's.

Dan had made an earlier afternoon Voice demonstration in the website repository. Rusty reworked Voice through at least five major iterations to produce the current integrated version. It remains an evolving part of the product.

### OmniBar and frontend collaboration

Alex was the primary originator of consolidating the interface into the OmniBar, using a set of references and the idea of combining the modes into one object. Rusty built the first pass at much of its layout, drawer, options, and behavior; the design and frontend team then refined and pushed it further.

Alex, Austin, and Arlen worked more heavily on frontend transitions, polish, and UI details. Rusty still built substantial frontend behavior and owned much of the integration between the public interface and the search, agent, knowledge, and voice systems.

### Final engineering and launch

For the final roughly two months, Rusty ran the engineering effort: managing the repository, coordinating and merging contributions, maintaining a working integrated build, triaging team QA through Linear, resolving backend and agent-performance issues, completing significant final evaluation, and handling much of the launch infrastructure.

The whole team participated in QA and the final product remained collaborative. “Ran the engineering effort” is more accurate than sole authorship of the site.

### Personal outcome and favorite work

The project let Rusty operate inside a larger multidisciplinary team while moving continuously among product prototyping, AI systems, frontend and backend engineering, integration, evaluation, and launch. He used Codex and the OpenAI API aggressively as working materials rather than as isolated demos.

Rusty also created the watercolor swatches, one of his favorite parts of the finished experience. He iterated with GPT Image and Codex on composition, transitions, animation speed, and the relationship among individual painted states. The watercolor section deserves meaningful space and motion evidence in the case study; Rusty has additional context to add later.

Repository evidence adds a precise process record in `/Users/rustymeadows/Dev/lp-website-vibe/docs/watercolor-color-controls-case-study.md`. Color search already had twelve exact named anchors with authored result sets; the watercolor work transformed that existing control rather than inventing color retrieval. Rusty compared five complete visual families, six narrower painted directions, and several motion storyboards before selecting asymmetric tide-edge washes. A first scale-based animation made the marks feel closer rather than wetter, so the work shifted to pigment motion within a stable silhouette. Blue served as the workshop color for several retained animation strategies. The final family contains twelve independently authored marks with sixteen baked states each—192 production frames—and keeps frame zero pixel-identical to the resting control. Green, Mint, and Cyan received measured translation-only corrections when their generated sequences drifted. The retained review lab exposed actual size, magnification, timing, backgrounds, reduced motion, hitboxes, looping, and frame scrubbing so visual comparison and the runtime contract could be evaluated together.

## Provisional personal-case-study thesis

> Little Plains had spent two years building an archive, testing ideas, and imagining a website unlike a conventional agency portfolio. Rusty joined to build its agent, discovered that the visual intelligence needed by the chatbot was the more compelling public product, and helped turn the accumulated possibility into something the team could rally around and ship. He built the current visual-retrieval, knowledge, Ask, Voice, and evaluation systems and ran engineering through the final integration and launch.

Possible supporting formulation:

> The internal visual-search tool was built to inspect the pipeline. Once the team used it, it changed the public product. Explore moved individual artifacts—not project pages—to the center, and the rest of the site reorganized around a clearer order: show the work first, let search act on it, and use conversation to go deeper.

The broader “website with memory and eyes” idea remains useful for explaining the whole system, but Rusty's portfolio story should center his catalytic contribution and the working-software process rather than claiming the entire two-year foundation.

## Facts and questions already answered

Do not ask again whether the project began as only a website redesign, archive project, sales tool, or AI experiment. The source establishes three overlapping beginnings and Rusty has clarified that the website ambition predated him.

Do not ask generally how the website and Pipeline shaped one another. The article explains that interface prototypes exposed the requirements for reliable knowledge, project retrieval, asset understanding, fast facts, structured actions, and the placement-level visual corpus.

Do not ask for a generic walkthrough of Explore, Ask, Voice, the OmniBar, or the seven product versions. The article already provides those flows and their rationales.

Do not ask broadly what failed. The article identifies chat-first orientation, full-archive research for basic questions, the spatial canvas's usability/mobile limits, separate Voice context, scattered navigation controls, and multiple abandoned prototype directions.

## Remaining editorial choices

- How much of the 6,400-word collective technical explanation should appear in the shorter personal case study. The personal story should favor the visual-search turn, working-software momentum, system architecture in service of that turn, engineering leadership, and the watercolor work.
- Whether to name individual collaborators inline or keep narrative attribution minimal and include concise credits plus a link to the collective article, as Rusty prefers.
- Which outcome language the team can support beyond shipping, process change, daily internal use, and the new public experience. Do not invent commercial results.
- How much additional firsthand detail Rusty wants to add to the watercolor sequence after seeing the first draft.
- Whether exact current model/provider names add value; the system design is more durable than provider inventory.

## Publication cautions

- The article's collective `we` cannot be converted mechanically into first-person singular.
- Contributor roles need explicit, fair attribution.
- “Hundreds of thousands of our own dollars,” “one percent,” and compressed build timelines are memorable but should remain collective claims and be confirmed before appearing in Rusty's portfolio.
- Exact model names, costs, latency figures, archive sizes, and evaluation counts can become stale and need dated methodology if included.
- Distinguish current public features from the article's explicitly future/private client fact sheets and meeting workflows.
- Confirm the public launch state before describing every feature as currently available.
