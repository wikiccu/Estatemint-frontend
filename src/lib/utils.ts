import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, currency = "تومان") {
  return `${new Intl.NumberFormat("fa-IR").format(value)} ${currency}`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}
