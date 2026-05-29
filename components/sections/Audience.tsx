"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Trophy } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const profiles = [
  {
    icon: Users,
    title: "Iniciantes",
    desc: "Deu o primeiro passo? A Emicarlo Souza Team te guia com segurança e método desde o km 0.",
  },
  {
    icon: TrendingUp,
    title: "Em Evolução",
    desc: "Já corre, mas quer mais estrutura? Construímos o plano certo para o seu próximo nível.",
  },
  {
    icon: Award,
    title: "Performance",
    desc: "Foca em bater PRs e correr com eficiência. Treinos periodizados para resultados reais.",
  },
  {
    icon: Trophy,
    title: "Competições",
    desc: "Você compete. A Emicarlo Souza Team planeja, prepara e acompanha cada prova ao seu lado.",
  },
];

export default function Audience() {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-rf-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTitle subtitle="A Emicarlo Souza Team é para quem quer mais do que só dar voltas. É para quem corre com propósito.">
            Para quem{" "}
            <span className="text-rf-red">é</span>
          </SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group bg-black rounded-sm p-6 border border-white/10 hover:border-rf-red/60 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-sm bg-rf-red/10 flex items-center justify-center mb-5 group-hover:bg-rf-red/20 transition-colors duration-300">
                  <Icon size={24} className="text-rf-red" />
                </div>
                <h3 className="font-title font-bold text-xl uppercase tracking-wide text-white mb-3">
                  {profile.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{profile.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
