"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl p-4">
              <img
                src="/profile-photo.jpg"
                alt="Gabriel Hipólito - Desenvolvedor Fullstack"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Badge variant="secondary" className="bg-[#667eea]/20 text-[#667eea] border-[#667eea]/30 mb-4">
              Sobre Mim
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Gabriel Hipólito</h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Sou Gabriel Hipólito, <span className="text-white font-medium">Desenvolvedor Fullstack & Especialista em Automações</span>{" "}
                especializado em criar soluções inteligentes que automatizam processos complexos.
              </p>
              <p>
                Minha abordagem: <span className="text-[#00ff88]">desenvolver sistemas sob medida</span> que realmente
                funcionam. Cada projeto é construído focando em resolver problemas específicos e gerar resultados
                mensuráveis para o cliente.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "Python", "Flask", "FastAPI", "Tailwind CSS", "Node.js", "HTML/CSS"].map((tech) => (
                <Badge key={tech} variant="outline" className="border-[#60a5fa]/30 text-[#60a5fa]">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
