import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import DetailList from "@/components/DetailList";
import ClosingCta from "@/components/ClosingCta";
import { remiseEnEtatDetail } from "@/content/site";

export const metadata: Metadata = {
  title: "Remise en état | Rénov Habitat",
  description:
    "Dégât d'eau, incendie, moisissure : intervention d'urgence 24h/24 et 7j/7 à Toulouse et remise en état complète après sinistre.",
};

export default function RemiseEnEtatPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nos services"
        title="Remise en état"
        intro="Une équipe disponible 24h/24 et 7j/7 pour intervenir vite après un sinistre et limiter l'ampleur des dommages, jour comme nuit."
      />
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1180px]">
          <DetailList items={remiseEnEtatDetail} />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
