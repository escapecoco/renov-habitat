import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import ClosingCta from "@/components/ClosingCta";
import { HouseIcon, BuildingIcon, PersonIcon } from "@/components/icons";
import { clientele } from "@/content/site";

const icons = { house: HouseIcon, building: BuildingIcon, person: PersonIcon };

export const metadata: Metadata = {
  title: "À qui nous servons | Rénov Habitat",
  description:
    "Propriétés résidentielles, commerciales et professionnels de l'assurance : qui nous accompagnons à Toulouse.",
};

export default function ClientelePage() {
  return (
    <>
      <PageIntro
        eyebrow="Nos clients"
        title="À qui nous servons"
        intro="Chaque clientèle a des contraintes différentes — délais, locataires, dossiers d'assurance. Voici comment nous nous adaptons à chacune."
      />
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-10">
          {clientele.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8 border-t border-rule pt-7">
                  <div className="flex flex-col gap-3">
                    <Icon />
                    <h2 className="m-0 text-[19px] font-bold text-ink">{group.title}</h2>
                    <p className="m-0 max-w-[440px] text-[14px] leading-[1.6] text-body">
                      {group.body}
                    </p>
                  </div>
                  <ul className="m-0 flex flex-col gap-2 p-0 text-[13.5px] text-body">
                    {group.items.map((item) => (
                      <li key={item} className="list-none border-b border-rule pb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
