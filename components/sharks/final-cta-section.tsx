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
      className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground lg:py-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sharks-blue/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="eyebrow justify-center"
        >
          Pronto para começar
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
        >
          Estruture o marketing do seu negócio com{" "}
          <span className="sharks-gradient-text">clareza</span>,{" "}
          <span className="sharks-gradient-text">método</span> e{" "}
          <span className="sharks-gradient-text">desempenho</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-secondary-foreground/65 sm:text-base"
        >
          Converse com a Sharks Company e entenda como podemos construir uma operação de
          marketing mais estratégica para sua marca.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sharks-navy transition-all hover:bg-white/90 hover:shadow-2xl hover:shadow-sharks-blue/30"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
