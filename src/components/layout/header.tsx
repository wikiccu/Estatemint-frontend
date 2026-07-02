"use client";

import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "خانه", href: "/" },
  { label: "املاک", href: "/properties" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f8f5ef]/92 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Estatemint">
          <span className="flex size-10 items-center justify-center rounded-md bg-[#173f35] text-white">
            <Building2 size={22} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-normal text-zinc-950">Estatemint</span>
            <span className="mt-1 text-xs font-medium text-zinc-500">بازار هوشمند املاک</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-white hover:text-[#173f35]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/login" variant="ghost">
            ورود
          </ButtonLink>
          <ButtonLink href="/contact">مشاوره رایگان</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-zinc-200 bg-white md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="container-page flex flex-col gap-2 py-4" aria-label="ناوبری موبایل">
          {[...navigation, { label: "ورود", href: "/login" }, { label: "ثبت‌نام", href: "/register" }].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-zinc-700 hover:bg-stone-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
