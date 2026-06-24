"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"


export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Gradient transition from hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-32 bg-gradient-to-b from-sharks-navy-deep to-transparent" />
      <div className="bg-grid pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Sobre a Sharks Company
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Uma agência para quem quer{" "}
              <span className="sharks-gradient-text">crescer</span> com força e direção.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground"
            >
              Marketing não é apenas presença digital — é uma ferramenta para competir,
              vender mais e ganhar relevância. Unimos estratégia, IA, análise, criação e
              execução para impulsionar marcas que querem desempenho real.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 border-l-2 border-primary/60 pl-4 text-[15px] font-medium italic leading-relaxed text-foreground/80"
            >
              Para negócios que querem nadar em águas maiores e se tornar grandes tubarões
              no mercado.
            </motion.blockquote>
          </div>

          {/* Right: shark art */}
          <div className="lg:col-span-7 flex items-end justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full mx-auto sm:mx-0 max-w-[680px] -mb-24 lg:-mb-32 mt-6 lg:mt-0"
            >
              {/* Blue neon glow behind characters - Ajustado para mobile */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[90%] h-[75%] lg:w-[80%] lg:h-[65%] rounded-full bg-sharks-blue/60 lg:bg-sharks-blue/35 blur-[50px] lg:blur-[90px]" />
              </div>
              <div className="absolute inset-x-0 top-1/4 h-[65%] lg:h-[55%] rounded-full bg-sharks-blue-light/40 lg:bg-sharks-blue-light/20 blur-[60px] lg:blur-[110px] pointer-events-none" />

              {/* Image with bottom fade via CSS mask */}
              <div className="relative">
                <img
                  src="/sharks-about.png"
                  alt="Sharks Company Art"
                  className="relative z-10 w-full h-auto object-contain"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
