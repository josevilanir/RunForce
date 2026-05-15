"use client";

import React from 'react';

const RFLogo = ({ small }: { small?: boolean } = {}) => (
  <div className="logo">
    <div className="mark" style={{ fontSize: small ? 20 : 24 }}>
      RUN<span className="red">FORCE</span>
    </div>
    <div className="tag">TEAM</div>
  </div>
);

interface HeaderProps {
  accent?: string;
}

export default function Header({ accent = '#E30613' }: HeaderProps) {
  return (
    <header className="hdr">
      <div className="hdr-inner">
        <a href="/" style={{ textDecoration: 'none' }}>
          <RFLogo />
        </a>
        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#pilares">Pilares</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#planos">Planos</a>
          <a href="#prova">Resultados</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href="#contato" className="cta" style={{ background: accent }}>Quero entrar</a>
      </div>
    </header>
  );
}

export { RFLogo };
