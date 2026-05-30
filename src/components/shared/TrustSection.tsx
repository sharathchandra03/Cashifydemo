import Image from "next/image";
import { BadgeCheck, Clock, Headphones, RefreshCw } from "lucide-react";

const brands = [
  { name: "Apple", img: "https://s3ng.cashify.in/builder/893fda6dd4c94ccaade0ab6b5dc114b2.svg" },
  { name: "Samsung", img: "https://s3ng.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?w=300" },
  { name: "OnePlus", img: "https://s3ng.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?w=300" },
  { name: "Xiaomi", img: "https://s3ng.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?w=300" },
  { name: "Realme", img: "https://s3ng.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?w=300" },
  { name: "OPPO", img: "https://s3ng.cashify.in/builder/ed7d743ec18f40f6b0cbb58bc6783d5b.webp?w=300" },
  { name: "Vivo", img: "https://s3ng.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?w=300" },
  { name: "Motorola", img: "https://s3ng.cashify.in/builder/5aba5b44686349a4a54d457016a257ac.webp?w=300" },
];

const guarantees = [
  {
    icon: BadgeCheck,
    title: "100% Authentic",
    desc: "Every device verified by certified technicians",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: Clock,
    title: "24-Hr Delivery",
    desc: "Same-day and next-day delivery available",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Expert help whenever you need it",
    color: "text-teal-500 bg-teal-50",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "7-day no-questions-asked return policy",
    color: "text-purple-500 bg-purple-50",
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-16">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 rounded-2xl border border-border hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${g.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-sm text-[#1D1D1F]">{g.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brands we support */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            All Major Brands Supported
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative w-16 h-10 md:w-20 md:h-12 grayscale hover:grayscale-0 transition-all duration-200 opacity-60 hover:opacity-100"
            >
              <Image src={brand.img} alt={brand.name} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-14 rounded-3xl dark-gradient p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[rgba(52,120,246,0.1)] blur-2xl" />
          </div>
          <p className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-4xl relative z-10">
            Trusted by{" "}
            <span className="text-[#3478F6]">1 Crore+</span>
            {" "}Users & Major Brands Since 2016
          </p>
          <p className="text-white/50 mt-3 text-sm md:text-base relative z-10 max-w-xl mx-auto">
            MobiTrade has become India&apos;s most trusted platform for buying and selling used devices.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 relative z-10">
            {[
              { v: "₹2000 Cr+", l: "Paid to Sellers" },
              { v: "4.6 ★", l: "App Rating" },
              { v: "200+", l: "Cities" },
              { v: "48 Hr", l: "Avg. Payment Time" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#0071E3]">{v}</div>
                <div className="text-xs text-white/50 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
