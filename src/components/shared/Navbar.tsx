"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, ChevronDown, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Sell",
    href: "/sell",
    children: ["Sell Mobile", "Sell Laptop", "Sell Tablet", "Sell Smartwatch"],
  },
  {
    label: "Buy",
    href: "/buy",
    children: ["Refurbished Phones", "Refurbished Laptops", "Accessories"],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top strip */}
      <div className="bg-[oklch(0.6_0.18_195)] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" /> Delivering across India
          </span>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> 1800-XXX-XXXX</span>
            <span>|</span>
            <Link href="/track" className="hover:underline">Track Order</Link>
            <span>|</span>
            <Link href="/franchise" className="hover:underline">Franchise</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[oklch(0.6_0.18_195)] flex items-center justify-center">
            <span className="text-white font-[family-name:var(--font-display)] font-800 text-sm leading-none">U</span>
          </div>
          <span className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[oklch(0.12_0.01_240)]">
            2U
          </span>
        </Link>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative">
          <div className="flex w-full rounded-xl border-2 border-[oklch(0.6_0.18_195)] overflow-hidden shadow-sm">
            <select className="bg-[oklch(0.96_0.01_195)] text-sm px-3 py-2 border-r border-[oklch(0.6_0.18_195)] text-[oklch(0.4_0.01_240)] outline-none cursor-pointer">
              <option>All</option>
              <option>Phones</option>
              <option>Laptops</option>
              <option>Tablets</option>
            </select>
            <input
              type="text"
              placeholder="Search for a device..."
              className="flex-1 px-3 py-2 text-sm outline-none bg-white"
            />
            <button className="bg-[oklch(0.6_0.18_195)] px-4 flex items-center justify-center hover:bg-[oklch(0.55_0.18_195)] transition-colors">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Nav links — desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-0.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  "text-[oklch(0.3_0.01_240)] hover:text-[oklch(0.6_0.18_195)] hover:bg-[oklch(0.96_0.01_195)]"
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-border p-2 w-48 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child}
                      href="#"
                      className="block px-3 py-2 text-sm text-[oklch(0.35_0.01_240)] hover:bg-[oklch(0.96_0.01_195)] hover:text-[oklch(0.6_0.18_195)] rounded-lg transition-colors"
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-medium text-[oklch(0.35_0.01_240)] hover:text-[oklch(0.6_0.18_195)] transition-colors px-3 py-2"
          >
            Login
          </Link>
          <Link
            href="/sell"
            className="bg-[oklch(0.68_0.19_45)] hover:bg-[oklch(0.62_0.19_45)] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
          >
            Sell Now
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
          <div className="flex w-full rounded-xl border-2 border-[oklch(0.6_0.18_195)] overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-[oklch(0.6_0.18_195)] px-3">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-2.5 text-sm font-medium text-[oklch(0.3_0.01_240)] hover:bg-[oklch(0.96_0.01_195)] rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block px-3 py-2.5 text-sm font-medium text-[oklch(0.3_0.01_240)] hover:bg-[oklch(0.96_0.01_195)] rounded-lg transition-colors"
          >
            Login / Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
