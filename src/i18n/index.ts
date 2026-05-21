import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import type { Locale, TranslationSchema } from './types';

export type { Locale, TranslationSchema } from './types';

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const translations: Record<Locale, TranslationSchema> = {
  'pt-BR': pt,
  en,
  es,
};
