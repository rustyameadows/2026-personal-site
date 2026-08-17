import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { home, visibleProjects } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="teaser-home">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="home-eyebrow">Hi, I&apos;m</p>
        <h1 id="home-title">{home.title}</h1>
        <p>{home.description}</p>
      </section>

      <section
        className="teaser-projects"
        aria-labelledby="teaser-projects-title"
      >
        <h2 id="teaser-projects-title">Projects</h2>
        <ul className="teaser-project-list">
          {visibleProjects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
