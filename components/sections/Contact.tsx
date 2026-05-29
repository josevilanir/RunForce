"use client";

import React, { useState, useEffect } from 'react';
import SpeedLines from "@/components/ui/SpeedLines";

interface ContactProps {
  accent?: string;
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Field = ({ label, name, type = 'text', placeholder, value, onChange, required }: FieldProps) => (
  <div className="reveal">
    <label className="t-mono" htmlFor={name} style={{ display: 'block', marginBottom: 8 }}>{label}</label>
    <input 
      id={name} 
      name={name} 
      type={type} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      required={required}
      style={{
        width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--rf-line-strong)',
        padding: '14px 0', color: '#fff', fontFamily: 'var(--rf-font-body)', fontSize: 16, outline: 'none'
      }} 
    />
  </div>
);

function formatWhatsAppNumber(rawNumber: string) {
  const clean = rawNumber.startsWith("55") ? rawNumber.slice(2) : rawNumber;
  if (clean.length === 11) {
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`;
  }
  return clean;
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "5584987046296";
const INSTAGRAM_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "es_teamm";

export default function Contact({ accent = '#E30613' }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Presencial');
  const [selectedLvl, setSelectedLvl] = useState('Iniciante');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleSelectPlan = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedPlan(customEvent.detail);
      }
    };
    window.addEventListener('select-plan', handleSelectPlan);
    return () => window.removeEventListener('select-plan', handleSelectPlan);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, lvl: selectedLvl, plan: selectedPlan }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário');
      }

      setStatus('success');

      const text = `Olá! Quero entrar para o time Emicarlo Souza Team.\n\n` +
        `*Nome:* ${name}\n` +
        `*WhatsApp:* ${phone}\n` +
        `*E-mail:* ${email}\n` +
        `*Plano de interesse:* ${selectedPlan}\n` +
        `*Nível atual:* ${selectedLvl}`;

      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 1000);

    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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
            <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Quero saber mais sobre a Emicarlo Souza Team.")}`}
               target="_blank" rel="noopener noreferrer"
               className="card" style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 20, textDecoration: 'none', marginBottom: 16 }}>
              <div className="corner tl" /><div className="corner br" />
              <div style={{ width: 56, height: 56, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--rf-font-title)', fontSize: 24, color: '#fff' }}>W</div>
              <div style={{ flex: 1 }}>
                <div className="t-mono" style={{ color: accent }}>WHATSAPP DIRETO</div>
                <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 22, fontWeight: 600, marginTop: 4, color: '#fff' }}>{formatWhatsAppNumber(WA_NUMBER)}</div>
              </div>
              <span className="arr" style={{ width: 24, color: '#fff' }} />
            </a>
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer"
               className="card" style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 20, textDecoration: 'none', marginBottom: 16 }}>
              <div className="corner tl" /><div className="corner br" />
              <div style={{ width: 56, height: 56, border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--rf-font-title)', fontSize: 22, color: '#fff' }}>IG</div>
              <div style={{ flex: 1 }}>
                <div className="t-mono">INSTAGRAM</div>
                <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 22, fontWeight: 600, marginTop: 4, color: '#fff' }}>@{INSTAGRAM_HANDLE}</div>
              </div>
            </a>
            <div className="card" style={{ padding: 28 }}>
              <div className="corner tl" /><div className="corner br" />
              <div className="t-mono" style={{ marginBottom: 16 }}>PONTOS DE TREINO</div>
              
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 18, fontWeight: 600 }}>Av. Alexandrino de Alencar</div>
                <div style={{ color: '#aaa', fontSize: 13, marginTop: 2 }}>Próx. ao Bosque dos Namorados</div>
                <div style={{ color: accent, fontSize: 12, fontFamily: 'var(--rf-font-mono)', marginTop: 4, letterSpacing: '0.05em' }}>TERÇAS E QUINTAS • 18H30</div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--rf-font-title)', fontSize: 18, fontWeight: 600 }}>Pista de Corrida da UFRN</div>
                <div style={{ color: '#aaa', fontSize: 13, marginTop: 2 }}>Campus Universitário</div>
                <div style={{ color: accent, fontSize: 12, fontFamily: 'var(--rf-font-mono)', marginTop: 4, letterSpacing: '0.05em' }}>SEGUNDAS E QUARTAS • 16H30</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="reveal">
            <Field label="Nome completo" name="name" required value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <Field label="WhatsApp" name="phone" placeholder="(84) 98704-6296" required value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
            <Field label="E-mail" name="email" type="email" required value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <div>
              <label className="t-mono" style={{ display: 'block', marginBottom: 8 }}>Plano de interesse</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
                {['Online', 'Presencial'].map(p => {
                  const isSelected = selectedPlan === p;
                  return (
                    <label key={p} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '14px 8px',
                      border: isSelected ? `1px solid ${accent}` : '1px solid var(--rf-line-strong)',
                      background: isSelected ? `${accent}15` : 'transparent',
                      cursor: 'pointer', fontSize: 13, fontFamily: 'var(--rf-font-title)',
                      textTransform: 'uppercase',
                      color: isSelected ? '#fff' : '#aaa',
                      transition: 'all 0.2s ease-in-out'
                    }}>
                      <input 
                        type="radio" 
                        name="plan" 
                        checked={isSelected}
                        onChange={() => setSelectedPlan(p)}
                        style={{ display: 'none' }} 
                      />
                      {p}
                    </label>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="t-mono" style={{ display: 'block', marginBottom: 8 }}>Nível atual</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {['Iniciante', 'Em evolução', 'Performance'].map(l => {
                  const isSelected = selectedLvl === l;
                  return (
                    <label key={l} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '14px 8px',
                      border: isSelected ? `1px solid ${accent}` : '1px solid var(--rf-line-strong)',
                      background: isSelected ? `${accent}15` : 'transparent',
                      cursor: 'pointer', fontSize: 13, fontFamily: 'var(--rf-font-title)',
                      textTransform: 'uppercase',
                      color: isSelected ? '#fff' : '#aaa',
                      transition: 'all 0.2s ease-in-out'
                    }}>
                      <input 
                        type="radio" 
                        name="lvl" 
                        checked={isSelected}
                        onChange={() => setSelectedLvl(l)}
                        style={{ display: 'none' }} 
                      />
                      {l}
                    </label>
                  );
                })}
              </div>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status === 'loading' || status === 'success'}
              style={{ background: accent, marginTop: 12, justifyContent: 'center', opacity: (status === 'loading' || status === 'success') ? 0.7 : 1 }}
            >
              {status === 'loading' && 'Enviando...'}
              {status === 'success' && '✓ Enviado — Redirecionando...'}
              {status === 'error' && 'Erro ao enviar. Tente novamente.'}
              {status === 'idle' && 'Quero entrar para o time'} 
              <span className="arr" />
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
