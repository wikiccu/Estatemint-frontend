import type { Metadata } from "next";
import Image from "next/image";
import { Award, Gem, ShieldCheck, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره چشم‌انداز و تجربه محصول Estatemint.",
};

const values = [
  {
    title: "شفافیت اطلاعات",
    text: "نمایش قیمت، موقعیت، مشخصات و امکانات با زبان ساده و قابل مقایسه.",
    icon: ShieldCheck,
  },
  {
    title: "کیفیت تجربه",
    text: "رابط کاربری فارسی، RTL و مناسب کاربرانی که سریع تصمیم می‌گیرند.",
    icon: Gem,
  },
  {
    title: "آمادگی محصولی",
    text: "ساختار فرانت‌اند برای اتصال آینده به جست‌وجو، علاقه‌مندی و قرار بازدید آماده است.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black text-[#9b7138]">درباره Estatemint</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.45] text-zinc-950 md:text-5xl">
            ساختن تجربه‌ای قابل اعتماد برای بازار املاک
          </h1>
          <p className="mt-5 leading-8 text-zinc-600">
            Estatemint با نگاه محصولی طراحی شده است: یک رابط لوکس، سریع و فارسی برای
            نمایش املاک، آماده اتصال به بک‌اند حرفه‌ای و توسعه مرحله‌به‌مرحله قابلیت‌های واقعی.
          </p>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1300&q=85"
            alt="فضای نشیمن ملک لوکس"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="ارزش‌های طراحی"
            title="فراتر از یک قالب ساده"
            description="این پروژه به عنوان پایه‌ای تمیز و قابل توسعه ساخته شده، نه یک صفحه نمایشی بی‌ساختار."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <value.icon className="text-[#173f35]" size={30} />
                <h2 className="mt-6 text-xl font-black text-zinc-950">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Next.js", "App Router"],
            ["TypeScript", "تایپ‌های دامنه"],
            ["Tailwind CSS", "طراحی واکنش‌گرا"],
            ["RTL", "فارسی از پایه"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg bg-[#173f35] p-6 text-white">
              <Award className="text-[#f4dfbd]" size={26} />
              <h2 className="mt-5 text-xl font-black">{title}</h2>
              <p className="mt-2 text-sm text-stone-100">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
