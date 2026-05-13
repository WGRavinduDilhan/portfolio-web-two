"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20">
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            Hey, I'm Ravindu
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I build <span className="text-gradient">exceptional</span> digital experiences.
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            A Full Stack Developer specializing in building (and occasionally designing) 
            modern, scalable, and high-performance web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20">
              Contact Me
            </button>
            <button className="px-8 py-3 rounded-full border border-primary/50 text-primary font-bold hover:bg-primary/10 transition-all duration-300">
              Get My CV
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
            <Image
              src="/profile.png"
              alt="Ravindu Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-xl opacity-50"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-accent rounded-bl-xl opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
