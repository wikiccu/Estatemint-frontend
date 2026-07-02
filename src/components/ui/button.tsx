import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#173f35] text-white shadow-sm hover:bg-[#0f2d27] focus-visible:outline-[#173f35]",
  secondary:
    "bg-[#b88945] text-white shadow-sm hover:bg-[#9b7138] focus-visible:outline-[#b88945]",
  ghost: "text-zinc-700 hover:bg-zinc-100 focus-visible:outline-zinc-500",
  outline:
    "border border-stone-200 bg-white text-zinc-900 hover:border-[#173f35] hover:text-[#173f35] focus-visible:outline-[#173f35]",
};

const baseClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(baseClass, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(baseClass, variants[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
