"use client";

import React from 'react';

const PLANS = [
  { name: 'Start', price: '89', tagline: 'Acompanhamento essencial',
    features: ['Planilha semanal', 'Acompanhamento básico', 'Suporte por WhatsApp', 'Avaliação inicial'],
    highlight: false },
  { name: 'Performance', price: '149', tagline: 'Evolução e suporte direto',
    features: ['Planilha personalizada', 'Ajustes semanais', 'Suporte direto', 'Participação nos treinos coletivos', 'Estratégia para provas até 21k'],
    highlight: true },
  { name: 'Premium', price: '249', tagline: 'Alta performance e atenção',
    features: ['Acompanhamento direto', 'Feedback constante', 'Estratégia de prova completa', 'Atenção mais próxima 1:1', 'Camps e workshops inclusos', 'Análise de provas até maratona'],
    highlight: false }
];

interface PlansProps {
  accent?: string;
}

export default function Plans({ accent = '#E30613' }: PlansProps) {
  return (
    <section id="planos" style={{ background: '#0a0a0a' }}>
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

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {PLANS.map((p, i) => (
            <div key={p.name} className="card plan-card" style={{
              padding: '36px 32px',
              background: p.highlight ? '#101010' : 'var(--rf-card)',
              borderColor: p.highlight ? accent : 'var(--rf-line)',
              borderWidth: p.highlight ? '1px' : '1px',
              boxShadow: p.highlight ? `0 30px 60px -20px ${accent}40` : 'none',
              transform: p.highlight ? 'translateY(-8px)' : 'none',
              position: 'relative'
            }}>
              {p.highlight && (
                <div style={{
                  position: 'absolute', top: -1, right: -1, background: accent, color: '#fff',
                  fontFamily: 'var(--rf-font-mono)', fontSize: 10, letterSpacing: '.2em', padding: '6px 12px',
                  textTransform: 'uppercase'
                }}>Mais escolhido</div>
              )}
              <div className="corner tl" style={{ borderColor: p.highlight ? accent : 'var(--rf-red)' }} />
              <div className="corner br" style={{ borderColor: p.highlight ? accent : 'var(--rf-red)' }} />

              <div className="t-mono" style={{ color: p.highlight ? accent : 'var(--rf-text-dim)' }}>PLANO 0{i+1}</div>
              <div className="t-display" style={{ fontSize: 'clamp(32px, 3.4vw, 44px)', marginTop: 14, lineHeight: 1.0 }}>{p.name}</div>
              <div style={{ marginTop: 8, color: '#aaa', fontSize: 14 }}>{p.tagline}</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 28, paddingBottom: 28, borderBottom: '1px solid var(--rf-line)' }}>
                <span style={{ fontFamily: 'var(--rf-font-mono)', fontSize: 13, color: 'var(--rf-text-dim)' }}>R$</span>
                <span className="t-display" style={{ fontSize: 72, color: '#fff', lineHeight: 1 }}>{p.price}</span>
                <span style={{ fontFamily: 'var(--rf-font-mono)', fontSize: 11, color: 'var(--rf-text-dim)' }}>,00 / mês</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px', display: 'grid', gap: 12 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14 }}>
                    <span style={{ width: 14, height: 14, marginTop: 3, border: `1px solid ${p.highlight ? accent : 'var(--rf-text-dim)'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ width: 6, height: 6, background: p.highlight ? accent : 'var(--rf-text-dim)' }} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contato" className="btn" style={{
                width: '100%', justifyContent: 'center',
                background: p.highlight ? accent : 'transparent',
                color: '#fff',
                border: p.highlight ? 'none' : '1px solid #fff',
                clipPath: p.highlight ? 'polygon(0 0, 100% 0, 96% 100%, 0 100%)' : 'none'
              }}>
                {p.highlight ? 'Começar agora' : 'Escolher plano'} <span className="arr" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
