import Image from "next/image";
import Link from "next/link";
import {
  brand,
  contact,
  trustBadges,
  footerColumns,
  legalLinks,
  copyright,
} from "@/content/site";

function BadgeShape({ color, shape }: { color: string; shape: "rect" | "diamond" | "circle" }) {
  if (shape === "rect") {
    return <span className="inline-block h-4 w-[22px]" style={{ background: color }} />;
  }
  if (shape === "diamond") {
    return (
      <span
        className="inline-block h-[18px] w-[18px] rotate-45"
        style={{ background: color }}
      />
    );
  }
  return <span className="inline-block h-[18px] w-[18px] rounded-full" style={{ background: color }} />;
}

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-[34px] pb-5 text-white">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-b border-white/14 pb-7">
          <span className="flex max-w-[220px] items-center gap-2.5 text-[19px] leading-[1.2] font-bold">
            <Image src="/logo/logo-icon.webp" alt="" width={28} height={28} />
            {brand.legalName}
          </span>
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5">
              <BadgeShape color={badge.color} shape={badge.shape} />
              <span className="text-[12px] leading-[1.3] font-semibold whitespace-pre-line">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-x-8 gap-y-[26px] py-[26px]">
          <div className="flex flex-col gap-[9px]">
            <h4 className="mt-0 mb-[3px] text-[13px] font-bold">Contact</h4>
            <span className="text-[12.5px] text-[#C9C9D2]">{contact.phonePrimaryDisplay}</span>
            <span className="text-[12.5px] text-[#C9C9D2]">{contact.phoneSecondaryDisplay}</span>
            <span className="text-[12.5px] text-[#C9C9D2]">{contact.email}</span>
            <span className="text-[12.5px] text-[#C9C9D2]">{contact.city}</span>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-[9px]">
              <h4 className="mt-0 mb-[3px] text-[13px] font-bold">{col.title}</h4>
              {col.links.map((link) =>
                link.href.startsWith("#") ? (
                  <span key={link.label} className="text-[12.5px] text-[#C9C9D2]">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[12.5px] text-[#C9C9D2] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-white/14 pt-4 text-[11.5px] text-[#9A9AA6]">
          <span>{copyright}</span>
          <span className="flex gap-[18px]">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-[#9A9AA6] hover:text-white">
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
