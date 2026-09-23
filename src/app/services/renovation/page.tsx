import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import DetailList from "@/components/DetailList";
import ClosingCta from "@/components/ClosingCta";
import { renovationDetail } from "@/content/site";

export const metadata: Metadata = {
  title: "Rénovation | Rénov Habitat-TLS",
  description:
    "Gypse, portes et moulures, revêtement de sol, carrelage, peinture, salle de bain, sous-sol : nos services de rénovation à Toulouse.",
};

export default function RenovationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nos services"
        title="Rénovation"
        intro="Des travaux planifiés, réalisés proprement et dans les délais annoncés, par une seule équipe responsable du début à la fin du chantier."
      />
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1180px]">
          <DetailList items={renovationDetail} />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
