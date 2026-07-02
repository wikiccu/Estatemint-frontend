# معماری فرانت‌اند Estatemint

## راهبرد پروژه

این مخزن به عنوان فرانت‌اند مستقل Estatemint ساخته شده است. بک‌اند NestJS می‌تواند جداگانه توسعه و دیپلوی شود و این پروژه از طریق `NEXT_PUBLIC_API_BASE_URL` به API متصل خواهد شد.

گزینه‌های بررسی‌شده:

- مونوریپو: برای اشتراک کد و اسکریپت‌ها مناسب است، اما وقتی بک‌اند در مخزن دیگری قرار دارد، انتقال آن هزینه و ریسک غیرضروری ایجاد می‌کند.
- پوشه `frontend/`: وقتی خود مخزن فرانت‌اند است، یک لایه اضافی و بی‌فایده ایجاد می‌کند.
- مخزن مستقل فرانت‌اند: انتخاب فعلی، ساده‌تر، تمیزتر و مناسب‌تر برای پورتفولیو و توسعه موازی.

## ساختار

```text
src/
  app/                  مسیرهای Next.js App Router
  components/
    forms/              فرم‌های ورود و ثبت‌نام
    layout/             Header و Footer
    property/           کارت، جست‌وجو و گالری ملک
    ui/                 اجزای پایه قابل استفاده مجدد
  lib/
    api/                تنظیمات و fetch wrapper
    utils.ts            ابزارهای عمومی UI
  data/                 داده قابل مصرف صفحات
  mock-data/            داده نمونه تا آماده شدن API
  types/                تایپ‌های دامنه
```

## RTL و فارسی

در `src/app/layout.tsx` مقدارهای `lang="fa"` و `dir="rtl"` روی سند اصلی تنظیم شده‌اند. تمام متن‌های قابل مشاهده، metadata صفحات، labelها، placeholderها و empty stateها فارسی نوشته شده‌اند.

## API

فایل‌های `src/lib/api/*` پایه اتصال آینده به بک‌اند را فراهم می‌کنند:

- `NEXT_PUBLIC_API_BASE_URL`
- مقدار پیش‌فرض: `http://localhost:3000/api/v1`
- wrapper برای `fetch`
- ساختار typed برای پاسخ موفق و خطا
- جایگاه آماده برای Bearer token

## Mock Data

داده‌های نمونه در `src/mock-data/properties.ts` قرار دارند و از طریق `src/data/properties.ts` به صفحات ارائه می‌شوند. این داده‌ها با مدل‌های آینده `Property`، تصاویر، علاقه‌مندی‌ها و درخواست بازدید هم‌راستا طراحی شده‌اند. وقتی endpointهای ملک آماده شوند، صفحه `/properties` و `/properties/[id]` می‌توانند از API به جای mock data تغذیه شوند.

## برنامه اتصال بک‌اند

1. اضافه کردن endpointهای property search در بک‌اند.
2. ساخت سرویس‌های typed در `src/lib/api`.
3. اتصال login/register به ماژول Auth و ذخیره امن token.
4. اضافه کردن favorites و appointments پس از آماده شدن authorization.
5. جایگزینی mock data با cache و loading/error state واقعی.
