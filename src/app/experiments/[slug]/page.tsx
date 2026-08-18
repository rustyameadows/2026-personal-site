import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/SiteFooter";
import { renderExperimentCaseStudy } from "@/lib/caseStudyContent";
import {
  experiments,
  getExperimentBySlug
} from "@/lib/content";
import { publicContactEmail } from "@/lib/site";

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

  const experimentContent = renderExperimentCaseStudy(experiment.slug);

  if (!experimentContent) {
    notFound();
  }

  return (
    <main className="project-view-page experiment-case-study-page">
      <header className="project-view-chrome">
        <Link href="/">Rusty Meadows</Link>
        <nav aria-label="Site navigation">
          <Link href="/#projects">Projects</Link>
          <Link href="/#experiments">Experiments</Link>
          <a href={`mailto:${publicContactEmail}`}>Contact</a>
        </nav>
      </header>

      <section className="project-view-shell" aria-labelledby="project-title">
        <div className="project-view-stage">
          <article
            aria-label={`${experiment.title} experiment content`}
            className="project-view-content"
          >
            <section className="project-view-landing">
              <div className="project-view-landing__media">
                <Image
                  alt={experiment.heroAlt}
                  className="project-view-landing__image"
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 60vw"
                  src={experiment.heroImage}
                />
              </div>

              <div className="project-view-landing__copy">
                <p className="case-study-landing__eyebrow">Experiment</p>
                <h1 className="project-view-landing__title" id="project-title">
                  {experiment.title}
                </h1>
                <p>{experiment.description}</p>
                <a
                  className="project-view-landing__cta"
                  href="#case-study-content"
                >
                  Learn more <span aria-hidden="true">↓</span>
                </a>
              </div>
            </section>

            <div className="project-view-body">
              <div className="case-study-content" id="case-study-content">
                {experimentContent}
              </div>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
