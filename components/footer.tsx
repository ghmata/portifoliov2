"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

const socialLinks = [
  { href: "https://github.com/gabrielmata", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/gabrielmata", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#667eea]/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#inicio"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-white"
          >
            GH
          </motion.a>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#667eea]/20 transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#667eea]/10 text-center"
        >
          <p className="text-[#94a3b8] text-sm">© 2025 Gabriel Hipólito. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
