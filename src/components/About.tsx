"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, GraduationCap, BookOpen, Building } from "lucide-react";

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
            <div className="glass p-5 rounded-md border border-white/10 flex items-start gap-5 hover:border-white/20 hover:bg-white/[0.02] transition-colors group cursor-default">
            <br />  
              <div className="p-2.5 rounded-md text-foreground border border-white/10 group-hover:border-white/20 transition-colors shrink-0 mt-0.5">
                <GraduationCap size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base md:text-lg font-bold text-foreground leading-none">University of Kelaniya</h3> 
                <p className="text-sm md:text-base font-semibold text-foreground/80 leading-snug">BICT (Hons) — 2023–Present</p>
                <p className="text-sm text-foreground/50 leading-snug">Faculty of Computing and Technology University of Kelaniya</p>
              </div>
              <br />
            </div>

            {/* Card 2: ESOFT */}
            <div className="glass p-5 rounded-md border border-white/10 flex items-start gap-5 hover:border-white/20 hover:bg-white/[0.02] transition-colors group cursor-default">
              <br />
              <div className="p-2.5 rounded-md text-foreground border border-white/10 group-hover:border-white/20 transition-colors shrink-0 mt-0.5">
                <BookOpen size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base md:text-lg font-bold text-foreground leading-none">ESOFT Metro Campus</h3>
                <p className="text-sm md:text-base font-semibold text-foreground/80 leading-snug">Diploma in IT (DiTEC)</p>
                <p className="text-sm text-foreground/50 leading-snug">Foundation in Software Engineering & Networking</p>
              </div>
            </div>

            {/* Card 3: School */}
            <div className="glass p-5 rounded-md border border-white/10 flex items-start gap-5 hover:border-white/20 hover:bg-white/[0.02] transition-colors group cursor-default">
              <br />
              <div className="p-2.5 rounded-md text-foreground border border-white/10 group-hover:border-white/20 transition-colors shrink-0 mt-0.5">
                <Building size={20} strokeWidth={1.5} />
              </div> 
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base md:text-lg font-bold text-foreground leading-none">Bandaranayake College, Gampaha</h3>
                <p className="text-sm md:text-base font-semibold text-foreground/80 leading-snug">G.C.E. Advanced Level — 2019–2021</p>
                <p className="text-sm text-foreground/50 leading-snug">Technology Stream</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
