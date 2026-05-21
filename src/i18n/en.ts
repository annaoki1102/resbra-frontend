import type { TranslationSchema } from './types';

export const en: TranslationSchema = {
  header: {
    logoAlt: 'Brazilian Space Agency',
    nav: {
      about: 'About RESBRA',
      registry: 'Space Registry',
      services: 'Services',
      data: 'Data and Statistics',
    },
    searchPlaceholder: 'Search ...',
  },
  hero: {
    title: 'Registry and governance of Brazilian space activities',
    descriptionLine1: 'National platform for monitoring, licensing, and governance of space operations.',
    descriptionLine2: 'Integrated management of Brazilian orbital assets.',
    primaryCta: 'Access platform',
    secondaryCta: 'Learn about RESBRA',
  },
  institutional: {
    title: 'Space regulation and governance',
    paragraphs: [
      'RESBRA is the national infrastructure for registration, monitoring, and licensing of Brazilian space operations, developed by the Brazilian Space Agency in compliance with international treaties and national regulatory frameworks.',
      'The platform integrates data from multiple government sources, research centers, and private operators, providing a unified view of Brazil’s space assets and orbital trajectories.',
      'Through advanced geospatial analytics and data intelligence technologies, the system supports regulatory compliance, orbital safety, and strategic decision-making in the Brazilian space sector.',
    ],
    signature: 'Brazilian Space Agency',
    imageAlt: 'Satellite above Earth',
  },
  capabilities: {
    title: 'Integrated space management platform',
    items: [
      {
        title: 'Space registry',
        description: 'Official registration of satellites, ground stations, and licensed operators within national territory.',
      },
      {
        title: 'Orbital monitoring',
        description: 'Real-time tracking of trajectories, maneuvers, and events involving Brazilian space assets.',
      },
      {
        title: 'Licensing',
        description: 'Management of authorizations and regulatory compliance for space operations in Brazil.',
      },
      {
        title: 'Geospatial data',
        description: 'Centralized repository of orbital information, telemetry, and technical parameters.',
      },
      {
        title: 'Institutional integration',
        description: 'Interface with government agencies, research centers, and private operators.',
      },
      {
        title: 'Analytical intelligence',
        description: 'Predictive analytics, anomaly detection, and support for strategic decision-making.',
      },
    ],
  },
  dashboard: {
    title: 'Geospatial control center',
    description: 'Unified interface for monitoring, analysis, and management of Brazilian space operations',
    activeAssets: 'Active assets',
    orbits: 'Orbits',
    stations: 'Stations',
    imageAlt: 'Dashboard interface',
    mapCaption: 'Integrated geospatial view',
  },
  ecosystem: {
    title: 'SINDAE',
    description: 'Integration with government agencies, research institutions, and operators in Brazil’s space sector',
    imageAlt: 'RESBRA ecosystem - Brazilian Space Agency',
  },
  footer: {
    brandSubtitle: 'Brazilian Space Registry',
    description: 'National platform for monitoring, licensing, and governance of space operations.',
    institutional: {
      title: 'Institutional',
      links: ['About RESBRA', 'Regulatory framework', 'International treaties', 'Governance'],
    },
    services: {
      title: 'Services',
      links: ['Asset registry', 'Licensing', 'Orbital monitoring', 'Geospatial data'],
    },
    support: {
      title: 'Support',
      links: ['Technical documentation', 'Service portal', 'FAQ', 'Contact'],
    },
    copyright: '© 2026 RESBRA - Brazilian Space Agency. All rights reserved.',
    legalLinks: ['Privacy', 'Terms of use', 'Accessibility'],
  },
};
