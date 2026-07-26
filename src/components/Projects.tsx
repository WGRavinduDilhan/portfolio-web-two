"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const techIcons: Record<string, string> = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "JavaScript": "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "MySQL": "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  "PostgreSQL": "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Python": "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Spring Boot": "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  "AWS": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  "GCP": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  "Docker": "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  "Kubernetes": "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  "GKE": "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  "Terraform": "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
  "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  "ArgoCD": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
  "Prometheus": "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg",
  "Grafana": "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  "Matplotlib": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  "Streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  "Google Colab": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  "Contabo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Slack": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
  "Netdata": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netdata/netdata-original.svg",  
  "istio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/istio/istio-plain.svg",  
};

const projects = [
  {
    title: "Salon Aurora",
    subtitle: "Microservice Salon Appointment Booking System",
    tech: ["AWS", "Terraform", "ArgoCD", "Python", "Next.js", "Ansible", "Docker", "Kubernetes", "Prometheus", "Grafana", "GitHub Actions","istio"],
    github: "https://github.com/WSO2-G02",
    link: "#",
    image: "/Aurora.png",
    category: "FullStack · DevOps",
  },
  {
    title: "Rebuild Man",
    subtitle: "Donation Platform (Ongoing)",
    tech: ["Django", "Python", "Next.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "Contabo", "GitHub Actions", "Slack"],
    github: "https://github.com/PrabathKuruwita/rebuild_man",
    link: "#",
    image: "/Rebuild.png",
    category: "FullStack · DevOps",
  },
  {
    title: "Flavour POS",
    subtitle: "Centralized Kitchen & Restaurant Management System",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/dev-dojo-uok/flavour-pos",
    link: "https://flavour.akaigen.online/",
    image: "/Flavour.png",
    category: "FullStack",
  },
  {
    title: "Stock Portfolio Tracker",
    subtitle: "Real-Time Stock Analytics Dashboard",
    tech: ["Python", "Google Colab", "NumPy", "Pandas", "Matplotlib", "Streamlit","Docker"],
    github: "https://github.com/WGRavinduDilhan/stock-portfolio-tracker",
    link: "#",
    image: "/Stock.png",
    category: "Data Science · ML",
  },
  {
    title: "Ecommerce Platform",
    subtitle: "Microservice-Based Store (Ongoing)",
    tech: ["Next.js", "Node.js", "GCP", "MySQL", "GitHub Actions", "Kubernetes", "Docker", "Terraform"],
    github: "https://github.com/WGRavinduDilhan/ecommerce",
    link: "#",
    image: "/Ecom.png",
    category: "FullStack · DevOps",
  },
  {
    title: "Job Portal",
    subtitle: "Job Application & Management System (Ongoing)",
    tech: ["Java", "Spring Boot", "MySQL", "Docker","Terraform", "Kubernetes", "AWS","Netdata", "GitHub Actions"],
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
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="section-label">Portfolio</span>
            <motion.h2 
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
              className="section-title"
            >
              <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="section-subtitle text-xl" >
              Project that i have Contributed and worked on. Some projects are industry based, some are client based and some are still in progress.  
            </p>
            <br />
          </motion.div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-stretch relative">
          {projects.map((p, i) => {
            const isNotLastColLg = (i + 1) % 3 !== 0;
            const isNotLastRowLg = i < projects.length - 3;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                onClick={() => window.open(p.github, '_blank')}
                className="group flex flex-col h-full border border-white/10 lg:p-8 p-6 cursor-pointer bg-white/[0.02] hover:border-white/20 transition-all duration-300 rounded-none"
              >
                {/* Image Container / Device Mockup */}
                <div 
                  className="relative h-[220px] lg:h-[240px] flex-shrink-0"
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-none" />
                  
                  {/* Subtle 3D Tilt Container */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:[transform:rotateX(2deg)_rotateY(-4deg)] transition-transform duration-700 ease-out">
                    
                    {/* Laptop/Browser Frame */}
                    <div className="relative w-[90%] h-[85%] rounded-none overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-black/40">
                      {/* Frame Header */}
                      <div className="absolute top-0 left-0 w-full h-5 bg-[#1a1a1a] border-b border-white/10 flex items-center px-2 gap-1.5 z-20">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      
                      {/* Image Area */}
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top pt-5"
                        />
                      ) : (
                        <div className="absolute inset-0 pt-5 bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                          <span className="text-white/10 text-6xl font-black">{p.title.charAt(0)}</span>
                        </div>
                      )}
                      
                      {/* External Link button */}
                      <div className="absolute top-7 right-2 z-20 flex gap-2">
                        {p.link && p.link !== "#" && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-md rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 border border-white/10 hover:border-yellow-400 shadow-xl group/btn"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="pt-6 flex flex-col flex-1 relative">
                  {/* Category badge */}
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-3">
                    {p.category}
                  </span>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-foreground/50 mb-5 line-clamp-2">{p.subtitle}</p>

                  <div className="mt-auto pt-2 flex flex-wrap gap-2 items-center">
                    {p.tech.map((t) => (
                      <div
                        key={t}
                        className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center p-1.5 group/icon hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all duration-300"
                        title={t}
                      >
                        <Image 
                          src={techIcons[t] || "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"} 
                          alt={t} 
                          width={16} 
                          height={16} 
                          unoptimized
                          className="w-full h-full object-contain filter transition-all duration-300" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
