import type { TranslationSchema } from './types';

export const pt: TranslationSchema = {
  header: {
    logoAlt: 'Agência Espacial Brasileira',
    nav: {
      about: 'Sobre o RESBRA',
      registry: 'Registro Espacial',
      services: 'Serviços',
      data: 'Dados e Estatísticas',
    },
    searchPlaceholder: 'Buscar ...',
  },
  hero: {
    title: 'Registro e governança das atividades espaciais brasileiras',
    descriptionLine1: 'Plataforma nacional de monitoramento, licenciamento e governança de operações espaciais.',
    descriptionLine2: 'Gestão integrada de ativos orbitais brasileiros.',
    primaryCta: 'Acessar plataforma',
    secondaryCta: 'Conheça o RESBRA',
  },
  institutional: {
    title: 'Regulamentação e governança espacial',
    paragraphs: [
      'O RESBRA é a infraestrutura nacional para registro, monitoramento e licenciamento de operações espaciais brasileiras, desenvolvido pela Agência Espacial Brasileira em conformidade com tratados internacionais e marcos regulatórios nacionais.',
      'A plataforma integra dados de múltiplas fontes governamentais, centros de pesquisa e operadores privados, fornecendo uma visão unificada dos ativos espaciais do Brasil e suas trajetórias orbitais.',
      'Através de tecnologias avançadas de análise geoespacial e inteligência de dados, o sistema garante a conformidade regulatória, segurança orbital e suporte à tomada de decisões estratégicas no setor espacial brasileiro.',
    ],
    signature: 'Agência Espacial Brasileira',
    imageAlt: 'Satélite sobre a Terra',
  },
  capabilities: {
    title: 'Plataforma integrada de gestão espacial',
    items: [
      {
        title: 'Registro espacial',
        description: 'Cadastro oficial de satélites, estações terrenas e operadores licenciados no território nacional.',
      },
      {
        title: 'Monitoramento orbital',
        description: 'Acompanhamento em tempo real de trajetórias, manobras e eventos de ativos espaciais brasileiros.',
      },
      {
        title: 'Licenciamento',
        description: 'Gestão de autorizações e conformidade regulatória para operações espaciais no Brasil.',
      },
      {
        title: 'Dados geoespaciais',
        description: 'Repositório centralizado de informações orbitais, telemetria e parâmetros técnicos.',
      },
      {
        title: 'Integração institucional',
        description: 'Interface com agências governamentais, centros de pesquisa e operadores privados.',
      },
      {
        title: 'Inteligência analítica',
        description: 'Análises preditivas, detecção de anomalias e suporte à decisão estratégica.',
      },
    ],
  },
  dashboard: {
    title: 'Centro de controle geoespacial',
    description: 'Interface unificada para monitoramento, análise e gestão de operações espaciais brasileiras',
    activeAssets: 'Ativos ativos',
    orbits: 'Órbitas',
    stations: 'Estações',
    imageAlt: 'Interface de dashboard',
    mapCaption: 'Visualização geoespacial integrada',
  },
  ecosystem: {
    title: 'SINDAE',
    description: 'Integração com agências governamentais, instituições de pesquisa e operadores do setor espacial brasileiro',
    imageAlt: 'Ecossistema RESBRA - Agência Espacial Brasileira',
  },
  footer: {
    brandSubtitle: 'Registro Espacial Brasileiro',
    description: 'Plataforma nacional de monitoramento, licenciamento e governança de operações espaciais.',
    institutional: {
      title: 'Institucional',
      links: ['Sobre o RESBRA', 'Marco regulatório', 'Tratados internacionais', 'Governança'],
    },
    services: {
      title: 'Serviços',
      links: ['Registro de ativos', 'Licenciamento', 'Monitoramento orbital', 'Dados geoespaciais'],
    },
    support: {
      title: 'Suporte',
      links: ['Documentação técnica', 'Portal de atendimento', 'FAQ', 'Contato'],
    },
    copyright: '© 2026 RESBRA - Agência Espacial Brasileira. Todos os direitos reservados.',
    legalLinks: ['Privacidade', 'Termos de uso', 'Acessibilidade'],
  },
};
