import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectViewer } from "@/components/ProjectViewer";
import { getProjectBySlug, projects } from "@/lib/content";
import { getProjectMotionTuningInitScript } from "@/lib/projectMotionTuning";

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
    title: project.title
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {process.env.NODE_ENV === "production" ? null : (
        <script
          dangerouslySetInnerHTML={{
            __html: getProjectMotionTuningInitScript()
          }}
        />
      )}
      <ProjectViewer project={project} projects={projects} />
    </>
  );
}
