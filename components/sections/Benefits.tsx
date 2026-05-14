"use client";

import { motion } from "framer-motion";
import { ClipboardList, ShieldCheck, HeartPulse, Users, Target, Calendar } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: ClipboardList,
    title: "Treinos estruturados",
    desc: "Planilhas personalizadas com periodização adequada ao seu nível e objetivo.",
  },
  {
    icon: ShieldCheck,
    title: "Evolução segura",
    desc: "Progressão gradual, respeitando limites do corpo e prevenindo lesões.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento contínuo",
    desc: "Feedback constante do coach, análise de desempenho e ajustes em tempo real.",
  },
  {
    icon: Users,
    title: "Comunidade forte",
    desc: "Um time que te motiva, treina junto e celebra cada conquista com você.",
  },
  {
    icon: Target,
    title: "Metas claras",
    desc: "Trabalhamos com foco no seu objetivo: tempo, distância, completar ou competir.",
  },
  {
    icon: Calendar,
    title: "Eventos e provas",
    desc: "Participação em provas selecionadas com o time e preparação específica para cada race.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTitle subtitle="Tudo que você precisa para correr mais, melhor e com mais alegria.">
            Por que a{" "}
            <span className="text-rf-red">RunForce</span>
          </SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-sm border border-white/8 hover:border-rf-red/40 bg-rf-dark/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-0.5">
                  <Icon size={22} className="text-rf-red group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <h3 className="font-title font-bold text-lg uppercase tracking-wide text-white mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
