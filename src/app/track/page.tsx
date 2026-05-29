"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Search, Package, Truck, CheckCircle2, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);

  // Mock order data
  const mockOrder = {
    id: "U2U-A7X9K2",
    status: "in_transit",
    device: "iPhone 14 Pro Max 256GB",
    type: "sell",
    date: "2024-01-15",
    pickupDate: "2024-01-16",
    payment: "UPI",
    amount: 58999,
    timeline: [
      { status: "Order Placed", time: "Jan 15, 10:30 AM", completed: true },
      { status: "Agent Assigned", time: "Jan 15, 2:45 PM", completed: true },
      { status: "Pickup in Progress", time: "Jan 16, 9:00 AM", completed: true, current: true },
      { status: "Device Verified", time: "Expected by 2:00 PM", completed: false },
      { status: "Payment Processed", time: "Pending", completed: false },
    ],
    agent: {
      name: "Rahul Kumar",
      phone: "+91 98765 43210",
      eta: "45 mins",
    },
  };

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl text-center mb-8">
            Track Your Order
          </h1>

          {/* Search */}
          <div className="bg-white rounded-2xl border-2 border-border p-6 mb-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter Order ID (e.g., U2U-A7X9K2)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-medium hover:bg-[oklch(0.55_0.18_195)] transition-colors"
              >
                Track
              </button>
            </div>
          </div>

          {/* Results */}
          {searched && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                    <p className="font-semibold text-lg">{mockOrder.id}</p>
                    <p className="text-sm text-muted-foreground mt-2">{mockOrder.device}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    In Transit
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 bg-[oklch(0.98_0.005_240)] rounded-xl">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Pickup Date</p>
                    <p className="font-medium">{mockOrder.pickupDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Payment Method</p>
                    <p className="font-medium">{mockOrder.payment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Expected Amount</p>
                    <p className="font-medium text-[oklch(0.6_0.18_195)]">₹{mockOrder.amount.toLocaleString()}</p>
                  </div>
                </div>

                {/* Agent Info */}
                <div className="mt-6 p-4 bg-[oklch(0.97_0.02_50)] rounded-xl border border-[oklch(0.68_0.19_45/0.3)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.6_0.18_195)] flex items-center justify-center text-white">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Pickup Agent: {mockOrder.agent.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-3 w-3" /> ETA: {mockOrder.agent.eta}
                      </p>
                    </div>
                    <a href={`tel:${mockOrder.agent.phone}`} className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-[oklch(0.6_0.18_195)] hover:bg-[oklch(0.98_0.005_240)]">
                      Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl border-2 border-border p-6">
                <h3 className="font-semibold mb-6">Order Timeline</h3>
                <div className="space-y-0">
                  {mockOrder.timeline.map((step, i) => (
                    <div key={step.status} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center",
                          step.completed ? "bg-green-500 text-white" : step.current ? "bg-[oklch(0.6_0.18_195)] text-white" : "bg-gray-100 text-gray-400"
                        )}>
                          {step.completed ? <CheckCircle2 className="h-4 w-4" /> : step.current ? <Clock className="h-4 w-4" /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}
                        </div>
                        {i < mockOrder.timeline.length - 1 && (
                          <div className={cn(
                            "w-0.5 h-12 mt-1",
                            step.completed ? "bg-green-500" : "bg-gray-200"
                          )} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className={cn(
                          "font-medium",
                          step.completed || step.current ? "text-[oklch(0.15_0.01_240)]" : "text-muted-foreground"
                        )}>
                          {step.status}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
