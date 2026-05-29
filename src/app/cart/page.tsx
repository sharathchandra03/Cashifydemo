"use client";

import { useAppStore } from "@/store/app-store";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useAppStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 499;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-[oklch(0.97_0.01_195)] flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-[oklch(0.6_0.18_195)]" />
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-2">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything yet</p>
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 bg-[oklch(0.6_0.18_195)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)]"
            >
              Continue Shopping <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-8">
            Shopping Cart ({cart.length} items)
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border-2 border-border p-4 flex gap-4">
                  <div className="w-24 h-24 bg-[oklch(0.98_0.005_240)] rounded-xl flex items-center justify-center shrink-0">
                    <Image src={item.images?.[0] || "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png"} alt={item.name} width={80} height={80} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.storage || "256GB"} • Grade {item.grade || "A"}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-2 border-2 border-border rounded-lg hover:bg-[oklch(0.98_0.005_240)]"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-2 border-2 border-border rounded-lg hover:bg-[oklch(0.98_0.005_240)]"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-bold text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={cn(shipping === 0 && "text-green-600")}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-xl text-[oklch(0.6_0.18_195)]">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full mt-6 py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)] flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Truck className="h-3 w-3" /> Free shipping on orders above ₹50,000
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Shield className="h-3 w-3" /> 12-month warranty included
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <RotateCcw className="h-3 w-3" /> 7-day return policy
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[oklch(0.97_0.02_50)] to-[oklch(0.95_0.03_60)] rounded-2xl p-4">
                <p className="text-sm font-medium mb-1">Have a coupon?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 rounded-lg border-2 border-border text-sm"
                  />
                  <button className="px-4 py-2 bg-[oklch(0.6_0.18_195)] text-white rounded-lg text-sm font-medium">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
