"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Server, Cloud } from "lucide-react";

const tools = [
  { name: "AWS",        icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Docker",     icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { name: "Terraform",  icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
  { name: "Ansible",    icon: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" },
  { name: "Prometheus", icon: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg" },
  { name: "Grafana",    icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" },
  { name: "Jenkins",    icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "Git",        icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Linux",      icon: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
  { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name: "Python",     icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "Go",         icon: "https://www.vectorlogo.zone/logos/golang/golang-official.svg" },
  { name: "Node.js",    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
];

const specialisms = [
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    color: "primary",
    title: "SRE & Platform Engineering",
    body: "Building resilient systems through advanced automation and deep observability. I reduce operational toil using Error Budgets, SLOs, and automated incident response pipelines.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-accent" />,
    color: "accent",
    title: "Cloud Infrastructure Architecture",
    body: "Architecting high-availability multi-cloud and hybrid environments using Infrastructure as Code (IaC), ensuring consistent, reproducible, and elastic scaling across providers.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section overflow-hidden relative">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container mb-24 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Toolchain</span>
            <h2 className="section-title mx-auto">
              DevOps <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-lg">
              A comprehensive stack of industry-standard tools and technologies I leverage daily 
              to build, deploy, and manage large-scale distributed systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee — Colored Logos */}
      <div className="relative flex overflow-x-hidden group mb-24 py-10 z-10">
        <div className="animate-marquee flex whitespace-nowrap gap-20 items-center group-hover:[animation-play-state:paused]">
          {[...tools, ...tools, ...tools].map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, y: -10 }}
              className="flex flex-col items-center gap-6 cursor-default transition-all duration-300"
            >
              <div className="w-28 h-28 p-7 rounded-[2rem] bg-white/[0.04] border border-white/[0.1] flex items-center justify-center hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 shadow-2xl">
                <Image 
                  src={tool.icon} 
                  alt={tool.name} 
                  width={72}
                  height={72}
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/40 group-hover:text-primary transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {specialisms.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="glass rounded-[3rem] p-14 border border-white/[0.08] group relative overflow-hidden shadow-2xl h-full"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-x-12 -translate-y-12 group-hover:bg-primary/10 transition-colors" />
              
              <div className="inline-flex p-6 rounded-2xl bg-white/5 mb-10 group-hover:bg-primary/8 transition-all duration-500 border border-white/5 shadow-inner">
                {s.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-foreground/60 text-lg leading-relaxed relative z-10">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
