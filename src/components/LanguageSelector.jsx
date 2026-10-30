import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function LanguageSelector({ variant = 'navbar', className = '' }) {
  const { language, setLanguage, languages, currentLangMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Variant: Top Bar Minimal
  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="text-[11px] text-stone-400 flex items-center gap-1">
          <Globe className="w-3 h-3 text-amber-500" />
        </span>
        <div className="flex items-center bg-stone-900 rounded-lg p-0.5 border border-stone-800">
          {languages.map((l) => {
            const isActive = language === l.code;
            return (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                title={l.label}
                aria-label={`Mudar idioma para ${l.label}`}
                className={`px-1.5 py-0.5 text-[11px] font-bold rounded flex items-center gap-1 transition-all ${
                  isActive
                    ? 'bg-amber-600/90 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                <span>{l.flag}</span>
                <span className="hidden sm:inline">{l.short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant: Mobile Full Width
  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider px-1">
          <Globe className="w-3.5 h-3.5 text-amber-800" />
          <span>Idioma / Language / Idioma</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((l) => {
            const isActive = language === l.code;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setLanguage(l.code);
                }}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all min-h-[48px] ${
                  isActive
                    ? 'bg-amber-900 text-amber-50 border-amber-800 shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-200'
                }`}
              >
                <span className="text-lg leading-none mb-1">{l.flag}</span>
                <span className="text-[11px] leading-tight">{l.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant: Footer Inline
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <div className="flex items-center gap-1 bg-[#1A1817] p-1 rounded-xl border border-stone-800">
          {languages.map((l) => {
            const isActive = language === l.code;
            return (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-amber-600/90 text-stone-950 shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant: Navbar Dropdown (Default)
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Idioma atual: ${currentLangMeta.label}. Clique para alterar.`}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-stone-700 hover:text-amber-900 hover:bg-stone-100/90 border border-stone-200/80 hover:border-stone-300 text-xs font-bold transition-all active:scale-[0.98]"
      >
        <span className="text-base leading-none">{currentLangMeta.flag}</span>
        <span className="tracking-wider">{currentLangMeta.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          role="menu"
          className="absolute right-0 mt-2 w-44 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/90 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-stone-400 border-b border-stone-100 mb-1">
            Selecionar Idioma
          </div>
          {languages.map((l) => {
            const isActive = language === l.code;
            return (
              <button
                key={l.code}
                role="menuitem"
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-50 text-amber-950 font-bold border border-amber-900/10'
                    : 'text-stone-700 hover:bg-stone-100/80 hover:text-stone-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{l.flag}</span>
                  <span>{l.label}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-amber-800" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
