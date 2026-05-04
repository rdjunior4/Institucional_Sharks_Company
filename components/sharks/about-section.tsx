"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Compass, Target, BarChart3, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Compass,
    label: "Estratégia",
    description: "Direção clara antes de toda execução.",
  },
  {
    icon: Sparkles,
    label: "Marca",
    description: "Identidade que comunica valor.",
  },
  {
    icon: Target,
    label: "Vendas",
    description: "Marketing conectado ao comercial.",
  },
  {
    icon: BarChart3,
    label: "Crescimento",
    description: "Decisões orientadas por dados.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Sobre a Sharks Company
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Uma agência para quem quer{" "}
              <span className="sharks-gradient-text">crescer</span> com força e direção.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground"
            >
              Marketing não é apenas presença digital — é uma ferramenta para competir,
              vender mais e ganhar relevância. Unimos estratégia, IA, análise, criação e
              execução para impulsionar marcas que querem desempenho real.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 border-l-2 border-primary/60 pl-4 text-[15px] font-medium italic leading-relaxed text-foreground/80"
            >
              Para negócios que querem nadar em águas maiores e se tornar grandes tubarões
              no mercado.
            </motion.blockquote>
          </div>

          {/* Right: pillars grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                      {pillar.label}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card"
            >
              {[
                { value: "50+", label: "Marcas atendidas" },
                { value: "5+", label: "Anos de experiência" },
                { value: "100%", label: "Foco em performance" },
              ].map((stat) => (
                <div key={stat.label} className="px-4 py-5 text-center">
                  <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
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
</content>
<parameter name="taskNameActive">Refining about section
