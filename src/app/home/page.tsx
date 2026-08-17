import { HomeView } from "@/components/HomeView";
import { experiments, home, visibleProjects } from "@/lib/content";

export default function WorkingHomePage() {
  return (
    <HomeView
      experiments={experiments}
      home={home}
      projects={visibleProjects}
    />
  );
}
