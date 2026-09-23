import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import { contactForm } from "@/content/site";

export const metadata: Metadata = {
  title: "Nous contacter | Rénov Habitat-TLS",
  description: "Demandez une soumission gratuite en quelques étapes.",
};

export default function NousContacterPage() {
  return (
    <>
      <PageIntro eyebrow="Nous contacter" title={contactForm.heading} intro={contactForm.intro} />
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[640px]">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
