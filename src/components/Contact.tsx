"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/WgRavinduDilhan", label: "GitHub", color: "#ffffff", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.14)" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/ravindu-dilhan", label: "LinkedIn", color: "#0A66C2", bg: "rgba(10,102,194,0.12)", border: "rgba(10,102,194,0.28)" },
  { icon: <FaMedium />, href: "https://medium.com/@yourusername", label: "Medium", color: "#F1F1F1", bg: "rgba(241,241,241,0.08)", border: "rgba(241,241,241,0.18)" },
  { icon: <FaWhatsapp />, href: "https://wa.me/yourphonenumber", label: "WhatsApp", color: "#25D366", bg: "rgba(37,211,102,0.12)", border: "rgba(37,211,102,0.28)" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    details: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Full Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.details.trim()) {
      setError("Project details are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call or send email
      // You can replace this with your actual API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // If API doesn't exist, just log for demo
        console.log("Form submitted:", formData);
        return { ok: true };
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: "", email: "", details: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Form error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="portfolio-section relative overflow-hidden py-24 md:py-32">
      <br /><br />
       {/* Background Decorative Blob */}
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-sm">contact</span>
            <h2 className="section-title text-4xl md:text-5xl mt-4 mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-foreground/60 max-w-lg mb-12">
              I&apos;m actively seeking <span className="text-white font-semibold">DevOps & SRE internship</span> opportunities.
              Whether you have a project, role, or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-6">
              <br />
              <a href="mailto:dilhanwgr2002@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-white/50"/>
                <span>dilhanwgr2002@gmail.com</span>
              </a>
              <hr className="border-white/10" />
              <br />
              
              <a href="https://github.com/WgRavinduDilhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5 text-white/50"/>
                <span>github.com/WgRavinduDilhan</span>
              </a>
              <hr className="border-white/10" />
              <br />
              
              <a href="https://linkedin.com/in/ravindu-dilhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5 text-white/50"/>
                <span>linkedin.com/in/ravindu-dilhan</span>
              </a>
              <hr className="border-white/10" />
              
            </div>

          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:mt-[4.5rem]"
          >
            <br /><br /><br /><br />
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all placeholder:text-foreground/40"
                  disabled={isLoading}
                />
              </div>
              <br />

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all placeholder:text-foreground/40"
                  disabled={isLoading}
                />
              </div>
              <br />

              <div>
                <label htmlFor="details" className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  name="details"
                  id="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-foreground/40"
                  disabled={isLoading}
                />
              </div>
              <br />
              
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 rounded-md bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Message sent successfully!
                  </motion.div>
              )}

              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full btn-primary bg-cyan-500 hover:bg-cyan-600 text-black justify-center py-4 text-sm font-bold tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Send className="w-5 h-5" />
                    </motion.div>
                    <span className="ml-2">Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
          <br /><br />
        </div>
      </div>
    </section>
  );
}
