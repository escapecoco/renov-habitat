import Image from "next/image";
import Link from "next/link";
import { brand, contact, nav, ctaLabel } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-4 px-6 py-3 sm:gap-7 sm:py-3.5">
        <Link href="/" className="flex items-center whitespace-nowrap">
          <Image
            src="/logo/logo-full.webp"
            alt={brand.legalName}
            width={660}
            height={220}
            priority
            className="-my-2 h-9 w-auto sm:h-14"
          />
        </Link>

        <a
          href={contact.phonePrimaryHref}
          className="ml-auto text-[13px] font-bold text-ink hover:text-blue sm:hidden"
        >
          {contact.phonePrimaryDisplay}
        </a>

        <div className="hidden flex-col gap-0.5 text-[11px] leading-[1.35] text-body sm:flex">
          <span>{contact.emergencyLabel}</span>
          <span className="font-bold text-ink">
            {contact.phonePrimaryDisplay} ou {contact.phoneSecondaryDisplay}
          </span>
        </div>

        <nav className="hidden items-center gap-[26px] text-[13px] font-medium text-[#2A2A33] sm:ml-auto sm:flex">
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
