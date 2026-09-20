import { partners } from "@/content/site";

export default function Partners() {
  return (
    <section className="px-6 pt-11 pb-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-12 gap-y-8">
        {partners.map((p) => (
          <span
            key={p.name}
            className="text-[#6E6E78]"
            style={{
              fontSize: p.size,
              fontWeight: p.weight,
              letterSpacing: p.tracking,
              fontStyle: p.italic ? "italic" : "normal",
            }}
          >
            {p.name}
          </span>
        ))}
      </div>
    </section>
  );
}
