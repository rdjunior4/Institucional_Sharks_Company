"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Crosshair, TrendingUp, DollarSign } from "lucide-react"

export function SharkFinDivider({ large = false }: { large?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const prefersReducedMotion = useReducedMotion()

  const shouldAnimate = isInView && !prefersReducedMotion
  const duration = 2.0

  // Popups appear after fin settles (slide 2s + stabilize buffer)
  const popupBaseDelay = duration + 0.8

  return (
    <div className="relative z-20 w-full" aria-hidden="true">
      <div
        ref={ref}
        className={`pointer-events-none absolute bottom-0 left-0 right-0 translate-y-[28%] ${large ? "overflow-visible" : "overflow-hidden"} ${large ? "h-[100px] sm:h-[140px] lg:h-[200px]" : "h-[80px] sm:h-[100px] lg:h-[140px]"}`}
      >
      {/* Surface / trail line */}
      <div className="absolute bottom-[28%] left-0 right-0 h-px">
        {/* Base line — very subtle */}
        <div className="absolute inset-0 bg-white/[0.06]" />
        {/* Full-width glowing line with growing effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-sharks-blue-light/90 to-transparent shadow-[0_0_15px_2px_rgba(91,156,246,0.5)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={shouldAnimate ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: duration * 0.8, ease: "easeOut", delay: 0.1 }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Fin group — slides from left to right */}
      <motion.div
        className="absolute bottom-[28%] left-0"
        initial={{ x: "-10%", opacity: 0 }}
        animate={
          shouldAnimate
            ? { x: "calc(50vw - 20px)", opacity: 1 }
            : {}
        }
        transition={{
          x: { duration, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.4, ease: "easeOut" },
        }}
      >


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
            src="/sharks-fin.png"
            alt="Sharks Fin"
            className={`${large ? "h-[64px] sm:h-[80px] lg:h-[120px]" : "h-[48px] sm:h-[64px] lg:h-[80px]"} w-auto drop-shadow-[0_0_15px_rgba(91,156,246,0.3)]`}
          />
        </motion.div>

        {/* === Floating info popups — only on the first (large) divider === */}
        {large && (
          <>
            {/* +Desempenho — top center, above the fin */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-md border border-sharks-blue-light/20 bg-[#0a1628]/70 px-2.5 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(91,156,246,0.08)]"
              style={{ top: "-55px" }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={
                shouldAnimate
                  ? {
                      opacity: 1,
                      y: [0, -8, -2, -10, -4, -8, 0],
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 0.6, delay: popupBaseDelay, ease: "easeOut" },
                scale: { duration: 0.6, delay: popupBaseDelay, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 6,
                  delay: popupBaseDelay,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.18, 0.38, 0.55, 0.72, 0.88, 1],
                },
              }}
            >
              <TrendingUp className="h-3 w-3 text-sharks-blue-light/70" />
              <span className="text-[10px] font-medium tracking-wide text-white/80 sm:text-[11px]">
                +Desempenho
              </span>
            </motion.div>

            {/* Shark Mind — left of the fin */}
            <motion.div
              className="absolute flex items-center gap-1.5 rounded-md border border-sharks-blue-light/20 bg-[#0a1628]/70 px-2.5 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(91,156,246,0.08)]"
              style={{ top: "-5px", right: "calc(100% + 3px)" }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={
                shouldAnimate
                  ? {
                      opacity: 1,
                      y: [0, -6, -1, -9, -3, -7, 0],
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 0.6, delay: popupBaseDelay + 0.15, ease: "easeOut" },
                scale: { duration: 0.6, delay: popupBaseDelay + 0.15, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 7,
                  delay: popupBaseDelay + 0.15,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.15, 0.35, 0.52, 0.7, 0.85, 1],
                },
              }}
            >
              <Crosshair className="h-3 w-3 text-sharks-blue-light/70" />
              <span className="text-[10px] font-medium tracking-wide text-white/80 whitespace-nowrap sm:text-[11px]">
                Shark Mind
              </span>
            </motion.div>

            {/* R$ Resultado — right of the fin */}
            <motion.div
              className="absolute flex items-center gap-1.5 rounded-md border border-sharks-blue-light/20 bg-[#0a1628]/70 px-2.5 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(91,156,246,0.08)]"
              style={{ top: "-5px", left: "calc(100% + 3px)" }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={
                shouldAnimate
                  ? {
                      opacity: 1,
                      y: [0, -7, -2, -8, -3, -6, 0],
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 0.6, delay: popupBaseDelay + 0.3, ease: "easeOut" },
                scale: { duration: 0.6, delay: popupBaseDelay + 0.3, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 5.5,
                  delay: popupBaseDelay + 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.2, 0.4, 0.58, 0.75, 0.9, 1],
                },
              }}
            >
              <DollarSign className="h-3 w-3 text-sharks-blue-light/70" />
              <span className="text-[10px] font-medium tracking-wide text-white/80 whitespace-nowrap sm:text-[11px]">
                R$ Resultado
              </span>
            </motion.div>
          </>
        )}
      </motion.div>
      </div>
    </div>
  )
}
