"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Phone, Mail, ArrowRight } from "lucide-react";
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
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.98_0.005_240)]">
        <div className="w-8 h-8 border-4 border-[oklch(0.6_0.18_195)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[oklch(0.98_0.005_240)] p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-[oklch(0.6_0.18_195)] flex items-center justify-center">
              <span className="text-white font-[family-name:var(--font-display)] font-extrabold text-lg">U</span>
            </div>
            <span className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[oklch(0.12_0.01_240)]">
              2U
            </span>
          </Link>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl mt-4 mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl border-2 border-border p-6">
          {/* Method Toggle */}
          <div className="flex gap-2 p-1 bg-[oklch(0.98_0.005_240)] rounded-xl mb-6">
            <button
              onClick={() => setMethod("phone")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                method === "phone" ? "bg-white shadow-sm" : "text-muted-foreground"
              }`}
            >
              <Phone className="h-4 w-4" /> Phone
            </button>
            <button
              onClick={() => setMethod("email")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                method === "email" ? "bg-white shadow-sm" : "text-muted-foreground"
              }`}
            >
              <Mail className="h-4 w-4" /> Email
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {method === "phone" ? (
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
                />
              </div>
            ) : (
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link href="#" className="text-[oklch(0.6_0.18_195)] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Signing in..." : <>Sign In <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          {/* Demo Roles */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center mb-3">Quick access (Demo)</p>
            <div className="grid grid-cols-3 gap-2">
              {["superadmin", "branch", "vendor"].map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleLogin(role as "superadmin" | "branch" | "vendor")}
                  className="py-2 px-3 bg-[oklch(0.97_0.01_195)] rounded-lg text-xs font-medium capitalize hover:bg-[oklch(0.95_0.02_195)] transition-colors"
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-[oklch(0.6_0.18_195)] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
