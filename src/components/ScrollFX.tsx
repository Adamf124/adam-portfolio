"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MOBILE_QUERY = "(max-width: 768px)";

/**
 * Wires up all scroll-driven GSAP animation for the page in one place, via
 * data-attribute queries — mirrors the original design's approach so any
 * section can opt in just by adding a data attribute, no per-component GSAP
 * wiring needed.
 */
export default function ScrollFX() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-line]", {
        yPercent: 112,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.14,
        delay: 0.15,
      });
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 26,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.7,
      });

      const hero = document.querySelector("[data-hero]");
      if (hero) {
        gsap.to("[data-hero-content]", {
          opacity: 0,
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom 30%",
            scrub: true,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        });
      });

      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");
      panels.forEach((panel, i) => {
        const next = panels[i + 1];
        if (!next) return;
        const inner = panel.querySelector<HTMLElement>(".af-panel-inner");
        if (!inner) return;
        gsap.to(inner, {
          scale: 0.95,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    });

    // Parallax range is tuned separately per breakpoint (shorter scrub
    // distance on mobile per product decision) via gsap.matchMedia so it
    // re-evaluates cleanly on resize/orientation change.
    const mm = gsap.matchMedia();
    mm.add({ isMobile: MOBILE_QUERY }, (context) => {
      const isMobile = !!(context.conditions as { isMobile?: boolean })
        ?.isMobile;
      const range = isMobile ? 2 : 3;

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const panel = el.closest("[data-panel]") || el;
        gsap.fromTo(
          el,
          { yPercent: -range },
          {
            yPercent: range,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return null;
}
