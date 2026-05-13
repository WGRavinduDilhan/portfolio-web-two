"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Database, Cloud, Cpu, Server } from "lucide-react";

const stats = [
  { value: "15+",       label: "Projects Completed",     icon: <Cpu className="w-8 h-8" /> },
  { value: "50+ Nodes", label: "Infrastructure Managed", icon: <Server className="w-8 h-8" /> },
  { value: "99.9%",     label: "System Uptime",          icon: <ShieldCheck className="w-8 h-8" /> },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    link: "#",
    icon: <Cloud className="w-10 h-10 text-primary" />,
  },
  {
    title: "CKAD: Certified Kubernetes Developer",
    issuer: "CNCF",
    date: "Dec 2025",
    link: "#",
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Oct 2025",
    link: "#",
    icon: <Database className="w-10 h-10 text-indigo-400" />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Achievements</span>
            <h2 className="section-title mx-auto">
              Numbers &amp; <span className="text-gradient">Credentials</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-xl">
              Validated expertise through industry-recognised certification programmes and
              real-world infrastructure engineering at scale.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-32 items-stretch">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-[3.5rem] p-12 text-center group hover:border-primary/40 transition-all duration-500 border border-white/[0.08] shadow-2xl relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="inline-flex p-6 rounded-3xl bg-white/5 text-primary mb-8 group-hover:bg-primary/10 transition-all duration-500 shadow-inner relative z-10">
                {s.icon}
              </div>
              <div className="text-6xl font-black text-gradient mb-3 relative z-10">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-black relative z-10">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-10 text-[11px] font-black uppercase tracking-[0.4em] text-foreground/20">
              Validated Technical Credentials
            </span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass rounded-[3rem] p-14 flex flex-col group border border-white/[0.08] hover:border-primary/30 transition-all duration-500 relative overflow-hidden shadow-2xl h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-x-4 -translate-y-4 group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex items-start justify-between mb-12">
                <div className="p-6 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-all duration-500 border border-white/10 shadow-inner">
                  {cert.icon}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 hover:bg-primary hover:text-white transition-all duration-400 group/link border border-white/5 shadow-xl"
                >
                  <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                </a>
              </div>

              <h3 className="text-2xl font-black mb-6 leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="mt-auto pt-8">
                <p className="text-primary font-black text-lg mb-2">{cert.issuer}</p>
                <p className="text-foreground/40 font-mono text-sm uppercase tracking-[0.2em]">{cert.date}</p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/[0.08] flex items-center gap-4 text-[10px] font-black text-foreground/20 uppercase tracking-[0.3em]">
                <Award className="w-5 h-5 text-primary/30" />
                Industry Standards Compliant
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
