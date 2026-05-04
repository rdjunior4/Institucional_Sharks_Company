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
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Metodologia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl"
          >
            Nosso <span className="sharks-gradient-text">Método</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Uma operação de marketing precisa de leitura, direção, execução e evolução
            contínua.
          </motion.p>
        </div>

        {/* Steps - Desktop Horizontal */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-0 right-0 top-16 h-0.5 bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-border bg-card" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      />
                      <div className="relative z-10 flex flex-col items-center">
                        <Icon className="h-8 w-8 text-primary" />
                        <span className="mt-2 text-2xl font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-pretty text-sm text-muted-foreground">
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
            <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-border">
              <motion.div
                className="w-full bg-primary"
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative flex gap-6 pl-4"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-pretty text-sm text-muted-foreground">
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
