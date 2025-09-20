import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/providers/hero-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce - เปรียบเทียบราคาสินค้าจากทุกแพลตฟอร์ม",
  description: "แพลตฟอร์มเปรียบเทียบราคาสินค้าจาก Shopee, Lazada, JD Central พร้อมฟีเจอร์ AR/VR เพื่อทดลองสินค้าในห้องของคุณ",
  keywords: "ecommerce, เปรียบเทียบราคา, shopee, lazada, jd central, ar, vr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
