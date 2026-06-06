import type { Metadata } from "next";
import Script from "next/script";

import { home } from "@/lib/content";
import { getProjectMotionTuningInitScript } from "@/lib/projectMotionTuning";

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
      <head>
        {process.env.NODE_ENV === "production" ? null : (
          <Script
            dangerouslySetInnerHTML={{
              __html: getProjectMotionTuningInitScript()
            }}
            id="project-motion-tuning-init"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
