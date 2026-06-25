"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Salon Aurora | Microservice Salon booking System from Wso2 Linux & Devops Training",
    description:
      "Developed and deployed a microservices-based salon booking platform with Kubernetes, AWS, Terraform, ArgoCD, and CI/CD automation.",
    tech: ["AWS", "Terraform", "ArgoCD", "Python", "Next.js", "Ansible", "Docker", "Kubernetes", "Prometheous", "Grafana", "githubActions"],
    github: "github",
    image: "/Aurora.png",
    category: "FullStack, DevOps",
  },
  {
    title: "Rebuild man | Donation platform from Rikili Organization",
    description:
      "Full-stack platform for managing organizational needs, donations, users, and resources with automated deployment workflows.",
    tech: ["Django", "Python", "Next.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "Contabo", "githubActions"],
    github: "https://github.com/PrabathKuruwita/rebuild_man",
    link: "#",
    image: "#",
    category: "FullStack , DevOps",
  },
  {
    title: "Flavor POS | Full Stack System for Centralized Restaurant System",
    description:
      "High-throughput real-time data processing pipeline built with AWS Lambda, Kinesis, and DynamoDB for analytics at scale.",
    tech: ["HTML", "CSS", "Js", "PHP"],
    github: "https://github.com/dev-dojo-uok/flavour-pos",
    link: "https://flavour.akaigen.online/",
    image: "/Flavour.png",
    category: "FullStack",
  },
  {
    title: "Stock Portfolio Tracker | To track and analyze realtime stocks",
    description:
      "Track and analyze your stock portfolio with real-time data, historical charts, and performance metrics.",
    tech: ["Python", "GoogleColab", "Numpy", "Pandas", "Matplotlib", "Streamlit"],
    github: "https://github.com/WGRavinduDilhan/stock-portfolio-tracker",
    link: "#",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    category: "Data Science,Machine Learning",
  },
  {
    title: "Ecommerce Platform | User Friendly Microservice Based Ecommerce Platform (Ongoing)",
    description:
      "Design and develop a full-featured e-commerce platform with user authentication, product management, shopping cart, checkout, order processing, and admin dashboard.",
    tech: ["Next.js", "Node.js", "GCP", "Mysql", "githubActions", "kubernetes", "GKE", "Docker"],
    github: "https://github.com/dev-dojo-uok/",
    link: "#",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    category: "FullStack, DevOps",
  },
  {
    title: "Job Portal | User friendly Job Application & Managements System (Ongoing)",
    description:
      "Develop a comprehensive job portal with user authentication, job listings, application tracking, and admin management.",
    tech: ["Java", "spring Boot", "postgres", "Docker", "kubernetes", "Aws"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    category: "FullStack, DevOps",
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
            <p className="section-subtitle text-xl" >
              A curated selection of infrastructure automation, cloud architecture,
              and reliability engineering work designed for mission-critical availability.
            </p>
            <br />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group glass rounded-lg overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute top-6 right-6 z-20 flex gap-3">
                  <a
                    href={p.github}
                    className="p-3 bg-background/80 backdrop-blur-xl rounded-md hover:bg-white hover:text-black transition-all duration-400 border border-white/10 shadow-2xl"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={p.link}
                    className="p-3 bg-background/80 backdrop-blur-xl rounded-md hover:bg-white hover:text-black transition-all duration-400 border border-white/10 shadow-2xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-md bg-background/90 backdrop-blur-xl text-white border border-white/20 shadow-2xl">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1 relative h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors leading-tight relative z-10">
                  {p.title}
                </h3>
                <p className="text-foreground/60 text-base leading-relaxed mb-6 flex-1 relative z-10">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm bg-white/5 text-foreground/70 border border-white/10 group-hover:border-white/20 group-hover:text-white transition-all duration-300 shadow-inner"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/[0.08] relative z-10">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-white hover:gap-4 transition-all duration-500 group/btn"
                  >
                    Explore Project <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
