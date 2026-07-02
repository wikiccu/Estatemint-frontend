"use client";

import Link from "next/link";
import { Building2, LogOut, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "خانه", href: "/" },
  { label: "املاک", href: "/properties" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, isBootstrapping, logout, user } = useAuth();
  const fullName = user ? `${user.firstName} ${user.lastName}` : "";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f4f6f2]/90 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Estatemint">
          <span className="flex size-10 items-center justify-center rounded-md bg-[#123c35] text-white shadow-sm">
            <Building2 size={22} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-normal text-[#15171a]">Estatemint</span>
            <span className="mt-1 text-xs font-medium text-[#667085]">بازار هوشمند املاک</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-white hover:text-[#123c35]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isAuthenticated ? (
            <>
              <div className="flex h-11 items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-bold text-zinc-700">
                <UserRound size={17} />
                {fullName}
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-zinc-700 transition hover:bg-white hover:text-[#123c35]"
                onClick={logout}
              >
                <LogOut size={17} />
                خروج
              </button>
            </>
          ) : (
            <>
              <ButtonLink href="/login" variant="ghost">
                {isBootstrapping ? "..." : "ورود"}
              </ButtonLink>
              <ButtonLink href="/contact">مشاوره رایگان</ButtonLink>
            </>
          )}
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
          {[
            ...navigation,
            ...(isAuthenticated
              ? [{ label: `حساب: ${fullName}`, href: "#" }]
              : [
                  { label: "ورود", href: "/login" },
                  { label: "ثبت‌نام", href: "/register" },
                ]),
          ].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-zinc-700 hover:bg-[#f4f6f2]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          {isAuthenticated ? (
            <button
              type="button"
              className="rounded-md px-3 py-3 text-right text-sm font-semibold text-zinc-700 hover:bg-[#f4f6f2]"
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
            >
              خروج
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
