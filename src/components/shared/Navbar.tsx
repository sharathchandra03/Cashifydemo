"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Menu, X, ChevronDown, MapPin, Phone, Sparkles } from "lucide-react";
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
    <header className="sticky top-0 z-50">
      {/* Top strip - Deep Navy */}
      <div className="bg-[#0F044A] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-white/80">
            <Sparkles className="h-3 w-3 text-[#3478F6]" /> 
            <span className="font-medium">India&apos;s #1 Device Marketplace</span>
          </span>
          <div className="hidden sm:flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> All Cities</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> 1800-XXX-XXXX</span>
          </div>
        </div>
      </div>

      {/* Main nav - White with subtle shadow */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/MobitradeLogo.png"
            alt="MobiTrade"
            width={280}
            height={80}
            className="h-[72px] w-auto object-contain -my-2"
          />
        </Link>

        {/* Search bar - Pill shaped */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <div className="flex w-full rounded-full border border-black/[0.09] overflow-hidden bg-[#FBFBFD] hover:border-black/[0.2] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <select className="bg-transparent text-sm px-4 py-2.5 border-r border-black/[0.09] text-[#6E6E73] outline-none cursor-pointer font-medium">
              <option>All</option>
              <option>Phones</option>
              <option>Laptops</option>
              <option>Tablets</option>
            </select>
            <input
              type="text"
              placeholder="Search for a device..."
              className="flex-1 px-4 py-2.5 text-sm outline-none bg-transparent text-[#1D1D1F] placeholder:text-[#A1A1A6]"
            />
            <button className="bg-[#3478F6] px-5 flex items-center justify-center hover:bg-[#1D5FD8] transition-all duration-300 m-1 rounded-full">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Nav links - desktop */}
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
                  "flex items-center gap-0.5 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                  "text-[#6E6E73] hover:text-[#3478F6] hover:bg-[rgba(52,120,246,0.08)]"
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-black/[0.06] p-2 w-52 z-50 overflow-hidden">
                  {link.children.map((child) => (
                    <Link
                      key={child}
                      href="#"
                      className="block px-4 py-2.5 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#3478F6] rounded-xl transition-colors"
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
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-semibold text-[#6E6E73] hover:text-[#3478F6] transition-colors px-4 py-2"
          >
            Login
          </Link>
          <Link
            href="/sell"
            className="bg-[#3478F6] hover:bg-[#1D5FD8] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-350 shadow-[0_4px_16px_rgba(52,120,246,0.35)] hover:shadow-[0_8px_24px_rgba(52,120,246,0.5)] hover:-translate-y-0.5"
          >
            Sell Device
          </Link>
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-[#F5F5F7] transition-colors text-[#1D1D1F]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/[0.06] bg-white/98 backdrop-blur-xl px-4 py-5 space-y-1 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
          <div className="flex w-full rounded-full border border-black/[0.09] overflow-hidden bg-[#FBFBFD] mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-3 text-sm outline-none bg-transparent"
            />
            <button className="bg-[#3478F6] px-4 m-1 rounded-full">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-sm font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#3478F6] rounded-xl transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-black/[0.06]">
            <Link
              href="/login"
              className="block px-4 py-3 text-sm font-semibold text-[#6E6E73] hover:text-[#3478F6] rounded-xl transition-colors"
            >
              Login / Sign Up
            </Link>
            <Link
              href="/sell"
              className="block mx-4 mt-2 bg-[#3478F6] text-white text-center text-sm font-semibold px-5 py-3 rounded-full shadow-[0_4px_16px_rgba(52,120,246,0.35)]"
            >
              Sell Your Device
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
