"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RFLogo = ({ small }: { small?: boolean } = {}) => (
  <div className="logo">
    <div className="mark" style={{ fontSize: small ? 20 : 24 }}>
      RUN<span className="red">FORCE</span>
    </div>
    <div className="tag">TEAM</div>
  </div>
);

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#pilares', label: 'Pilares' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#planos', label: 'Planos' },
  { href: '#prova', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
];

interface HeaderProps {
  accent?: string;
}

export default function Header({ accent = '#E30613' }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="hdr">
        <div className="hdr-inner">
          <Link href="/" style={{ textDecoration: 'none' }} onClick={close}>
            <RFLogo />
          </Link>

          <nav className="nav">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <div className="hdr-actions">
            <a href="#contato" className="cta hdr-cta" style={{ background: accent }}>
              Quero entrar
            </a>
            <button
              className="hdr-burger"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              <span className={`b-line b-top${open ? ' is-open' : ''}`} />
              <span className={`b-line b-mid${open ? ' is-open' : ''}`} />
              <span className={`b-line b-bot${open ? ' is-open' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`mob-menu${open ? ' mob-menu--open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Menu de navegação"
      >
        <nav className="mob-nav">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className="mob-link"
              style={{ '--delay': `${i * 55 + 60}ms` } as React.CSSProperties}
              onClick={close}
            >
              <span className="mob-link-num" style={{ color: accent }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {label}
            </a>
          ))}

          <div className="mob-footer">
            <a
              href="#contato"
              className="btn btn-primary mob-cta"
              style={{ background: accent }}
              onClick={close}
            >
              Quero entrar para o time <span className="arr" />
            </a>
            <div className="mob-tagline">RUN HARD. RUN SMART. RUN TOGETHER.</div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        /* ---- Actions wrapper ---- */
        .hdr-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* ---- Hamburger button ---- */
        .hdr-burger {
          display: none;
          width: 44px;
          height: 44px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, .15);
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }
        .b-line {
          display: block;
          width: 20px;
          height: 1.5px;
          background: #fff;
          transform-origin: center;
          transition: transform .3s cubic-bezier(.23, 1, .32, 1),
                      opacity .2s ease;
        }
        .b-top.is-open  { transform: translateY(6.5px) rotate(45deg); }
        .b-mid.is-open  { opacity: 0; transform: scaleX(0); }
        .b-bot.is-open  { transform: translateY(-6.5px) rotate(-45deg); }

        /* ---- Mobile menu overlay ---- */
        .mob-menu {
          position: fixed;
          inset: 0;
          top: 80px;
          background: rgba(5, 5, 5, .97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 90;
          opacity: 0;
          pointer-events: none;
          transition: opacity .28s cubic-bezier(.23, 1, .32, 1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mob-menu--open {
          opacity: 1;
          pointer-events: auto;
        }

        /* ---- Nav inside overlay ---- */
        .mob-nav {
          display: flex;
          flex-direction: column;
          padding: 8px 20px 48px;
          min-height: calc(100dvh - 80px);
          border-top: 1px solid rgba(255, 255, 255, .06);
        }
        .mob-link {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, .05);
          text-decoration: none;
          color: #fff;
          font-family: var(--rf-font-title);
          font-size: clamp(30px, 9vw, 46px);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -.01em;
          opacity: 0;
          transform: translateX(-14px);
          transition: opacity .35s cubic-bezier(.23, 1, .32, 1),
                      transform .35s cubic-bezier(.23, 1, .32, 1);
          transition-delay: 0ms;
        }
        .mob-menu--open .mob-link {
          opacity: 1;
          transform: translateX(0);
          transition-delay: var(--delay, 60ms);
        }
        .mob-link-num {
          font-family: var(--rf-font-mono);
          font-size: 11px;
          letter-spacing: .22em;
          min-width: 24px;
          opacity: .65;
        }

        /* ---- Footer area of mobile menu ---- */
        .mob-footer {
          margin-top: auto;
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          opacity: 0;
          transition: opacity .35s .38s;
        }
        .mob-menu--open .mob-footer {
          opacity: 1;
        }
        .mob-cta {
          width: 100%;
          justify-content: center;
          font-size: 16px;
          height: 52px;
        }
        .mob-tagline {
          font-family: var(--rf-font-mono);
          font-size: 10px;
          letter-spacing: .22em;
          color: rgba(255, 255, 255, .3);
          text-align: center;
          text-transform: uppercase;
        }

        /* ---- Responsive visibility ---- */
        @media (max-width: 768px) {
          .hdr-burger { display: flex; }
          .hdr-cta    { display: none; }
        }
      `}</style>
    </>
  );
}

export { RFLogo };
