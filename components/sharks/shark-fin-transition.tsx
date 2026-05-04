"use client"

import { motion, useReducedMotion } from "framer-motion"

interface SharkFinTransitionProps {
  /** Background variant for the transition strip */
  variant?: "dark-to-light" | "light-to-dark" | "light" | "dark"
}

export function SharkFinTransition({ variant = "dark-to-light" }: SharkFinTransitionProps) {
  const shouldReduceMotion = useReducedMotion()

  const bgClass = {
    "dark-to-light":
      "bg-gradient-to-b from-sharks-navy-deep via-sharks-navy/40 to-background",
    "light-to-dark":
      "bg-gradient-to-b from-background via-sharks-navy/40 to-sharks-navy-deep",
    light: "bg-background",
    dark: "bg-sharks-navy-deep",
  }[variant]

  const trailColor = variant.includes("light") && variant !== "dark"
    ? "text-sharks-blue/30"
    : "text-sharks-blue-light/40"

  return (
    <div className={`relative h-20 w-full overflow-hidden md:h-28 ${bgClass}`}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M-100 70 Q 300 40 600 60 T 1300 50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className={trailColor}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 0.2 }
              : { pathLength: [0, 1], opacity: [0, 0.6, 0.4, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.path
          d="M-100 60 Q 350 30 650 55 T 1300 45"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          className={trailColor}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 0.25 }
              : { pathLength: [0, 1], opacity: [0, 0.5, 0.3, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
          }
        />
      </svg>

      {/* Shark Fin */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        initial={{ x: "-80px" }}
        animate={
          shouldReduceMotion
            ? { x: "50%" }
            : { x: ["calc(-80px)", "calc(100vw + 80px)"] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg
          width="48"
          height="40"
          viewBox="0 0 60 50"
          fill="none"
          className="text-sharks-blue"
          aria-hidden="true"
        >
          <path d="M30 5 L45 45 Q30 40 15 45 Z" fill="currentColor" opacity="0.85" />
          <path d="M30 8 L42 42 Q30 38 18 42 Z" fill="currentColor" opacity="0.4" />
        </svg>
      </motion.div>

      {!shouldReduceMotion &&
        [...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-sharks-blue-light/50"
            style={{ top: `${30 + i * 12}%` }}
            initial={{ x: "-20px", opacity: 0 }}
            animate={{
              x: ["calc(-20px)", "calc(100vw + 20px)"],
              opacity: [0, 0.6, 0.3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
    </div>
  )
}
