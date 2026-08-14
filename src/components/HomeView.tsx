"use client";

import { useLayoutEffect, useState } from "react";

import { ExperimentCard } from "@/components/ExperimentCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import type { ExperimentMeta, HomeMeta, ProjectMeta } from "@/lib/content";
import {
  clearRouteTransitionClasses,
  consumeRouteTransitionIntent,
  restoreHomeScrollPosition
} from "@/lib/routeTransitions";

type HomeViewProps = {
  experiments: ExperimentMeta[];
  home: HomeMeta;
  projects: ProjectMeta[];
};

export function HomeView({ experiments, home, projects }: HomeViewProps) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useLayoutEffect(() => {
    const intent = consumeRouteTransitionIntent();

    if (intent?.kind === "project-to-home") {
      restoreHomeScrollPosition();
    }

    clearRouteTransitionClasses();
    const frame = window.requestAnimationFrame(() => setHasLoaded(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main
      className={[
        "home-page",
        hasLoaded ? "home-page--loaded" : "home-page--loading"
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <section className="home-intro" aria-labelledby="home-title">
        <p className="home-eyebrow">Hi, I&apos;m</p>
        <h1 id="home-title">{home.title}</h1>
        <p>{home.description}</p>
      </section>

      <section
        className="recent-work"
        id="projects"
        aria-labelledby="recent-work-title"
      >
        <h2 id="recent-work-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        className="home-experiments"
        id="experiments"
        aria-labelledby="home-experiments-title"
      >
        <h2 id="home-experiments-title">Experiments</h2>
        <div className="experiment-grid">
          {experiments.map((experiment) => (
            <ExperimentCard experiment={experiment} key={experiment.slug} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
