import Link from "next/link";

import type { ProjectMeta } from "@/lib/content";
import { ProjectStack } from "@/components/ProjectStack";

type ProjectCardProps = {
  project: ProjectMeta;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      className="project-link"
      href={`/projects/${project.slug}/`}
      aria-label={`Open ${project.title}`}
    >
      <ProjectStack />
      <span className="project-link__title">{project.title}</span>
    </Link>
  );
}
