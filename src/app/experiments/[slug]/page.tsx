import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectStack } from "@/components/ProjectStack";
import { SiteFooter } from "@/components/SiteFooter";
import {
  experiments,
  getExperimentBySlug
} from "@/lib/content";

type ExperimentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return experiments.map((experiment) => ({
    slug: experiment.slug
  }));
}

export async function generateMetadata({
  params
}: ExperimentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    return {};
  }

  return {
    description: experiment.description,
    title: experiment.title
  };
}

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    notFound();
  }

  return (
    <main className="experiment-page">
      <header className="experiment-page__chrome">
        <Link href="/">Rusty Meadows</Link>
        <nav aria-label="Site navigation">
          <Link href="/#projects">Projects</Link>
          <Link href="/#experiments">Experiments</Link>
          <a href="mailto:hello@rustymeadows.com">Contact</a>
        </nav>
      </header>

      <article className="experiment-page__landing">
        <div className="experiment-page__stack" aria-hidden="true">
          <ProjectStack />
        </div>
        <div className="experiment-page__copy">
          <p>Experiment</p>
          <h1>{experiment.title}</h1>
          <p>{experiment.description}</p>
          <p>This experiment is in progress. More details are coming soon.</p>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
