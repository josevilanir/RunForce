"use client";

import React from 'react';

const BENEFITS = [
  { k: 'Treinos estruturados', d: 'Planilha periodizada por nível, objetivo e janela de tempo.', i: '◢' },
  { k: 'Evolução segura', d: 'Carga progressiva, controle de PSE e prevenção de lesão.', i: '◤' },
  { k: 'Acompanhamento real', d: 'Feedback semanal por treinador, ajustes finos quando precisa.', i: '◥' },
  { k: 'Comunidade ativa', d: 'Grupos por pace, treinos coletivos e suporte 7 dias.', i: '◣' },
  { k: 'Metas e provas', d: 'Calendário de provas, logística e estratégia de corrida.', i: '◆' },
  { k: 'Eventos exclusivos', d: 'Camps, longões temáticos, workshops e palestras técnicas.', i: '✱' }
];

interface BenefitsProps {
  accent?: string;
}

export default function Benefits({ accent = '#E30613' }: BenefitsProps) {
  return (
    <section id="beneficios">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>03 / BENEFÍCIOS</div>
            <h2 className="sec-title">O que você ganha<br />ao <span style={{ color: accent }}>entrar no time.</span></h2>
          </div>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--rf-line)', border: '1px solid var(--rf-line)' }}>
          {BENEFITS.map((b, i) => (
            <div key={i} className="benefit-card" style={{ background: 'var(--rf-bg)', padding: '40px 32px', minHeight: 240, position: 'relative', transition: 'background .2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 32, color: accent, lineHeight: 1 }}>{b.i}</span>
                <span className="t-mono">B/{String(i+1).padStart(2,'0')}</span>
              </div>
              <div className="t-display" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', marginTop: 32, lineHeight: 1.0 }}>{b.k}</div>
              <div style={{ marginTop: 12, color: '#aaa', fontSize: 14, lineHeight: 1.55 }}>{b.d}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .benefit-card:hover {
          background: #0e0e0e !important;
        }
      `}</style>
    </section>
  );
}
