import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import ClosingCta from "@/components/ClosingCta";
import { servicesHub } from "@/content/site";

export const metadata: Metadata = {
  title: "Nos services | Rénov Habitat",
  description:
    "Rénovation et remise en état après sinistre à Toulouse : découvrez les deux volets de nos services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ce que nous faisons"
        title="Nos services"
        intro={servicesHub.intro}
      />
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {servicesHub.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <Link
                href={cat.href}
                className="group block h-full border border-rule p-7 hover:border-ink"
              >
                <h2 className="m-0 mb-3 text-[20px] font-bold tracking-[0.01em] text-ink uppercase">
                  {cat.title}
                </h2>
                <p className="m-0 text-[14px] leading-[1.6] text-body">{cat.body}</p>
                <span className="mt-5 inline-block text-[11px] font-bold tracking-[0.09em] text-blue uppercase group-hover:underline">
                  Voir le détail →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
