"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, ArrowRight, Terminal, Network, Shield, Radio } from "lucide-react";

// Helper for category styling
const getCategoryStyle = (category: string) => {
  switch (category.toLowerCase()) {
    case "devops":
    case "gitops":
      return {
        gradient: "from-emerald-900/40 to-teal-900/40",
        Icon: Terminal,
      };
    case "networking":
      return {
        gradient: "from-slate-800/60 to-cyan-900/40",
        Icon: Network,
      };
    case "security":
      return {
        gradient: "from-amber-900/40 to-orange-900/40",
        Icon: Shield,
      };
    case "general":
    case "live broadcast":
    default:
      return {
        gradient: "from-violet-900/40 to-fuchsia-900/40",
        Icon: Radio,
      };
  }
};

const blogs = [
  {
    title: "Full Stack → Devops roadmap",
    excerpt: "Deploying a Production Ready Job Portal on AWS using Kubernetes (K3s), Docker, Terraform, GitHub Actions and Amazon RDS",
    date: "July 22, 2026",
    readTime: "13 min",
    image: "/JobP_Blog.png",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Automation", "Cloud","Infra","kubernetes","Containerization"],
    link: "https://medium.com/@dilhanwgr2002/full-stack-devops-roadmap-f2cf47e96660",
  },
  {
    title: "The 9 DevOps Essentials Every Tech Enthusiastic Should Know",
    excerpt: "A comprehensive guide to the foundational concepts and tools required to master modern DevOps and streamline your software delivery.",
    date: "March 24, 2026",
    readTime: "6 min",
    image: "/Devops_Blog.png",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Automation"],
    link: "https://medium.com/@dilhanwgr2002/the-9-devops-essentials-every-tech-enthusiastic-should-know-b4e0750a314e",
  },
  {
    title: "How Does a Switch Learn MAC Addresses and Create CAM Table?",
    excerpt: "Deep dive into the fundamental networking mechanics behind network switches, ARP protocols, and MAC address tables.",
    date: "March 29, 2026",
    readTime: "4 min",
    image: "/Mac_Blog.png",
    category: "Networking",
    tags: ["Networking", "Switches", "Infrastructure"],
    link: "https://medium.com/@dilhanwgr2002/how-does-a-switch-learn-mac-addresses-and-create-the-cam-table-b45bf35d3146",
  },
  {
    title: "What is WAZUH and What is SIEM",
    excerpt: "Exploring Security Information and Event Management (SIEM) systems with a focus on implementing Wazuh for threat detection.",
    date: "April 13, 2026",
    readTime: "7 min",
    image: "/Wazuh_Blog.png",
    category: "Security",
    tags: ["Security", "Wazuh", "SIEM"],
    link: "https://medium.com/@dilhanwgr2002/what-is-wazuh-9c7c4e728dde",
  },
  {
    title: "From the Classroom to the Control Room: Inside Sri Lanka's Broadcasting Giant",
    excerpt: "An inside look at the technical operations and live broadcast infrastructure powering national media distribution.",
    date: "May 11, 2026",
    readTime: "5 min",
    image: "/Rupa_Blog.png",
    category: "Field Visit",
    tags: ["Live Broadcast", "Media", "Operations"],
    link: "https://medium.com/@dilhanwgr2002/from-the-classroom-to-the-control-room-inside-sri-lankas-broadcasting-giant-0ed8fe7f4040",
  },
  {
    title: "WSO2 HandsOn DevOps Experience by Wso2 Linux Administration & Devops Training",
    excerpt: "Key takeaways and practical implementations from intensive WSO2 Linux and DevOps administration training.",
    date: "May 16, 2026",
    readTime: "10 min",
    image: "/Wso2_Blog.png",
    category: "DevOps",
    tags: ["Linux", "WSO2", "SRE"],
    link: "https://medium.com/@dilhanwgr2002/wso2-handson-devops-experience-3cc9066c7c3b",
  },
  {
    title: "Building a Production GitOps Pipeline on AWS with ArgoCD and Kubernetes",
    excerpt: "Step-by-step architectural breakdown of designing a scalable, declarative GitOps workflow for production clusters.",
    date: "June 11, 2026",
    readTime: "14 min",
    image: "/Gitops_Blog.png",
    category: "DevOps",
    tags: ["GitOps", "ArgoCD", "Kubernetes", "AWS"],
    link: "https://medium.com/@dilhanwgr2002/building-a-production-gitops-pipeline-on-aws-with-argocd-and-kubernetes-0ca4d32cc498",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="section-label">Writing</span>
            <motion.h2 
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
              className="section-title"
            >
              Latest <span className="text-gradient">Blogs</span>
            </motion.h2>
            <p className="section-subtitle text-xl">
              Thoughts and deep dives into cloud engineering, infrastructure automation,
              and SRE best practices from real-world deployments.
            </p>
            <br />
          </motion.div>
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
        
        {/* Enforced spacer between header and grid */}
        <div className="h-12 md:h-16 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {blogs.map((post, i) => {
            // First item spans full width on md+
            const isFeatured = i === 0;

            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className={`group cursor-pointer flex flex-col h-full ${isFeatured ? 'md:col-span-3' : 'md:col-span-1'}`}
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass rounded-none overflow-hidden border border-white/[0.08] hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 flex ${isFeatured ? 'flex-col md:flex-row' : 'flex-col'} h-full bg-white/[0.02]`}
                >
                  {/* Thumbnail / Image Block */}
                  <div className={`relative overflow-hidden flex-shrink-0 bg-black/40 border-b md:border-b-0 ${isFeatured ? 'md:border-r border-white/10 aspect-video md:w-[45%]' : 'border-white/10 aspect-video'}`}>
                    
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

                    {/* Category Label */}
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-none bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`p-6 md:p-8 flex flex-col flex-1 ${isFeatured ? 'justify-center' : ''}`}>
                    <div className="flex items-center gap-4 text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1.5 group-hover:text-yellow-400 transition-colors">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className={`font-bold mb-3 group-hover:text-yellow-400 transition-colors leading-snug line-clamp-2 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-foreground/50 mb-6 line-clamp-2 ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}>
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex flex-col gap-5">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(t => (
                          <span key={t} className="text-[10px] font-semibold text-foreground/60 px-2.5 py-1 rounded-none bg-white/[0.04] border border-white/[0.05]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold text-yellow-400 mt-2">
                        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
