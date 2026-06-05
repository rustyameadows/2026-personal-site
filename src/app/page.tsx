import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects, home } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="home-eyebrow">Hi, I&apos;m</p>
        <h1 id="home-title">{home.title}</h1>
        <p>{home.description}</p>
      </section>

      <section className="recent-work" aria-labelledby="recent-work-title">
        <h2 id="recent-work-title">Recent work</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
