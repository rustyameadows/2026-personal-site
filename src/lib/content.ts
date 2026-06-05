import type { ComponentType } from "react";

import HomeContent, { home as homeMeta } from "@content/home.mdx";
import FirstProjectContent, {
  project as firstProject
} from "@content/projects/first-project.mdx";

export type HomeMeta = {
  title: string;
  description: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  cover: string;
  tags: string[];
  featured: boolean;
};

export type ProjectRecord = ProjectMeta & {
  Content: ComponentType;
};

export const home = homeMeta as HomeMeta;
export const Home = HomeContent;

export const projects: ProjectRecord[] = [
  {
    ...(firstProject as ProjectMeta),
    Content: FirstProjectContent
  }
].sort((a, b) => b.year.localeCompare(a.year));

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projects.find((project) => project.slug === slug);
}
