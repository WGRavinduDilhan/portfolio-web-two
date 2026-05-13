"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Cpu, Database, Cloud } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "15+", icon: <Cpu /> },
  { label: "Infrastructure Managed", value: "50+ Nodes", icon: <Database /> },
  { label: "System Uptime", value: "99.9%", icon: <ShieldCheck /> },
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
    title: "CKAD: Certified Kubernetes Application Developer",
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
    <section id="achievements" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 rounded-[3rem] text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-5xl font-black text-gradient mb-2">{stat.value}</div>
            <div className="text-foreground/40 font-mono text-xs uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Professional <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          Validated expertise through world-class certification programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-primary/50 transition-all"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 rounded-2xl bg-white/5">
                {cert.icon}
              </div>
              <a href={cert.link} className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <h3 className="text-xl font-bold mb-3 leading-tight">{cert.title}</h3>
            <div className="flex flex-col gap-1 text-sm font-medium">
              <span className="text-primary">{cert.issuer}</span>
              <span className="text-foreground/40">{cert.date}</span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-foreground/30">
                <Award className="w-4 h-4" />
                VERIFIED CREDENTIAL
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
