"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const tags = ["Estratégia", "Marca", "Vendas", "Crescimento"]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden bg-secondary py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shark Fin Watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03]">
          <img
            src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-4-de-mai.-de-2026-09_17_33-e1777902770956.png"
            alt=""
            className="h-auto w-[500px]"
            aria-hidden="true"
          />
        </div>

        {/* Direction Lines */}
        <svg
          className="absolute left-0 top-1/4 h-[400px] w-full opacity-[0.05]"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 Q 300 100 600 200 T 1200 200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
          />
          <path
            d="M0 250 Q 350 150 700 250 T 1200 250"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Sobre a Sharks Company
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-3xl font-bold leading-tight text-secondary-foreground sm:text-4xl lg:text-5xl"
            >
              Uma agência de marketing para negócios que querem{" "}
              <span className="sharks-gradient-text">crescer</span> e se posicionar com{" "}
              <span className="sharks-gradient-text">força</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-pretty text-lg leading-relaxed text-secondary-foreground/70"
            >
              A Sharks Company nasceu para ser a parceira estratégica de empresários que
              entendem que marketing não é apenas presença digital, mas uma ferramenta
              essencial para competir, vender mais e ganhar relevância no mercado.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/70"
            >
              Unimos estratégia, tecnologias com IA, análise de mercado, criação e execução
              para impulsionar marcas que desejam crescer com direção, consistência e
              desempenho real.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-pretty text-xl font-semibold italic text-primary"
            >
              Para negócios que querem nadar em águas maiores e se tornar grandes tubarões
              no mercado.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />

              {/* Symbol Container */}
              <div className="relative rounded-2xl border border-primary/20 bg-secondary-foreground/5 p-8 backdrop-blur-sm lg:p-12">
                <img
                  src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-4-de-mai.-de-2026-09_17_33-e1777902770956.png"
                  alt="Sharks Company Symbol"
                  className="h-auto w-48 lg:w-64"
                />

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 -top-4 rounded-lg border border-primary/20 bg-secondary p-3 shadow-lg"
                >
                  <p className="text-xs text-secondary-foreground/60">Clientes atendidos</p>
                  <p className="text-xl font-bold text-primary">50+</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 rounded-lg border border-primary/20 bg-secondary p-3 shadow-lg"
                >
                  <p className="text-xs text-secondary-foreground/60">Anos de experiência</p>
                  <p className="text-xl font-bold text-primary">5+</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
