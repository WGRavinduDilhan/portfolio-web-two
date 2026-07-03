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

          {/* ── Education Summary Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex flex-col gap-4"
          >
            {/* Card 1: University */}
            <div className="glass p-8 sm:p-10 rounded-2xl border border-white/10 flex items-center gap-6 sm:gap-8 hover:border-white/20 hover:bg-white/[0.02] transition-all group cursor-default shadow-xl">
              {"\u00A0"}<div className="p-4 bg-white/5 rounded-xl border border-white/10 shrink-0">
                <GraduationCap size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">University of Kelaniya</h3>
                <p className="text-base font-semibold text-foreground/80 leading-snug">BICT(Hons) Degree 2023 – Present</p>
                <p className="text-sm md:text-base text-foreground/50 leading-relaxed">Faculty of Computing & Technology University of Kelaniya</p>
              </div>
            </div>

            {/* Card 2: ESOFT */}
            <div className="glass p-8 sm:p-10 rounded-2xl border border-white/10 flex items-center gap-6 sm:gap-8 hover:border-white/20 hover:bg-white/[0.02] transition-all group cursor-default shadow-xl">
              {"\u00A0"}<div className="p-4 bg-white/5 rounded-xl border border-white/10 shrink-0">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">ESOFT Metro Campus</h3>
                <p className="text-base font-semibold text-foreground/80 leading-snug">Diploma in IT (DiTEC)</p>
                <p className="text-sm md:text-base text-foreground/50 leading-relaxed">Foundation in Software Engineering & Networking</p>
              </div>
            </div>

            {/* Card 3: School */}
            <div className="glass p-8 sm:p-10 rounded-2xl border border-white/10 flex items-center gap-6 sm:gap-8 hover:border-white/20 hover:bg-white/[0.02] transition-all group cursor-default shadow-xl">
              {"\u00A0"}<div className="p-4 bg-white/5 rounded-xl border border-white/10 shrink-0">
                <School size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">Bandaranayake College, Gampaha</h3>
                <p className="text-base font-semibold text-foreground/80 leading-snug">G.C.E. Advanced Level — 2019–2022</p>
                <p className="text-sm md:text-base text-foreground/50 leading-relaxed">Technology Stream</p>
              </div>
            </div>
          </motion.div>
        </div>
        <br></br>
        <br></br><br /><br />
      </div>
    </section>
  );
}
