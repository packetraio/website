"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const milestones = [
  {
    period: "Today",
    title: "Building intelligent networking products",
    status: "active",
  },
  {
    period: "2027",
    title: "Launch first SaaS platform",
    status: "upcoming",
  },
  {
    period: "2028",
    title: "Global enterprise expansion",
    status: "upcoming",
  },
  {
    period: "Future",
    title: "Power the world's intelligent infrastructure",
    status: "future",
  },
];

export function Timeline() {
  return (
    <AnimatedSection id="vision">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan"
          >
            Our Vision
          </motion.span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            The Road Ahead
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan via-electric to-transparent sm:left-1/2 sm:-translate-x-px" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative mb-12 flex items-start gap-6 sm:mb-16 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="hidden flex-1 sm:block" />

              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-navy-dark sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    milestone.status === "active"
                      ? "animate-pulse bg-cyan"
                      : "bg-electric/50"
                  }`}
                />
              </div>

              <div
                className={`glass-card flex-1 rounded-xl p-6 ${
                  milestone.status === "active"
                    ? "border-cyan/30 bg-cyan/5"
                    : ""
                }`}
              >
                <span className="text-sm font-semibold text-cyan">
                  {milestone.period}
                </span>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  {milestone.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
