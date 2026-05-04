"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract Lines */}
        <svg
          className="absolute top-20 right-0 h-[600px] w-[600px] opacity-[0.08]"
          viewBox="0 0 600 600"
        >
          <motion.path
            d="M50 300 Q 200 50 400 200 T 550 300"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M50 350 Q 250 100 450 250 T 550 350"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M50 400 Q 300 150 500 300 T 550 400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/20"
            style={{
              top: `${20 + i * 12}%`,
              right: `${10 + i * 8}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Gradient Orb */}
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Marketing Estratégico
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Marketing Estratégico com{" "}
              <span className="sharks-gradient-text">Método</span>, Execução e Foco em{" "}
              <span className="sharks-gradient-text">Desempenho Real</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl"
            >
              Unimos estratégia, análise e operação para estruturar o marketing do seu negócio
              com foco em crescimento de marca e vendas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                Iniciar diagnóstico estratégico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#metodo"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted"
              >
                <Play className="h-4 w-4" />
                Ver como funciona
              </Link>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex-1 lg:mt-0"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Shark Fin Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                <img
                  src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-4-de-mai.-de-2026-09_17_33-e1777902770956.png"
                  alt=""
                  className="h-auto w-full max-w-md"
                  aria-hidden="true"
                />
              </div>

              {/* Abstract Dashboard/Strategy Visual */}
              <div className="relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded-full bg-primary/20" />
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500/50" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                      <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    </div>
                  </div>

                  {/* Chart Mock */}
                  <div className="flex h-32 items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm bg-primary/20"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                      />
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Conversão", value: "24%" },
                      { label: "Alcance", value: "12.5K" },
                      { label: "ROI", value: "+185%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        className="rounded-lg bg-muted/50 p-3 text-center"
                      >
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="mt-1 text-lg font-bold text-primary">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Lines */}
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-muted" />
                    <div className="h-2 w-3/4 rounded-full bg-muted" />
                    <div className="h-2 w-1/2 rounded-full bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
