"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "BICT Hons Degree",
    institution: "University of Kelaniya",
    location: "Kelaniya, Sri Lanka",
    duration: "2023 – Present",
    details:
      "Specialising in Cloud Computing and DevOps. Active member of the SRE and Open Source communities. Focused on distributed systems and infrastructure automation.",
    badge: "GPA: 3.5 / 4.0",
    accent: "primary",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Bandaranayake College",
    location: "Gampaha, Sri Lanka",
    duration: "2019 – 2021",
    details:
      "Physical Science Stream. Ranked in the top 1% island-wide with 3 As. Received the College Merit Award for Academic Excellence.",
    badge: "2 As and 1 B · Z-Score 1.9228",
    accent: "accent",
  },
];

export default function Education() {
  return (
    <section id="education" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <br /><br />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(320px,380px)_minmax(0,1fr)] gap-16 xl:gap-24 items-start">

          {/* Sticky sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:sticky xl:top-32 space-y-10"
          >
            <span className="section-label">Academic Background</span>
            <h2 className="section-title">
              Academic
              <br />
              <span className="text-gradient">Achievements</span>
            </h2>
            <p className="section-subtitle text-xl mb-12">
              My educational journey has been defined by a passion for technical excellence
              and continuous learning in IT and DevOps.
            </p>

            <div className="inline-flex items-center gap-6 px-8 py-5 rounded-lg bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Institution</span>
                <span className="text-lg font-black tracking-tight">Kelaniya University</span>
              </div>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="w-full max-w-4xl xl:ml-auto relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-white/5 rounded-full" />
            <div className="space-y-16 relative z-10">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                  className="relative pl-12"
                >
                  <div className="absolute -left-6 top-2 w-5 h-5 rounded-full bg-background border-2 border-white" />
                  <div
                    className={`group relative overflow-hidden rounded-lg border border-white/10 p-8 sm:p-10 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.75)] transition-all duration-500 bg-gradient-to-br from-slate-950/80 via-gray-950/30 to-slate-900 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/30 via-white/20 to-white/30`} />
                    <div className={`absolute -right-12 -top-12 w-56 h-56 rounded-full blur-3xl opacity-30 transition-all duration-700 bg-white/10 group-hover:translate-x-2 group-hover:-translate-y-2`} />

                    <div className="relative z-10 flex flex-col gap-8">
                      <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                        <div className="max-w-2xl">
                          <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black leading-tight tracking-tight text-foreground group-hover:text-white transition-colors duration-500">
                            {edu.degree}
                          </h3>
                          <p className={`mt-2 text-lg font-bold text-white/80 transition-colors duration-500`}>
                            {edu.institution}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 shrink-0 self-start xl:self-auto">
                          <span className="inline-flex items-center gap-3 text-[11px] font-black text-foreground/55 font-mono bg-white/5 px-4 py-2 rounded-md border border-white/10 uppercase tracking-widest backdrop-blur-md transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10">
                            <Calendar className="w-4 h-4 text-white/70" /> {edu.duration}
                          </span>
                          <span className="inline-flex items-center gap-3 text-[11px] font-black text-foreground/55 font-mono bg-white/5 px-4 py-2 rounded-md border border-white/10 uppercase tracking-widest backdrop-blur-md transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10">
                            <MapPin className="w-4 h-4 text-white/70" /> {edu.location}
                          </span>
                        </div>
                      </div>

                      <p className="max-w-3xl text-base leading-7 text-foreground/65 group-hover:text-foreground/80 transition-colors duration-500">
                        {edu.details}
                      </p>

                      <div className={`self-start inline-flex items-center gap-4 px-5 py-2 rounded-md text-xs font-black uppercase tracking-widest border backdrop-blur-md transition-all duration-500 bg-white/10 text-white border-white/20 group-hover:bg-white/15 group-hover:border-white/30`}>
                        <Award className="w-4 h-4" />
                        {edu.badge}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
