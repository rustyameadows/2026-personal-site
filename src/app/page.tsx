import { HomeView } from "@/components/HomeView";
import { experiments, home, visibleProjects } from "@/lib/content";

export default function HomePage() {
  return (
    <HomeView
      experiments={experiments}
      home={home}
      projects={visibleProjects}
    />
  );
}
