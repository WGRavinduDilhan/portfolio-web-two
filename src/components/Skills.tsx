"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
  { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Linux", icon: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
  { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "GCP", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
  { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { name: "Terraform", icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
  { name: "Prometheus", icon: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg" },
  { name: "Grafana", icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg" },
  { name: "OpenSearch", icon: "/OpenS.png" },
  { name: "Wazuh", icon: "/Wazuh.png" },
  { name: "SpringBoot", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "Cisco", icon: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
  { name: "Ubuntu", icon: "https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" },
];
<br />

export default function Skills() {

  return (
    <section id="skills" className="portfolio-section relative min-h-screen">
      <div className="site-container mb-16 relative z-10 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Toolchain</span>
            <h2 className="section-title mx-auto text-4xl md:text-5xl lg:text-6xl font-black">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-subtitle mx-auto text-center text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed mt-6">
              A comprehensive stack of industry standard tools and technologies I leverage daily
              to build, deploy, and manage distributed systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Centered Technologies Title */}
      <div className="text-center mt-12 mb-12 relative z-10">
        <br />
        <span className="text-[13px] font-black uppercase tracking-[0.3em] text-foreground/40">
          Technologies I work with
        </span>
      </div>
      <br />


      {/* Normal Grid Layout for Tools */}
      <div className="site-container relative z-10 mb-36 flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto px-4">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
            >
              <div
                className="w-10 h-10 md:w-14 md:h-14 relative flex items-center justify-center"
                style={{
                  background: tool.name === "OpenSearch" ? "white" : "transparent",
                  padding: tool.name === "OpenSearch" ? "10px" : "0",
                  borderRadius: tool.name === "OpenSearch" ? "90px" : "0",
                }}
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={64}
                  height={64}
                  unoptimized
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm md:text-base font-semibold tracking-wide text-foreground/70 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
