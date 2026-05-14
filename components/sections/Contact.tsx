"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MessageCircle, AtSign, Send } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const WA_NUMBER = "5500000000000";
const WA_MESSAGE = encodeURIComponent("Olá! Quero saber mais sobre a RunForce Team.");

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro no servidor");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-rf-dark border border-white/15 rounded-sm px-4 py-3 font-body text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-rf-red transition-colors duration-200";
  const errorClass = "font-body text-rf-red text-xs mt-1";

  return (
    <section id="contato" className="py-24 lg:py-32 bg-rf-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-rf-red/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTitle subtitle="Pronto para dar o próximo passo? Fale com a gente.">
            Entre em{" "}
            <span className="text-rf-red">contato</span>
          </SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: CTA channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="font-body text-white/70 text-base leading-relaxed">
              A maneira mais rápida de entrar para o time é pelo WhatsApp. Manda uma mensagem
              e a gente responde rapidinho.
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-title font-bold uppercase tracking-widest text-base px-7 py-4 rounded-sm transition-colors duration-200 w-fit"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>

            <div className="flex items-center gap-4 mt-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="font-body text-xs text-white/30 uppercase tracking-widest">ou siga a RunForce</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/60 hover:text-rf-red transition-colors duration-200 font-body text-sm"
            >
              <AtSign size={18} />
              @runforceteam
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
              <div>
                <input
                  {...register("name", { required: "Informe seu nome" })}
                  placeholder="Seu nome"
                  className={inputClass}
                  aria-label="Nome"
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Informe seu e-mail",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
                  })}
                  type="email"
                  placeholder="Seu e-mail"
                  className={inputClass}
                  aria-label="E-mail"
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              <div>
                <textarea
                  {...register("message", { required: "Escreva uma mensagem" })}
                  placeholder="Sua mensagem"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  aria-label="Mensagem"
                />
                {errors.message && <p className={errorClass}>{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === "sending"}
                className="w-full gap-2"
              >
                <Send size={16} />
                {status === "sending" ? "Enviando..." : "Enviar mensagem"}
              </Button>

              {status === "success" && (
                <p className="font-body text-green-400 text-sm text-center">
                  Mensagem enviada! Entraremos em contato em breve.
                </p>
              )}
              {status === "error" && (
                <p className="font-body text-rf-red text-sm text-center">
                  Erro ao enviar. Tente pelo WhatsApp.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
