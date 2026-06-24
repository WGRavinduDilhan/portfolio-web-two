"use client";

import React from "react";
import Image from "next/image";
import { Award, ExternalLink, ShieldCheck, Database, Cloud, Cpu, Server } from "lucide-react";

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
    link: "#",
    badge: "/WSO2.png",
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
];

export default function Achievements() {
  // Duplicate the list of certifications to create a seamless infinite horizontal marquee
  const marqueeItems = [...certifications, ...certifications];

  return (
    <section id="achievements" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6s]" />

      <br />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            <span className="section-label">Achievements</span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-gradient">Certifications</span>
            </h2>
            <p className="section-subtitle max-w-3xl text-center text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Validated expertise through industry-recognized certification programs and real-world infrastructure engineering.
            </p>
          </div>
          <br />
        </div>
      </div>

      {/* Full-width Infinite Auto-scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-8 select-none">
        {/* Ambient fade shadows on left and right edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track - Pauses on Hover */}
        <div className="flex w-max gap-8 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] py-4">
          {marqueeItems.map((cert, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[380px] sm:w-[480px] glass flex flex-col border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden shadow-2xl group cursor-pointer"
            >
              {/* Top — Badge Panel */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.01] border-b border-white/10 py-14 px-8 overflow-hidden">
                {/* Ambient glow behind badge */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-white/5 rounded-full blur-3xl" />

                {cert.badge ? (
                  <div className="relative w-48 h-48 z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_6px_32px_rgba(255,255,255,0.18)]">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 z-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
                    <span className="text-3xl">🏅</span>
                  </div>
                )}

                {/* Verified pill — top right corner */}
                <span className="absolute top-3 right-3 text-[10px] font-black text-white bg-white/10 uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-md border border-white/20 z-10">
                  Verified
                </span>
              </div>

              {/* Bottom — Info Panel */}
              <div className="flex flex-col flex-1 p-7 gap-4">
                {/* Title */}
                <h3 className="text-xl font-black leading-snug text-white/90 group-hover:text-white transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer + location */}
                {(cert.issuer || cert.location) && (
                  <p className="flex items-center gap-2.5 text-sm text-foreground/70 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{cert.issuer}</span>
                    {cert.location && <span className="text-foreground/45 font-normal">· {cert.location}</span>}
                  </p>
                )}

                {/* Footer: date + verify */}
                <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-foreground/50 font-mono text-xs uppercase tracking-wider">
                    {cert.date || "\u00a0"}
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-black text-white/70 hover:text-white transition-colors group/link"
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
      <br /><br />

      {/* Elegant Auto-scroll Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/35 select-none pointer-events-none">
        <span className="w-2.5 h-1 rounded-full bg-primary opacity-60 animate-pulse" />
      </div>
    </section>
  );
}
