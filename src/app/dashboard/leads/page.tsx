"use client";

import { useState } from "react";
import { Phone, User, Calendar, Clock, CheckCircle2, XCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const leadsData = [
  { id: "LD001", name: "Rahul Kumar", phone: "+91 9876543210", device: "iPhone 14 Pro Max", expected: 55000, offered: 52000, status: "new", date: "2024-01-15", time: "10:30 AM", notes: "Screen has minor scratches" },
  { id: "LD002", name: "Priya Sharma", phone: "+91 9876543211", device: "Samsung S23 Ultra", expected: 48000, offered: 45000, status: "contacted", date: "2024-01-15", time: "11:15 AM", notes: "Battery health 85%" },
  { id: "LD003", name: "Amit Patel", phone: "+91 9876543212", device: "MacBook Air M2", expected: 85000, offered: 78000, status: "negotiating", date: "2024-01-14", time: "2:30 PM", notes: "Box and accessories available" },
  { id: "LD004", name: "Neha Gupta", phone: "+91 9876543213", device: "Pixel 8 Pro", expected: 38000, offered: 35000, status: "converted", date: "2024-01-14", time: "4:00 PM", notes: "Excellent condition" },
  { id: "LD005", name: "Vikram Singh", phone: "+91 9876543214", device: "OnePlus 12", expected: 32000, offered: 30000, status: "lost", date: "2024-01-13", time: "3:45 PM", notes: "Price too low for customer" },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  new: { label: "New Lead", color: "bg-blue-100 text-blue-700" },
  contacted: { label: "Contacted", color: "bg-purple-100 text-purple-700" },
  negotiating: { label: "Negotiating", color: "bg-amber-100 text-amber-700" },
  converted: { label: "Converted", color: "bg-green-100 text-green-700" },
  lost: { label: "Lost", color: "bg-red-100 text-red-700" },
};

export default function LeadsPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredLeads = statusFilter === "all" ? leadsData : leadsData.filter(l => l.status === statusFilter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[oklch(0.12_0.01_240)]">
            Lead Management
          </h1>
          <p className="text-sm text-muted-foreground">
            Track and manage customer sell requests
          </p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border-2 border-border rounded-xl focus:border-[oklch(0.6_0.18_195)] focus:outline-none"
        >
          <option value="all">All Leads</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="negotiating">Negotiating</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {Object.entries(statusConfig).map(([key, config]) => {
          const count = leadsData.filter(l => l.status === key).length;
          return (
            <div key={key} className="bg-white rounded-2xl border-2 border-border p-4">
              <p className="text-2xl font-bold text-[oklch(0.12_0.01_240)]">{count}</p>
              <p className="text-xs text-muted-foreground">{config.label}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-white rounded-2xl border-2 border-border p-5 hover:border-[oklch(0.6_0.18_195/0.5)] transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.97_0.01_195)] flex items-center justify-center shrink-0">
                  <User className="h-6 w-6 text-[oklch(0.6_0.18_195)]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[oklch(0.15_0.01_240)]">{lead.name}</h3>
                    <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", statusConfig[lead.status].color)}>
                      {statusConfig[lead.status].label}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> {lead.phone}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {lead.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {lead.time}</span>
                  </div>
                  <p className="text-sm mt-2">
                    <span className="text-muted-foreground">Device: </span>
                    <span className="font-medium text-[oklch(0.15_0.01_240)]">{lead.device}</span>
                  </p>
                  {lead.notes && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> {lead.notes}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Expected</p>
                    <p className="font-medium">₹{lead.expected.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Offered</p>
                    <p className="font-medium text-[oklch(0.6_0.18_195)]">₹{lead.offered.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm bg-[oklch(0.6_0.18_195)] text-white rounded-lg hover:bg-[oklch(0.55_0.18_195)]">
                    Update
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500">
                    <XCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
