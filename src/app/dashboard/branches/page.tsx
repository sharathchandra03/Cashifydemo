"use client";

import { useState } from "react";
import { Building2, MapPin, Phone, Users, Package, TrendingUp, MoreHorizontal, Edit2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const branchesData = [
  { id: "BR001", name: "Mumbai Central", address: "123 Marine Lines, Mumbai, Maharashtra", phone: "+91 9876543210", manager: "Rahul Sharma", staff: 12, inventory: 245, sales: 156, revenue: 12450000, status: "active" },
  { id: "BR002", name: "Delhi Connaught", address: "45 Connaught Place, New Delhi", phone: "+91 9876543211", manager: "Priya Patel", staff: 10, inventory: 198, sales: 134, revenue: 9850000, status: "active" },
  { id: "BR003", name: "Bangalore Koramangala", address: "789 100 Feet Road, Bangalore, Karnataka", phone: "+91 9876543212", manager: "Amit Kumar", staff: 8, inventory: 156, sales: 98, revenue: 7650000, status: "active" },
  { id: "BR004", name: "Hyderabad Hitech City", address: "321 Hitech City Road, Hyderabad", phone: "+91 9876543213", manager: "Sneha Reddy", staff: 6, inventory: 124, sales: 87, revenue: 6200000, status: "active" },
  { id: "BR005", name: "Chennai T Nagar", address: "654 Usman Road, Chennai, Tamil Nadu", phone: "+91 9876543214", manager: "Vikram Iyer", staff: 7, inventory: 112, sales: 76, revenue: 5450000, status: "active" },
];

export default function BranchesPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#1D1D1F]">
            Branch Management
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage all your branch locations and their performance
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8] transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Branch
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Branches", value: "5", icon: Building2 },
          { label: "Total Staff", value: "43", icon: Users },
          { label: "Total Inventory", value: "835", icon: Package },
          { label: "Total Revenue", value: "₹41.6Cr", icon: TrendingUp },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border-2 border-border p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-[#3478F6]" />
              </div>
              <div>
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1D1D1F]">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Branches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {branchesData.map((branch) => (
          <div key={branch.id} className="bg-white rounded-2xl border-2 border-border p-5 hover:border-[#3478F6] transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <Building2 className="h-6 w-6 text-[#3478F6]" />
              </div>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs font-medium",
                branch.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
              )}>
                {branch.status}
              </span>
            </div>

            <h3 className="font-semibold text-[#1D1D1F] mb-1">{branch.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              {branch.address}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#FBFBFD] rounded-lg p-2.5">
                <p className="text-lg font-bold text-[#1D1D1F]">{branch.staff}</p>
                <p className="text-xs text-muted-foreground">Staff</p>
              </div>
              <div className="bg-[#FBFBFD] rounded-lg p-2.5">
                <p className="text-lg font-bold text-[#1D1D1F]">{branch.inventory}</p>
                <p className="text-xs text-muted-foreground">Inventory</p>
              </div>
              <div className="bg-[#FBFBFD] rounded-lg p-2.5">
                <p className="text-lg font-bold text-[#1D1D1F]">{branch.sales}</p>
                <p className="text-xs text-muted-foreground">Sales</p>
              </div>
              <div className="bg-[#FBFBFD] rounded-lg p-2.5">
                <p className="text-lg font-bold text-[#3478F6]">₹{(branch.revenue / 100000).toFixed(1)}L</p>
                <p className="text-xs text-muted-foreground">Revenue</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Manager</p>
                <p className="text-sm font-medium text-[#1D1D1F]">{branch.manager}</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-[#F5F5F7] text-[#3478F6]">
                <Edit2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-lg">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-4">Add New Branch</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Branch Name</label>
                <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Enter branch name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Address</label>
                <textarea className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none resize-none" rows={3} placeholder="Complete address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone</label>
                  <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Manager</label>
                  <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none" placeholder="Manager name" />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-2.5 border-2 border-border rounded-xl font-medium hover:bg-[#FBFBFD]">Cancel</button>
                <button type="submit" onClick={(e) => { e.preventDefault(); setShowAddModal(false); }} className="flex-1 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8]">Add Branch</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
