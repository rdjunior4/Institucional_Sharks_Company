"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play, TrendingUp, BarChart3, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-sharks-hero pt-20 text-white"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sharks-blue/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sharks-blue-dark/30 blur-[120px]" />
      </div>

      {/* Animated abstract lines */}
      <svg
        className="pointer-events-none absolute right-0 top-20 h-[600px] w-[600px] opacity-[0.12]"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        <motion.path
          d="M50 300 Q 200 50 400 200 T 550 300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-sharks-blue-light"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 350 Q 250 100 450 250 T 550 350"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-sharks-blue-light"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M50 400 Q 300 150 500 300 T 550 400"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-sharks-blue-light"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.2, ease: "easeInOut", delay: 0.6 }}
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 lg:flex-row lg:items-center lg:gap-12 lg:py-24">
          {/* Content */}
          <div className="flex-1 text-center lg:max-w-2xl lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
            >
              <Sparkles className="h-3 w-3 text-sharks-blue-light" />
              <span>Marketing estratégico para escalar</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]"
            >
              Marketing com{" "}
              <span className="sharks-gradient-text">método</span>, execução e foco em{" "}
              <span className="sharks-gradient-text">desempenho real</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-[17px]"
            >
              Unimos estratégia, análise e operação para estruturar o marketing do seu
              negócio com foco em crescimento de marca e vendas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sharks-navy transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-sharks-blue/20"
              >
                Iniciar diagnóstico estratégico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#metodo"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
              >
                <Play className="h-3.5 w-3.5" />
                Ver como funciona
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/50 lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-sharks-blue-light" />
                <span>Marcas em crescimento</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-sharks-blue-light" />
                <span>Operação data-driven</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-sharks-blue-light" />
                <span>Resultado mensurável</span>
              </div>
            </motion.div>
          </div>

          {/* Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex-1 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft glow behind dashboard */}
              <div className="absolute -inset-6 rounded-3xl bg-sharks-blue/15 blur-3xl" />

              {/* Dashboard mock */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-md">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="ml-3 h-2 w-20 rounded-full bg-white/10" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/70">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Ao vivo
                  </div>
                </div>

                {/* KPI row */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Conversão", value: "24%", trend: "+12%", icon: TrendingUp },
                    { label: "Alcance", value: "12.5K", trend: "+34%", icon: BarChart3 },
                    { label: "ROI", value: "+185%", trend: "+8%", icon: Sparkles },
                  ].map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.08 }}
                        className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                            {stat.label}
                          </p>
                          <Icon className="h-3 w-3 text-sharks-blue-light" />
                        </div>
                        <p className="mt-1.5 text-lg font-semibold text-white">{stat.value}</p>
                        <p className="text-[10px] font-medium text-emerald-400">{stat.trend}</p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Chart */}
                <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-medium text-white/70">Performance — 7 dias</p>
                    <p className="text-[10px] text-white/40">Atualizado agora</p>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 90, 72].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-sharks-blue/40 to-sharks-blue-light/80"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.7, delay: 0.9 + i * 0.06, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-white/40">
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sab</span>
                    <span>Dom</span>
                  </div>
                </div>

                {/* Activity rows */}
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Campanha de aquisição", value: "Ativa" },
                    { label: "Otimização criativa", value: "Em curso" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-3 py-2"
                    >
                      <span className="text-xs text-white/70">{item.label}</span>
                      <span className="text-[10px] font-medium text-sharks-blue-light">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -left-4 -top-4 hidden rounded-xl border border-white/10 bg-sharks-navy/90 p-3 shadow-xl backdrop-blur-md sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sharks-blue/20">
                    <TrendingUp className="h-4 w-4 text-sharks-blue-light" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50">Receita</p>
                    <p className="text-sm font-semibold text-white">+R$ 240k</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade for smooth transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-sharks-navy-deep/80" />
      </div>
    </section>
  )
}
</content>
<parameter name="taskNameActive">Redesigning hero
