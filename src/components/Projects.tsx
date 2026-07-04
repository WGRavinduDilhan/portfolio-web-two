"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Salon Aurora | Microservice Salon Appointment Booking System",
    tech: ["AWS", "Terraform", "ArgoCD", "Python", "Next.js", "Ansible", "Docker", "Kubernetes", "Prometheus", "Grafana", "GitHub Actions"],
    github: "https://github.com",
    link: "#",
    image: "/Aurora.png",
    category: "FullStack · DevOps",
  },
  {
    title: "Rebuild Man | Donation Platform (Ongoin)",
      tech: ["Django", "Python", "Next.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "Contabo", "GitHub Actions"],
    github: "https://github.com/PrabathKuruwita/rebuild_man",
    link: "#",
    image: "/Rebuild.png",
    category: "FullStack · DevOps",
  },
  {
    title: "Flavour POS | Centralized Kitchen & Restaurant Management System",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/dev-dojo-uok/flavour-pos",
    link: "https://flavour.akaigen.online/",
    image: "/Flavour.png",
    category: "FullStack",
  },
  {
    title: "Stock Portfolio Tracker | Real-Time Stock Analytics Dashboard",
    tech: ["Python", "Google Colab", "NumPy", "Pandas", "Matplotlib", "Streamlit"],
    github: "https://github.com/WGRavinduDilhan/stock-portfolio-tracker",
    link: "#",
    image: "/Stock.png",
    category: "Data Science · ML",
  },
  {
    title: "Ecommerce Platform | Microservice-Based Store (Ongoing)",
    tech: ["Next.js", "Node.js", "GCP", "MySQL", "GitHub Actions", "Kubernetes", "GKE", "Docker"],
    github: "https://github.com/WGRavinduDilhan/ecommerce",
    link: "#",
    image: "/Ecom.png",
    category: "FullStack · DevOps",
  },
  {
    title: "Job Portal | Job Application & Management System (Ongoing)",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/WGRavinduDilhan/job-portal",
    link: "#",
    image: "/Job.png",
    category: "FullStack · DevOps",
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
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle text-xl" >
              Project that i have Contributed and worked on. Some projects are industry based, some are client based and some are still in progress.  
            </p>
            <br />
          </div>
          <a
            href="https://github.com/WGRavinduDilhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary shrink-0 self-start md:self-end px-14 py-5 shadow-2xl"
            >
              VIEW GITHUB <ArrowUpRight className="w-5 h-5 ml-3" />
            </motion.button>
          </a>
        </div>
        <br/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group glass rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                    <span className="text-white/10 text-6xl font-black">{p.title.charAt(0)}</span>
                  </div>
                )}
                {/* GitHub & External Link buttons */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-background/80 backdrop-blur-xl rounded-md hover:bg-white hover:text-black transition-all duration-300 border border-white/10 shadow-xl"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {p.link && p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-background/80 backdrop-blur-xl rounded-md hover:bg-white hover:text-black transition-all duration-300 border border-white/10 shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {/* Category badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md bg-background/90 backdrop-blur-xl text-white/90 border border-white/20 shadow-xl">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors leading-snug relative z-10">
                  {p.title}
                </h3><br/>
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded bg-white/5 text-foreground/60 border border-white/10 group-hover:border-white/20 group-hover:text-white/80 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
