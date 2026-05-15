"use client";

import React, { useState } from 'react';
import SpeedLines from "@/components/ui/SpeedLines";

interface ContactProps {
  accent?: string;
}

const Field = ({ label, name, type = 'text', placeholder }: any) => (
  <div className="reveal">
    <label className="t-mono" htmlFor={name} style={{ display: 'block', marginBottom: 8 }}>{label}</label>
    <input id={name} name={name} type={type} placeholder={placeholder} style={{
      width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--rf-line-strong)',
      padding: '14px 0', color: '#fff', fontFamily: 'var(--rf-font-body)', fontSize: 16, outline: 'none'
    }} />
  </div>
);

export default function Contact({ accent = '#E30613' }: ContactProps) {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" style={{ background: '#0a0a0a', borderTop: `1px solid ${accent}` }}>
      <SpeedLines density={14} opacity={.25} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>07 / ENTRE NO TIME</div>
            <h2 className="sec-title">Hora de <span style={{ color: accent }}>largar.</span></h2>
          </div>
          <div className="t-mono" style={{ maxWidth: 340 }}>
            Responda em até 2 minutos. Em até 24h um treinador entra em contato pelo WhatsApp.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 48 }} className="contato-grid">
          <div className="reveal">
            <a href="https://wa.me/5511999999999?text=Quero%20entrar%20para%20o%20time%20RunForce"
               target="_blank" rel="noopener"
               className="card" style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 20, textDecoration: 'none', marginBottom: 16 }}>
              <div className="corner tl" /><div className="corner br" />
              <div style={{ width: 56, height: 56, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--rf-font-title)', fontSize: 24, color: '#fff' }}>W</div>
              <div style={{ flex: 1 }}>
                <div className="t-mono" style={{ color: accent }}>WHATSAPP DIRETO</div>
                <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 22, fontWeight: 600, marginTop: 4, color: '#fff' }}>(11) 99999-9999</div>
              </div>
              <span className="arr" style={{ width: 24, color: '#fff' }} />
            </a>
            <a href="https://instagram.com/runforceteam" target="_blank" rel="noopener"
               className="card" style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 20, textDecoration: 'none', marginBottom: 16 }}>
              <div className="corner tl" /><div className="corner br" />
              <div style={{ width: 56, height: 56, border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--rf-font-title)', fontSize: 22, color: '#fff' }}>IG</div>
              <div style={{ flex: 1 }}>
                <div className="t-mono">INSTAGRAM</div>
                <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 22, fontWeight: 600, marginTop: 4, color: '#fff' }}>@runforceteam</div>
              </div>
            </a>
            <div className="card" style={{ padding: 28 }}>
              <div className="corner tl" /><div className="corner br" />
              <div className="t-mono">PONTO DE TREINO</div>
              <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 20, fontWeight: 600, marginTop: 6 }}>Parque do Ibirapuera — Portão 3</div>
              <div style={{ color: '#aaa', fontSize: 14, marginTop: 4 }}>Terças e quintas 06h00 • Sábados 06h30</div>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="reveal">
            <Field label="Nome completo" name="name" />
            <Field label="WhatsApp" name="phone" placeholder="(11) 99999-9999" />
            <Field label="E-mail" name="email" type="email" />
            <div>
              <label className="t-mono" style={{ display: 'block', marginBottom: 8 }}>Nível atual</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {['Iniciante', 'Em evolução', 'Performance'].map(l => (
                  <label key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 8px', border: '1px solid var(--rf-line-strong)', cursor: 'pointer', fontSize: 13, fontFamily: 'var(--rf-font-title)', textTransform: 'uppercase' }}>
                    <input type="radio" name="lvl" style={{ display: 'none' }} />{l}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ background: accent, marginTop: 12, justifyContent: 'center' }}>
              {sent ? '✓ Enviado — falaremos em 24h' : 'Quero entrar para o time'} <span className="arr" />
            </button>
            <div className="t-mono" style={{ fontSize: 10 }}>SEUS DADOS SÃO USADOS SÓ PRA ENTRAR EM CONTATO. NADA DE SPAM.</div>
          </form>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .contato-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
