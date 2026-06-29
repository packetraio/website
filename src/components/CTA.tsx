"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

export function CTA() {
  return (
    <AnimatedSection id="cta">
      <div className="container-max">
        <div className="gradient-border overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-r from-electric/20 via-navy-light to-cyan/10 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                Ready to transform your network?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
                Join leading enterprises building the next generation of
                intelligent infrastructure with PACKETRA.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ShimmerButton href="#contact" variant="primary" className="px-8 py-3.5">
                  Get Started
                  <ArrowRight size={18} />
                </ShimmerButton>
                <ShimmerButton href="mailto:info@packetra.in" variant="secondary" className="px-8 py-3.5">
                  Request Demo
                  <Calendar size={18} />
                </ShimmerButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
