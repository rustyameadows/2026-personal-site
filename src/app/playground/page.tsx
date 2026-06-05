import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Design Playground",
  description: "A local-only DialKit surface for tuning site tokens."
};

export default async function PlaygroundPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const { PlaygroundClient } = await import("./PlaygroundClient");

  return <PlaygroundClient />;
}
