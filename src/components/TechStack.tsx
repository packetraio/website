"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const technologies = [
  "C",
  "C++",
  "Linux",
  "DPDK",
  "Rust",
  "Go",
  "Docker",
  "Kubernetes",
  "eBPF",
  "Artificial Intelligence",
];

export function TechStack() {
  return (
    <AnimatedSection id="technology">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan"
          >
            Technology
          </motion.span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Built on Proven Foundations
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Leveraging industry-standard technologies for maximum performance
            and reliability.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
              }}
              className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-electric/50 hover:text-white"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
