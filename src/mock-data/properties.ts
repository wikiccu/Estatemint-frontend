import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "modern-apartment-elahiyeh",
    title: "آپارتمان مدرن با تراس سبز در الهیه",
    city: "تهران",
    district: "الهیه",
    price: 42000000000,
    currency: "تومان",
    area: 185,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    propertyType: "apartment",
    status: "sale",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "واحدی روشن و خوش‌نقشه با متریال ممتاز، آشپزخانه مجهز، تراس قابل استفاده و دسترسی سریع به خیابان‌های اصلی شمال تهران.",
    features: ["لابی اختصاصی", "تراس قابل چیدمان", "آشپزخانه مجهز", "نگهبانی ۲۴ ساعته"],
    featured: true,
    agentName: "نیلوفر امینی",
    agentPhone: "۰۹۱۲ ۴۴۰ ۱۸۷۵",
  },
  {
    id: "family-villa-shahrak-gharb",
    title: "ویلای خانوادگی بازسازی‌شده در شهرک غرب",
    city: "تهران",
    district: "شهرک غرب",
    price: 68500000000,
    currency: "تومان",
    area: 320,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 3,
    propertyType: "villa",
    status: "sale",
    imageUrl:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "ویلایی کم‌نظیر با حیاط خصوصی، نورگیری عالی، فضای پذیرایی بزرگ و طراحی داخلی آرام برای زندگی خانوادگی بلندمدت.",
    features: ["حیاط خصوصی", "اتاق مستر", "بازسازی کامل", "سیستم سرمایش مرکزی"],
    featured: true,
    agentName: "کاوه رضایی",
    agentPhone: "۰۹۱۲ ۷۱۸ ۳۰۶۰",
  },
  {
    id: "tabriz-office-valiasr",
    title: "دفتر کار لوکس در ولیعصر تبریز",
    city: "تبریز",
    district: "ولیعصر",
    price: 14500000000,
    currency: "تومان",
    area: 95,
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    propertyType: "office",
    status: "sale",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "فضای اداری خوش‌دسترسی با پلان منعطف، مناسب شرکت‌های مشاوره، فناوری و دفاتر حرفه‌ای در یکی از بهترین محدوده‌های تبریز.",
    features: ["پلان منعطف", "اتاق جلسه", "دسترسی آسان", "آسانسور اختصاصی"],
    featured: true,
    agentName: "سینا موسوی",
    agentPhone: "۰۹۱۴ ۲۲۰ ۵۷۳۱",
  },
  {
    id: "kish-sea-view-apartment",
    title: "آپارتمان چشم‌انداز دریا در کیش",
    city: "کیش",
    district: "مرجان",
    price: 28500000000,
    currency: "تومان",
    area: 138,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    propertyType: "apartment",
    status: "sale",
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "واحدی آرام با دید باز، لابی حرفه‌ای، امکانات رفاهی کامل و فاصله کوتاه تا مراکز خرید و مسیر ساحلی.",
    features: ["چشم‌انداز دریا", "لابی هتلینگ", "استخر مجموعه", "بالکن عریض"],
    featured: false,
    agentName: "رها نادری",
    agentPhone: "۰۹۳۶ ۸۸۰ ۱۱۲۴",
  },
  {
    id: "rasht-garden-villa",
    title: "باغ‌ویلا با معماری معاصر در رشت",
    city: "رشت",
    district: "گلسار",
    price: 31500000000,
    currency: "تومان",
    area: 410,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 4,
    propertyType: "villa",
    status: "sale",
    imageUrl:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566752229-250ed79470d6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "باغ‌ویلایی دنج با محوطه‌سازی حرفه‌ای، فضای نشیمن باز و طراحی مناسب برای سکونت دائم یا اقامت آخر هفته.",
    features: ["محوطه‌سازی", "آلاچیق", "پنجره‌های قدی", "پارکینگ مهمان"],
    featured: false,
    agentName: "امیرحسین بهرامی",
    agentPhone: "۰۹۱۱ ۴۰۲ ۹۶۸۰",
  },
  {
    id: "isfahan-classic-apartment",
    title: "آپارتمان کلاسیک نزدیک چهارباغ اصفهان",
    city: "اصفهان",
    district: "چهارباغ بالا",
    price: 19800000000,
    currency: "تومان",
    area: 122,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    propertyType: "apartment",
    status: "sale",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1200&q=85",
    ],
    description:
      "واحدی تمیز و آماده سکونت با دسترسی عالی به مرکز شهر، مناسب خانواده‌هایی که ترکیب اصالت و امکانات شهری را می‌خواهند.",
    features: ["نورگیری عالی", "کابینت مدرن", "انباری", "دسترسی شهری"],
    featured: false,
    agentName: "ماندانا کریمی",
    agentPhone: "۰۹۱۳ ۵۰۱ ۶۴۲۲",
  },
];

export const featuredProperties = properties.filter((property) => property.featured);

export const latestProperties = properties.slice(3);

export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id);
}
