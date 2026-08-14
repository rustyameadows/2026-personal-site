import CreatingVisualsWithAgentsContent from "@content/experiments/creating-visuals-with-agents.mdx";
import ExploreArtContent from "@content/experiments/explore-art.mdx";
import IveSeenTheFutureContent from "@content/projects/ive-seen-the-future.mdx";
import LittlePlainsContent from "@content/projects/little-plains.mdx";
import PineappleProductionsContent from "@content/projects/pineapple-productions.mdx";
import type { ReactNode } from "react";

export function renderProjectCaseStudy(slug: string): ReactNode {
  switch (slug) {
    case "ive-seen-the-future":
      return <IveSeenTheFutureContent />;
    case "little-plains":
      return <LittlePlainsContent />;
    case "pineapple-productions":
      return <PineappleProductionsContent />;
    default:
      return null;
  }
}

export function renderExperimentCaseStudy(slug: string): ReactNode {
  switch (slug) {
    case "creating-visuals-with-agents":
      return <CreatingVisualsWithAgentsContent />;
    case "explore-art":
      return <ExploreArtContent />;
    default:
      return null;
  }
}
