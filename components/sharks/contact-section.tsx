"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageCircle, Send, CheckCircle, Mail, MapPin } from "lucide-react"

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
  "R$ 100 mil — R$ 500 mil/mês",
  "R$ 500 mil — R$ 1 milhão/mês",
  "R$ 1 milhão — R$ 5 milhões/mês",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-light bg-grid-fade opacity-30" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left - Info */}
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
              className="mt-5 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.5rem]"
            >
              Fale com a <span className="sharks-gradient-text">Sharks</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground"
            >
              Preencha os dados ao lado ou entre em contato direto pelos canais abaixo. Nosso
              time retorna em até 24h úteis.
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
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1FB855] hover:shadow-lg hover:shadow-[#25D366]/25"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Channels */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 space-y-4 border-t border-border pt-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    E-mail
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    contato@sharkscompany.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Atendimento
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    100% remoto — todo o Brasil
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
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
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    Solicitação enviada!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Recebemos sua solicitação. Nosso time entrará em contato em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      Diagnóstico estratégico gratuito
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Preencha os dados e nossa equipe entra em contato com você.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
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
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
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
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="empresa"
                      className="mb-1.5 block text-xs font-semibold text-foreground"
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
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Segmento */}
                    <div>
                      <label
                        htmlFor="segmento"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
                      >
                        Segmento
                      </label>
                      <select
                        id="segmento"
                        name="segmento"
                        value={formData.segmento}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                      >
                        {segmentos.map((seg) => (
                          <option
                            key={seg}
                            value={seg === "Selecionar segmento" ? "" : seg}
                          >
                            {seg}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Faturamento */}
                    <div>
                      <label
                        htmlFor="faturamento"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
                      >
                        Faturamento
                      </label>
                      <select
                        id="faturamento"
                        name="faturamento"
                        value={formData.faturamento}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Enviar solicitação
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground">
                    Ao enviar, você concorda com nossos termos de privacidade.
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
