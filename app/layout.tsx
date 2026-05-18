import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baptiste Devisscher — Portfolio",
  description:
    "Portfolio de Baptiste Devisscher, étudiant en 2ème année de BUT Informatique. Curieux et créatif, passionné d'astronomie et de programmation.",
  keywords: [
    "Baptiste Devisscher",
    "portfolio",
    "BUT Informatique",
    "développeur",
    "étudiant",
  ],
  authors: [{ name: "Baptiste Devisscher" }],
  openGraph: {
    title: "Baptiste Devisscher — Portfolio",
    description:
      "Portfolio de Baptiste Devisscher, étudiant en 2ème année de BUT Informatique.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
