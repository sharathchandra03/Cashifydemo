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
    <footer className="bg-[oklch(0.1_0.02_240)] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[oklch(0.6_0.18_195)] flex items-center justify-center">
                <span className="text-white font-[family-name:var(--font-display)] font-extrabold text-base">U</span>
              </div>
              <span className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-white">
                2U
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              India&apos;s most trusted platform to sell old devices and buy certified refurbished electronics.
            </p>
            {/* Contact */}
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[oklch(0.6_0.18_195)]" />
                1800-XXX-XXXX (Toll Free)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[oklch(0.6_0.18_195)]" />
                support@u2u.in
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[oklch(0.6_0.18_195)] mt-0.5 shrink-0" />
                <span>U2U Technologies Pvt. Ltd., Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-sm text-white mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-[oklch(0.75_0.18_195)] transition-colors"
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
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} U2U Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
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
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[oklch(0.6_0.18_195)] flex items-center justify-center transition-colors"
              >
                <Icon className="h-3.5 w-3.5 text-white/60 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
