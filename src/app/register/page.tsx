import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/forms/auth-form";

export const metadata: Metadata = {
  title: "ثبت‌نام",
  description: "ایجاد حساب کاربری در Estatemint.",
};

export default function RegisterPage() {
  return (
    <div className="container-page grid min-h-[calc(100vh-72px)] items-center py-12 lg:grid-cols-[1fr_460px]">
      <section className="hidden max-w-xl lg:block">
        <p className="text-sm font-bold text-orange-700">شروع همکاری</p>
        <h1 className="mt-3 text-4xl font-black leading-[3.5rem] text-zinc-950">
          حساب کاربری Estatemint بسازید
        </h1>
        <p className="mt-4 leading-8 text-zinc-600">
          ثبت‌نام به ماژول Auth بک‌اند متصل است و حساب جدید با نقش پیش‌فرض خریدار ساخته می‌شود.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-black text-zinc-950 lg:hidden">ثبت‌نام</h1>
        <div className="mt-5 lg:mt-0">
          <AuthForm mode="register" />
        </div>
        <p className="mt-5 text-center text-sm text-zinc-600">
          قبلا ثبت‌نام کرده‌اید؟{" "}
          <Link href="/login" className="font-bold text-[#123c35]">
            وارد شوید
          </Link>
        </p>
      </section>
    </div>
  );
}
