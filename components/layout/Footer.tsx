"use client";

import React from 'react';
import { RFLogo } from "./Header";

interface FooterProps {
  accent?: string;
}

const FootCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <div className="t-mono">{title}</div>
    <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'grid', gap: 10 }}>
      {links.map(l => <li key={l}><a href="#" style={{ color: '#999', fontSize: 14, textDecoration: 'none' }}>{l}</a></li>)}
    </ul>
  </div>
);

export default function Footer({ accent = '#E30613' }: FooterProps) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <RFLogo />
            <div style={{ marginTop: 20, fontFamily: 'var(--rf-font-mono)', fontSize: 11, color: 'var(--rf-text-dim)', letterSpacing: '.2em' }}>
              MAIS QUE CORRIDA. <span style={{ color: accent }}>É TRANSFORMAÇÃO.</span>
            </div>
            <div style={{ marginTop: 32, color: '#666', fontSize: 13, maxWidth: 380 }}>
              Assessoria de corrida fundada em 2026. CREF 012345-G/RN. Natal — Brasil.
            </div>
          </div>
          <FootCol title="NAVEGAÇÃO" links={['Sobre', 'Pilares', 'Benefícios', 'Planos', 'Galeria']} />
          <FootCol title="LEGAL" links={['Termos', 'Privacidade', 'Política de cancelamento']} />
          <FootCol title="REDES" links={['Instagram', 'WhatsApp', 'Strava', 'YouTube']} />
        </div>
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--rf-line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontFamily: 'var(--rf-font-mono)', fontSize: 10, color: 'var(--rf-text-dim)', letterSpacing: '.2em' }}>
          <span>© 2026 RUNFORCE TEAM</span>
          <span>RUN HARD. RUN SMART. RUN TOGETHER.</span>
        </div>
      </div>
    </footer>
  );
}
