"use client";

import { useLayoutEffect, useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import type { HomeMeta, ProjectMeta } from "@/lib/content";
import {
  clearRouteTransitionClasses,
  consumeRouteTransitionIntent,
  restoreHomeScrollPosition
} from "@/lib/routeTransitions";

type HomeViewProps = {
  home: HomeMeta;
  projects: ProjectMeta[];
};

export function HomeView({ home, projects }: HomeViewProps) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useLayoutEffect(() => {
    const intent = consumeRouteTransitionIntent();

    if (intent?.kind === "project-to-home") {
      restoreHomeScrollPosition();
    }

    clearRouteTransitionClasses();
    setHasLoaded(true);
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

      <section className="recent-work" aria-labelledby="recent-work-title">
        <h2 id="recent-work-title">Recent work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
