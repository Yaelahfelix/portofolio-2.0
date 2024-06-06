import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { sourcecSansFont } from "@/lib/Fonts";

export const metadata: Metadata = {
  title: "Ferdinand Felix",
  description: "A,B,C,D,E,F,G,H,I LOVE YOU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-slate-700"
    >
      <body className={`${sourcecSansFont.className}`}>{children}</body>
      <Analytics />
    </html>
  );
}
