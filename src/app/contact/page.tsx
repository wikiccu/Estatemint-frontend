import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ConsultationForm } from "@/components/property/consultation-form";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباط با تیم Estatemint و ثبت درخواست مشاوره.",
};

export default function ContactPage() {
  return (
    <div className="container-page grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
      <section>
        <p className="text-sm font-black text-[#9b7138]">تماس با Estatemint</p>
        <h1 className="mt-3 text-4xl font-black leading-[1.45] text-zinc-950 md:text-5xl">
          برای انتخاب ملک بعدی، گفتگو را شروع کنید
        </h1>
        <p className="mt-5 leading-8 text-zinc-600">
          فرم این صفحه فعلا استاتیک است و برای اتصال آینده به ماژول قرار ملاقات و پیام‌های بک‌اند آماده شده است.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            { label: "تلفن", value: "۰۲۱ ۹۱۰۰ ۴۵۸۰", icon: Phone },
            { label: "ایمیل", value: "hello@estatemint.local", icon: Mail },
            { label: "آدرس", value: "تهران، ایران", icon: MapPin },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-lg border border-stone-200 bg-white p-5">
              <span className="flex size-11 items-center justify-center rounded-md bg-[#173f35]/10 text-[#173f35]">
                <item.icon size={22} />
              </span>
              <div>
                <p className="text-xs font-bold text-zinc-500">{item.label}</p>
                <p className="mt-1 font-black text-zinc-950">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="h-fit rounded-lg border border-stone-200 bg-white p-6 shadow-xl md:p-8">
        <h2 className="text-2xl font-black text-zinc-950">ثبت درخواست مشاوره</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          اطلاعات تماس و توضیحات خود را وارد کنید تا در نسخه متصل به بک‌اند، درخواست شما ثبت شود.
        </p>
        <div className="mt-6">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}
