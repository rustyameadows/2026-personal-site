import HomeContent, { home as homeMeta } from "@content/home.mdx";
import { experiment as creatingVisualsWithAgents } from "@content/experiments/creating-visuals-with-agents.mdx";
import { experiment as exploreArt } from "@content/experiments/explore-art.mdx";
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
  caseStudyTitle?: string;
  featured: boolean;
  description: string;
  heroImage: string;
  heroAlt: string;
  sections?: ProjectSection[];
};

export type ExperimentMeta = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
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
export const visibleProjects = featuredProjects.slice(0, 3);

export const experiments: ExperimentMeta[] = [
  exploreArt,
  creatingVisualsWithAgents
].map((experiment) => experiment as ExperimentMeta);

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getExperimentBySlug(slug: string): ExperimentMeta | undefined {
  return experiments.find((experiment) => experiment.slug === slug);
}
