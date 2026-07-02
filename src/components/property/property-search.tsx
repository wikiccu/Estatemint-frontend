import { Building, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertySearch({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={
        compact
          ? "grid gap-3 rounded-lg border border-zinc-200 bg-white p-3 shadow-sm lg:grid-cols-[1fr_0.8fr_0.8fr_auto]"
          : "grid gap-3 rounded-lg border border-zinc-200 bg-white p-4 estate-shadow lg:grid-cols-[1fr_0.8fr_0.8fr_auto]"
      }
    >
      <label className="relative">
        <span className="sr-only">جست‌وجوی ملک</span>
        <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#315d78]" size={18} />
        <input
          className="h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10"
          placeholder="نام محله، شهر یا کلمه کلیدی"
        />
      </label>
      <label className="relative">
        <span className="sr-only">موقعیت</span>
        <MapPin className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#315d78]" size={18} />
        <select className="h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 text-sm outline-none transition focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10">
          <option>همه شهرها</option>
          <option>تهران</option>
          <option>تبریز</option>
          <option>اصفهان</option>
          <option>کیش</option>
        </select>
      </label>
      <label className="relative">
        <span className="sr-only">نوع ملک</span>
        <Building className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#315d78]" size={18} />
        <select className="h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 text-sm outline-none transition focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10">
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
