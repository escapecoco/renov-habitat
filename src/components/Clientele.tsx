import Link from "next/link";
import Reveal from "./Reveal";
import { HouseIcon, BuildingIcon, PersonIcon } from "./icons";
import { clientele } from "@/content/site";

const icons = { house: HouseIcon, building: BuildingIcon, person: PersonIcon };

export default function Clientele() {
  return (
    <section id="clientele" className="px-6 pt-11 pb-[52px]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <h2 className="m-0 mb-[26px] text-[clamp(20px,2.2vw,26px)] font-bold tracking-[0.01em] text-ink uppercase">
            À qui nous servons
          </h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-10 gap-y-7">
          {clientele.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="flex flex-col gap-2.5">
                  <Icon />
                  <h3 className="my-0.5 text-[14px] font-bold text-ink">{group.title}</h3>
                  <ul className="m-0 flex flex-col gap-[5px] p-0 text-[13px] text-body">
                    {group.items.map((item) => (
                      <li key={item} className="list-none">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Link
          href="/clientele"
          className="mt-[26px] inline-flex items-center gap-[14px] border-[1.5px] border-ink px-5 py-3 text-[11px] font-bold tracking-[0.09em] text-ink uppercase hover:bg-ink hover:text-white"
        >
          Voir tous <span className="text-[14px]">→</span>
        </Link>
      </div>
    </section>
  );
}
