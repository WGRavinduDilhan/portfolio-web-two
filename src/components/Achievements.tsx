"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck, Database, Cloud, Cpu, Server } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "Mar 2026",
    link: "#",
    icon: <Cloud className="w-10 h-10 text-primary" />,
  },
  {
    title: "CKA: Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "Feb 2026",
    link: "#",
    icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Jan 2026",
    link: "#",
    icon: <Database className="w-10 h-10 text-indigo-400" />,
  },
  {
    title: "CKAD: Certified Kubernetes Developer",
    issuer: "CNCF",
    date: "Dec 2025",
    link: "#",
    icon: <Cpu className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "AWS Certified DevOps Engineer - Professional",
    issuer: "Amazon Web Services",
    date: "Nov 2025",
    link: "#",
    icon: <Server className="w-10 h-10 text-violet-400" />,
  },
  {
    title: "Google Cloud Certified Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "Oct 2025",
    link: "#",
    icon: <Award className="w-10 h-10 text-amber-400" />,
  },
];

export default function Achievements() {
  // Duplicate the list of certifications to create a seamless infinite horizontal marquee
  const marqueeItems = [...certifications, ...certifications];

  return (
    <section id="achievements" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6s]" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            <span className="section-label">Achievements</span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Numbers &amp; <span className="text-gradient">Credentials</span>
            </h2>
            <p className="section-subtitle max-w-3xl text-center text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Validated expertise through industry-recognized certification programs and real-world infrastructure engineering.
            </p>
          </div>
          <br /><br />
        </div>
      </div>

      {/* Full-width Infinite Auto-scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-8 select-none">
        {/* Ambient fade shadows on left and right edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track - Pauses on Hover */}
        <div className="flex w-max gap-8 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] py-4">
          {marqueeItems.map((cert, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[300px] sm:w-[360px] glass rounded-3xl p-8 flex flex-col justify-between border border-white/15 hover:border-primary/50 hover:bg-white/[0.04] transition-all duration-400 hover:-translate-y-3 hover:scale-[1.015] relative overflow-hidden shadow-2xl min-h-[360px] group cursor-pointer"
            >
              {/* Card background ambient glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon & Verified Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 rounded-lg bg-white/5 text-primary border border-white/10 shadow-inner group-hover:scale-110 group-hover:border-primary/40 transition-all duration-400">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-black text-primary bg-primary/10 uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-primary/20">
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-foreground/80 text-sm sm:text-base mb-6 flex items-center gap-3 font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cert.issuer}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-foreground/50 font-mono text-xs uppercase tracking-wider">{cert.date}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black text-primary hover:text-primary-light transition-colors group/link"
                >
                  Verify Link 
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /><br />

      {/* Elegant Auto-scroll Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/35 select-none pointer-events-none">
        <span>Hover cards to pause auto-scrolling</span>
        <span className="w-2.5 h-1 rounded-full bg-primary opacity-60 animate-pulse" />
      </div>
    </section>
  );
}
