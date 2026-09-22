import PhotoTile from "./PhotoTile";
import Reveal from "./Reveal";
import { restorationServices } from "@/content/site";

export default function RestorationMosaic() {
  return (
    <section id="services" className="px-6 pt-2">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <h2 className="m-0 mb-[18px] text-[clamp(20px,2.2vw,26px)] font-bold tracking-[0.01em] text-ink uppercase">
            Nos services de remise en état
          </h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-2">
          {restorationServices.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.08}>
              <PhotoTile
                image={tile.image}
                label={tile.label}
                href={tile.href}
                aspectClass="aspect-video"
                gradient="linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)"
                labelClassName="absolute left-4 bottom-3.5 text-[clamp(17px,1.7vw,21px)] font-bold text-white"
                sizes="(min-width: 1180px) 586px, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
