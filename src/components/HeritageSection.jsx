import React from 'react';
import { Award, Clock, Heart, Users, MapPin, Coffee } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function HeritageSection({ restaurantData }) {
  const { t, language } = useLanguage();

  return (
    <section id="historia" className="py-20 bg-[#F4EFEA] border-b border-stone-300/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Heritage Framing */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/fachada.jpg"
                alt="Fachada do Restaurante Estação Largo do Machado na Rua Bento Lisboa"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/estac.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  {t('heritage.locationLabel')}
                </span>
                <p className="font-serif text-lg font-bold text-white">
                  {t('heritage.locationSub')}
                </p>
              </div>
            </div>

            {/* Floating Vintage Stamp */}
            <div className="absolute -bottom-6 -right-6 bg-stone-900 text-amber-400 p-4 rounded-2xl shadow-xl border border-amber-600/30 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center font-serif text-2xl font-black border border-amber-500/30">
                59
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-stone-200">
                  {t('heritage.yearsTitle')}
                </div>
                <div className="text-[11px] text-stone-400">
                  {t('heritage.yearsSub')}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-950 text-xs font-semibold tracking-wide">
              <Award className="w-3.5 h-3.5 text-amber-800" />
              <span>{t('heritage.badge')}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              {t('heritage.title')}
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {t('heritage.p1')}
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {t('heritage.p2')}
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {t('heritage.p3')}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-300">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    {language === 'en' ? 'Every Single Day' : language === 'es' ? 'Todos los Días' : 'Todos os Dias'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {language === 'en' ? 'From 11 AM to Midnight nonstop.' : language === 'es' ? 'De 11h a medianoche sin interrupción.' : 'Das 11h à meia-noite sem interrupção.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    {language === 'en' ? '50m from Metro' : language === 'es' ? 'A 50m del Metro' : 'A 50m do Metrô'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {language === 'en' ? 'Largo do Machado Station exit.' : language === 'es' ? 'Salida estación Largo do Machado.' : 'Saída Largo do Machado / Catete.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    {language === 'en' ? 'Family Ambiance' : language === 'es' ? 'Ambiente Familiar' : 'Ambiente Familiar'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {language === 'en' ? 'Warm welcoming staff & tables.' : language === 'es' ? 'Mesas acogedoras y atención cordial.' : 'Mesas acolhedoras e atendimento cordial.'}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
