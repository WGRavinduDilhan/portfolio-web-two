"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) in IT",
    institution: "University of Moratuwa",
    duration: "2021 - Present",
    gpa: "CGPA: 3.8",
    description: "Specializing in Software Engineering and Distributed Systems. Active member of the IEEE Student Branch.",
    color: "from-blue-500/20 to-cyan-500/20",
    tilt: -3,
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Bandaranayake College",
    duration: "2018 - 2020",
    gpa: "3As",
    description: "Combined Mathematics stream. Developed a strong foundation in problem solving and logic.",
    color: "from-purple-500/20 to-pink-500/20",
    tilt: 3,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
           {education.map((edu, index) => (
             <motion.div
               key={index}
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -50 }}
               transition={{ delay: index * 0.2 }}
               whileHover={{ scale: 1.02, rotate: 0 }}
               style={{ rotate: edu.tilt }}
               className={`glass p-8 rounded-3xl border-l-4 border-primary relative overflow-hidden group`}
             >
               <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-bold">{edu.degree}</h3>
                   <span className="text-sm font-mono text-primary px-3 py-1 rounded-full bg-primary/10">
                     {edu.duration}
                   </span>
                 </div>
                 <h4 className="text-lg text-foreground/80 font-medium mb-4">{edu.institution}</h4>
                 <p className="text-foreground/60 mb-4">{edu.description}</p>
                 <div className="text-primary font-bold">{edu.gpa}</div>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="flex-1 text-center md:text-right">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
              My <br /> <span className="text-gradient">Education</span> <GraduationCap className="inline-block w-12 h-12 md:w-20 md:h-20 text-primary ml-2 animate-bounce" />
            </h2>
            <p className="text-foreground/60 text-lg max-w-md ml-auto">
              A continuous journey of learning and personal growth through formal education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
