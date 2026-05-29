import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Smartphone, IndianRupee, Truck, CheckCircle2, ShieldCheck, Clock, Headphones, RefreshCw } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Smartphone,
    title: "Select Your Device",
    desc: "Choose your device brand and model from our extensive catalog covering 2000+ devices.",
  },
  {
    icon: IndianRupee,
    title: "Get Instant Quote",
    desc: "Answer a few questions about your device's condition and get a real-time price estimate.",
  },
  {
    icon: Truck,
    title: "Free Doorstep Pickup",
    desc: "Schedule a convenient pickup time. Our certified agent will come to your location.",
  },
  {
    icon: CheckCircle2,
    title: "Instant Payment",
    desc: "Get paid immediately after device verification via UPI, bank transfer, or cash.",
  },
];

const guarantees = [
  { icon: ShieldCheck, title: "100% Secure", desc: "Data wiped securely with certified software" },
  { icon: Clock, title: "24-Hour Process", desc: "From pickup to payment in under 24 hours" },
  { icon: Headphones, title: "24/7 Support", desc: "Expert help available round the clock" },
  { icon: RefreshCw, title: "Best Price Match", desc: "We'll beat any competitor's quote" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[oklch(0.15_0.02_240)] to-[oklch(0.12_0.02_240)] py-20 px-4 text-center text-white">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl mb-4">
            How U2U Works
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Selling your old device has never been easier. Get the best price in just 4 simple steps.
          </p>
        </div>

        {/* Steps */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.title} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[oklch(0.6_0.18_195)] flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[oklch(0.68_0.19_45)] text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-center mb-12">
              The U2U Promise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((g) => (
                <div key={g.title} className="p-6 rounded-2xl bg-[oklch(0.98_0.005_240)] text-center">
                  <g.icon className="h-8 w-8 text-[oklch(0.6_0.18_195)] mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{g.title}</h4>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-4">
            Ready to Sell?
          </h2>
          <p className="text-muted-foreground mb-6">Get an instant quote for your device in 30 seconds</p>
          <Link
            href="/sell"
            className="inline-flex items-center gap-2 bg-[oklch(0.6_0.18_195)] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[oklch(0.55_0.18_195)] transition-colors"
          >
            Get Price Now
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
