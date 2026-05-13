"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary">01.</span> About Me
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </h2>
          
          <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
            <p>
              Hello! My name is Ravindu and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2021 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus 
              these days is building accessible, inclusive products and digital experiences 
              at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a comprehensive video course that guides you through 
              building a high-end web application from scratch.
            </p>
            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-primary mt-4">
              <li className="flex items-center gap-2">▹ JavaScript (ES6+)</li>
              <li className="flex items-center gap-2">▹ TypeScript</li>
              <li className="flex items-center gap-2">▹ React</li>
              <li className="flex items-center gap-2">▹ Next.js</li>
              <li className="flex items-center gap-2">▹ Node.js</li>
              <li className="flex items-center gap-2">▹ Tailwind CSS</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group max-w-sm w-full aspect-square">
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
            <div className="relative h-full w-full rounded-lg overflow-hidden glass">
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
               <Image 
                src="/profile.png" 
                alt="About Picture" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
