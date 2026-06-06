"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ProjectStack } from "@/components/ProjectStack";
import type { ProjectMeta } from "@/lib/content";
import {
  clearRouteTransitionClasses,
  consumeRouteTransitionIntent,
  getRouteTransitionDelay,
  readRouteTransitionIntent,
  shouldHandleRouteTransitionClick,
  startRouteTransition
} from "@/lib/routeTransitions";

type ProjectViewerProps = {
  project: ProjectMeta;
  projects: ProjectMeta[];
};

const sections = [
  { id: "intro", label: "Intro" },
  { id: "image", label: "Image" },
  { id: "detail", label: "Detail" },
  { id: "notes", label: "Notes" },
  { id: "end", label: "End" }
];

const projectLoadBeats = {
  done: 2300,
  stage: 920,
  title: 1650
};

type ProjectLoadPhase = "chrome" | "stage" | "title" | "done";

function getPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ProjectViewer({ project, projects }: ProjectViewerProps) {
  const router = useRouter();
  const viewerRef = useRef<HTMLDivElement>(null);
  const handledIntentRef = useRef<string | null>(null);
  const renderedSlugRef = useRef<string | null>(null);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [entryTransition, setEntryTransition] = useState<"load" | "switch">(
    "load"
  );
  const [loadPhase, setLoadPhase] = useState<ProjectLoadPhase>("chrome");
  const [switchingProjectSlug, setSwitchingProjectSlug] = useState<
    string | null
  >(null);

  useLayoutEffect(() => {
    const intent = readRouteTransitionIntent();

    if (!intent) {
      if (renderedSlugRef.current !== project.slug) {
        setEntryTransition("load");
        setSwitchingProjectSlug(null);
      }

      renderedSlugRef.current = project.slug;
      clearRouteTransitionClasses();
      return;
    }

    if (handledIntentRef.current === intent.id) {
      clearRouteTransitionClasses();
      return;
    }

    handledIntentRef.current = intent.id;
    renderedSlugRef.current = project.slug;

    if (intent.kind === "home-to-project" && intent.to === project.slug) {
      setEntryTransition("load");
    } else if (
      intent.kind === "project-to-project" &&
      intent.to === project.slug
    ) {
      setEntryTransition("switch");
    } else {
      setEntryTransition("load");
    }

    setSwitchingProjectSlug(null);
    consumeRouteTransitionIntent();
    clearRouteTransitionClasses();
  }, [project.slug]);

  useEffect(() => {
    if (entryTransition !== "load") {
      setLoadPhase("done");
      return;
    }

    if (getPrefersReducedMotion()) {
      setLoadPhase("done");
      return;
    }

    setLoadPhase("chrome");

    const timers = [
      window.setTimeout(() => setLoadPhase("stage"), projectLoadBeats.stage),
      window.setTimeout(() => setLoadPhase("title"), projectLoadBeats.title),
      window.setTimeout(() => setLoadPhase("done"), projectLoadBeats.done)
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [entryTransition, project.slug]);

  useEffect(() => {
    const viewer = viewerRef.current;

    if (!viewer) {
      return;
    }

    function updateActiveSection() {
      if (!viewer) {
        return;
      }

      const nextSection = sections.reduce(
        (closest, section) => {
          const element = viewer.querySelector<HTMLElement>(
            `[data-view-section="${section.id}"]`
          );

          if (!element) {
            return closest;
          }

          const distance = Math.abs(element.offsetTop - viewer.scrollTop);

          if (distance < closest.distance) {
            return {
              distance,
              id: section.id
            };
          }

          return closest;
        },
        {
          distance: Number.POSITIVE_INFINITY,
          id: sections[0].id
        }
      );

      setActiveSection(nextSection.id);
    }

    updateActiveSection();
    viewer.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      viewer.removeEventListener("scroll", updateActiveSection);
    };
  }, [project.slug]);

  function handleRailClick(
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) {
    event.preventDefault();

    const viewer = viewerRef.current;
    const section = viewer?.querySelector<HTMLElement>(
      `[data-view-section="${sectionId}"]`
    );

    if (!viewer || !section) {
      return;
    }

    viewer.scrollTo({
      behavior: getPrefersReducedMotion() ? "auto" : "smooth",
      top: section.offsetTop
    });
  }

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
      getRouteTransitionDelay()
    );
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
      return;
    }

    event.preventDefault();

    setSwitchingProjectSlug(targetProject.slug);
    startRouteTransition({
      from: project.slug,
      kind: "project-to-project",
      to: targetProject.slug
    });

    window.setTimeout(
      () => router.push(`/projects/${targetProject.slug}/`),
      getRouteTransitionDelay()
    );
  }

  return (
    <main
      className={[
        "project-view-page",
        entryTransition === "load"
          ? "project-view-page--load"
          : undefined,
        entryTransition === "load"
          ? `project-view-page--load-${loadPhase}`
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
        <Link href="/" className="project-view-home" onClick={handleHomeClick}>
          Home
        </Link>
      </header>

      <section className="project-view-shell" aria-labelledby="project-title">
        <h1 className="project-view-title" id="project-title">
          {project.title}
        </h1>

        <div className="project-view-stage">
          <div
            className="project-viewer"
            ref={viewerRef}
            tabIndex={0}
            aria-label={`${project.title} project content`}
          >
            <section
              className="project-view-section project-view-section--intro"
              data-view-section="intro"
              id="intro"
            >
              <div className="project-placeholder project-placeholder--wide" />
              <div>
                <p>
                  Placeholder project opening copy for testing the viewer
                  layout and internal scroll behavior.
                </p>
                <p>
                  This area will eventually hold real project narrative,
                  imagery, and supporting details.
                </p>
              </div>
            </section>

            <section
              className="project-view-section"
              data-view-section="image"
              id="image"
            >
              <div className="project-placeholder project-placeholder--hero" />
            </section>

            <section
              className="project-view-section project-view-section--split"
              data-view-section="detail"
              id="detail"
            >
              <div className="project-placeholder project-placeholder--tall" />
              <div>
                <p>
                  Placeholder detail copy sits beside a taller block so this
                  pass can prove the project viewer handles mixed content.
                </p>
                <p>
                  The final page can swap these blocks for real assets without
                  changing the route flow.
                </p>
              </div>
            </section>

            <section
              className="project-view-section"
              data-view-section="notes"
              id="notes"
            >
              <p>
                Notes placeholder. The rail should mark this section as active
                when the scroll position reaches this part of the viewer.
              </p>
              <div className="project-placeholder project-placeholder--short" />
            </section>

            <section
              className="project-view-section project-view-section--end"
              data-view-section="end"
              id="end"
            >
              <p>End placeholder.</p>
            </section>
          </div>

          <nav className="project-progress" aria-label="Project sections">
            <span className="project-progress__track" aria-hidden="true" />
            {sections.map((section) => (
              <a
                className="project-progress__marker"
                href={`#${section.id}`}
                aria-label={section.label}
                aria-current={activeSection === section.id ? "true" : undefined}
                key={section.id}
                onClick={(event) => handleRailClick(event, section.id)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <nav className="project-picker" aria-label="Projects">
        {projects.map((item) => {
          const isActive = item.slug === project.slug;

          return (
            <Link
              className={[
                "project-picker__item",
                isActive ? "project-picker__item--active" : undefined,
                switchingProjectSlug === item.slug
                  ? "project-picker__item--switching"
                  : undefined
              ]
                .filter(Boolean)
                .join(" ")}
              href={`/projects/${item.slug}/`}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Open ${item.title}`}
              key={item.slug}
              onClick={(event) => handleProjectClick(event, item)}
            >
              <ProjectStack className="project-picker__stack" />
              <span className="project-picker__title">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
