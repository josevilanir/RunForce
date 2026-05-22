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
          <div className="ph reveal" style={{ aspectRatio: '16/10', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 40, background: '#0d0d0d', border: '1px solid var(--rf-line)', textAlign: 'center', position: 'relative' }}>
            <div className="ph-corner tl" />
            <div className="ph-corner br" />
            
            {/* Background pattern */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotGrid)" />
            </svg>

            <div className="t-mono" style={{ color: accent, fontSize: 10, letterSpacing: '.3em', marginBottom: 16 }}>MANIFESTO RUNFORCE</div>
            <h3 className="t-display" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', lineHeight: 1.1, color: '#fff' }}>
              MÉTODO • EVOLUÇÃO<br />
              <span style={{ color: accent }}>& PERFORMANCE</span>
            </h3>
            <p style={{ marginTop: 16, fontSize: 14, color: '#999', maxWidth: 360 }}>
              Corremos por metas que parecem impossíveis até serem alcançadas. Cada passada é calculada; cada treino tem um propósito.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 32 }}>
            <div className="ph reveal" style={{ aspectRatio: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '32px 40px', background: '#0d0d0d', border: '1px solid var(--rf-line)', position: 'relative' }}>
              <div className="ph-corner tl" />
              <div className="ph-corner br" />
              
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <div style={{ fontSize: 32, color: accent, fontFamily: 'var(--rf-font-title)', fontWeight: 800 }}>100%</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="t-display" style={{ fontSize: 16, color: '#fff', letterSpacing: '.1em' }}>TREINO INDIVIDUALIZADO</div>
                  <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>Prescrição ajustada ao seu nível atual e objetivos pessoais.</div>
                </div>
              </div>
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
