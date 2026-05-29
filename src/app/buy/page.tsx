"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, SlidersHorizontal, Grid3X3, List, Heart, ArrowRight, Star, Filter, X } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

// Extended product data for buy page
const allProducts = [
  // Phones
  { id: "p1", name: "Apple iPhone 14 Pro Max 256GB", price: 58999, original: 129900, discount: 55, grade: "A+", rating: 4.8, reviews: 234, category: "mobile", brand: "apple", image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", warranty: "12 Month", specs: { display: "6.7\" OLED", processor: "A16 Bionic", battery: "4323 mAh" } },
  { id: "p2", name: "Samsung Galaxy S23 Ultra 256GB", price: 46999, original: 104999, discount: 55, grade: "A", rating: 4.7, reviews: 189, category: "mobile", brand: "samsung", image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", warranty: "12 Month", specs: { display: "6.8\" AMOLED", processor: "Snapdragon 8 Gen 2", battery: "5000 mAh" } },
  { id: "p3", name: "Google Pixel 8 Pro 256GB", price: 34999, original: 74999, discount: 53, grade: "A", rating: 4.6, reviews: 156, category: "mobile", brand: "google", image: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png", warranty: "12 Month", specs: { display: "6.7\" OLED", processor: "Tensor G3", battery: "5050 mAh" } },
  { id: "p4", name: "OnePlus 12 256GB", price: 31999, original: 64999, discount: 51, grade: "A+", rating: 4.7, reviews: 201, category: "mobile", brand: "oneplus", image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", warranty: "12 Month", specs: { display: "6.82\" AMOLED", processor: "Snapdragon 8 Gen 3", battery: "5400 mAh" } },
  { id: "p5", name: "Apple iPhone 13 128GB", price: 34999, original: 79900, discount: 56, grade: "A+", rating: 4.9, reviews: 512, category: "mobile", brand: "apple", image: "https://s3ng.cashify.in/cashify/store/product/0b56deabd15c4fff836fb60516f65337.png", warranty: "12 Month", specs: { display: "6.1\" OLED", processor: "A15 Bionic", battery: "3227 mAh" } },
  { id: "p6", name: "Samsung Galaxy S22 Ultra", price: 38999, original: 99999, discount: 61, grade: "A", rating: 4.6, reviews: 178, category: "mobile", brand: "samsung", image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", warranty: "12 Month", specs: { display: "6.8\" AMOLED", processor: "Snapdragon 8 Gen 1", battery: "5000 mAh" } },
  { id: "p7", name: "OnePlus 11 5G 256GB", price: 29999, original: 56999, discount: 47, grade: "A", rating: 4.6, reviews: 145, category: "mobile", brand: "oneplus", image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", warranty: "12 Month", specs: { display: "6.7\" AMOLED", processor: "Snapdragon 8 Gen 2", battery: "5000 mAh" } },
  { id: "p8", name: "Google Pixel 7 Pro 128GB", price: 24999, original: 59999, discount: 58, grade: "A", rating: 4.5, reviews: 98, category: "mobile", brand: "google", image: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png", warranty: "12 Month", specs: { display: "6.7\" OLED", processor: "Tensor G2", battery: "5000 mAh" } },
  { id: "p9", name: "Apple iPhone 12 64GB", price: 24999, original: 65900, discount: 62, grade: "A", rating: 4.7, reviews: 423, category: "mobile", brand: "apple", image: "https://s3ng.cashify.in/cashify/store/product/3315f6f78fb24f9085d4ebc45dd1cc63.png", warranty: "12 Month", specs: { display: "6.1\" OLED", processor: "A14 Bionic", battery: "2815 mAh" } },
  { id: "p10", name: "Samsung Galaxy Z Fold 5", price: 84999, original: 154999, discount: 45, grade: "A+", rating: 4.4, reviews: 67, category: "mobile", brand: "samsung", image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", warranty: "12 Month", specs: { display: "7.6\" Foldable AMOLED", processor: "Snapdragon 8 Gen 2", battery: "4400 mAh" } },
  { id: "p11", name: "Xiaomi 13 Pro 256GB", price: 27999, original: 59999, discount: 53, grade: "A", rating: 4.5, reviews: 112, category: "mobile", brand: "xiaomi", image: "https://s3ng.cashify.in/cashify/store/product/c11aac4c07d34e2d8db7e4bd0aa1b8cb.png", warranty: "12 Month", specs: { display: "6.73\" AMOLED", processor: "Snapdragon 8 Gen 2", battery: "4820 mAh" } },
  { id: "p12", name: "Nothing Phone 2 256GB", price: 22999, original: 44999, discount: 49, grade: "A", rating: 4.3, reviews: 89, category: "mobile", brand: "nothing", image: "https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png", warranty: "12 Month", specs: { display: "6.7\" OLED", processor: "Snapdragon 8+ Gen 1", battery: "4700 mAh" } },

  // Laptops
  { id: "l1", name: "Apple MacBook Pro M2 16\" 512GB", price: 159999, original: 249900, discount: 36, grade: "A", rating: 4.9, reviews: 156, category: "laptop", brand: "apple", image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", warranty: "6 Month", specs: { display: "16.2\" Liquid Retina XDR", processor: "Apple M2 Pro", battery: "Up to 22 hours" } },
  { id: "l2", name: "Dell XPS 15 i7 16GB 512GB", price: 52999, original: 98000, discount: 46, grade: "A", rating: 4.6, reviews: 78, category: "laptop", brand: "dell", image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/3a6f8957-6f79.jpg", warranty: "6 Month", specs: { display: "15.6\" FHD+", processor: "Intel Core i7-12700H", battery: "Up to 13 hours" } },
  { id: "l3", name: "HP Spectre x360 i5 8GB 256GB", price: 38999, original: 72000, discount: 46, grade: "A", rating: 4.5, reviews: 45, category: "laptop", brand: "hp", image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/57426a66-b6ae.jpg", warranty: "6 Month", specs: { display: "13.5\" Touch OLED", processor: "Intel Core i5-1235U", battery: "Up to 15 hours" } },
  { id: "l4", name: "ASUS ROG Zephyrus G14 RTX 3060", price: 61999, original: 110000, discount: 44, grade: "A", rating: 4.7, reviews: 134, category: "laptop", brand: "asus", image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/90cb48b8-8691.jpg", warranty: "6 Month", specs: { display: "14\" QHD 120Hz", processor: "AMD Ryzen 9 6900HS", battery: "Up to 10 hours" } },
  { id: "l5", name: "Apple MacBook Air M2 13\" 256GB", price: 77999, original: 119900, discount: 35, grade: "A+", rating: 4.8, reviews: 312, category: "laptop", brand: "apple", image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/050424b9-ac99.jpg", warranty: "6 Month", specs: { display: "13.6\" Liquid Retina", processor: "Apple M2", battery: "Up to 18 hours" } },
  { id: "l6", name: "Lenovo ThinkPad X1 Carbon i7", price: 44999, original: 85000, discount: 47, grade: "B", rating: 4.4, reviews: 67, category: "laptop", brand: "lenovo", image: "https://s3ng.cashify.in/cashify/product/img/xxhdpi/5ab3d199-fdb7.jpg", warranty: "6 Month", specs: { display: "14\" WUXGA", processor: "Intel Core i7-1260P", battery: "Up to 15 hours" } },

  // Tablets
  { id: "t1", name: "Apple iPad Pro 12.9\" M2 256GB", price: 79999, original: 129900, discount: 38, grade: "A+", rating: 4.9, reviews: 89, category: "tablet", brand: "apple", image: "https://s3ng.cashify.in/cashify/web/efc7f78a7f1341a38fb4cb84c59f8dc6.webp", warranty: "12 Month", specs: { display: "12.9\" Liquid Retina XDR", processor: "Apple M2", battery: "Up to 10 hours" } },
  { id: "t2", name: "Samsung Galaxy Tab S9 Ultra 256GB", price: 54999, original: 109999, discount: 50, grade: "A", rating: 4.6, reviews: 56, category: "tablet", brand: "samsung", image: "https://s3ng.cashify.in/cashify/web/efc7f78a7f1341a38fb4cb84c59f8dc6.webp", warranty: "12 Month", specs: { display: "14.6\" AMOLED 120Hz", processor: "Snapdragon 8 Gen 2", battery: "11200 mAh" } },
  { id: "t3", name: "Apple iPad Air M1 64GB", price: 42999, original: 59900, discount: 28, grade: "A+", rating: 4.7, reviews: 178, category: "tablet", brand: "apple", image: "https://s3ng.cashify.in/cashify/web/efc7f78a7f1341a38fb4cb84c59f8dc6.webp", warranty: "12 Month", specs: { display: "10.9\" Liquid Retina", processor: "Apple M1", battery: "Up to 10 hours" } },
  { id: "t4", name: "Xiaomi Pad 6 128GB", price: 18999, original: 28999, discount: 34, grade: "A", rating: 4.4, reviews: 234, category: "tablet", brand: "xiaomi", image: "https://s3ng.cashify.in/cashify/web/efc7f78a7f1341a38fb4cb84c59f8dc6.webp", warranty: "6 Month", specs: { display: "11\" 2.8K 144Hz", processor: "Snapdragon 870", battery: "8840 mAh" } },

  // Watches
  { id: "w1", name: "Apple Watch Series 9 45mm", price: 29999, original: 45900, discount: 35, grade: "A+", rating: 4.8, reviews: 145, category: "watch", brand: "apple", image: "https://s3ng.cashify.in/cashify/web/f7266ab933a44b56a6d296fa3746ed55.webp", warranty: "6 Month", specs: { display: "45mm Always-On Retina", processor: "S9 SiP", battery: "Up to 18 hours" } },
  { id: "w2", name: "Samsung Galaxy Watch 6 Classic 47mm", price: 19999, original: 34999, discount: 43, grade: "A", rating: 4.5, reviews: 89, category: "watch", brand: "samsung", image: "https://s3ng.cashify.in/cashify/web/f7266ab933a44b56a6d296fa3746ed55.webp", warranty: "6 Month", specs: { display: "1.5\" Super AMOLED", processor: "Exynos W930", battery: "Up to 40 hours" } },
  { id: "w3", name: "Apple Watch SE 2nd Gen 44mm", price: 17999, original: 29900, discount: 40, grade: "A", rating: 4.6, reviews: 234, category: "watch", brand: "apple", image: "https://s3ng.cashify.in/cashify/web/f7266ab933a44b56a6d296fa3746ed55.webp", warranty: "6 Month", specs: { display: "44mm Retina OLED", processor: "S8 SiP", battery: "Up to 18 hours" } },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "mobile", name: "Mobile Phones" },
  { id: "laptop", name: "Laptops" },
  { id: "tablet", name: "Tablets" },
  { id: "watch", name: "Smartwatches" },
];

const brands = [
  { id: "all", name: "All Brands" },
  { id: "apple", name: "Apple" },
  { id: "samsung", name: "Samsung" },
  { id: "oneplus", name: "OnePlus" },
  { id: "google", name: "Google" },
  { id: "xiaomi", name: "Xiaomi" },
  { id: "dell", name: "Dell" },
  { id: "hp", name: "HP" },
  { id: "asus", name: "ASUS" },
  { id: "lenovo", name: "Lenovo" },
];

const grades = [
  { id: "all", name: "All Grades" },
  { id: "A+", name: "Grade A+ (Like New)" },
  { id: "A", name: "Grade A (Excellent)" },
  { id: "B", name: "Grade B (Good)" },
];

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
  { id: "discount", name: "Biggest Discount" },
];

export default function BuyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
      const matchesGrade = selectedGrade === "all" || product.grade === selectedGrade;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesBrand && matchesGrade && matchesPrice;
    });

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        filtered.sort((a, b) => b.discount - a.discount);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, selectedGrade, priceRange, sortBy]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl text-[oklch(0.12_0.01_240)] mb-2">
              Buy Refurbished Devices
            </h1>
            <p className="text-muted-foreground">
              Certified pre-owned devices with 12-month warranty and 7-day returns
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Search and Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for devices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none bg-white"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-border rounded-xl font-medium"
              >
                <Filter className="h-4 w-4" /> Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 bg-white border-2 border-border rounded-xl focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
              >
                {sortOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
              </select>
              <div className="hidden md:flex bg-white border-2 border-border rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn("p-2 rounded-lg transition-colors", viewMode === "grid" ? "bg-[oklch(0.95_0.01_195)]" : "hover:bg-[oklch(0.98_0.005_240)]")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn("p-2 rounded-lg transition-colors", viewMode === "list" ? "bg-[oklch(0.95_0.01_195)]" : "hover:bg-[oklch(0.98_0.005_240)]")}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="bg-white rounded-2xl border-2 border-border p-5 space-y-6">
                {/* Categories */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedCategory === cat.id
                            ? "bg-[oklch(0.6_0.18_195)] text-white"
                            : "hover:bg-[oklch(0.98_0.005_240)]"
                        )}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Brands</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map(brand => (
                      <button
                        key={brand.id}
                        onClick={() => setSelectedBrand(brand.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedBrand === brand.id
                            ? "bg-[oklch(0.6_0.18_195)] text-white"
                            : "hover:bg-[oklch(0.98_0.005_240)]"
                        )}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grades */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Condition</h4>
                  <div className="space-y-2">
                    {grades.map(grade => (
                      <button
                        key={grade.id}
                        onClick={() => setSelectedGrade(grade.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedGrade === grade.id
                            ? "bg-[oklch(0.6_0.18_195)] text-white"
                            : "hover:bg-[oklch(0.98_0.005_240)]"
                        )}
                      >
                        {grade.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {allProducts.length} products
                </p>
              </div>

              <div className={cn(
                "grid gap-4",
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border-2 border-border hover:border-[oklch(0.6_0.18_195)] hover:shadow-lg transition-all duration-200 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Badges */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-[oklch(0.68_0.19_45)] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {product.discount}% OFF
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-[oklch(0.6_0.18_195)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          Grade {product.grade}
                        </span>
                      </div>
                      {/* Wishlist */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Heart className={cn("h-4 w-4", wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-[oklch(0.15_0.01_240)] line-clamp-2 mb-2">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="text-[10px] bg-[oklch(0.97_0.01_195)] text-[oklch(0.4_0.01_240)] px-2 py-0.5 rounded">
                          {product.specs.display}
                        </span>
                        <span className="text-[10px] bg-[oklch(0.97_0.01_195)] text-[oklch(0.4_0.01_240)] px-2 py-0.5 rounded">
                          {product.warranty} Warranty
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn("h-3 w-3", i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200")}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-[family-name:var(--font-display)] font-bold text-lg text-[oklch(0.6_0.18_195)]">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{product.original.toLocaleString()}
                        </span>
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/buy/${product.id}`}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-medium hover:bg-[oklch(0.55_0.18_195)] transition-colors"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No products match your filters. Try adjusting your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Mobile filter content - simplified */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm",
                        selectedCategory === cat.id ? "bg-[oklch(0.6_0.18_195)] text-white" : "bg-[oklch(0.97_0.01_195)]"
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Brand</h4>
                <div className="flex flex-wrap gap-2">
                  {brands.slice(0, 6).map(brand => (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm",
                        selectedBrand === brand.id ? "bg-[oklch(0.6_0.18_195)] text-white" : "bg-[oklch(0.97_0.01_195)]"
                      )}
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
