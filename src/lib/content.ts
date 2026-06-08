import HomeContent, { home as homeMeta } from "@content/home.mdx";
import { project as downToShop } from "@content/projects/down-to-shop.mdx";
import { project as iveSeenTheFuture } from "@content/projects/ive-seen-the-future.mdx";
import { project as littlePlains } from "@content/projects/little-plains.mdx";
import { project as nearlyImpossible } from "@content/projects/nearly-impossible.mdx";
import { project as pineappleProductions } from "@content/projects/pineapple-productions.mdx";
import { project as reveal } from "@content/projects/reveal.mdx";
import { project as romanAndWilliamsGuild } from "@content/projects/roman-and-williams-guild.mdx";
import { project as tattly } from "@content/projects/tattly.mdx";

export type HomeMeta = {
  title: string;
  description: string;
};

export type ProjectSection = {
  id: string;
  label: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  featured: boolean;
  sections?: ProjectSection[];
};

export const home = homeMeta as HomeMeta;
export const Home = HomeContent;

export const projects: ProjectMeta[] = [
  pineappleProductions,
  littlePlains,
  iveSeenTheFuture,
  reveal,
  romanAndWilliamsGuild,
  downToShop,
  tattly,
  nearlyImpossible
].map((project) => project as ProjectMeta);

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((project) => project.slug === slug);
}
