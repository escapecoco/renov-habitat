import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { closingCta, ctaLabel } from "@/content/site";

export default function ClosingCta() {
  return (
    <section id="soumission" className="px-6 pb-[34px]">
      <div className="relative mx-auto flex min-h-[clamp(220px,24vw,300px)] max-w-[1180px] items-center justify-center overflow-hidden px-5 py-[38px]">
        <Image
          src="/images/hero-salon.webp"
          alt="Intérieur rénové par APL Rénovation"
          fill
          sizes="(min-width: 1180px) 1180px, 100vw"
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/[0.18]" />
        <Reveal className="relative flex w-full max-w-[620px] flex-col items-center gap-3 bg-white px-7 py-[26px] text-center">
          <h2 className="m-0 text-[clamp(17px,1.9vw,22px)] font-bold tracking-[0.01em] text-ink uppercase">
            {closingCta.heading}
          </h2>
          <p className="m-0 text-[13px] text-body">{closingCta.body}</p>
          <Link
            href="#top"
            className="bg-blue px-5 py-3 text-[11px] font-bold tracking-[0.07em] text-white uppercase hover:bg-blue-hover hover:text-white"
          >
            {ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
