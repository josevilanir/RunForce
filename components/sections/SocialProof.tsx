"use client";

import React from 'react';

const GoogleStars = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="#FBBC05" style={{ width: 14, height: 14 }} aria-hidden="true">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
    <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, marginLeft: 4 }} aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  </div>
);

const TESTIMONIES = [
  {
    name: 'Evilly Tomaz Souza',
    tag: '5 ESTRELAS',
    profession: '1 avaliação',
    quote: 'Profissional incrível, sempre muito disposto, com um olhar atento e muita cautela no cuidado com o paciente. Ele é sinônimo de força, coragem e muita garra, um prazer ter um profissional como vc ao meu lado professor!!!',
  },
  {
    name: 'Leonardo Fontes',
    tag: '5 ESTRELAS',
    profession: '11 avaliações',
    quote: 'Excelente profissional! Tem uma grande bagagem de ensino e experiência, fruto de sua vida como atleta olímpico',
  },
  {
    name: 'Carlos Alberto Mora',
    tag: '5 ESTRELAS',
    profession: '9 avaliações',
    quote: 'Um atleta fora de serie, que tem uma historia de vida maravilhosa e que certamente empolga muitos de nós a procurarmos a excelencia',
  },
  {
    name: 'Jose Vilanir',
    tag: '5 ESTRELAS',
    profession: '5 avaliações',
    quote: 'Profissional sério, comprometido e apaixonado pelo que faz! Entende o objetivo de cada pessoa e traça um caminho real para chegar lá',
  },
  {
    name: 'Ana Paula Carino',
    tag: '5 ESTRELAS',
    profession: '1 avaliação',
    quote: 'Profissional competente, responsável e proativo.',
  },
  {
    name: 'Deise Janovitz Gomes Dias',
    tag: '5 ESTRELAS',
    profession: '7 avaliações',
    quote: 'Experiência e compromisso com resultados!!',
  },
  {
    name: 'Ana Cláudia Lins de Melo',
    tag: '5 ESTRELAS',
    profession: '2 avaliações',
    quote: 'Esse eu indico de olho fechado!',
  },
  {
    name: 'Lenilson Marques',
    tag: '5 ESTRELAS',
    profession: '4 avaliações',
    quote: 'Excelente, parabéns e muito obrigado! 👏',
  },
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

                  {/* Google stars + logo */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GoogleStars />
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
