import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { hero, ctaLabel } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative p-0">
      <div className="relative mx-auto w-full">
        <div className="relative flex h-[clamp(360px,44vw,560px)] flex-col items-center justify-center gap-[34px] px-6 pt-10 pb-[70px] text-center">
          <Image
            src="/images/hero-salon.webp"
            alt="Salon rénové, lumineux et ouvert"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,10,16,0.22) 0%, rgba(8,10,16,0.42) 100%)",
            }}
          />
          <Reveal className="relative z-10">
            <h1
              className="m-0 max-w-[820px] text-[clamp(30px,4.2vw,52px)] leading-[1.14] font-bold tracking-[-0.02em] text-white"
              style={{ textWrap: "balance" }}
            >
              {hero.heading}
            </h1>
          </Reveal>
        </div>

        <div className="relative mx-auto -mt-[42px] flex max-w-[920px] justify-center bg-[#F2F2F3] px-[34px] pt-[46px] pb-[26px]">
          <Link
            href="/nous-contacter"
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue px-[34px] py-[18px] text-[13.5px] font-bold tracking-[0.07em] whitespace-nowrap text-white uppercase hover:bg-blue-hover hover:text-white"
          >
            {ctaLabel}
          </Link>
          <p className="m-0 max-w-[600px] text-center text-[clamp(14px,1.5vw,17px)] leading-[1.6] font-bold text-[#15151C]">
            {hero.reassurance}
          </p>
        </div>
      </div>
    </section>
  );
}
