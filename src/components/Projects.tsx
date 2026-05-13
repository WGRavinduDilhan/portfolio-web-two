"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "CloudFlow Infrastructure",
    description:
      "Automated multi-region AWS infrastructure deployment using Terraform and Jenkins CI/CD pipelines with auto-scaling and self-healing capabilities.",
    tech: ["AWS", "Terraform", "Jenkins", "Python"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    category: "Infrastructure",
  },
  {
    title: "K8s Monitoring Stack",
    description:
      "Enterprise-grade observability with Prometheus, Grafana, and Alertmanager for Kubernetes clusters. Custom dashboards for deep cluster insights.",
    tech: ["Kubernetes", "Prometheus", "Grafana", "Go"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Observability",
  },
  {
    title: "Serverless Data Pipeline",
    description:
      "High-throughput real-time data processing pipeline built with AWS Lambda, Kinesis, and DynamoDB for analytics at scale.",
    tech: ["Lambda", "Node.js", "Kinesis", "Terraform"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    category: "Data Engineering",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle text-xl">
              A curated selection of infrastructure automation, cloud architecture,
              and reliability engineering work designed for mission-critical availability.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary shrink-0 self-start md:self-end px-14 py-5 shadow-2xl"
          >
            View Full Portfolio <ArrowRight className="w-5 h-5 ml-3" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group glass rounded-[3.5rem] overflow-hidden border border-white/[0.08] hover:border-primary/40 transition-all duration-500 flex flex-col h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700 z-10" />
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute top-8 right-8 z-20 flex gap-4">
                  <a
                    href={p.github}
                    className="p-4 bg-background/80 backdrop-blur-xl rounded-2xl hover:bg-primary hover:text-white transition-all duration-400 border border-white/10 shadow-2xl"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={p.link}
                    className="p-4 bg-background/80 backdrop-blur-xl rounded-2xl hover:bg-primary hover:text-white transition-all duration-400 border border-white/10 shadow-2xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute bottom-8 left-8 z-20">
                   <span className="text-[11px] font-black uppercase tracking-[0.3em] px-6 py-2.5 rounded-2xl bg-background/90 backdrop-blur-xl text-primary border border-primary/30 shadow-2xl">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-12 flex flex-col flex-1 relative h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors leading-tight relative z-10">
                  {p.title}
                </h3>
                <p className="text-foreground/55 text-lg leading-relaxed mb-10 flex-1 relative z-10">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-white/5 text-foreground/60 border border-white/10 group-hover:border-primary/40 group-hover:text-primary transition-all duration-300 shadow-inner"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/[0.08] relative z-10">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:gap-5 transition-all duration-500 group/btn"
                  >
                    Explore Full Architecture <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
