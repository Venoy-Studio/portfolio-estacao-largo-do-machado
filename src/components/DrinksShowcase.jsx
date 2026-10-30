import React, { useState } from 'react';
import { Sparkles, Wine, GlassWater, Plus, Check, Beer } from 'lucide-react';

export default function DrinksShowcase({ onAddToCart, restaurantData }) {
  const [addedMap, setAddedMap] = useState({});

  // Filter signature drinks
  const signatureDrinks = [
    {
      id: "drk-01",
      name: "Machado de Assis",
      price: 31.00,
      description: "Homenagem ao bruxo do Cosme Velho: amoras frescas maceradas, xarope de rosas nobre, toque sutil de tabasco, Gin Beefeater Rosê, água tônica e finalizado com aveludada espuma artesanal de morango.",
      tag: "Assinatura Autoral",
      accent: "from-rose-950 to-stone-900 border-rose-800/40 text-rose-300"
    },
    {
      id: "drk-02",
      name: "Aterro do Flamengo",
      price: 32.00,
      description: "Inspirado na brisa da Guanabara: Gin Beefeater, licor de pêssego, xarope artesanal de maracujá, espumante brut geladíssimo e finalizado com cremosa espuma de gengibre.",
      tag: "Mais Pedido",
      accent: "from-amber-950 to-stone-900 border-amber-800/40 text-amber-300"
    },
    {
      id: "drk-03",
      name: "Clarisse Índio do Brasil",
      price: 32.00,
      description: "Morangos frescos, xarope de hibisco rubi, Gin Beefeater Cítrico, água tônica gelada e espuma aromática de gengibre.",
      tag: "Autoral Refrescante",
      accent: "from-red-950 to-stone-900 border-red-800/40 text-red-300"
    },
    {
      id: "drk-04",
      name: "Rua das Laranjeiras 'Cássia Eller'",
      price: 31.00,
      description: "Polpa fresca de maracujá, xarope artesanal de manga, Gin Beefeater Tropical, água tônica e inesquecível espuma brasileira de rapadura.",
      tag: "Homenagem Carioca",
      accent: "from-yellow-950 to-stone-900 border-yellow-800/40 text-yellow-300"
    },
    {
      id: "drk-06",
      name: "São Salvador",
      price: 26.00,
      description: "Em referência à boemia da famosa praça vizinha: amoras silvestres, morango, gota sutil de tabasco e xarope de açúcar.",
      tag: "Praça São Salvador",
      accent: "from-purple-950 to-stone-900 border-purple-800/40 text-purple-300"
    },
    {
      id: "drk-23",
      name: "Marquesa de Santos (Mocktail)",
      price: 27.00,
      description: "Sobremesa em forma de coquetel sem álcool: dose de café expresso encorpado, sorvete artesanal de baunilha e borda generosa de Nutella pura.",
      tag: "Sem Álcool • Doce",
      accent: "from-stone-900 to-amber-950 border-stone-700/60 text-amber-200"
    }
  ];

  const handleAdd = (drink) => {
    onAddToCart({
      ...drink,
      category: 'drinks'
    });
    setAddedMap(prev => ({ ...prev, [drink.id]: true }));
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [drink.id]: false }));
    }, 1500);
  };

  return (
    <section id="drinks-section" className="py-20 bg-dark-pattern text-stone-100 relative overflow-hidden border-b border-stone-800">
      
      {/* Visual lighting effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Carta Autoral de Drinks
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coquetéis Inspirados no Rio & no Catete
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Nossos bartenders homenageiam os poetas, ruas e memórias do Largo do Machado com insumos artesanais, espumas aveludadas e destilados nobres.
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureDrinks.map((drink) => {
            const isAdded = addedMap[drink.id];
            return (
              <div
                key={drink.id}
                className={`rounded-2xl p-6 bg-gradient-to-b ${drink.accent} border shadow-xl flex flex-col justify-between group hover:scale-[1.01] transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-stone-200 border border-white/15">
                      {drink.tag}
                    </span>
                    <span className="text-xs text-amber-400/90 font-mono font-medium">
                      Estação 184
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {drink.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed">
                    {drink.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Preço</span>
                    <span className="text-xl font-serif font-extrabold text-amber-400">
                      R$ {drink.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(drink)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 active:scale-[0.98]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pedir Drink</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Beer Reminder */}
        <div className="mt-12 bg-[#1A1816] rounded-2xl p-6 sm:p-8 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Beer className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                Prefere o Clássico Chopp Brahma Gelado?
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Tulipa (R$ 10,90) ou Caldereta (R$ 10,90), além de garrafas de 600ml de Spaten, Original e Stella Artois.
              </p>
            </div>
          </div>

          <a
            href="#cardapio"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wide shrink-0 transition-colors"
          >
            Ver Carta Completa de Cervejas
          </a>
        </div>

      </div>
    </section>
  );
}