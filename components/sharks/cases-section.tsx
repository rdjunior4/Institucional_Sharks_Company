"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Briefcase, TrendingUp, Sparkles } from "lucide-react"

const cases = [
  {
    id: "case-01",
    label: "Case 01",
    sector: "Tecnologia",
    icon: Sparkles,
    title: "Reposicionamento de marca",
    context: "Empresa de tecnologia em busca de uma identidade alinhada à nova fase.",
    solution: "Branding completo com posicionamento, identidade visual e tom de voz.",
    result: "Marca mais reconhecida e comunicação alinhada à proposta de valor.",
    metric: "+62%",
    metricLabel: "lembrança de marca",
  },
  {
    id: "case-02",
    label: "Case 02",
    sector: "Serviços",
    icon: Briefcase,
    title: "Estrutura digital estratégica",
    context: "Negócio de serviços precisando estruturar presença e captação digital.",
    solution: "Site institucional e landing pages com foco em conversão.",
    result: "Estrutura digital profissional gerando leads qualificados.",
    metric: "3.4x",
    metricLabel: "leads qualificados",
  },
  {
    id: "case-03",
    label: "Case 03",
    sector: "Indústria",
    icon: TrendingUp,
    title: "Operação de performance",
    context: "Empresa em expansão precisando de operação de marketing direcionada.",
    solution: "Planejamento estratégico com execução de campanhas e análise de dados.",
    result: "Crescimento consistente com marketing mensurável.",
    metric: "+185%",
    metricLabel: "ROI sobre investimento",
  },
]

export function CasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="cases"
      ref={ref}
      className="relative overflow-hidden bg-muted/30 py-24 lg:py-32"
    >
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
              Portfólio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Projetos que traduzem{" "}
              <span className="sharks-gradient-text">estratégia</span> em execução.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground"
          >
            Cada projeto nasce de uma leitura estratégica e evolui para uma entrega visual,
            comercial e operacional consistente.
          </motion.p>
        </div>

        {/* Cases grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <motion.article
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Top metric */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-sharks-navy to-sharks-navy-soft p-6">
                  <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
                  <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-sharks-blue-light" />
                  </div>

                  <div className="relative flex h-full flex-col justify-end">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      {caseItem.metricLabel}
                    </p>
                    <p className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {caseItem.metric}
                    </p>
                  </div>

                  <div className="absolute bottom-6 right-6 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                    {caseItem.sector}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider text-primary">
                      {caseItem.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    {caseItem.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Contexto
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-foreground/80">
                        {caseItem.context}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Solução
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-foreground/80">
                        {caseItem.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Resultado
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-primary">
                        {caseItem.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
</content>
<parameter name="taskNameActive">Refining cases
