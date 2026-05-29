"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Filter, ArrowRight, TrendingUp, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const suggestions = [
  { term: "iPhone 14 Pro Max", type: "product", trend: "+24%" },
  { term: "Samsung S23 Ultra", type: "product", trend: "+18%" },
  { term: "Sell old phone", type: "action" },
  { term: "Buy refurbished", type: "action" },
  { term: "iPhone 13", type: "product", trend: "+12%" },
  { term: "Pixel 8 Pro", type: "product", trend: "+15%" },
];

const recentSearches = ["iPhone 14", "Samsung", "MacBook"];

const searchResults = [
  { id: "1", name: "iPhone 14 Pro Max 256GB", price: 58999, originalPrice: 139900, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", category: "Smartphones", grade: "A", rating: 4.8 },
  { id: "2", name: "iPhone 14 Pro 128GB", price: 52999, originalPrice: 129900, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", category: "Smartphones", grade: "A+", rating: 4.7 },
  { id: "3", name: "iPhone 13 128GB", price: 38999, originalPrice: 79900, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", category: "Smartphones", grade: "B", rating: 4.5 },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);

  useEffect(() => {
    if (initialQuery) {
      setHasSearched(true);
    }
  }, [initialQuery]);

  const filteredSuggestions = suggestions.filter((s) =>
    s.term.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(true);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Search Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search for phones, laptops, brands..."
                  className="w-full pl-12 pr-12 py-4 text-lg rounded-2xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => { setQuery(""); setShowSuggestions(false); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && query && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-border shadow-lg z-50"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {filteredSuggestions.length > 0 ? (
                    <div className="py-2">
                      <p className="px-4 py-2 text-xs font-medium text-muted-foreground uppercase">Suggestions</p>
                      {filteredSuggestions.map((s) => (
                        <button
                          key={s.term}
                          type="button"
                          onClick={() => { setQuery(s.term); setShowSuggestions(false); setHasSearched(true); }}
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-[oklch(0.98_0.005_240)]"
                        >
                          <div className="flex items-center gap-3">
                            <Search className="h-4 w-4 text-muted-foreground" />
                            <span>{s.term}</span>
                          </div>
                          {s.trend && (
                            <span className="flex items-center gap-1 text-xs text-green-600">
                              <TrendingUp className="h-3 w-3" /> {s.trend}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-center text-muted-foreground">
                      No suggestions found
                    </div>
                  )}
                </div>
              )}
            </form>

            {/* Recent & Trending */}
            {!hasSearched && (
              <div className="mt-6 space-y-4">
                {recentSearches.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Recent Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => { setQuery(term); setHasSearched(true); }}
                          className="px-3 py-1.5 bg-[oklch(0.98_0.005_240)] rounded-full text-sm hover:bg-[oklch(0.95_0.01_195)]"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5" /> Trending Now
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.filter(s => s.trend).slice(0, 4).map((s) => (
                      <button
                        key={s.term}
                        onClick={() => { setQuery(s.term); setHasSearched(true); }}
                        className="px-3 py-1.5 bg-[oklch(0.97_0.02_50)] rounded-full text-sm hover:bg-[oklch(0.95_0.03_60)]"
                      >
                        {s.term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-[family-name:var(--font-display)] font-bold text-xl">
                Results for &quot;{query}&quot;
              </h1>
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-border rounded-xl text-sm font-medium hover:bg-white">
                <Filter className="h-4 w-4" /> Filters
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/buy/${product.id}`}
                    className="bg-white rounded-2xl border-2 border-border p-4 hover:border-[oklch(0.6_0.18_195)] transition-colors"
                  >
                    <div className="aspect-square bg-[oklch(0.98_0.005_240)] rounded-xl mb-4 flex items-center justify-center relative">
                      <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Grade {product.grade}
                      </span>
                    </div>
                    <h3 className="font-semibold line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-amber-400">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="font-bold text-xl text-[oklch(0.6_0.18_195)]">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No results found for &quot;{query}&quot;</p>
                <button
                  onClick={() => { setQuery(""); setHasSearched(false); }}
                  className="mt-4 text-[oklch(0.6_0.18_195)] font-medium hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Categories Grid - when no search */}
        {!hasSearched && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Smartphones", icon: "📱", href: "/category/smartphones" },
                { name: "Laptops", icon: "💻", href: "/category/laptops" },
                { name: "Tablets", icon: "📲", href: "/category/tablets" },
                { name: "Smartwatches", icon: "⌚", href: "/category/smartwatches" },
                { name: "Desktops", icon: "🖥️", href: "/category/desktops" },
                { name: "Cameras", icon: "📷", href: "/category/cameras" },
                { name: "Gaming", icon: "🎮", href: "/category/gaming" },
                { name: "Accessories", icon: "🎧", href: "/buy" },
              ].map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-border hover:border-[oklch(0.6_0.18_195)] transition-colors"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="font-medium">{cat.name}</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}
