"use client";

import { useState } from "react";
import { User, Mail, Phone, Bell, Shield, CreditCard, Store } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "payment", label: "Payment", icon: CreditCard },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[oklch(0.12_0.01_240)]">
          Settings
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border-2 border-border p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-[oklch(0.6_0.18_195)] text-white"
                    : "text-[oklch(0.3_0.01_240)] hover:bg-[oklch(0.97_0.01_195)]"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border-2 border-border p-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Profile Information</h3>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[oklch(0.6_0.18_195)] flex items-center justify-center text-white text-2xl font-medium">
                    JD
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-[oklch(0.6_0.18_195)] text-white rounded-lg text-sm font-medium hover:bg-[oklch(0.55_0.18_195)]">
                      Change Photo
                    </button>
                    <p className="text-xs text-muted-foreground mt-2">JPG, PNG. Max 2MB</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                    <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" defaultValue="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <input type="email" className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" defaultValue="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" defaultValue="+91 9876543210" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Role</label>
                    <input className="w-full px-3 py-2.5 rounded-xl border-2 border-border bg-[oklch(0.98_0.005_240)]" defaultValue="Branch Manager" disabled />
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-medium hover:bg-[oklch(0.55_0.18_195)]">
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { label: "Email notifications for new orders", checked: true },
                    { label: "SMS alerts for pickup requests", checked: true },
                    { label: "Push notifications for inventory updates", checked: false },
                    { label: "Weekly summary reports", checked: true },
                  ].map((item, i) => (
                    <label key={i} className="flex items-center justify-between p-4 bg-[oklch(0.98_0.005_240)] rounded-xl cursor-pointer">
                      <span className="text-sm font-medium">{item.label}</span>
                      <input type="checkbox" defaultChecked={item.checked} className="w-5 h-5 accent-[oklch(0.6_0.18_195)]" />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Security Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Current Password</label>
                    <input type="password" className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Enter current password" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">New Password</label>
                    <input type="password" className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Enter new password" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Confirm New Password</label>
                    <input type="password" className="w-full px-3 py-2.5 rounded-xl border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none" placeholder="Confirm new password" />
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-[oklch(0.6_0.18_195)] text-white rounded-xl font-medium hover:bg-[oklch(0.55_0.18_195)]">
                  Update Password
                </button>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Payment Settings</h3>
                <div className="p-4 bg-[oklch(0.98_0.005_240)] rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[oklch(0.6_0.18_195)] flex items-center justify-center text-white">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Bank Account</p>
                        <p className="text-xs text-muted-foreground">HDFC Bank •••• 4523</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span>
                  </div>
                  <button className="text-sm text-[oklch(0.6_0.18_195)] hover:underline">Change Account</button>
                </div>
                <div className="p-4 bg-[oklch(0.98_0.005_240)] rounded-xl">
                  <p className="font-medium text-sm mb-2">UPI ID</p>
                  <div className="flex items-center gap-2">
                    <input className="flex-1 px-3 py-2 rounded-lg border-2 border-border focus:border-[oklch(0.6_0.18_195)] focus:outline-none text-sm" defaultValue="johndoe@upi" />
                    <button className="px-3 py-2 bg-[oklch(0.6_0.18_195)] text-white rounded-lg text-sm font-medium">Update</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
