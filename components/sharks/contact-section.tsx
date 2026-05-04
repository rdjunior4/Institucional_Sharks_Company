"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageCircle, Send, CheckCircle } from "lucide-react"

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
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: "",
        whatsapp: "",
        empresa: "",
        segmento: "",
        faturamento: "",
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Contato
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl"
            >
              Fale com a <span className="sharks-gradient-text">Sharks</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-pretty text-lg text-muted-foreground"
            >
              Preencha os dados abaixo ou entre em contato direto pelo WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/25"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground">contato@sharkscompany.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    Solicitação enviada!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Entraremos em contato em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="nome"
                      className="mb-2 block text-sm font-medium text-foreground"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="mb-2 block text-sm font-medium text-foreground"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="empresa"
                      className="mb-2 block text-sm font-medium text-foreground"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  {/* Segmento */}
                  <div>
                    <label
                      htmlFor="segmento"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Segmento
                    </label>
                    <select
                      id="segmento"
                      name="segmento"
                      value={formData.segmento}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {segmentos.map((seg) => (
                        <option key={seg} value={seg === "Selecionar segmento" ? "" : seg}>
                          {seg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Faturamento */}
                  <div>
                    <label
                      htmlFor="faturamento"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Faturamento
                    </label>
                    <select
                      id="faturamento"
                      name="faturamento"
                      value={formData.faturamento}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Enviar solicitação
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
