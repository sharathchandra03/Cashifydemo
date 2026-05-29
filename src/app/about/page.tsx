import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Building2, Users, Target, Award } from "lucide-react";

const stats = [
  { value: "1 Cr+", label: "Devices Sold" },
  { value: "₹2000 Cr+", label: "Paid to Sellers" },
  { value: "200+", label: "Cities Covered" },
  { value: "4.6★", label: "App Rating" },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To make device resale simple, transparent, and rewarding for every Indian consumer while promoting sustainable electronics recycling." },
  { icon: Award, title: "Our Vision", desc: "To become India's most trusted platform for buying and selling pre-owned electronics with the largest network of verified buyers and sellers." },
  { icon: Users, title: "Our Team", desc: "A passionate group of 500+ tech enthusiasts dedicated to revolutionizing the second-hand electronics market." },
  { icon: Building2, title: "Our Presence", desc: "Operating in 200+ cities with 50+ physical service centers across India." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[oklch(0.15_0.02_240)] to-[oklch(0.12_0.02_240)] py-20 px-4 text-center text-white">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl mb-4">
            About U2U
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            India&apos;s most trusted platform for selling old devices and buying certified refurbished electronics.
          </p>
        </div>

        {/* Stats */}
        <section className="py-12 px-4 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] font-bold text-3xl text-[oklch(0.6_0.18_195)]">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                Founded in 2016, U2U started with a simple mission: to solve the problem of trustworthy device resale in India.
                We noticed that selling an old phone was a frustrating experience filled with haggling, lowball offers, and safety concerns.
              </p>
              <p className="mb-4">
                Today, we&apos;ve grown to become India&apos;s largest platform for buying and selling used electronics, with over 1 crore 
                satisfied customers. Our AI-powered pricing engine ensures sellers get the best market price, while our certified 
                refurbishment process gives buyers confidence in their purchases.
              </p>
              <p>
                With a network spanning 200+ cities and partnerships with major brands, we&apos;re committed to making technology 
                more accessible and sustainable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-center mb-12">What We Stand For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.97_0.01_195)] flex items-center justify-center shrink-0">
                    <v.icon className="h-6 w-6 text-[oklch(0.6_0.18_195)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
