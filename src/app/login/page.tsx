"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useAppStore } from "@/store/app-store";

export default function LoginPage() {
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setRole } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  const handleRoleLogin = (role: "superadmin" | "branch" | "vendor") => {
    setRole(role);
    // Small delay to ensure state is persisted before navigation
    setTimeout(() => {
      router.push("/dashboard");
    }, 100);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBFD]">
        <div className="w-8 h-8 border-4 border-[#3478F6] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FBFBFD] via-white to-[#F5F5F7] p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#0F044A] flex items-center justify-center shadow-[0_8px_32px_rgba(52,120,246,0.3)]">
              <span className="text-white font-extrabold text-xl">U</span>
            </div>
            <span className="font-extrabold text-3xl text-[#1D1D1F] tracking-tight">
              2U
            </span>
          </Link>
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            <Sparkles className="h-4 w-4 text-[#3478F6]" />
            <span className="section-label">SECURE LOGIN</span>
          </div>
          <h1 className="font-extrabold text-3xl text-[#1D1D1F] tracking-tight">
            Welcome Back
          </h1>
          <p className="text-[#6E6E73] text-sm mt-2">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-[28px] border border-black/[0.09] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
          {/* Method Toggle */}
          <div className="flex gap-2 p-1.5 bg-[#F5F5F7] rounded-full mb-6">
            <button
              onClick={() => setMethod("phone")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                method === "phone" 
                  ? "bg-white text-[#3478F6] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
                  : "text-[#6E6E73] hover:text-[#3478F6]"
              }`}
            >
              <Phone className="h-4 w-4" /> Phone
            </button>
            <button
              onClick={() => setMethod("email")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                method === "email" 
                  ? "bg-white text-[#3478F6] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
                  : "text-[#6E6E73] hover:text-[#3478F6]"
              }`}
            >
              <Mail className="h-4 w-4" /> Email
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {method === "phone" ? (
              <div>
                <label className="text-sm font-semibold text-[#1D1D1F] mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-3.5 rounded-[14px] border border-black/[0.09] bg-[#FBFBFD] focus:border-[#3478F6] focus:bg-white focus:outline-none transition-all duration-300 text-[#1D1D1F] placeholder:text-[#A1A1A6]"
                />
              </div>
            ) : (
              <div>
                <label className="text-sm font-semibold text-[#1D1D1F] mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 rounded-[14px] border border-black/[0.09] bg-[#FBFBFD] focus:border-[#3478F6] focus:bg-white focus:outline-none transition-all duration-300 text-[#1D1D1F] placeholder:text-[#A1A1A6]"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-semibold text-[#1D1D1F] mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3.5 rounded-[14px] border border-black/[0.09] bg-[#FBFBFD] focus:border-[#3478F6] focus:bg-white focus:outline-none transition-all duration-300 text-[#1D1D1F] placeholder:text-[#A1A1A6]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1A6] hover:text-[#6E6E73] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded-[6px] border-[#3478F6] text-[#3478F6] focus:ring-[#3478F6]" />
                <span className="text-[#6E6E73]">Remember me</span>
              </label>
              <Link href="#" className="text-[#3478F6] font-medium hover:text-[#1D5FD8] transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#3478F6] hover:bg-[#1D5FD8] text-white rounded-full font-semibold transition-all duration-350 disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(52,120,246,0.4)] hover:shadow-[0_8px_32px_rgba(52,120,246,0.5)] hover:-translate-y-0.5"
            >
              {loading ? "Signing in..." : <>Sign In <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          {/* Demo Roles */}
          <div className="mt-6 pt-6 border-t border-black/[0.06]">
            <p className="text-xs text-[#6E6E73] text-center mb-3 font-medium">Quick access (Demo)</p>
            <div className="grid grid-cols-3 gap-3">
              {["superadmin", "branch", "vendor"].map((role, idx) => (
                <button
                  key={role}
                  onClick={() => handleRoleLogin(role as "superadmin" | "branch" | "vendor")}
                  className={`py-2.5 px-3 rounded-full text-xs font-semibold capitalize transition-all duration-300 ${
                    idx === 0 
                      ? "bg-[#0F044A] text-white shadow-[0_4px_16px_rgba(15,4,74,0.3)] hover:shadow-[0_8px_24px_rgba(15,4,74,0.4)]" 
                      : "bg-[#F5F5F7] text-[#6E6E73] hover:bg-[#3478F6] hover:text-white"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-[#6E6E73] mt-6">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-[#3478F6] font-semibold hover:text-[#1D5FD8] transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
