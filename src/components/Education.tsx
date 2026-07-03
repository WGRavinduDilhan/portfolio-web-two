"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const achievements = [
  {
    tag: "2019 – 2022",
    title: "G.C.E. Advanced Level",
    institution: "Bandaranayake College, Gampaha",
    description:
      "Passed G.C.E. A/L's in Technology Stream. Ranked in the top 27th District rank with 2 A's 1 B.",
    badge: "2 A's 1 B | Z-Score 1.9228",
    bgFrom: "#7a0a0a",
    bgTo: "#a01515",
    image: "/BC.png",
    imagePlaceholder: "BCG",
  },
  {
    tag: "2023 – Present",
    title: "BICT Hons Degree",
    institution: "University of Kelaniya",
    description:
      "Currrently following B.Sc.Hons with Specialization in Networking Technology. Active in SRE and Open Source communities. Focused on distributed systems and infrastructure automation.",
    bgFrom: "#68211D",
    bgTo: "#68211E",
    image: "/UOK.png",
    imagePlaceholder: "UoK",
  },
  {
    tag: "Extracurricular",
    title: "B2B Manager",
    institution: "AIESEC UOK",
    description:
      "Lead local company partnerships to deliver cross-cultural internship programs, managing stakeholder relations, negotiations, and end-to-end project execution.",
    badge: "B2B Manager",
    bgFrom: "#0383E8",
    bgTo: "#037EF3",
    image: "/AIESEC.png",
    imagePlaceholder: "AIESEC",
  },
  {
    tag: "Training Program",
    title: "WSO2 Linux Administration & DevOps Engineering",
    institution: "WSO2, Colombo, Sri Lanka",
    description:
      "High impact 6 month training program balancing academics and cutting-edge Linux Administration & Devops engineering skills.",
    badge: "Linux & DevOps",
    bgFrom: "#FF6F00",
    bgTo: "#FF6F00",
    image: "/WSO2.png",
    imagePlaceholder: "WSO2",
  },
];

/*
  Fan deck stacking config:
  ─────────────────────────
  Cards are sticky — as you scroll, each successive card slides up and stacks
  on top of the previous one. When fully stacked they form a fanned deck.

  Each card sits at a slightly different top position (STACK_TOP_OFFSET) so the
  card below "peeks" underneath the one above it.

  The fan rotation/x-offset makes lower cards lean slightly so you can
  see the deck depth — just like the reference image.
*/
const STICKY_TOP = 110;      // px from viewport top for first card
const STACK_TOP_OFFSET = 30; // px each card peeks below the previous
const SCROLL_GAP = "28vh";   // scroll distance between each card appearing

// Per-card fan style: bottom cards in the stack get more rotation & x-shift.
// idx 0 = first card shown (bottom of final pile), idx n-1 = last/top card.
const FAN_STYLES: { rotate: number; x: number; opacity: number }[] = [
  { rotate: 0, x: 0, opacity: 0.70 }, // bottom
  { rotate: 0, x: 0, opacity: 0.78 }, //
  { rotate: 0, x: 0, opacity: 0.85 }, //
  { rotate: 0, x: 0, opacity: 0.93 }, // top (front card, nearly opaque)
];

function EducationCard({
  item,
  idx,
}: {
  item: (typeof achievements)[number];
  idx: number;
}) {
  const fan = FAN_STYLES[idx] ?? { rotate: 0, x: 0, opacity: 0.9 };

  return (
    <div
      className="sticky w-full"
      style={{
        top: `${STICKY_TOP + idx * STACK_TOP_OFFSET}px`,
        zIndex: 10 + idx,
        // Fan transform applied to the sticky wrapper so it bakes into the
        // stacked position (lower cards tilt away slightly from viewer)
        transform: `rotate(${fan.rotate}deg) translateX(${fan.x}px)`,
        transformOrigin: "bottom center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          rotate: 0,
          opacity: 1,
          zIndex: 50,
          transition: { duration: 0.25 },
        }}
        className="w-full rounded-lg border border-white/20 cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${item.bgFrom}, ${item.bgTo})`,
          boxShadow: "0 18px 50px rgba(0,0,0,0.50)",
          opacity: fan.opacity,
          overflow: "hidden",
        }}
      >
        {/* ── Logo Banner — full-width white area, logo fills it ── */}
        <div className="w-full h-52 bg-white relative flex items-center justify-center p-5">
          {item.image ? (
            <img
              src={item.image}
              alt={item.institution}
              className="max-h-full max-w-full object-contain"
              style={{ maxHeight: "168px" }}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 opacity-25">
              <GraduationCap className="w-16 h-16 text-gray-500" />
              <span className="text-gray-500 font-black text-xl tracking-tight">
                {item.imagePlaceholder}
              </span>
            </div>
          )}

          {/* Institution name overlay at banner bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 py-2 px-5 flex items-center"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <span className="text-white text-xs font-bold uppercase tracking-[0.18em] truncate">
              {item.institution}
            </span>
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className="px-8 pb-8 pt-10 flex flex-col gap-2">

          {/* Tag + Badge row */}
          <div className="flex items-center justify-between gap-10 flex-wrap mt-4">
            
            {item.tag && (
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/90 bg-white/5 border border-white/20 px-4 py-1.5 rounded-full shadow-sm">
                {item.tag}
              </span>
            )}
            {item.badge && (
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-white bg-white/5 border border-white/20 px-4 py-1.5 rounded-full shadow-sm">
                {item.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-3xl font-black text-white leading-tight tracking-tight mt-1">
            {item.title}
          </h3>

          {/* Divider */}
          <div className="h-px bg-white/15 w-full my-1" />

          {/* Description */}
          <p className="text-white/85 text-sm md:text-base font-medium leading-relaxed">
            {item.description}
          </p>
        </div>

      </motion.div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

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
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

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
            </p><br></br>

            {/* Institution badge */}
            <div className="inline-flex items-center gap-4 pl-5 pr-8 py-4 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                  Institution
                </span>
                <span className="text-sm font-black tracking-widest">
                  University of Kelaniya&nbsp;&nbsp;
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Stacking Cards Column ── */}
          {/*
            marginBottom between cards = SCROLL_GAP (28vh each).
            paddingBottom on the column = (n-1) * SCROLL_GAP so the section
            is tall enough to scroll through all cards before moving on.
          */}
          <div
            className="max-w-[520px] w-full pb-0 xl:pb-[calc(3*28vh)]"
          >
            {achievements.map((item, idx) => {
              const isLast = idx === achievements.length - 1;
              return (
                <div
                  key={idx}
                  style={{ marginBottom: isLast ? 0 : "10rem" }}
                  className={!isLast ? "xl:[margin-bottom:28vh]" : ""}
                >
                  <EducationCard item={item} idx={idx} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
      <br /><br/>
    </section>
  );
}
