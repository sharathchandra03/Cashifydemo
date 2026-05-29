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
      <div className="min-h-screen bg-[oklch(0.98_0.005_240)] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[oklch(0.6_0.18_195)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const navItems = navItemsByRole[currentRole as UserRole] || navItemsByRole.superadmin;
  const roleInfo = roleConfig[currentRole as UserRole] || roleConfig.superadmin;

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_240)] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-border">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-[oklch(0.6_0.18_195)] flex items-center justify-center">
              <span className="text-white font-[family-name:var(--font-display)] font-800 text-sm">U</span>
            </div>
            <span className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[oklch(0.12_0.01_240)]">
              2U
            </span>
          </Link>
        </div>

        {/* Role Switcher */}
        <div className="p-3 border-b border-border">
          <button
            onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-[oklch(0.97_0.01_195)] hover:bg-[oklch(0.95_0.02_195)] transition-colors"
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", roleInfo.color)}>
              <roleInfo.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-sm text-[oklch(0.15_0.01_240)]">{roleInfo.label}</p>
              <p className="text-xs text-muted-foreground">Switch role</p>
            </div>
            <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", roleSwitcherOpen && "rotate-180")} />
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
                      "w-full flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors",
                      currentRole === role ? "bg-[oklch(0.6_0.18_195)] text-white" : "hover:bg-[oklch(0.98_0.005_240)]"
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
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[oklch(0.6_0.18_195)] text-white"
                    : "text-[oklch(0.3_0.01_240)] hover:bg-[oklch(0.97_0.01_195)]"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-border space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[oklch(0.3_0.01_240)] hover:bg-[oklch(0.97_0.01_195)] transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-[oklch(0.6_0.18_195)] flex items-center justify-center">
              <span className="text-white font-[family-name:var(--font-display)] font-800 text-sm">U</span>
            </div>
            <span className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[oklch(0.12_0.01_240)]">
              2U
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-[oklch(0.97_0.01_195)]">
              <Bell className="h-5 w-5 text-[oklch(0.3_0.01_240)]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-[oklch(0.97_0.01_195)]"
            >
              <Menu className="h-5 w-5 text-[oklch(0.3_0.01_240)]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="p-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-[oklch(0.6_0.18_195)] text-white"
                      : "text-[oklch(0.3_0.01_240)] hover:bg-[oklch(0.97_0.01_195)]"
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
        <header className="hidden lg:flex items-center justify-between p-4 border-b border-border bg-white">
          <h1 className="font-semibold text-[oklch(0.15_0.01_240)]">
            {navItems.find(item => item.href === pathname)?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-[oklch(0.97_0.01_195)] relative">
              <Bell className="h-5 w-5 text-[oklch(0.3_0.01_240)]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-[oklch(0.6_0.18_195)] flex items-center justify-center text-white font-medium text-sm">
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
