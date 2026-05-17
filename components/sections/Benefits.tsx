"use client";
import React, { useState, useEffect, useRef } from 'react';

interface BenefitDef {
  num: string;
  k: string;
  d: string;
  icon: React.ReactElement;
}

interface PhaseDef {
  num: string;
  label: string;
  desc: string;
  benefits: BenefitDef[];
}

const PHASES: PhaseDef[] = [
  {
    num: '01',
    label: 'O PREPARO',
    desc: 'Base técnica, periodização e progressão científica',
    benefits: [
      {
        num: '01',
        k: 'Treinos estruturados',
        d: 'Planilha periodizada por nível, objetivo e janela de tempo.',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="22" height="21" rx="1"/>
            <line x1="3" y1="10" x2="25" y2="10"/>
            <line x1="9" y1="2" x2="9" y2="6"/>
            <line x1="19" y1="2" x2="19" y2="6"/>
            <line x1="8" y1="15" x2="13" y2="15"/>
            <line x1="8" y1="19" x2="17" y2="19"/>
          </svg>
        ),
      },
      {
        num: '02',
        k: 'Evolução segura',
        d: 'Carga progressiva, controle de PSE e prevenção de lesão.',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3L5 7.5V14c0 5.5 4 10.25 9 11.5 5-1.25 9-6 9-11.5V7.5L14 3z"/>
            <polyline points="9.5,14 12.5,17 18.5,11"/>
          </svg>
        ),
      },
    ],
  },
  {
    num: '02',
    label: 'O SUPORTE',
    desc: 'Consistência, feedback contínuo e força coletiva',
    benefits: [
      {
        num: '03',
        k: 'Acompanhamento real',
        d: 'Feedback semanal por treinador, ajustes finos quando precisa.',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="9" r="4"/>
            <path d="M3 25c0-4.42 3.58-8 8-8"/>
            <polyline points="18,17 20,19 25,14"/>
          </svg>
        ),
      },
      {
        num: '04',
        k: 'Comunidade ativa',
        d: 'Grupos por pace, treinos coletivos e suporte 7 dias.',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="8" r="3.5"/>
            <circle cx="19" cy="8" r="3.5"/>
            <path d="M2 25c0-3.87 3.13-7 7-7"/>
            <path d="M19 18c3.87 0 7 3.13 7 7"/>
            <path d="M10.5 17c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5V25H10.5V17z"/>
          </svg>
        ),
      },
    ],
  },
  {
    num: '03',
    label: 'O ÁPICE',
    desc: 'Performance máxima e experiências exclusivas',
    benefits: [
      {
        num: '05',
        k: 'Metas e provas',
        d: 'Calendário de provas, logística e estratégia de corrida.',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="14" cy="14" r="10"/>
            <circle cx="14" cy="14" r="5.5"/>
            <circle cx="14" cy="14" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
        ),
      },
      {
        num: '06',
        k: 'Eventos exclusivos',
        d: 'Camps, longões temáticos, workshops e palestras técnicas.',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="14,2.5 17.3,9.5 25,10.4 19.5,15.8 20.9,23.5 14,19.8 7.1,23.5 8.5,15.8 3,10.4 10.7,9.5"/>
          </svg>
        ),
      },
    ],
  },
];

interface BenefitsProps {
  accent?: string;
}

export default function Benefits({ accent = '#E30613' }: BenefitsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Começa a preencher quando o topo da seção atinge 65% da viewport
      const triggerPoint = windowHeight * 0.65;
      const containerHeight = rect.height;
      
      let calculatedProgress = 0;
      if (rect.top < triggerPoint) {
        const scrolledPx = triggerPoint - rect.top;
        calculatedProgress = (scrolledPx / containerHeight) * 100;
      }
      
      setProgress(Math.max(0, Math.min(100, calculatedProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Executa uma vez no início
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="beneficios">
      <div className="wrap">
        {/* Section header */}
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>03 / BENEFÍCIOS</div>
            <h2 className="sec-title">
              A jornada de<br />
              <span style={{ color: accent }}>evolução do atleta.</span>
            </h2>
          </div>
          <p className="journey-sub">
            Três fases.<br />Uma progressão.<br />Resultados reais.
          </p>
        </div>

        {/* Timeline container */}
        <div className="journey-wrap" ref={containerRef}>
          <div className="spine">
            <div className="spine-fill" style={{ height: `${progress}%`, background: accent }} />
          </div>

          {PHASES.map((phase, idx) => {
            const rev = idx % 2 !== 0;
            return (
              <div key={phase.num} className={`phase-row reveal${rev ? ' phase-rev' : ''}`}>

                {/* ── Label column ── */}
                <div className="phase-lbl">
                  <span className="phase-bg-num t-display" aria-hidden="true">{phase.num}</span>
                  <div className="phase-tag">
                    <span className="phase-dot" />
                    <span className="t-mono" style={{ color: accent, fontSize: 10, letterSpacing: '.25em' }}>
                      FASE {phase.num}
                    </span>
                  </div>
                  <div className="phase-name t-display">{phase.label}</div>
                  <div className="phase-desc">{phase.desc}</div>
                  <div className="phase-rule" />
                </div>

                {/* ── Center node ── */}
                <div className="node-col">
                  <div className="node-ring" />
                  <div className="node-dot" />
                </div>

                {/* ── Cards column ── */}
                <div className="cards-col">
                  {phase.benefits.map((b) => (
                    <div key={b.num} className="bcard">
                      <div className="bcard-line" />
                      <span className="bcard-corner bcard-tl" />
                      <span className="bcard-corner bcard-br" />
                      <span className="bcard-wm t-display" aria-hidden="true">{b.num}</span>
                      <div className="bcard-head">
                        <span className="bcard-icon">{b.icon}</span>
                        <span className="t-mono bcard-idx">B / {b.num}</span>
                      </div>
                      <div className="t-display bcard-title">{b.k}</div>
                      <p className="bcard-body">{b.d}</p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* ── Sub-heading ──────────────────────── */
        .journey-sub {
          font-family: var(--rf-font-mono);
          font-size: 11px;
          color: var(--rf-text-dim);
          letter-spacing: .12em;
          line-height: 1.9;
          text-transform: uppercase;
          text-align: right;
        }

        /* ── Timeline wrapper ─────────────────── */
        .journey-wrap {
          position: relative;
        }

        .spine {
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: var(--rf-line);
          pointer-events: none;
          z-index: 0;
        }

        .spine-fill {
          width: 100%;
          height: 0%;
          box-shadow: 0 0 10px ${accent}, 0 0 3px ${accent};
          transition: height 0.05s linear;
        }

        /* ── Phase row: 3 columns ─────────────── */
        .phase-row {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
          min-height: 310px;
          padding: 64px 0;
          border-bottom: 1px solid var(--rf-line);
          position: relative;
          z-index: 1;
        }
        .phase-row:last-child {
          border-bottom: none;
        }

        /* Reversed layout: swap label & cards */
        .phase-rev .phase-lbl  { order: 3; padding-right: 0; padding-left: 48px; }
        .phase-rev .node-col   { order: 2; }
        .phase-rev .cards-col  { order: 1; padding-left: 0; padding-right: 48px; }
        .phase-rev .phase-bg-num { left: auto; right: -20px; }
        .phase-rev .phase-rule { margin-left: auto; margin-right: 0; }

        /* ── Label column ─────────────────────── */
        .phase-lbl {
          position: relative;
          overflow: hidden;
          padding-right: 48px;
        }

        .phase-bg-num {
          position: absolute;
          left: -20px;
          top: -12px;
          font-size: clamp(96px, 12vw, 156px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -.05em;
          color: rgba(255, 255, 255, .028);
          pointer-events: none;
          user-select: none;
        }

        .phase-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .phase-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${accent};
          flex-shrink: 0;
        }

        .phase-name {
          font-size: clamp(30px, 3.8vw, 50px);
          line-height: .95;
          letter-spacing: -.025em;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .phase-desc {
          font-size: 12.5px;
          color: var(--rf-text-dim);
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .phase-rule {
          margin-top: 22px;
          width: 38px;
          height: 2px;
          background: ${accent};
          position: relative;
          z-index: 1;
        }

        /* ── Center node ──────────────────────── */
        .node-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100%;
        }

        .node-ring {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid ${accent};
          background: var(--rf-bg);
          z-index: 2;
        }

        .node-dot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${accent};
          z-index: 3;
        }

        /* ── Cards column ─────────────────────── */
        .cards-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-left: 48px;
        }

        /* ── Benefit card ─────────────────────── */
        .bcard {
          position: relative;
          overflow: hidden;
          background: var(--rf-dark);
          border: 1px solid var(--rf-line);
          padding: 28px 26px 24px;
          transition: background .25s ease, box-shadow .25s ease;
          cursor: default;
        }

        .bcard:hover {
          background: var(--rf-card);
          box-shadow:
            0 0 0 1px rgba(227, 6, 19, .12),
            0 12px 40px rgba(227, 6, 19, .06);
        }

        /* Top fill line */
        .bcard-line {
          position: absolute;
          top: 0; left: 0;
          height: 1.5px;
          width: 0;
          background: ${accent};
          transition: width .45s cubic-bezier(.2, .8, .2, 1);
          z-index: 1;
        }
        .bcard:hover .bcard-line { width: 100%; }

        /* Corner marks */
        .bcard-corner {
          position: absolute;
          width: 10px;
          height: 10px;
          border: 1.5px solid ${accent};
          opacity: 0;
          transition: opacity .25s ease;
          z-index: 1;
        }
        .bcard:hover .bcard-corner { opacity: 1; }
        .bcard-tl { top: -1px; left: -1px; border-right: 0; border-bottom: 0; }
        .bcard-br { bottom: -1px; right: -1px; border-left: 0; border-top: 0; }

        /* Background watermark number */
        .bcard-wm {
          position: absolute;
          bottom: -16px;
          right: 6px;
          font-size: 84px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -.05em;
          color: rgba(255, 255, 255, .032);
          pointer-events: none;
          user-select: none;
        }

        /* Icon + index row */
        .bcard-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .bcard-icon {
          color: ${accent};
          display: flex;
          align-items: center;
          transition: transform .25s cubic-bezier(.2, .8, .2, 1);
        }
        .bcard:hover .bcard-icon { transform: scale(1.08); }

        .bcard-idx {
          font-size: 10px;
          letter-spacing: .18em;
          color: rgba(255, 255, 255, .18);
        }

        .bcard-title {
          font-size: clamp(16px, 1.7vw, 21px);
          line-height: 1.0;
          margin-bottom: 10px;
          color: #fff;
        }

        .bcard-body {
          font-size: 13px;
          color: var(--rf-text-dim);
          line-height: 1.65;
          margin: 0;
        }

        /* ── Mobile ───────────────────────────── */
        @media (max-width: 768px) {
          .journey-sub {
            text-align: left;
          }

          /* Spine moves to the left edge */
          .spine {
            left: 15px;
            transform: none;
          }

          /* All rows become single-column, offset for spine */
          .phase-row,
          .phase-rev {
            display: block;
            padding: 44px 0 44px 44px;
            position: relative;
          }

          /* Override order for reversed rows */
          .phase-rev .phase-lbl,
          .phase-rev .node-col,
          .phase-rev .cards-col {
            order: unset;
          }

          /* Mobile timeline node via pseudo-elements */
          .phase-row::before {
            content: '';
            position: absolute;
            left: 5px; top: 52px;
            width: 18px; height: 18px;
            border-radius: 50%;
            border: 1.5px solid ${accent};
            background: var(--rf-bg);
            z-index: 2;
          }
          .phase-row::after {
            content: '';
            position: absolute;
            left: 11px; top: 58px;
            width: 6px; height: 6px;
            border-radius: 50%;
            background: ${accent};
            z-index: 3;
          }

          /* Hide center node column */
          .node-col { display: none; }

          /* Reset all directional padding */
          .phase-lbl,
          .phase-rev .phase-lbl {
            padding: 0 0 28px 0;
          }

          .cards-col,
          .phase-rev .cards-col {
            padding: 0;
          }

          /* Reset bg number position */
          .phase-bg-num,
          .phase-rev .phase-bg-num {
            left: -10px;
            right: auto;
            font-size: 80px;
          }

          .phase-rev .phase-rule {
            margin-left: 0;
            margin-right: auto;
          }

          .bcard-title { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
