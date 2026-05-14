"use client";

import { motion } from "framer-motion";
import DisciplineIcon from "@/components/icons/DisciplineIcon";
import FocusIcon from "@/components/icons/FocusIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import EvolutionIcon from "@/components/icons/EvolutionIcon";
import PerformanceIcon from "@/components/icons/PerformanceIcon";
import SectionTitle from "@/components/ui/SectionTitle";

const pillars = [
  {
    Icon: DisciplineIcon,
    name: "Disciplina",
    phrase: "Fazemos o que precisa ser feito, todos os dias.",
  },
  {
    Icon: FocusIcon,
    name: "Foco",
    phrase: "Objetivo claro, mente forte, sem distrações.",
  },
  {
    Icon: TeamIcon,
    name: "Equipe",
    phrase: "Juntos somos mais fortes. Um time que te impulsiona.",
  },
  {
    Icon: EvolutionIcon,
    name: "Evolução",
    phrase: "Pequenas escolhas, grandes mudanças.",
  },
  {
    Icon: PerformanceIcon,
    name: "Performance",
    phrase: "Treino inteligente para entregar resultados de verdade.",
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="py-24 lg:py-32 bg-rf-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-rf-red/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-rf-red/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <SectionTitle highlight="Marca" align="center">
            Pilares da
          </SectionTitle>
        </motion.div>

        {/* Desktop: horizontal row / Mobile: vertical stack */}
        <div className="flex flex-col lg:flex-row gap-px bg-white/10 rounded-sm overflow-hidden">
          {pillars.map((pillar, i) => {
            const { Icon } = pillar;
            return (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 bg-black p-8 lg:p-10 flex flex-col gap-5 group hover:bg-rf-red/5 transition-colors duration-300 cursor-default"
              >
                <Icon className="w-10 h-10 text-rf-red group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-title font-bold text-2xl uppercase tracking-widest text-white mb-2">
                    {pillar.name}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{pillar.phrase}</p>
                </div>
                <div className="h-0.5 w-8 bg-rf-red group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
