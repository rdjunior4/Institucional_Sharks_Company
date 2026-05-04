"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/5500000000000", icon: MessageCircle },
  { label: "E-mail", href: "mailto:contato@sharkscompany.com", icon: Mail },
  { label: "Instagram", href: "https://instagram.com/sharkscompany", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-secondary text-secondary-foreground">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="#home" className="inline-block">
                <span className="text-lg font-semibold tracking-tight text-white">
                  Sharks<span className="text-sharks-blue-light">.</span>Company
                </span>
              </Link>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-secondary-foreground/60">
                Marketing estratégico com método, execução e foco em desempenho real.
                Fortalecemos marcas, impulsionamos vendas e construímos resultados consistentes.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-sharks-blue-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-secondary-foreground/70 transition-colors hover:text-sharks-blue-light"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 sm:flex-row"
        >
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Sharks Company. Todos os direitos reservados.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            Marketing estratégico • Branding • Performance
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
