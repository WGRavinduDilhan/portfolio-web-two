"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const competencies = [
  "Cloud Architecture (AWS)/(Azure)/(GCP)",
  "Kubernetes & Docker",
  "Infrastructure as Code",
  "CI/CD Automation",
  "System Observability",
  "Full Stack Development",
];

export default function About() {
  return (
    <section id="about" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <span className="section-label">Introduction</span>

            <h2 className="section-title">
              Engineering{" "}
              <span className="text-gradient">Resilience</span>
              <br />at Scale.
            </h2>

            <div className="space-y-8 text-foreground/65 text-xl leading-relaxed mb-16">
              <p>
                Hi, I&apos;m <span className="text-foreground font-semibold">Ravindu</span> — a Full Stack Developer
                specialising in <span className="text-white font-semibold">SRE and DevOps engineering</span>. 
                I build systems that don&apos;t just work, but thrive under pressure.
              </p>
              <p>
                With a focus on <span className="text-primary font-semibold">automation and observability</span>, 
                I bridge the gap between development and operations to deliver high-performance, 
                fault-tolerant infrastructure.
              </p>
            </div>

            <div className="pt-12 border-t border-white/5">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40 mb-8">Expertise Domains</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {competencies.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-4 text-base font-bold text-foreground/70 group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-lg">
              {/* Dynamic Borders */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[4rem] translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700" />
              <div className="absolute inset-0 border-2 border-accent/15 rounded-[4rem] -translate-x-8 -translate-y-8 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700 -z-10" />

              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden glass border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <Image
                  src="/profile.png"
                  alt="Ravindu"
                  fill
                  className="object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute -bottom-8 -right-8 glass px-8 py-5 rounded-[2rem] border border-primary/25 z-20 shadow-2xl">
                <p className="text-[11px] font-black text-foreground/40 uppercase tracking-widest mb-1">Based In</p>
                <p className="text-sm font-black text-primary">Colombo, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
