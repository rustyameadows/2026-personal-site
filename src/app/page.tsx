import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects, Home, home } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="home-intro" aria-labelledby="home-title">
        <h1 id="home-title">{home.title}</h1>
        <p>{home.description}</p>
      </section>

      <section>
        <div className="mdx-content">
          <Home />
        </div>
      </section>

      <section className="project-section" aria-labelledby="featured-projects">
        <div className="section-heading">
          <h2 id="featured-projects">Projects</h2>
          <p>Repo-backed project files rendered through one focused template.</p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
