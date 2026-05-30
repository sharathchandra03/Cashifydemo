import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Verma",
    city: "Delhi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    text: "Got ₹38,000 for my old iPhone 12. The agent came to my office, verified the phone, and payment was in my account within 2 hours. Incredible!",
    device: "Sold iPhone 12 Pro",
    bg: "bg-blue-50",
  },
  {
    name: "Meera Iyer",
    city: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Bought a refurbished Samsung S22 from MobiTrade. It looks and works exactly like new! Can't believe I saved ₹25,000. Will definitely buy again.",
    device: "Bought Samsung S22",
    bg: "bg-teal-50",
  },
  {
    name: "Karan Singh",
    city: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "The whole process was transparent. I knew exactly what I'd get before the agent arrived. No haggling, no drama. This is how it should be done.",
    device: "Sold OnePlus 9 Pro",
    bg: "bg-orange-50",
  },
  {
    name: "Ananya Das",
    city: "Chennai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    rating: 4,
    text: "Sold my old MacBook Pro for a great price. The pickup was prompt and the team was very professional. Highly recommend MobiTrade!",
    device: "Sold MacBook Pro",
    bg: "bg-purple-50",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-2 block">
            Customer Stories
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-4xl text-[#1D1D1F]">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-lg mx-auto">
            Real experiences from real people. Join 1 crore+ satisfied customers.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className={`border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 ${t.bg}`}
            >
              <CardContent className="p-5">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 fill-gray-300"}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Device tag */}
                <span className="inline-block text-[10px] font-semibold bg-white/70 text-[#3478F6] px-2 py-1 rounded-full mb-4">
                  {t.device}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1D1D1F]">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground">{t.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
          {[
            { platform: "Google Play", rating: "4.7", reviews: "2.1L+ reviews" },
            { platform: "App Store", rating: "4.6", reviews: "89K+ reviews" },
            { platform: "Trustpilot", rating: "4.5", reviews: "12K+ reviews" },
          ].map((p) => (
            <div key={p.platform} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#3478F6]">
                  {p.rating}
                </div>
                <div className="flex gap-0.5 justify-center my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">{p.platform}</div>
                <div className="text-[10px] text-muted-foreground">{p.reviews}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
