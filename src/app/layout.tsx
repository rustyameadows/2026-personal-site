import type { Metadata } from "next";

import { home } from "@/lib/content";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: home.title,
    template: `%s / ${home.title}`
  },
  description: home.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
