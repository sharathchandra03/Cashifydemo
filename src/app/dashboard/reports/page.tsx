"use client";

import { useState } from "react";
import { Download, Calendar, TrendingUp, DollarSign, Package, Users, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

// Mock data
const monthlyRevenue = [
  { month: "Jan", revenue: 850000, cost: 650000 },
  { month: "Feb", revenue: 920000, cost: 700000 },
  { month: "Mar", revenue: 1100000, cost: 820000 },
  { month: "Apr", revenue: 1050000, cost: 780000 },
  { month: "May", revenue: 1250000, cost: 920000 },
  { month: "Jun", revenue: 1400000, cost: 1050000 },
];

const categoryDistribution = [
  { name: "Mobile", value: 45, color: "oklch(0.6_0.18_195)" },
  { name: "Laptop", value: 25, color: "oklch(0.55_0.15_250)" },
  { name: "Tablet", value: 15, color: "oklch(0.68_0.19_45)" },
  { name: "Watch", value: 10, color: "oklch(0.5_0.1_80)" },
  { name: "Other", value: 5, color: "oklch(0.7_0.02_240)" },
];

const brandPerformance = [
  { brand: "Apple", sales: 245, revenue: 18500000 },
  { brand: "Samsung", sales: 189, revenue: 9800000 },
  { brand: "OnePlus", sales: 134, revenue: 5200000 },
  { brand: "Google", sales: 89, revenue: 3400000 },
  { brand: "Xiaomi", sales: 156, revenue: 4200000 },
];

const weeklyTrend = [
  { day: "Mon", sales: 45 },
  { day: "Tue", sales: 52 },
  { day: "Wed", sales: 48 },
  { day: "Thu", sales: 61 },
  { day: "Fri", sales: 58 },
  { day: "Sat", sales: 72 },
  { day: "Sun", sales: 65 },
];

export default function ReportsPage() {
  const { currentRole } = useAppStore();
  const [dateRange, setDateRange] = useState("last30days");
  const [activeTab, setActiveTab] = useState("overview");

  const isSuperAdmin = currentRole === "superadmin";

  const stats = [
    { label: "Total Revenue", value: "₹72.4L", change: "+12.5%", trend: "up", icon: DollarSign },
    { label: "Gross Profit", value: "₹21.8L", change: "+8.2%", trend: "up", icon: TrendingUp },
    { label: "Units Sold", value: "451", change: "+15.3%", trend: "up", icon: Package },
    { label: "New Customers", value: "128", change: "-2.1%", trend: "down", icon: Users },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[oklch(0.12_0.01_240)]">
            Reports & Analytics
          </h1>
          <p className="text-sm text-muted-foreground">
            Track performance metrics and business insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none bg-white"
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="thisQuarter">This Quarter</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-border rounded-xl font-medium hover:bg-[oklch(0.98_0.005_240)]">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        {["overview", "sales", "inventory", "customers"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2",
              activeTab === tab
                ? "border-[oklch(0.6_0.18_195)] text-[oklch(0.6_0.18_195)]"
                : "border-transparent text-muted-foreground hover:text-[oklch(0.3_0.01_240)]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border-2 border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.97_0.01_195)] flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-[oklch(0.6_0.18_195)]" />
              </div>
              <span className={cn(
                "flex items-center gap-0.5 text-xs font-medium",
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              )}>
                {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[oklch(0.12_0.01_240)]">
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl border-2 border-border p-5">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)] mb-4">Revenue vs Cost</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9_0.01_240)" />
                <XAxis dataKey="month" stroke="oklch(0.5_0.01_240)" fontSize={12} />
                <YAxis stroke="oklch(0.5_0.01_240)" fontSize={12} tickFormatter={(value) => `₹${value / 100000}L`} />
                <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                <Bar dataKey="revenue" fill="oklch(0.6_0.18_195)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" fill="oklch(0.68_0.19_45)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-2xl border-2 border-border p-5">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)] mb-4">Sales by Category</h3>
          <div className="h-64 flex items-center">
            <div className="w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-2">
              {categoryDistribution.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm flex-1">{cat.name}</span>
                  <span className="text-sm font-medium">{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Performance */}
        <div className="bg-white rounded-2xl border-2 border-border p-5">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)] mb-4">Brand Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={brandPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9_0.01_240)" horizontal={false} />
                <XAxis type="number" stroke="oklch(0.5_0.01_240)" fontSize={12} />
                <YAxis dataKey="brand" type="category" stroke="oklch(0.5_0.01_240)" fontSize={12} width={60} />
                <Tooltip formatter={(value: number, name) => [name === "revenue" ? `₹${value.toLocaleString()}` : value, name === "revenue" ? "Revenue" : "Sales"]} />
                <Bar dataKey="sales" fill="oklch(0.6_0.18_195)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-white rounded-2xl border-2 border-border p-5">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)] mb-4">Weekly Sales Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9_0.01_240)" />
                <XAxis dataKey="day" stroke="oklch(0.5_0.01_240)" fontSize={12} />
                <YAxis stroke="oklch(0.5_0.01_240)" fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="oklch(0.6_0.18_195)" strokeWidth={3} dot={{ fill: "oklch(0.6_0.18_195)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Branch Comparison (Super Admin only) */}
      {isSuperAdmin && (
        <div className="bg-white rounded-2xl border-2 border-border p-5">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)] mb-4">Branch Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-muted-foreground border-b border-border">
                  <th className="pb-3">Branch</th>
                  <th className="pb-3">Sales</th>
                  <th className="pb-3">Revenue</th>
                  <th className="pb-3">Avg. Order Value</th>
                  <th className="pb-3">Conversion Rate</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Mumbai Central", sales: 156, revenue: 12450000, aov: 79808, conversion: "68%" },
                  { name: "Delhi Connaught", sales: 134, revenue: 9850000, aov: 73507, conversion: "62%" },
                  { name: "Bangalore Koramangala", sales: 98, revenue: 7650000, aov: 78061, conversion: "71%" },
                  { name: "Hyderabad Hitech City", sales: 87, revenue: 6200000, aov: 71264, conversion: "59%" },
                  { name: "Chennai T Nagar", sales: 76, revenue: 5450000, aov: 71710, conversion: "64%" },
                ].map((branch) => (
                  <tr key={branch.name} className="border-t border-border">
                    <td className="py-3 font-medium text-[oklch(0.15_0.01_240)]">{branch.name}</td>
                    <td className="py-3">{branch.sales}</td>
                    <td className="py-3">₹{(branch.revenue / 100000).toFixed(1)}L</td>
                    <td className="py-3">₹{branch.aov.toLocaleString()}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {branch.conversion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
