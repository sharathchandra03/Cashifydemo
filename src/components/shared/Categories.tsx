import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Smartphones",
    slug: "smartphones",
    icon: "https://s3ng.cashify.in/cashify/web/045e5efa148a4fb9b0884388afaf1d2c.webp",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Laptops",
    slug: "laptops",
    icon: "https://s3ng.cashify.in/cashify/web/8936e5c504884511aed545c490604782.webp",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Tablets",
    slug: "tablets",
    icon: "https://s3ng.cashify.in/cashify/web/efc7f78a7f1341a38fb4cb84c59f8dc6.webp",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Smartwatches",
    slug: "smartwatches",
    icon: "https://s3ng.cashify.in/cashify/web/f7266ab933a44b56a6d296fa3746ed55.webp",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Desktops",
    slug: "desktops",
    icon: "https://s3ng.cashify.in/cashify/web/7da72ed7785f44c4a28c3530e5dc4025.webp",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Cameras",
    slug: "cameras",
    icon: "https://s3ng.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?w=300",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Gaming",
    slug: "gaming",
    icon: "https://s3ng.cashify.in/builder/e6ba507509994216936925bdfeb6cfa8.webp?w=300",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
  {
    name: "Accessories",
    slug: "accessories",
    icon: "https://s3ng.cashify.in/builder/fac6a787400b4107994d11ddd7b23fed.webp?w=300",
    color: "bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)]",
    ring: "group-hover:ring-[#3478F6]/30",
  },
];

export default function Categories() {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="font-extrabold text-xl md:text-2xl text-[#1D1D1F] tracking-tight">
              Browse Categories
            </h2>
            <p className="text-sm text-[#6E6E73] mt-0.5">What are you selling or buying today?</p>
          </div>
          <Link
            href="/categories"
            className="text-sm font-semibold text-[#3478F6] hover:text-[#1D5FD8] transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`group flex flex-col items-center gap-2 p-3 md:p-4 rounded-[20px] transition-all duration-300 cursor-pointer ring-2 ring-transparent hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${cat.color} ${cat.ring}`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 relative flex-shrink-0">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  fill
                  className="object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-semibold text-center text-[#1D1D1F] leading-tight group-hover:text-[#3478F6] transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
