"use client"

import { motion, useReducedMotion } from "framer-motion"

export function SharkFinTransition() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative h-[90px] w-full overflow-hidden bg-transparent md:h-[120px]">
      {/* Trail Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Trail Line 1 */}
        <motion.path
          d="M-100 70 Q 300 40 600 60 T 1300 50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 0.2 }
              : {
                  pathLength: [0, 1],
                  opacity: [0, 0.3, 0.2, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />

        {/* Trail Line 2 */}
        <motion.path
          d="M-100 60 Q 350 30 650 55 T 1300 45"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-primary/25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 0.25 }
              : {
                  pathLength: [0, 1],
                  opacity: [0, 0.4, 0.25, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }
          }
        />

        {/* Trail Line 3 */}
        <motion.path
          d="M-100 50 Q 400 20 700 50 T 1300 40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 0.15 }
              : {
                  pathLength: [0, 1],
                  opacity: [0, 0.25, 0.15, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }
          }
        />
      </svg>

      {/* Shark Fin SVG */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        initial={{ x: "-100px" }}
        animate={
          shouldReduceMotion
            ? { x: "50%" }
            : {
                x: ["calc(-100px)", "calc(100vw + 100px)"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <svg
          width="60"
          height="50"
          viewBox="0 0 60 50"
          fill="none"
          className="text-primary"
        >
          {/* Minimalist Shark Fin */}
          <path
            d="M30 5 L45 45 Q30 40 15 45 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M30 8 L42 42 Q30 38 18 42 Z"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Floating Particles */}
      {!shouldReduceMotion &&
        [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/30"
            style={{
              top: `${30 + i * 10}%`,
            }}
            initial={{ x: "-20px", opacity: 0 }}
            animate={{
              x: ["calc(-20px)", "calc(100vw + 20px)"],
              opacity: [0, 0.5, 0.3, 0],
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
