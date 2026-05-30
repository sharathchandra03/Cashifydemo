import Link from "next/link";
import { Share2, X, PlayCircle, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Sell: ["Sell Mobile", "Sell Laptop", "Sell Tablet", "Sell Smartwatch", "Sell Desktop", "Sell Camera"],
  Buy: ["Refurbished Phones", "Refurbished Laptops", "Refurbished Tablets", "Accessories", "View All"],
  Company: ["About Us", "Careers", "Press", "Blog", "Sustainability", "Investors"],
  Support: ["Help Center", "Contact Us", "Track Order", "Return Policy", "Warranty", "Franchise"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F044A] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#3478F6] flex items-center justify-center shadow-[0_4px_16px_rgba(52,120,246,0.4)]">
                <span className="text-white font-extrabold text-lg">U</span>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                2U
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
              India&apos;s most trusted platform to sell old devices and buy certified refurbished electronics.
            </p>
            {/* Contact */}
            <div className="space-y-2.5 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#3478F6]" />
                1800-XXX-XXXX (Toll Free)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#3478F6]" />
                support@mobitrade.com
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#3478F6] mt-0.5 shrink-0" />
                <span>MobiTrade Technologies Pvt. Ltd., Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 hover:text-[#3478F6] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} MobiTrade Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/50">
            <Link href="#" className="hover:text-[#3478F6] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#3478F6] transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="hover:text-[#3478F6] transition-colors duration-300">Cookie Policy</Link>
          </div>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { Icon: Share2, href: "#", label: "Share" },
              { Icon: X, href: "#", label: "Twitter" },
              { Icon: Globe, href: "#", label: "Web" },
              { Icon: PlayCircle, href: "#", label: "Video" },
            ].map(({ Icon, href, label }, index) => (
              <a
                key={`social-${index}-${label}`}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#3478F6] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_12px_rgba(52,120,246,0.4)]"
              >
                <Icon className="h-4 w-4 text-white/70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
