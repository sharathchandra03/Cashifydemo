"use client";

import { TrendingUp, TrendingDown, Package, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Mock data for charts
const salesData = [
  { name: "Mon", sales: 120, purchases: 80 },
  { name: "Tue", sales: 150, purchases: 100 },
  { name: "Wed", sales: 180, purchases: 120 },
  { name: "Thu", sales: 140, purchases: 90 },
  { name: "Fri", sales: 200, purchases: 150 },
  { name: "Sat", sales: 240, purchases: 180 },
  { name: "Sun", sales: 210, purchases: 160 },
];

const recentActivity = [
  { id: 1, type: "sale", device: "iPhone 14 Pro Max", price: 58999, user: "Rahul Kumar", time: "2 mins ago", status: "completed" },
  { id: 2, type: "purchase", device: "Samsung S23 Ultra", price: 46999, user: "Priya Sharma", time: "15 mins ago", status: "pending" },
  { id: 3, type: "sale", device: "MacBook Pro M2", price: 159999, user: "Amit Patel", time: "1 hour ago", status: "completed" },
  { id: 4, type: "purchase", device: "Pixel 8 Pro", price: 34999, user: "Neha Gupta", time: "2 hours ago", status: "completed" },
  { id: 5, type: "sale", device: "OnePlus 12", price: 31999, user: "Vikram Singh", time: "3 hours ago", status: "in_progress" },
];

const topDevices = [
  { name: "iPhone 14 Pro Max", sales: 45, revenue: 2654955 },
  { name: "Samsung S23 Ultra", sales: 38, revenue: 1785962 },
  { name: "MacBook Air M2", sales: 32, revenue: 2495968 },
  { name: "Pixel 8 Pro", sales: 28, revenue: 979972 },
  { name: "OnePlus 12", sales: 25, revenue: 799975 },
];

export default function DashboardPage() {
  const { currentRole } = useAppStore();

  const isSuperAdmin = currentRole === "superadmin";
  const isBranch = currentRole === "branch";
  const isVendor = currentRole === "vendor";

  // KPI Cards based on role
  const kpiCards = isSuperAdmin
    ? [
        { label: "Total Revenue", value: "₹12.5Cr", change: "+12.5%", trend: "up", icon: DollarSign },
        { label: "Total Sales", value: "1,284", change: "+8.2%", trend: "up", icon: Package },
        { label: "Active Branches", value: "24", change: "+2", trend: "up", icon: Users },
        { label: "Pending Pickups", value: "156", change: "-5.1%", trend: "down", icon: Clock },
      ]
    : isBranch
    ? [
        { label: "Branch Revenue", value: "₹45.2L", change: "+15.3%", trend: "up", icon: DollarSign },
        { label: "Devices Sold", value: "156", change: "+22", trend: "up", icon: Package },
        { label: "Active Leads", value: "34", change: "+8", trend: "up", icon: Users },
        { label: "In Stock", value: "89", change: "-12", trend: "down", icon: Activity },
      ]
    : [
        { label: "Total Earnings", value: "₹8.4L", change: "+18.5%", trend: "up", icon: DollarSign },
        { label: "Devices Sold", value: "42", change: "+7", trend: "up", icon: Package },
        { label: "Commission Rate", value: "12%", change: "+2%", trend: "up", icon: TrendingUp },
        { label: "Pending Payment", value: "₹45K", change: "3 orders", trend: "neutral", icon: Clock },
      ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-br from-[oklch(0.15_0.02_240)] to-[oklch(0.12_0.02_240)] rounded-2xl p-6 text-white">
        <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-2">
          Welcome back, {isSuperAdmin ? "Admin" : isBranch ? "Branch Manager" : "Vendor"}
        </h1>
        <p className="text-white/60 text-sm">
          {isSuperAdmin
            ? "Here's what's happening across all branches today."
            : isBranch
            ? "Here's your branch performance for today."
            : "Track your sales and earnings here."}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-2xl border-2 border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.97_0.01_195)] flex items-center justify-center">
                <kpi.icon className="h-5 w-5 text-[oklch(0.6_0.18_195)]" />
              </div>
              <span className={cn(
                "flex items-center gap-0.5 text-xs font-medium",
                kpi.trend === "up" ? "text-green-600" : kpi.trend === "down" ? "text-red-600" : "text-muted-foreground"
              )}>
                {kpi.trend === "up" ? <TrendingUp className="h-3 w-3" /> : kpi.trend === "down" ? <TrendingDown className="h-3 w-3" /> : null}
                {kpi.change}
              </span>
            </div>
            <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[oklch(0.12_0.01_240)]">
              {kpi.value}
            </p>
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border-2 border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[oklch(0.15_0.01_240)]">Sales & Purchases Overview</h3>
            <select className="text-sm border-2 border-border rounded-lg px-2 py-1">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="oklch(0.6_0.18_195)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="oklch(0.6_0.18_195)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPurchases" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="oklch(0.68_0.19_45)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="oklch(0.68_0.19_45)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9_0.01_240)" />
                <XAxis dataKey="name" stroke="oklch(0.5_0.01_240)" fontSize={12} />
                <YAxis stroke="oklch(0.5_0.01_240)" fontSize={12} />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="oklch(0.6_0.18_195)" fillOpacity={1} fill="url(#colorSales)" />
                <Area type="monotone" dataKey="purchases" stroke="oklch(0.68_0.19_45)" fillOpacity={1} fill="url(#colorPurchases)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Devices */}
        <div className="bg-white rounded-2xl border-2 border-border p-5">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)] mb-4">Top Selling Devices</h3>
          <div className="space-y-3">
            {topDevices.map((device, i) => (
              <div key={device.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[oklch(0.97_0.01_195)] flex items-center justify-center text-xs font-medium text-[oklch(0.6_0.18_195)]">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[oklch(0.15_0.01_240)] truncate">{device.name}</p>
                  <p className="text-xs text-muted-foreground">{device.sales} sold</p>
                </div>
                <span className="text-sm font-semibold text-[oklch(0.6_0.18_195)]">
                  ₹{(device.revenue / 100000).toFixed(1)}L
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border-2 border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-[oklch(0.15_0.01_240)]">Recent Activity</h3>
          <button className="text-sm text-[oklch(0.6_0.18_195)] hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b border-border">
                <th className="pb-3 font-medium">Device</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {recentActivity.map((activity) => (
                <tr key={activity.id} className="border-b border-border last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-2 h-2 rounded-full",
                        activity.type === "sale" ? "bg-green-500" : "bg-blue-500"
                      )} />
                      <span className="font-medium text-[oklch(0.15_0.01_240)]">{activity.device}</span>
                    </div>
                  </td>
                  <td className="py-3 text-muted-foreground">{activity.user}</td>
                  <td className="py-3 font-medium text-[oklch(0.15_0.01_240)]">₹{activity.price.toLocaleString()}</td>
                  <td className="py-3">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium",
                      activity.status === "completed" ? "bg-green-100 text-green-700" :
                      activity.status === "pending" ? "bg-amber-100 text-amber-700" :
                      "bg-blue-100 text-blue-700"
                    )}>
                      {activity.status}
                    </span>
                  </td>
                  <td className="py-3 text-muted-foreground">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Helper for cn
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
