import type { Metadata } from "next";

import { SiteHeader } from "@/components/SiteHeader";
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
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
