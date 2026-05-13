"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, Clock, Coffee } from "lucide-react";

const achievements = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "15+ Projects",
    description: "Successfully delivered high-quality web and mobile applications using modern stacks.",
    delay: 0.1,
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "3+ Years Exp.",
    description: "Professional experience in software development and UI/UX design.",
    delay: 0.2,
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "2000+ Coding Hours",
    description: "Dedicated to mastering complex architectures and performance optimization.",
    delay: 0.3,
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Infinite Coffee",
    description: "The primary fuel for turning complex problems into elegant solutions.",
    delay: 0.4,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="text-center mb-16">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-gradient">Achievements</span>
        </motion.h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          A summary of my journey and the milestones I've hit along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="glass glass-hover p-8 rounded-2xl text-center group"
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
