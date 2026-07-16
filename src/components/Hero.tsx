"use client";

import { useEffect, useRef } from "react";

const ACCENT = "#c6a15b";
const FG = "#e8e4db";
const MOBILE_BREAKPOINT = 768;

type Point = {
  x: number;
  y: number;
  z: number;
  r: number;
  vx: number;
  vy: number;
  ph: number;
  accent: boolean;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let points: Point[] = [];
    let raf = 0;
    let t = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let alive = true;

    const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

    function size() {
      if (!canvas || !ctx) return;
      const mobile = isMobile();
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const maxCount = mobile ? 140 : 260;
      const divisor = mobile ? 8600 : 6200;
      const count = Math.min(maxCount, Math.floor((w * h) / divisor));
      const sizeScale = mobile ? 1.1 : 1.5;
      points = [];
      for (let i = 0; i < count; i++) {
        const z = 0.25 + Math.random() * 0.75;
        points.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.55 + z * sizeScale,
          vx: (Math.random() - 0.5) * 0.12 * z,
          vy: (Math.random() - 0.5) * 0.12 * z,
          ph: Math.random() * Math.PI * 2,
          accent: Math.random() < 0.2,
        });
      }
      if (reduced) draw(0);
    }

    function draw(time: number) {
      if (!ctx) return;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        const px = p.x + mouse.x * 26 * p.z;
        const py = p.y + mouse.y * 26 * p.z;
        const tw = 0.55 + 0.45 * Math.sin(time * (0.6 + p.z) + p.ph);
        const alpha = (0.2 + p.z * 0.52) * tw;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        if (p.accent) {
          ctx.fillStyle = ACCENT;
          ctx.globalAlpha = alpha;
        } else {
          ctx.fillStyle = FG;
          ctx.globalAlpha = alpha * 0.8;
        }
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function loop() {
      if (!alive) return;
      t += 0.016;
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    function startLoop() {
      if (reduced || document.hidden) return;
      if (!raf) raf = requestAnimationFrame(loop);
    }

    function stopLoop() {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    const onResize = () => size();
    const onPointer = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer);
    document.addEventListener("visibilitychange", onVisibility);

    size();
    canvas.dataset.ready = "true";
    startLoop();

    return () => {
      alive = false;
      stopLoop();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section id="top" data-hero className="af-hero">
      <canvas ref={canvasRef} className="af-hero-canvas" />
      <div className="af-hero-vignette" />
      <div data-hero-content className="af-hero-content">
        <div data-hero-fade className="af-hero-eyebrow">
          Atlanta, GA · Full-Stack Developer
        </div>
        <h1 className="af-hero-title">
          <span className="af-hero-line-mask">
            <span data-hero-line className="af-hero-line">
              Adam
            </span>
          </span>
          <span className="af-hero-line-mask italic">
            <span data-hero-line className="af-hero-line accent">
              Ferguson
            </span>
          </span>
        </h1>
        <p data-hero-fade className="af-hero-sub">
          I build storefronts, marketing sites, and internal tools for people
          who don&apos;t read code. Design in Claude, build in Next.js, ship
          something correct.
        </p>
        <div data-hero-fade className="af-hero-ctas">
          <a href="#work" className="af-btn-outline">
            Selected Work
          </a>
          <a href="mailto:adam@adamferguson.pro" className="af-hero-email">
            adam@adamferguson.pro
          </a>
        </div>
      </div>
      <div className="af-scrollcue">SCROLL</div>
    </section>
  );
}
