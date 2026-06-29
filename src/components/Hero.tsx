"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="portfolio-section relative overflow-hidden pt-24"
    >
      <br /><br /><br /><br />
      <div className="site-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 py-28">

          {/* ── Text Content ── */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/5 border border-white/10 text-white text-sm font-semibold mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new opportunities
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.12] tracking-tight mb-8">
              Hi i'm Ravindu Dilhan{" "}
              <span className="text-gradient" style={{ fontFamily: "poppins", fontSize: "80px", color: "rgb(179, 186, 190)" }}> <br/> Checkout my portfolio</span>
              <br />
            </h1>
            <br />

            {/*<p className="text-foreground/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-12 leading-8">
              <span className="text-foreground/90 font-medium"> </span>.
            </p> */}

            <br />
            <br />

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">
                Work Together <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/W.G.Ravindu Dilhan CV.pdf" download className="btn-secondary">
                Download My CV <Download className="w-4 h-4" />
              </a>
            </div>
            <br />
            <br />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-30 mt-30 justify-center lg:justify-start"
            >
              {[
                { value: "10+", label: "Projects" },
                //{ value: "99.9%", label: "Uptime SLA" },
                { value: "5+", label: "CI/CD Pipelines" },
              ].map((s) => (
                <div key={s.label} className="text-left">
                  <div className="text-2xl md:text-3xl font-black text-gradient">{s.value}</div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-foreground/40 font-bold mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0, 0.71, 0.2, 1.01] }}
            className="flex-shrink-0 relative group"
          >
            {/* Glow halo */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-1000 animate-pulse" />

            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-lg overflow-hidden border border-white/8 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <Image
                src="/profile3.png"
                alt="Ravindu"
                fill
                sizes="(max-width: 768px) 288px, 400px"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>

            {/* Floating corner decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl hidden md:block"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-20 h-20 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl hidden md:block"
            />

            {/* Location badge */}
            <div className="absolute -bottom-5 -right-5 glass px-5 py-2.5 rounded-2xl border border-primary/25 shadow-xl z-10">
              <span className="text-xs font-black uppercase tracking-widest text-primary">..Undergraduate in University of Kelaniya</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
