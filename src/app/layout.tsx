import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import { Toaster } from "@/components/providers/Toaster";

// Bricolage Grotesque — free variable font, premium editorial feel, weight 500
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "U2U — Sell Smart. Buy Better.",
  description:
    "India's trusted platform to sell your old devices and buy certified refurbished electronics at the best prices.",
  keywords: "sell old phone, buy refurbished, used electronics, U2U marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-body)]">
        <SmoothScrollProvider>{children}<Toaster /></SmoothScrollProvider>
      </body>
    </html>
  );
}
