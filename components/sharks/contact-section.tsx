"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageCircle, Send, CheckCircle, Mail, Clock } from "lucide-react"

const segmentos = [
  "Selecionar segmento",
  "Tecnologia",
  "Serviços",
  "Varejo",
  "Indústria",
  "Saúde",
  "Educação",
  "Imobiliário",
  "Alimentação",
  "Outro",
]

const faturamentos = [
  "Selecionar faturamento",
  "Até R$ 100 mil/mês",
  "R$ 100 mil - R$ 500 mil/mês",
  "R$ 500 mil - R$ 1 milhão/mês",
  "R$ 1 milhão - R$ 5 milhões/mês",
  "Acima de R$ 5 milhões/mês",
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    empresa: "",
    segmento: "",
    faturamento: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ nome: "", whatsapp: "", empresa: "", segmento: "", faturamento: "" })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Contato
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl"
            >
              Fale com a <span className="sharks-gradient-text">Sharks</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground"
            >
              Preencha os dados ao lado ou entre em contato direto pelo WhatsApp. Nosso
              time responde em até 1 dia útil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8"
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25"
              >
                <MessageCircle className="h-4 w-4" />
                Conversar no WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 space-y-3"
            >
              {[
                { icon: Mail, label: "E-mail", value: "contato@sharkscompany.com" },
                { icon: Clock, label: "Atendimento", value: "Seg a Sex • 9h às 18h" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle className="h-7 w-7 text-emerald-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    Solicitação enviada
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Entraremos em contato em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-1.5 block text-[13px] font-medium text-foreground"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="mb-1.5 block text-[13px] font-medium text-foreground"
                      >
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="mb-1.5 block text-[13px] font-medium text-foreground"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="segmento"
                        className="mb-1.5 block text-[13px] font-medium text-foreground"
                      >
                        Segmento
                      </label>
                      <select
                        id="segmento"
                        name="segmento"
                        value={formData.segmento}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {segmentos.map((seg) => (
                          <option key={seg} value={seg === "Selecionar segmento" ? "" : seg}>
                            {seg}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="faturamento"
                        className="mb-1.5 block text-[13px] font-medium text-foreground"
                      >
                        Faturamento
                      </label>
                      <select
                        id="faturamento"
                        name="faturamento"
                        value={formData.faturamento}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {faturamentos.map((fat) => (
                          <option
                            key={fat}
                            value={fat === "Selecionar faturamento" ? "" : fat}
                          >
                            {fat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Enviar solicitação
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground">
                    Ao enviar você concorda com nossa política de privacidade.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
