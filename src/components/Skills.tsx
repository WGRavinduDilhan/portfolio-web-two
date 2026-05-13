"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Container, 
  Layers, 
  Settings, 
  Activity, 
  BarChart3, 
  Cpu, 
  GitBranch, 
  Terminal, 
  Database,
  ShieldCheck,
  Server,
  Zap,
  Box
} from "lucide-react";

const tools = [
  { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
  { name: "Docker", icon: <Container className="w-8 h-8" /> },
  { name: "Kubernetes", icon: <Box className="w-8 h-8" /> },
  { name: "Terraform", icon: <Layers className="w-8 h-8" /> },
  { name: "Ansible", icon: <Settings className="w-8 h-8" /> },
  { name: "Prometheus", icon: <Activity className="w-8 h-8" /> },
  { name: "Grafana", icon: <BarChart3 className="w-8 h-8" /> },
  { name: "Jenkins", icon: <Cpu className="w-8 h-8" /> },
  { name: "Git", icon: <GitBranch className="w-8 h-8" /> },
  { name: "Linux", icon: <Terminal className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
  { name: "SecOps", icon: <ShieldCheck className="w-8 h-8" /> },
  { name: "CI/CD", icon: <Zap className="w-8 h-8" /> },
  { name: "SRE", icon: <Server className="w-8 h-8" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          DevOps <span className="text-gradient">Toolchain</span>
        </motion.h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          The arsenal of tools I use to automate, scale, and monitor infrastructure.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-12 items-center py-10">
          {[...tools, ...tools].map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, color: "#6366f1" }}
              className="flex flex-col items-center gap-4 transition-colors duration-300 group"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                {tool.icon}
              </div>
              <span className="text-xs font-mono text-foreground/40 group-hover:text-primary transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div className="glass p-8 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            SRE Focus
          </h3>
          <p className="text-foreground/70 leading-relaxed">
            I specialize in building resilient systems through automation and observability. 
            My focus is on reducing toil and improving system reliability using Error Budgets, 
            SLOs, and automated incident response.
          </p>
        </div>
        <div className="glass p-8 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Cloud Infrastructure
          </h3>
          <p className="text-foreground/70 leading-relaxed">
            Experienced in architecting multi-cloud and hybrid environments. 
            I leverage Infrastructure as Code (IaC) to ensure consistent, 
            reproducible, and scalable deployments.
          </p>
        </div>
      </div>
    </section>
  );
}
