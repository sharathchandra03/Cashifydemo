"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Plus, MoreHorizontal, Edit2, Trash2, Eye, CheckCircle2, XCircle, AlertCircle, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

// Mock inventory data
const inventoryData = [
  { id: "INV001", device: "iPhone 14 Pro Max 256GB", category: "mobile", brand: "apple", grade: "A+", status: "in_stock", price: 58999, cost: 48000, branch: "Mumbai Central", added: "2024-01-15", imei: "356789012345678" },
  { id: "INV002", device: "Samsung S23 Ultra 256GB", category: "mobile", brand: "samsung", grade: "A", status: "sold", price: 46999, cost: 38000, branch: "Delhi Connaught", added: "2024-01-14", imei: "356789012345679" },
  { id: "INV003", device: "MacBook Pro M2 16\" 512GB", category: "laptop", brand: "apple", grade: "A", status: "in_stock", price: 159999, cost: 135000, branch: "Bangalore Koramangala", added: "2024-01-13", imei: "C02ZV0V2MD6R" },
  { id: "INV004", device: "OnePlus 12 256GB", category: "mobile", brand: "oneplus", grade: "A+", status: "assigned", price: 31999, cost: 26000, branch: "Mumbai Central", added: "2024-01-12", imei: "356789012345680" },
  { id: "INV005", device: "Google Pixel 8 Pro 256GB", category: "mobile", brand: "google", grade: "B", status: "in_stock", price: 34999, cost: 29000, branch: "Delhi Connaught", added: "2024-01-11", imei: "356789012345681" },
  { id: "INV006", device: "iPad Pro 12.9\" M2 256GB", category: "tablet", brand: "apple", grade: "A+", status: "pending", price: 79999, cost: 68000, branch: "Bangalore Koramangala", added: "2024-01-10", imei: "356789012345682" },
  { id: "INV007", device: "Dell XPS 15 i7 16GB", category: "laptop", brand: "dell", grade: "A", status: "in_stock", price: 52999, cost: 42000, branch: "Mumbai Central", added: "2024-01-09", imei: "SN123456789" },
  { id: "INV008", device: "Samsung Galaxy Tab S9 Ultra", category: "tablet", brand: "samsung", grade: "A", status: "returned", price: 54999, cost: 46000, branch: "Delhi Connaught", added: "2024-01-08", imei: "356789012345683" },
  { id: "INV009", device: "iPhone 13 128GB", category: "mobile", brand: "apple", grade: "A+", status: "sold", price: 34999, cost: 28000, branch: "Mumbai Central", added: "2024-01-07", imei: "356789012345684" },
  { id: "INV010", device: "ASUS ROG Zephyrus G14", category: "laptop", brand: "asus", grade: "B", status: "in_stock", price: 61999, cost: 52000, branch: "Bangalore Koramangala", added: "2024-01-06", imei: "SN987654321" },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  in_stock: { label: "In Stock", color: "bg-green-100 text-green-700", icon: CheckCircle2 },
  sold: { label: "Sold", color: "bg-blue-100 text-blue-700", icon: CheckCircle2 },
  assigned: { label: "Assigned", color: "bg-purple-100 text-purple-700", icon: Package },
  pending: { label: "Pending", color: "bg-amber-100 text-amber-700", icon: AlertCircle },
  returned: { label: "Returned", color: "bg-red-100 text-red-700", icon: XCircle },
  transferred: { label: "Transferred", color: "bg-gray-100 text-gray-700", icon: Package },
};

const gradeConfig: Record<string, { label: string; color: string }> = {
  "A+": { label: "A+", color: "bg-[#3478F6] text-white" },
  "A": { label: "A", color: "bg-[#5B7CF5] text-white" },
  "B": { label: "B", color: "bg-[#D4A574] text-white" },
};

export default function InventoryPage() {
  const { currentRole } = useAppStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch = item.device.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.imei.includes(searchQuery);
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const stats = {
    total: inventoryData.length,
    inStock: inventoryData.filter(i => i.status === "in_stock").length,
    sold: inventoryData.filter(i => i.status === "sold").length,
    pending: inventoryData.filter(i => i.status === "pending").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#1D1D1F]">
            Inventory Management
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage all devices across your {currentRole === "superadmin" ? "branches" : "location"}
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8] transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Device
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Devices", value: stats.total, color: "bg-[#3478F6]" },
          { label: "In Stock", value: stats.inStock, color: "bg-green-500" },
          { label: "Sold", value: stats.sold, color: "bg-blue-500" },
          { label: "Pending", value: stats.pending, color: "bg-amber-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border-2 border-border p-4">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white", stat.color)}>
                <Package className="h-5 w-5" />
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

      {/* Filters */}
      <div className="bg-white rounded-2xl border-2 border-border p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by device, ID, or IMEI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="in_stock">In Stock</option>
            <option value="sold">Sold</option>
            <option value="assigned">Assigned</option>
            <option value="pending">Pending</option>
            <option value="returned">Returned</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
          >
            <option value="all">All Categories</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
            <option value="watch">Smartwatch</option>
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl border-2 border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FBFBFD]">
              <tr className="text-left text-xs font-medium text-muted-foreground">
                <th className="px-4 py-3">Device</th>
                <th className="px-4 py-3">ID / IMEI</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Branch</th>
                <th className="px-4 py-3">Added</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredInventory.map((item) => {
                const StatusIcon = statusConfig[item.status].icon;
                return (
                  <tr key={item.id} className="border-t border-border hover:bg-[#FBFBFD]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
                          <Package className="h-5 w-5 text-[#3478F6]" />
                        </div>
                        <div>
                          <p className="font-medium text-[#1D1D1F]">{item.device}</p>
                          <p className="text-xs text-muted-foreground capitalize">{item.category} • {item.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-[#1D1D1F]">{item.id}</p>
                      <p className="text-xs text-muted-foreground">{item.imei}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("px-2 py-0.5 rounded text-xs font-medium", gradeConfig[item.grade].color)}>
                        {item.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium", statusConfig[item.status].color)}>
                        <StatusIcon className="h-3 w-3" />
                        {statusConfig[item.status].label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-[#1D1D1F]">₹{item.price.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Cost: ₹{item.cost.toLocaleString()}</p>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{item.branch}</td>
                    <td className="px-4 py-3 text-muted-foreground">{item.added}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg hover:bg-[#F5F5F7] text-[#3478F6]">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-[#F5F5F7] text-[#3478F6]">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredInventory.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No devices found matching your filters.</p>
          </div>
        )}
      </div>

      {/* Add Device Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-4">Add New Device</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Category</label>
                  <select className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none">
                    <option>Mobile</option>
                    <option>Laptop</option>
                    <option>Tablet</option>
                    <option>Watch</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Brand</label>
                  <select className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none">
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>OnePlus</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Model</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                  placeholder="e.g. iPhone 14 Pro Max"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Grade</label>
                  <select className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none">
                    <option>A+</option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Status</label>
                  <select className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none">
                    <option>In Stock</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Selling Price</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                    placeholder="₹"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Cost Price</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                    placeholder="₹"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">IMEI / Serial Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[#3478F6] focus:outline-none"
                  placeholder="Enter IMEI or Serial Number"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 border-2 border-border rounded-xl font-medium hover:bg-[#FBFBFD]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={(e) => { e.preventDefault(); setShowAddModal(false); }}
                  className="flex-1 py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8]"
                >
                  Add Device
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
