import Reveal from "./Reveal";

export default function DetailList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-10 gap-y-8">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05}>
          <div className="border-t border-rule pt-4">
            <h3 className="m-0 mb-2 text-[15px] font-bold text-ink">{item.title}</h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-body">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
