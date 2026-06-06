"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

import type { ProjectMeta } from "@/lib/content";
import { ProjectStack } from "@/components/ProjectStack";
import {
  saveHomeScrollPosition,
  shouldHandleRouteTransitionClick,
  startRouteTransition
} from "@/lib/routeTransitions";

type ProjectCardProps = {
  project: ProjectMeta;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const href = `/projects/${project.slug}/`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!shouldHandleRouteTransitionClick(event)) {
      return;
    }

    event.preventDefault();
    saveHomeScrollPosition();
    startRouteTransition({
      kind: "home-to-project",
      to: project.slug
    });

    router.push(href);
  }

  return (
    <Link
      className="project-link"
      href={href}
      aria-label={`Open ${project.title}`}
      onClick={handleClick}
    >
      <ProjectStack />
      <span className="project-link__title">{project.title}</span>
    </Link>
  );
}
