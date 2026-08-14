# Pineapple Productions

Draft status: Editorially approved by Rusty Meadows on 2026-08-12. Not yet published.

## Page metadata

**Project:** Pineapple Productions
**Product:** Pineapple Portal
**Working headline:** Building Pineapple's operating system
**Working summary:** What began as a website refresh and client portal became a bespoke event-planning system, designed and built around the exact way Pineapple plans, communicates, and delivers complex events.
**Role:** Product strategy, requirements discovery, product design, interaction and visual design, full-stack engineering, AI workflow design, and delivery
**Timeline:** Approximately two years, ongoing
**Status:** In daily production use

## Building Pineapple's operating system

Pineapple Productions plans events that can take months to assemble and still change in the final hour. Before Pineapple Portal, much of that work lived across a constellation of Google Sheets. About two weeks before an event, the team handed those sheets to a designer, who turned them into the polished PDF that everyone—from clients and vendors to the on-site operations team—would work from.

The packet looked finished at precisely the moment the plan was still changing.

I began working with Pineapple on its public website. A client portal followed. When we started connecting that portal to the company's spreadsheets, it became clear that we were designing around the limitation instead of removing it. So we stopped building an interface for the spreadsheets and started building Pineapple's operating system.

Over the next two years, I designed and built Pineapple Portal: a bespoke planning platform shaped around the company's particular process, its unusually high standard of service, and the way its clients want to be looked after. The team now works in it throughout the day.

> **Visual 01 — Opening outcome**
> A full-width, permission-cleared image from a Pineapple event, followed by one strong client-portal screen. The contrast should establish both the emotional stakes of the work and the level of polish the software needed to support.

## A polished document with a built-in expiration date

Google Sheets had been a meaningful step forward for Pineapple. They gave the team a flexible place to build a plan over many months. But they were still collections of rows. The run of show did not understand the relationships between events, different audiences did not receive living views of the same plan, and every change depended on somebody remembering what else had to move.

The largest bottleneck appeared near the finish line. Pineapple would send its working sheets to a designer, who would lay them out as a beautiful production packet. That PDF became the source of truth for the final weeks and the event itself. When a time, vendor, or detail changed, the information had to travel back through the designer before the packet could become true again.

The problem was not that the document lacked polish. The problem was that polish had been attached to a manual publishing process. Pineapple needed an operational system that could remain live without giving up the care its clients expected.

> **Visual 02 — The former workflow**
> A simple, editorial diagram or reconstructed still: months of separate Google Sheets → handoff to designer → formatted master PDF → change request → designer revision → redistributed PDF. Use fictional information rather than historical client data.

## The requirements were hiding in the work

There was no requirements document for Pineapple Portal. The specification lived inside years of spreadsheets, packets, habits, and exceptions.

When I asked how something should behave, the answer was often an old event file: “Make it work like this.” Then two more examples would arrive, each organized differently. I had to compare them, identify which differences were meaningful, find the rules Pineapple had been applying instinctively, and help the team decide what should happen when those rules conflicted.

That discovery work became as important as the interface or the code. Pineapple knew how to produce an extraordinary event; much of that knowledge had never needed to be made explicit. Building the product meant translating a practiced, highly contextual service into a system without flattening the judgment that made the service special.

I owned that translation end to end: product direction, workflow definition, interaction and visual design, engineering, and delivery. Pineapple's artifacts and reactions supplied the domain truth. My job was to turn that truth into a coherent model the team could actually operate.

> **Visual 03 — From artifacts to rules**
> A privacy-safe composition of several differently structured legacy schedule fragments with a small set of extracted product rules. This can show the intellectual work without presenting Pineapple as disorganized.

## A timeline made of relationships, not rows

The run of show became the clearest expression of the difference between a spreadsheet and an operating system.

In Pineapple Portal, an item can happen at a fixed time or in relation to the beginning or end of another event. It can have a duration, and its offset can move forward or backward. Ceremony time might be set for 5:00 p.m. Doors can open an hour before it and close five minutes before it. Makeup, vendor arrivals, processional cues, and dozens of other events can be attached to the milestones they actually depend on.

If the ceremony moves, the system can say that the change will affect thirty-seven other events. A planner confirms once, and the dependent schedule moves together. In the old workflow, those relationships lived in people's heads and had to be recalculated row by row.

The timeline is configurable because real events refuse to follow one template. The goal was not to automate Pineapple's judgment. It was to give that judgment a structure: fixed moments when necessary, relationships where useful, and a clear warning before one decision ripples through the day.

> **Visual 04 — The cascade**
> A short, silent loop or annotated sequence: change the ceremony anchor; show the “37 other events” confirmation; accept; reveal the updated dependent schedule. Pair it with a still of tags or filtered timeline views.

## Publishing became part of the product

The new packet builder connects the live plan to the polished artifact people need on the day of an event.

Pineapple can assemble generated timelines, event information, team pages, text, and section breaks alongside PDFs supplied by vendors or designers. The system normalizes those different sources, compiles them into a cohesive packet, and applies consistent page numbering. A designer can still create the parts that require design—such as a visual design deck—but no longer has to repeatedly reformat changing operational information.

This changes more than production speed. It removes the gap between the plan Pineapple is editing and the packet everyone else is using. The team can make a change, regenerate the document, and see the current result without waiting for another formatting cycle.

The same principle extends to the client portal. Clients can see a curated, branded version of the work as it evolves, while Pineapple's planners retain the denser operational tools they need internally. Both experiences belong to the same system, but they do not pretend the two audiences need the same interface.

> **Visual 05 — One system, two levels of detail**
> Pair a dense internal planner view with its calmer client-facing counterpart.
>
> **Visual 06 — Packet builder and result**
> Show the ordered packet sections beside representative finished pages. Include one fictional vendor PDF entering the system and emerging with the rest of the normalized, paginated document.

## AI grounded in Pineapple's own history

Once Pineapple's planning logic was structured, AI could solve a very specific next problem: starting a new run of show without starting from nothing.

With AI Assist, a planner can upload the spreadsheet from a previous event and describe how the next one differs. The date has changed. One vendor has replaced another. A two-day schedule has become a single day. Certain sections should disappear; other details should carry forward. The planner gives that direction conversationally, reviews a proposed draft, asks for changes, and only then turns it into structured timeline items inside Pineapple Portal.

The assistant does not plan the event on Pineapple's behalf. It converts the team's own historical work and natural-language direction into an editable first draft. Pineapple's planners still make the decisions and fine-tune the result; they simply begin much farther ahead.

> **Visual 07 — AI Assist**
> A three-part sequence using a fictional prior event: source spreadsheet and instructions; conversational draft review; approved items appearing in the structured run of show.

## A tool the team wants more from

Pineapple Portal has been in active use for roughly six to twelve months, and the team now works in it throughout the day. The recurring packet-formatting handoff has largely disappeared. Changes are visible without the old production lag. The platform is no longer a client-facing accessory attached to the company's process; it is where much of that process now happens.

The most telling result is the way Pineapple talks about what should come next. The team keeps asking for more features and more ways to use AI. The founder takes pride in the decision to invest in the platform and enjoys showing it to other people. The technology has become part of how Pineapple imagines taking on larger projects and more ambitious work.

That is the value of custom software at its best. It does not ask a particular company to become more generic so it can fit inside a category product. It takes the way that company is already exceptional, makes the hidden logic usable, and gives the practice room to grow.

> **Visual 08 — Closing view**
> End on the strongest complete product image: ideally the branded client portal or a composed overview of an active fictional event. Keep the final page visually quiet enough for the closing thought to land.

## Editorial cautions before publication

- Confirm whether the product-building process itself should mention coding agents. The published draft currently discusses only the client-facing AI Assist feature.
- Treat “thirty-seven other events” as an illustrative interface scenario unless a real sanitized example is captured.
- Keep the packet-handoff claim qualified as “largely disappeared” unless Pineapple confirms it has been eliminated completely.
- Use only fictional or thoroughly sanitized event, client, guest, vendor, venue, financial, contact, uploaded-document, and portal data.
- Confirm permission and provenance for Pineapple event photography.
