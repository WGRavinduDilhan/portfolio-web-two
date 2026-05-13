"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "Architecting Resilient Cloud Systems",
    excerpt:
      "Deep dive into the core principles of building high-availability infrastructure on AWS using modern SRE practices and automated failover strategies.",
    date: "10 May 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    tag: "Cloud",
  },
  {
    title: "Terraform Best Practices at Scale",
    excerpt:
      "How to avoid common IaC pitfalls and optimise your Terraform state management for better collaboration, security, and enterprise scalability.",
    date: "28 Apr 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tag: "IaC",
  },
  {
    title: "Mastering Kubernetes Observability",
    excerpt:
      "A comprehensive implementation guide to setting up Prometheus, Grafana, and Loki for deep insights into your microservices health.",
    date: "15 Apr 2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    tag: "DevOps",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <span className="section-label">Writing</span>
            <h2 className="section-title">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="section-subtitle text-xl">
              Thoughts and deep dives into cloud engineering, infrastructure automation,
              and SRE best practices from real-world deployments.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary shrink-0 self-start md:self-end px-14 py-5 shadow-2xl"
          >
            All Publications <ArrowUpRight className="w-5 h-5 ml-3" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-stretch">
          {blogs.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-72 rounded-[3.5rem] overflow-hidden mb-10 border border-white/8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-70" />
                
                <span className="absolute top-8 left-8 text-[11px] font-black uppercase tracking-[0.3em] px-6 py-2.5 rounded-2xl bg-primary/20 text-primary border border-primary/30 backdrop-blur-xl shadow-2xl">
                  {post.tag}
                </span>
                
                <div className="absolute top-8 right-8 p-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white/10 shadow-2xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-8 text-[11px] font-black text-foreground/30 uppercase tracking-[0.3em] mb-6 px-2">
                <span className="flex items-center gap-3 group-hover:text-primary transition-colors">
                  <Calendar className="w-5 h-5 opacity-40" /> {post.date}
                </span>
                <span className="flex items-center gap-3">
                  <Clock className="w-5 h-5 opacity-40" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-3xl font-black mb-6 leading-tight group-hover:text-primary transition-colors px-2">
                {post.title}
              </h3>
              <p className="text-foreground/50 text-lg leading-relaxed mb-10 px-2 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-8 border-t border-white/8 mx-2">
                <span className="text-xs font-black text-primary uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-700">
                  Read Full Publication
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
