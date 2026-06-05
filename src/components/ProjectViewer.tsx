"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ProjectStack } from "@/components/ProjectStack";
import type { ProjectMeta } from "@/lib/content";

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

function getPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ProjectViewer({ project, projects }: ProjectViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(sections[0].id);

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
    event: React.MouseEvent<HTMLAnchorElement>,
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

  return (
    <main className="project-view-page">
      <header className="project-view-chrome">
        <Link href="/" className="project-view-name">
          Rusty Meadows
        </Link>
        <Link href="/" className="project-view-home">
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
                isActive ? "project-picker__item--active" : undefined
              ]
                .filter(Boolean)
                .join(" ")}
              href={`/projects/${item.slug}/`}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Open ${item.title}`}
              key={item.slug}
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
