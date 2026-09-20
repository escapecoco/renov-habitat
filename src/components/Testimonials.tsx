import Reveal from "./Reveal";
import {
  testimonials,
  googleReviewsLabel,
  testimonialsSubline,
} from "@/content/site";

export default function Testimonials() {
  return (
    <section className="bg-blue px-6 pt-[46px] pb-10">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <h2 className="m-0 text-[clamp(20px,2.2vw,26px)] font-bold text-white uppercase">
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-2 mb-4 text-[13px] text-[#DCE4FF]">{testimonialsSubline}</p>
          <span className="inline-block bg-ink px-[18px] py-[11px] text-[11px] font-bold tracking-[0.07em] text-white uppercase">
            {googleReviewsLabel}
          </span>
        </Reveal>

        <div
          className="sc-track mt-[22px] grid grid-flow-col gap-4 overflow-x-auto pb-1"
          style={{
            gridAutoColumns: "minmax(min(300px,80%),1fr)",
            scrollSnapType: "x mandatory",
          }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={`m-0 flex min-h-[210px] flex-col gap-[14px] px-6 pt-[22px] pb-5 ${
                t.tone === "light" ? "bg-pale-blue" : "bg-pale-blue-2"
              }`}
              style={{ scrollSnapAlign: "start" }}
            >
              <span className="text-[76px] leading-[0.55] font-extrabold tracking-[-0.04em] text-quote">
                &ldquo;
              </span>
              <blockquote className="m-0 flex-1 text-[14px] leading-[1.55] text-testimonial-text">
                {t.quote}
              </blockquote>
              <figcaption className="text-[13px] font-bold text-ink">{t.name}</figcaption>
              <div className="text-[24px] leading-none tracking-[4px] text-gold">★★★★★</div>
            </figure>
          ))}
        </div>

        <div className="mt-[18px] flex justify-end gap-3">
          <span
            aria-hidden="true"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-white bg-transparent text-[15px] text-white"
          >
            ‹
          </span>
          <span
            aria-hidden="true"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-white bg-transparent text-[15px] text-white"
          >
            ›
          </span>
        </div>
      </div>
    </section>
  );
}
