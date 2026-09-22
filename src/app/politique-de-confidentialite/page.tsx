import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { privacyPolicy } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Rénov Habitat",
  description: "Comment Rénov Habitat recueille, utilise et protège vos renseignements personnels.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow={privacyPolicy.updated}
        title="Politique de confidentialité"
      />
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-8">
          {privacyPolicy.sections.map((section, i) => (
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
