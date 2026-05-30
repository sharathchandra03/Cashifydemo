"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  Store,
  BarChart3,
  Settings,
  ChevronDown,
  LogOut,
  Bell,
  Menu,
  X,
  Building2,
  UserCircle,
  ShieldCheck,
} from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

type UserRole = "superadmin" | "branch" | "vendor";

const roleConfig: Record<UserRole, { label: string; icon: React.ElementType; color: string }> = {
  superadmin: { label: "Super Admin", icon: ShieldCheck, color: "bg-purple-500" },
  branch: { label: "Branch Manager", icon: Building2, color: "bg-blue-500" },
  vendor: { label: "Vendor", icon: UserCircle, color: "bg-green-500" },
};

const navItemsByRole: Record<UserRole, Array<{ label: string; href: string; icon: React.ElementType }>> = {
  superadmin: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Inventory", href: "/dashboard/inventory", icon: Package },
    { label: "Branches", href: "/dashboard/branches", icon: Store },
    { label: "Vendors", href: "/dashboard/vendors", icon: Users },
    { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
  branch: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Inventory", href: "/dashboard/inventory", icon: Package },
    { label: "Leads", href: "/dashboard/leads", icon: Users },
    { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
  vendor: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "My Devices", href: "/dashboard/inventory", icon: Package },
    { label: "Purchases", href: "/dashboard/purchases", icon: Store },
    { label: "Earnings", href: "/dashboard/reports", icon: BarChart3 },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { currentRole, setRole } = useAppStore();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by showing loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FBFBFD] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#3478F6] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const navItems = navItemsByRole[currentRole as UserRole] || navItemsByRole.superadmin;
  const roleInfo = roleConfig[currentRole as UserRole] || roleConfig.superadmin;

  return (
    <div className="min-h-screen bg-[#FBFBFD] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-black/[0.06]">
        {/* Logo */}
        <div className="p-4 border-b border-black/[0.06]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0F044A] flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">U</span>
            </div>
            <span className="font-extrabold text-xl text-[#1D1D1F] tracking-tight">
              2U
            </span>
          </Link>
        </div>

        {/* Role Switcher */}
        <div className="p-3 border-b border-black/[0.06]">
          <button
            onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
            className="w-full flex items-center gap-3 p-3 rounded-[14px] bg-[#F5F5F7] hover:bg-[rgba(52,120,246,0.08)] transition-all duration-300"
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]", roleInfo.color === "bg-purple-500" ? "bg-[#3478F6]" : roleInfo.color === "bg-blue-500" ? "bg-[#0071E3]" : "bg-[#34C759]")}>
              <roleInfo.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-sm text-[#1D1D1F]">{roleInfo.label}</p>
              <p className="text-xs text-[#6E6E73]">Switch role</p>
            </div>
            <ChevronDown className={cn("h-4 w-4 text-[#6E6E73] transition-transform", roleSwitcherOpen && "rotate-180")} />
          </button>

          {/* Role Options */}
          {roleSwitcherOpen && (
            <div className="mt-2 space-y-1">
              {(Object.keys(roleConfig) as UserRole[]).map((role) => {
                const RoleIcon = roleConfig[role].icon;
                return (
                  <button
                    key={role}
                    onClick={() => { setRole(role); setRoleSwitcherOpen(false); }}
                    className={cn(
                      "w-full flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                      currentRole === role ? "bg-[#3478F6] text-white shadow-[0_4px_12px_rgba(52,120,246,0.3)]" : "hover:bg-[#F5F5F7] text-[#6E6E73]"
                    )}
                  >
                    {RoleIcon && <RoleIcon className="h-4 w-4" />}
                    {roleConfig[role].label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-[#3478F6] text-white shadow-[0_4px_16px_rgba(52,120,246,0.3)]"
                    : "text-[#6E6E73] hover:bg-[rgba(52,120,246,0.08)] hover:text-[#3478F6]"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-black/[0.06] space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#3478F6] transition-all duration-300"
          >
            <LogOut className="h-4 w-4" />
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0F044A] flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">U</span>
            </div>
            <span className="font-extrabold text-xl text-[#1D1D1F] tracking-tight">
              2U
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl hover:bg-[#F5F5F7] transition-colors">
              <Bell className="h-5 w-5 text-[#6E6E73]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl hover:bg-[#F5F5F7] transition-colors"
            >
              <Menu className="h-5 w-5 text-[#1D1D1F]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-between p-4 border-b border-black/[0.06]">
              <span className="font-semibold text-[#1D1D1F]">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-[#F5F5F7]">
                <X className="h-5 w-5 text-[#6E6E73]" />
              </button>
            </div>
            <nav className="p-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                    pathname === item.href
                      ? "bg-[#3478F6] text-white shadow-[0_4px_16px_rgba(52,120,246,0.3)]"
                      : "text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#3478F6]"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-between p-5 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
          <h1 className="font-semibold text-[#1D1D1F] text-lg">
            {navItems.find(item => item.href === pathname)?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl hover:bg-[#F5F5F7] relative transition-colors">
              <Bell className="h-5 w-5 text-[#6E6E73]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF3B30] rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3478F6] to-[#1D5FD8] flex items-center justify-center text-white font-semibold text-sm shadow-[0_4px_12px_rgba(52,120,246,0.3)]">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
