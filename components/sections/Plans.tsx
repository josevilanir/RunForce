"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Start",
    price: "89,00",
    tagline: "Acompanhamento essencial",
    features: [
      "Planilha semanal",
      "Acompanhamento Básico",
      "Suporte simples por (WhatsApp)",
    ],
    highlight: false,
  },
  {
    name: "Performance",
    price: "149,00",
    tagline: "Evolução e suporte direto",
    features: [
      "Planilha personalizada",
      "Ajustes semanais",
      "Suporte direto",
      "Participação nos treinos",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "249,00",
    tagline: "Alta performance e atenção",
    features: [
      "Acompanhamento direto",
      "Feedback constante",
      "Estratégia de prova",
      "Atenção mais próxima",
    ],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTitle subtitle="Escolha o plano que se encaixa no seu momento e objetivo de performance.">
            Planos &{" "}
            <span className="text-rf-red">Metodologia</span>
          </SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative rounded-sm p-8 flex flex-col gap-6 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-rf-red border-rf-red shadow-2xl shadow-rf-red/20"
                  : "bg-rf-dark border-white/10 hover:border-rf-red/40"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black font-title font-bold text-xs uppercase tracking-widest px-4 py-1">
                  Mais popular
                </span>
              )}

              <div>
                <h3 className="font-title font-bold text-3xl uppercase tracking-widest text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className={`text-sm font-body ${plan.highlight ? "text-white/80" : "text-rf-gray"}`}>R$</span>
                  <span className="text-5xl font-title font-bold text-white">
                    {plan.price.split(',')[0]}
                  </span>
                  <span className="text-2xl font-title font-bold text-white">
                    ,{plan.price.split(',')[1]}
                  </span>
                  <span className={`text-xs font-body ml-1 ${plan.highlight ? "text-white/60" : "text-rf-gray"}`}>/mês</span>
                </div>
                <p className={`font-body text-xs mt-3 uppercase tracking-wider ${plan.highlight ? "text-white/80" : "text-rf-gray"}`}>
                  {plan.tagline}
                </p>
              </div>

              <ul className="space-y-3 flex-1 border-t border-white/10 pt-6">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-rf-red"}`}
                    />
                    <span className={`font-body text-sm ${plan.highlight ? "text-white/90" : "text-white/70"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contato"
                variant={plan.highlight ? "secondary" : "primary"}
                size="md"
                className="w-full"
              >
                Quero entrar para o time
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
