"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

export function SharkFinDivider({ large = false }: { large?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const prefersReducedMotion = useReducedMotion()

  const shouldAnimate = isInView && !prefersReducedMotion
  const duration = 2.0

  return (
    <div className="relative z-20 w-full" aria-hidden="true">
      <div
        ref={ref}
        className={`pointer-events-none absolute bottom-0 left-0 right-0 translate-y-[28%] overflow-hidden ${large ? "h-[100px] sm:h-[140px] lg:h-[200px]" : "h-[80px] sm:h-[100px] lg:h-[140px]"}`}
      >
      {/* Surface / trail line */}
      <div className="absolute bottom-[28%] left-0 right-0 h-px">
        {/* Base line — very subtle */}
        <div className="absolute inset-0 bg-white/[0.06]" />
        {/* Animated glow sweep on the line */}
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent via-sharks-blue-light/20 to-transparent"
          initial={{ x: "100%" }}
          animate={shouldAnimate ? { x: "-200%" } : {}}
          transition={{ duration: duration * 1.2, ease: "easeInOut", delay: 0.2 }}
        />
      </div>

      {/* Fin group — slides from right to center */}
      <motion.div
        className="absolute bottom-[28%] right-0"
        initial={{ x: "10%", opacity: 0 }}
        animate={
          shouldAnimate
            ? { x: "calc(-50vw + 20px)", opacity: 1 }
            : {}
        }
        transition={{
          x: { duration, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.4, ease: "easeOut" },
        }}
      >
        {/* Wake / trail behind fin */}
        <motion.div
          className="absolute -right-32 bottom-0 h-px w-32"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={shouldAnimate ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-sharks-blue-light/30 to-transparent" />
        </motion.div>

        {/* Ripple ring 1 */}
        <motion.div
          className="absolute -bottom-1 left-1/2 h-3 w-8 -translate-x-1/2 rounded-full border border-sharks-blue-light/15"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            shouldAnimate
              ? {
                  opacity: [0, 0.4, 0],
                  scale: [0.6, 1.4, 1.8],
                }
              : {}
          }
          transition={{ duration: 1.8, delay: duration - 0.3, ease: "easeOut" }}
        />

        {/* Ripple ring 2 */}
        <motion.div
          className="absolute -bottom-1 left-1/2 h-2.5 w-6 -translate-x-1/2 rounded-full border border-sharks-blue-light/10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            shouldAnimate
              ? {
                  opacity: [0, 0.3, 0],
                  scale: [0.5, 1.3, 1.6],
                }
              : {}
          }
          transition={{ duration: 1.5, delay: duration, ease: "easeOut" }}
        />

        {/* Subtle particles near fin base */}
        {[
          { x: -6, y: -2, size: 1.5, delay: duration - 0.2 },
          { x: 8, y: -4, size: 1, delay: duration + 0.1 },
          { x: -10, y: -1, size: 1, delay: duration + 0.3 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-1/2 rounded-full bg-sharks-blue-light/40"
            style={{
              width: particle.size,
              height: particle.size,
              marginLeft: particle.x,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={
              shouldAnimate
                ? {
                    opacity: [0, 0.6, 0],
                    y: [0, particle.y - 8, particle.y - 16],
                  }
                : {}
            }
            transition={{
              duration: 1.2,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* The Fin — Image */}
        <motion.div
          animate={
            shouldAnimate
              ? {
                  y: [0, -1.5, 0, -1, 0],
                  rotate: [0, -0.5, 0, 0.3, 0],
                }
              : {}
          }
          transition={{
            duration: 3,
            delay: duration + 0.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative"
        >
          <img
            src="http://sharkscompany.online/wp-content/uploads/2026/05/SIMBOLO-SHARKS-COMPANY-3D-e1777920291363.png"
            alt="Sharks Fin"
            className={`${large ? "h-[64px] sm:h-[80px] lg:h-[120px]" : "h-[48px] sm:h-[64px] lg:h-[80px]"} w-auto drop-shadow-[0_0_15px_rgba(91,156,246,0.3)]`}
          />
        </motion.div>
      </motion.div>
      </div>
    </div>
  )
}
