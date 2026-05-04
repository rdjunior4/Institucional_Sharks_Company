"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-secondary py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* Shark Fin Watermark */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.03]">
          <img
            src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-4-de-mai.-de-2026-09_17_33-e1777902770956.png"
            alt=""
            className="h-auto w-80"
            aria-hidden="true"
          />
        </div>

        {/* Subtle Lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 Q 300 100 600 200 T 1200 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
          />
          <path
            d="M0 250 Q 400 150 800 250 T 1200 250"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-balance text-3xl font-bold leading-tight text-secondary-foreground sm:text-4xl lg:text-5xl"
        >
          Estruture o marketing do seu negócio com mais{" "}
          <span className="sharks-gradient-text">clareza</span>,{" "}
          <span className="sharks-gradient-text">método</span> e{" "}
          <span className="sharks-gradient-text">desempenho</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-secondary-foreground/70 lg:text-xl"
        >
          Converse com a Sharks Company e entenda como podemos construir uma operação de
          marketing mais estratégica para sua marca.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="#contato"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
