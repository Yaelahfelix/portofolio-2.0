import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const orbittonFont = Orbitron({ subsets: ["latin"] });

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
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
