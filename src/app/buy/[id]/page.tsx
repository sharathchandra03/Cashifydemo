"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { useAppStore } from "@/store/app-store";
import { ChevronLeft, Heart, ShoppingCart, Share2, CheckCircle2, Shield, Truck, RotateCcw, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const productsData = [
  { id: "1", name: "iPhone 14 Pro Max", storage: "256GB", color: "Deep Purple", price: 58999, originalPrice: 139900, grade: "A", images: ["https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", "https://s3ng.cashify.in/cashify/store/product/2f7c1b168c0d456fa409716ef394856d.png"], specs: { display: "6.7\" Super Retina XDR", processor: "A16 Bionic", camera: "48MP Main + 12MP Ultra Wide", battery: "4323 mAh", os: "iOS 17" }, warranty: "12 Months", seller: "MobiTrade Certified", rating: 4.8, reviews: 234 },
  { id: "2", name: "Samsung S23 Ultra", storage: "512GB", color: "Phantom Black", price: 72999, originalPrice: 154999, grade: "A+", images: ["https://s3ng.cashify.in/cashify/store/product/3d8e2c279b1a567fb518927cd485967e.png"], specs: { display: "6.8\" Dynamic AMOLED 2X", processor: "Snapdragon 8 Gen 2", camera: "200MP Main + 12MP Periscope", battery: "5000 mAh", os: "Android 14" }, warranty: "12 Months", seller: "MobiTrade Certified", rating: 4.7, reviews: 189 },
  { id: "3", name: "Pixel 8 Pro", storage: "128GB", color: "Obsidian", price: 52999, originalPrice: 106999, grade: "A", images: ["https://s3ng.cashify.in/cashify/store/product/4f9f3d381c2b6789gc629138ef596078.png"], specs: { display: "6.7\" LTPO OLED", processor: "Google Tensor G3", camera: "50MP Main + 48MP Telephoto", battery: "5050 mAh", os: "Android 14" }, warranty: "12 Months", seller: "MobiTrade Certified", rating: 4.6, reviews: 156 },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart, addToWishlist, wishlist } = useAppStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = productsData.find((p) => p.id === params.id) || productsData[0];
  const inWishlist = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    addToWishlist(product.id);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/buy" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3478F6]">
            <ChevronLeft className="h-4 w-4" /> Back to Buy
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-2xl border-2 border-border p-8 flex items-center justify-center relative">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain max-h-full"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Grade {product.grade}
                  </span>
                </div>
                <button
                  onClick={handleWishlist}
                  className={cn(
                    "absolute top-4 right-4 p-3 rounded-full transition-colors",
                    inWishlist ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  )}
                >
                  <Heart className={cn("h-5 w-5", inWishlist && "fill-current")} />
                </button>
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={cn(
                        "w-20 h-20 rounded-xl border-2 p-2 bg-white transition-colors",
                        selectedImage === i ? "border-[#3478F6]" : "border-border hover:border-gray-300"
                      )}
                    >
                      <Image src={img} alt="" width={60} height={60} className="object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl lg:text-3xl text-[#1D1D1F]">
                  {product.name} {product.storage}
                </h1>
                <p className="text-muted-foreground mt-1">{product.color} • Sold by {product.seller}</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-6 bg-white rounded-2xl border-2 border-border">
                <div className="flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-display)] font-bold text-4xl text-[#3478F6]">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    {discount}% OFF
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                  <Zap className="h-4 w-4" /> You save ₹{(product.originalPrice - product.price).toLocaleString()}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-colors",
                    addedToCart
                      ? "bg-green-500 text-white"
                      : "bg-[#3478F6] text-white hover:bg-[#1D5FD8]"
                  )}
                >
                  {addedToCart ? <><CheckCircle2 className="h-5 w-5" /> Added</> : <><ShoppingCart className="h-5 w-5" /> Add to Cart</>}
                </button>
                <Link
                  href="/cart"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0071E3] text-white rounded-xl font-semibold hover:bg-[#1D5FD8] transition-colors"
                >
                  Buy Now
                </Link>
                <button className="p-4 border-2 border-border rounded-xl hover:bg-[#FBFBFD]">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Shield, text: `${product.warranty} Warranty` },
                  { icon: RotateCcw, text: "7-Day Returns" },
                  { icon: Truck, text: "Free Shipping" },
                ].map((badge) => (
                  <div key={badge.text} className="flex flex-col items-center gap-2 p-3 bg-[#FBFBFD] rounded-xl">
                    <badge.icon className="h-5 w-5 text-[#3478F6]" />
                    <span className="text-xs font-medium text-center">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div className="p-6 bg-white rounded-2xl border-2 border-border">
                <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs text-muted-foreground uppercase">{key}</p>
                      <p className="font-medium text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <h3 className="font-semibold text-green-800 mb-2">Grade {product.grade} Condition</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Like-new appearance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 100% functional</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Battery health 85%+</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Original parts only</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <section className="mt-16">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6">Similar Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productsData.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
                <Link key={p.id} href={`/buy/${p.id}`} className="bg-white rounded-2xl border-2 border-border p-4 hover:border-[#3478F6] transition-colors">
                  <div className="aspect-square bg-[#FBFBFD] rounded-xl mb-3 flex items-center justify-center">
                    <Image src={p.images[0]} alt={p.name} width={120} height={120} className="object-contain" />
                  </div>
                  <h3 className="font-medium text-sm line-clamp-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.storage}</p>
                  <p className="font-bold text-[#3478F6] mt-1">₹{p.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
