"use client";

import React from 'react';
import Counter from "@/components/ui/Counter";
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
              ASSESSORIA DE CORRIDA / EST. 2021
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
            <div className="hero-meganum-label">
              <span className="meganum-slash">/</span>
              <span>ATLETAS NO TIME</span>
              <span className="meganum-pulse" />
            </div>
            <div className="hero-meganum">
              <Counter to={240} duration={2200} autostart />
              <span className="meganum-plus">+</span>
            </div>
            <div className="hero-substats">
              <div className="hero-substat">
                <div className="hero-substat-n"><Counter to={142} duration={2400} autostart /></div>
                <div className="hero-substat-l">MEDALHAS 2025</div>
              </div>
              <div className="hero-substat-div" />
              <div className="hero-substat">
                <div className="hero-substat-n"><Counter to={97} suffix="%" duration={2000} autostart /></div>
                <div className="hero-substat-l">RENOVAÇÃO</div>
              </div>
              <div className="hero-substat-div" />
              <div className="hero-substat">
                <div className="hero-substat-n"><Counter to={38} duration={2200} autostart /></div>
                <div className="hero-substat-l">PROVAS</div>
              </div>
            </div>
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
        <span>SÃO PAULO — BRASIL</span>
        <span className="dot" />
        <span>EST. 2021</span>
        <span className="dot" />
        <span>VOL. 2026</span>
      </div>

      <style jsx>{`
        @keyframes stripeIn { from{transform:translateX(110%) skewX(-12deg)} to{transform:translateX(0) skewX(-12deg)} }
        @keyframes stripeEdgeIn { from{transform:translateX(110%) skewX(-12deg);opacity:0} to{transform:translateX(0) skewX(-12deg);opacity:.18} }
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
          transform:skewX(-12deg);
          z-index:1;
          animation: stripeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .hero-stripe-edge,.hero-stripe-edge-thin{
          position:absolute; top:-15%; height:140%;
          background:#fff; transform:skewX(-12deg); opacity:.18;
          z-index:2;
          animation: stripeEdgeIn 1.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .hero-stripe-edge{ right:50%; width:2px; }
        .hero-stripe-edge-thin{ right:48%; width:1px; opacity:.12; }
        .hero-stripe-mask{
          position:absolute; top:0; right:0; width:55%; height:100%;
          overflow:hidden; z-index:3; pointer-events:none;
          clip-path:polygon(20% 0, 100% 0, 100% 100%, 0 100%);
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
        .hero-cta-primary{ position:relative; }
        .hero-cta-primary::before{
          content:""; position:absolute; inset:0;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
          transform:translateX(-100%);
          animation:shimmer 3s ease 1.5s infinite;
          clip-path:polygon(0 0, 100% 0, 96% 100%, 0 100%);
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

        /* Responsive */
        @media (max-width: 768px){
          .hero-v3{ padding:130px 0 100px; min-height:auto; }
          .hero-v3-grid{ grid-template-columns: 1fr; gap:32px; }
          .hero-stripe{ width:70%; right:-20%; height:100%; top:0; bottom:0; transform:skewX(-10deg); transform-origin: top right; }
          .hero-stripe-edge,.hero-stripe-edge-thin{ display:none }
          .hero-stripe-mask{ width:70%; height:100%; top:0; right:-20%; clip-path:none; }
          .hero-v3-right{ text-align:left; padding-right:0; padding-top:32px; }
          .hero-meganum{ justify-content:flex-start; font-size:clamp(120px, 32vw, 220px); }
          .hero-substats{ justify-content:flex-start; gap:18px }
          .hero-substat{ text-align:left }
          .hero-vert{ display:none }
          .hero-marker-bar{ padding:12px 20px; gap:12px; font-size:9px; flex-wrap:wrap }
          .hero-marker-bar .dot{ display:none }
        }
        @media (max-width: 560px){
          .hero-substats{ flex-wrap:wrap; gap:14px }
          .hero-substat-div{ display:none }
          .hero-substat-n{ font-size:24px }
        }
      `}</style>
    </section>
  );
}
