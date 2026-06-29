"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 99.99,
    suffix: "%",
    label: "Uptime",
    description: "Enterprise SLA guarantee",
  },
  {
    value: 1,
    prefix: "<",
    suffix: "μs",
    label: "Microsecond Processing",
    description: "Sub-microsecond latency",
    decimals: 0,
  },
  {
    value: 100,
    suffix: "%",
    label: "Cloud Native",
    description: "Kubernetes-ready architecture",
  },
  {
    value: 500,
    suffix: "+",
    label: "Enterprise Ready",
    description: "Fortune 500 compatible",
  },
];

export function WhyPacketra() {
  return (
    <AnimatedSection id="why-packetra">
      <div className="container-max">
        <div className="gradient-border overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy-dark p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm font-semibold uppercase tracking-widest text-cyan"
                >
                  Why PACKETRA
                </motion.span>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Built for the Future of Networking
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  We combine decades of networking expertise with cutting-edge
                  AI and cloud-native technologies to deliver infrastructure
                  that scales with your ambitions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        decimals={stat.decimals}
                      />
                    </div>
                    <div className="mt-2 font-semibold text-white">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm text-white/40">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
