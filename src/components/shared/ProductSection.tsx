"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

interface Product {
  id: string;
  name: string;
  price: string;
  original: string;
  discount: string;
  grade: string;
  rating: number;
  img: string;
  warranty: string;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  viewAllHref: string;
  bgColor?: string;
  /** Duplicate products so the marquee has enough items to fill two rows */
  secondRowProducts?: Product[];
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative w-52 shrink-0 cursor-pointer rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Discount badge */}
      <div className="absolute top-3 left-3 z-10">
        <Badge className="bg-[#0071E3] text-white border-0 text-[10px] font-bold px-2 py-0.5 shadow-sm">
          {product.discount}
        </Badge>
      </div>
      {/* Grade badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-[#3478F6] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
          Grade {product.grade}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-44 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-400"
        />
        {/* Shine effect on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5">
        <h3 className="font-semibold text-xs text-[#1D1D1F] line-clamp-2 leading-snug mb-2">
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-2.5 w-2.5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-2.5">
          <span className="font-[family-name:var(--font-display)] font-bold text-base text-[#3478F6]">
            {product.price}
          </span>
          <span className="text-[10px] text-muted-foreground line-through">{product.original}</span>
        </div>

        {/* Warranty */}
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Shield className="h-3 w-3 text-green-500 shrink-0" />
          {product.warranty}
        </div>
      </div>
    </div>
  );
}

export default function ProductSection({
  title,
  subtitle,
  products,
  viewAllHref,
  bgColor = "bg-white",
  secondRowProducts,
}: ProductSectionProps) {
  // For the second row, use secondRowProducts or reverse the main list
  const row2 = secondRowProducts ?? [...products].reverse();

  return (
    <section className={`py-12 md:py-16 ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 mb-6 md:mb-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-3xl text-[#1D1D1F]" style={{ fontWeight: 500 }}>
              {title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <Link
            href={viewAllHref}
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#3478F6] hover:underline shrink-0 ml-4"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative space-y-4">
        {/* Fade masks */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent" style={{ background: `linear-gradient(to right, var(--tw-gradient-from, white), transparent)` }} />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent" />

        {/* Row 1 - scroll left */}
        <Marquee className="[--gap:1rem] [--duration:35s]" pauseOnHover repeat={3}>
          {products.map((product) => (
            <ProductCard key={`r1-${product.id}`} product={product} />
          ))}
        </Marquee>

        {/* Row 2 - scroll right */}
        <Marquee className="[--gap:1rem] [--duration:40s]" pauseOnHover reverse repeat={3}>
          {row2.map((product) => (
            <ProductCard key={`r2-${product.id}`} product={product} />
          ))}
        </Marquee>
      </div>

      {/* Mobile view all */}
      <div className="mt-6 text-center sm:hidden px-4">
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-2 border-2 border-[#3478F6] text-[#3478F6] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-[rgba(52,120,246,0.08)]"
        >
          View All <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
