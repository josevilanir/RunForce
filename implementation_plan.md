# Plano de Implementação — Site RunForce Team

> Stack decidida via Stack Decision Framework do `CLAUDE.md`:
> Landing page com identidade visual forte, animações e scroll-driven effects → **Next.js + Framer Motion + Vercel**

---

## Visão Geral

| Item       | Decisão                                        |
| ---------- | ---------------------------------------------- |
| Stack      | Next.js 14 (App Router) + Framer Motion        |
| Estilo     | Tailwind CSS + CSS Variables (tokens da marca) |
| Deploy     | Vercel                                         |
| Fontes     | Rajdhani Bold + Montserrat (Google Fonts)      |
| Formulário | React Hook Form + API Route do Next.js         |
| Imagens    | `next/image` com compressão automática         |
| SEO        | Metadata API do Next.js + Open Graph           |
| Analytics  | Vercel Analytics (zero config)                 |

---

## Fase 0 — Setup do Projeto

**Objetivo:** repositório funcional com design system da marca configurado.

### Tarefas

- [ ] `npx create-next-app@latest runforce-site --typescript --tailwind --app --eslint`
- [ ] Instalar dependências: `framer-motion`, `react-hook-form`, `lucide-react`
- [ ] Criar `tasks/todo.md` e `tasks/lessons.md` (conforme CLAUDE.md)
- [ ] Configurar tokens CSS da marca em `globals.css`:

```css
:root {
  --rf-red: #e30613;
  --rf-white: #ffffff;
  --rf-black: #000000;
  --rf-dark: #1a1a1a;
  --rf-gray: #6b6b6b;
  --rf-font-title: "Rajdhani", "Montserrat", Arial, sans-serif;
  --rf-font-body: "Montserrat", Arial, sans-serif;
}
```

- [ ] Configurar `tailwind.config.ts` com as cores da marca como tokens:

```ts
extend: {
  colors: {
    'rf-red': '#E30613',
    'rf-dark': '#1A1A1A',
    'rf-gray': '#6B6B6B',
  },
  fontFamily: {
    title: ['Rajdhani', 'Montserrat', 'sans-serif'],
    body: ['Montserrat', 'sans-serif'],
  }
}
```

- [ ] Importar Rajdhani e Montserrat via `next/font/google` no `layout.tsx`
- [ ] Criar `.env.local` + adicionar ao `.gitignore`
- [ ] Criar `CLAUDE.md` na raiz do projeto (copiar o arquivo padrão)
- [ ] Solicitar ao cliente os assets oficiais: SVG da logo (principal, horizontal, ícone), fotos e textos finais

**Commit:** `chore: initial project setup with brand tokens and fonts`

---

## Fase 1 — Componentes Base (Design System)

**Objetivo:** construir os blocos reutilizáveis antes de qualquer seção.

> ⚠️ Seguindo a regra de Componentização do CLAUDE.md: componentes com responsabilidade única, nunca God Components.

### Estrutura de pastas

```
src/
  components/
    ui/
      Button.tsx         # Primário (vermelho) e Secundário (borda branca)
      Card.tsx           # Fundo #1A1A1A, borda vermelha fina
      SectionTitle.tsx   # Título em Rajdhani bold + underline vermelho
      Divider.tsx        # Linha fina vermelha ou cinza
      Badge.tsx          # Selo/tag da marca
    layout/
      Header.tsx         # Nav com logo horizontal + links
      Footer.tsx         # Logo + redes sociais + copyright
    sections/            # Seções da landing page (Fase 2)
    icons/               # Ícones SVG dos 5 pilares (inline)
```

### Tarefas

- [ ] `Button.tsx` — variantes `primary` e `secondary`, com `asChild` para links externos
- [ ] `Card.tsx` — fundo `rf-dark`, borda `rf-red` com opacidade 35%
- [ ] `SectionTitle.tsx` — `h2` em Rajdhani uppercase + palavra-chave em vermelho configurável
- [ ] `Divider.tsx` — linha horizontal fina, variante red/gray
- [ ] `Header.tsx` — logo horizontal, links âncora para seções, botão CTA fixo em mobile
- [ ] `Footer.tsx` — logo principal + links de contato + créditos
- [ ] Criar ícones SVG inline para os 5 pilares: Disciplina, Foco, Equipe, Evolução, Performance

**Commit:** `feat(ui): add base component library with brand design system`

---

## Fase 2 — Seções da Landing Page

**Objetivo:** montar todas as seções conforme a estrutura do guia técnico.

> Cada seção é um componente isolado em `components/sections/`. Nenhuma seção deve ter mais de ~150 linhas.

### 2.1 — Hero

- [ ] Background preto com foto de corredor (overlay escuro + toque vermelho)
- [ ] Logo principal centralizada (SVG)
- [ ] Headline: **"Não é só correr. É evoluir todos os dias."** — Rajdhani bold, branco, com "evoluir" em vermelho
- [ ] Subtítulo em Montserrat
- [ ] CTA principal: "Quero entrar para o time" (botão vermelho → âncora para contato)
- [ ] CTA secundário: "Conheça a assessoria" (botão borda branca → âncora para #sobre)
- [ ] Animação de entrada com Framer Motion: fade + slide-up nos elementos
- [ ] Linhas de velocidade diagonais em SVG como elemento decorativo

**Commit:** `feat(hero): add hero section with entry animations`

### 2.2 — Sobre a RunForce

- [ ] Texto institucional: _"A RunForce Team é uma assessoria de corrida que transforma vidas..."_
- [ ] Layout com destaque visual: bloco escuro + borda vermelha lateral
- [ ] Animação: slide-in ao entrar na viewport (Framer Motion `whileInView`)

**Commit:** `feat(about): add about section`

### 2.3 — Para Quem É

- [ ] Grid de cards (4 perfis): Iniciantes / Em evolução / Performance / Competições
- [ ] Cada card: ícone + título + descrição curta
- [ ] Cards em `rf-dark` com hover de borda vermelha animado

**Commit:** `feat(audience): add target audience section`

### 2.4 — Benefícios

- [ ] Lista visual de 6 benefícios: treinos estruturados, evolução segura, acompanhamento, comunidade, metas, eventos
- [ ] Layout em grid 2 ou 3 colunas
- [ ] Ícones lineares brancos/vermelhos

**Commit:** `feat(benefits): add benefits section`

### 2.5 — Pilares da Marca

- [ ] 5 pilares: Disciplina / Foco / Equipe / Evolução / Performance
- [ ] Cada pilar: ícone SVG + nome em Rajdhani + frase descritiva
- [ ] Layout horizontal em desktop, vertical em mobile
- [ ] Textos dos pilares conforme guia técnico (ex: "Fazemos o que precisa ser feito, todos os dias.")

**Commit:** `feat(pillars): add brand pillars section`

### 2.6 — Planos / Metodologia

- [x] Cards de planos atualizados com textos e valores reais (Start: 89,00, Performance: 149,00, Premium: 249,00)
- [x] Renderização de preços implementada com destaque visual
- [ ] Botão "Quero entrar para o time" em cada card

**Commit:** `feat(plans): add plans/methodology section`

### 2.7 — Prova Social / Depoimentos

- [ ] Carrossel simples de depoimentos (Framer Motion ou CSS puro)
- [ ] Espaço para fotos de treinos e eventos (grid de imagens com overlay)
- [ ] Placeholder visual enquanto conteúdo não chega

**Commit:** `feat(social-proof): add testimonials and photo gallery section`

### 2.8 — FAQ

- [ ] Accordion interativo com Framer Motion (expand/collapse animado)
- [ ] Perguntas sobre: nível necessário, frequência, treinos, acompanhamento, inscrição
- [ ] Textos placeholder — solicitar conteúdo final ao cliente

**Commit:** `feat(faq): add animated FAQ section`

### 2.9 — Contato

- [ ] Botão de WhatsApp com mensagem pré-preenchida (link `wa.me` com texto encoded)
- [ ] Formulário simples: Nome, E-mail, Mensagem — via React Hook Form
- [ ] API Route `app/api/contact/route.ts` para processar o form
- [ ] Links para Instagram e outros contatos
- [ ] Localização (se fornecida pelo cliente)

**Commit:** `feat(contact): add contact section with WhatsApp CTA and form`

---

## Fase 3 — SEO, Performance e Acessibilidade

**Objetivo:** site pronto para produção, carregando rápido e bem indexado.

- [ ] Configurar `metadata` no `layout.tsx`: título, descrição, Open Graph, Twitter Card
- [ ] Adicionar `alt` descritivo em todas as imagens (`next/image`)
- [ ] Garantir contraste WCAG AA entre texto e fundo (principalmente sobre imagens)
- [ ] Compressão de imagens: usar formatos `.webp` ou `.avif` via `next/image`
- [ ] Testar Lighthouse: metas → Performance ≥ 90, Accessibility ≥ 90, SEO = 100
- [ ] Adicionar `robots.txt` e `sitemap.xml` (plugin `next-sitemap`)
- [ ] Favicon: 32x32, 48x48 e 512x512 (solicitar ao cliente o ícone em SVG)
- [ ] Testar em mobile (iOS + Android) — prioridade conforme guia (acesso via Instagram/WhatsApp)

**Commit:** `chore(seo): add metadata, OG tags, sitemap and favicon`

---

## Fase 4 — Animações Finais e Polimento

**Objetivo:** dar vida ao visual esportivo com movimento controlado.

- [ ] Scroll-driven reveals em todas as seções (`whileInView` + `viewport once`)
- [ ] Animação de contador nos números de performance (se houver stats)
- [ ] Efeito parallax leve no hero (apenas desktop)
- [ ] Hover states nos cards com borda vermelha e escala sutil
- [ ] Transição suave no botão WhatsApp flutuante (aparece após scroll)
- [ ] Garantir que animações pesadas sejam desativadas via `prefers-reduced-motion`

> ⚠️ Guia técnico alerta: "a marca pode ter movimento, mas o site precisa carregar rápido."

**Commit:** `feat(animations): add scroll-driven reveals and micro-interactions`

---

## Fase 5 — Deploy na Vercel

- [ ] Conectar repositório GitHub à Vercel
- [ ] Configurar variáveis de ambiente na Vercel (se houver — ex: email do formulário, WhatsApp number)
- [ ] Habilitar Vercel Analytics
- [ ] Configurar domínio customizado (solicitar ao cliente)
- [ ] Teste final em produção: mobile + desktop, todos os links, formulário e WhatsApp

**Commit:** `chore(deploy): configure vercel project and environment variables`

---

## Checklist de Assets — Solicitar ao Cliente

Antes de finalizar qualquer seção visual, confirmar que os itens abaixo foram recebidos:

- [ ] Logo principal em SVG (fundo transparente)
- [ ] Logo horizontal em SVG (fundo transparente)
- [ ] Ícone/símbolo isolado em SVG (para favicon e botões)
- [ ] Versão monocromática/negativa para fundos claros
- [ ] Favicon 32x32, 48x48 e 512x512
- [ ] Fotos oficiais de corredores e treinos (ou autorização para banco de imagens licenciado)
- [x] Textos finais: planos, FAQ, depoimentos, contato, localização
- [x] Número de WhatsApp com DDD
- [x] @ do Instagram e outras redes
- [x] Texto e frases dos planos/metodologia

---

## Referências de Texto (do Guia Técnico)

| Uso                  | Texto                                                                     |
| -------------------- | ------------------------------------------------------------------------- |
| Headline principal   | Não é só correr. É evoluir todos os dias.                                 |
| Headline alternativa | Disciplina que transforma. Força que move.                                |
| Subtítulo            | Treinos inteligentes, estratégia e um time para te impulsionar a ir além. |
| CTA principal        | Quero entrar para o time                                                  |
| CTA secundário       | Conheça a assessoria                                                      |
| Frase institucional  | Mais que corrida. É transformação.                                        |
| Pilar disciplina     | Fazemos o que precisa ser feito, todos os dias.                           |
| Pilar foco           | Objetivo claro, mente forte, sem distrações.                              |
| Pilar equipe         | Juntos somos mais fortes. Um time que te impulsiona.                      |
| Pilar evolução       | Pequenas escolhas, grandes mudanças.                                      |
| Pilar performance    | Treino inteligente para entregar resultados de verdade.                   |

---

## Ordem de Execução Resumida

```
Fase 0 → Setup + tokens da marca
Fase 1 → Componentes base (Button, Card, Header, Footer, Ícones)
Fase 2 → Seções (Hero → Sobre → Para Quem → Benefícios → Pilares → Planos → Prova Social → FAQ → Contato)
Fase 3 → SEO, performance, acessibilidade
Fase 4 → Animações e polimento visual
Fase 5 → Deploy na Vercel
```
