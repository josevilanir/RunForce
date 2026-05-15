"use client";

import React from 'react';
import Counter from "@/components/ui/Counter";

const TESTIMONIES = [
  { name: 'Carla M.', tag: 'BAIXOU 12 MIN NA MEIA', quote: 'Cheguei correndo 6:30/km e em 8 meses fechei minha primeira meia em 1h52. O time não me deixou parar.' },
  { name: 'Rafael S.', tag: 'PRIMEIRA MARATONA', quote: 'Achei que maratona não era pra mim. A planilha respeita meu corpo, a galera respeita meu tempo. Cruzei.' },
  { name: 'Joana P.', tag: 'VOLTOU APÓS LESÃO', quote: 'Voltei de fascite plantar com medo. Hoje treino três vezes por semana sem dor e com pace melhor que antes.' }
];

interface SocialProofProps {
  accent?: string;
}

export default function SocialProof({ accent = '#E30613' }: SocialProofProps) {
  return (
    <section id="prova">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>05 / RESULTADOS</div>
            <h2 className="sec-title">Quem corre <span style={{ color: accent }}>com a gente</span><br />não corre sozinho.</h2>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'var(--rf-line)', border: '1px solid var(--rf-line)', marginBottom: 64 }}>
          {[
            { n: 240, s: '+', l: 'Atletas no time' },
            { n: 142, s: '', l: 'Medalhas em 2025' },
            { n: 38, s: '', l: 'Provas concluídas' },
            { n: 4, s: '.9', l: 'Avaliação média' }
          ].map((s, i) => (
            <div key={i} style={{ background: '#050505', padding: '36px 28px' }}>
              <div className="t-display" style={{ fontSize: 'clamp(44px, 4.4vw, 64px)', color: '#fff', lineHeight: 1 }}>
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="t-mono" style={{ marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {TESTIMONIES.map((t, i) => (
            <div key={i} className="card" style={{ padding: 32, position: 'relative', display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="corner tl" /><div className="corner br" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--rf-font-title)', fontWeight: 700, color: accent, fontSize: 56, lineHeight: .7 }}>"</span>
                <span className="t-mono" style={{ color: accent }}>{t.tag}</span>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0, color: '#ddd' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--rf-line)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1a1a1a', border: '1px solid var(--rf-line-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--rf-font-title)', fontSize: 18 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--rf-font-title)', fontWeight: 600, fontSize: 16 }}>{t.name}</div>
                  <div className="t-mono" style={{ fontSize: 10, marginTop: 2 }}>ATLETA RUNFORCE</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
