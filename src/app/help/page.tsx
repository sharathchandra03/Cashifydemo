import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Search, Phone, Mail, MessageCircle, FileText, Truck, RefreshCw, Shield } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  { icon: Truck, title: "Shipping & Delivery", count: 12 },
  { icon: RefreshCw, title: "Returns & Refunds", count: 8 },
  { icon: Shield, title: "Warranty & Repairs", count: 15 },
  { icon: FileText, title: "Selling Your Device", count: 20 },
];

const popularQuestions = [
  "How do I sell my old phone?",
  "What is device grading?",
  "How long does delivery take?",
  "Can I return a device?",
  "What payment methods do you accept?",
  "How do I track my order?",
];

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0F044A] to-[#1a0d5c] py-16 px-4 text-center text-white">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl mb-4">
            How Can We Help?
          </h1>
          <p className="text-white/70 mb-8">Search our knowledge base or browse categories</p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-[#1D1D1F] focus:outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {faqCategories.map((cat) => (
                <Link
                  key={cat.title}
                  href="#"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-border hover:border-[#3478F6] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                    <cat.icon className="h-6 w-6 text-[#3478F6]" />
                  </div>
                  <div>
                    <p className="font-semibold">{cat.title}</p>
                    <p className="text-sm text-muted-foreground">{cat.count} articles</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6">Popular Questions</h2>
            <div className="space-y-3">
              {popularQuestions.map((q) => (
                <Link
                  key={q}
                  href="#"
                  className="flex items-center justify-between p-4 bg-[#FBFBFD] rounded-xl hover:bg-[#F5F5F7] transition-colors"
                >
                  <span>{q}</span>
                  <span className="text-[#3478F6]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6 text-center">Still Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-white rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-5 w-5 text-[#3478F6]" />
                </div>
                <p className="font-semibold mb-1">Call Us</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 9AM-8PM</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-5 w-5 text-[#3478F6]" />
                </div>
                <p className="font-semibold mb-1">Email Us</p>
                <p className="text-sm text-muted-foreground">support@mobitrade.com</p>
                <p className="text-xs text-muted-foreground mt-1">Response in 24h</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-border text-center">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-5 w-5 text-[#3478F6]" />
                </div>
                <p className="font-semibold mb-1">Live Chat</p>
                <p className="text-sm text-muted-foreground">Chat with us</p>
                <p className="text-xs text-muted-foreground mt-1">Usually replies instantly</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
