"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  autostart?: boolean;
}

export default function Counter({ to, suffix = '', duration = 1800, autostart = false }: CounterProps) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to, duration]);

  useEffect(() => {
    if (autostart) {
      start();
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) start();
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [autostart, start]);

  return <span ref={ref}>{n.toLocaleString('pt-BR')}{suffix}</span>;
}
