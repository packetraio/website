"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function ShimmerButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ShimmerButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark",
    variant === "primary" &&
      "bg-electric text-white shadow-lg shadow-electric/25 hover:bg-electric/90 hover:shadow-electric/40",
    variant === "secondary" &&
      "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-cyan/50 hover:bg-white/10",
    variant === "ghost" &&
      "text-white/80 hover:bg-white/5 hover:text-white",
    className
  );

  const shimmer = (
    <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {variant === "primary" && shimmer}
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {variant === "primary" && shimmer}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
