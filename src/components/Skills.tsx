"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "Agile/Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Tech <span className="text-gradient">Stack</span>
        </motion.h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
