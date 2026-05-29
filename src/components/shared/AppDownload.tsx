import Image from "next/image";
import { Smartphone } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="py-10 md:py-14 bg-[oklch(0.98_0.005_240)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl teal-gradient overflow-hidden relative">
          {/* Blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[oklch(0.68_0.19_45/0.15)] blur-2xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12 py-10 md:py-12">
            {/* Left copy */}
            <div className="flex-1 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <Smartphone className="h-3.5 w-3.5" /> Download the App
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl leading-tight mb-3">
                Get the U2U App.
                <span className="block text-white/70 text-xl md:text-2xl font-medium mt-1">
                  Sell in minutes. Buy with confidence.
                </span>
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-6 max-w-md">
                Get instant price quotes, track your order in real-time, and access exclusive app-only deals — all from your pocket.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-[oklch(0.15_0.01_240)] px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M3.18 23.76c.34.19.73.24 1.12.16l12.5-7.22-2.79-2.79-10.83 9.85zM.5 2.3C.19 2.67 0 3.19 0 3.84v16.32c0 .65.19 1.17.5 1.54l.08.08 9.15-9.15v-.22L.58 3.22.5 2.3zM19.62 10.5L16.8 8.82l-3.1 3.1 3.1 3.1 2.84-1.64c.81-.47.81-1.41 0-1.88zM4.3.08C3.91 0 3.52.06 3.18.25l.08.08 9.66 9.66 2.79-2.79L4.3.08z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] text-gray-500 leading-none">GET IT ON</div>
                    <div className="text-sm font-bold leading-none mt-0.5">Google Play</div>
                  </div>
                </a>
                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-[oklch(0.15_0.01_240)] px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] text-gray-500 leading-none">DOWNLOAD ON THE</div>
                    <div className="text-sm font-bold leading-none mt-0.5">App Store</div>
                  </div>
                </a>
              </div>
              {/* QR hint */}
              <p className="text-white/50 text-xs mt-4">⭐ 4.7 · 2.1 Lakh+ reviews on Play Store</p>
            </div>

            {/* Right: phone mockup */}
            <div className="relative flex-shrink-0 w-48 md:w-56">
              <div className="relative w-full aspect-[9/16]">
                <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl" />
                <Image
                  src="https://s3ng.cashify.in/cashify/store/product/8bbf11e143eb4cbaa7df09eafabc8dfe.png"
                  alt="U2U App"
                  fill
                  className="object-contain p-6 animate-float"
                />
              </div>
              {/* Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-[oklch(0.68_0.19_45/0.4)] blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
