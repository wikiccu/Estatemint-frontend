import { Building, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertySearch({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={
        compact
          ? "grid gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_0.8fr_0.8fr_auto]"
          : "grid gap-3 rounded-lg border border-zinc-200 bg-white p-4 estate-shadow lg:grid-cols-[1fr_0.8fr_0.8fr_auto]"
      }
    >
      <label className="relative">
        <span className="sr-only">جست‌وجوی ملک</span>
        <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <input
          className="h-12 w-full rounded-md border border-zinc-200 bg-stone-50 pr-11 pl-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-teal-700 focus:bg-white"
          placeholder="نام محله، شهر یا کلمه کلیدی"
        />
      </label>
      <label className="relative">
        <span className="sr-only">موقعیت</span>
        <MapPin className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <select className="h-12 w-full rounded-md border border-zinc-200 bg-stone-50 pr-11 pl-4 text-sm outline-none focus:border-teal-700 focus:bg-white">
          <option>همه شهرها</option>
          <option>تهران</option>
          <option>تبریز</option>
          <option>اصفهان</option>
          <option>کیش</option>
        </select>
      </label>
      <label className="relative">
        <span className="sr-only">نوع ملک</span>
        <Building className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <select className="h-12 w-full rounded-md border border-zinc-200 bg-stone-50 pr-11 pl-4 text-sm outline-none focus:border-teal-700 focus:bg-white">
          <option>همه نوع‌ها</option>
          <option>آپارتمان</option>
          <option>ویلا</option>
          <option>اداری</option>
          <option>زمین</option>
        </select>
      </label>
      <Button type="button" className="h-12">
        <SlidersHorizontal size={18} />
        جست‌وجو
      </Button>
    </form>
  );
}
