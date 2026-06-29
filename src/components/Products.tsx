"use client";

import { motion } from "framer-motion";
import {
  Eye,
  GitBranch,
  Brain,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const products = [
  {
    icon: Eye,
    name: "Packetra Observe",
    description: "Network observability platform.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: GitBranch,
    name: "Packetra Flow",
    description: "Traffic analytics and packet intelligence.",
    gradient: "from-cyan-500 to-teal-400",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Brain,
    name: "Packetra AI",
    description: "AI-powered network operations.",
    gradient: "from-violet-500 to-blue-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Zap,
    name: "Packetra Edge",
    description: "High-performance packet processing powered by DPDK.",
    gradient: "from-electric to-cyan",
    glow: "shadow-electric/20",
  },
];

export function Products() {
  return (
    <AnimatedSection id="products">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan"
          >
            Products
          </motion.span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Enterprise-Grade Platform Suite
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Comprehensive networking solutions built for the modern enterprise.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="gradient-border group relative rounded-2xl p-[1px]"
            >
              <div className="glass-card flex h-full flex-col rounded-2xl p-6 transition-all duration-500 group-hover:bg-white/[0.06]">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg ${product.glow}`}
                >
                  <product.icon size={22} className="text-white" />
                </motion.div>

                <h3 className="font-display text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
                  {product.description}
                </p>

                <ShimmerButton
                  variant="ghost"
                  className="mt-6 w-full justify-start px-0 py-0 text-cyan hover:bg-transparent"
                >
                  Learn More
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </ShimmerButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
