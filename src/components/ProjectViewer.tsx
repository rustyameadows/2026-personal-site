"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ProjectStack } from "@/components/ProjectStack";
import { SiteFooter } from "@/components/SiteFooter";
import type {
  ExperimentMeta,
  ProjectMeta,
  ProjectSection
} from "@/lib/content";
import {
  clearRouteTransitionClasses,
  consumeRouteTransitionIntent,
  getRouteTransitionDelay,
  readRouteTransitionIntent,
  shouldHandleRouteTransitionClick,
  startRouteTransition
} from "@/lib/routeTransitions";

type ProjectViewerProps = {
  children?: ReactNode;
  experiments: ExperimentMeta[];
  project: ProjectMeta;
  projects: ProjectMeta[];
};

const defaultProjectSections: ProjectSection[] = [
  { id: "intro", label: "Intro" },
  { id: "image", label: "Image" },
  { id: "detail", label: "Detail" },
  { id: "notes", label: "Notes" },
  { id: "end", label: "End" }
];

const placeholderLayouts = ["intro", "image", "detail", "notes"] as const;
const placeholderContactEmail = "hello@rustymeadows.com";

const placeholderAssets = {
  bannerDark: {
    height: 500,
    src: "/placeholders/gray-banner-dark.png",
    width: 1800
  },
  bannerLight: {
    height: 500,
    src: "/placeholders/gray-banner-light.png",
    width: 1800
  },
  bannerMid: {
    height: 500,
    src: "/placeholders/gray-banner-mid.png",
    width: 1800
  },
  landscapeLight: {
    height: 1000,
    src: "/placeholders/gray-landscape-light.png",
    width: 1600
  },
  landscapeMid: {
    height: 1000,
    src: "/placeholders/gray-landscape-mid.png",
    width: 1600
  },
  panoramaDark: {
    height: 600,
    src: "/placeholders/gray-panorama-dark.png",
    width: 1800
  },
  panoramaLight: {
    height: 600,
    src: "/placeholders/gray-panorama-light.png",
    width: 1800
  },
  panoramaMid: {
    height: 600,
    src: "/placeholders/gray-panorama-mid.png",
    width: 1800
  },
  portraitDark: {
    height: 1250,
    src: "/placeholders/gray-portrait-dark.png",
    width: 1000
  },
  portraitLight: {
    height: 1250,
    src: "/placeholders/gray-portrait-light.png",
    width: 1000
  },
  portraitMid: {
    height: 1250,
    src: "/placeholders/gray-portrait-mid.png",
    width: 1000
  },
  squareDark: {
    height: 1200,
    src: "/placeholders/gray-square-dark.png",
    width: 1200
  },
  squareLight: {
    height: 1200,
    src: "/placeholders/gray-square-light.png",
    width: 1200
  },
  squareMid: {
    height: 1200,
    src: "/placeholders/gray-square-mid.png",
    width: 1200
  },
  wideDark: {
    height: 700,
    src: "/placeholders/gray-wide-dark.png",
    width: 1600
  },
  wideLight: {
    height: 700,
    src: "/placeholders/gray-wide-light.png",
    width: 1600
  },
  wideMid: {
    height: 700,
    src: "/placeholders/gray-wide-mid.png",
    width: 1600
  }
} as const;

function ProjectPlaceholder({
  variant
}: {
  variant: keyof typeof placeholderAssets;
}) {
  const asset = placeholderAssets[variant];

  return (
    <Image
      alt=""
      aria-hidden="true"
      className="project-placeholder"
      height={asset.height}
      sizes="100vw"
      src={asset.src}
      width={asset.width}
    />
  );
}

const projectFollowupDrafts = [
  [
    "The first useful version was deliberately incomplete. It gave the team enough structure to react to while leaving room for the work to change as new evidence arrived. That made each review less about abstract preference and more about what the system needed to do next.",
    "Small decisions accumulated into a recognizable point of view. The hierarchy became clearer, the language became more direct, and the visual system began to feel consistent without becoming rigid."
  ],
  [
    "Prototypes were used as working conversations rather than polished conclusions. Seeing the ideas in context exposed the weak parts quickly and helped the strongest parts become more specific.",
    "The process moved between broad questions and precise details: the shape of the story, the order of information, the rhythm of a page, and the behavior of a single interaction. Each scale informed the others."
  ],
  [
    "The system was tested across different formats so it could stretch without losing its identity. Repetition created familiarity, while changes in scale, density, and pacing kept the work responsive to its context.",
    "What emerged was not a single fixed composition but a practical set of relationships. Those relationships made it easier to produce new work while keeping the original idea visible."
  ],
  [
    "The final direction was documented through examples instead of rules alone. Real applications showed how the parts fit together and gave future decisions a useful reference point.",
    "The result is designed to remain unfinished in the best sense: clear enough to use immediately, but open enough to absorb new content, new needs, and the next phase of the project."
  ]
] as const;

const expandedProjectDrafts: Record<
  string,
  Array<{ title: string; paragraphs: string[] }>
> = {
  "little-plains": [
    {
      title: "A studio built for the uncertain beginning.",
      paragraphs: [
        "Little Plains works with early-stage teams at the moment when the problem, the product, and the story are all still moving. The work is less about decorating a finished idea and more about helping a company discover what it is, what it should say, and how it should show up in the world.",
        "That ambiguity is useful, but it can also be paralyzing. The central challenge is to create momentum without pretending every answer is already known. Strategy, language, identity, and experience are developed together so that each decision makes the next one easier to see.",
        "The result is a working foundation rather than a stack of disconnected deliverables: something clear enough to launch, flexible enough to learn from, and specific enough to feel like it could only belong to that company."
      ]
    },
    {
      title: "From the first question to a working system.",
      paragraphs: [
        "The process begins by reducing a large, messy set of inputs into a smaller number of useful questions. What does the company understand that others miss? What does the customer need to believe? Which parts of the experience should feel familiar, and where should it feel genuinely new?",
        "Those questions become prototypes quickly. Positioning is tested in headlines. Product ideas are tested in flows. Visual language is tested in the places where it will actually have to work. The point is not speed for its own sake; it is using tangible work to make better decisions sooner.",
        "Each round adds definition without closing the system too early. The strongest ideas survive because they continue to work across copy, image, interface, and conversation—not because they looked persuasive in a presentation."
      ]
    },
    {
      title: "The work has to hold together everywhere.",
      paragraphs: [
        "A brand is experienced in fragments: a first sentence, a product screen, a sales conversation, a package on a shelf, a support message, a launch moment. The system has to make those fragments feel related without making every expression identical.",
        "That means building rules with enough character to be recognizable and enough range to stay useful. Typography, tone, color, motion, and interaction are treated as parts of the same voice. The goal is coherence, not uniformity.",
        "The details matter because they change how the whole company feels. A thoughtful transition, a precise phrase, or a generous bit of whitespace can carry as much of the idea as a logo."
      ]
    },
    {
      title: "A living practice, not a fixed package.",
      paragraphs: [
        "The work does not end when a toolkit is delivered. Early-stage companies change quickly, and the system has to change with them. New evidence appears, the product gets sharper, and the story becomes easier to tell because the team has started using it in the world.",
        "The most useful outcome is a shared way of making decisions: a clear point of view, a set of practical tools, and enough confidence to keep moving. The artifacts matter, but the deeper value is helping a team recognize what is essential and what can remain open.",
        "This page is a draft container for that story. The final case study can replace these fields with selected work once the narrative, sequence, and right level of detail are settled."
      ]
    }
  ],
  "nearly-impossible": [
    {
      title: "A room for people making real things.",
      paragraphs: [
        "Nearly Impossible brought together people building physical products and the brands around them. It was created for the complicated middle ground between having a promising object and building a durable business: the place where design, manufacturing, storytelling, retail, and community all collide.",
        "The event treated those disciplines as one connected practice. A product could not succeed on aesthetics alone, and a compelling story could not compensate for an experience that failed in the hands of a customer. The program focused on the decisions that turn an idea into something people can understand, trust, buy, and live with.",
        "That made the audience as important as the stage. Founders, designers, operators, retailers, and makers arrived with different expertise, but they shared the same practical question: how do you make something meaningful and then build the system that lets it survive?"
      ]
    },
    {
      title: "The program moved between inspiration and utility.",
      paragraphs: [
        "Main-stage conversations created a shared point of view, while smaller sessions made room for specific questions. Brand leaders, independent makers, writers, merchants, and operators could talk honestly about the parts of the work that usually disappear behind a finished product.",
        "The useful details mattered: how a company found its first customers, how a retail relationship changed the product, how packaging affected margin, how a founder protected quality while growing, and how a clear story helped a small team compete with a much larger one.",
        "The experience was designed to let people move between those scales. Big ideas gave the event energy; direct access, expert sessions, and informal conversations gave attendees something they could take back to work the next morning."
      ]
    },
    {
      title: "The community was the real product.",
      paragraphs: [
        "A conference can fill a schedule and still feel empty. Nearly Impossible was built around the opposite idea: the value came from putting the right people close enough together that useful conversations could continue beyond the programmed moment.",
        "Every part of the environment had to support that exchange. The scale of the rooms, the pacing between talks, the places to gather, and the mix of speakers and attendees all shaped whether the day felt transactional or generous.",
        "The strongest moments were often the least formal—an introduction between two founders, a question that continued after a session, or a piece of hard-won advice shared without a sales pitch. Those exchanges turned an event into a network."
      ]
    },
    {
      title: "Everything it took to make the room work.",
      paragraphs: [
        "The public experience was only the visible edge of the project. Behind it sat the full operational system: programming, speakers, sponsors, venues, vendors, volunteers, ticketing, partnerships, communication, and the hundreds of decisions required to make a temporary community feel intentional.",
        "The work demanded both a clear promise and relentless follow-through. Every invitation had to explain why the gathering mattered. Every partnership had to add something useful. Every logistical choice had to protect the time and attention people were bringing into the room.",
        "This draft section gives the final case study enough space to tell that fuller story. The color fields can later hold a deliberate edit of event, identity, and behind-the-scenes material—once those choices are made by the person who owns the work."
      ]
    }
  ]
};

const sharedProjectDrafts = [
  {
    title: "The problem was larger than the first brief.",
    paragraphs: [
      "The project began with a familiar request, but the useful work was hidden underneath it. Before deciding what to make, the team needed a clearer understanding of the audience, the context, and the behavior the new experience was meant to change.",
      "Early conversations surfaced competing goals and a long list of inherited assumptions. Rather than smoothing those tensions away, the process made them visible. That created a more honest brief: one that described the real decisions ahead instead of prematurely describing a solution.",
      "With that foundation in place, each design move could be evaluated against something concrete. The work became less about preference and more about whether the system made the central idea easier to understand, use, and remember."
    ]
  },
  {
    title: "A clear idea had to do several jobs.",
    paragraphs: [
      "The strongest direction was not simply a visual style. It was an organizing idea that could guide language, hierarchy, behavior, and image-making at the same time. That gave the project a center of gravity without forcing every expression to look identical.",
      "The system had to be immediately legible at its smallest scale and still feel rich when there was room to expand. A headline, a navigation label, a product moment, and a large campaign image all needed to carry the same point of view in different ways.",
      "That flexibility came from a small number of deliberate rules. Instead of prescribing every outcome, the work established relationships—between type and space, information and action, consistency and surprise—that could produce new material without losing coherence."
    ]
  },
  {
    title: "The system was designed through use.",
    paragraphs: [
      "Abstract guidelines were never enough. The identity and experience were developed inside the situations where they would actually have to perform. Each prototype exposed a different kind of pressure and helped separate durable decisions from temporary decoration.",
      "The team moved between broad compositions and small interaction details, testing how the work felt at both speeds. A large gesture could establish character, while a quiet label or transition could determine whether the overall experience felt thoughtful or careless.",
      "Repeated use made the system more specific. Elements that could not survive multiple contexts were simplified or removed. The pieces that remained earned their place by making the work clearer, more recognizable, or easier to extend."
    ]
  },
  {
    title: "The details became part of the strategy.",
    paragraphs: [
      "Small choices carried an unusual amount of meaning. The rhythm of a page, the tone of a sentence, the timing of a reveal, and the amount of space around an object all contributed to the way the project positioned itself.",
      "Those details were not treated as polish added at the end. They were developed alongside the larger system because they shaped trust. When every part of the experience appeared to understand its role, the whole project felt more confident and more generous.",
      "The final character came from accumulation rather than spectacle. No single device needed to explain everything. Instead, many precise decisions reinforced one another until the experience felt complete."
    ]
  },
  {
    title: "Making room for change.",
    paragraphs: [
      "The project needed enough definition to launch and enough openness to evolve. That balance shaped every part of the system. Fixed rules protected the central idea; flexible patterns made it possible to respond to new content, new audiences, and new business needs.",
      "Instead of predicting every future scenario, the work focused on giving the team better tools for judgment. Examples showed the range of the system, while principles explained why one choice belonged and another did not.",
      "That approach made change less threatening. New work could extend the original idea rather than slowly eroding it, and the system could become more useful as the organization learned what it needed next."
    ]
  },
  {
    title: "From isolated moments to one experience.",
    paragraphs: [
      "The work crossed several surfaces, each with different constraints and different levels of attention. The challenge was to connect those moments without flattening them into a single repeated template.",
      "A visitor might encounter the project through a quick impression or spend time moving through the full story. Both paths needed to feel intentional. The system used hierarchy, pacing, and recurring visual relationships to help each moment feel complete while still pointing toward a larger whole.",
      "The result was an experience with a consistent voice but variable volume. Some moments could be direct and functional; others could slow down, create atmosphere, or make room for interpretation."
    ]
  },
  {
    title: "The work found its shape through iteration.",
    paragraphs: [
      "The first promising direction was treated as a question, not an answer. It was pushed into unfamiliar contexts, reduced to its simplest pieces, and rebuilt several times to understand which qualities were essential.",
      "Iteration made the work less generic. Convenient choices fell away as the team developed a more precise vocabulary for what the project should and should not feel like. Each round narrowed the distance between the strategic idea and the lived experience.",
      "That process also created alignment. Instead of asking people to react to abstract language, the prototypes gave everyone something specific to discuss, compare, and improve."
    ]
  },
  {
    title: "A foundation for whatever came next.",
    paragraphs: [
      "The finished work was designed as a beginning rather than a final statement. It gave the project a recognizable public form while leaving clear places for new stories, products, and expressions to emerge.",
      "The most important outcome was shared clarity. The team had a stronger way to explain the idea, a practical system for making new work, and a more consistent standard for deciding what belonged.",
      "This draft case study holds space for the final edit. The narrative can become more specific and the color fields can be replaced or refined later, without changing the pacing and density established here."
    ]
  }
];

const sharedProjectDraftOffsets: Record<string, number> = {
  "pineapple-productions": 0,
  "ive-seen-the-future": 1,
  reveal: 2,
  "roman-and-williams-guild": 3,
  "down-to-shop": 4,
  tattly: 5
};

const ProjectMotionTuner =
  process.env.NODE_ENV === "production"
    ? null
    : dynamic(
        () =>
          import("@/components/ProjectMotionTuner").then(
            (module) => module.ProjectMotionTuner
          ),
        {
          ssr: false
        }
      );

function getPlaceholderLayout(section: ProjectSection, sectionIndex: number) {
  if (section.id === "end") {
    return "end";
  }

  return placeholderLayouts[sectionIndex % placeholderLayouts.length];
}

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

function ProjectPlaceholderSection({
  projectSlug,
  section,
  sectionIndex
}: {
  projectSlug: string;
  section: ProjectSection;
  sectionIndex: number;
}) {
  const layout = getPlaceholderLayout(section, sectionIndex);
  const sectionNumber = String(sectionIndex + 1).padStart(2, "0");
  const projectDraft = expandedProjectDrafts[projectSlug]?.[sectionIndex - 1];
  const sharedDraftOffset = sharedProjectDraftOffsets[projectSlug] ?? 0;
  const sharedDraft =
    sharedProjectDrafts[
      (sectionIndex - 1 + sharedDraftOffset) % sharedProjectDrafts.length
    ];
  const expandedDraft = projectDraft ?? sharedDraft;
  const followupDraft =
    projectFollowupDrafts[(sectionIndex - 1) % projectFollowupDrafts.length];

  if (expandedDraft) {
    return (
      <section
        className={`project-view-section project-view-section--expanded project-view-section--expanded-${layout}`}
        data-view-section={section.id}
        id={section.id}
      >
        <header className="project-expanded-copy__header">
          <p className="project-expanded-copy__eyebrow">
            Section {sectionNumber} / {section.label}
          </p>
          <h2>{expandedDraft.title}</h2>
        </header>

        <div className="project-expanded-copy__body">
          {expandedDraft.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {layout === "image" ? (
          <ProjectPlaceholder variant="panoramaLight" />
        ) : layout === "detail" ? (
          <div className="project-expanded-fields project-expanded-fields--pair">
            <ProjectPlaceholder variant="squareMid" />
            <ProjectPlaceholder variant="squareDark" />
          </div>
        ) : layout === "notes" ? (
          <div className="project-expanded-fields project-expanded-fields--pair">
            <ProjectPlaceholder variant="portraitLight" />
            <ProjectPlaceholder variant="portraitMid" />
          </div>
        ) : (
          <ProjectPlaceholder variant="bannerLight" />
        )}

        <div className="project-expanded-followup">
          {followupDraft.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

      </section>
    );
  }

  if (layout === "end") {
    return (
      <section
        className="project-view-section project-view-section--end"
        data-view-section={section.id}
        id={section.id}
      >
        <p>{section.label} placeholder.</p>
      </section>
    );
  }

  if (layout === "image") {
    return (
      <section
        className="project-view-section"
        data-view-section={section.id}
        id={section.id}
      >
        <ProjectPlaceholder variant="wideLight" />
      </section>
    );
  }

  if (layout === "detail") {
    return (
      <section
        className="project-view-section project-view-section--split"
        data-view-section={section.id}
        id={section.id}
      >
        <ProjectPlaceholder variant="portraitLight" />
        <div>
          <p>
            {section.label} placeholder content for testing this project viewer
            section.
          </p>
          <p>
            This block can become real project copy and assets without changing
            the section rail.
          </p>
        </div>
      </section>
    );
  }

  if (layout === "notes") {
    return (
      <section
        className="project-view-section"
        data-view-section={section.id}
        id={section.id}
      >
        <p>
          {section.label} placeholder. The progress rail should mark this
          section as active when this content is closest to the top.
        </p>
        <ProjectPlaceholder variant="bannerMid" />
      </section>
    );
  }

  return (
    <section
      className="project-view-section project-view-section--intro"
      data-view-section={section.id}
      id={section.id}
    >
      <ProjectPlaceholder variant="landscapeLight" />
      <div>
        <p>
          {section.label} placeholder section {sectionNumber} for testing the
          viewer layout and internal scroll behavior.
        </p>
        <p>
          This area will eventually hold real project narrative, imagery, and
          supporting details.
        </p>
      </div>
    </section>
  );
}

function ProjectLanding({
  learnMoreSectionId,
  project,
  sectionId
}: {
  learnMoreSectionId: string;
  project: ProjectMeta;
  sectionId: string;
}) {
  return (
    <section
      className="project-view-landing"
      data-view-section={sectionId}
      id={sectionId}
    >
      <div className="project-view-landing__media">
        <Image
          alt={project.heroAlt}
          className="project-view-landing__image"
          fill
          priority
          sizes="(max-width: 860px) 100vw, 60vw"
          src={project.heroImage}
        />
      </div>

      <div className="project-view-landing__copy">
        <h1 className="project-view-landing__title" id="project-title">
          {project.caseStudyTitle ?? project.title}
        </h1>
        <p>{project.description}</p>
        <a
          className="project-view-landing__cta"
          href={`#${learnMoreSectionId}`}
        >
          Learn more <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

export function ProjectViewer({
  children,
  experiments,
  project,
  projects
}: ProjectViewerProps) {
  const router = useRouter();
  const contactToastTimeoutRef = useRef<number | null>(null);
  const overlayCloseButtonRef = useRef<HTMLButtonElement>(null);
  const overlayTriggerRef = useRef<HTMLButtonElement | null>(null);
  const handledIntentRef = useRef<string | null>(null);
  const renderedSlugRef = useRef<string | null>(null);
  const projectSections =
    project.sections && project.sections.length > 0
      ? project.sections
      : defaultProjectSections;
  const firstSectionId =
    projectSections[0]?.id ?? defaultProjectSections[0].id;
  const learnMoreSectionId = projectSections[1]?.id ?? firstSectionId;
  const contentSectionId = children ? "case-study-content" : learnMoreSectionId;
  const [entryTransition, setEntryTransition] = useState<"load" | "switch">(
    "load"
  );
  const [contactToast, setContactToast] = useState<string | null>(null);
  const [activeOverlay, setActiveOverlay] = useState<
    "projects" | "experiments" | null
  >(null);

  useEffect(() => {
    return () => {
      if (contactToastTimeoutRef.current !== null) {
        window.clearTimeout(contactToastTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!activeOverlay) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlayCloseButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveOverlay(null);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const overlay = document.getElementById("navigation-overlay");
      const focusable = overlay?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      overlayTriggerRef.current?.focus();
    };
  }, [activeOverlay]);

  useLayoutEffect(() => {
    const intent = readRouteTransitionIntent();
    let nextEntryTransition: "load" | "switch" | null = null;

    if (!intent) {
      if (renderedSlugRef.current !== project.slug) {
        nextEntryTransition = "load";
      }

      renderedSlugRef.current = project.slug;
      clearRouteTransitionClasses();
    } else if (handledIntentRef.current === intent.id) {
      clearRouteTransitionClasses();
    } else {
      handledIntentRef.current = intent.id;
      renderedSlugRef.current = project.slug;

      if (intent.kind === "home-to-project" && intent.to === project.slug) {
        nextEntryTransition = "load";
      } else if (
        intent.kind === "project-to-project" &&
        intent.to === project.slug
      ) {
        nextEntryTransition = "switch";
      } else {
        nextEntryTransition = "load";
      }

      consumeRouteTransitionIntent();
      clearRouteTransitionClasses();
    }

    if (!nextEntryTransition) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setEntryTransition(nextEntryTransition);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [project.slug]);

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!shouldHandleRouteTransitionClick(event)) {
      return;
    }

    event.preventDefault();
    startRouteTransition({
      from: project.slug,
      kind: "project-to-home"
    });

    window.setTimeout(
      () => router.push("/", { scroll: false }),
      getRouteTransitionDelay("project-to-home")
    );
  }

  async function handleContactClick() {
    if (contactToastTimeoutRef.current !== null) {
      window.clearTimeout(contactToastTimeoutRef.current);
    }

    try {
      await copyTextToClipboard(placeholderContactEmail);
      setContactToast("Email copied to clipboard");
    } catch {
      setContactToast("Couldn’t copy email");
    }

    contactToastTimeoutRef.current = window.setTimeout(() => {
      setContactToast(null);
      contactToastTimeoutRef.current = null;
    }, 2400);
  }

  function handleProjectClick(
    event: MouseEvent<HTMLAnchorElement>,
    targetProject: ProjectMeta
  ) {
    if (!shouldHandleRouteTransitionClick(event)) {
      return;
    }

    if (targetProject.slug === project.slug) {
      event.preventDefault();
      setActiveOverlay(null);
      return;
    }

    event.preventDefault();

    setActiveOverlay(null);
    startRouteTransition({
      from: project.slug,
      kind: "project-to-project",
      to: targetProject.slug
    });

    window.setTimeout(
      () => router.push(`/projects/${targetProject.slug}/`),
      getRouteTransitionDelay("project-to-project")
    );
  }

  return (
    <main
      className={[
        "project-view-page",
        entryTransition === "load"
          ? "project-view-page--load"
          : undefined,
        entryTransition === "switch"
          ? "project-view-page--switch"
          : undefined
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="project-view-chrome">
        <Link href="/" className="project-view-name" onClick={handleHomeClick}>
          Rusty Meadows
        </Link>
        <div className="project-view-actions">
          <button
            aria-controls="navigation-overlay"
            aria-expanded={activeOverlay === "projects"}
            className="project-view-projects"
            onClick={(event) => {
              overlayTriggerRef.current = event.currentTarget;
              setActiveOverlay("projects");
            }}
            type="button"
          >
            Projects
          </button>
          <button
            aria-controls="navigation-overlay"
            aria-expanded={activeOverlay === "experiments"}
            className="project-view-experiments"
            onClick={(event) => {
              overlayTriggerRef.current = event.currentTarget;
              setActiveOverlay("experiments");
            }}
            type="button"
          >
            Experiments
          </button>
          <button
            className="project-view-contact"
            onClick={handleContactClick}
            type="button"
          >
            Contact
          </button>
        </div>
      </header>

      {contactToast ? (
        <div className="project-contact-toast" role="status">
          {contactToast}
        </div>
      ) : null}

      {activeOverlay ? (
        <div
          aria-labelledby="navigation-overlay-title"
          aria-modal="true"
          className="project-overlay"
          id="navigation-overlay"
          role="dialog"
        >
          <div className="project-overlay__header">
            <h2 id="navigation-overlay-title">
              {activeOverlay === "projects" ? "Projects" : "Experiments"}
            </h2>
            <button
              className="project-overlay__close"
              onClick={() => setActiveOverlay(null)}
              ref={overlayCloseButtonRef}
              type="button"
            >
              Close
            </button>
          </div>

          {activeOverlay === "projects" ? (
            <nav
              className="project-overlay__grid project-overlay__grid--projects"
              aria-label="Visible projects"
            >
              {projects.map((item) => {
                const isActive = item.slug === project.slug;

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`Open ${item.title}`}
                    className="project-overlay__item"
                    href={`/projects/${item.slug}/`}
                    key={item.slug}
                    onClick={(event) => handleProjectClick(event, item)}
                  >
                    <ProjectStack className="project-overlay__stack" />
                    <span className="project-overlay__title">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </nav>
          ) : (
            <nav
              aria-label="Experiments"
              className="project-overlay__grid project-overlay__grid--experiments"
            >
              {experiments.map((experiment) => (
                <Link
                  aria-label={`Open ${experiment.title}`}
                  className="project-overlay__item"
                  href={`/experiments/${experiment.slug}/`}
                  key={experiment.slug}
                  onClick={() => setActiveOverlay(null)}
                >
                  <ProjectStack className="project-overlay__stack" />
                  <span className="project-overlay__title">
                    {experiment.title}
                  </span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      ) : null}

      <section className="project-view-shell" aria-labelledby="project-title">
        <div className="project-view-stage">
          <article
            aria-label={`${project.title} project content`}
            className="project-view-content"
          >
            <ProjectLanding
              learnMoreSectionId={contentSectionId}
              project={project}
              sectionId={firstSectionId}
            />

            <div className="project-view-body">
              {children ? (
                <div className="case-study-content" id="case-study-content">
                  {children}
                </div>
              ) : (
                projectSections.slice(1).map((section, sectionIndex) => (
                  <ProjectPlaceholderSection
                    key={section.id}
                    projectSlug={project.slug}
                    section={section}
                    sectionIndex={sectionIndex + 1}
                  />
                ))
              )}
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />

      {ProjectMotionTuner ? <ProjectMotionTuner /> : null}
    </main>
  );
}
