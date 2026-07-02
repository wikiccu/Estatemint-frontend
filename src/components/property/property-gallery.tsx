import Image from "next/image";
import type { Property } from "@/types/property";

export function PropertyGallery({ property }: { property: Property }) {
  const images = [property.imageUrl, ...property.gallery].slice(0, 4);

  return (
    <section className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
      <div className="relative h-[360px] overflow-hidden rounded-lg bg-zinc-100 md:h-[520px]">
        <Image
          src={images[0]}
          alt={property.title}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {images.slice(1).map((image, index) => (
          <div key={image} className="relative h-44 overflow-hidden rounded-lg bg-zinc-100 md:h-[254px]">
            <Image
              src={image}
              alt={`${property.title} - تصویر ${index + 2}`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex h-44 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white text-sm font-bold text-zinc-500 md:h-[254px]">
          گالری تصاویر
        </div>
      </div>
    </section>
  );
}
