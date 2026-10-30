import React, { useState } from 'react';
import { Flame, Sparkles, Plus, Check, Clock, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function FeaturedDishBanner({ onAddToCart, restaurantData }) {
  const { t, language, translateItem } = useLanguage();
  const [feijoadaSize, setFeijoadaSize] = useState('1 pessoa');
  const [cozidoSize, setCozidoSize] = useState('1 pessoa');
  const [addedItem, setAddedItem] = useState(null);

  const rawFeijoada = restaurantData?.items?.find(i => i.id === 'esp-01') || {
    id: 'esp-01',
    name: 'Tradicional Feijoada do Largo do Machado',
    category: 'especiais',
    price: 60.00,
    priceOptions: [
      { label: 'Individual (1 pessoa)', price: 60.00 },
      { label: 'Completa (2 pessoas)', price: 110.00 }
    ],
    description: 'A estrela da casa desde 1966: feijão preto apurado com carnes nobres selecionadas, arroz soltinho, couve mineira refogada fininha, farofa na manteiga, torresmo pururuca sequinho e fatias de laranja fresca.'
  };

  const rawCozido = restaurantData?.items?.find(i => i.id === 'esp-02') || {
    id: 'esp-02',
    name: 'Cozido à Portuguesa (Especial de Domingo)',
    category: 'especiais',
    price: 60.00,
    priceOptions: [
      { label: 'Individual (1 pessoa)', price: 60.00 },
      { label: 'Completo (2 pessoas)', price: 110.00 }
    ],
    description: 'Servido exclusivamente aos domingos. O autêntico cozido de tradição luso-carioca com carnes nobres, legumes variados cozidos no próprio caldo e pirão aveludado.'
  };

  const feijoadaItem = translateItem(rawFeijoada);
  const cozidoItem = translateItem(rawCozido);

  const handleAddFeijoada = () => {
    const isDouble = feijoadaSize.includes('2');
    const price = isDouble ? 110.00 : 60.00;
    const label = isDouble 
      ? (language === 'en' ? 'Full (2 people)' : language === 'es' ? 'Completa (2 personas)' : 'Completa (2 pessoas)')
      : (language === 'en' ? 'Individual (1 person)' : language === 'es' ? 'Individual (1 persona)' : 'Individual (1 pessoa)');
    
    onAddToCart({
      ...feijoadaItem,
      selectedOption: label,
      price: price
    });
    setAddedItem('feijoada');
    setTimeout(() => setAddedItem(null), 1800);
  };

  const handleAddCozido = () => {
    const isDouble = cozidoSize.includes('2');
    const price = isDouble ? 110.00 : 60.00;
    const label = isDouble 
      ? (language === 'en' ? 'Full (2 people)' : language === 'es' ? 'Completo (2 personas)' : 'Completo (2 pessoas)')
      : (language === 'en' ? 'Individual (1 person)' : language === 'es' ? 'Individual (1 persona)' : 'Individual (1 pessoa)');
    
    onAddToCart({
      ...cozidoItem,
      selectedOption: label,
      price: price
    });
    setAddedItem('cozido');
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section className="py-16 bg-[#161413] text-stone-100 relative overflow-hidden border-y border-stone-800">
      
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            {t('featuredDishes.badge')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('featuredDishes.title')}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            {t('featuredDishes.subtitle')}
          </p>
        </div>

        {/* 2 Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Feijoada */}
          <div className="bg-[#1F1C1A] rounded-3xl p-6 sm:p-8 border border-stone-800 hover:border-amber-700/40 transition-all shadow-xl flex flex-col justify-between relative group">
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
                  {t('featuredDishes.feijoada.badge')}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  {t('featuredDishes.feijoada.schedule')}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                {feijoadaItem.name}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mt-3">
                {feijoadaItem.description}
              </p>

              {/* Portion selector */}
              <div className="mt-6 pt-6 border-t border-stone-800">
                <label className="text-xs font-medium text-stone-400 block mb-2">
                  {language === 'en' ? 'Choose portion size:' : language === 'es' ? 'Elige el tamaño de la porción:' : 'Escolha o tamanho da porção:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFeijoadaSize('1 pessoa')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      feijoadaSize === '1 pessoa'
                        ? 'bg-amber-950/70 border-amber-600 text-white shadow'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{t('featuredDishes.feijoada.opt1')}</div>
                    <div className="text-sm font-bold text-amber-400">R$ 60,00</div>
                    <div className="text-[10px] text-stone-500">
                      {language === 'en' ? 'Hearty for 1 person' : language === 'es' ? '1 persona bien servida' : '1 pessoa bem servida'}
                    </div>
                  </button>

                  <button
                    onClick={() => setFeijoadaSize('2 pessoas')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      feijoadaSize === '2 pessoas'
                        ? 'bg-amber-950/70 border-amber-600 text-white shadow'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{t('featuredDishes.feijoada.opt2')}</div>
                    <div className="text-sm font-bold text-amber-400">R$ 110,00</div>
                    <div className="text-[10px] text-stone-500">
                      {language === 'en' ? 'For 2 to 3 people' : language === 'es' ? 'Para 2 a 3 personas' : 'Para 2 a 3 pessoas'}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-stone-400 block">
                  {language === 'en' ? 'Dish total:' : language === 'es' ? 'Total del plato:' : 'Total do prato:'}
                </span>
                <span className="text-2xl font-extrabold text-amber-400 font-serif">
                  {feijoadaSize === '2 pessoas' ? 'R$ 110,00' : 'R$ 60,00'}
                </span>
              </div>

              <button
                onClick={handleAddFeijoada}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow ${
                  addedItem === 'feijoada'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-600 hover:bg-amber-500 text-stone-950 active:scale-[0.98]'
                }`}
              >
                {addedItem === 'feijoada' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t('featuredDishes.added')}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>{t('featuredDishes.feijoada.btnAdd')}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Card 2: Cozido */}
          <div className="bg-[#1F1C1A] rounded-3xl p-6 sm:p-8 border border-stone-800 hover:border-amber-700/40 transition-all shadow-xl flex flex-col justify-between relative group">
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-950/60 border border-rose-800/40 px-3 py-1 rounded-full">
                  {t('featuredDishes.cozido.badge')}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-rose-400" />
                  {t('featuredDishes.cozido.schedule')}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                {cozidoItem.name}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mt-3">
                {cozidoItem.description}
              </p>

              {/* Portion selector */}
              <div className="mt-6 pt-6 border-t border-stone-800">
                <label className="text-xs font-medium text-stone-400 block mb-2">
                  {language === 'en' ? 'Choose portion size:' : language === 'es' ? 'Elige el tamaño de la porción:' : 'Escolha o tamanho da porção:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCozidoSize('1 pessoa')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      cozidoSize === '1 pessoa'
                        ? 'bg-rose-950/70 border-rose-600 text-white shadow'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{t('featuredDishes.cozido.opt1')}</div>
                    <div className="text-sm font-bold text-rose-400">R$ 60,00</div>
                    <div className="text-[10px] text-stone-500">
                      {language === 'en' ? 'Hearty for 1 person' : language === 'es' ? '1 persona bien servida' : '1 pessoa bem servida'}
                    </div>
                  </button>

                  <button
                    onClick={() => setCozidoSize('2 pessoas')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      cozidoSize === '2 pessoas'
                        ? 'bg-rose-950/70 border-rose-600 text-white shadow'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{t('featuredDishes.cozido.opt2')}</div>
                    <div className="text-sm font-bold text-rose-400">R$ 110,00</div>
                    <div className="text-[10px] text-stone-500">
                      {language === 'en' ? 'For 2 to 3 people' : language === 'es' ? 'Para 2 a 3 personas' : 'Para 2 a 3 pessoas'}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-stone-400 block">
                  {language === 'en' ? 'Dish total:' : language === 'es' ? 'Total del plato:' : 'Total do prato:'}
                </span>
                <span className="text-2xl font-extrabold text-rose-400 font-serif">
                  {cozidoSize === '2 pessoas' ? 'R$ 110,00' : 'R$ 60,00'}
                </span>
              </div>

              <button
                onClick={handleAddCozido}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow ${
                  addedItem === 'cozido'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-600 hover:bg-rose-500 text-white active:scale-[0.98]'
                }`}
              >
                {addedItem === 'cozido' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t('featuredDishes.added')}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>{t('featuredDishes.cozido.btnAdd')}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
