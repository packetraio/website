"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const logos = ["Cisco", "Cloud", "Enterprise", "AI"];

export function TrustedBy() {
  return (
    <AnimatedSection className="py-16">
      <div className="container-max">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-white/40">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group flex h-12 items-center justify-center px-6"
            >
              <div className="flex items-center gap-3 opacity-40 transition-opacity group-hover:opacity-70">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5" />
                <span className="font-display text-lg font-semibold tracking-wide text-white">
                  {logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
