"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <FaMedium />, href: "https://medium.com/@yourusername", label: "Medium" },
  { icon: <FaWhatsapp />, href: "https://wa.me/yourphonenumber", label: "WhatsApp" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="glass p-8 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Let's <span className="text-gradient">Collaborate</span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-md">
                I'm currently looking for new opportunities in SRE and DevOps. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hello@ravindu.dev" className="flex items-center gap-6 group">
                <div className="p-5 rounded-2xl bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono text-foreground/40 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-bold">hello@ravindu.dev</p>
                </div>
              </a>
              <div className="flex items-center gap-6">
                <div className="p-5 rounded-2xl bg-white/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono text-foreground/40 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-bold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm font-mono text-foreground/40 uppercase tracking-widest mb-6">Connect on Social</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-primary text-foreground hover:text-background transition-all duration-300 group"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-bold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02]"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-mono text-foreground/40 uppercase ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-foreground/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-foreground/40 uppercase ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-foreground/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-foreground/40 uppercase ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you today?"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all resize-none placeholder:text-foreground/20"
                />
              </div>
              <button className="w-full py-5 rounded-2xl bg-primary text-background font-black flex items-center justify-center gap-3 hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20 group">
                SEND MESSAGE <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/40 text-sm">
        <p>© 2026 Ravindu. DevOps & SRE Focused Undergraduate.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </footer>
    </section>
  );
}
