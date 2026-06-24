"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "The 9 DevOps Essentials Every Tech Enthusiastic Should Know",
    excerpt:
      "Master nine essential DevOps concepts, tools, and practices used in modern cloud environments.",
    date: "March 24, 2026",
    readTime: "6 min",
    image: "/Devops_Blog.png",
    tag: "DevOps",
    link: "https://medium.com/@dilhanwgr2002/the-9-devops-essentials-every-tech-enthusiastic-should-know-b4e0750a314e",
  },
  {
    title: "How Does a Switch Learn MAC Addresses and Create the CAM Table?",
    excerpt:
      "Learn how network switches discover MAC addresses, build CAM tables, and forward traffic efficiently.",
    date: "March 29, 2026",
    readTime: "4 min",
    image: "/Mac_Blog.png",
    tag: "Networking",
    link: "https://medium.com/@dilhanwgr2002/how-does-a-switch-learn-mac-addresses-and-create-the-cam-table-b45bf35d3146",
  },
  {
    title: "What is WAZUH",
    excerpt:
      "Learn how Wazuh provides SIEM, threat detection, log analysis, and security monitoring.",
    date: "April 13, 2026",
    readTime: "7 min",
    image: "/Wazuh_Blog.png",
    tag: "Security",
    link: "https://medium.com/@dilhanwgr2002/what-is-wazuh-9c7c4e728dde",
  },
  {
    title: "From the Classroom to the Control Room: Inside Sri Lanka's Broadcasting Giant",
    excerpt:
      "Exploring real-world broadcasting infrastructure, operations, and technology in Sri Lanka.",
    date: "May 11, 2026",
    readTime: "5 min",
    image: "/Rupa_Blog.png",
    tag: "Live Broadcast",
    link: "https://medium.com/@dilhanwgr2002/from-the-classroom-to-the-control-room-inside-sri-lankas-broadcasting-giant-0ed8fe7f4040",
  },
  {
    title: "WSO2 HandsOn DevOps Experience",
    excerpt:
      "Sharing practical DevOps lessons, tools, workflows, and experiences gained through WSO2 training.",
    date: "16 May 2026",
    readTime: "10 min",
    image: "/Wso2_Blog.png",
    tag: "DevOps & SRE",
    link: "https://medium.com/@dilhanwgr2002/wso2-handson-devops-experience-3cc9066c7c3b",
  },
  {
    title: "Building a Production GitOps Pipeline on AWS with ArgoCD and Kubernetes",
    excerpt:
      "Build a production-grade GitOps pipeline on AWS using Kubernetes, ArgoCD, and automation best practices.",
    date: "June 11, 2026",
    readTime: "14 min",
    image: "/Gitops_Blog.png",
    tag: "Gitops ArgoCD",
    link: "https://medium.com/@dilhanwgr2002/building-a-production-gitops-pipeline-on-aws-with-argocd-and-kubernetes-0ca4d32cc498",
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
              Latest <span className="text-gradient">Blogs</span>
            </h2>
            <p className="section-subtitle text-xl">
              Thoughts and deep dives into cloud engineering, infrastructure automation,
              and SRE best practices from real-world deployments.
            </p>
            <br />
          </div>
          <a
            href="https://medium.com/@dilhanwgr2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary shrink-0 self-start md:self-end px-14 py-5 shadow-2xl"
            >
              All Blogs <ArrowUpRight className="w-5 h-5 ml-3" />
            </motion.button>
          </a>
        </div>
        <br/>

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
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full"
            >
              <div className="relative h-72 rounded-lg overflow-hidden mb-10 border border-white/8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-70" />
                
                <span className="absolute top-6 left-6 text-[11px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 backdrop-blur-xl shadow-2xl">
                  {post.tag}
                </span>
                
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-xl rounded-md text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white/10 shadow-2xl">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-center gap-8 text-[11px] font-black text-foreground/40 uppercase tracking-[0.3em] mb-6 px-2">
                <span className="flex items-center gap-3 group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5 opacity-40" /> {post.date}
                </span>
                <span className="flex items-center gap-3">
                  <Clock className="w-5 h-5 opacity-40" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-3xl font-black mb-6 leading-tight group-hover:text-white transition-colors px-2">
                {post.title}
              </h3>
              <p className="text-foreground/50 text-lg leading-relaxed mb-10 px-2 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-8 border-t border-white/8 mx-2">
                <span className="text-xs font-black text-primary uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-700">
                  Read Full Article →
                </span>
              </div>
            </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
