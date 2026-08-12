"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { heroData, siteConfig } from "@/lib/data";
import { ArrowRight } from "@/lib/icons";
import {
  useReducedMotion,
  fadeInUp,
  noMotion,
} from "@/lib/animations";

/**
 * Animated node-graph network background.
 * Canvas-based for performance. Renders subtle connected nodes
 * evoking knowledge graphs / RAG pipelines.
 */
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const prefersReduced = useReducedMotion();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const time = Date.now() * 0.0003;

    // Fewer nodes on mobile for performance
    const nodeCount = width < 768 ? 25 : 50;
    const nodes: { x: number; y: number; size: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const baseX = ((i * 2654435761) % 1000) / 1000;
      const baseY = ((i * 340573321) % 1000) / 1000;
      nodes.push({
        x: baseX * width + Math.sin(time + i * 0.5) * 15,
        y: baseY * height + Math.cos(time + i * 0.7) * 15,
        size: 1.5 + (i % 3) * 0.5,
      });
    }

    ctx.clearRect(0, 0, width, height);

    // Draw edges
    const maxDist = width < 768 ? 120 : 180;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const node of nodes) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59, 130, 246, 0.25)";
      ctx.fill();
    }

    if (!prefersReduced) {
      animationRef.current = requestAnimationFrame(draw);
    }
  }, [prefersReduced]);

  useEffect(() => {
    draw();
    if (prefersReduced) return;

    const handleResize = () => draw();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? noMotion : fadeInUp;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Background layers */}
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <NetworkCanvas />

      {/* Content */}
      <div className="container-custom relative z-10 py-32 md:py-40 text-center max-w-[820px]">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          {heroData.headline}
        </motion.h1>

        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: prefersReduced ? 0 : 0.15 }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-[640px] mx-auto mb-10 leading-relaxed"
        >
          {heroData.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: prefersReduced ? 0 : 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
            <ArrowRight size={18} />
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: prefersReduced ? 0 : 0.45 }}
          className="text-sm text-[var(--color-text-tertiary)]"
        >
          {heroData.trustLine}
        </motion.p>
      </div>
    </section>
  );
}
