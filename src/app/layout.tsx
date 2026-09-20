import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rénov-Habitat | Rénovation et remise en état, Vancouver",
  description:
    "Rénov-Habitat intervient à Vancouver pour la rénovation et la remise en état après dégât d'eau, incendie ou moisissure — jour et nuit, 24h/24 et 7j/7.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
