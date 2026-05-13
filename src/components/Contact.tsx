"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="glass p-8 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-12 max-w-md">
              I'm always open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out!
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:hello@ravindu.dev" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">hello@ravindu.dev</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github />, href: "#" },
                { icon: <Linkedin />, href: "#" },
                { icon: <Twitter />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-primary text-foreground hover:text-background transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/60 ml-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/60 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/60 ml-2">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/60 ml-2">Message</label>
              <textarea 
                rows={5}
                placeholder="How can I help you?"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all resize-none"
              />
            </div>
            <button className="w-full py-4 rounded-2xl bg-primary text-background font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all duration-300 group">
              Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-20 text-center text-foreground/40 text-sm">
        <p>© 2026 Ravindu. All rights reserved. Built with Next.js and ❤️</p>
      </footer>
    </section>
  );
}
