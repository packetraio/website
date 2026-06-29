"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Cloud,
  Brain,
  BarChart3,
  Shield,
  Layers,
  Activity,
  Bot,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Gauge,
    title: "Ultra Low Latency",
    description: "Microsecond-level packet processing for mission-critical workloads.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for Kubernetes and modern cloud-native architectures.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description: "Intelligent automation and predictive network operations.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live traffic insights with sub-second data freshness.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Zero-trust architecture with end-to-end encryption.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Horizontally scale from edge to global data centers.",
  },
  {
    icon: Activity,
    title: "High Availability",
    description: "99.99% uptime with automatic failover and redundancy.",
  },
  {
    icon: Bot,
    title: "Automation",
    description: "Self-healing networks with intelligent policy enforcement.",
  },
];

export function Features() {
  return (
    <AnimatedSection id="features">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan"
          >
            Solutions
          </motion.span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Built for Performance
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Every feature engineered for enterprise-grade reliability and speed.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group glass-card rounded-xl p-6 transition-all duration-300 hover:border-cyan/30 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 text-electric transition-colors group-hover:bg-electric/20 group-hover:text-cyan">
                <feature.icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
