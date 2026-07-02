import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  HomeIcon,
  KeyRound,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { PropertyCard } from "@/components/property/property-card";
import { PropertySearch } from "@/components/property/property-search";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProperties, latestProperties } from "@/data/properties";

const categories = [
  { title: "آپارتمان‌های لوکس", count: "۴۲ ملک", icon: Building2 },
  { title: "ویلا و باغ‌ویلا", count: "۱۸ ملک", icon: HomeIcon },
  { title: "دفاتر اداری", count: "۱۲ ملک", icon: KeyRound },
  { title: "موقعیت‌های ممتاز", count: "۳۱ ملک", icon: MapPinned },
];

const reasons = [
  {
    title: "انتخاب‌های غربال‌شده",
    text: "هر ملک با اطلاعات کلیدی، تصاویر باکیفیت و جزئیات قابل مقایسه نمایش داده می‌شود.",
    icon: BadgeCheck,
  },
  {
    title: "تجربه سریع و شفاف",
    text: "ساختار صفحات برای جست‌وجوی سریع، فیلترهای کاربردی و اتصال آینده به API آماده است.",
    icon: TrendingUp,
  },
  {
    title: "اعتماد در تصمیم‌گیری",
    text: "فرم‌های مشاوره و درخواست بازدید برای مسیرهای آینده علاقه‌مندی و قرار ملاقات طراحی شده‌اند.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a2925] text-white">
        <div className="absolute inset-0">
          <Image
            src="/placeholders/hero-property.svg"
            alt="ویلای مدرن برای معرفی Estatemint"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.42]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a2925] via-[#123c35]/86 to-[#315d78]/32" />
        </div>

        <div className="container-page relative grid min-h-[720px] items-center gap-10 py-14 lg:grid-cols-[1fr_460px]">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-[#f7d999] backdrop-blur">
              <Sparkles size={17} />
              تجربه‌ای لوکس برای جست‌وجوی هوشمند ملک
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.35] text-white md:text-6xl">
              خانه‌ای که شایسته سبک زندگی شماست.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-9 text-stone-100 md:text-lg">
              Estatemint یک ویترین مدرن فارسی برای کشف، مقایسه و انتخاب املاک ممتاز است؛
              با طراحی RTL، کارت‌های حرفه‌ای و ساختاری آماده برای توسعه محصول واقعی.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["+۱۲۰", "ملک منتخب"],
                ["۸ شهر", "پوشش فعال"],
                ["۲۴ ساعته", "آماده مشاوره"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:bg-white/15">
                  <strong className="text-2xl font-black text-[#f7d999]">{value}</strong>
                  <p className="mt-1 text-sm text-stone-100">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/20 bg-white/96 p-5 text-zinc-950 shadow-2xl">
            <div className="mb-4">
              <p className="text-sm font-black text-[#c9783d]">جست‌وجوی سریع</p>
              <h2 className="mt-1 text-2xl font-black">ملک مناسب خود را پیدا کنید</h2>
            </div>
            <PropertySearch compact />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="دسته‌بندی‌ها"
          title="مسیرهای محبوب برای شروع جست‌وجو"
          description="دسته‌بندی‌ها با ساختار ساده و قابل توسعه طراحی شده‌اند تا بعدا به فیلترهای واقعی متصل شوند."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {categories.map((item) => (
            <article
              key={item.title}
            className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#123c35]/25 hover:shadow-xl"
            >
              <div className="flex size-12 items-center justify-center rounded-md bg-[#315d78]/10 text-[#315d78] transition group-hover:bg-[#123c35] group-hover:text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mt-6 text-lg font-black text-zinc-950">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[#c9783d]">{item.count}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-surface py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="پیشنهادهای ویژه"
            title="املاک شاخص Estatemint"
            description="کارت‌ها برای نمایش قیمت، موقعیت، متراژ و امکانات اصلی به شکل سریع و قابل اسکن طراحی شده‌اند."
            action={
              <ButtonLink href="/properties" variant="ghost">
                مشاهده همه
                <ArrowLeft size={18} />
              </ButtonLink>
            }
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="چرا Estatemint؟"
          title="زیبایی ظاهری، ساختار محصولی و آمادگی برای رشد"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {reasons.map((item) => (
            <article key={item.title} className="rounded-lg bg-[#15171a] p-7 text-white shadow-xl transition hover:-translate-y-1">
              <item.icon className="text-[#d5a249]" size={30} />
              <h3 className="mt-6 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-100">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e8eef1] py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="جدیدترین فایل‌ها"
            title="آخرین املاک اضافه‌شده"
            action={
              <ButtonLink href="/properties" variant="outline">
                رفتن به لیست املاک
                <ArrowLeft size={18} />
              </ButtonLink>
            }
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="relative overflow-hidden rounded-lg bg-[#15171a] p-8 text-white md:p-12">
          <div className="absolute inset-y-0 left-0 hidden w-1/2 md:block">
            <Image
              src="/placeholders/interior-living.svg"
              alt="فضای داخلی ملک لوکس"
              fill
              sizes="50vw"
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-xl">
            <p className="text-sm font-black text-[#d5a249]">مشاوره انتخاب ملک</p>
            <h2 className="mt-3 text-3xl font-black leading-[1.45] md:text-4xl">
              برای انتخاب مطمئن‌تر، با مشاور Estatemint صحبت کنید.
            </h2>
            <p className="mt-4 leading-8 text-stone-100">
              این بخش فعلا استاتیک است، اما برای اتصال آینده به درخواست بازدید و قرار ملاقات آماده شده است.
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-7">
              درخواست مشاوره
              <ArrowLeft size={18} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
