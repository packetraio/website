"use client";

import { motion } from "framer-motion";
import { Globe, Mail, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan"
          >
            Contact
          </motion.span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Get in Touch
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <motion.a
            href="https://packetra.in"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="glass-card group flex items-center gap-4 rounded-xl p-6 transition-all hover:border-electric/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric transition-colors group-hover:bg-electric/20">
              <Globe size={22} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-white/50">Website</div>
              <div className="font-semibold text-white">packetra.in</div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/30 transition-colors group-hover:text-cyan"
            />
          </motion.a>

          <motion.a
            href="mailto:info@packetra.in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card group flex items-center gap-4 rounded-xl p-6 transition-all hover:border-cyan/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
              <Mail size={22} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-white/50">Email</div>
              <div className="font-semibold text-white">info@packetra.in</div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/30 transition-colors group-hover:text-cyan"
            />
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  );
}
