import Link from "next/link";
import PhotoTile from "./PhotoTile";
import Reveal from "./Reveal";
import { services } from "@/content/site";

export default function ServicesGrid() {
  return (
    <section className="px-6 pt-[34px]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <h2 className="m-0 mb-4 text-[clamp(20px,2.2vw,26px)] font-bold tracking-[0.01em] text-ink uppercase">
            Nos services
          </h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(max(170px,23%),1fr))] gap-2">
          {services.map((tile, i) =>
            "placeholder" in tile && tile.placeholder ? (
              <Reveal key={tile.label} delay={i * 0.05}>
                <Link
                  href={tile.href}
                  className="relative block aspect-[4/3] overflow-hidden"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg,#E6E6EA 0 10px,#EFEFF2 10px 20px)",
                  }}
                >
                  <span className="absolute inset-x-2.5 top-0 bottom-[34px] flex items-center justify-center text-center font-mono text-[10px] tracking-[0.08em] text-[#8A8A93]">
                    {tile.caption}
                  </span>
                  <span className="absolute bottom-2.5 left-3 text-[13px] font-semibold text-ink">
                    {tile.label}
                  </span>
                </Link>
              </Reveal>
            ) : (
              <Reveal key={tile.label} delay={i * 0.05}>
                <PhotoTile
                  image={(tile as { image: string }).image}
                  label={tile.label}
                  href={tile.href}
                  aspectClass="aspect-[4/3]"
                  gradient="linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)"
                  labelClassName="absolute bottom-2.5 left-3 text-[13px] font-semibold text-white"
                  sizes="(min-width: 1180px) 271px, (min-width: 740px) 23vw, 45vw"
                />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
