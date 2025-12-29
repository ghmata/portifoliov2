"use client"

import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Bot,
  Smartphone,
  Link,
  FileSearch,
  Building,
  Package,
  DollarSign,
  Globe,
  FileSpreadsheet,
} from "lucide-react"

const services = [
  {
    icon: LayoutDashboard,
    title: "Dashboards Personalizados",
    description: "Painéis com gráficos e KPIs em tempo real",
  },
  {
    icon: Bot,
    title: "Automações com IA",
    description: "Chatbots, OCR, análise inteligente",
  },
  {
    icon: Smartphone,
    title: "Sistemas Mobile-First",
    description: "Apps web otimizados para celular",
  },
  {
    icon: Link,
    title: "Integrações de Sistemas",
    description: "APIs, Google Sheets, bancos de dados",
  },
  {
    icon: FileSearch,
    title: "Processamento de Documentos",
    description: "OCR, extração de dados, PDFs automáticos",
  },
  {
    icon: Building,
    title: "ERPs Simplificados",
    description: "Gestão empresarial para PMEs",
  },
  {
    icon: Package,
    title: "Sistemas de Logística",
    description: "Estoque, manifestos, rastreamento",
  },
  {
    icon: DollarSign,
    title: "Gestão Financeira",
    description: "Receitas, despesas, relatórios contábeis",
  },
  {
    icon: Globe,
    title: "Landing Pages Premium",
    description: "Páginas de alta conversão com SEO",
  },
  {
    icon: FileSpreadsheet,
    title: "Relatórios Automatizados",
    description: "PDF/Excel sob demanda",
  },
]

export function ServicesGrid() {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Serviços Oferecidos</h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Soluções completas para digitalizar e automatizar seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glass-hover rounded-xl p-6 cursor-pointer transition-all duration-300 group"
            >
              <service.icon className="h-10 w-10 text-[#667eea] mb-4 group-hover:text-[#00ff88] transition-colors" />
              <h3 className="text-white font-semibold mb-2 text-sm">{service.title}</h3>
              <p className="text-[#94a3b8] text-xs leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
