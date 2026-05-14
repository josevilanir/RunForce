"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    q: "Preciso ter experiência em corrida para entrar na RunForce?",
    a: "Não! Temos planos específicos para iniciantes. O mais importante é a vontade de começar — cuidamos de todo o resto com segurança e progressão adequada.",
  },
  {
    q: "Com que frequência preciso treinar por semana?",
    a: "Depende do seu objetivo e disponibilidade. Trabalhamos com planos de 2 a 6 sessões semanais, sempre respeitando seu calendário e recuperação.",
  },
  {
    q: "Os treinos são presenciais ou online?",
    a: "Oferecemos as duas modalidades. Treinos em grupo acontecem em locais específicos, e o acompanhamento remoto é feito via app com suporte do coach.",
  },
  {
    q: "Vou receber acompanhamento personalizado?",
    a: "Sim. Cada atleta tem um plano individual, análise de desempenho periódica e acesso direto ao coach para tirar dúvidas.",
  },
  {
    q: "Como é o processo para me inscrever?",
    a: "Entre em contato via WhatsApp ou formulário. Fazemos uma avaliação inicial para entender seu histórico e objetivo, e indicamos o plano ideal.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-title font-semibold text-base md:text-lg uppercase tracking-wide text-white group-hover:text-rf-red transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-rf-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body text-white/60 text-sm leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionTitle subtitle="Respostas para as dúvidas mais comuns.">
            Perguntas{" "}
            <span className="text-rf-red">frequentes</span>
          </SectionTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
