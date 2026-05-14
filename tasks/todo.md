# RunForce Site — Task Tracker

## Fase 0 — Setup
- [x] Criar tasks/todo.md e tasks/lessons.md
- [x] Scaffoldar projeto Next.js 16 com TypeScript + Tailwind v4 + App Router
- [x] Instalar dependências: framer-motion, react-hook-form, lucide-react, zod
- [x] Configurar tokens CSS da marca em globals.css (@theme do Tailwind v4)
- [x] Importar Rajdhani e Montserrat via next/font/google no layout.tsx
- [x] Criar .env.local e já está no .gitignore (.env*)

## Fase 1 — Componentes Base
- [x] Button.tsx (variantes primary e secondary, funciona como button ou anchor)
- [x] Card.tsx
- [x] SectionTitle.tsx (h2 Rajdhani + underline vermelho + highlight opcional)
- [x] Divider.tsx (red/gray)
- [x] WhatsAppFloat.tsx (aparece após 400px de scroll, animado)
- [x] Header.tsx (sticky, transparente → escuro no scroll, hamburger mobile)
- [x] Footer.tsx (logo + redes + copyright)
- [x] Ícones SVG inline dos 5 pilares (Discipline, Focus, Team, Evolution, Performance)

## Fase 2 — Seções
- [x] 2.1 Hero (animações de entrada, diagonal speed lines, CTAs)
- [x] 2.2 Sobre a RunForce (layout 2 col, stats, placeholder foto)
- [x] 2.3 Para Quem É (4 cards de perfis)
- [x] 2.4 Benefícios (6 itens em grid)
- [x] 2.5 Pilares da Marca (5 pilares horizontal/vertical, hover animado)
- [x] 2.6 Planos / Metodologia (3 cards, plano destacado)
- [x] 2.7 Prova Social / Depoimentos (carrossel + grid placeholder)
- [x] 2.8 FAQ (accordion animado com AnimatePresence)
- [x] 2.9 Contato (WhatsApp CTA + formulário com react-hook-form + validação)

## Fase 3 — SEO, Performance e Acessibilidade
- [x] Metadata no layout.tsx (título, descrição, OG, Twitter)
- [x] robots.txt
- [x] sitemap.ts (via Next.js MetadataRoute)
- [x] prefers-reduced-motion em globals.css
- [ ] Alt descritivo nas imagens reais (aguardar assets do cliente)
- [ ] Favicon em múltiplos tamanhos (aguardar SVG do cliente)
- [ ] Teste Lighthouse em produção

## Fase 4 — Animações e Polimento
- [x] Scroll-driven reveals (whileInView) em todas as seções
- [x] Hover states nos cards com borda vermelha
- [x] WhatsApp flutuante animado (scale + fade)
- [x] prefers-reduced-motion respeitado
- [ ] Parallax leve no hero (desktop only) — opcional na iteração seguinte
- [ ] Contador animado nos stats (opcional)

## Fase 5 — Deploy
- [ ] Conectar repositório GitHub à Vercel
- [ ] Configurar variáveis de ambiente na Vercel
- [ ] Habilitar Vercel Analytics
- [ ] Configurar domínio customizado (aguardar cliente)
- [ ] Teste final em produção: mobile + desktop

## Pendências do cliente (assets)
- [ ] Logo SVG (principal, horizontal, ícone)
- [ ] Fotos oficiais (corredores, treinos, eventos)
- [ ] Textos finais: planos, valores, FAQ definitivo, depoimentos reais
- [ ] Número de WhatsApp com DDD
- [ ] @ do Instagram
