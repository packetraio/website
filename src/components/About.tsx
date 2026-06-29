"use client";

import { motion } from "framer-motion";
import { Target, Telescope } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan"
          >
            About
          </motion.span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Redefining Network Infrastructure
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl"
          >
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
                <Target size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Mission
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/60">
                To simplify networking through intelligent software that
                empowers organizations with visibility, automation, security,
                and performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl"
          >
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Telescope size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Vision
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/60">
                Become the world&apos;s most trusted networking software
                company.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
