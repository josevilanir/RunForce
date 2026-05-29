"use client";

import React from 'react';

// Inline SVGs for athletic/sponsors brand logos to prevent loading delays or broken external links
const StravaLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-auto text-[#FC4C02]" aria-label="Strava">
    <polygon points="12,1 4,16 9.5,16 12,11.5 14.5,16 20,16" />
    <polygon points="17.5,12 14.5,18 16,21.5 17.5,18.5 19,21.5 20.5,18" />
  </svg>
);

const GarminLogo = () => (
  <svg viewBox="0 0 100 25" fill="currentColor" className="h-4 w-auto text-white/50 hover:text-white transition-colors" aria-label="Garmin">
    <text x="0" y="20" fontSize="19" fontWeight="900" letterSpacing="0.08em" fontFamily="var(--rf-font-title), sans-serif">GARMIN</text>
  </svg>
);

const NikeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-auto text-white/50 hover:text-white transition-colors" aria-label="Nike">
    <path d="M21 5.3c-.3 0-1.2.2-2.7.7C14.7 7.3 10.2 10.5 7 13.9c-2.3 2.5-3.5 4.8-3.5 6.4 0 1 .4 1.6 1.2 1.6.8 0 2.1-.5 3.8-1.5 3.9-2.3 8.3-7 10.8-12.2.8-1.6 1.4-2.8 1.7-3 .1 0-.1 0-.1.1z"/>
  </svg>
);

const AdidasLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-auto text-white/50 hover:text-white transition-colors" aria-label="Adidas">
    <polygon points="6,20 9,20 4,8 1,8" />
    <polygon points="11,20 14,20 8,5 5,5" />
    <polygon points="16,20 19,20 12,2 9,2" />
  </svg>
);

const AsicsLogo = () => (
  <svg viewBox="0 0 100 25" fill="currentColor" className="h-4 w-auto text-white/50 hover:text-white transition-colors" aria-label="Asics">
    <text x="0" y="19" fontSize="18" fontWeight="900" fontStyle="italic" fontFamily="sans-serif">asics</text>
  </svg>
);

const CorosLogo = () => (
  <svg viewBox="0 0 100 25" fill="currentColor" className="h-4 w-auto text-white/50 hover:text-white transition-colors" aria-label="Coros">
    <text x="0" y="19" fontSize="17" fontWeight="800" letterSpacing="0.12em" fontFamily="var(--rf-font-mono), monospace">COROS</text>
  </svg>
);

const TESTIMONIES = [
  {
    name: 'Carla M.',
    tag: 'BAIXOU 12 MIN NA MEIA',
    profession: 'Servidora Pública / Meio-maratonista',
    quote: 'Cheguei correndo 6:30/km e em 8 meses fechei minha primeira meia maratona em 1h52. A planilha individualizada e a comunidade me impulsionaram a ir além.',
    logo: <StravaLogo />
  },
  {
    name: 'Rafael S.',
    tag: 'PRIMEIRA MARATONA',
    profession: 'Engenheiro Civil / Maratonista',
    quote: 'Achei que maratona não era pra mim. A planilha respeita minha rotina exaustiva de trabalho, e o acompanhamento diário dos treinadores me deu a confiança para cruzar a linha de chegada.',
    logo: <GarminLogo />
  },
  {
    name: 'Joana P.',
    tag: 'VOLTOU APÓS LESÃO',
    profession: 'Médica Traumatologista',
    quote: 'Voltei de uma fascite plantar severa com muito medo. O trabalho de fortalecimento específico e a progressão cuidadosa me permitiram voltar a treinar sem dor.',
    logo: <AsicsLogo />
  },
  {
    name: 'Marcos T.',
    tag: 'SUB 3h NA MARATONA',
    profession: 'Advogado / Maratonista de Elite',
    quote: 'A dedicação integral dos treinadores e a estratégia de prova impecável foram fundamentais para que eu conseguisse quebrar a barreira das 3 horas em Porto Alegre.',
    logo: <NikeLogo />
  },
  {
    name: 'Amanda K.',
    tag: 'ESTILO DE VIDA E SAÚDE',
    profession: 'Arquiteta',
    quote: 'Encontrei mais do que uma assessoria de corrida; encontrei uma família. A corrida me trouxe saúde mental, foco e muito mais disposição para encarar o dia a dia.',
    logo: <AdidasLogo />
  },
  {
    name: 'Lucas G.',
    tag: 'ESTREIA EM 10K',
    profession: 'Designer de Produto',
    quote: 'Comecei sem conseguir correr 1km consecutivo. Menos de um ano depois, completei meus primeiros 10km oficiais abaixo de 1 hora. O método realmente funciona.',
    logo: <CorosLogo />
  }
];

const duplicatedTestimonies = [...TESTIMONIES, ...TESTIMONIES];

interface SocialProofProps {
  accent?: string;
}

export default function SocialProof({ accent = '#E30613' }: SocialProofProps) {
  return (
    <section id="prova" style={{ overflow: 'hidden', paddingLeft: 0, paddingRight: 0 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>05 / RESULTADOS</div>
            <h2 className="sec-title">Quem corre <span style={{ color: accent }}>com a gente</span><br />não corre sozinho.</h2>
          </div>
        </div>
      </div>

      <div className="reveal" style={{ marginTop: 20 }}>
        {/* Slider container with left/right fade masks */}
        <div 
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }} 
          className="flex relative overflow-hidden shrink-0 max-w-full"
        >
          <div className="flex animate-x-slider gap-6 py-4 w-max">
            {duplicatedTestimonies.map((t, idx) => (
              <div 
                key={idx} 
                className="card relative flex flex-col justify-between shrink-0 grow-0 w-[320px] sm:w-[460px] h-[300px] sm:h-[320px] transition-colors duration-300 hover:border-white/20" 
                style={{ 
                  padding: '32px 32px 24px',
                  background: 'var(--rf-card)',
                  border: '1px solid var(--rf-line)'
                }}
              >
                {/* Red corner borders characteristic of Emicarlo Souza Team design */}
                <div className="corner tl" />
                <div className="corner br" />

                {/* Quote details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--rf-font-title)', fontWeight: 700, color: accent, fontSize: 50, lineHeight: .7 }}>"</span>
                    <span className="t-mono" style={{ color: accent, fontSize: 11 }}>{t.tag}</span>
                  </div>
                  
                  <p style={{ 
                    fontSize: 15, 
                    lineHeight: 1.55, 
                    margin: 0, 
                    color: 'var(--rf-text)',
                    fontFamily: 'var(--rf-font-body)',
                    fontWeight: 300
                  }}>
                    {t.quote}
                  </p>
                </div>

                {/* User avatar, name and logo footer */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginTop: 20, 
                    paddingTop: 16, 
                    borderTop: '1px solid var(--rf-line)',
                    gap: 12
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Circle avatar with name initials */}
                    <div 
                      style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        background: '#151515', 
                        border: '1px solid var(--rf-line-strong)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontFamily: 'var(--rf-font-title)', 
                        fontSize: 16,
                        fontWeight: 600,
                        color: accent
                      }}
                    >
                      {t.name.split(' ').map(n => n.charAt(0)).join('')}
                    </div>
                    
                    <div>
                      <div style={{ fontFamily: 'var(--rf-font-title)', fontWeight: 600, fontSize: 15, color: '#fff' }}>{t.name}</div>
                      <div className="t-mono" style={{ fontSize: 9, marginTop: 1, color: 'var(--rf-text-dim)' }}>{t.profession}</div>
                    </div>
                  </div>

                  {/* Brand/Sponsor logo representation */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {t.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
