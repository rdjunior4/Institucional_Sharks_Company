"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail, MessageCircle, ArrowUpRight } from "lucide-react"

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/5581989758872", icon: MessageCircle },
  { label: "E-mail", href: "mailto:contato@sharkscompany.online", icon: Mail },
  { label: "Instagram", href: "https://instagram.com/sharkscompany1", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-sharks-deep text-secondary-foreground">
      {/* Subtle decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[800px] -translate-x-1/2 rounded-full bg-sharks-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 text-center lg:grid-cols-12 lg:text-left">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:col-span-5 lg:items-start"
          >
            <Link href="#home" className="inline-flex items-center gap-2">
              <img 
                src="http://sharkscompany.online/wp-content/uploads/2026/05/SHARKS-COMPANY-3D-e1777902632718.png" 
                alt="Sharks Company" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-white/55 text-center lg:text-left">
              Marketing estratégico com método, execução e foco em desempenho real.
              Fortalecemos marcas, impulsionamos vendas e construímos resultados consistentes.
            </p>

            {/* CTA */}
            <Link
              href="#contato"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white/85 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              Iniciar diagnóstico
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col items-center space-y-2.5 lg:items-start">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-sharks-blue-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
              Canais
            </h3>
            <ul className="mt-4 flex flex-col items-center space-y-2.5 lg:items-start">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-sharks-blue-light"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t border-white/[0.06] pt-8 text-center"
        >
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Sharks Company. Todos os direitos reservados.
          </p>

        </motion.div>
      </div>
    </footer>
  )
}
