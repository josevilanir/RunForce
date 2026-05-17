"use client";

import React from 'react';
import SpeedLines from "@/components/ui/SpeedLines";

interface HeroProps {
  headline?: 'main' | 'alt';
  accent?: string;
}

const HeadlineMain = ({ accent }: { accent: string }) => (
  <>
    <span className="hero-line" style={{ animationDelay: '.15s' } as any}>NÃO É SÓ CORRER.</span>
    <span className="hero-line" style={{ animationDelay: '.35s' } as any}>É <span style={{ color: accent }}>EVOLUIR</span></span>
    <span className="hero-line" style={{ animationDelay: '.55s' } as any}>TODOS OS DIAS.</span>
  </>
);

const HeadlineAlt = ({ accent }: { accent: string }) => (
  <>
    <span className="hero-line" style={{ animationDelay: '.15s' } as any}>DISCIPLINA QUE</span>
    <span className="hero-line" style={{ animationDelay: '.35s' } as any}><span style={{ color: accent }}>TRANSFORMA.</span></span>
    <span className="hero-line" style={{ animationDelay: '.55s' } as any}>FORÇA QUE MOVE.</span>
  </>
);

export default function Hero({ headline = 'main', accent = '#E30613' }: HeroProps) {
  const Headline = headline === 'alt' ? HeadlineAlt : HeadlineMain;

  return (
    <section className="hero-v3" style={{ borderTop: 'none' }}>
      {/* Diagonal red stripe — animated slide-in */}
      <div className="hero-stripe" style={{ background: accent }} aria-hidden />
      <div className="hero-stripe-edge" aria-hidden />
      <div className="hero-stripe-edge-thin" aria-hidden />

      {/* Speed lines over BG (white) */}
      <SpeedLines density={22} opacity={.5} color="rgba(255,255,255,.5)" />
      {/* Speed lines over stripe (dark) */}
      <div className="hero-stripe-mask">
        <SpeedLines density={18} opacity={.7} color="rgba(0,0,0,.45)" />
      </div>

      <div className="grain" />

      <div className="wrap hero-v3-wrap">
        <div className="hero-v3-grid">
          {/* LEFT — headline + CTAs */}
          <div className="hero-v3-left">
            <div className="t-eyebrow hero-eyebrow" style={{ color: accent }}>
              <span style={{ width: 36, height: 1, background: accent, display: 'inline-block' }}></span>
              ASSESSORIA DE CORRIDA / EST. 2026
            </div>
            <h1 className="t-display hero-v3-headline">
              <Headline accent={accent} />
            </h1>
            <p className="hero-v3-sub">
              Treinos inteligentes, estratégia e um time para te impulsionar a ir além. Da primeira passada à medalha, você não corre sozinho.
            </p>
            <div className="hero-v3-ctas">
              <a href="#planos" className="btn btn-primary hero-cta-primary" style={{ background: accent }}>
                Quero entrar para o time<span className="arr" />
              </a>
              <a href="#sobre" className="btn btn-ghost hero-cta-ghost">Conheça a assessoria</a>
            </div>
          </div>

          {/* RIGHT — mega number on stripe */}
          <div className="hero-v3-right">
            {/* Vertical text along edge */}
            <div className="hero-vert">RF/0001 — RUN HARD. RUN SMART. RUN TOGETHER.</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="hero-scroll-line" />
      </div>

      {/* Bottom marker bar */}
      <div className="hero-marker-bar">
        <span>RUNFORCE TEAM</span>
        <span className="dot" />
        <span>NATAL — BRASIL</span>
        <span className="dot" />
        <span>EST. 2026</span>
        <span className="dot" />
        <span>VOL. 2026</span>
      </div>

      <style jsx>{`
        @keyframes stripeIn { from{transform:translateX(110%) skewX(12deg)} to{transform:translateX(0) skewX(12deg)} }
        @keyframes stripeEdgeIn { from{transform:translateX(110%) skewX(12deg);opacity:0} to{transform:translateX(0) skewX(12deg);opacity:.18} }
        @keyframes stripeMobileIn { from{clip-path:polygon(100% 0,100% 0,100% 100%,100% 100%);opacity:0} to{clip-path:polygon(68% 0,100% 0,100% 100%,52% 100%);opacity:1} }
        @keyframes lineRise { 0%{transform:translateY(110%);opacity:0} 60%{opacity:1} 100%{transform:translateY(0);opacity:1} }
        @keyframes fadeUp { 0%{transform:translateY(20px);opacity:0} 100%{transform:translateY(0);opacity:1} }
        @keyframes scrollHint { 0%,100%{transform:scaleX(.4);transform-origin:left} 50%{transform:scaleX(1)} }
        @keyframes meganumIn { from{transform:translateY(40px) scale(.98);opacity:0;filter:blur(4px)} to{transform:translateY(0) scale(1);opacity:1;filter:blur(0)} }
        @keyframes pulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }
        @keyframes vertSlide { from{transform:translateX(20px);opacity:0} to{transform:translateX(0);opacity:.5} }
        @keyframes markerSlide { from{transform:translateY(100%)} to{transform:translateY(0)} }

        .hero-v3{
          position:relative;
          min-height:100vh;
          padding:160px 0 120px;
          display:flex;
          align-items:center;
          overflow:hidden;
        }

        .hero-stripe{
          position:absolute;
          top:-15%; right:-12%;
          width:62%; height:140%;
          transform:skewX(12deg);
          z-index:1;
          animation: stripeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .hero-stripe-edge,.hero-stripe-edge-thin{
          position:absolute; top:-15%; height:140%;
          background:#fff; transform:skewX(12deg); opacity:.18;
          z-index:2;
          animation: stripeEdgeIn 1.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .hero-stripe-edge{ right:50%; width:2px; }
        .hero-stripe-edge-thin{ right:48%; width:1px; opacity:.12; }
        .hero-stripe-mask{
          position:absolute; top:0; right:0; width:55%; height:100%;
          overflow:hidden; z-index:3; pointer-events:none;
          clip-path:polygon(0% 0, 100% 0, 100% 100%, 20% 100%);
        }

        .grain{position:absolute;inset:0;pointer-events:none;opacity:.04;background-image:radial-gradient(rgba(255,255,255,.6) 1px, transparent 1px);background-size:3px 3px;z-index:1}

        .hero-v3-wrap{ position:relative; z-index:5; width:100%; }
        .hero-v3-grid{
          display:grid;
          grid-template-columns: 1.05fr 1fr;
          gap:48px;
          align-items:center;
        }

        /* LEFT */
        .hero-eyebrow{ display:flex; align-items:center; gap:14px; margin-bottom:28px; animation: fadeUp 0.8s ease-out; }
        .hero-v3-headline{
          font-size:clamp(44px, 6.4vw, 104px);
          line-height:1.0;
          margin:0;
        }
        :global(.hero-v3-headline .hero-line) { 
          display:block; 
          overflow: hidden;
          animation: lineRise 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hero-v3-sub{
          margin-top:32px;
          font-size:18px;
          max-width:520px;
          color:#bdbdbd;
          line-height:1.55;
          animation: fadeUp 0.8s ease-out 0.6s both;
        }
        .hero-v3-ctas{
          display:flex; gap:16px; margin-top:36px; flex-wrap:wrap;
          animation: fadeUp 0.8s ease-out 0.8s both;
        }
        .hero-v3-ctas :global(.btn){
          height:48px;
          padding:0 28px;
          clip-path:none;
          border-radius:50px;
          font-size:16px;
        }
        .hero-cta-primary{ position:relative; overflow:hidden; }
        .hero-cta-primary::before{
          content:""; position:absolute; inset:0;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
          transform:translateX(-100%);
          animation:shimmer 3s ease 1.5s infinite;
          border-radius:inherit;
        }
        @keyframes shimmer { 0%,40%{transform:translateX(-100%)} 60%,100%{transform:translateX(100%)} }

        /* RIGHT — mega number */
        .hero-v3-right{
          position:relative;
          color:#fff;
          text-align:right;
          padding-right:16px;
        }
        .hero-meganum-label{
          display:flex; justify-content:flex-end; align-items:center; gap:12px;
          font-family:var(--rf-font-mono); font-size:11px; letter-spacing:.3em;
          text-transform:uppercase; margin-bottom:12px;
          animation: fadeUp 0.8s ease-out 0.4s both;
        }
        .meganum-slash{ color:#fff; opacity:.6 }
        .meganum-pulse{
          width:8px; height:8px; background:#fff; border-radius:50%;
          animation:pulse 1.6s ease-in-out infinite;
        }
        .hero-meganum{
          font-family:var(--rf-font-title);
          font-weight:700;
          font-size:clamp(140px, 22vw, 360px);
          line-height:.82;
          letter-spacing:-.02em;
          text-shadow: 0 8px 60px rgba(0,0,0,.4);
          display:flex; justify-content:flex-end; align-items:flex-start;
          animation: meganumIn 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both;
        }
        .meganum-plus{ font-size:.36em; margin-top:.08em; opacity:.95; }

        .hero-substats{
          display:flex; gap:28px; justify-content:flex-end; align-items:center;
          margin-top:-8px;
          animation: fadeUp 0.8s ease-out 0.6s both;
        }
        .hero-substat{ text-align:right }
        .hero-substat-n{
          font-family:var(--rf-font-title); font-weight:700; font-size:30px; line-height:1;
        }
        .hero-substat-l{
          font-family:var(--rf-font-mono); font-size:9.5px; letter-spacing:.22em;
          text-transform:uppercase; opacity:.85; margin-top:6px;
        }
        .hero-substat-div{ width:1px; height:36px; background:rgba(255,255,255,.4) }

        .hero-vert{
          position:absolute; left:-58px; top:0;
          transform:rotate(-90deg); transform-origin:left bottom;
          font-family:var(--rf-font-mono); font-size:10px; letter-spacing:.3em;
          color:rgba(255,255,255,.55); text-transform:uppercase;
          white-space:nowrap;
          animation: vertSlide 1.2s cubic-bezier(0.23, 1, 0.32, 1) 1s both;
        }

        /* SCROLL indicator */
        .hero-scroll{
          position:absolute; bottom:60px; left:50%; transform:translateX(-50%);
          font-family:var(--rf-font-mono); font-size:10px; letter-spacing:.3em;
          color:var(--rf-text-dim); display:flex; align-items:center; gap:12px;
          z-index:5;
        }
        .hero-scroll-line{
          width:28px; height:1px; background:var(--rf-text-dim);
          animation:scrollHint 2s ease-in-out infinite;
        }

        /* Bottom marker bar */
        .hero-marker-bar{
          position:absolute; left:0; right:0; bottom:0;
          padding:14px 40px;
          display:flex; gap:18px; align-items:center;
          font-family:var(--rf-font-mono); font-size:10px; letter-spacing:.22em;
          text-transform:uppercase; color:rgba(255,255,255,.7);
          border-top:1px solid rgba(255,255,255,.08);
          background:rgba(0,0,0,.4); backdrop-filter:blur(6px);
          z-index:6;
          animation: markerSlide 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1.2s both;
        }
        .hero-marker-bar .dot{ width:4px; height:4px; background:currentColor; border-radius:50%; opacity:.5 }

        /* ── Mobile ≤ 768px — split-screen diagonal ────────────────── */
        @media (max-width: 768px) {
          .hero-v3 {
            padding: 90px 0 56px;
            min-height: 100vh;
            align-items: center;
          }

          /*
           * Full-height diagonal stripe: clip-path gives pixel-precise control
           * over the boundary without displacement drift from skewX over tall sections.
           * Diagonal goes from 52 % (top-left) → 68 % (bottom-left), centred on the
           * 60 % column boundary of the 1.2 / 0.8 grid split.
           */
          .hero-stripe {
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
            transform: none;
            clip-path: polygon(68% 0, 100% 0, 100% 100%, 52% 100%);
            animation: stripeMobileIn 0.9s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .hero-stripe-edge, .hero-stripe-edge-thin { display: none; }

          /* Speed-lines mask follows the same diagonal boundary */
          .hero-stripe-mask {
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%; height: 100%;
            clip-path: polygon(68% 0, 100% 0, 100% 100%, 52% 100%);
          }

          /* Two-column layout — dark left / red right */
          .hero-v3-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 8px;
            align-items: center;
          }

          /* ─ Left column: headline, sub-text, buttons on the dark side ─ */
          .hero-v3-headline {
            font-size: clamp(32px, 9vw, 54px);
            line-height: 1.0;
          }

          .hero-eyebrow {
            font-size: 8.5px;
            letter-spacing: .12em;
            gap: 5px;
            margin-bottom: 14px;
            font-weight: 700;
          }
          /* Hide the decorative 36 px horizontal rule — too wide for the column */
          .hero-eyebrow :global(span:first-child) { display: none; }

          .hero-v3-sub {
            font-size: 11px;
            margin-top: 8px;
            max-width: 100%;
            line-height: 1.4;
            color: rgba(255,255,255,0.7);
          }

          /* Stack buttons vertically so they stay fully inside the dark column */
          .hero-v3-ctas {
            flex-direction: column;
            gap: 10px;
            margin-top: 16px;
          }
          .hero-v3-ctas :global(.btn) {
            width: 85%;
            justify-content: center;
            height: 30px;
            font-size: 10px;
            padding: 0 10px;
            border-radius: 50px;
            clip-path: none;
          }

          /* ─ Right column: numbers inside the red zone ─ */
          .hero-v3-right {
            text-align: right;
            padding-right: 8px;
            padding-left: 0;
            padding-top: 0;
          }

          .hero-meganum-label {
            justify-content: flex-end;
            font-size: 7px;
            letter-spacing: 0;
            gap: 4px;
            margin-bottom: 4px;
          }
          /* Slash "/" is decorative — remove to save width */
          .meganum-slash { display: none; }

          .hero-meganum {
            justify-content: flex-end;
            font-size: clamp(52px, 14vw, 88px);
            line-height: 0.88;
          }

          .hero-substats {
            justify-content: flex-end;
            gap: 8px;
            flex-wrap: nowrap;
            margin-top: 8px;
          }
          .hero-substat { text-align: right; }
          .hero-substat-n { font-size: 15px; }
          /* Labels are too wide for the column — hide, keep numbers + dividers */
          .hero-substat-l { display: none; }
          .hero-substat-div { height: 22px; }

          /* Vert text: along the far-right edge of the stats block */
          .hero-vert {
            display: block;
            left: auto;
            right: 0;
            top: 0;
            transform: rotate(90deg);
            transform-origin: right top;
            font-size: 7px;
            letter-spacing: .12em;
            opacity: 0.3;
            animation: none;
          }

          .hero-scroll { bottom: 44px; }

          .hero-marker-bar {
            padding: 10px 16px;
            gap: 10px;
            font-size: 8px;
            flex-wrap: wrap;
          }
          .hero-marker-bar .dot { display: none; }
        }

        /* ── Small mobile ≤ 560px ──────────────────────────────────── */
        @media (max-width: 560px) {
          /* Widen left column slightly, shift the diagonal to match */
          .hero-v3-grid { grid-template-columns: 1.35fr 0.65fr; gap: 6px; }

          /* Recalculate diagonal: centred on the new ~67 % column boundary */
          .hero-stripe { animation: none; clip-path: polygon(73% 0, 100% 0, 100% 100%, 57% 100%); }
          .hero-stripe-mask { clip-path: polygon(73% 0, 100% 0, 100% 100%, 57% 100%); }

          .hero-v3-headline { font-size: clamp(28px, 8vw, 42px); }
          .hero-meganum { font-size: clamp(40px, 13vw, 60px); }
          .hero-substat-n { font-size: 13px; }
          /* Dividers stay visible — they define the technical identity */
          .hero-substat-div { display: block; height: 20px; }
        }

        /* ── Very small ≤ 400px ────────────────────────────────────── */
        @media (max-width: 400px) {
          /* Give even more room to the headline at the expense of the stat column */
          .hero-v3-grid { grid-template-columns: 1.5fr 0.5fr; gap: 4px; }
          .hero-stripe { clip-path: polygon(78% 0, 100% 0, 100% 100%, 62% 100%); }
          .hero-stripe-mask { clip-path: polygon(78% 0, 100% 0, 100% 100%, 62% 100%); }
          .hero-meganum { font-size: clamp(34px, 11vw, 48px); }
          .hero-v3-headline { font-size: clamp(24px, 7vw, 36px); }
          .hero-substat-n { font-size: 12px; }
          .hero-substat-div { height: 18px; }
        }
      `}</style>
    </section>
  );
}
