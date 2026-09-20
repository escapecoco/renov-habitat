import { partners } from "@/content/site";

function PartnerLabel({ p }: { p: (typeof partners)[number] }) {
  return (
    <span
      className="shrink-0 text-[#6E6E78]"
      style={{
        fontSize: p.size,
        fontWeight: p.weight,
        letterSpacing: p.tracking,
        fontStyle: p.italic ? "italic" : "normal",
      }}
    >
      {p.name}
    </span>
  );
}

export default function Partners() {
  return (
    <section className="overflow-hidden px-6 pt-11 pb-10">
      <div
        className="mx-auto max-w-[1180px]"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-x-12 hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((p, i) => (
            <PartnerLabel key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
