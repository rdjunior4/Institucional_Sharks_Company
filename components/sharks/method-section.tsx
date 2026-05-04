"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Compass, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analisamos cenário, marca, mercado, comunicação e oportunidades.",
    icon: Search,
  },
  {
    number: "02",
    title: "Direcionamento",
    description: "Definimos estratégia, prioridades, canais e plano de ação.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Execução",
    description: "Operamos campanhas, conteúdos, criativos e estruturas digitais.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Desempenho",
    description: "Medimos, ajustamos e evoluímos com base em dados e resultado.",
    icon: LineChart,
  },
]

export function MethodSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="metodo"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Gradient transitions */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-32 bg-gradient-to-b from-sharks-navy to-transparent" />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sharks-blue/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Metodologia Sharks
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.5rem]"
          >
            Nosso <span className="sharks-gradient-text">Método</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground"
          >
            Uma operação de marketing precisa de leitura, direção, execução e evolução
            contínua.
          </motion.p>
        </div>

        {/* Steps - Desktop Horizontal */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[12%] right-[12%] top-12 h-px bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-primary to-primary/50"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                    className="text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                      <motion.div
                        className="absolute inset-0 rounded-full border border-primary/20 bg-card"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                      />
                      <div className="relative z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <span className="absolute -top-2 right-2 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-bold tracking-wider text-primary">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[200px] text-pretty text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Steps - Mobile Vertical */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute bottom-4 left-7 top-4 w-px bg-border">
              <motion.div
                className="w-full bg-gradient-to-b from-primary to-primary/50"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                  className="relative flex gap-5"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider text-primary">
                        {step.number}
                      </span>
                      <div className="h-px w-6 bg-border" />
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
