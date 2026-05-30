"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";
import { useState } from "react";

const bannerSlides = [
  {
    badge: "Limited Time Offer",
    headline: "Sell Your Old Device",
    subheadline: "Get Instant Cash",
    desc: "Get up to ₹80,000 for your old phone, laptop, or tablet. Free pickup. Instant payment.",
    cta: "Get Price Now",
    ctaHref: "/sell",
    secondCta: "How It Works",
    image: "https://s3ng.cashify.in/estore/0f23d2860f77401db5d650d9e4e06344.webp?w=600",
    accent: "#3478F6",
    bg: "from-[#0F044A] via-[#1a0d5c] to-[#0d0638]",
  },
  {
    badge: "Certified Refurbished",
    headline: "Buy Premium Phones",
    subheadline: "Up to 60% Off",
    desc: "Grade A certified refurbished phones with 12-month warranty and 7-day returns.",
    cta: "Shop Now",
    ctaHref: "/buy",
    secondCta: "View All",
    image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png",
    accent: "#0071E3",
    bg: "from-[#0F044A] via-[#1a1464] to-[#0d0638]",
  },
];

const trustBadges = [
  { icon: ShieldCheck, text: "100% Secure" },
  { icon: Zap, text: "Instant Payment" },
  { icon: Star, text: "1Cr+ Happy Users" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = bannerSlides[active];

  return (
    <section className="w-full">
      {/* Main Hero */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${slide.bg} min-h-[420px] md:min-h-[480px] transition-all duration-500`}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3478F6]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#0071E3]/8 blur-2xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text */}
          <div className="flex-1 text-white z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3478F6] animate-pulse" />
              {slide.badge}
            </div>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-tight mb-2">
              {slide.headline}
              <span className="block text-[#3478F6]">{slide.subheadline}</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg mt-4 max-w-md leading-relaxed">
              {slide.desc}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center gap-2 bg-[#3478F6] hover:bg-[#1D5FD8] text-white font-semibold px-6 py-3 rounded-full transition-all duration-350 shadow-[0_8px_24px_rgba(52,120,246,0.4)] hover:shadow-[0_12px_32px_rgba(52,120,246,0.5)] hover:-translate-y-0.5"
              >
                {slide.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                {slide.secondCta}
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/60 text-xs">
                  <Icon className="h-3.5 w-3.5 text-[#3478F6]" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-shrink-0 w-72 md:w-80 lg:w-96 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#3478F6]/15 blur-2xl scale-105" />
              <Image
                src={slide.image}
                alt="Featured device"
                width={400}
                height={400}
                className="relative w-full object-contain drop-shadow-2xl animate-float"
                priority
              />
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-[#3478F6]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-black/[0.06]">
          {[
            { value: "1 Cr+", label: "Devices Sold" },
            { value: "₹2000 Cr+", label: "Paid to Sellers" },
            { value: "4.6★", label: "App Rating" },
            { value: "200+", label: "Cities Covered" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center px-4 text-center">
              <span className="font-extrabold text-xl md:text-2xl text-[#3478F6] tracking-tight">
                {value}
              </span>
              <span className="text-xs text-[#6E6E73] mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
