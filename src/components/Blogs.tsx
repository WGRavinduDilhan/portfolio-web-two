"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "The 9 DevOps Essentials Every Tech Enthusiastic Should Know",
    date: "March 24, 2026",
    readTime: "6 min",
    image: "/Devops_Blog.png",
    tag: "DevOps",
    link: "https://medium.com/@dilhanwgr2002/the-9-devops-essentials-every-tech-enthusiastic-should-know-b4e0750a314e",
  },
  {
    title: "How Does a Switch Learn MAC Addresses and Create the CAM Table?",
    date: "March 29, 2026",
    readTime: "4 min",
    image: "/Mac_Blog.png",
    tag: "Networking",
    link: "https://medium.com/@dilhanwgr2002/how-does-a-switch-learn-mac-addresses-and-create-the-cam-table-b45bf35d3146",
  },
  {
    title: "What is WAZUH and What is SIEM",
    date: "April 13, 2026",
    readTime: "7 min",
    image: "/Wazuh_Blog.png",
    tag: "Security",
    link: "https://medium.com/@dilhanwgr2002/what-is-wazuh-9c7c4e728dde",
  },
  {
    title: "From the Classroom to the Control Room: Inside Sri Lanka's Broadcasting Giant",
    date: "May 11, 2026",
    readTime: "5 min",
    image: "/Rupa_Blog.png",
    tag: "Live Broadcast",
    link: "https://medium.com/@dilhanwgr2002/from-the-classroom-to-the-control-room-inside-sri-lankas-broadcasting-giant-0ed8fe7f4040",
  },
  {
    title: "WSO2 HandsOn DevOps Experience by Wso2 Linux Administration & Devops Training",
    date: "16 May 2026",
    readTime: "10 min",
    image: "/Wso2_Blog.png",
    tag: "DevOps & SRE",
    link: "https://medium.com/@dilhanwgr2002/wso2-handson-devops-experience-3cc9066c7c3b",
  },
  {
    title: "Building a Production GitOps Pipeline on AWS with ArgoCD and Kubernetes",
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
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {blogs.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Tag badge */}
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md bg-background/90 text-white/90 border border-white/20 backdrop-blur-xl shadow-xl">
                    {post.tag}
                  </span>

                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-xl rounded-md text-white opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-400 border border-white/10 shadow-xl">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-5 text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-2 group-hover:text-white/70 transition-colors">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
