"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) in IT",
    institution: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    duration: "2021 - Present",
    details: "Specializing in Cloud Computing and DevOps. Active in the SRE student community.",
    gpa: "GPA: 3.8/4.0",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Bandaranayake College",
    location: "Gampaha, Sri Lanka",
    duration: "2018 - 2020",
    details: "Ranked in the top 1% island-wide in the Physical Science stream (3As).",
    gpa: "3As",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 sticky top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Academic <span className="text-gradient">Pathway</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              My formal training and academic achievements that shaped my technical foundation.
            </p>
            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 inline-flex items-center gap-4">
               <GraduationCap className="w-10 h-10 text-primary" />
               <span className="text-xl font-bold">Continuous Learner</span>
            </div>
          </motion.div>
        </div>

        <div className="md:w-2/3 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-accent to-transparent"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-[-5px] md:left-[27px] top-0 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_10px_#6366f1]"></div>
                
                <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h3>
                      <p className="text-foreground/80 font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end text-sm font-mono text-foreground/40">
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {edu.duration}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    {edu.details}
                  </p>
                  
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    {edu.gpa}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
