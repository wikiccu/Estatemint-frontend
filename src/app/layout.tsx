import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Estatemint | پلتفرم هوشمند املاک",
    template: "%s | Estatemint",
  },
  description:
    "Estatemint یک تجربه مدرن و حرفه‌ای برای جست‌وجو، بررسی و مدیریت املاک در ایران است.",
  keywords: ["املاک", "خرید ملک", "اجاره ملک", "Estatemint", "پلتفرم املاک"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col bg-[#f4f6f2] text-zinc-950 antialiased">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
