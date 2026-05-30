import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RotateCcw, Star } from "lucide-react";

const phones = [
  {
    name: "iPhone 14 Pro",
    price: "₹52,999",
    original: "₹1,19,900",
    discount: "56% off",
    grade: "A+",
    img: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png",
    delay: "0s",
    rotate: "-6deg",
    zIndex: 10,
  },
  {
    name: "Samsung S23",
    price: "₹34,999",
    original: "₹74,999",
    discount: "53% off",
    grade: "A",
    img: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png",
    delay: "1.5s",
    rotate: "0deg",
    zIndex: 20,
  },
  {
    name: "Pixel 8",
    price: "₹28,999",
    original: "₹59,999",
    discount: "52% off",
    grade: "A",
    img: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png",
    delay: "3s",
    rotate: "6deg",
    zIndex: 10,
  },
];

export default function FloatingPhones() {
  return (
    <section className="py-16 md:py-24 overflow-hidden dark-gradient relative">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#3478F6]/15 blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#0071E3]/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left copy */}
          <div className="flex-1 text-white text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-3">
              Certified Refurbished
            </span>
            <h2 className="font-extrabold text-3xl md:text-5xl leading-tight mb-4 tracking-tight">
              Premium Phones
              <span className="block text-[#0071E3]">Half the Price.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Every device is professionally tested, cleaned, and certified. Grade A quality - you can&apos;t tell the difference.
            </p>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: ShieldCheck, label: "12-Month Warranty" },
                { icon: RotateCcw, label: "7-Day Returns" },
                { icon: Star, label: "Grade A Certified" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                  <Icon className="h-4 w-4 text-[#3478F6] shrink-0" />
                  <span className="text-xs font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/buy"
              className="inline-flex items-center gap-2 bg-[#0071E3] hover:bg-[#1D5FD8] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_24px_rgba(0,113,227,0.4)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.5)] hover:-translate-y-0.5"
            >
              Browse All Phones <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: floating phones */}
          <div className="flex-1 flex items-end justify-center gap-4 md:gap-6 relative min-h-[380px] md:min-h-[460px]">
            {phones.map((phone, i) => (
              <div
                key={phone.name}
                className="relative flex flex-col items-center"
                style={{
                  zIndex: phone.zIndex,
                  transform: `rotate(${phone.rotate})`,
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: phone.delay,
                  marginBottom: i === 1 ? "0" : "-20px",
                }}
              >
                {/* Phone card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-3 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 bg-[#0071E3] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow z-10">
                    {phone.discount}
                  </div>
                  {/* Grade */}
                  <div className="absolute top-4 left-4 bg-[#3478F6] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                    Grade {phone.grade}
                  </div>

                  {/* Phone image */}
                  <div className="relative w-28 md:w-36 aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-b from-[#0F044A] to-[#1a0d5c]">
                    <Image
                      src={phone.img}
                      alt={phone.name}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-3 text-center px-1">
                    <p className="text-white text-xs font-semibold truncate">{phone.name}</p>
                    <p className="text-[#3478F6] font-bold text-sm">{phone.price}</p>
                    <p className="text-white/40 text-[10px] line-through">{phone.original}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Glow under phones */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[rgba(52,120,246,0.3)] blur-2xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
