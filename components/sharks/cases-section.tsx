"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ArrowUpRight, Building2, Briefcase, Rocket } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    id: "case-01",
    label: "Case 01",
    industry: "Tecnologia",
    icon: Building2,
    context: "Empresa do setor de tecnologia buscando reposicionamento de marca",
    solution: "Estratégia de branding completa com nova identidade visual e posicionamento",
    result: "Marca mais forte e reconhecida no mercado com comunicação alinhada",
    metric: { value: "+62%", label: "Reconhecimento" },
  },
  {
    id: "case-02",
    label: "Case 02",
    industry: "Serviços",
    icon: Briefcase,
    context: "Negócio de serviços precisando estruturar presença digital",
    solution: "Site institucional estratégico com landing pages de conversão",
    result: "Estrutura digital profissional gerando leads qualificados",
    metric: { value: "+148%", label: "Leads qualificados" },
  },
  {
    id: "case-03",
    label: "Case 03",
    industry: "Expansão",
    icon: Rocket,
    context: "Empresa em expansão necessitando de operação de marketing",
    solution: "Planejamento estratégico com execução de campanhas e análise de dados",
    result: "Crescimento consistente com marketing direcionado e mensurável",
    metric: { value: "+185%", label: "ROI" },
  },
]

export function CasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="cases"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Cases
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.5rem]"
            >
              Projetos que traduzem{" "}
              <span className="sharks-gradient-text">estratégia</span> em execução
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground"
          >
            Cada projeto nasce de uma leitura estratégica e evolui para uma entrega visual,
            comercial e operacional mais consistente.
          </motion.p>
        </div>

        {/* Cases Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <motion.article
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.05]"
              >
                {/* Top — visual area */}
                <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-secondary to-sharks-navy-deep p-6">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <Icon className="h-4 w-4 text-sharks-blue-light" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                          {caseItem.label}
                        </p>
                        <p className="text-xs font-medium text-white/85">
                          {caseItem.industry}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sharks-blue-light" />
                  </div>

                  {/* Metric */}
                  <div className="relative mt-8">
                    <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {caseItem.metric.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/50">
                      {caseItem.metric.label}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Contexto
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {caseItem.context}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Solução
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {caseItem.solution}
                    </p>
                  </div>

                  <div className="mt-auto rounded-lg border border-primary/15 bg-primary/[0.04] p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Resultado
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                      {caseItem.result}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-[13px] font-medium text-foreground transition-all hover:border-primary/40 hover:bg-muted"
          >
            Ver todos os cases
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
