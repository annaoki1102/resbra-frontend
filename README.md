# RESBRA — Registro Espacial Brasileiro

## Descrição institucional
O RESBRA (Registro Espacial Brasileiro) é uma plataforma digital para apoio ao registro, monitoramento, visualização geoespacial e gestão de operações espaciais brasileiras. O projeto apresenta uma interface web institucional voltada à organização e comunicação de informações estratégicas do setor espacial nacional.

## Objetivos da plataforma
- Consolidar, em um ambiente único, informações relacionadas a ativos e operações espaciais brasileiras.
- Apoiar processos de registro e governança com visão integrada dos dados.
- Disponibilizar visualizações de contexto geoespacial para leitura técnica e institucional.
- Estruturar uma base evolutiva para funcionalidades operacionais futuras.

## Principais funcionalidades
- Página institucional com seções temáticas sobre o RESBRA.
- Header responsivo com navegação principal para conteúdos da página.
- Blocos de conteúdo para capacidades, governança, centro de controle e ecossistema institucional.
- Área visual de dashboard com indicadores e representação geoespacial.
- Rodapé institucional com informações de contexto do projeto.

## Tecnologias utilizadas
- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- Lucide React (ícones)
- Componentes utilitários baseados em Radix UI (estrutura UI já presente no projeto)

## Estrutura do projeto
```text
.
+- src/
¦  +- app/
¦  ¦  +- components/
¦  ¦  +- App.tsx
¦  +- imports/
¦  +- styles/
¦  +- main.tsx
+- index.html
+- package.json
+- vite.config.ts
+- README.md
```

## Como rodar localmente
### Pré-requisitos
- Node.js 18+ (recomendado)
- npm (ou outro gerenciador compatível)

### Passos
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse a aplicação no endereço exibido pelo Vite (normalmente `http://localhost:5173`).

## Scripts disponíveis
- `npm run dev`: inicia o ambiente de desenvolvimento com Vite.
- `npm run build`: gera a build de produção.

## Organização das pastas
- `src/app`: núcleo da aplicação React.
- `src/app/components`: componentes de interface e seções da página.
- `src/app/components/ui`: componentes utilitários de UI.
- `src/imports`: ativos estáticos (imagens e recursos visuais).
- `src/styles`: folhas de estilo globais, tema e integração com Tailwind.
- `guidelines`: documentação auxiliar de diretrizes do projeto.

## Futuras implementações
- Integração de dados reais para indicadores operacionais.
- Evolução da navegação para rotas dedicadas por módulo funcional.
- Camadas adicionais de autenticação e perfis de acesso.
- Consolidação de fluxos de registro e acompanhamento de ativos.
- Ampliação de painéis analíticos e filtros geoespaciais.

## Licença
Este projeto ainda não possui licença pública definida.

## Créditos institucionais
- Agência Espacial Brasileira (AEB)
- Ministério da Ciência, Tecnologia e Inovação (MCTI)
- Instituto Nacional de Pesquisas Espaciais (INPE)

Projeto de interface institucional para o contexto do Registro Espacial Brasileiro (RESBRA).
