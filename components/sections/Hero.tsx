"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface SlideData {
  id: string;
  word: string;
  headline: [string, string, string];
  accentLine: number;
  sub: string;
}

const SLIDES: SlideData[] = [
  {
    id: 'evoluir',
    word: 'CORRER',
    headline: ['NÃO É SÓ CORRER.', 'É EVOLUIR', 'TODOS OS DIAS.'],
    accentLine: 1,
    sub: 'Treinos inteligentes, estratégia e um time para te impulsionar a ir além.',
  },
  {
    id: 'disciplina',
    word: 'FORÇA',
    headline: ['DISCIPLINA QUE', 'TRANSFORMA.', 'FORÇA QUE MOVE.'],
    accentLine: 1,
    sub: 'Fazemos o que precisa ser feito, todos os dias. Sem atalhos, sem desculpas.',
  },
  {
    id: 'time',
    word: 'EQUIPE',
    headline: ['JUNTOS SOMOS', 'MAIS FORTES.', 'CORRE COM A GENTE.'],
    accentLine: 1,
    sub: 'Um time que te puxa nos dias bons e te ergue nos difíceis. Aqui ninguém corre sozinho.',
  },
];

const DOT_NUMS = ['01', '02', '03'] as const;
const DOT_LABELS = ['evoluir', 'disciplina', 'time'] as const;
const RING_C = 301.59; // 2π × r(48)

// top%, width%, delay s, duration s
const BLACK_LINES: [number, number, number, number][] = [
  [5, 80, 0, 8], [11, 60, -2, 7], [16, 95, -5, 9], [22, 45, -1, 6],
  [28, 110, -4, 10], [33, 70, -7, 8], [38, 55, -3, 11], [44, 85, -6, 7],
  [50, 100, -2, 9], [55, 65, -9, 8], [61, 75, -1, 7], [66, 50, -4, 12],
  [72, 90, -8, 6], [78, 40, -3, 9], [83, 105, -6, 8], [88, 60, -2, 7],
  [93, 80, -5, 10], [97, 35, -7, 8],
];

const RED_LINES: [number, number, number, number][] = [
  [8, 50, -1, 9], [15, 70, -3, 7], [22, 40, -5, 8], [30, 85, -2, 10],
  [37, 55, -6, 7], [45, 65, -4, 9], [52, 45, -7, 8], [60, 75, -1, 11],
  [67, 50, -3, 7], [74, 80, -6, 9], [81, 40, -2, 8], [87, 60, -5, 7],
  [93, 55, -8, 10], [97, 35, -4, 8],
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => setIdx(i => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [autoPlay, next]);

  const stop = () => setAutoPlay(false);

  const slide = SLIDES[idx];
  const ringDash = ((idx + 1) / SLIDES.length) * RING_C;

  return (
    <section className="hero-v2" aria-label="Hero Emicarlo Souza Team">

      {/* ── BACKGROUNDS ── */}
      <div className="hv2-bg-black" />
      <div className="hv2-bg-red" />
      <div className="hv2-bg-graphite" />
      <div className="hv2-grain" aria-hidden="true" />

      <div className="hv2-speedlines" aria-hidden="true">
        {BLACK_LINES.map(([top, width, delay, dur], i) => (
          <div key={i} className="hv2-sline" style={{ top: `${top}%`, width: `${width}%`, animationDelay: `${delay}s`, animationDuration: `${dur}s` }} />
        ))}
      </div>

      <div className="hv2-speedlines hv2-speedlines--red" aria-hidden="true">
        {RED_LINES.map(([top, width, delay, dur], i) => (
          <div key={i} className="hv2-sline hv2-sline--dark" style={{ top: `${top}%`, width: `${width}%`, animationDelay: `${delay}s`, animationDuration: `${dur}s` }} />
        ))}
      </div>

      {/* ── DOTS (TOP) ── */}
      <div className="hv2-dots" role="tablist" aria-label="Slides">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`hv2-dot${i === idx ? ' hv2-dot--active' : ''}`}
            onClick={() => { stop(); setIdx(i); }}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Slide ${DOT_NUMS[i]}: ${DOT_LABELS[i]}`}
          >
            <span className="hv2-dot-num">{DOT_NUMS[i]}</span>
            <span className="hv2-dot-bar" />
            <span className="hv2-dot-lbl">{DOT_LABELS[i]}</span>
          </button>
        ))}
      </div>

      {/* ── MEGA WORDMARK ── */}
      <div className="hv2-wordmark-wrap" aria-hidden="true">
        <div key={idx} className="hv2-wordmark">{slide.word}</div>
      </div>

      {/* ── BADGE ── */}
      <div className="hv2-badge-wrap">
        <div className="hv2-badge">
          <svg className="hv2-badge-svg" viewBox="0 0 100 100" width="140" height="140" aria-hidden="true">
            <circle cx="50" cy="50" r="49" fill="rgba(5,5,5,.95)" stroke="#E30613" strokeWidth="1" />
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" />
            <circle
              cx="50" cy="50" r="48"
              fill="none"
              stroke="#E30613"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${ringDash} ${RING_C}`}
              transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dasharray .6s ease' }}
            />
          </svg>
          <div className="hv2-badge-inner">
            <span className="hv2-badge-brand">EMICARLO SOUZA</span>
            <span className="hv2-badge-num">{String(idx + 1).padStart(2, '0')}/03</span>
            <span className="hv2-badge-lbl">{DOT_LABELS[idx].toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="hv2-content-wrap">
        <div className="hv2-content">
          <div className="hv2-eyebrow" aria-hidden="true">
            <span className="hv2-eyebrow-line" />
            ASSESSORIA DE CORRIDA / EST. 2021
          </div>

          <h1 key={idx} className="hv2-headline">
            {slide.headline.map((line, li) => (
              <span key={li} className="hv2-hl-clip">
                <span
                  className="hv2-hl-line"
                  style={{
                    color: li === slide.accentLine ? 'var(--rf-red)' : '#fff',
                    animationDelay: `${li * 0.12}s`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p key={`sub-${idx}`} className="hv2-sub">{slide.sub}</p>

          <div className="hv2-ctas">
            <a href="#contato" className="hv2-btn hv2-btn-primary">
              Quero entrar para o time
            </a>
            <a href="#sobre" className="hv2-btn hv2-btn-ghost">
              Conheça a assessoria
            </a>
          </div>
        </div>
      </div>

      {/* ── ARROWS ── */}
      <button
        className="hv2-arrow hv2-arrow--left"
        onClick={() => { stop(); prev(); }}
        aria-label="Slide anterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        className="hv2-arrow hv2-arrow--right"
        onClick={() => { stop(); next(); }}
        aria-label="Próximo slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── DECORATIVE CURVE ── */}
      <div className="hv2-curve" aria-hidden="true">
        <svg width="100%" height="80" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 80 L 0 50 L 520 50 L 600 20 L 1440 20 L 1440 80 Z" fill="#050505" />
          <polyline points="0,50 520,50 600,20 1440,20" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
          <circle cx="600" cy="20" r="3" fill="#fff" />
        </svg>
      </div>

      {/* ── MARKER BAR ── */}
      <div className="hv2-marker">
        <span>EMICARLO SOUZA TEAM</span>
        <span className="hv2-bullet" aria-hidden="true" />
        <span>SÃO PAULO — BRASIL</span>
        <span className="hv2-bullet" aria-hidden="true" />
        <span>EST. 2021</span>
        <span className="hv2-bullet" aria-hidden="true" />
        <span>VOL. 2026</span>
      </div>

    </section>
  );
}
