"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Target,
  Palette,
  PenTool,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  BarChart3,
  Layers,
  Zap,
  Settings,
} from "lucide-react"

const solutions = [
  {
    id: "estrategia",
    label: "Estratégia",
    icon: Target,
    title: "Marketing Estratégico",
    description:
      "Direcionamos o marketing do seu negócio com planejamento e análises para que cada ação esteja conectada ao posicionamento da marca e seus objetivos.",
    points: [
      "Diagnóstico do cenário atual",
      "Definição de posicionamento e objetivos",
      "Planejamento de canais e ações",
      "Direcionamento para execução e performance",
    ],
    visual: "strategy",
  },
  {
    id: "branding",
    label: "Branding",
    icon: Palette,
    title: "Branding e Posicionamento",
    description:
      "Construímos marcas mais fortes, coerentes e memoráveis, alinhando identidade, comunicação e percepção de valor.",
    points: [
      "Identidade visual",
      "Posicionamento de marca",
      "Tom de voz",
      "Percepção de valor",
    ],
    visual: "branding",
  },
  {
    id: "criativos",
    label: "Criativos",
    icon: PenTool,
    title: "Criativos para Campanhas",
    description:
      "Desenvolvemos peças criativas com direção estratégica para comunicar melhor, atrair atenção e gerar oportunidades.",
    points: [
      "Criativos para anúncios",
      "Conteúdos para redes sociais",
      "Direção visual",
      "Copywriting aplicado",
    ],
    visual: "creative",
  },
  {
    id: "sites",
    label: "Sites",
    icon: Globe,
    title: "Sites e Landing Pages",
    description:
      "Criamos estruturas digitais com design estratégico, clareza de comunicação e foco em conversão.",
    points: [
      "Sites institucionais",
      "Landing pages",
      "Páginas de captura",
      "Experiência e conversão",
    ],
    visual: "web",
  },
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    title: "CRM e Relacionamento",
    description:
      "Organizamos processos de relacionamento para melhorar o acompanhamento de oportunidades e a conversão comercial.",
    points: [
      "Organização de leads",
      "Fluxos de atendimento",
      "Automação comercial",
      "Acompanhamento de oportunidades",
    ],
    visual: "crm",
  },
  {
    id: "desempenho",
    label: "Desempenho Real",
    icon: TrendingUp,
    title: "Desempenho Real",
    description:
      "Acompanhamos dados, métricas e resultados para ajustar ações e transformar marketing em crescimento consistente.",
    points: [
      "Análise de performance",
      "Otimização contínua",
      "Relatórios estratégicos",
      "Decisões baseadas em dados",
    ],
    visual: "performance",
  },
]

function SolutionVisual({ type }: { type: string }) {
  return (
    <div className="relative h-full min-h-[280px] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
      {/* Abstract Visual based on type */}
      <div className="flex h-full flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="h-2 w-16 rounded-full bg-muted" />
        </div>

        {/* Content */}
        <div className="mt-6 flex-1">
          {type === "strategy" && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 w-full rounded-full bg-primary/30" />
                  <div className="h-2 w-3/4 rounded-full bg-primary/20" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[70, 85, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    className="rounded-lg bg-muted/50 p-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div
                      className="h-12 rounded bg-primary/20"
                      style={{ height: `${h}%` }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {type === "branding" && (
            <div className="space-y-4">
              <div className="flex gap-3">
                {["bg-primary", "bg-secondary", "bg-muted"].map((color, i) => (
                  <motion.div
                    key={i}
                    className={`h-12 w-12 rounded-lg ${color}`}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-6 w-24 rounded bg-foreground/10" />
                <div className="h-3 w-full rounded bg-muted" />
                <div className="h-3 w-2/3 rounded bg-muted" />
              </div>
            </div>
          )}

          {type === "creative" && (
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          )}

          {type === "web" && (
            <div className="space-y-3">
              <div className="h-4 w-20 rounded bg-primary/30" />
              <div className="h-16 rounded-lg bg-muted/50" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-8 rounded bg-muted/30" />
                <div className="h-8 rounded bg-muted/30" />
                <div className="h-8 rounded bg-primary/30" />
              </div>
            </div>
          )}

          {type === "crm" && (
            <div className="space-y-2">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-muted/30 p-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="h-8 w-8 rounded-full bg-primary/20" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-20 rounded bg-foreground/20" />
                    <div className="h-1.5 w-12 rounded bg-muted" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </motion.div>
              ))}
            </div>
          )}

          {type === "performance" && (
            <div className="space-y-3">
              <div className="flex h-24 items-end gap-1">
                {[30, 50, 35, 70, 55, 85, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-primary/30"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Jul</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <div className="h-1.5 flex-1 rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeSolution, setActiveSolution] = useState(solutions[0])

  return (
    <section
      id="solucoes"
      ref={ref}
      className="relative overflow-hidden bg-secondary py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Soluções Sharks
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight text-secondary-foreground sm:text-4xl"
          >
            Conheça a expertise de{" "}
            <span className="sharks-gradient-text">Marketing Sharks</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-secondary-foreground/70"
          >
            Soluções pensadas para atrair mais clientes, fortalecer sua marca e transformar
            ações de marketing em oportunidades reais de venda.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-2 lg:gap-3"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isActive = activeSolution.id === solution.id
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/50 text-secondary-foreground/70 hover:border-primary/50 hover:text-secondary-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{solution.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Solution Details */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-secondary-foreground sm:text-3xl">
              {activeSolution.title}
            </h3>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/70">
              {activeSolution.description}
            </p>

            <ul className="mt-6 space-y-3">
              {activeSolution.points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-secondary-foreground/80">{point}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Conhecer essa solução
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <SolutionVisual type={activeSolution.visual} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
