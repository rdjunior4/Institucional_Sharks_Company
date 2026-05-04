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
      className="relative overflow-hidden bg-secondary py-24 lg:py-32 text-secondary-foreground"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sharks-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="eyebrow eyebrow-light"
        >
          Vamos conversar
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          Estruture o marketing do seu negócio com mais{" "}
          <span className="sharks-gradient-text">clareza</span>,{" "}
          <span className="sharks-gradient-text">método</span> e{" "}
          <span className="sharks-gradient-text">desempenho</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/65 sm:text-base"
        >
          Converse com a Sharks Company e entenda como podemos construir uma operação de
          marketing mais estratégica para sua marca.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sharks-navy-deep transition-all hover:bg-white/95 hover:shadow-xl hover:shadow-sharks-blue/20"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#metodo"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Conhecer o método
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
