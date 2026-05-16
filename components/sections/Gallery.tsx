"use client";

import React, { useRef } from 'react';

const GALLERY = [
  { tag: 'LONGÃO DE SÁBADO', ratio: '4/5' },
  { tag: 'PROVA 10K - PARQUE', ratio: '4/5' },
  { tag: 'TREINO DE TIRO', ratio: '4/5' },
  { tag: 'CAMP DE ALTITUDE', ratio: '4/5' },
  { tag: 'MEIA MARATONA', ratio: '4/5' }
];

interface GalleryProps {
  accent?: string;
}

export default function Gallery({ accent = '#E30613' }: GalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  
  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section id="galeria" style={{ background: '#000', paddingBottom: 80 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ color: accent }}>06 / GALERIA</div>
            <h2 className="sec-title">Bastidores<br />do <span style={{ color: accent }}>asfalto.</span></h2>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => scroll(-1)} style={{ width: 56, height: 56, border: '1px solid var(--rf-line-strong)', color: '#fff', fontSize: 20, background: 'transparent', cursor: 'pointer' }}>←</button>
            <button onClick={() => scroll(1)} style={{ width: 56, height: 56, border: '1px solid var(--rf-line-strong)', color: '#fff', fontSize: 20, background: 'transparent', cursor: 'pointer' }}>→</button>
          </div>
        </div>
      </div>
      <div ref={trackRef} className="gal-track reveal" style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '0 40px 24px', scrollbarWidth: 'none' }}>
        {GALLERY.map((g, i) => (
          <div key={i} className="ph" style={{ width: 340, aspectRatio: g.ratio, flexShrink: 0 }}>
            <div className="ph-corner tl" />
            <div className="ph-corner br" />
            <div className="ph-tag">FOTO • {g.tag}</div>
            <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--rf-font-mono)', fontSize: 10, color: accent, letterSpacing: '.2em' }}>#{String(i+1).padStart(3,'0')}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .gal-track::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .gal-track {
            padding: 0 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
