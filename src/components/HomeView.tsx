"use client";

import { useEffect, useRef, useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import type { HomeMeta, ProjectMeta } from "@/lib/content";
import {
  clearRouteTransitionClasses,
  consumeRouteTransitionIntent,
  readRouteTransitionIntent
} from "@/lib/routeTransitions";

type HomeViewProps = {
  home: HomeMeta;
  projects: ProjectMeta[];
};

export function HomeView({ home, projects }: HomeViewProps) {
  const handledIntentRef = useRef<string | null>(null);
  const [enteredFromProject, setEnteredFromProject] = useState(false);

  useEffect(() => {
    const intent = readRouteTransitionIntent();

    if (!intent) {
      clearRouteTransitionClasses();
      return;
    }

    if (handledIntentRef.current === intent.id) {
      clearRouteTransitionClasses();
      return;
    }

    handledIntentRef.current = intent.id;
    setEnteredFromProject(intent.kind === "project-to-home");
    consumeRouteTransitionIntent();
    clearRouteTransitionClasses();
  }, []);

  return (
    <main
      className={[
        "home-page",
        enteredFromProject ? "home-page--from-project" : undefined
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
