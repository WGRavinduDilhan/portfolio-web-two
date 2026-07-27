"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink, ShieldCheck, Database, Cloud, Cpu, Server, CheckCircle2 } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  location?: string;
  link: string;
  icon?: React.ReactNode;
  badge?: string;
};

const certifications: Certification[] = [
  {
    title: "Linux Systems Administration and DevOps Engineering Program",
    issuer: "WSO2",
    date: "06/03/2025",
    location: "Colombo, Sri Lanka",
    link: "https://www.linkedin.com/posts/ravindu-dilhan_devops-linux-aws-activity-7437181154992222208-HByG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEMaPIBad6qphiRaijIHy1qM9V4s9TXjPs",
    badge: "/WSO2-1.png",
  },
  {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "11/14/2025",
    link: "https://www.credly.com/badges/aceb0074-0a8c-4c84-bc79-84cae46546c1/public_url",
    badge: "/badge-aviatrix-mna.png",
  },
  {
    title: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation",
    date: "5/20/2026",
    link: "https://www.credly.com/badges/562c79f5-726f-40be-b5d5-e6d4985f860e/public_url",
    badge: "/badge-lfs101-linux.png",
  },
  {
    title: "Introduction to DevOps and Site Reliability Engineering (LFS162)",
    issuer: "The Linux Foundation",
    date: "5/20/2026",
    link: "https://www.credly.com/badges/dbb0d325-f36c-43bd-9849-486d882438d3/public_url",
    badge: "/badge-lfs162-devops-sre.png",
  },
  {
    title: "Introduction to GitOps (LFS169)",
    issuer: "The Linux Foundation",
    date: "4/3/2026",
    link: "https://www.credly.com/badges/965266a7-e1c4-434f-a59e-c7a9facc1199/public_url",
    badge: "/badge-lfs169-gitops.png",
  },
  {
    title: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    date: "6/12/2026",
    link: "https://www.credly.com/badges/ba740e62-1cd9-4780-bea9-a94e1b2eda20/public_url",
    badge: "/badge-lfs158-kubernetes.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cysco Networking Academy",
    date: "18/11/2021",
    link: "https://www.credly.com/badges/b545210d-3137-4c7a-9cf6-ec9e0c6bfaed/public_url",
    badge: "/badge-cysco.png",
  },
  /* {
    title: "AZ-900 Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "On Going",
    link: "#",
    badge: "/Microsoft.png",
  }, */
];

export default function Achievements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="achievements" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6s]" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Certifications</span>
            <motion.h2 
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
              className="section-title mx-auto text-4xl md:text-5xl lg:text-6xl font-black"
            >
              Verified <span className="text-gradient">Achievements</span>
            </motion.h2>
            <p className="section-subtitle mx-auto text-center text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mt-6">
              Validated expertise through industry recognized certification programs and real-world infrastructure engineering.
            </p>
          </motion.div>
          <br />
        </div>
      </div>

      {/* Scrollable Certifications Track */}
      <div className="relative w-full py-8 group/track">
        {/* Scrollable Track */}
        <div 
          ref={scrollContainerRef}
          className="flex w-full gap-8 overflow-x-auto snap-x snap-mandatory py-4 relative z-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] before:shrink-0 before:w-4 md:before:w-24 after:shrink-0 after:w-4 md:after:w-32"
        >
          {certifications.map((cert, idx) => (
              <div
                key={idx}
              className="shrink-0 w-[300px] sm:w-[380px] md:w-[480px] snap-center glass flex flex-col border border-slate-700/30 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,211,0,0.15)] relative overflow-hidden shadow-2xl group cursor-pointer bg-white/[0.01]"
              >
              {/* Top — Badge Panel */}
              <div className="relative flex items-center justify-center bg-[#F8F8F8] border-b border-black/10 h-[200px] w-full p-8 overflow-hidden">
                {cert.badge ? (
                  <div className="relative w-full h-full z-10 drop-shadow-sm">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      fill
                      sizes="250px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 z-10 rounded-full bg-black/5 flex items-center justify-center text-black/30">
                    <span className="text-3xl">🏅</span>
                  </div>
                )}

                {/* Verified indicator — top right corner */}
                <span className="absolute top-4 right-4 text-[10px] font-black text-black uppercase tracking-[0.18em] flex items-center gap-1 z-10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Verified
                </span>
              </div>

              {/* Bottom — Info Panel */}
              <div className="flex flex-col flex-1 p-7 gap-4">
                {/* Issuer + location */}
                {(cert.issuer || cert.location) && (
                  <p className="flex items-center gap-2.5 text-sm text-foreground/70 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{cert.issuer}</span>
                    {cert.location && <span className="text-foreground/45 font-normal">· {cert.location}</span>}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-lg md:text-xl font-black leading-snug text-white/90 group-hover:text-white transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Divider */}
                <div className="border-b border-white/[0.08] my-2" />

                {/* Footer: date + verify */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-foreground/50 font-mono text-xs uppercase tracking-wider">
                    {cert.date || "\u00a0"}
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-black text-yellow-400 hover:text-yellow-300 transition-colors group/link"
                  >
                    Verify Link
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex flex-col items-center gap-8 mt-2">
        {/* Manual scroll Indicator with Buttons */}
        <br />
        <div className="flex justify-center items-center gap-4 sm:gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 select-none">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 sm:w-10 sm:h-10 glass bg-white/10 border border-white/20 hover:border-white/30 hover:bg-white/20 active:scale-90 active:bg-white/30 transition-all cursor-pointer flex items-center justify-center text-white shadow-xl"
            aria-label="Scroll left"
          >
            <span className="text-xl sm:text-lg font-bold">←</span>
          </button>
          <span>Swipe or press to Explore</span>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 sm:w-10 sm:h-10 glass bg-white/10 border border-white/10 hover:border-white/30 hover:bg-white/20 active:scale-90 active:bg-white/30 transition-all cursor-pointer flex items-center justify-center text-white shadow-xl"
            aria-label="Scroll right"
          >
            <span className="text-xl sm:text-lg font-bold">→</span>
          </button>
        </div>

        {/* Visit all Certifications Button */}
        <a
          href="https://www.linkedin.com/in/ravindu-dilhan/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-secondary px-8 py-4 shadow-xl hover:-translate-y-1 transition-transform flex items-center gap-3 font-semibold text-sm">
            Visit all Certifications <ExternalLink className="w-4 h-4" />
          </button>
        </a>
      </div>
    </section>
  );
}
