import React from 'react';
import { Beer, UtensilsCrossed, Flame, Bike, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Features({ onSelectCategory }) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Beer,
      title: t('features.chopp.title'),
      tag: t('features.chopp.tag'),
      description: t('features.chopp.description'),
      actionLabel: t('features.chopp.actionLabel'),
      categoryId: 'chopes'
    },
    {
      icon: UtensilsCrossed,
      title: t('features.executivos.title'),
      tag: t('features.executivos.tag'),
      description: t('features.executivos.description'),
      actionLabel: t('features.executivos.actionLabel'),
      categoryId: 'executivos'
    },
    {
      icon: Flame,
      title: t('features.tradicao.title'),
      tag: t('features.tradicao.tag'),
      description: t('features.tradicao.description'),
      actionLabel: t('features.tradicao.actionLabel'),
      categoryId: 'especiais'
    },
    {
      icon: Bike,
      title: t('features.delivery.title'),
      tag: t('features.delivery.tag'),
      description: t('features.delivery.description'),
      actionLabel: t('features.delivery.actionLabel'),
      categoryId: 'todos'
    }
  ];

  return (
    <section className="py-12 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-900/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center group-hover:bg-amber-900 group-hover:text-amber-100 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900/80 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-900/10">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-900 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100">
                  <button
                    onClick={() => onSelectCategory(feat.categoryId)}
                    className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{feat.actionLabel}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
