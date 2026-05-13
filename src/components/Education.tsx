"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    duration: "2021 – Present",
    details:
      "Specialising in Cloud Computing and DevOps. Active member of the SRE and Open Source communities. Focused on distributed systems and infrastructure automation.",
    badge: "GPA: 3.8 / 4.0",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Bandaranayake College",
    location: "Gampaha, Sri Lanka",
    duration: "2018 – 2020",
    details:
      "Physical Science Stream. Ranked in the top 1% island-wide with 3 As. Received the College Merit Award for Academic Excellence.",
    badge: "3 As · Z-Score 2.1",
  },
];

export default function Education() {
  return (
    <section id="education" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">

        <div className="flex flex-col lg:flex-row gap-32 items-start">

          {/* Sticky sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[400px] lg:sticky lg:top-40 shrink-0"
          >
            <span className="section-label">Academic Background</span>
            <h2 className="section-title">
              Academic
              <br />
              <span className="text-gradient">Pathway</span>
            </h2>
            <p className="section-subtitle text-xl mb-12">
              My educational journey has been defined by a passion for technical excellence
              and continuous learning in IT and DevOps.
            </p>

            <div className="inline-flex items-center gap-6 px-8 py-5 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Institution</span>
                <span className="text-lg font-black tracking-tight">Moratuwa Uni</span>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="flex-1 relative pt-10">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-accent/20 to-transparent hidden md:block" />

            <div className="space-y-16">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-[20px] top-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(99,102,241,0.8)] hidden md:block" />

                  <div className="glass rounded-[3.5rem] p-12 glass-hover border border-white/[0.08] group relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-x-8 -translate-y-8" />
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 relative z-10">
                      <div>
                        <h3 className="text-3xl font-black group-hover:text-primary transition-colors mb-3 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-primary/90 font-black text-xl">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col gap-3 shrink-0">
                        <span className="inline-flex items-center gap-3 text-[11px] font-black text-foreground/50 font-mono bg-white/5 px-5 py-2 rounded-full border border-white/10 uppercase tracking-widest">
                          <Calendar className="w-4 h-4 text-primary" /> {edu.duration}
                        </span>
                        <span className="inline-flex items-center gap-3 text-[11px] font-black text-foreground/50 font-mono bg-white/5 px-5 py-2 rounded-full border border-white/10 uppercase tracking-widest">
                          <MapPin className="w-4 h-4 text-accent" /> {edu.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-foreground/60 text-lg leading-relaxed mb-10 max-w-3xl relative z-10">{edu.details}</p>

                    <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-2xl bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.25em] border border-primary/20 relative z-10">
                      <Award className="w-5 h-5" />
                      {edu.badge}
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
