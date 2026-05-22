"use client";

import React, { useState } from 'react';

const PLANS = [
  { name: 'Online', price: '89', tagline: 'Acompanhamento onde você estiver',
    features: [
      { text: 'Planilha individual online' },
      { text: 'Treinos adaptados ao objetivo' },
      { text: 'Acompanhamento semanal' },
      { text: 'Ajustes de treino conforme evolução' },
      { text: 'Suporte via WhatsApp' },
      { text: 'Vídeos explicativos' },
      { text: 'Estratégias para provas' },
      { text: 'Controle de ritmo e performance' },
      { text: 'Treinos presenciais em grupo', strike: true },
      { text: 'Correção de técnica de corrida', strike: true },
      { text: 'Treinos funcionais específicos', strike: true }
    ],
    highlight: false },
  { name: 'Presencial', price: '149', tagline: 'Treino, técnica e grupo de corrida',
    features: [
      { text: 'Planilha personalizada' },
      { text: 'Treinos presenciais em grupo' },
      { text: 'Correção de técnica de corrida' },
      { text: 'Acompanhamento de evolução' },
      { text: 'Suporte via WhatsApp' },
      { text: 'Treinos funcionais específicos' },
      { text: 'Estratégia para provas e desafios' },
      { text: 'Motivação e acompanhamento contínuo' },
      { text: 'Frequência: 2x ou 3x por semana' }
    ],
    highlight: true }
];

interface PlansProps {
  accent?: string;
}

export default function Plans({ accent = '#E30613' }: PlansProps) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="planos" style={{ background: '#0a0a0a', paddingBottom: 120 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>04 / PLANOS</div>
            <h2 className="sec-title">Escolha seu <span style={{ color: accent }}>ritmo.</span></h2>
          </div>
          <div className="t-mono" style={{ maxWidth: 360 }}>
            Mensalidades sem fidelidade. Troque de plano sempre que sua meta mudar — o time anda com você.
          </div>
        </div>

        <div className="reveal plans-stack">
          {PLANS.map((p, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={p.name} 
                className="card plan-card" 
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                style={{
                  background: isActive ? '#101010' : 'var(--rf-card)',
                  borderColor: isActive ? accent : 'var(--rf-line)',
                  borderWidth: '1px',
                  boxShadow: isActive ? `0 30px 60px -20px ${accent}40` : '0 10px 30px rgba(0,0,0,0.5)',
                  zIndex: isActive ? 10 : 1,
                  transform: isActive ? 'scale(1.02) translateY(-12px)' : 'scale(0.92) translateY(0)',
                  filter: isActive ? 'brightness(1)' : 'brightness(0.5)',
                  transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  cursor: 'pointer'
                }}>
                {p.highlight && (
                  <div style={{
                    position: 'absolute', top: -1, right: -1, background: accent, color: '#fff',
                    fontFamily: 'var(--rf-font-mono)', fontSize: 10, letterSpacing: '.2em', padding: '6px 12px',
                    textTransform: 'uppercase'
                  }}>Mais escolhido</div>
                )}
                <div className="corner tl" style={{ borderColor: isActive ? accent : 'var(--rf-red)', transition: 'border-color 0.4s' }} />
                <div className="corner br" style={{ borderColor: isActive ? accent : 'var(--rf-red)', transition: 'border-color 0.4s' }} />

                <div className="t-mono plan-eyebrow" style={{ color: isActive ? accent : 'var(--rf-text-dim)', transition: 'color 0.4s' }}>PLANO 0{i+1}</div>
                <div className="t-display plan-title" style={{ marginTop: 14, lineHeight: 1.0 }}>{p.name}</div>
                <div className="plan-tagline" style={{ marginTop: 8, color: '#aaa' }}>{p.tagline}</div>

                <div className="plan-price-wrap" style={{ display: 'flex', alignItems: 'baseline', marginTop: 28, paddingBottom: 28, borderBottom: '1px solid var(--rf-line)' }}>
                  <span className="plan-currency" style={{ fontFamily: 'var(--rf-font-mono)', color: 'var(--rf-text-dim)' }}>R$</span>
                  <span className="t-display plan-price" style={{ color: '#fff', lineHeight: 1 }}>{p.price}</span>
                  <span className="plan-period" style={{ fontFamily: 'var(--rf-font-mono)', color: 'var(--rf-text-dim)' }}>,00 / mês</span>
                </div>

                <ul className="plan-features" style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px', display: 'grid' }}>
                  {p.features.map((f, j) => (
                    <li key={j} className="plan-feature-li" style={{ display: 'flex', alignItems: 'flex-start', opacity: f.strike ? 0.4 : 1 }}>
                      <span className="plan-feature-bullet" style={{ border: `1px solid ${isActive ? accent : 'var(--rf-text-dim)'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, opacity: f.strike ? 0.3 : 1, transition: 'border-color 0.4s' }}>
                        <span className="plan-feature-dot" style={{ background: f.strike ? 'transparent' : (isActive ? accent : 'var(--rf-text-dim)'), transition: 'background 0.4s' }} />
                      </span>
                      <span style={{ textDecoration: f.strike ? 'line-through' : 'none' }}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contato" className="btn" style={{
                  width: '100%', justifyContent: 'center',
                  background: isActive ? accent : 'transparent',
                  color: '#fff',
                  border: isActive ? 'none' : '1px solid #fff',
                  clipPath: isActive ? 'polygon(0 0, 100% 0, 96% 100%, 0 100%)' : 'none',
                  transition: 'all 0.4s'
                }}>
                  {isActive ? 'Começar agora' : 'Escolher plano'} <span className="arr" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .plans-stack {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 60px;
        }
        .plan-card {
          width: 100%;
          max-width: 440px;
          position: relative;
          padding: 40px 32px;
        }
        .plan-title { font-size: clamp(32px, 3.4vw, 44px); }
        .plan-tagline { font-size: 14px; }
        .plan-price-wrap { gap: 6px; }
        .plan-currency { font-size: 13px; }
        .plan-price { font-size: 72px; }
        .plan-period { font-size: 11px; }
        .plan-features { gap: 12px; }
        .plan-feature-li { gap: 12px; font-size: 14px; }
        .plan-feature-bullet { width: 14px; height: 14px; margin-top: 3px; }
        .plan-feature-dot { width: 6px; height: 6px; }
        
        @media (min-width: 769px) {
          .plan-card:nth-child(2) {
            margin-left: -80px;
          }
        }
        @media (max-width: 768px) {
          .plans-stack {
            flex-direction: row;
            margin-top: 40px;
          }
          .plan-card {
            padding: 24px 16px;
            max-width: 240px; /* Force smaller size on mobile */
          }
          .plan-card:nth-child(2) {
            margin-left: -120px; /* Big overlap to fit */
          }
          .plan-title { font-size: 20px; }
          .plan-tagline { font-size: 11px; }
          .plan-price-wrap { gap: 4px; margin-top: 16px !important; padding-bottom: 16px !important; }
          .plan-currency { font-size: 10px; }
          .plan-price { font-size: 38px; }
          .plan-period { font-size: 9px; }
          .plan-features { gap: 8px; margin: 16px 0 24px !important; }
          .plan-feature-li { gap: 8px; font-size: 10px; }
          .plan-feature-bullet { width: 10px; height: 10px; margin-top: 2px; }
          .plan-feature-dot { width: 4px; height: 4px; }
          /* Reduce font size of eyebrow and buttons for mobile */
          .plan-eyebrow { font-size: 9px !important; }
          .btn { font-size: 11px !important; height: 36px !important; padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
