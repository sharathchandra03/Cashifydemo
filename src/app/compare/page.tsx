"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Check, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const devicesToCompare = [
  { id: "1", name: "iPhone 14 Pro Max", brand: "Apple", price: 58999, image: "https://s3ng.cashify.in/cashify/store/product/1e6b0a079b59479fa308605df283452e.png", specs: { display: "6.7\" OLED", processor: "A16 Bionic", ram: "6GB", storage: "256GB", battery: "4323 mAh", camera: "48MP Triple", os: "iOS 17", warranty: "12 months" }, pros: ["Best camera", "Premium build", "Long software support"], cons: ["Expensive", "No charger included"] },
  { id: "2", name: "Samsung S23 Ultra", brand: "Samsung", price: 72999, image: "https://s3ng.cashify.in/cashify/store/product/3d8e2c279b1a567fb518927cd485967e.png", specs: { display: "6.8\" AMOLED", processor: "Snapdragon 8 Gen 2", ram: "12GB", storage: "512GB", battery: "5000 mAh", camera: "200MP Quad", os: "Android 14", warranty: "12 months" }, pros: ["Best display", "S Pen included", "Huge battery"], cons: ["Bulky", "Expensive"] },
  { id: "3", name: "Pixel 8 Pro", brand: "Google", price: 52999, image: "https://s3ng.cashify.in/cashify/store/product/4f9f3d381c2b6789gc629138ef596078.png", specs: { display: "6.7\" LTPO", processor: "Tensor G3", ram: "12GB", storage: "128GB", battery: "5050 mAh", camera: "50MP Triple", os: "Android 14", warranty: "12 months" }, pros: ["Best AI features", "Clean Android", "Great camera"], cons: ["Slower charging", "Tensor heat"] },
];

const specLabels: Record<string, string> = {
  display: "Display",
  processor: "Processor",
  ram: "RAM",
  storage: "Storage",
  battery: "Battery",
  camera: "Camera",
  os: "Operating System",
  warranty: "Warranty",
};

export default function ComparePage() {
  const [selectedDevices, setSelectedDevices] = useState<string[]>(["1", "2"]);
  const devices = devicesToCompare.filter((d) => selectedDevices.includes(d.id));

  const toggleDevice = (id: string) => {
    if (selectedDevices.includes(id)) {
      setSelectedDevices(selectedDevices.filter((d) => d !== id));
    } else if (selectedDevices.length < 3) {
      setSelectedDevices([...selectedDevices, id]);
    }
  };

  if (devices.length < 2) {
    return (
      <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Select at least 2 devices to compare</p>
            <div className="flex gap-3 justify-center">
              {devicesToCompare.map((d) => (
                <button
                  key={d.id}
                  onClick={() => toggleDevice(d.id)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-colors",
                    selectedDevices.includes(d.id)
                      ? "border-[oklch(0.6_0.18_195)] bg-[oklch(0.97_0.01_195)]"
                      : "border-border hover:border-gray-300"
                  )}
                >
                  <Image src={d.image} alt={d.name} width={60} height={60} className="object-contain mb-2" />
                  <p className="text-sm font-medium">{d.name}</p>
                </button>
              ))}
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
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl">Compare Devices</h1>
            <Link href="/buy" className="text-sm text-[oklch(0.6_0.18_195)] hover:underline">
              Browse more devices
            </Link>
          </div>

          {/* Device Selector */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {devicesToCompare.map((d) => (
              <button
                key={d.id}
                onClick={() => toggleDevice(d.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-colors",
                  selectedDevices.includes(d.id)
                    ? "border-[oklch(0.6_0.18_195)] bg-[oklch(0.97_0.01_195)]"
                    : "border-border hover:border-gray-300"
                )}
              >
                <Image src={d.image} alt={d.name} width={30} height={30} className="object-contain" />
                <span className="text-sm font-medium">{d.name}</span>
                {selectedDevices.includes(d.id) && <X className="h-4 w-4" />}
              </button>
            ))}
            {selectedDevices.length < 3 && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-gray-300 text-muted-foreground hover:border-[oklch(0.6_0.18_195)] hover:text-[oklch(0.6_0.18_195)]">
                <Plus className="h-4 w-4" /> Add Device
              </button>
            )}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border-2 border-border overflow-hidden">
            {/* Header Row */}
            <div className="grid border-b border-border" style={{ gridTemplateColumns: `200px repeat(${devices.length}, 1fr)` }}>
              <div className="p-4 bg-[oklch(0.98_0.005_240)] font-medium">Device</div>
              {devices.map((d) => (
                <div key={d.id} className="p-4 text-center border-l border-border">
                  <div className="w-24 h-24 mx-auto mb-3 bg-[oklch(0.98_0.005_240)] rounded-xl flex items-center justify-center">
                    <Image src={d.image} alt={d.name} width={80} height={80} className="object-contain" />
                  </div>
                  <h3 className="font-semibold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.brand}</p>
                  <p className="font-bold text-[oklch(0.6_0.18_195)] text-lg mt-1">₹{d.price.toLocaleString()}</p>
                  <Link
                    href={`/buy/${d.id}`}
                    className="inline-flex items-center gap-1 mt-2 text-sm text-[oklch(0.6_0.18_195)] hover:underline"
                  >
                    View <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Specs Rows */}
            {Object.entries(specLabels).map(([key, label]) => (
              <div key={key} className="grid border-b border-border" style={{ gridTemplateColumns: `200px repeat(${devices.length}, 1fr)` }}>
                <div className="p-4 bg-[oklch(0.98_0.005_240)] font-medium text-sm">{label}</div>
                {devices.map((d) => (
                  <div key={d.id} className="p-4 text-center border-l border-border text-sm">
                    {d.specs[key as keyof typeof d.specs]}
                  </div>
                ))}
              </div>
            ))}

            {/* Pros */}
            <div className="grid border-b border-border" style={{ gridTemplateColumns: `200px repeat(${devices.length}, 1fr)` }}>
              <div className="p-4 bg-[oklch(0.98_0.005_240)] font-medium text-sm">Pros</div>
              {devices.map((d) => (
                <div key={d.id} className="p-4 border-l border-border">
                  <ul className="space-y-1">
                    {d.pros.map((pro) => (
                      <li key={pro} className="flex items-center gap-1.5 text-sm text-green-700">
                        <Check className="h-3.5 w-3.5" /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cons */}
            <div className="grid border-b border-border" style={{ gridTemplateColumns: `200px repeat(${devices.length}, 1fr)` }}>
              <div className="p-4 bg-[oklch(0.98_0.005_240)] font-medium text-sm">Cons</div>
              {devices.map((d) => (
                <div key={d.id} className="p-4 border-l border-border">
                  <ul className="space-y-1">
                    {d.cons.map((con) => (
                      <li key={con} className="flex items-center gap-1.5 text-sm text-red-600">
                        <Minus className="h-3.5 w-3.5" /> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="grid" style={{ gridTemplateColumns: `200px repeat(${devices.length}, 1fr)` }}>
              <div className="p-4 bg-[oklch(0.98_0.005_240)] font-medium text-sm">Action</div>
              {devices.map((d) => (
                <div key={d.id} className="p-4 border-l border-border">
                  <Link
                    href={`/buy/${d.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-medium hover:bg-[oklch(0.55_0.18_195)]"
                  >
                    <ShoppingCart className="h-4 w-4" /> Buy Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {devices.map((d) => (
              <div key={d.id} className="bg-gradient-to-br from-[oklch(0.97_0.01_195)] to-white rounded-2xl border-2 border-border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={d.image} alt={d.name} width={40} height={40} className="object-contain" />
                  <div>
                    <p className="font-semibold text-sm">{d.name}</p>
                    <p className="text-xs text-muted-foreground">Best for: {d.pros[0]}</p>
                  </div>
                </div>
                <Link href={`/buy/${d.id}`} className="text-sm text-[oklch(0.6_0.18_195)] font-medium hover:underline">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
