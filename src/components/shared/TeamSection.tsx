"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Quote } from "lucide-react";

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    name: "Arjun Mehta",
    role: "CEO & Founder",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    name: "Priya Sharma",
    role: "Head of Operations",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    name: "Rohan Gupta",
    role: "Tech Lead",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    name: "Sneha Patel",
    role: "Director of Content",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    name: "Vikram Nair",
    role: "Product Manager",
  },
  {
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop",
    name: "Ananya Roy",
    role: "UX Researcher",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 md:py-20">
      {/* Decorative SVG */}
      <svg
        className="absolute right-0 bottom-0 text-[oklch(0.6_0.18_195/0.06)]"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="40"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center px-4 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.6_0.18_195)] text-white shadow-lg shadow-[oklch(0.6_0.18_195/0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.6_0.18_195)] mb-2">
            The People Behind U2U
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-5xl text-[oklch(0.12_0.01_240)] mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A passionate team of tech enthusiasts dedicated to making device resale simple, transparent, and rewarding for everyone.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent" />

          <Marquee className="[--gap:1.5rem] [--duration:35s]" pauseOnHover repeat={3}>
            {teamMembers.map((member) => (
              <div className="group flex w-56 shrink-0 flex-col" key={member.name}>
                <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    fill
                    src={member.image}
                  />
                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-white/85 backdrop-blur-sm p-3">
                    <h3 className="font-semibold text-[oklch(0.12_0.01_240)] text-sm">{member.name}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-16 max-w-2xl px-4 text-center">
          <div className="flex justify-center mb-4">
            <Quote className="h-8 w-8 text-[oklch(0.6_0.18_195/0.3)]" />
          </div>
          <p className="font-[family-name:var(--font-display)] font-medium text-lg md:text-xl text-[oklch(0.2_0.01_240)] leading-relaxed mb-6">
            &ldquo;U2U changed how I think about upgrading my phone. I got ₹42,000 for my old device in under 24 hours — zero hassle.&rdquo;
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[oklch(0.6_0.18_195/0.3)]">
              <Image
                alt="Reviewer"
                className="h-full w-full object-cover"
                fill
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
              />
            </div>
            <div>
              <p className="font-semibold text-sm text-[oklch(0.15_0.01_240)]">Pritha Banerjee</p>
              <p className="text-xs text-muted-foreground">Software Engineer · Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
