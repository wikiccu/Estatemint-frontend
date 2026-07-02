import { Lock, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";

  return (
    <form className="grid gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      {isRegister ? (
        <label className="grid gap-2 text-sm font-bold text-zinc-800">
          نام و نام خانوادگی
          <span className="relative">
            <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              className="h-12 w-full rounded-md border border-zinc-200 bg-stone-50 pr-11 pl-4 font-normal outline-none placeholder:text-zinc-400 focus:border-teal-700 focus:bg-white"
              placeholder="مثلا سارا احمدی"
            />
          </span>
        </label>
      ) : null}

      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        ایمیل
        <span className="relative">
          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="email"
            className="h-12 w-full rounded-md border border-zinc-200 bg-stone-50 pr-11 pl-4 text-left font-normal outline-none placeholder:text-right placeholder:text-zinc-400 focus:border-teal-700 focus:bg-white"
            placeholder="name@example.com"
          />
        </span>
      </label>

      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        رمز عبور
        <span className="relative">
          <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="password"
            className="h-12 w-full rounded-md border border-zinc-200 bg-stone-50 pr-11 pl-4 font-normal outline-none placeholder:text-zinc-400 focus:border-teal-700 focus:bg-white"
            placeholder="حداقل ۸ کاراکتر"
          />
        </span>
      </label>

      {isRegister ? (
        <p className="rounded-md bg-stone-50 px-4 py-3 text-xs leading-6 text-zinc-500">
          با ثبت‌نام، حساب شما برای اتصال به سرویس احراز هویت Estatemint آماده می‌شود.
        </p>
      ) : null}

      <Button type="button" className="mt-2 w-full">
        {isRegister ? "ایجاد حساب کاربری" : "ورود به حساب"}
      </Button>

      <p className="text-center text-xs leading-6 text-zinc-500">
        اعتبارسنجی سمت کاربر و اتصال JWT در مرحله یکپارچه‌سازی API تکمیل می‌شود.
      </p>
    </form>
  );
}
