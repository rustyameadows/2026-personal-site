import Link from "next/link";

import { ProjectStack } from "@/components/ProjectStack";
import type { ExperimentMeta } from "@/lib/content";

type ExperimentCardProps = {
  experiment: ExperimentMeta;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <Link
      aria-label={`Open ${experiment.title}`}
      className="experiment-card"
      href={`/experiments/${experiment.slug}/`}
    >
      <ProjectStack />
      <span className="experiment-card__title">{experiment.title}</span>
    </Link>
  );
}
