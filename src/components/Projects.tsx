"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "EcoSphere AI",
    description: "An AI-powered platform for tracking carbon footprints and suggesting sustainable alternatives using machine learning models.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Nebula Dashboard",
    description: "A comprehensive analytics dashboard for DeFi protocols with real-time data visualization and portfolio management.",
    tech: ["React", "D3.js", "Ethers.js", "Firebase"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Quantum Chat",
    description: "End-to-end encrypted messaging application with support for large file transfers and voice/video calling.",
    tech: ["WebRTC", "Socket.io", "Node.js", "Redis"],
    github: "#",
    link: "#",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-xl">
            A collection of things I've built that I'm particularly proud of.
          </p>
        </div>
        <button className="hidden md:block px-6 py-2 rounded-lg border border-primary/20 hover:border-primary/50 transition-all text-sm font-medium">
          View Archive
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <a href={project.github} className="p-2 bg-background/50 backdrop-blur-md rounded-full hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.link} className="p-2 bg-background/50 backdrop-blur-md rounded-full hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Folder className="w-4 h-4" />
                <span className="text-xs font-mono tracking-widest uppercase">Web App</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-foreground/40 bg-white/5 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
