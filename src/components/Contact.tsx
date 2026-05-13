"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub", color: "#ffffff", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.14)" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "#0A66C2", bg: "rgba(10,102,194,0.12)", border: "rgba(10,102,194,0.28)" },
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
    <section id="contact" className="portfolio-section relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-start gap-10 md:gap-14"
            >
              <div>
                <span className="section-label">Get In Touch</span>
                <h2 className="section-title">
                  Let&apos;s <span className="text-gradient">Connect</span>
                </h2>
                <p className="section-subtitle text-base md:text-lg max-w-md">
                  I&apos;m currently open to new opportunities in DevOps and SRE. Have a project 
                  or an architectural proposal? I&apos;d love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.a
                  href="mailto:hello@ravindu.dev"
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500 border border-white/15 shadow-sm shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Direct Channel</p>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors">hello@ravindu.dev</p>
                  </div>
                </motion.a>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/15 shadow-sm shrink-0">
                    <MapPin className="w-6 h-6 text-foreground/60" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Global Presence</p>
                    <p className="text-lg font-bold">Gampaha, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-[25px] font-bold text-foreground/50 uppercase tracking-widest mb-10">
                  Follow My Technical Journey
                </p>
                <div className="flex flex-wrap gap-5">
                  {socials.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -6, scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-[72px] h-[72px] rounded-2xl transition-all duration-300 text-xs font-bold shadow-md group"
                      style={{
                        backgroundColor: s.bg,
                        border: `1px solid ${s.border}`,
                        boxShadow: `0 12px 30px ${s.border}`,
                      }}
                    >
                      <span className="text-5xl group-hover:scale-110 transition-transform" style={{ color: s.color }}>
                        {s.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column (Form) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="glass rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium"
                    >
                      {error}
                    </motion.div>
                  )}

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Full Name", name: "fullName", type: "text", placeholder: "Ravindu Dilhan" },
                      { label: "Email Address", name: "email", type: "email", placeholder: "ravindu@company.com" },
                    ].map((field) => (
                      <div key={field.name} className="space-y-3">
                        <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full px-5 py-3 rounded-lg bg-white/8 border border-white/25 focus:border-primary/80 focus:bg-white/12 outline-none transition-all placeholder:text-foreground/40 text-sm font-medium text-foreground"
                          disabled={isLoading}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                      Project Inquiry Details
                    </label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Describe your architectural needs or proposal..."
                      className="w-full px-5 py-3 rounded-lg bg-white/8 border border-white/25 focus:border-primary/80 focus:bg-white/12 outline-none transition-all resize-none placeholder:text-foreground/40 text-sm font-medium text-foreground disabled:opacity-50"
                      disabled={isLoading}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.01, y: isLoading ? 0 : -2 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    className="btn-primary w-full justify-center py-4 text-sm font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {isLoading ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                          <Send className="w-5 h-5" />
                        </motion.div>
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check className="w-5 h-5 ml-2" />
                        <span className="ml-1">Sent!</span>
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
