"use client";

import React from 'react';

interface TickerItem {
  text: string;
  outline?: boolean;
}

interface TickerProps {
  items: TickerItem[];
  accent?: string;
}

export default function Ticker({ items, accent = '#E30613' }: TickerProps) {
  return (
    <div className="marquee" style={{ background: '#000' }}>
      <div className="marquee-track">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="marquee-item">
            {it.outline ? <span className="outline">{it.text}</span> : <span>{it.text}</span>}
            <span className="star" style={{ color: accent }}>✱</span>
          </div>
        ))}
      </div>
    </div>
  );
}
