import Reveal from "./Reveal";
import { BriefcaseIcon, CalendarIcon } from "./icons";
import { stats } from "@/content/site";

export default function Stats() {
  return (
    <section id="apropos" className="px-6 pt-[30px] pb-[26px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[22px] text-center">
        {stats.map((s, i) => (
          <Reveal key={s.caption} delay={i * 0.1}>
            <div className="flex flex-col items-center gap-1">
              {s.icon === "stars" ? (
                <div className="text-[15px] tracking-[2px] text-blue">★★★★★</div>
              ) : s.icon === "briefcase" ? (
                <BriefcaseIcon />
              ) : (
                <CalendarIcon />
              )}
              <strong className="text-[19px] font-bold text-ink">{s.value}</strong>
              <span className="text-[12px] text-[#6E6E78]">{s.caption}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
