"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    id: "case-01",
    label: "CASE 01",
    context: "Empresa do setor de tecnologia buscando reposicionamento de marca",
    solution: "Estratégia de branding completa com nova identidade visual e posicionamento",
    result: "Marca mais forte e reconhecida no mercado com comunicação alinhada",
  },
  {
    id: "case-02",
    label: "CASE 02",
    context: "Negócio de serviços precisando estruturar presença digital",
    solution: "Site institucional estratégico com landing pages de conversão",
    result: "Estrutura digital profissional gerando leads qualificados",
  },
  {
    id: "case-03",
    label: "CASE 03",
    context: "Empresa em expansão necessitando de operação de marketing",
    solution: "Planejamento estratégico com execução de campanhas e análise de dados",
    result: "Crescimento consistente com marketing direcionado e mensurável",
  },
]

export function CasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="cases"
      ref={ref}
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
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
            Portfólio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl"
          >
            Projetos que traduzem{" "}
            <span className="sharks-gradient-text">estratégia</span> em execução
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Cada projeto nasce de uma leitura estratégica e evolui para uma entrega visual,
            comercial e operacional mais consistente.
          </motion.p>
        </div>

        {/* Cases Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => (
            <motion.article
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Mock Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 rounded-xl border border-primary/20 bg-primary/10" />
                    <p className="mt-4 text-sm text-muted-foreground">Preview do projeto</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/90 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                    Ver detalhes
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="mb-3 inline-block text-xs font-bold tracking-wider text-primary">
                  {caseItem.label}
                </span>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Contexto
                    </p>
                    <p className="mt-1 text-sm text-foreground">{caseItem.context}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Solução
                    </p>
                    <p className="mt-1 text-sm text-foreground">{caseItem.solution}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Resultado
                    </p>
                    <p className="mt-1 text-sm text-primary">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted"
          >
            Ver cases
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
