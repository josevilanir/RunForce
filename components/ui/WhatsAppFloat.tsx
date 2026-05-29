"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "5584987046296";
const WA_MESSAGE = encodeURIComponent("Olá! Quero saber mais sobre a Emicarlo Souza Team.");

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={26} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
