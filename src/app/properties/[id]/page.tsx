import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  Car,
  CheckCircle2,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { ConsultationForm } from "@/components/property/consultation-form";
import { PropertyGallery } from "@/components/property/property-gallery";
import { formatNumber, formatPrice } from "@/lib/utils";
import { getPropertyById, properties } from "@/data/properties";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  return {
    title: property ? property.title : "ملک پیدا نشد",
    description: property?.description ?? "جزئیات ملک در Estatemint.",
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const specs = [
    { label: "متراژ", value: `${formatNumber(property.area)} متر`, icon: Ruler },
    { label: "اتاق خواب", value: formatNumber(property.bedrooms), icon: BedDouble },
    { label: "حمام", value: formatNumber(property.bathrooms), icon: Bath },
    { label: "پارکینگ", value: formatNumber(property.parkingSpaces), icon: Car },
  ];

  return (
    <div className="container-page py-10">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-[#9b7138]">
            <MapPin size={17} />
            {property.city}، {property.district}
          </p>
          <h1 className="mt-3 text-3xl font-black leading-[1.45] text-zinc-950 md:text-5xl">
            {property.title}
          </h1>
        </div>
        <div className="rounded-lg border border-stone-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-bold text-zinc-500">قیمت فروش</p>
          <p className="mt-1 text-2xl font-black text-[#173f35]">
            {formatPrice(property.price, property.currency)}
          </p>
        </div>
      </div>

      <PropertyGallery property={property} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <article>
          <dl className="grid gap-4 md:grid-cols-4">
            {specs.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                <item.icon className="text-[#173f35]" size={22} />
                <dt className="mt-4 text-xs font-semibold text-zinc-500">{item.label}</dt>
                <dd className="mt-1 text-lg font-black text-zinc-950">{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-zinc-950">توضیحات ملک</h2>
            <p className="mt-4 leading-8 text-zinc-600">{property.description}</p>
          </section>

          <section className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-zinc-950">امکانات و ویژگی‌ها</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {property.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-md bg-stone-50 px-4 py-3 text-sm font-bold text-zinc-700"
                >
                  <CheckCircle2 className="text-[#173f35]" size={18} />
                  {feature}
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="h-fit rounded-lg border border-stone-200 bg-white p-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-md bg-[#173f35]/10 text-[#173f35]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500">مشاور مسئول</p>
              <h2 className="font-black text-zinc-950">{property.agentName}</h2>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md bg-stone-50 px-4 py-3 text-sm font-bold text-zinc-700">
            <Phone size={17} />
            {property.agentPhone}
          </div>
          <div className="mt-6 border-t border-stone-200 pt-6">
            <h3 className="text-lg font-black text-zinc-950">درخواست مشاوره و بازدید</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              اطلاعات خود را ثبت کنید تا مشاور Estatemint برای هماهنگی بازدید با شما تماس بگیرد.
            </p>
            <div className="mt-5">
              <ConsultationForm />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
