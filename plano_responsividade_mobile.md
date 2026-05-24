# Plano de Implementação: Responsividade Mobile (Sessão Inicial)

Este plano detalha as etapas e ajustes necessários para garantir que as recentes alterações na sessão inicial do projeto (Header e Hero Custom) estejam perfeitamente adequadas, acessíveis e responsivas em dispositivos móveis.

## 1. Ajustes no Cabeçalho (Header)
**Arquivos envolvidos:** `components/layout/Header.tsx` e regras globais de CSS.
- **Menu Hamburguer e Overlay**:
  - Garantir que o container do menu mobile (`.mob-menu`) tenha rolagem adequada (`overflow-y: auto` e `-webkit-overflow-scrolling: touch`) para telas pequenas na vertical, evitando que opções de navegação fiquem inacessíveis.
- **Logotipo Adaptável**:
  - Reduzir as dimensões do logotipo (`<RFLogo />`) e ocultar ou simplificar a "tag" (TEAM) em resoluções muito estreitas (< 400px) para evitar encavalamento com o botão hamburguer.
- **Áreas de Toque (Touch Targets)**:
  - Assegurar que o botão do hamburguer e os links de navegação dentro do menu mobile mantenham uma área clicável de pelo menos 48x48px (Padrão de Acessibilidade da Apple/Google).

## 2. Ajustes na Sessão Inicial (Hero Custom)
**Arquivos envolvidos:** `components/sections/Hero.tsx` e `app/landing.css`.
- **Tipografia e Quebra de Linha Dinâmica**:
  - Refinar as funções `clamp()` do `.hero-custom-headline` e do texto gigante de fundo (`.hero-custom-giant-text`) para telas extremamente pequenas (ex: 320px - iPhone SE), garantindo que os textos não quebrem o layout ou fiquem com um tamanho ilegível.
- **Geometria de Fundo (Clip-Path)**:
  - Ajustar o comportamento do `.hero-custom-bg-right` em breakpoints menores (ex: <= 768px). A divisão diagonal deve ser adaptada ou removida para que o conteúdo em texto permaneça 100% legível com o contraste correto.
- **Reposicionamento do Badge (`.hero-custom-badge`)**:
  - Em telas mobile, o badge atualmente cai para `bottom: 120px`. É necessário garantir que ele não se sobreponha aos botões de ação ou setas laterais. Se o espaço vertical for limitado, avaliar escalonar seu tamanho ou reposicioná-lo no fluxo normal da página.
- **Navegação (Setas Laterais e Botões)**:
  - **Setas:** Em dispositivos móveis, as setas fixadas nas laterais (`left/right: 40px`) consomem muito espaço de tela. Considerar ocultá-las (habilitando navegação apenas por 'swipe') ou reduzi-las e movê-las para próximo ao indicador de progresso no rodapé da sessão.
  - **Call To Action (CTA):** Garantir que os botões `.hero-custom-btn` adotem `width: 100%` e empilhem (`flex-direction: column`) abaixo de 480px, facilitando o clique com o polegar.

## 3. Melhorias Globais e de Experiência Mobile
- **Viewport Dinâmico**:
  - Alterar configurações de altura de `min-height: 100vh` para `min-height: 100dvh` onde aplicável. Isso evita que a barra de endereços do Safari/Chrome no mobile esconda elementos posicionados na parte inferior (como o indicador de progresso e as setas).
- **Safe Area Insets**:
  - Utilizar propriedades como `padding-bottom: env(safe-area-inset-bottom)` para evitar que o conteúdo crucial fique sob a barra de gestos inferior dos iPhones modernos (Home Indicator).
- **Otimização de Animações**:
  - Em telas mobile, transições e blur excessivos (`backdrop-filter`) podem causar perda de performance em celulares mais antigos. Testar e, se necessário, utilizar media queries de `@media (prefers-reduced-motion)` ou simplificar o fundo do header mobile.

## 4. Plano de Validação e Testes
1. **Emuladores do DevTools:** Passar a tela em 3 breakpoints principais: `320px` (aparelhos pequenos), `390px` (aparelhos médios comuns) e `768px` (tablets/foldables).
2. **Device Testing (Teste Real):** Abrir o ambiente local (`192.168.x.x:3000`) em smartphones (iOS e Android) para testar a sensação ao toque, ergonomia do menu e comportamento do teclado virtual / barras de navegação nativas.
3. **Auditoria Lighthouse:** Rodar relatório focado em "Mobile" para detectar problemas de contraste, tamanho de elementos interativos e tempos de renderização das animações do Hero.
