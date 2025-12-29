"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Mensagem enviada com sucesso!")
    setFormData({ name: "", email: "", message: "" })
  }

  const whatsappNumber = "5561983073229"
  const whatsappMessage = encodeURIComponent(
    "Olá Gabriel! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
  )

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Pronto para parar de perder tempo com processos manuais?
          </h2>
          <p className="text-[#94a3b8] text-lg">Vamos conversar sobre como automatizar seu negócio.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#94a3b8]">
                  Nome *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0a0e27]/50 border-[#667eea]/30 text-white placeholder:text-[#94a3b8]/50 focus:border-[#667eea]"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#94a3b8]">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0a0e27]/50 border-[#667eea]/30 text-white placeholder:text-[#94a3b8]/50 focus:border-[#667eea]"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#94a3b8]">
                  O que você quer automatizar?
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0a0e27]/50 border-[#667eea]/30 text-white placeholder:text-[#94a3b8]/50 focus:border-[#667eea] min-h-[100px]"
                  placeholder="Descreva brevemente seu projeto ou desafio..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#00ff88] text-[#0a0e27] hover:bg-[#00ff88]/90 font-semibold neon-glow"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* WhatsApp CTA */}
          <div className="glass rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-6">
              <MessageCircle className="h-10 w-10 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Prefere conversar direto?</h3>
            <p className="text-[#94a3b8] mb-6">
              Respondo rapidamente pelo WhatsApp. Vamos agendar uma call sem compromisso.
            </p>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90 font-semibold w-full">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar agora no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
