import { SiteFooter } from "@/components/SiteFooter";
import { home } from "@/lib/content";

const selectWorkGroups = [
  {
    id: "clients",
    title: "Select Work",
    items: [
      { label: "Little Plains", href: "https://littleplains.com/" },
      { label: "Pineapple Productions", href: "https://pineapplepro.com/" },
      { label: "Sugar Paper", href: "https://sugarpaper.com/" },
      {
        label: "Roman and Williams GUILD",
        href: "https://romanandwilliams.com/pages/guild-shop"
      },
      { label: "Tattly" }
    ]
  },
  {
    id: "projects",
    title: "Select Projects",
    items: [
      {
        label: "Interpolations",
        href: "https://iveseenthefuture.com/"
      },
      { label: "Explore Art", href: "https://explore-art.com/" },
      { label: "Reveal" },
      { label: "Nearly Impossible" }
    ]
  }
];

export default function HomePage() {
  return (
    <main className="teaser-home">
      <section className="home-intro" aria-labelledby="home-title">
        <h1 id="home-title">{home.title}</h1>
        <p>{home.description}</p>
      </section>

      <div className="teaser-projects">
        <div className="teaser-project-groups">
          {selectWorkGroups.map((group) => (
            <section
              aria-labelledby={`teaser-${group.id}-title`}
              className="teaser-project-group"
              key={group.id}
            >
              <h2 id={`teaser-${group.id}-title`}>{group.title}</h2>
              <ul
                aria-labelledby={`teaser-${group.id}-title`}
                className="teaser-project-list"
              >
                {group.items.map((work) => (
                  <li key={work.label}>
                    {work.href ? (
                      <a
                        aria-label={`${work.label} (opens in a new tab)`}
                        href={work.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {work.label}
                      </a>
                    ) : (
                      work.label
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
