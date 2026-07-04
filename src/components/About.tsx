"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, GraduationCap, BookOpen, Building, School } from "lucide-react";

const competencies = [
  "Cloud Architecture (AWS)/(Azure)/(GCP)",
  "Kubernetes & Docker",
  "Infrastructure as Code",
  "CI/CD Automation",
  "System Observability",
  "Full Stack Dev",
];

export default function About() {
  return (
    <section id="about" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:gap-20 gap-10">

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
              Who Am I
            </h2>

            <div className="space-y-6 text-foreground/65 text-lg md:text-xl leading-relaxed mb-6">
              <p>
                Third-year undergraduate at the University of Kelaniya following BICT(Hons), specializing in Networking Technology, with a strong foundation in modern DevOps methodologies and full-stack development.
              </p>
              <br />
              <p>
                Experienced in delivering real-world software products using technologies like Django, Next.js, PHP, PostgreSQL, Docker, Kubernetes, Terraform and cloud technologies. Committed to building highly reliable, scalable systems by bridging the gap between robust network infrastructure and containerized application design.
              </p>
              <br />
              <p>
                Currently seeking a DevOps Internship to leverage my industry experience in building secure, automated, and resilient solutions.
              </p>
            </div>
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

            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-lg overflow-hidden border border-white/8 shadow-2xl">
              <Image
                src="/profile3.png"
                alt="Ravindu"
                fill
                sizes="(max-width: 768px) 288px, 400px"
                className="object-cover"
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
            {/* <div className="absolute -bottom-5 -right-5 glass px-5 py-2.5 rounded-2xl border border-primary/25 shadow-xl z-10">
                        <span className="text-xs font-black uppercase tracking-widest text-primary">&nbsp;&nbsp; University of Kelaniya</span>
                      </div> */}
          </motion.div>

        </div>
        <br></br><br/>
        <br></br><br /><br /><br />
      </div>
    </section>
  );
}
