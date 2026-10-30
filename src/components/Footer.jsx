import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Heart,
  Globe
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import LanguageSelector from './LanguageSelector.jsx';

export default function Footer({ restaurantData }) {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121110] text-stone-300 border-t border-stone-800 text-xs">
      
      {/* Upper Footer: Delivery Partners & Fast Links */}
      <div className="border-b border-stone-800/80 py-8 bg-[#181615]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <span className="font-serif font-black text-amber-400 text-lg">184</span>
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">
                {t('footer.heading')}
              </h4>
              <p className="text-stone-400 text-xs mt-0.5">
                {t('footer.subheading')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={restaurantData?.restaurant?.contacts?.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold transition-all shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('footer.directWhatsApp')}</span>
            </a>

            <a
              href={restaurantData?.restaurant?.contacts?.ifood}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow"
            >
              <span>iFood</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={restaurantData?.restaurant?.contacts?.app99}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold transition-all shadow"
            >
              <span>99Food</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-600/40 shrink-0">
                <img 
                  src="/images/logo.jpg" 
                  alt="Estação Largo do Machado" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/LOGO-ESTACAO-baixa.jpg";
                  }}
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                  Restaurante Estação Largo do Machado
                </h3>
                <span className="text-amber-400 font-medium text-[11px] block tracking-wider uppercase">
                  {t('topBar.tradition')} • Boteco 184 Ltda
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {language === 'en'
                ? 'The quintessential gathering place in Catete and Largo do Machado. Cold draft beer poured to perfection, sizzling grilled meats on iron skillets, traditional weekend feijoada, and 24 daily executive lunch options.'
                : language === 'es'
                ? 'El punto de encuentro más auténtico de Catete y Largo do Machado. Cerveza fría en su punto exacto, carnes a la plancha, feijoada los fines de semana y 24 opciones de menú ejecutivo todos los días.'
                : 'O mais autêntico ponto de encontro do Catete e do Largo do Machado. Chopp na temperatura certa, carnes nobres na chapa, feijoada aos fins de semana e 24 opções de almoço executivo servidas todos os dias.'}
            </p>

            <div className="pt-2 text-[11px] text-stone-500 space-y-1">
              <p>Razão Social: <strong>BOTECO 184 LTDA</strong></p>
              <p>CNPJ: <strong>46.859.491/0001-21</strong></p>
            </div>

            {/* Language Selector in Footer */}
            <div className="pt-2">
              <LanguageSelector variant="footer" />
            </div>
          </div>

          {/* Quick Menu Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-200">
              {language === 'en' ? 'Menu & Sections' : language === 'es' ? 'Menú y Secciones' : 'Cardápio & Seções'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cardapio" className="text-stone-400 hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'All 136 Dishes & Drinks' : language === 'es' ? 'Los 136 Platos y Bebidas' : 'Todos os 136 Pratos & Bebidas'}
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-stone-400 hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'Daily Executive Specials (24 Options)' : language === 'es' ? 'Almuerzo Ejecutivo (24 Opciones)' : 'Almoço Executivo (24 Opções Diárias)'}
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-stone-400 hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'Traditional Complete Feijoada' : language === 'es' ? 'Feijoada Completa Tradicional' : 'Feijoada Completa do Largo do Machado'}
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-stone-400 hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'Steaks & Filé à Oswaldo Aranha' : language === 'es' ? 'Carnes Nobles y Bife Oswaldo Aranha' : 'Carnes Nobres & Filé à Oswaldo Aranha'}
                </a>
              </li>
              <li>
                <a href="#drinks-section" className="text-stone-400 hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'Signature Cocktails & Draft Beers' : language === 'es' ? 'Cócteles de Autor y Cervezas' : 'Drinks Autorais & Chopes Gelados'}
                </a>
              </li>
              <li>
                <a href="#historia" className="text-stone-400 hover:text-amber-300 transition-colors">
                  {language === 'en' ? 'Our Heritage Since 1966' : language === 'es' ? 'Nuestra Historia Desde 1966' : 'Nossa História Desde 1966'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-200">
              {language === 'en' ? 'Service & Location' : language === 'es' ? 'Atención y Ubicación' : 'Atendimento & Localização'}
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Rua Bento Lisboa, 184 — Largo do Machado / Catete, Rio de Janeiro - RJ</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{language === 'en' ? 'Every day from 11:00 AM to Midnight' : language === 'es' ? 'Todos los días de 11:00 a 00:00 (Medianoche)' : 'Todos os dias das 11:00 às 00:00 (Meia-noite)'}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:2125565323" className="hover:text-amber-300 font-semibold text-stone-200">
                  (21) 2556-5323
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={restaurantData?.restaurant?.contacts?.whatsappLink} className="hover:text-amber-300 text-emerald-400 font-semibold">
                  WhatsApp: (21) 2556-5323
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={restaurantData?.restaurant?.contacts?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-pink-700 text-stone-300 hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="Instagram Oficial"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={restaurantData?.restaurant?.contacts?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-blue-600 text-stone-300 hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="Facebook Oficial"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {currentYear} Restaurante Estação Largo do Machado (BOTECO 184 LTDA). {t('footer.rights')}
          </div>
          <div className="flex items-center gap-4">
            <a href="#historia" className="hover:text-stone-300 transition-colors">
              {t('nav.tradicao')}
            </a>
            <span>•</span>
            <a href="#localizacao" className="hover:text-stone-300 transition-colors">
              {t('nav.ondeEstamos')}
            </a>
            <span>•</span>
            <a href="#cardapio" className="hover:text-stone-300 transition-colors">
              {t('nav.cardapio')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
