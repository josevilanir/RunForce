"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Pilares", href: "#pilares" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-title font-bold text-2xl md:text-3xl tracking-widest uppercase text-white">
              Run<span className="text-rf-red">Force</span>
            </span>
            <span className="font-body text-xs text-rf-gray uppercase tracking-widest hidden sm:block">
              Team
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-white/70 hover:text-rf-red transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contato" variant="primary" size="sm">
              Quero entrar
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-body text-white/80 hover:text-rf-red py-3 text-base uppercase tracking-wider border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button href="#contato" variant="primary" size="md" className="w-full" onClick={handleNavClick}>
                Quero entrar para o time
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
