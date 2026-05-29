import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom easing curves from STYLE.md
export const customEase = {
  cinematic: "cubic-bezier(0.16, 1, 0.3, 1)", // expo out
  snap: "cubic-bezier(0.34, 1.56, 0.64, 1)", // spring-like
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // standard
};

// Preset animations
export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay }
  );
};

export const staggerFadeIn = (elements: string | Element[], staggerDelay = 0.1) => {
  return gsap.fromTo(
    elements,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: staggerDelay, ease: "power3.out" }
  );
};

export const scaleIn = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay }
  );
};

export const slideInFromLeft = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { x: -40, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay }
  );
};

export const slideInFromRight = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { x: 40, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay }
  );
};

// ScrollTrigger reveal preset
export const scrollReveal = (
  element: string | Element,
  options?: { y?: number; delay?: number; duration?: number }
) => {
  const { y = 30, delay = 0, duration = 0.6 } = options || {};

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element as Element,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Stagger children on scroll
export const staggerScrollReveal = (
  parent: string | Element,
  children: string,
  staggerDelay = 0.1
) => {
  return gsap.fromTo(
    children,
    { y: 24, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: staggerDelay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: parent as Element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export { gsap, ScrollTrigger, useGSAP };
