import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectViewer } from "@/components/ProjectViewer";
import { renderProjectCaseStudy } from "@/lib/caseStudyContent";
import {
  experiments,
  getProjectBySlug,
  projects,
  visibleProjects
} from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    description: project.description,
    title: project.caseStudyTitle ?? project.title
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectContent = renderProjectCaseStudy(project.slug);

  return (
    <ProjectViewer
      experiments={experiments}
      project={project}
      projects={visibleProjects}
    >
      {projectContent}
    </ProjectViewer>
  );
}
