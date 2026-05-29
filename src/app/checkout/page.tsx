"use client";

import { useState } from "react";
import { useAppStore } from "@/store/app-store";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { ChevronLeft, CreditCard, Truck, CheckCircle2, MapPin, Phone, User, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const paymentMethods = [
  { id: "upi", name: "UPI", desc: "Google Pay, PhonePe, Paytm", icon: "💳" },
  { id: "card", name: "Credit/Debit Card", desc: "Visa, Mastercard, RuPay", icon: "💳" },
  { id: "netbanking", name: "Net Banking", desc: "All major banks", icon: "🏦" },
  { id: "cod", name: "Cash on Delivery", desc: "Pay when you receive", icon: "💵" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useAppStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 499;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link href="/buy" className="text-[oklch(0.6_0.18_195)] font-medium hover:underline">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16 px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-2">Order Placed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <div className="bg-white rounded-2xl border-2 border-border p-4 mb-6">
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="font-bold text-lg">U2U-ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/track"
                className="flex-1 py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)]"
              >
                Track Order
              </Link>
              <Link
                href="/buy"
                className="flex-1 py-3 border-2 border-border rounded-xl font-semibold hover:bg-[oklch(0.98_0.005_240)]"
              >
                Continue Shopping
              </Link>
            </div>
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
        <div className="max-w-4xl mx-auto">
          <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[oklch(0.6_0.18_195)] mb-6">
            <ChevronLeft className="h-4 w-4" /> Back to Cart
          </Link>

          {/* Steps */}
          <div className="flex items-center gap-4 mb-8">
            {["Address", "Payment", "Review"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-[oklch(0.6_0.18_195)] text-white" : "bg-gray-200 text-gray-500"
                )}>
                  {step > i + 1 ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </div>
                <span className={cn("text-sm font-medium", step === i + 1 ? "text-[oklch(0.15_0.01_240)]" : "text-muted-foreground")}>{s}</span>
                {i < 2 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="bg-white rounded-2xl border-2 border-border p-6">
                  <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[oklch(0.6_0.18_195)]" /> Delivery Address
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="John Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input type="tel" className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="+91 9876543210" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Address Line 1</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Street address" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Address Line 2 (Optional)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Apartment, suite, etc." />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">City</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Mumbai" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">State</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Maharashtra" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">PIN Code</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="400001" />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full mt-6 py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)]"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-2xl border-2 border-border p-6">
                  <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[oklch(0.6_0.18_195)]" /> Payment Method
                  </h2>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <label key={method.id} className="flex items-center gap-4 p-4 border-2 border-border rounded-xl cursor-pointer hover:border-[oklch(0.6_0.18_195)] transition-colors">
                        <input type="radio" name="payment" value={method.id} defaultChecked={method.id === "upi"} className="w-4 h-4 accent-[oklch(0.6_0.18_195)]" />
                        <div className="text-2xl">{method.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-muted-foreground">{method.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border-2 border-border rounded-xl font-semibold hover:bg-[oklch(0.98_0.005_240)]"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)]"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="bg-white rounded-2xl border-2 border-border p-6">
                  <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-[oklch(0.98_0.005_240)] rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className={cn(shipping === 0 && "text-green-600")}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2">
                      <span>Total</span>
                      <span className="text-[oklch(0.6_0.18_195)]">₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 border-2 border-border rounded-xl font-semibold hover:bg-[oklch(0.98_0.005_240)]"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={loading}
                      className="flex-1 py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)] disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? "Processing..." : <><Lock className="h-4 w-4" /> Place Order</>}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 h-fit">
              <h3 className="font-semibold mb-4">Price Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className={cn(shipping === 0 && "text-green-600")}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-border font-semibold">
                  <span>Total</span>
                  <span className="text-lg text-[oklch(0.6_0.18_195)]">₹{total.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-700 flex items-center gap-1.5">
                  <Truck className="h-3 w-3" /> Free delivery on this order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
