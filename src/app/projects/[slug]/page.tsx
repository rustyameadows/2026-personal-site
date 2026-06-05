import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/lib/content";

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
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Content = project.Content;

  return (
    <main className="project-page">
      <section className="project-intro">
        <p className="project-meta">
          {project.year} / {project.role}
        </p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="project-tags" aria-label="Project tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <article className="project-body mdx-content">
        <Content />
      </article>
    </main>
  );
}
