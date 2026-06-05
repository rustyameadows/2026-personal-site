import Link from "next/link";

import type { ProjectMeta } from "@/lib/content";

type ProjectCardProps = {
  project: ProjectMeta;
};

const layers = [0, 1, 2, 3, 4];

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      className="project-link"
      href={`/projects/${project.slug}/`}
      aria-label={`Open ${project.title}`}
    >
      <span className="project-stack" aria-hidden="true">
        {layers.map((layer) => (
          <span
            className="project-stack__layer"
            data-layer={layer}
            key={layer}
          />
        ))}
      </span>
      <span className="project-link__title">{project.title}</span>
    </Link>
  );
}
