# Plano de Implementação: Atualização de Testemunhos

Este documento descreve o plano para substituir os testemunhos "mockados" (falsos) por avaliações reais na seção de Prova Social (Social Proof) do site.

## 1. Objetivo

Atualizar o componente `components/sections/SocialProof.tsx` para exibir os depoimentos reais extraídos das capturas de tela fornecidas (avalições do Google).

## 2. Mudanças Propostas

### 2.1. Novo Ícone do Google/Estrelas
Atualmente, o componente exibe logos de marcas (Strava, Garmin, Nike, etc.). Como essas avaliações vieram do Google, iremos:
- Criar um componente SVG simples representando as 5 estrelas do Google ou a logo do Google para colocar no lugar das logos de marcas esportivas, reforçando que são avaliações autênticas.

### 2.2. Atualização dos Dados (Array `TESTIMONIES`)
Iremos substituir o array atual pelos seguintes depoimentos reais (selecionamos os mais descritivos das imagens):

1. **Evilly Tomaz Souza**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 1 avaliação
   - *Quote*: "Profissional incrível, sempre muito disposto, com um olhar atento e muita cautela no cuidado com o paciente. Ele é sinônimo de força, coragem e muita garra, um prazer ter um profissional como vc ao meu lado professor!!!"

2. **Leonardo Fontes**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 11 avaliações
   - *Quote*: "Excelente profissional! Tem uma grande bagagem de ensino e experiência, fruto de sua vida como atleta olímpico"

3. **Carlos Alberto Mora**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 9 avaliações
   - *Quote*: "Um atleta fora de serie, que tem uma historia de vida maravilhosa e que certamente empolga muitos de nós a procurarmos a excelencia"

4. **jose vilanir**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 5 avaliações
   - *Quote*: "Profissional sério, comprometido e apaixonado pelo que faz! Entende o objetivo de cada pessoa e traça um caminho real para chegar lá"

5. **Ana Paula Carino**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 1 avaliação
   - *Quote*: "Profissional competente, responsável e proativo."

6. **Deise Janovitz Gomes Dias**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 7 avaliações
   - *Quote*: "Experiência e compromisso com resultados!!"

7. **Ana Cláudia Lins de Melo**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 2 avaliações
   - *Quote*: "Esse eu indico de olho fechado!"

8. **Lenilson Marques**
   - *Tag*: 5 ESTRELAS
   - *Profissão/Subtítulo*: 4 avaliações
   - *Quote*: "Excelente, parabéns e muito obrigado! 👏"

*(Podemos adicionar todos os 13 das imagens se preferir, ou manter estes 8 que são os mais longos e expressivos, já que o slider se repete infinitamente).*

## 3. Arquivos Modificados
- `components/sections/SocialProof.tsx`: Substituição dos objetos no array `TESTIMONIES` e adição do ícone de estrelas ou do Google no rodapé de cada cartão.

## 4. Próximos Passos
Aguardando a sua aprovação deste plano. Se estiver de acordo, ou se quiser incluir todos os 13 depoimentos, é só me dar o ok e eu farei as alterações no código!
