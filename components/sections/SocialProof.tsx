"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Corredora amadora",
    text: "Entrei na RunForce sem saber correr direito. Em 6 meses completei minha primeira meia maratona. O método funciona.",
  },
  {
    name: "Rodrigo Mendes",
    role: "Atleta de performance",
    text: "Bati meu PR nos 10k depois de 3 meses de acompanhamento. A periodização faz toda a diferença.",
  },
  {
    name: "Juliana Ferreira",
    role: "Corredora iniciante",
    text: "O suporte do time é incrível. Nunca me senti sozinha em nenhum treino. Comunidade de verdade.",
  },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 lg:py-32 bg-rf-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTitle subtitle="Resultados reais de quem já faz parte do time.">
            O que o time{" "}
            <span className="text-rf-red">diz</span>
          </SectionTitle>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-black rounded-sm p-8 md:p-12 border border-white/10 min-h-[220px] flex flex-col justify-between">
            <Quote size={32} className="text-rf-red/40 mb-4" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-body text-white/80 text-lg leading-relaxed italic mb-6">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rf-red/20 flex items-center justify-center">
                    <span className="font-title font-bold text-rf-red text-sm">
                      {testimonials[current].name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-title font-bold text-white text-base uppercase tracking-wide">
                      {testimonials[current].name}
                    </p>
                    <p className="font-body text-rf-gray text-xs">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="p-2 text-white/50 hover:text-rf-red transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === current ? "bg-rf-red w-6" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="p-2 text-white/50 hover:text-rf-red transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Photo grid placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16"
        >
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="aspect-square bg-black rounded-sm border border-white/10 flex items-center justify-center"
            >
              <p className="font-body text-xs text-white/20 text-center px-2">
                Foto {n}<br />do time
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
