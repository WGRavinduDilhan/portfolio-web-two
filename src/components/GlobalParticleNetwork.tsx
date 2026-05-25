"use client";

import React, { useEffect, useRef } from "react";

export default function GlobalParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Density-based particle count (optimized for full screen viewport)
    const getParticleCount = (w: number, h: number) => {
      const area = w * h;
      return Math.min(100, Math.max(30, Math.floor(area / 18000)));
    };

    let particleCount = getParticleCount(width, height);

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28, // Slower, elegant, non-distracting speed
          vy: (Math.random() - 0.5) * 0.28,
          radius: Math.random() * 1.5 + 0.8,
        });
      }
    };

    initParticles();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particleCount = getParticleCount(width, height);
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw & Update Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.65)"; // Vibrant Indigo base
        ctx.fill();
      });

      // Draw Constellation Mesh Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Draw lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          // Connect particles within range
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 125) * 0.22; // Vibrant global connection alpha
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-80 z-0"
    />
  );
}
