"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle align="left" highlight="RunForce">
              Sobre a
            </SectionTitle>

            <div className="mt-8 space-y-5">
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed">
                A <strong className="text-white font-semibold">RunForce Team</strong> é uma
                assessoria de corrida que transforma vidas através do esporte. Nascemos da
                paixão por ver pessoas superarem seus próprios limites, com método, segurança
                e propósito.
              </p>
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed">
                Cada atleta tem uma história. Cada treino tem uma razão. Nossa missão é
                construir, ao lado de cada corredor, o caminho mais inteligente para alcançar
                resultados reais — do primeiro km à próxima grande prova.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <p className="font-title font-bold text-4xl text-rf-red">+100</p>
                <p className="font-body text-xs text-rf-gray uppercase tracking-wider mt-1">Atletas</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="font-title font-bold text-4xl text-rf-red">+50</p>
                <p className="font-body text-xs text-rf-gray uppercase tracking-wider mt-1">Provas</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="font-title font-bold text-4xl text-rf-red">100%</p>
                <p className="font-body text-xs text-rf-gray uppercase tracking-wider mt-1">Dedicação</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative bg-rf-dark rounded-sm overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-20">
                  <p className="font-title text-6xl font-bold uppercase text-white">Foto</p>
                  <p className="font-body text-sm text-white/60 mt-2">Aguardando asset do cliente</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-rf-red/10 to-transparent" />
            </div>
            {/* Accent border */}
            <div className="absolute -left-3 top-6 bottom-6 w-1 bg-rf-red" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
