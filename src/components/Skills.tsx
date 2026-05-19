"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Server, Cloud } from "lucide-react";

const tools = [
  { name: "Jenkins",    icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "Git",        icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Linux",      icon: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
  { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name: "Python",     icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "Go",         icon: "https://www.vectorlogo.zone/logos/golang/golang-official.svg" },
  { name: "Node.js",    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { name: "AWS",        icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Docker",     icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { name: "Terraform",  icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
  { name: "Prometheus", icon: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg" },
  { name: "Grafana",    icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" },
  { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
  { name: "MySQL",      icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "Jenkins",    icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "ArgoCD",     icon: "https://www.vectorlogo.zone/logos/argoproj/argoproj-icon.svg"},
  { name: "SpringBoot", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"}
];
<br />

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
  // Duplicate the list of tools to create a seamless infinite horizontal auto-scrolling marquee
  const marqueeTools = [...tools, ...tools];

  return (
    <section id="skills" className="portfolio-section overflow-hidden relative min-h-screen">
      {/* Decorative Blur Ambient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="site-container mb-16 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Toolchain</span>
            <h2 className="section-title mx-auto text-4xl md:text-5xl lg:text-6xl font-black">
              DevOps <span className="text-gradient">Toolset</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed">
              A comprehensive stack of industry-standard tools and technologies I leverage daily 
              to build, deploy, and manage large-scale distributed systems.
            </p>
          </motion.div>
        </div>
      </div>
      <br /> 

      {/* Centered Technologies Title (Matches Screenshot) */}
      <div className="text-center mt-20 mb-10 relative z-10">
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/40">
          Technologies I work with
        </span>
      </div>
      <br />

      {/* Infinite Horizontal Auto-scrolling Tools Marquee */}
      <div className="relative w-full overflow-hidden py-10 select-none z-10 mb-36 h-36 flex items-center">
        {/* Subtle horizontal band background border as in the screenshot */}
        <div className="absolute inset-y-0 left-0 right-0 bg-white/[0.01] border-y border-white/[0.04] pointer-events-none" />

        {/* Ambient fade shadows on left and right edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-44 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-44 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track - Pauses on Hover */}
        <div className="flex w-max gap-12 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {marqueeTools.map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-7 py-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.05] hover:border-primary/40 hover:scale-[1.03] transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <div className="w-10 h-10 relative flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Image 
                  src={tool.icon} 
                  alt={tool.name} 
                  width={40}
                  height={40}
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-sm sm:text-base font-black tracking-wide text-foreground/85 group-hover:text-primary transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <br /><br />

      {/* Specialism Cards with Premium Vertical and Horizontal Gap Spacings */}
      <div className="site-container relative z-10 mt-36 md:mt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          {specialisms.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass rounded-[3rem] p-10 md:p-14 border border-white/[0.08] group relative overflow-hidden shadow-2xl h-full flex flex-col justify-between"
            >
              {/* Hover glow background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-x-12 -translate-y-12 group-hover:bg-primary/10 transition-colors pointer-events-none" />
              
              <div>
                <div className="inline-flex p-5 rounded-2xl bg-white/5 mb-8 group-hover:bg-primary/8 transition-all duration-500 border border-white/5 shadow-inner">
                  {s.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed relative z-10">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
