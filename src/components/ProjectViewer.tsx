"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ProjectStack } from "@/components/ProjectStack";
import type { ProjectMeta, ProjectSection } from "@/lib/content";
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

type ProgressMarkerStyle = CSSProperties & {
  "--project-progress-marker-index": number;
};

const defaultProjectSections: ProjectSection[] = [
  { id: "intro", label: "Intro" },
  { id: "image", label: "Image" },
  { id: "detail", label: "Detail" },
  { id: "notes", label: "Notes" },
  { id: "end", label: "End" }
];

const placeholderLayouts = ["intro", "image", "detail", "notes"] as const;

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

function getPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getPlaceholderLayout(section: ProjectSection, sectionIndex: number) {
  if (section.id === "end") {
    return "end";
  }

  return placeholderLayouts[sectionIndex % placeholderLayouts.length];
}

function ProjectPlaceholderSection({
  section,
  sectionIndex
}: {
  section: ProjectSection;
  sectionIndex: number;
}) {
  const layout = getPlaceholderLayout(section, sectionIndex);
  const sectionNumber = String(sectionIndex + 1).padStart(2, "0");

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
        <div className="project-placeholder project-placeholder--hero" />
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
        <div className="project-placeholder project-placeholder--tall" />
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
        <div className="project-placeholder project-placeholder--short" />
      </section>
    );
  }

  return (
    <section
      className="project-view-section project-view-section--intro"
      data-view-section={section.id}
      id={section.id}
    >
      <div className="project-placeholder project-placeholder--wide" />
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

export function ProjectViewer({ project, projects }: ProjectViewerProps) {
  const router = useRouter();
  const viewerRef = useRef<HTMLDivElement>(null);
  const handledIntentRef = useRef<string | null>(null);
  const renderedSlugRef = useRef<string | null>(null);
  const projectSections =
    project.sections && project.sections.length > 0
      ? project.sections
      : defaultProjectSections;
  const firstSectionId =
    projectSections[0]?.id ?? defaultProjectSections[0].id;
  const [activeSection, setActiveSection] = useState(firstSectionId);
  const [entryTransition, setEntryTransition] = useState<"load" | "switch">(
    "load"
  );
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
    const viewer = viewerRef.current;

    if (!viewer) {
      return;
    }

    function updateActiveSection() {
      if (!viewer) {
        return;
      }

      const nextSection = projectSections.reduce(
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
          id: firstSectionId
        }
      );

      setActiveSection(nextSection.id);
    }

    updateActiveSection();
    viewer.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      viewer.removeEventListener("scroll", updateActiveSection);
    };
  }, [firstSectionId, project.slug, projectSections]);

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
      getRouteTransitionDelay("project-to-home")
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
        <Link href="/" className="project-view-home" onClick={handleHomeClick}>
          Home
        </Link>
      </header>

      <section className="project-view-shell" aria-labelledby="project-title">
        <h1 className="project-view-title" id="project-title">
          {project.title}
        </h1>

        <div className="project-view-stage">
          <div className="project-viewer">
            <div
              className="project-viewer__scroll"
              ref={viewerRef}
              tabIndex={0}
              aria-label={`${project.title} project content`}
            >
              <div className="project-viewer__content">
                {projectSections.map((section, sectionIndex) => (
                  <ProjectPlaceholderSection
                    key={section.id}
                    section={section}
                    sectionIndex={sectionIndex}
                  />
                ))}
              </div>
            </div>

            <nav className="project-progress" aria-label="Project sections">
              <span className="project-progress__track" aria-hidden="true" />
              {projectSections.map((section, sectionIndex) => (
                <a
                  className="project-progress__marker"
                  href={`#${section.id}`}
                  aria-label={section.label}
                  aria-current={
                    activeSection === section.id ? "true" : undefined
                  }
                  key={section.id}
                  onClick={(event) => handleRailClick(event, section.id)}
                  style={
                    {
                      "--project-progress-marker-index": sectionIndex
                    } as ProgressMarkerStyle
                  }
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
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

      {ProjectMotionTuner ? <ProjectMotionTuner /> : null}
    </main>
  );
}
