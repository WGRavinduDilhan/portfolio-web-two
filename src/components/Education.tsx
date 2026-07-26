"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

const achievements = [
  {
    tag: "2019 – 2022",
    title: "G.C.E. Advanced Level",
    institution: "Bandaranayake College, Gampaha",
    description:
      "Passed G.C.E. A/L's in Technology Stream. Ranked in the top 27th District rank with 2 A's 1 B.",
    badge: "2 A's 1 B | Z-Score 1.9228",
    bgFrom: "#0f172a",
    bgTo: "#082f49",
    image: "/BC.png",
    imagePlaceholder: "BCG",
  },
  {
    tag: "2022 – 2024",
    title: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus Colombo",
    description:
      "Completed Diploma in Information Technology as a Foundation for IT and Software Engineering. Focused on IT skills and Web Development.",
    badge: "Information Technology",
    bgFrom: "#082f49",
    bgTo: "#164e63",
    image: "/Esoft.png",
    imagePlaceholder: "ESOFT",
  },
  {
    tag: "2023 – Present",
    title: "BICT Hons Degree",
    institution: "University of Kelaniya",
    description:
      "Currently following B.Sc.Hons with Specialization in Networking Technology. Active in Open Source communities. Focused on Networking and DevOps and cloud based technologies.",
    badge: "Networking Technology",
    bgFrom: "#164e63",
    bgTo: "#0e7490",
    image: "/UOK.png",
    imagePlaceholder: "UoK",
  },
  {
    tag: "Extracurricular",
    title: "B2B Manager",
    institution: "AIESEC Colombo North",
    description:
      "Led Partnership and Relationship Management, driving Stakeholder Engagement and Supporting Incoming Global Volunteering Projects growth.",
    badge: "B2B Manager",
    bgFrom: "#0e7490",
    bgTo: "#0891b2",
    image: "/AIESEC2.png",
    imagePlaceholder: "AIESEC",
  },
  {
    tag: "Training Program",
    title: "WSO2 Linux Administration & DevOps Engineering",
    institution: "WSO2, Colombo, Sri Lanka",
    description:
      "Successfully completed High Impact 6 month training program balancing academics and cutting-edge Linux Administration & DevOps Engineering skills and completed real world project.",
    badge: "Linux & DevOps",
    bgFrom: "#0891b2",
    bgTo: "#06b6d4",
    image: "/WSO2-1.png",
    imagePlaceholder: "WSO2",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function TimelineNode({
  item,
  idx,
  isLast,
}: {
  item: (typeof achievements)[number];
  idx: number;
  isLast: boolean;
}) {
  const isActive = item.tag?.includes("Present");

  return (
    <div className="relative flex flex-row items-start w-full gap-8 md:gap-12" style={{ marginBottom: isLast ? 0 : 96 }}>
      {/* Icon Column - fixed 64px */}
      <div className="w-[64px] shrink-0 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className={`w-[64px] h-[64px] rounded-full flex items-center justify-center border-2 overflow-hidden bg-[#F3F4F6] ${isActive ? "border-white " : "border-slate-600"
            }`}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.institution}
              className={`w-12 h-12 object-contain ${isActive ? "" : "opacity-90"}`}
            />
          ) : (
            <GraduationCap className={`w-8 h-8 ${isActive ? "text-black" : "text-gray-500"}`} />
          )}
        </motion.div>
      </div>

      {/* Text Column - Staggered Animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col w-full mt-1"
      >
        {item.tag && (
          <motion.span variants={itemVariants} className="text-[15px] uppercase font-medium text-[#9CA3AF] mb-[4px] tracking-wider">
            {item.tag}
          </motion.span>
        )}

        <motion.span variants={itemVariants} className="text-[16px] uppercase font-semibold text-gray-300 tracking-wide mb-[8px]">
          {item.institution}
        </motion.span>

        <motion.h3 variants={itemVariants} className="text-[26px] md:text-[30px] font-bold leading-tight mb-[12px] text-white">
          {item.title}
        </motion.h3>

        <motion.div variants={itemVariants} className="w-full">
          <p className="text-white/80 text-[17px] md:text-[18px] leading-relaxed">
            {item.description}
          </p>
          {item.badge && (
            <div className="mt-[12px]">
              <span className="text-[14px] font-extrabold uppercase tracking-[0.12em] text-yellow-400 block">
                {item.badge}
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    /*
      NO overflow-hidden — that would break position:sticky.
      overflow-x: clip clips horizontal overflow without breaking sticky.
    */
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24"
      style={{ overflowX: "clip" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-12 xl:gap-35 items-start">

          {/* ── Left Sticky Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:sticky xl:top-28 space-y-7"
            style={{ zIndex: 100 }}
          >
            <span className="section-label">Academic Background</span>

            <h2 className="section-title leading-tight">
              Academic<br />
              <span className="text-gradient">Achievements</span>
            </h2>

            <p className="text-foreground/60 text-base leading-relaxed max-w-xs">
              My educational journey has been defined by a passion for technical
              excellence and continuous learning in IT and DevOps.
            </p>
          </motion.div>

          {/* ── Right Timeline Column ── */}
          <div className="relative pt-2 w-full" ref={containerRef}>
            {/* The Continuous Animated Vertical Line with Glowing Dot */}
            <div className="absolute top-[64px] bottom-0 left-[31px] w-[2px]">
              <motion.div
                style={{ height: lineHeight }}
                className="relative w-full bg-yellow-400"
              >
                {/* Glowing Dot at the bottom of the active line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[10px] h-[10px] rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,1)]" />
              </motion.div>
            </div>
            {achievements.map((item, idx) => (
              <TimelineNode
                key={idx}
                item={item}
                idx={idx}
                isLast={idx === achievements.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
