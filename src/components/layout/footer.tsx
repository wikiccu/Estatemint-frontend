import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-[#173f35] text-white">
              <Building2 size={22} />
            </span>
            <span className="text-lg font-black text-zinc-950">Estatemint</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">
            تجربه‌ای حرفه‌ای برای کشف، مقایسه و پیگیری املاک با تمرکز بر شفافیت،
            کیفیت داده و ارتباط مطمئن با مشاوران.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-zinc-950">دسترسی سریع</h2>
          <div className="mt-4 grid gap-3 text-sm text-zinc-600">
            <Link href="/" className="hover:text-teal-800">
              خانه
            </Link>
            <Link href="/properties" className="hover:text-teal-800">
              املاک
            </Link>
            <Link href="/about" className="hover:text-teal-800">
              درباره ما
            </Link>
            <Link href="/contact" className="hover:text-teal-800">
              تماس
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-zinc-950">ارتباط</h2>
          <div className="mt-4 grid gap-3 text-sm text-zinc-600">
            <span className="flex items-center gap-2">
              <Phone size={16} /> ۰۲۱ ۹۱۰۰ ۴۵۸۰
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} /> hello@estatemint.local
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> تهران، ایران
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-100 py-5">
        <p className="container-page text-xs text-zinc-500">
          © ۲۰۲۶ Estatemint. تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
