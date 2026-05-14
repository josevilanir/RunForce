"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-rf-dark/60 to-black" />

      {/* Diagonal speed lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={-200 + i * 220}
            y1="0"
            x2={400 + i * 220}
            y2="900"
            stroke="white"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Red accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-rf-red" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        <motion.p
          className="font-body text-rf-red text-sm font-semibold uppercase tracking-[0.4em] mb-6"
          {...fadeUp(0)}
        >
          Assessoria de Corrida
        </motion.p>

        <motion.h1
          className="font-title font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-white mb-6"
          {...fadeUp(0.15)}
        >
          Não é só correr.
          <br />
          É{" "}
          <span className="text-rf-red">evoluir</span>{" "}
          todos os dias.
        </motion.h1>

        <motion.p
          className="font-body text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          {...fadeUp(0.3)}
        >
          Treinos inteligentes, estratégia e um time para te impulsionar a ir além.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUp(0.45)}
        >
          <Button href="#contato" variant="primary" size="lg">
            Quero entrar para o time
          </Button>
          <Button href="#sobre" variant="secondary" size="lg">
            Conheça a assessoria
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
