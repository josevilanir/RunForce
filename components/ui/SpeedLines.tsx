"use client";

import React from 'react';

interface SpeedLinesProps {
  density?: number;
  opacity?: number;
  color?: string;
}

export default function SpeedLines({ density = 22, opacity = .35, color = 'rgba(255,255,255,.6)' }: SpeedLinesProps) {
  const lines = [];
  for (let i = 0; i < density; i++) {
    const top = (i / density) * 100 + (Math.sin(i) * 4);
    const delay = (i * 0.18) % 6;
    const dur = 6 + (i % 4) * 1.5;
    const width = 30 + (i % 5) * 18;
    lines.push(
      <div key={i} style={{
        position: 'absolute',
        top: `${top}%`,
        left: '-20%',
        height: '1px',
        width: `${width}%`,
        background: `linear-gradient(90deg, transparent, ${color} 50%, transparent)`,
        transform: 'rotate(-8deg)',
        animation: `speedline ${dur}s linear infinite`,
        animationDelay: `-${delay}s`,
        opacity: opacity * (0.4 + (i % 3) * 0.3)
      }} />
    );
  }
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <style>{`
        @keyframes speedline {
          from { transform: translateX(-30%) rotate(-8deg); }
          to { transform: translateX(140%) rotate(-8deg); }
        }
      `}</style>
      {lines}
    </div>
  );
}
