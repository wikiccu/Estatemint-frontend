import { Bath, BedDouble, Car, MapPin, MoveUpLeft } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { formatNumber, formatPrice } from "@/lib/utils";
import type { Property } from "@/types/property";

const propertyTypeLabel = {
  apartment: "آپارتمان",
  villa: "ویلا",
  office: "اداری",
  land: "زمین",
};

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#123c35]/25 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded-md bg-white/94 px-3 py-1 text-xs font-bold text-[#123c35] shadow-sm backdrop-blur">
          {propertyTypeLabel[property.propertyType]}
        </div>
        <div className="absolute bottom-3 left-3 rounded-md bg-[#15171a]/82 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          فروش
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="line-clamp-2 text-base font-black leading-7 text-zinc-950">
              {property.title}
            </h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin size={16} />
              {property.city}، {property.district}
            </p>
          </div>
          <MoveUpLeft className="mt-1 text-zinc-300 transition group-hover:text-[#c9783d]" size={20} />
        </div>

        <p className="mt-5 text-lg font-black text-[#123c35]">
          {formatPrice(property.price, property.currency)}
        </p>

        <dl className="mt-5 grid grid-cols-4 gap-2 border-y border-zinc-100 py-4 text-center text-xs text-zinc-500">
          <div className="rounded-md bg-[#f7f8f5] py-2">
            <dt>متراژ</dt>
            <dd className="mt-1 font-bold text-zinc-900">{formatNumber(property.area)} متر</dd>
          </div>
          <div className="rounded-md bg-[#f7f8f5] py-2">
            <dt className="flex justify-center">
              <BedDouble size={16} />
            </dt>
            <dd className="mt-1 font-bold text-zinc-900">{formatNumber(property.bedrooms)}</dd>
          </div>
          <div className="rounded-md bg-[#f7f8f5] py-2">
            <dt className="flex justify-center">
              <Bath size={16} />
            </dt>
            <dd className="mt-1 font-bold text-zinc-900">{formatNumber(property.bathrooms)}</dd>
          </div>
          <div className="rounded-md bg-[#f7f8f5] py-2">
            <dt className="flex justify-center">
              <Car size={16} />
            </dt>
            <dd className="mt-1 font-bold text-zinc-900">
              {formatNumber(property.parkingSpaces)}
            </dd>
          </div>
        </dl>

        <ButtonLink href={`/properties/${property.id}`} variant="outline" className="mt-5 w-full">
          مشاهده جزئیات
        </ButtonLink>
      </div>
    </article>
  );
}
