"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How does the selling process work on U2U?",
    a: "Select your device, answer a few questions about its condition, get an instant quote, schedule a free pickup at your convenience, and receive payment immediately after verification — all within 24 hours.",
  },
  {
    q: "How is the price of my device determined?",
    a: "Our AI-powered pricing engine evaluates your device's brand, model, age, storage, and condition to give you the best market price. Prices are updated in real-time to match demand.",
  },
  {
    q: "What is the condition grading system for refurbished devices?",
    a: "We use a Grade A+, A, and B system. Grade A+ means the device is practically indistinguishable from new. Grade A has minor cosmetic marks only visible under bright light. Grade B may have visible signs of use but functions perfectly.",
  },
  {
    q: "How long does it take to receive payment?",
    a: "Payment is initiated immediately after our agent verifies your device. You can choose bank transfer, UPI, or cash payment. Bank transfers typically arrive within 2 hours.",
  },
  {
    q: "What if I'm not satisfied with the refurbished device I purchased?",
    a: "We offer a 7-day no-questions-asked return policy on all purchases. If the device doesn't meet your expectations, request a return and we'll arrange free pickup and a full refund.",
  },
  {
    q: "Do refurbished devices come with a warranty?",
    a: "Yes! All Grade A+ and Grade A devices come with a 12-month U2U warranty. Grade B devices carry a 6-month warranty. Our service centers are located in 50+ cities across India.",
  },
  {
    q: "Which cities does U2U operate in?",
    a: "U2U currently operates in 200+ cities across India including all metros (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata) and Tier-2 cities. Check availability for your pincode on our app.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={cn(
        "border rounded-2xl px-5 transition-all duration-200 shadow-sm hover:shadow-md",
        isOpen
          ? "border-[oklch(0.6_0.18_195/0.4)] bg-[oklch(0.98_0.01_195)]"
          : "border-border bg-white"
      )}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        onClick={onToggle}
      >
        <span
          className={cn(
            "font-semibold text-sm md:text-base transition-colors",
            isOpen ? "text-[oklch(0.6_0.18_195)]" : "text-[oklch(0.15_0.01_240)]"
          )}
        >
          {q}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180 text-[oklch(0.6_0.18_195)]"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-48 pb-4" : "max-h-0"
        )}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.6_0.18_195)] mb-2 block">
            Got Questions?
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-4xl text-[oklch(0.12_0.01_240)]">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Everything you need to know about selling and buying on U2U.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-8 text-center p-6 rounded-2xl bg-[oklch(0.97_0.01_195)] border border-[oklch(0.6_0.18_195/0.2)]">
          <p className="text-sm font-medium text-[oklch(0.2_0.01_240)]">Still have questions?</p>
          <p className="text-xs text-muted-foreground mt-1 mb-3">
            Our support team is available 24/7 to help you out.
          </p>
          <a
            href="mailto:support@u2u.in"
            className="inline-flex items-center gap-2 bg-[oklch(0.6_0.18_195)] hover:bg-[oklch(0.55_0.18_195)] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
