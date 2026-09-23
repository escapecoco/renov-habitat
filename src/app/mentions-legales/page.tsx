import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { legalNotice } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales | Rénov Habitat",
  description: "Mentions légales du site de Rénov Habitat.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageIntro eyebrow={legalNotice.updated} title="Mentions légales" />
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-8">
          {legalNotice.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.04}>
              <div>
                <h2 className="m-0 mb-2 text-[15px] font-bold text-ink">{section.title}</h2>
                <p className="m-0 text-[13.5px] leading-[1.65] text-body">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
