import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import DetailList from "@/components/DetailList";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import ClosingCta from "@/components/ClosingCta";
import { aboutPage, trustBadges } from "@/content/site";

export const metadata: Metadata = {
  title: "À propos | Rénov Habitat-TLS",
  description:
    "Entreprise française de rénovation et de remise en état basée à Toulouse, certifiée IICRC, garantie 3 ans.",
};

export default function AProposPage() {
  return (
    <>
      <PageIntro eyebrow="L'entreprise" title="À propos" intro={aboutPage.intro} />

      <section className="px-6 pb-10">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="m-0 max-w-[720px] text-[15px] leading-[1.7] text-body">
              {aboutPage.story}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1180px]">
          <DetailList items={aboutPage.values} />
        </div>
      </section>

      <Stats />

      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-10 gap-y-4 border-t border-rule pt-8">
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className="text-[12.5px] font-semibold whitespace-pre-line text-body"
            >
              {badge.label.replace("\n", " ")}
            </span>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
