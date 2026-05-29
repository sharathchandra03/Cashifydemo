import { notFound } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ArrowRight, Smartphone, Laptop, Tablet, Watch, Monitor, Camera, Gamepad2 } from "lucide-react";
import Link from "next/link";

const categoryData: Record<string, { name: string; icon: React.ElementType; description: string }> = {
  smartphones: { name: "Smartphones", icon: Smartphone, description: "Buy and sell the latest smartphones from top brands" },
  laptops: { name: "Laptops", icon: Laptop, description: "Premium laptops for work and gaming" },
  tablets: { name: "Tablets", icon: Tablet, description: "iPads and Android tablets at best prices" },
  smartwatches: { name: "Smartwatches", icon: Watch, description: "Track your fitness with the best wearables" },
  desktops: { name: "Desktops", icon: Monitor, description: "Powerful desktop computers for every need" },
  cameras: { name: "Cameras", icon: Camera, description: "DSLR and mirrorless cameras for photography enthusiasts" },
  gaming: { name: "Gaming", icon: Gamepad2, description: "Gaming consoles and accessories" },
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug];

  if (!category) {
    notFound();
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[oklch(0.15_0.02_240)] to-[oklch(0.12_0.02_240)] py-16 px-4 text-center text-white">
          <div className="w-16 h-16 rounded-2xl bg-[oklch(0.6_0.18_195)] flex items-center justify-center mx-auto mb-6">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl mb-4">
            {category.name}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            {category.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 bg-[oklch(0.68_0.19_45)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[oklch(0.62_0.19_45)] transition-colors"
            >
              Buy {category.name} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Sell Your {category.name.slice(0, -1)}
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl text-center mb-8">
              Popular in {category.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: `Sell your used ${category.name.slice(0, -1)}`, href: "/sell", desc: "Get instant quote" },
                { label: `Buy refurbished ${category.name}`, href: "/buy", desc: "Up to 60% off" },
                { label: "Check device value", href: "/sell", desc: "Free valuation" },
                { label: "View all deals", href: "/buy", desc: "Best prices guaranteed" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-border hover:border-[oklch(0.6_0.18_195)] transition-colors"
                >
                  <div>
                    <p className="font-medium text-[oklch(0.15_0.01_240)]">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[oklch(0.6_0.18_195)]" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl text-center mb-8">
              Explore Other Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(categoryData)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, data]) => {
                  const CatIcon = data.icon;
                  return (
                    <Link
                      key={slug}
                      href={`/category/${slug}`}
                      className="flex items-center gap-2 px-4 py-3 bg-[oklch(0.98_0.005_240)] rounded-xl hover:bg-[oklch(0.95_0.01_195)] transition-colors"
                    >
                      <CatIcon className="h-4 w-4 text-[oklch(0.6_0.18_195)]" />
                      <span className="font-medium text-sm">{data.name}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
