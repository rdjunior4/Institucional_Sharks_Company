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
  Zap,
  Check,
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
    points: ["Identidade visual", "Posicionamento de marca", "Tom de voz", "Percepção de valor"],
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
    label: "Desempenho",
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
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-border bg-muted/40 p-5">
      {/* Window header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="h-1.5 w-20 rounded-full bg-foreground/10" />
      </div>

      <div className="mt-5">
        {type === "strategy" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-full rounded-full bg-primary/30" />
                <div className="h-2 w-3/4 rounded-full bg-primary/15" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[70, 85, 60].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-background p-3"
                >
                  <div className="text-[10px] font-medium text-muted-foreground">KPI {i + 1}</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${h}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {type === "branding" && (
          <div className="space-y-4">
            <div className="flex gap-2">
              {["bg-primary", "bg-foreground", "bg-primary/40", "bg-foreground/30"].map((color, i) => (
                <motion.div
                  key={i}
                  className={`h-10 w-10 rounded-lg ${color}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                />
              ))}
            </div>
            <div className="space-y-1.5">
              <div className="h-5 w-32 rounded bg-foreground/15" />
              <div className="h-2 w-full rounded bg-muted" />
              <div className="h-2 w-2/3 rounded bg-muted" />
            </div>
          </div>
        )}

        {type === "creative" && (
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-lg border border-border bg-gradient-to-br from-primary/15 via-primary/5 to-transparent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              />
            ))}
          </div>
        )}

        {type === "web" && (
          <div className="space-y-2">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="h-2 w-16 rounded bg-primary/30" />
              <div className="mt-3 h-12 rounded bg-muted" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-6 rounded bg-muted" />
                <div className="h-6 rounded bg-muted" />
                <div className="h-6 rounded bg-primary" />
              </div>
            </div>
          </div>
        )}

        {type === "crm" && (
          <div className="space-y-2">
            {[
              { name: "João Silva", status: "Qualificado" },
              { name: "Marina Costa", status: "Em negociação" },
              { name: "Carlos Mendes", status: "Fechado" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-2.5"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground">{item.name}</div>
                  <div className="text-[10px] text-muted-foreground">{item.status}</div>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </motion.div>
            ))}
          </div>
        )}

        {type === "performance" && (
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="flex items-end gap-1">
                {[30, 50, 35, 70, 55, 85, 65, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-primary/30"
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 0.8}px` }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border bg-background p-2">
                <div className="text-[10px] text-muted-foreground">CTR</div>
                <div className="text-sm font-semibold text-foreground">4.8%</div>
              </div>
              <div className="rounded-lg border border-border bg-background p-2">
                <div className="text-[10px] text-muted-foreground">CPA</div>
                <div className="text-sm font-semibold text-primary">-32%</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-border pt-3">
        <Zap className="h-3.5 w-3.5 text-primary" />
        <div className="h-1 flex-1 rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">75%</span>
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
      className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground lg:py-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-sharks-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Soluções Sharks
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]"
          >
            A expertise de{" "}
            <span className="sharks-gradient-text">Marketing Sharks</span>, em uma operação só.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-secondary-foreground/65"
          >
            Soluções pensadas para atrair clientes, fortalecer sua marca e transformar
            ações de marketing em oportunidades reais de venda.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isActive = activeSolution.id === solution.id
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution)}
                className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/10 bg-white/[0.03] text-secondary-foreground/70 hover:border-white/20 hover:bg-white/5 hover:text-secondary-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {solution.label}
              </button>
            )
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeSolution.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              {activeSolution.title}
            </h3>
            <p className="mt-4 max-w-lg text-pretty text-[15px] leading-relaxed text-secondary-foreground/70">
              {activeSolution.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {activeSolution.points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3 text-sm text-secondary-foreground/80"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>

            <button className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
              Conhecer essa solução
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <SolutionVisual type={activeSolution.visual} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
</content>
<parameter name="taskNameActive">Refining solutions
