"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticlesBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="text-lg">💻</span>
            <span className="text-sm font-medium text-[#94a3b8]">Desenvolvedor Fullstack & Especialista em Automações</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance"
          >
            Automatize seu negócio.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#60a5fa]">
              Economize horas.
            </span>{" "}
            Lucre mais.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-2xl mx-auto text-pretty"
          >
            Desenvolvedor Fullstack AI-First. Crio soluções inteligentes que automatizam processos e transformam negócios.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#00ff88] text-[#0a0e27] hover:bg-[#00ff88]/90 font-semibold text-lg px-8 neon-glow group"
            >
              <a href="#contato">
                Quero Automatizar Meu Negócio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#667eea] text-white hover:bg-[#667eea]/10 font-semibold text-lg px-8 bg-transparent"
            >
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown className="h-8 w-8 text-[#667eea]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
