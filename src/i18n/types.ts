export type Locale = 'pt-BR' | 'en' | 'es';

export interface CapabilityCopy {
  title: string;
  description: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}

export interface TranslationSchema {
  header: {
    logoAlt: string;
    nav: {
      about: string;
      registry: string;
      services: string;
      data: string;
    };
    searchPlaceholder: string;
  };
  hero: {
    title: string;
    descriptionLine1: string;
    descriptionLine2: string;
    primaryCta: string;
    secondaryCta: string;
  };
  institutional: {
    title: string;
    paragraphs: string[];
    signature: string;
    imageAlt: string;
  };
  capabilities: {
    title: string;
    items: CapabilityCopy[];
  };
  dashboard: {
    title: string;
    description: string;
    activeAssets: string;
    orbits: string;
    stations: string;
    imageAlt: string;
    mapCaption: string;
  };
  ecosystem: {
    title: string;
    description: string;
    imageAlt: string;
  };
  footer: {
    brandSubtitle: string;
    description: string;
    institutional: FooterSection;
    services: FooterSection;
    support: FooterSection;
    copyright: string;
    legalLinks: string[];
  };
}
