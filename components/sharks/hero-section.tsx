"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play, TrendingUp, BarChart3, Sparkles, Activity } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-sharks-hero pt-20 text-white"
    >
      {/* Grid background with fade */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-sharks-blue/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sharks-blue-dark/30 blur-[140px]" />
        <div className="absolute left-0 top-1/3 h-[320px] w-[320px] rounded-full bg-sharks-blue/15 blur-[120px]" />
      </div>

      {/* Animated abstract lines */}
      <svg
        className="pointer-events-none absolute right-0 top-20 h-[600px] w-[600px] opacity-[0.10]"
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
        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
          {/* Content */}
          <div className="flex-1 text-center lg:max-w-xl lg:text-left">
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
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              Marketing com{" "}
              <span className="sharks-gradient-text">método</span>, execução e foco em{" "}
              <span className="sharks-gradient-text">desempenho real</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-white/60 sm:text-base"
            >
              Unimos estratégia, análise e operação para estruturar o marketing do seu
              negócio com foco em crescimento de marca e vendas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[13px] font-semibold text-sharks-navy-deep transition-all hover:bg-white/95 hover:shadow-xl hover:shadow-sharks-blue/20"
              >
                Iniciar diagnóstico estratégico
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#metodo"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-[13px] font-medium text-white/85 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Play className="h-3 w-3 fill-current" />
                Ver como funciona
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-6 sm:max-w-md lg:max-w-lg"
            >
              {[
                { value: "50+", label: "Marcas atendidas" },
                { value: "5+", label: "Anos de operação" },
                { value: "+185%", label: "ROI médio" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
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

          {/* Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex-1 lg:mt-0 lg:max-w-xl"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft glow behind dashboard */}
              <div className="absolute -inset-6 rounded-3xl bg-sharks-blue/15 blur-3xl" />

              {/* Dashboard mock */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl backdrop-blur-md">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-white/15" />
                      <div className="h-2 w-2 rounded-full bg-white/15" />
                      <div className="h-2 w-2 rounded-full bg-white/15" />
                    </div>
                    <div className="ml-2 flex items-center gap-1.5">
                      <Activity className="h-3 w-3 text-sharks-blue-light" />
                      <p className="text-[11px] font-medium text-white/70">
                        sharks.dashboard
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-white/65">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Ao vivo
                  </div>
                </div>

                {/* KPI row */}
                <div className="mt-4 grid grid-cols-3 gap-2.5">
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
                        className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-[9px] font-semibold uppercase tracking-wider text-white/45">
                            {stat.label}
                          </p>
                          <Icon className="h-3 w-3 text-sharks-blue-light" />
                        </div>
                        <p className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-medium text-emerald-400">
                          {stat.trend}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Chart */}
                <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[11px] font-medium text-white/70">
                      Performance — 7 dias
                    </p>
                    <p className="text-[10px] text-white/35">Atualizado agora</p>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 90, 72].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-sharks-blue/40 to-sharks-blue-light/80"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.7,
                          delay: 0.9 + i * 0.06,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-white/35">
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Activity rows */}
                <div className="mt-3 space-y-1.5">
                  {[
                    { label: "Campanha de aquisição", value: "Ativa" },
                    { label: "Otimização criativa", value: "Em curso" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="flex items-center justify-between rounded-md border border-white/[0.04] bg-white/[0.015] px-3 py-2"
                    >
                      <span className="text-[11px] text-white/65">{item.label}</span>
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
                className="absolute -left-4 -top-4 hidden rounded-xl border border-white/[0.08] bg-sharks-navy/95 p-3 shadow-xl backdrop-blur-md sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sharks-blue/20">
                    <TrendingUp className="h-4 w-4 text-sharks-blue-light" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/45">
                      Receita
                    </p>
                    <p className="text-sm font-semibold tracking-tight text-white">
                      +R$ 240k
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
