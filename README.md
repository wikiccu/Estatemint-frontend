# Estatemint Frontend

فرانت‌اند فارسی و RTL برای پلتفرم املاک Estatemint، ساخته‌شده با Next.js، TypeScript و Tailwind CSS.

## تکنولوژی‌ها

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- lucide-react برای آیکن‌ها
- clsx و tailwind-merge برای مدیریت کلاس‌ها

## اجرای پروژه

نیازمندی Node.js:

```bash
node >=20.9.0
```

```bash
npm install
npm run dev
```

سپس آدرس [http://localhost:3000](http://localhost:3000) را باز کنید.

## اسکریپت‌ها

```bash
npm run dev
npm run build
npm run build:webpack
npm run lint
```

اگر روی ویندوز با خطای Turbopack یا محدودیت اجرای پردازش مواجه شدید، `npm run build:webpack` مسیر جایگزین build است.

## متغیرهای محیطی

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
```

اگر مقدار بالا تنظیم نشود، همین آدرس به عنوان پیش‌فرض استفاده می‌شود.

## ساختار پروژه

```text
src/app                 صفحات و layout اصلی
src/components/layout   Header و Footer
src/components/property اجزای مربوط به ملک
src/components/forms    فرم‌های ورود و ثبت‌نام
src/components/ui       اجزای پایه UI
src/lib/api             پایه اتصال به API بک‌اند
src/data                داده قابل مصرف صفحات
src/mock-data           داده نمونه داخلی
src/types               تایپ‌های دامنه
docs/                   مستندات معماری
```

## وضعیت فعلی

نسخه فعلی شامل صفحه خانه، لیست املاک، جزئیات ملک، درباره ما، تماس، ورود، ثبت‌نام، layout مشترک، mock data و API client foundation است. احراز هویت و جست‌وجوی واقعی پس از آماده شدن endpointهای بک‌اند به این ساختار متصل می‌شوند.

جزئیات بیشتر در [docs/frontend-architecture.md](docs/frontend-architecture.md) آمده است.
