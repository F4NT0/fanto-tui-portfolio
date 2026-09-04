import en from './en.json';
import pt from './pt.json';

export type Language = 'en' | 'pt';
export type Translations = typeof en;

export const translations: Record<Language, Translations> = {
  en,
  pt
};

export const defaultLanguage: Language = 'pt';

export function getTranslations(lang: Language = defaultLanguage): Translations {
  return translations[lang] || translations[defaultLanguage];
}

export function setLanguage(lang: Language) {
  localStorage.setItem('tui_language', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = 'ltr';
}

export function getCurrentLanguage(): Language {
  const saved = localStorage.getItem('tui_language') as Language;
  if (saved && (saved === 'en' || saved === 'pt')) {
    return saved;
  }
  return defaultLanguage;
}