"use client";

import { useState } from "react";
import { UserCircle, Phone, Mail, Package, DollarSign, Star, Plus, Edit2, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const vendorsData = [
  { id: "V001", name: "Rajesh Electronics", contact: "Rajesh Kumar", phone: "+91 9876543210", email: "rajesh@example.com", devices: 45, sales: 32, revenue: 1850000, rating: 4.8, status: "active" },
  { id: "V002", name: "Mobile Hub", contact: "Priya Sharma", phone: "+91 9876543211", email: "priya@example.com", devices: 38, sales: 28, revenue: 1450000, rating: 4.6, status: "active" },
  { id: "V003", name: "Tech Resellers", contact: "Amit Patel", phone: "+91 9876543212", email: "amit@example.com", devices: 52, sales: 41, revenue: 2200000, rating: 4.9, status: "active" },
  { id: "V004", name: "Gadget World", contact: "Sneha Reddy", phone: "+91 9876543213", email: "sneha@example.com", devices: 28, sales: 19, revenue: 950000, rating: 4.4, status: "pending" },
  { id: "V005", name: "Phone Planet", contact: "Vikram Singh", phone: "+91 9876543214", email: "vikram@example.com", devices: 34, sales: 26, revenue: 1250000, rating: 4.7, status: "active" },
];

export default function VendorsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#1D1D1F]">
            Vendor Management
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage vendors and track their performance
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8] transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Vendor
        </button>
      </div>

      <div className="bg-white rounded-2xl border-2 border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FBFBFD]">
              <tr className="text-left text-xs font-medium text-muted-foreground">
                <th className="px-4 py-3">Vendor</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Devices</th>
                <th className="px-4 py-3">Sales</th>
                <th className="px-4 py-3">Revenue</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {vendorsData.map((vendor) => (
                <tr key={vendor.id} className="border-t border-border hover:bg-[#FBFBFD]">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center">
                        <UserCircle className="h-6 w-6 text-[#3478F6]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1D1D1F]">{vendor.name}</p>
                        <p className="text-xs text-muted-foreground">{vendor.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#1D1D1F]">{vendor.contact}</p>
                    <p className="text-xs text-muted-foreground">{vendor.phone}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Package className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{vendor.devices}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{vendor.sales}</td>
                  <td className="px-4 py-3 font-medium text-[#3478F6]">₹{(vendor.revenue / 100000).toFixed(1)}L</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{vendor.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium",
                      vendor.status === "active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    )}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg hover:bg-[#F5F5F7] text-[#3478F6]">
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-lg">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-4">Add New Vendor</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Business Name</label>
                <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Enter business name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Contact Person</label>
                  <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone</label>
                  <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Phone number" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input type="email" className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Email address" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-2.5 border-2 border-border rounded-xl font-medium hover:bg-[#FBFBFD]">Cancel</button>
                <button type="submit" onClick={(e) => { e.preventDefault(); setShowAddModal(false); }} className="flex-1 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8]">Add Vendor</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
