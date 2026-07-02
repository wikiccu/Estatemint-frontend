import { CalendarDays, MessageSquare, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultationForm() {
  return (
    <form className="grid gap-4">
      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        نام شما
        <span className="relative">
          <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            className="h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10"
            placeholder="مثلا علی رضایی"
          />
        </span>
      </label>
      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        شماره تماس
        <span className="relative">
          <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            className="h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10"
            placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
          />
        </span>
      </label>
      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        زمان پیشنهادی
        <span className="relative">
          <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <select className="h-12 w-full rounded-md border border-zinc-200 bg-[#f7f8f5] pr-11 pl-4 font-normal outline-none transition focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10">
            <option>امروز عصر</option>
            <option>فردا صبح</option>
            <option>آخر هفته</option>
          </select>
        </span>
      </label>
      <label className="grid gap-2 text-sm font-bold text-zinc-800">
        توضیحات
        <span className="relative">
          <MessageSquare className="absolute right-4 top-4 text-zinc-400" size={18} />
          <textarea
            className="min-h-28 w-full resize-none rounded-md border border-zinc-200 bg-[#f7f8f5] py-3 pr-11 pl-4 font-normal leading-7 outline-none transition placeholder:text-zinc-400 focus:border-[#123c35] focus:bg-white focus:ring-4 focus:ring-[#123c35]/10"
            placeholder="اگر نیاز خاصی دارید بنویسید."
          />
        </span>
      </label>
      <Button type="button" className="w-full">
        ثبت درخواست مشاوره
      </Button>
    </form>
  );
}
