# Pineapple Productions case study notes

Status: Interview complete and first full draft approved by Rusty Meadows on 2026-08-12; implementation remains.

These are working editorial notes for the Pineapple Productions case study. They distinguish facts and interpretation supplied by Rusty Meadows from details corroborated in the nearby Pineapple Portal repository. They are not final public copy.

## Rusty's account

### How the work began

Pineapple Productions first hired Rusty to refresh its public website. That relationship led to a client portal, which the company liked and wanted to connect to the operational data it maintained in Google Sheets.

At the time, Pineapple managed its work across many separate spreadsheets. The sheets had once felt like an improvement, but they were not a durable system for increasingly complex events. The initial idea was to ingest their spreadsheet data into the client portal. It soon became clear that continuing to organize the product around Google Sheets would preserve the limitations Pineapple was trying to escape. Rusty proposed building a custom system around the portal instead.

The project therefore grew organically from website work, to a client-facing experience, to a bespoke event-planning operating system made around Pineapple's exact process and the high-touch way it works with clients.

### The workflow it replaced

Pineapple might develop an event plan in Google Sheets over many months. The run of show and related timelines were static rather than intelligent: information was split across sheets, views were not generated through useful filters, and a schedule change often meant manually moving or inserting rows and reconciling the surrounding information.

Approximately two weeks before an event, the team would hand the spreadsheet packet to a designer. The designer would turn it into a polished PDF that became the operating source of truth for the remaining planning period and the event itself. Pineapple's operations team, vendors, clients, and staff all depended on that packet. Each later change had to return through the designer, making packet production one of the most laborious, expensive, and delay-prone parts of the process.

Clients also lacked immediate, automatically updated access to the planning information. Keeping them current required direct intervention by a team member.

### What Pineapple Portal became

Pineapple Portal replaces that fragmented chain with a structured planning backend and a client experience designed together. Rusty describes it as a bespoke event-planning operating system built to Pineapple's exacting specifications—not a generic product adapted after the fact.

The system includes intelligent timelines, guest lists, tags and filtered views, client-facing planning modules, and a packet builder. The packet builder can combine system-generated event information with uploaded vendor PDFs, normalize the documents, add page numbering, and publish a cohesive working packet without an external design handoff for every revision.

### Why a custom product

Pineapple had tried or considered conventional business and event tools, including Dubsado, but choosing a category product was not the main path into this work. The custom product emerged from the relationship: first Rusty and Pineapple designed the client experience they wanted, then they designed the internal team experience they wanted. Rebuilding the operational system became a natural extension of that work.

The important distinction is specificity. The software follows the way Pineapple already thinks about events, the level of polish its clients expect, and the ambitions the company has for its practice.

### Outcomes Rusty is comfortable discussing

- Packet production is immediate rather than gated by repeated handoffs to a designer.
- The team can see changes and updated information without the old lag.
- Pineapple is excited by the technology and is asking for additional capabilities, including more AI features.
- The platform has contributed to the team's confidence and ambition to take on larger projects and more complex responsibilities.
- Pineapple's founder enjoys presenting the platform and takes pride in the decision to invest in its own technology.
- Rusty is initially comfortable naming the company and discussing the work publicly, subject to editing the final details and visuals.

Do not turn these qualitative outcomes into quantified savings or adoption claims without further confirmation.

### Rusty's role and the hidden specification

Rusty owned the project end to end: product direction, requirements discovery, workflow definition, interaction and visual design, engineering, and delivery. Pineapple supplied the domain practice, source artifacts, examples, reactions, and eventual product use, but its operating logic was rarely available as an explicit specification.

When Rusty asked how a workflow should behave, the answer was often an existing spreadsheet or packet. Additional examples might follow completely different structures. Rusty's work was to compare those artifacts, find the shared logic underneath them, surface contradictions and edge cases, and help Pineapple commit to rules the software could express.

Frame this constructively. Pineapple had deep tacit expertise encoded in years of practice; Rusty translated that expertise into an explicit product model. Do not characterize the client as uncooperative in public copy.

### Timeline and production status

The relationship and product development have unfolded over approximately two years. Pineapple has used the portal for roughly six to twelve months, and the team now operates in it throughout the workday. Avoid a more exact chronology until dates are confirmed from project records.

### Packet-production change

The generated-packet workflow appears to have eliminated the designer's recurring operational-formatting handoff. A designer may still create a design deck or another genuinely designed component once; the system then includes that work in the packet. The designer is no longer repeatedly reformatting changing operational information, as far as Rusty understands.

Use qualified phrasing because Rusty does not observe every internal handoff directly.

### Smart-timeline example

Ceremony time can be defined as a schedule anchor. Doors might open one hour before it, doors might close five minutes before it, final makeup might be tied to another pre-ceremony milestone, and a processional might occur a set duration after the ceremony begins.

Each timeline item can have a fixed time or a relationship to the beginning or end of another item, with a positive or negative offset and an optional duration. When an anchor changes—for example, when the ceremony is pushed an hour—the system can warn that the edit will affect thirty-seven other events. After confirmation, the dependent schedule updates together. Previously, planners had to find and recalculate those rows manually.

The exact number thirty-seven is an illustrative product scenario from Rusty, not a measured average.

### AI Assist

The current AI workflow is called AI Import or AI Assist. A planner can provide a prior event spreadsheet as a reference, describe the new event conversationally, and give transformations such as the new date, changed vendors, or the removal of a second day. The assistant proposes a draft run of show, accepts feedback, and only then turns the approved draft into structured timeline items for planners to refine.

The useful framing is not “AI plans the wedding.” It turns Pineapple's own historical artifacts and natural-language direction into an editable first draft inside the operating system, leaving judgment and fine-tuning with the planners.

## Source-corroborated product evidence

The nearby `/Users/rustymeadows/Dev/pineapple-portal` repository supports the following functional details:

- a Rails planner workspace and authenticated, event-scoped client portal;
- run-of-show items with scheduling relationships, dependencies, locking, cascading updates, tags, and filtered views;
- separate dense planner tools and curated client-facing modules;
- guest, questionnaire, approval, inspiration, packet, and financial workflows;
- a composable packet system that mixes uploaded PDFs with generated covers, event overviews, planning-team pages, timelines, text pages, dividers, and other sections;
- compiled and versioned PDF output with page-numbering support;
- a visual language derived from Pineapple's existing high-touch brand.

Repository scope proves product depth, not business impact. Operational screenshots must be made with sanitized demo data.

## Corrected editorial thesis

Working thesis:

> Pineapple Productions outgrew a planning process assembled from Google Sheets and hand-designed PDF packets. What began as a website refresh and client portal became a bespoke operating system, built around the exact way Pineapple plans, communicates, and delivers complex events.

Shorter alternatives:

- From Google Sheets to a bespoke event-planning operating system.
- Software tailored to the way Pineapple actually works.
- Building Pineapple's practice into a product.

Avoid leading with “one canonical plan becomes many outputs.” That is a useful supporting mechanism, but it understates the larger transformation and sounds like generic enterprise-product language.

## Proposed narrative arc

1. **A relationship that expanded with the problem.** Begin with the website refresh, then the client portal, then the attempt to connect the portal to spreadsheet data. The product was discovered in stages rather than commissioned from a finished specification.
2. **The breaking point in the old workflow.** Make the months-long spreadsheet process and the two-weeks-out designer handoff vivid. Show how a polished but static PDF became expensive to keep true as an event continued changing.
3. **Stop integrating the limitation.** Describe the pivotal decision to build Pineapple's system instead of making Google Sheets the permanent foundation.
4. **Encoding a particular practice.** Show intelligent timelines, structured guest and planning data, filtered operational views, the client portal, and the packet builder as one expression of Pineapple's actual way of working.
5. **Polish without the production lag.** Explain how system data and arbitrary vendor PDFs become a cohesive, paginated packet that can be regenerated as the event changes.
6. **Technology as organizational confidence.** End with immediacy, growing internal ambition, requests for more capability, and the founder's pride in owning software shaped around the company.

## Preliminary visual edit

All interface captures should use a purpose-built fictional event with no real client, vendor, venue, financial, dietary, contact, document, or URL data.

1. A restrained opening image from Pineapple's event work, subject to permission.
2. A visual reconstruction of the prior process: multiple working sheets flowing into a manually typeset PDF. Do not expose real historical event data.
3. A paired planner/client view to show that internal density and client polish were designed together.
4. A short motion capture of a schedule change cascading through related timeline items.
5. The packet builder beside the compiled result, including an uploaded vendor PDF normalized into the document and consistent page numbering.
6. A closing client-portal view that preserves Pineapple's visual character.

## Remaining editorial choices

- Whether the public project remains titled “Pineapple Productions,” with “Pineapple Portal” introduced as the product, or uses the product name as the page title.
- Whether the AI-assisted development process belongs in the public story. Current product-facing AI Assist can be described independently.
- Whether a more exact start date and current usage scale add useful context. The two-year relationship, six-to-twelve-month portal use, and daily production use are sufficient for a first draft.
