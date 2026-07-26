"use client";

import React, { useEffect, useRef, useState } from "react";

const LOG_MESSAGES = [
  "kubectl apply -f deployment.yaml",
  "Build #482 passed successfully",
  "Container health check: OK",
  "Replicas scaling up to 5",
  "Ingress route updated",
  "PostgreSQL connection established",
  "[WARN] High memory utilization in pod-a3f2",
  "Deploying microservice: auth-service",
  "Terraform apply complete! Resources: 3 added, 0 changed",
  "Starting node exporter on port 9100",
  "Pulling image: node:18-alpine",
  "AWS S3 bucket policy updated",
  "Prometheus metrics scraped",
  "Starting ArgoCD sync",
  "Job completed: db-migration",
];

export default function DevOpsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastGlowTime = 0;
    const GRID_SIZE = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      // Mouse moves left, grid moves slightly right (parallax)
      const x = (e.clientX / window.innerWidth - 0.5) * -40; 
      const y = (e.clientY / window.innerHeight - 0.5) * -40;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const glows: { x: number; y: number; createdAt: number; duration: number }[] = [];

    const render = (timestamp: number) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastGlowTime > Math.random() * 2000 + 3000) {
        const cols = Math.floor(canvas.width / GRID_SIZE);
        const rows = Math.floor(canvas.height / GRID_SIZE);
        
        glows.push({
          x: Math.floor(Math.random() * cols) * GRID_SIZE,
          y: Math.floor(Math.random() * rows) * GRID_SIZE,
          createdAt: timestamp,
          duration: 3000, 
        });
        
        lastGlowTime = timestamp;
      }

      for (let i = glows.length - 1; i >= 0; i--) {
        const glow = glows[i];
        const elapsed = timestamp - glow.createdAt;
        const progress = elapsed / glow.duration;

        if (progress >= 1) {
          glows.splice(i, 1);
          continue;
        }

        const opacity = Math.sin(progress * Math.PI) * 0.4; 
        
        ctx.beginPath();
        ctx.arc(glow.x, glow.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 211, 0, ${opacity})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(glow.x, glow.y, 15, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 15);
        grad.addColorStop(0, `rgba(255, 211, 0, ${opacity * 0.5})`);
        grad.addColorStop(1, "rgba(255, 211, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  // Generate a deterministic repeating string of logs to prevent SSR hydration mismatches
  const logsText = Array.from({ length: 10 })
    .flatMap(() => LOG_MESSAGES)
    .join("\n");

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      <div 
        ref={gridRef}
        className="absolute inset-[-50px] opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          willChange: "transform",
          transition: "transform 0.2s ease-out", // Smooth out the mouse movement
        }}
      />
      {!prefersReducedMotion && (
        <div className="absolute inset-0 flex justify-center opacity-[0.03] blur-[1px]">
          <div 
            className="w-[120%] text-[10px] md:text-xs font-mono text-white whitespace-pre-wrap leading-loose animate-[scroll-logs_100s_linear_infinite]"
            style={{
              willChange: "transform",
            }}
          >
            {logsText}
          </div>
        </div>
      )}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full opacity-60"
      />
    </div>
  );
}
