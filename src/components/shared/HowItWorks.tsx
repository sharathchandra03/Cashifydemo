import Link from "next/link";
import { Smartphone, IndianRupee, Truck, CheckCircle2 } from "lucide-react";

const sellSteps = [
  {
    step: "01",
    icon: Smartphone,
    title: "Select Your Device",
    desc: "Choose the device you want to sell. Pick the brand, model, and answer a few questions.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    step: "02",
    icon: IndianRupee,
    title: "Get Instant Price",
    desc: "Get a real-time quote based on your device's condition. Best price guaranteed.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    step: "03",
    icon: Truck,
    title: "Free Doorstep Pickup",
    desc: "Schedule a free pickup at your convenience. Our agent comes to your door.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Get Paid Instantly",
    desc: "Payment transferred to your account or cash-on-pickup. Same day!",
    color: "bg-green-50 text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 mesh-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[oklch(0.6_0.18_195)] mb-2">
            Simple Process
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-4xl text-[oklch(0.12_0.01_240)]">
            Sell Your Device in
            <span className="text-[oklch(0.6_0.18_195)]"> 4 Easy Steps</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
            We've made selling your old device as simple as possible. Get paid in under 24 hours.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 via-orange-200 to-green-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {sellSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="flex flex-col items-center text-center group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Icon circle */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[oklch(0.6_0.18_195)] text-white text-[10px] font-bold flex items-center justify-center shadow">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-base text-[oklch(0.15_0.01_240)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/sell"
            className="inline-flex items-center gap-2 bg-[oklch(0.6_0.18_195)] hover:bg-[oklch(0.55_0.18_195)] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Start Selling Now
          </Link>
          <p className="text-xs text-muted-foreground mt-3">Free pickup · Instant payment · No hidden charges</p>
        </div>
      </div>
    </section>
  );
}
