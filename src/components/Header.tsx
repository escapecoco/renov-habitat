"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, contact, nav, ctaLabel } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

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
            className="-my-2 h-12 w-auto sm:h-14"
          />
        </Link>

        <div className="ml-auto flex items-center gap-4 sm:hidden">
          <a
            href={contact.phonePrimaryHref}
            className="text-[13px] font-bold text-ink hover:text-blue"
          >
            {contact.phonePrimaryDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0B0B0F" strokeWidth={1.8}>
              {open ? (
                <path d="M4 4 L18 18 M18 4 L4 18" strokeLinecap="round" />
              ) : (
                <path d="M2 6 H20 M2 11 H20 M2 16 H20" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden flex-col gap-0.5 text-[11px] leading-[1.35] text-body sm:flex">
          <span>{contact.emergencyLabel}</span>
          <a href={contact.phonePrimaryHref} className="font-bold text-ink hover:text-blue">
            {contact.phonePrimaryDisplay}
          </a>
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

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 border-t border-rule px-6 py-5">
            <span className="text-[11px] text-body">{contact.emergencyLabel}</span>
            <nav className="flex flex-col gap-3.5 text-[15px] font-medium text-ink">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/nous-contacter"
              onClick={() => setOpen(false)}
              className="rounded-[2px] bg-blue px-[18px] py-3 text-center text-[11px] font-bold tracking-[0.06em] text-white uppercase"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
