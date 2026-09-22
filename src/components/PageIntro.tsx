import Reveal from "./Reveal";

export default function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="px-6 pt-11 pb-9">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          {eyebrow ? (
            <p className="m-0 mb-2 text-[11px] font-bold tracking-[0.09em] text-blue uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="m-0 text-[clamp(28px,3.6vw,42px)] leading-[1.14] font-bold tracking-[-0.01em] text-ink uppercase">
            {title}
          </h1>
          {intro ? (
            <p className="m-0 mt-4 max-w-[640px] text-[15px] leading-[1.6] text-body">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
