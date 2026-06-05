import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <h1>Page not found</h1>
      <p>This route is not part of the static site.</p>
      <Link className="text-link" href="/">
        Back home
      </Link>
    </main>
  );
}
