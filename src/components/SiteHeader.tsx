import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/" aria-label="Go to the homepage">
        RM
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/projects/first-project/">Work</Link>
      </nav>
    </header>
  );
}
