import React, { useState } from 'react';
import { Flame, Sparkles, Plus, Check, Clock, Users } from 'lucide-react';

export default function FeaturedDishBanner({ onAddToCart, restaurantData }) {
  const [feijoadaSize, setFeijoadaSize] = useState('1 pessoa');
  const [cozidoSize, setCozidoSize] = useState('1 pessoa');
  const [addedItem, setAddedItem] = useState(null);

  const feijoadaItem = restaurantData.items.find(i => i.id === 'esp-01') || {
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

  const cozidoItem = restaurantData.items.find(i => i.id === 'esp-02') || {
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

  const handleAddFeijoada = () => {
    const isDouble = feijoadaSize.includes('2');
    const price = isDouble ? 110.00 : 60.00;
    const label = isDouble ? 'Completa (2 pessoas)' : 'Individual (1 pessoa)';
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
    const label = isDouble ? 'Completo (2 pessoas)' : 'Individual (1 pessoa)';
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
            As Grandes Estrelas da Cozinha
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pratos que Fizeram a Fama do Restaurante
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Receitas passadas com rigor e afeto há quase seis décadas no Largo do Machado.
          </p>
        </div>

        {/* 2 Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Feijoada */}
          <div className="bg-[#1F1C1A] rounded-3xl p-6 sm:p-8 border border-stone-800 hover:border-amber-700/40 transition-all shadow-xl flex flex-col justify-between relative group">
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
                  Receita Tradicional Desde 1966
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  Servida Todos os Dias
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                Tradicional Feijoada do Largo do Machado
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mt-3">
                Feijão preto enriquecido lentamente com carnes nobres selecionadas (carne seca, lombo, costelinha, paio e calabresa). Acompanha arroz solto, couve refogada fininha no alho, farofa tostada na manteiga, torresmo pururuca estalando de crocante e laranjas frescas.
              </p>

              {/* Portion selector */}
              <div className="mt-6 pt-6 border-t border-stone-800">
                <label className="text-xs font-medium text-stone-400 block mb-2">
                  Escolha o tamanho da porção:
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
                    <div className="text-xs font-semibold">Individual</div>
                    <div className="text-sm font-bold text-amber-400">R$ 60,00</div>
                    <div className="text-[10px] text-stone-500">1 pessoa bem servida</div>
                  </button>

                  <button
                    onClick={() => setFeijoadaSize('2 pessoas')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      feijoadaSize === '2 pessoas'
                        ? 'bg-amber-950/70 border-amber-600 text-white shadow'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">Completa (Família)</div>
                    <div className="text-sm font-bold text-amber-400">R$ 110,00</div>
                    <div className="text-[10px] text-stone-500">Para 2 a 3 pessoas</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-stone-400 block">Total do prato:</span>
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
                    <span>Adicionada à Comanda!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Feijoada</span>
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
                  Exclusivo aos Domingos
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-rose-400" />
                  Almoço de Domingo Clássico
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                Cozido à Portuguesa Carioca
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mt-3">
                A verdadeira celebração do almoço carioca de domingo. Carnes nobres suculentas, legumes frescos da estação (batata, cenoura, abóbora, repolho, banana da terra) cozidos lentamente no caldo das carnes e servidos com pirão aveludado e perfumado.
              </p>

              {/* Portion selector */}
              <div className="mt-6 pt-6 border-t border-stone-800">
                <label className="text-xs font-medium text-stone-400 block mb-2">
                  Escolha o tamanho da porção:
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
                    <div className="text-xs font-semibold">Individual</div>
                    <div className="text-sm font-bold text-rose-400">R$ 60,00</div>
                    <div className="text-[10px] text-stone-500">1 pessoa bem servida</div>
                  </button>

                  <button
                    onClick={() => setCozidoSize('2 pessoas')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      cozidoSize === '2 pessoas'
                        ? 'bg-rose-950/70 border-rose-600 text-white shadow'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">Completo (Família)</div>
                    <div className="text-sm font-bold text-rose-400">R$ 110,00</div>
                    <div className="text-[10px] text-stone-500">Para 2 a 3 pessoas</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-stone-400 block">Total do prato:</span>
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
                    <span>Adicionado à Comanda!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Cozido</span>
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