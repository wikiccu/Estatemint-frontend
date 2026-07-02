import type { Metadata } from "next";
import { Grid2X2, ListFilter, SearchX, SlidersHorizontal } from "lucide-react";
import { PropertyCard } from "@/components/property/property-card";
import { PropertySearch } from "@/components/property/property-search";
import { SectionHeading } from "@/components/ui/section-heading";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "املاک",
  description: "جست‌وجو و بررسی املاک منتخب در Estatemint.",
};

const filters = ["بازه قیمت", "متراژ", "تعداد خواب", "نوع ملک", "محله"];

export default function PropertiesPage() {
  const hasProperties = properties.length > 0;

  return (
    <div className="container-page py-10">
      <section className="rounded-lg bg-[#15171a] p-6 text-white shadow-xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-sm font-black text-[#d5a249]">بازار املاک Estatemint</p>
            <h1 className="mt-3 text-3xl font-black leading-[1.45] md:text-5xl">
              فهرست املاک منتخب برای خرید و سرمایه‌گذاری
            </h1>
            <p className="mt-4 max-w-2xl leading-8 text-stone-100">
              این صفحه با داده نمونه ساخته شده و برای اتصال آینده به جست‌وجو، فیلترها و مرتب‌سازی API آماده است.
            </p>
          </div>
          <div className="rounded-lg bg-white/95 p-4 text-zinc-950">
            <PropertySearch compact />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-700">
            <SlidersHorizontal size={18} />
            فیلترهای سریع
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-bold text-zinc-700">
              <ListFilter size={17} />
              جدیدترین
            </button>
            <button className="inline-flex size-10 items-center justify-center rounded-md bg-[#123c35] text-white">
              <Grid2X2 size={18} />
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm md:grid-cols-5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="h-11 rounded-md border border-zinc-200 bg-[#f7f8f5] px-4 text-sm font-semibold text-zinc-700 transition hover:border-[#123c35] hover:bg-white hover:text-[#123c35]"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading
          eyebrow="نتایج جست‌وجو"
          title={`${properties.length.toLocaleString("fa-IR")} ملک قابل بررسی`}
          description="نمایش فعلی استاتیک است؛ اما کارت‌ها و فیلترها برای دریافت داده واقعی از بک‌اند آماده شده‌اند."
        />

        {hasProperties ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-stone-300 bg-white p-10 text-center">
            <SearchX className="mx-auto text-zinc-400" size={42} />
            <h2 className="mt-4 text-xl font-black text-zinc-950">ملکی پیدا نشد</h2>
            <p className="mt-2 text-sm text-zinc-500">
              فیلترها را تغییر دهید یا بعدا دوباره بررسی کنید.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
