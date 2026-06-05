import HomeContent, { home as homeMeta } from "@content/home.mdx";
import { project as project01 } from "@content/projects/project-01.mdx";
import { project as project02 } from "@content/projects/project-02.mdx";
import { project as project03 } from "@content/projects/project-03.mdx";
import { project as project04 } from "@content/projects/project-04.mdx";
import { project as project05 } from "@content/projects/project-05.mdx";
import { project as project06 } from "@content/projects/project-06.mdx";
import { project as project07 } from "@content/projects/project-07.mdx";
import { project as project08 } from "@content/projects/project-08.mdx";

export type HomeMeta = {
  title: string;
  description: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  featured: boolean;
};

export const home = homeMeta as HomeMeta;
export const Home = HomeContent;

export const projects: ProjectMeta[] = [
  project01,
  project02,
  project03,
  project04,
  project05,
  project06,
  project07,
  project08
].map((project) => project as ProjectMeta);

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((project) => project.slug === slug);
}
