import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
