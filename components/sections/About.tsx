"use client";

import React from 'react';

interface AboutProps {
  accent?: string;
}

export default function About({ accent = '#E30613' }: AboutProps) {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="sec-head">
          <div className="reveal">
            <div className="sec-num" style={{ color: accent }}>01 / SOBRE</div>
            <h2 className="sec-title">Mais que corrida.<br /><span style={{ color: accent }}>É transformação.</span></h2>
          </div>
          <div className="reveal" style={{ maxWidth: 460, color: '#bdbdbd', fontSize: 18, lineHeight: 1.55 }}>
            A RunForce Team é uma assessoria de corrida que transforma vidas através de <strong style={{ color: '#fff' }}>disciplina, estratégia e um time</strong> que te impulsiona a ir além. Da primeira passada à medalha, você não está sozinho.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 32 }} className="sobre-grid">
          <div className="ph reveal" style={{ aspectRatio: '16/10' }}>
            <div className="ph-corner tl" />
            <div className="ph-corner br" />
            <div className="ph-tag">FOTO • TREINO COLETIVO NO PARQUE</div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 32 }}>
            <div className="ph reveal" style={{ aspectRatio: 'auto' }}>
              <div className="ph-corner tl" />
              <div className="ph-tag">FOTO • LARGADA DE PROVA</div>
            </div>
            <div className="card reveal" style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="corner tl" /><div className="corner br" />
              <div className="t-mono">PARA QUEM É</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'grid', gap: 10, fontSize: 14 }}>
                {['Iniciantes que querem começar com método', 'Corredores em evolução buscando próximo pace', 'Atletas mirando provas de 5k a maratona', 'Quem quer fazer parte de um time de verdade'].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: accent, fontFamily: 'var(--rf-font-mono)', fontSize: 11, minWidth: 22 }}>{String(i+1).padStart(2,'0')}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
