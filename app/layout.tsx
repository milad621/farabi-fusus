import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PWARegister from "@/components/PWARegister";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fusus al-Hikam | فصوص الحکمة",
  description: "Abu Nasr al-Farabi's Bezels of Wisdom - 70 philosophical chapters in Arabic, Persian, and English",
  keywords: "Farabi, philosophy, Islamic philosophy, metaphysics, theology, Arabic texts, Persian texts",
  authors: [{ name: "Abu Nasr al-Farabi" }],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Fusus al-Hikam",
  },
  openGraph: {
    title: "Fusus al-Hikam - Bezels of Wisdom",
    description: "70 philosophical chapters by Abu Nasr al-Farabi in Arabic, Persian, and English",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className="font-inter antialiased flex flex-col min-h-screen">
        <PWARegister />
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
