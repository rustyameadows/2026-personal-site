import { HomeView } from "@/components/HomeView";
import { featuredProjects, home } from "@/lib/content";

export default function HomePage() {
  return <HomeView home={home} projects={featuredProjects} />;
}
