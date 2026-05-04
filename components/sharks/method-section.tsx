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
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow justify-center"
          >
            Metodologia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Nosso <span className="sharks-gradient-text">método</span> em quatro etapas.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground"
          >
            Uma operação de marketing precisa de leitura, direção, execução e evolução
            contínua — sempre nessa ordem.
          </motion.p>
        </div>

        {/* Desktop horizontal */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-16 right-16 top-12 h-px bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-primary to-primary/40"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="relative grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-border bg-card" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                      />
                      <div className="absolute inset-2 rounded-full bg-primary/5" />
                      <Icon className="relative h-7 w-7 text-primary" />
                    </div>

                    <div className="rounded-xl border border-border bg-card p-5 text-center">
                      <span className="text-xs font-semibold tracking-wider text-primary">
                        {step.number}
                      </span>
                      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-pretty text-[13px] leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-6">
            <div className="absolute bottom-6 left-6 top-6 w-px bg-border">
              <motion.div
                className="w-full bg-primary"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative flex gap-4"
                >
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary bg-card">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1 rounded-xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold tracking-wider text-primary">
                        {step.number}
                      </span>
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
</content>
<parameter name="taskNameActive">Refining method
