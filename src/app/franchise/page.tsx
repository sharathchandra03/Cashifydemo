"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Building2, TrendingUp, Users, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const benefits = [
  { icon: Building2, title: "Low Investment", desc: "Start your franchise with minimal investment and high ROI potential" },
  { icon: TrendingUp, title: "High Margins", desc: "Earn attractive commissions on every device sold through your branch" },
  { icon: Users, title: "Full Support", desc: "Get complete training, marketing materials, and operational guidance" },
  { icon: BadgeCheck, title: "Trusted Brand", desc: "Leverage U2U's reputation as India's most trusted resale platform" },
];

const requirements = [
  "500-800 sq ft commercial space in prime location",
  "Investment capacity of ₹15-25 Lakhs",
  "Passion for technology and customer service",
  "Local market knowledge and network",
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[oklch(0.15_0.02_240)] to-[oklch(0.12_0.02_240)] py-20 px-4 text-center text-white">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl mb-4">
            Partner with U2U
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Join India's fastest-growing electronics resale network. Start your own U2U franchise and be part of the circular economy revolution.
          </p>
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 bg-[oklch(0.68_0.19_45)] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[oklch(0.62_0.19_45)] transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Stats */}
        <section className="py-12 px-4 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Franchise Partners" },
              { value: "200+", label: "Cities Covered" },
              { value: "₹50L+", label: "Avg Annual Revenue" },
              { value: "60%+", label: "Gross Margin" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] font-bold text-3xl text-[oklch(0.6_0.18_195)]">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-center mb-12">
              Why Partner with U2U?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-2xl bg-white border-2 border-border text-center hover:border-[oklch(0.6_0.18_195)] transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-[oklch(0.97_0.01_195)] flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-7 w-7 text-[oklch(0.6_0.18_195)]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-center mb-8">
              Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3 p-4 bg-[oklch(0.98_0.005_240)] rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-[oklch(0.6_0.18_195)] shrink-0 mt-0.5" />
                  <p className="text-sm">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Form */}
        <section id="apply" className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-center mb-8">
              Apply for Franchise
            </h2>
            <div className="bg-white rounded-2xl border-2 border-border p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                    <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <input type="email" className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                  <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="+91 9876543210" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">City</label>
                  <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="City name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Investment Budget</label>
                  <select className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none">
                    <option>₹15-20 Lakhs</option>
                    <option>₹20-25 Lakhs</option>
                    <option>₹25-30 Lakhs</option>
                    <option>Above ₹30 Lakhs</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message (Optional)</label>
                  <textarea rows={3} className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none resize-none" placeholder="Tell us about yourself..." />
                </div>
                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  className="w-full py-3 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-semibold hover:bg-[oklch(0.55_0.18_195)] transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
