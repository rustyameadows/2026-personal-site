"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useState } from "react";

import type { ProjectMeta } from "@/lib/content";
import { ProjectStack } from "@/components/ProjectStack";
import {
  getRouteTransitionDelay,
  saveHomeScrollPosition,
  shouldHandleRouteTransitionClick,
  startRouteTransition
} from "@/lib/routeTransitions";

type ProjectCardProps = {
  project: ProjectMeta;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const href = `/projects/${project.slug}/`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!shouldHandleRouteTransitionClick(event)) {
      return;
    }

    event.preventDefault();
    setIsOpening(true);
    saveHomeScrollPosition();
    startRouteTransition({
      kind: "home-to-project",
      to: project.slug
    });

    window.setTimeout(() => router.push(href), getRouteTransitionDelay());
  }

  return (
    <Link
      className={["project-link", isOpening ? "project-link--opening" : ""]
        .filter(Boolean)
        .join(" ")}
      href={href}
      aria-label={`Open ${project.title}`}
      onClick={handleClick}
    >
      <ProjectStack />
      <span className="project-link__title">{project.title}</span>
    </Link>
  );
}
