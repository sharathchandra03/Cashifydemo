"use client";

import { useState } from "react";
import { Package, CheckCircle2, Clock, AlertCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const purchasesData = [
  { id: "PUR001", device: "iPhone 14 Pro Max", price: 58000, status: "completed", date: "2024-01-15", vendor: "Tech Resellers" },
  { id: "PUR002", device: "Samsung S23 Ultra", price: 42000, status: "pending", date: "2024-01-14", vendor: "Mobile Hub" },
  { id: "PUR003", device: "MacBook Air M2", price: 72000, status: "completed", date: "2024-01-13", vendor: "Gadget World" },
  { id: "PUR004", device: "Pixel 8 Pro", price: 32000, status: "in_progress", date: "2024-01-12", vendor: "Phone Planet" },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  completed: { label: "Completed", color: "bg-green-100 text-green-700", icon: CheckCircle2 },
  pending: { label: "Pending Approval", color: "bg-amber-100 text-amber-700", icon: Clock },
  in_progress: { label: "In Progress", color: "bg-blue-100 text-blue-700", icon: AlertCircle },
};

export default function PurchasesPage() {
  const totalPurchases = purchasesData.reduce((sum, p) => sum + p.price, 0);
  const completedPurchases = purchasesData.filter(p => p.status === "completed").reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#1D1D1F]">
          My Purchases
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your device purchase history and pending transactions
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-border p-4">
          <p className="text-2xl font-bold text-[#1D1D1F]">{purchasesData.length}</p>
          <p className="text-xs text-muted-foreground">Total Purchases</p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-border p-4">
          <p className="text-2xl font-bold text-[#3478F6]">₹{(totalPurchases / 1000).toFixed(0)}K</p>
          <p className="text-xs text-muted-foreground">Total Value</p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-border p-4">
          <p className="text-2xl font-bold text-green-600">₹{(completedPurchases / 1000).toFixed(0)}K</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-border p-4">
          <p className="text-2xl font-bold text-amber-600">{purchasesData.filter(p => p.status === "pending").length}</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FBFBFD]">
              <tr className="text-left text-xs font-medium text-muted-foreground">
                <th className="px-4 py-3">Purchase ID</th>
                <th className="px-4 py-3">Device</th>
                <th className="px-4 py-3">Vendor</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {purchasesData.map((purchase) => {
                const StatusIcon = statusConfig[purchase.status].icon;
                return (
                  <tr key={purchase.id} className="border-t border-border hover:bg-[#FBFBFD]">
                    <td className="px-4 py-3 font-medium">{purchase.id}</td>
                    <td className="px-4 py-3">{purchase.device}</td>
                    <td className="px-4 py-3 text-muted-foreground">{purchase.vendor}</td>
                    <td className="px-4 py-3 font-medium text-[#3478F6]">₹{purchase.price.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <span className={cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium", statusConfig[purchase.status].color)}>
                        <StatusIcon className="h-3 w-3" />
                        {statusConfig[purchase.status].label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{purchase.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
