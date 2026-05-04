"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play, TrendingUp, BarChart3, Sparkles, Activity } from "lucide-react"
import { Button } from "@/components/sharks/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-sharks-hero pt-20 text-white"
    >
      {/* Grid background with fade — subtle */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />

      {/* Centered glow orbs — symmetric for centered layout */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary glow — centered top */}
        <div className="absolute -top-48 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sharks-blue/15 blur-[160px]" />
        {/* Subtle accent — centered bottom */}
        <div className="absolute -bottom-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sharks-blue-dark/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center pt-16 pb-32 lg:pt-24 lg:pb-48">
          {/* Content — centered */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-white/75 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sharks-blue-light opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sharks-blue-light" />
              </span>
              Marketing estratégico para escalar
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Marketing com{" "}
              <span className="sharks-gradient-text">método</span>, execução e foco em{" "}
              <span className="sharks-gradient-text">desempenho real</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/60 sm:text-base lg:text-lg"
            >
              Unimos estratégia, análise e operação para estruturar o marketing do seu
              negócio com foco em crescimento de marca e vendas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Link href="#contato">
                <Button variant="solid" size="lg">
                  <span className="inline-flex items-center gap-2">
                    Iniciar diagnóstico estratégico
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Button>
              </Link>
              <Link href="#metodo">
                <Button variant="ghost" size="lg">
                  <span className="inline-flex items-center gap-2">
                    <Play className="h-3 w-3 fill-current" />
                    Ver como funciona
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-12 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-white/[0.06] pt-6"
            >
              {[
                { value: "50+", label: "Marcas atendidas" },
                { value: "5+", label: "Anos de operação" },
                { value: "+185%", label: "ROI médio" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-white/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  )
}
