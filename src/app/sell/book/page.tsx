"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, MapPin, User, CreditCard, Banknote, Wallet } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const paymentMethods = [
  { id: "upi", name: "UPI", icon: Wallet, description: "Instant transfer to your UPI ID" },
  { id: "bank", name: "Bank Transfer", icon: CreditCard, description: "Direct to your bank account" },
  { id: "cash", name: "Cash on Pickup", icon: Banknote, description: "Physical cash from our agent" },
];

export default function BookingPage() {
  const { sellFlow, resetSellFlow } = useAppStore();
  const [submitted, setSubmitted] = useState(false);
  const [orderId] = useState(() => `MBT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
    timeSlot: "",
    paymentMethod: "upi",
    upiId: "",
    accountNumber: "",
    ifsc: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl border-2 border-border p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#1D1D1F] mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-muted-foreground mb-6">
              Your pickup has been scheduled. Our agent will arrive at your doorstep on the selected date.
            </p>

            <div className="bg-[#FBFBFD] rounded-xl p-4 mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Order ID</span>
                <span className="font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Pickup Date</span>
                <span className="font-medium">{formData.date}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Time Slot</span>
                <span className="font-medium">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="text-sm font-medium">Final Amount</span>
                <span className="font-bold text-[#3478F6]">₹{sellFlow.finalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href="/"
                onClick={() => resetSellFlow()}
                className="flex-1 py-2.5 border-2 border-border text-[#6E6E73] rounded-xl font-medium hover:bg-[#FBFBFD] transition-colors"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {}}
                className="flex-1 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8] transition-colors"
              >
                Track Order
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/sell" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3478F6] mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to sell flow
          </Link>

          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-2 block">
              Final Step
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#1D1D1F] mb-3">
              Schedule Your Pickup
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Enter your details and choose a convenient time for our agent to pickup your device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
              {/* Personal Details */}
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <h3 className="font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
                  <User className="h-4 w-4 text-[#3478F6]" />
                  Personal Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                      placeholder="10 digit mobile number"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <h3 className="font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#3478F6]" />
                  Pickup Address
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Complete Address</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none resize-none"
                      placeholder="House/Flat number, Street, Landmark"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                        placeholder="City name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">PIN Code</label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                        placeholder="6 digit PIN"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <h3 className="font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#3478F6]" />
                  Schedule Pickup
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Pickup Date</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Time Slot</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={cn(
                            "p-3 rounded-xl text-sm font-medium transition-colors text-center",
                            formData.timeSlot === slot
                              ? "bg-[#3478F6] text-white"
                              : "bg-[#F5F5F7] text-[#6E6E73] hover:bg-[rgba(52,120,246,0.08)]"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <h3 className="font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-[#3478F6]" />
                  Payment Method
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                      className={cn(
                        "w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-colors text-left",
                        formData.paymentMethod === method.id
                          ? "border-[#3478F6] bg-[#FBFBFD]"
                          : "border-border hover:border-[rgba(52,120,246,0.5)]"
                      )}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#F5F5F7] flex items-center justify-center">
                        <method.icon className="h-5 w-5 text-[#3478F6]" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-[#1D1D1F]">{method.name}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {formData.paymentMethod === "upi" && (
                  <div className="mt-4">
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">UPI ID</label>
                    <input
                      type="text"
                      value={formData.upiId}
                      onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                      placeholder="yourname@upi"
                    />
                  </div>
                )}

                {formData.paymentMethod === "bank" && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Account Number</label>
                      <input
                        type="text"
                        value={formData.accountNumber}
                        onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">IFSC Code</label>
                      <input
                        type="text"
                        value={formData.ifsc}
                        onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                        placeholder="SBIN0001234"
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0071E3] text-white font-semibold rounded-xl hover:bg-[#1D5FD8] transition-colors"
              >
                Confirm Booking
              </button>
            </form>

            {/* Summary Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border-2 border-border p-5">
                <h3 className="font-semibold text-[#1D1D1F] mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Device</span>
                    <span className="font-medium">{sellFlow.brand} {sellFlow.model}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium capitalize">{sellFlow.category}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-muted-foreground">You Get</span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#3478F6]">
                    ₹{sellFlow.finalPrice.toLocaleString()}
                  </span>
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
