"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  children,
  repeat = 4,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-[var(--gap)]",
            vertical ? "flex-col" : "flex-row",
            vertical
              ? isPaused
                ? "![animation-play-state:paused]"
                : reverse
                ? "[animation-direction:reverse] animate-[marquee-vertical_var(--duration)_linear_infinite]"
                : "animate-[marquee-vertical_var(--duration)_linear_infinite]"
              : isPaused
              ? "![animation-play-state:paused]"
              : reverse
              ? "[animation-direction:reverse] animate-[marquee_var(--duration)_linear_infinite]"
              : "animate-[marquee_var(--duration)_linear_infinite]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
