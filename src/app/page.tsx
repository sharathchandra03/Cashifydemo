import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import Categories from "@/components/shared/Categories";
import HowItWorks from "@/components/shared/HowItWorks";
import FloatingPhones from "@/components/shared/FloatingPhones";
import ProductSection from "@/components/shared/ProductSection";
import TrustSection from "@/components/shared/TrustSection";
import Testimonials from "@/components/shared/Testimonials";
import FAQ from "@/components/shared/FAQ";
import TeamSection from "@/components/shared/TeamSection";
import AppDownload from "@/components/shared/AppDownload";
import Footer from "@/components/shared/Footer";

// ─── Product Data ──────────────────────────────────────────────────────────────

const refurbishedPhones = [
  {
    id: "p1",
    name: "Apple iPhone 14 Pro Max 256GB",
    price: "₹58,999",
    original: "₹1,29,900",
    discount: "55% off",
    grade: "A+",
    rating: 4.8,
    img: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p2",
    name: "Samsung Galaxy S23 Ultra 256GB",
    price: "₹46,999",
    original: "₹1,04,999",
    discount: "55% off",
    grade: "A",
    rating: 4.7,
    img: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p3",
    name: "Google Pixel 8 Pro 256GB",
    price: "₹34,999",
    original: "₹74,999",
    discount: "53% off",
    grade: "A",
    rating: 4.6,
    img: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p4",
    name: "OnePlus 12 256GB Silky Black",
    price: "₹31,999",
    original: "₹64,999",
    discount: "51% off",
    grade: "A+",
    rating: 4.7,
    img: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p5",
    name: "Apple iPhone 13 128GB Midnight",
    price: "₹34,999",
    original: "₹79,900",
    discount: "56% off",
    grade: "A+",
    rating: 4.9,
    img: "https://s3ng.cashify.in/cashify/store/product/0b56deabd15c4fff836fb60516f65337.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p6",
    name: "OnePlus 11 5G 256GB",
    price: "₹29,999",
    original: "₹56,999",
    discount: "47% off",
    grade: "A",
    rating: 4.6,
    img: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p7",
    name: "Samsung Galaxy A54 128GB",
    price: "₹18,999",
    original: "₹38,999",
    discount: "51% off",
    grade: "A+",
    rating: 4.5,
    img: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png",
    warranty: "12 Month Warranty",
  },
  {
    id: "p8",
    name: "Apple iPhone 12 64GB",
    price: "₹24,999",
    original: "₹65,900",
    discount: "62% off",
    grade: "A",
    rating: 4.7,
    img: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png",
    warranty: "12 Month Warranty",
  },
];

const refurbishedLaptops = [
  {
    id: "l1",
    name: "Apple MacBook Pro M2 8GB 256GB",
    price: "₹84,999",
    original: "₹1,49,900",
    discount: "43% off",
    grade: "A",
    rating: 4.8,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l2",
    name: "Dell XPS 15 i7 16GB 512GB SSD",
    price: "₹52,999",
    original: "₹98,000",
    discount: "46% off",
    grade: "A",
    rating: 4.6,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/3a6f8957-6f79.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l3",
    name: "HP Spectre x360 i5 8GB 256GB",
    price: "₹38,999",
    original: "₹72,000",
    discount: "46% off",
    grade: "A",
    rating: 4.5,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/57426a66-b6ae.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l4",
    name: "Lenovo ThinkPad X1 Carbon i7",
    price: "₹44,999",
    original: "₹85,000",
    discount: "47% off",
    grade: "B",
    rating: 4.4,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/5ab3d199-fdb7.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l5",
    name: "ASUS ROG Zephyrus G14 RTX 3060",
    price: "₹61,999",
    original: "₹1,10,000",
    discount: "44% off",
    grade: "A",
    rating: 4.7,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/90cb48b8-8691.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l6",
    name: "Apple MacBook Air M1 8GB 256GB",
    price: "₹59,999",
    original: "₹1,09,900",
    discount: "45% off",
    grade: "A+",
    rating: 4.9,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l7",
    name: "Microsoft Surface Pro 9 i5",
    price: "₹54,999",
    original: "₹1,04,999",
    discount: "48% off",
    grade: "A",
    rating: 4.5,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/3a6f8957-6f79.jpg",
    warranty: "6 Month Warranty",
  },
  {
    id: "l8",
    name: "HP EliteBook 840 G9 i7 16GB",
    price: "₹47,999",
    original: "₹89,000",
    discount: "46% off",
    grade: "A",
    rating: 4.6,
    img: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/57426a66-b6ae.jpg",
    warranty: "6 Month Warranty",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero Banner with slider */}
        <Hero />

        {/* 2. Browse by Category */}
        <Categories />

        {/* 3. How Selling Works */}
        <HowItWorks />

        {/* 4. Buy Refurbished Phones - product grid */}
        <ProductSection
          title="Buy Refurbished Phones"
          subtitle="Certified pre-owned · Grade A quality · Best prices guaranteed"
          products={refurbishedPhones}
          viewAllHref="/buy/phones"
          bgColor="bg-white"
        />

        {/* 5. 🎯 Floating Phone Showcase - strategic visual attraction */}
        <FloatingPhones />

        {/* 6. Refurbished Laptops */}
        <ProductSection
          title="Refurbished Laptops"
          subtitle="Work smarter, spend less · All grades available"
          products={refurbishedLaptops}
          viewAllHref="/buy/laptops"
          bgColor="bg-[#FBFBFD]"
        />

        {/* 7. Trust Guarantees + Brand Logos */}
        <TrustSection />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Team Section */}
        <TeamSection />

        {/* 12. App Download CTA */}
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}
