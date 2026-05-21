import type { TranslationSchema } from './types';

export const es: TranslationSchema = {
  header: {
    logoAlt: 'Agencia Espacial Brasileña',
    nav: {
      about: 'Sobre RESBRA',
      registry: 'Registro Espacial',
      services: 'Servicios',
      data: 'Datos y Estadísticas',
    },
    searchPlaceholder: 'Buscar ...',
  },
  hero: {
    title: 'Registro y gobernanza de las actividades espaciales brasileñas',
    descriptionLine1: 'Plataforma nacional para monitoreo, licenciamiento y gobernanza de operaciones espaciales.',
    descriptionLine2: 'Gestión integrada de activos orbitales brasileños.',
    primaryCta: 'Acceder a la plataforma',
    secondaryCta: 'Conozca RESBRA',
  },
  institutional: {
    title: 'Regulación y gobernanza espacial',
    paragraphs: [
      'RESBRA es la infraestructura nacional para el registro, monitoreo y licenciamiento de operaciones espaciales brasileñas, desarrollada por la Agencia Espacial Brasileña en conformidad con tratados internacionales y marcos regulatorios nacionales.',
      'La plataforma integra datos de múltiples fuentes gubernamentales, centros de investigación y operadores privados, proporcionando una visión unificada de los activos espaciales de Brasil y sus trayectorias orbitales.',
      'Mediante tecnologías avanzadas de análisis geoespacial e inteligencia de datos, el sistema apoya la conformidad regulatoria, la seguridad orbital y la toma de decisiones estratégicas en el sector espacial brasileño.',
    ],
    signature: 'Agencia Espacial Brasileña',
    imageAlt: 'Satélite sobre la Tierra',
  },
  capabilities: {
    title: 'Plataforma integrada de gestión espacial',
    items: [
      {
        title: 'Registro espacial',
        description: 'Registro oficial de satélites, estaciones terrenas y operadores licenciados en el territorio nacional.',
      },
      {
        title: 'Monitoreo orbital',
        description: 'Seguimiento en tiempo real de trayectorias, maniobras y eventos de activos espaciales brasileños.',
      },
      {
        title: 'Licenciamiento',
        description: 'Gestión de autorizaciones y conformidad regulatoria para operaciones espaciales en Brasil.',
      },
      {
        title: 'Datos geoespaciales',
        description: 'Repositorio centralizado de información orbital, telemetría y parámetros técnicos.',
      },
      {
        title: 'Integración institucional',
        description: 'Interfaz con agencias gubernamentales, centros de investigación y operadores privados.',
      },
      {
        title: 'Inteligencia analítica',
        description: 'Análisis predictivo, detección de anomalías y apoyo a la toma de decisiones estratégicas.',
      },
    ],
  },
  dashboard: {
    title: 'Centro de control geoespacial',
    description: 'Interfaz unificada para monitoreo, análisis y gestión de operaciones espaciales brasileñas',
    activeAssets: 'Activos activos',
    orbits: 'Órbitas',
    stations: 'Estaciones',
    imageAlt: 'Interfaz del panel',
    mapCaption: 'Visualización geoespacial integrada',
  },
  ecosystem: {
    title: 'SINDAE',
    description: 'Integración con agencias gubernamentales, instituciones de investigación y operadores del sector espacial brasileño',
    imageAlt: 'Ecosistema RESBRA - Agencia Espacial Brasileña',
  },
  footer: {
    brandSubtitle: 'Registro Espacial Brasileño',
    description: 'Plataforma nacional para monitoreo, licenciamiento y gobernanza de operaciones espaciales.',
    institutional: {
      title: 'Institucional',
      links: ['Sobre RESBRA', 'Marco regulatorio', 'Tratados internacionales', 'Gobernanza'],
    },
    services: {
      title: 'Servicios',
      links: ['Registro de activos', 'Licenciamiento', 'Monitoreo orbital', 'Datos geoespaciales'],
    },
    support: {
      title: 'Soporte',
      links: ['Documentación técnica', 'Portal de atención', 'Preguntas frecuentes', 'Contacto'],
    },
    copyright: '© 2026 RESBRA - Agencia Espacial Brasileña. Todos los derechos reservados.',
    legalLinks: ['Privacidad', 'Términos de uso', 'Accesibilidad'],
  },
};
