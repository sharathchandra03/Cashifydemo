import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import { Toaster } from "@/components/providers/Toaster";

// DM Sans — iFix Academy brand font
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MobiTrade - Sell Smart. Buy Better.",
  description:
    "India's trusted platform to sell your old devices and buy certified refurbished electronics at the best prices.",
  keywords:
    "sell old phone, buy refurbished, used electronics, MobiTrade marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <SmoothScrollProvider>
          {children}
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
