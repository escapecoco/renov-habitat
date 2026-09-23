import Image from "next/image";
import Link from "next/link";
import { brand, contact, nav, ctaLabel } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-7 px-6 py-3.5">
        <Link href="/" className="flex items-center whitespace-nowrap">
          <Image
            src="/logo/logo-full.webp"
            alt={brand.legalName}
            width={660}
            height={220}
            priority
            className="-my-2 h-14 w-auto"
          />
        </Link>

        <div className="flex flex-col gap-0.5 text-[11px] leading-[1.35] text-body">
          <span>{contact.emergencyLabel}</span>
          <span className="font-bold text-ink">
            {contact.phonePrimaryDisplay} ou {contact.phoneSecondaryDisplay}
          </span>
        </div>

        <nav className="ml-auto flex items-center gap-[26px] text-[13px] font-medium text-[#2A2A33]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue">
              {item.label}
            </Link>
          ))}
          <Link
            href="/nous-contacter"
            className="rounded-[2px] bg-blue px-[18px] py-[11px] text-[11px] font-bold tracking-[0.06em] text-white uppercase hover:bg-blue-hover hover:text-white"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
