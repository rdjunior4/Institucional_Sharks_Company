"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções Sharks", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Cases", href: "#cases" },
]

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/5500000000000", icon: MessageCircle },
  { label: "E-mail", href: "mailto:contato@sharkscompany.com", icon: Mail },
  { label: "Instagram", href: "https://instagram.com/sharkscompany", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="#home" className="inline-block">
                <img
                  src="http://sharkscompany.online/wp-content/uploads/2026/05/SHARKS-COMPANY-3D-e1777902632718.png"
                  alt="Sharks Company"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-secondary-foreground/70">
                Marketing estratégico com método, execução e foco em desempenho real.
                Fortalecemos marcas, impulsionamos vendas e construímos resultados
                consistentes.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Contato
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 border-t border-border/50 pt-8"
        >
          <p className="text-center text-sm text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Sharks Company. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
