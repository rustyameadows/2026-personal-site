import Link from "next/link";

import type { ProjectRecord } from "@/lib/content";

type ProjectCardProps = {
  project: ProjectRecord;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className="project-link" href={`/projects/${project.slug}/`}>
      <span className="project-link__meta">
        {project.year} / {project.role}
      </span>
      <span className="project-link__title">{project.title}</span>
      <span className="project-link__summary">{project.summary}</span>
      <span className="project-link__tags" aria-label="Project tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </span>
    </Link>
  );
}
