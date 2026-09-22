import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import ClosingCta from "@/components/ClosingCta";
import { testimonials, avisPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Avis clients | Rénov Habitat",
  description: "Note moyenne de 5 étoiles sur plus de 100 avis Google.",
};

export default function AvisPage() {
  const allReviews = [...testimonials, ...avisPage.extraTestimonials];

  return (
    <>
      <PageIntro eyebrow="Nos clients" title="Avis clients" intro={avisPage.intro} />
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {allReviews.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <figure
                className={`m-0 flex h-full min-h-[190px] flex-col gap-3 px-6 pt-[22px] pb-5 ${
                  t.tone === "light" ? "bg-pale-blue" : "bg-pale-blue-2"
                }`}
              >
                <span className="text-[52px] leading-[0.55] font-extrabold tracking-[-0.04em] text-quote">
                  &ldquo;
                </span>
                <blockquote className="m-0 flex-1 text-[13.5px] leading-[1.55] text-testimonial-text">
                  {t.quote}
                </blockquote>
                <figcaption className="text-[13px] font-bold text-ink">{t.name}</figcaption>
                <div className="text-[18px] leading-none tracking-[3px] text-gold">★★★★★</div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
