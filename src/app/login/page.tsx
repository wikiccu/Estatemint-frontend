import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/forms/auth-form";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود کاربران Estatemint.",
};

export default function LoginPage() {
  return (
    <div className="container-page grid min-h-[calc(100vh-72px)] items-center py-12 lg:grid-cols-[1fr_460px]">
      <section className="hidden max-w-xl lg:block">
        <p className="text-sm font-bold text-orange-700">ورود امن</p>
        <h1 className="mt-3 text-4xl font-black leading-[3.5rem] text-zinc-950">
          به حساب Estatemint خود وارد شوید
        </h1>
        <p className="mt-4 leading-8 text-zinc-600">
          این فرم برای اتصال آینده به احراز هویت JWT بک‌اند آماده شده و فعلا جریان نمایشی دارد.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-black text-zinc-950 lg:hidden">ورود به حساب</h1>
        <div className="mt-5 lg:mt-0">
          <AuthForm mode="login" />
        </div>
        <p className="mt-5 text-center text-sm text-zinc-600">
          حساب ندارید؟{" "}
          <Link href="/register" className="font-bold text-teal-800">
            ثبت‌نام کنید
          </Link>
        </p>
      </section>
    </div>
  );
}
