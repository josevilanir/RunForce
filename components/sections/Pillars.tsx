"use client";

import React, { useState } from 'react';

const PILLARS = [
  { id: 'disciplina',  num: '01', name: 'Disciplina',  copy: 'Fazemos o que precisa ser feito, todos os dias.' },
  { id: 'foco',        num: '02', name: 'Foco',        copy: 'Objetivo claro, mente forte, sem distrações.' },
  { id: 'equipe',      num: '03', name: 'Equipe',      copy: 'Juntos somos mais fortes. Um time que te impulsiona.' },
  { id: 'evolucao',    num: '04', name: 'Evolução',    copy: 'Pequenas escolhas, grandes mudanças.' },
  { id: 'performance', num: '05', name: 'Performance', copy: 'Treino inteligente para entregar resultados de verdade.' }
];

interface PillarsProps {
  accent?: string;
}

export default function Pillars({ accent = '#E30613' }: PillarsProps) {
  const [active, setActive] = useState(0);

  return (
    <section id="pilares" style={{ background: '#0a0a0a' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>02 / PILARES</div>
            <h2 className="sec-title">Cinco forças.<br />Um único <span style={{ color: accent }}>propósito.</span></h2>
          </div>
          <div className="t-mono" style={{ maxWidth: 320 }}>
            Cada treino, cada métrica, cada gesto da equipe é guiado por estes cinco princípios.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 48 }} className="pilares-grid">
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--rf-line)' }}>
            {PILLARS.map((p, i) => (
              <button key={p.id} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} style={{
                display: 'flex', alignItems: 'center', gap: 24, padding: '28px 0',
                borderBottom: '1px solid var(--rf-line)', textAlign: 'left', position: 'relative',
                transition: 'padding .25s',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}>
                <span className="t-mono" style={{ color: active === i ? accent : 'var(--rf-text-dim)', minWidth: 28 }}>{p.num}</span>
                <span className="t-display" style={{
                  fontSize: active === i ? 'clamp(36px, 4.4vw, 56px)' : 'clamp(28px, 3.4vw, 40px)', transition: 'all .25s',
                  color: active === i ? '#fff' : '#666'
                }}>{p.name}</span>
                {active === i && <span style={{ position: 'absolute', left: -16, top: '50%', width: 8, height: 8, background: accent, transform: 'translateY(-50%)' }} />}
              </button>
            ))}
          </div>

          <div className="reveal" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 480 }}>
            <div className="ph" style={{ flex: 1, minHeight: 320 }}>
              <div className="ph-corner tl" />
              <div className="ph-corner br" />
              <div style={{ position: 'absolute', top: 24, right: 24, fontFamily: 'var(--rf-font-mono)', fontSize: 10, letterSpacing: '.3em', color: accent }}>
                P/{PILLARS[active].num}
              </div>
              <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
                <div className="t-display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,.6)' }}>{PILLARS[active].name}</div>
                <div style={{ marginTop: 10, fontSize: 16, color: '#ddd', maxWidth: 460 }}>{PILLARS[active].copy}</div>
              </div>
              <div className="ph-tag" style={{ position: 'absolute', top: 24, left: 24 }}>FOTO • {PILLARS[active].name.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
