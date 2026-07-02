"use client";

import { Lock, Mail, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { register } from "@/lib/api/auth";
import { getApiErrorMessage, getApiFieldErrors } from "@/lib/api/client";
import { useAuth } from "@/lib/auth-context";

type AuthFormProps = {
  mode: "login" | "register";
};

type FieldErrors = Record<string, string>;

const inputClass =
  "h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <span className="text-xs font-semibold text-red-700">{message}</span>;
}

export function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const router = useRouter();
  const auth = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const helperText = useMemo(
    () =>
      isRegister
        ? "ثبت‌نام عمومی در بک‌اند با نقش پیش‌فرض خریدار انجام می‌شود."
        : "می‌توانید با کاربر seed شده buyer@estatemint.local و رمز Password123! وارد شوید.",
    [isRegister],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();

    const nextErrors: FieldErrors = {};

    if (!email) {
      nextErrors.email = "ایمیل را وارد کنید.";
    }

    if (!password) {
      nextErrors.password = "رمز عبور را وارد کنید.";
    } else if (password.length < 8) {
      nextErrors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد.";
    }

    if (isRegister) {
      if (!firstName) {
        nextErrors.firstName = "نام را وارد کنید.";
      }

      if (!lastName) {
        nextErrors.lastName = "نام خانوادگی را وارد کنید.";
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      if (isRegister) {
        await register({ email, password, firstName, lastName });
        await auth.login({ email, password });
      } else {
        await auth.login({ email, password });
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      setFormError(getApiErrorMessage(error));
      setFieldErrors(getApiFieldErrors(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="grid gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
      noValidate
    >
      {isRegister ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-zinc-800">
            نام
            <span className="relative">
              <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                name="firstName"
                className={inputClass}
                placeholder="سارا"
                maxLength={80}
              />
            </span>
            <FieldError message={fieldErrors.firstName} />
          </label>

          <label className="grid gap-2 text-sm font-bold text-zinc-800">
            نام خانوادگی
            <span className="relative">
              <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                name="lastName"
                className={inputClass}
                placeholder="احمدی"
                maxLength={80}
              />
            </span>
            <FieldError message={fieldErrors.lastName} />
          </label>
        </div>
      ) : null}

      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        ایمیل
        <span className="relative">
          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            name="email"
            type="email"
            className={`${inputClass} text-left placeholder:text-right`}
            placeholder="name@example.com"
            maxLength={254}
            autoComplete="email"
          />
        </span>
        <FieldError message={fieldErrors.email} />
      </label>

      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        رمز عبور
        <span className="relative">
          <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            name="password"
            type="password"
            className={inputClass}
            placeholder="حداقل ۸ کاراکتر"
            minLength={8}
            maxLength={128}
            autoComplete={isRegister ? "new-password" : "current-password"}
          />
        </span>
        <FieldError message={fieldErrors.password} />
      </label>

      {formError ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700">
          {formError}
        </p>
      ) : null}

      <p className="rounded-md bg-[#e8eef1] px-4 py-3 text-xs leading-6 text-zinc-600">
        {helperText}
      </p>

      <Button type="submit" className="mt-2 w-full" disabled={isSubmitting}>
        {isSubmitting
          ? "در حال ارسال..."
          : isRegister
            ? "ایجاد حساب کاربری"
            : "ورود به حساب"}
      </Button>
    </form>
  );
}
