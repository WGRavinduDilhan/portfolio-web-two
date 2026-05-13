"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";

const blogs = [
  {
    title: "Mastering Next.js 14 App Router",
    excerpt: "A deep dive into the new paradigms of Next.js 14 and how to leverage server components effectively.",
    date: "May 10, 2026",
    author: "Ravindu",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Future of Web Animations",
    excerpt: "Exploring the latest trends in web animations and how Framer Motion is changing the game for developers.",
    date: "April 28, 2026",
    author: "Ravindu",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Designing for the Modern Web",
    excerpt: "Why aesthetics matter more than ever in 2026 and how to create premium user interfaces.",
    date: "April 15, 2026",
    author: "Ravindu",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Latest <span className="text-gradient">Insights</span>
        </h2>
        <p className="text-foreground/60 max-w-md text-center md:text-right">
          Sharing my thoughts on development, design, and the ever-evolving tech landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 border border-white/5">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono text-primary mb-3">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
              <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
              {blog.title}
            </h3>
            <p className="text-sm text-foreground/60 line-clamp-2 mb-4">
              {blog.excerpt}
            </p>
            <button className="text-sm font-bold text-primary group-hover:underline underline-offset-4 decoration-primary">
              Read Article
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
