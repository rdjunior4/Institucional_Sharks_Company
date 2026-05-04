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
    points: ["Criativos para anúncios", "Conteúdos para redes sociais", "Direção visual", "Copywriting aplicado"],
    visual: "creative",
  },
  {
    id: "sites",
    label: "Sites",
    icon: Globe,
    title: "Sites e Landing Pages",
    description:
      "Criamos estruturas digitais com design estratégico, clareza de comunicação e foco em conversão.",
    points: ["Sites institucionais", "Landing pages", "Páginas de captura", "Experiência e conversão"],
    visual: "web",
  },
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    title: "CRM e Relacionamento",
    description:
      "Organizamos processos de relacionamento para melhorar o acompanhamento de oportunidades e a conversão comercial.",
    points: ["Organização de leads", "Fluxos de atendimento", "Automação comercial", "Acompanhamento de oportunidades"],
    visual: "crm",
  },
  {
    id: "desempenho",
    label: "Desempenho",
    icon: TrendingUp,
    title: "Desempenho Real",
    description:
      "Acompanhamos dados, métricas e resultados para ajustar ações e transformar marketing em crescimento consistente.",
    points: ["Análise de performance", "Otimização contínua", "Relatórios estratégicos", "Decisões baseadas em dados"],
    visual: "performance",
  },
]

function SolutionVisual({ type }: { type: string }) {
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
      {/* Glow */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sharks-blue/15 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <p className="ml-1 text-[10px] font-medium tracking-wide text-white/50">
              sharks.preview
            </p>
          </div>
          <div className="h-1.5 w-12 rounded-full bg-white/[0.08]" />
        </div>

        {/* Content */}
        <div className="mt-4 flex-1">
          {type === "strategy" && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sharks-blue/15">
                  <BarChart3 className="h-4 w-4 text-sharks-blue-light" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-sharks-blue/30" />
                  <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[70, 85, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex h-12 items-end">
                      <div
                        className="w-full rounded bg-gradient-to-t from-sharks-blue/40 to-sharks-blue-light/80"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {type === "branding" && (
            <div className="space-y-4">
              <div className="flex gap-2.5">
                {["bg-sharks-blue", "bg-sharks-blue-dark", "bg-white/15"].map((color, i) => (
                  <motion.div
                    key={i}
                    className={`h-12 w-12 rounded-lg ${color}`}
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: i * 0.12 }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-4 w-28 rounded bg-white/15" />
                <div className="h-2 w-full rounded bg-white/[0.08]" />
                <div className="h-2 w-2/3 rounded bg-white/[0.08]" />
              </div>
            </div>
          )}

          {type === "creative" && (
            <div className="grid grid-cols-2 gap-2.5">
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-lg border border-white/[0.06] bg-gradient-to-br from-sharks-blue/20 to-sharks-blue/5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                />
              ))}
            </div>
          )}

          {type === "web" && (
            <div className="space-y-2.5">
              <div className="h-3 w-20 rounded bg-sharks-blue/40" />
              <div className="h-16 rounded-lg border border-white/[0.06] bg-white/[0.03]" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-7 rounded bg-white/[0.05]" />
                <div className="h-7 rounded bg-white/[0.05]" />
                <div className="h-7 rounded bg-sharks-blue/30" />
              </div>
            </div>
          )}

          {type === "crm" && (
            <div className="space-y-1.5">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] p-2.5"
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="h-7 w-7 rounded-full bg-sharks-blue/20" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-20 rounded bg-white/15" />
                    <div className="h-1 w-12 rounded bg-white/[0.08]" />
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
                    className="flex-1 rounded-t bg-gradient-to-t from-sharks-blue/40 to-sharks-blue-light/80"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-white/40">
                <span>Jan</span>
                <span>Jul</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-2">
          <Zap className="h-3 w-3 text-sharks-blue-light" />
          <div className="h-1 flex-1 rounded-full bg-white/[0.08]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sharks-blue to-sharks-blue-light"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <p className="text-[10px] font-medium text-white/50">75%</p>
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
      className="relative overflow-hidden bg-sharks-navy py-24 lg:py-32 text-white"
    >
      {/* Gradient transitions */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-32 bg-gradient-to-t from-background to-transparent" />
      {/* Background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      <div className="absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-sharks-blue/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-light"
          >
            Soluções Sharks
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.5rem]"
          >
            Conheça a expertise de{" "}
            <span className="sharks-gradient-text">Marketing Sharks</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-white/60"
          >
            Soluções pensadas para atrair clientes, fortalecer sua marca e transformar
            ações de marketing em oportunidades reais de venda.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-1.5"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isActive = activeSolution.id === solution.id
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution)}
                className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "border-sharks-blue bg-sharks-blue/10 text-white"
                    : "border-white/[0.06] bg-white/[0.02] text-white/60 hover:border-white/15 hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{solution.label}</span>
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
          className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Solution Details */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {activeSolution.title}
            </h3>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-white/65">
              {activeSolution.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {activeSolution.points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sharks-blue-light" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[13px] font-semibold text-sharks-navy-deep transition-all hover:bg-white/95 hover:shadow-lg hover:shadow-sharks-blue/20"
            >
              Conhecer essa solução
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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
