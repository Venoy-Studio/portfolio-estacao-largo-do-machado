import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, languages } from './translations.js';
import { 
  itemTranslations, 
  categoryTranslations, 
  priceOptionLabels, 
  servesTranslations, 
  badgeTranslations, 
  dietaryTranslations 
} from './menuTranslations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('estacao_lang');
      if (saved && (saved === 'pt' || saved === 'en' || saved === 'es')) {
        return saved;
      }
      // Check browser language
      const navLang = navigator.language || navigator.userLanguage || '';
      if (navLang.startsWith('es')) return 'es';
      if (navLang.startsWith('en')) return 'en';
      return 'pt';
    } catch {
      return 'pt';
    }
  });

  const setLanguage = (lang) => {
    if (lang === 'pt' || lang === 'en' || lang === 'es') {
      setLanguageState(lang);
      try {
        localStorage.setItem('estacao_lang', lang);
      } catch {
        // ignore
      }
    }
  };

  // Synchronize document attributes and title
  useEffect(() => {
    const htmlLang = language === 'pt' ? 'pt-BR' : language;
    document.documentElement.lang = htmlLang;

    const tObj = translations[language] || translations.pt;
    if (tObj && tObj.siteTitle) {
      document.title = tObj.siteTitle;
    }
  }, [language]);

  // Nested translation helper: t('nav.cardapio')
  const t = (path, fallback = '') => {
    const keys = path.split('.');
    let current = translations[language] || translations.pt;
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Portuguese
        let ptCurrent = translations.pt;
        for (const ptKey of keys) {
          if (ptCurrent && ptCurrent[ptKey] !== undefined) {
            ptCurrent = ptCurrent[ptKey];
          } else {
            return fallback || path;
          }
        }
        return ptCurrent;
      }
    }
    return current;
  };

  // Item translation helper
  const translateItem = (item) => {
    if (!item) return item;
    if (language === 'pt') return item;

    const tr = itemTranslations[item.id]?.[language];
    
    // Translated price options
    let translatedPriceOptions = item.priceOptions;
    if (item.priceOptions && item.priceOptions.length > 0) {
      translatedPriceOptions = item.priceOptions.map(opt => {
        const trLabel = priceOptionLabels[opt.label]?.[language] || opt.label;
        return {
          ...opt,
          label: trLabel
        };
      });
    }

    // Translated serves
    let translatedServes = item.serves;
    if (item.serves) {
      translatedServes = servesTranslations[item.serves]?.[language] || item.serves;
    }

    // Translated badge
    let translatedBadge = item.badge;
    if (item.badge) {
      translatedBadge = badgeTranslations[item.badge]?.[language] || item.badge;
    }

    // Translated dietary
    let translatedDietary = item.dietary;
    if (item.dietary) {
      translatedDietary = dietaryTranslations[item.dietary]?.[language] || item.dietary;
    }

    return {
      ...item,
      name: tr?.name || item.name,
      description: tr?.description || item.description,
      serves: translatedServes,
      badge: translatedBadge,
      dietary: translatedDietary,
      priceOptions: translatedPriceOptions
    };
  };

  // Category translation helper
  const translateCategory = (cat) => {
    if (!cat) return cat;
    if (language === 'pt') return cat;

    const tr = categoryTranslations[cat.id];
    if (!tr) return cat;

    return {
      ...cat,
      name: tr.name?.[language] || cat.name,
      badge: tr.badge?.[language] || cat.badge,
      description: tr.description?.[language] || cat.description
    };
  };

  const currentLangMeta = languages.find(l => l.code === language) || languages[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      languages,
      currentLangMeta,
      t,
      translateItem,
      translateCategory
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
