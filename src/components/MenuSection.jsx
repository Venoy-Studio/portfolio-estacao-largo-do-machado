import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Check, 
  Sparkles, 
  Star, 
  Filter, 
  X, 
  Users, 
  Flame, 
  Beer,
  Utensils
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function MenuSection({ 
  restaurantData, 
  onAddToCart, 
  searchQuery, 
  setSearchQuery,
  activeCategory,
  setActiveCategory
}) {
  const { t, language, translateItem, translateCategory } = useLanguage();
  const [selectedTag, setSelectedTag] = useState('all');
  const [addedItemMap, setAddedItemMap] = useState({});
  const [selectedOptionsMap, setSelectedOptionsMap] = useState({});

  const rawCategories = restaurantData?.categories || [];
  const rawItems = restaurantData?.items || [];

  // Filter tags
  const tags = [
    { id: 'all', label: t('menu.tags.all') },
    { id: 'popular', label: t('menu.tags.popular') },
    { id: 'executivos', label: t('menu.tags.executivos') },
    { id: 'petiscos', label: t('menu.tags.petiscos') },
    { id: 'chopes', label: t('menu.tags.chopes') },
    { id: 'drinks', label: t('menu.tags.drinks') },
    { id: 'share', label: t('menu.tags.share') },
    { id: 'veg', label: t('menu.tags.veg') },
    { id: 'sobremesas', label: t('menu.tags.sobremesas') }
  ];

  // Translated categories
  const categories = useMemo(() => {
    return rawCategories.map(c => translateCategory(c));
  }, [rawCategories, language]);

  // Translated items
  const items = useMemo(() => {
    return rawItems.map(i => translateItem(i));
  }, [rawItems, language]);

  // Filtered items logic
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // 1. Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }

      // 2. Category filter
      if (activeCategory !== 'todos') {
        if (item.category !== activeCategory) return false;
      }

      // 3. Quick Tag filter
      if (selectedTag === 'popular' && !item.popular) return false;
      if (selectedTag === 'executivos' && item.category !== 'executivos') return false;
      if (selectedTag === 'petiscos' && item.category !== 'petiscos') return false;
      if (selectedTag === 'chopes' && item.category !== 'chopes' && item.category !== 'bebidas') return false;
      if (selectedTag === 'drinks' && item.category !== 'drinks') return false;
      if (selectedTag === 'veg' && item.dietary !== 'Vegetariano' && item.dietary !== 'Vegetarian' && item.category !== 'vegetarianos') return false;
      if (selectedTag === 'sobremesas' && item.category !== 'sobremesas') return false;
      if (selectedTag === 'share' && !(item.serves?.includes('2') || item.serves?.includes('3') || item.serves?.includes('4') || item.serves?.toLowerCase().includes('compartilhar') || item.serves?.toLowerCase().includes('share') || item.serves?.toLowerCase().includes('compartir'))) return false;

      return true;
    });
  }, [items, searchQuery, activeCategory, selectedTag]);

  // Handle Add To Cart
  const handleAdd = (item) => {
    const selectedOption = selectedOptionsMap[item.id] || (item.priceOptions ? item.priceOptions[0] : null);
    const itemToAdd = {
      ...item,
      selectedOption: selectedOption ? selectedOption.label : null,
      price: selectedOption ? selectedOption.price : item.price
    };

    onAddToCart(itemToAdd);

    // Visual feedback
    setAddedItemMap(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const handleOptionChange = (itemId, option) => {
    setSelectedOptionsMap(prev => ({
      ...prev,
      [itemId]: option
    }));
  };

  const currentCategoryObj = categories.find(c => c.id === activeCategory);

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-[#FAF8F5] relative scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-800" />
            {t('menu.badge')}
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            {t('menu.title')}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-sm mb-8 space-y-4">
          
          {/* Top row: Search input + Results count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('menu.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-stone-50 hover:bg-stone-100/70 focus:bg-white rounded-xl border border-stone-200 focus:border-amber-700 text-sm text-stone-800 placeholder-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-stone-500 font-medium px-2 flex items-center justify-between sm:justify-end gap-2">
              <span>{filteredItems.length} {t('menu.resultsCount')}</span>
              {(searchQuery || activeCategory !== 'todos' || selectedTag !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('todos');
                    setSelectedTag('all');
                  }}
                  className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2 ml-2"
                >
                  {t('menu.clearFilters')}
                </button>
              )}
            </div>

          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar pt-1">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => {
                  setSelectedTag(tag.id);
                  if (tag.id === 'executivos') setActiveCategory('executivos');
                  else if (tag.id === 'petiscos') setActiveCategory('petiscos');
                  else if (tag.id === 'chopes') setActiveCategory('chopes');
                  else if (tag.id === 'drinks') setActiveCategory('drinks');
                  else if (tag.id === 'sobremesas') setActiveCategory('sobremesas');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedTag === tag.id
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Tab Strip */}
        <div className="sticky top-[73px] z-20 bg-[#FAF8F5]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-stone-200 mb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedTag('all');
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-900 text-amber-300 shadow-md scale-[1.02]'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-amber-400 text-stone-900 font-bold' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner (if active category has description) */}
        {activeCategory !== 'todos' && currentCategoryObj && (
          <div className="mb-6 p-4 rounded-xl bg-amber-900/5 border border-amber-900/15 flex items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-950">
                {currentCategoryObj.name}
              </h3>
              {currentCategoryObj.description && (
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  {currentCategoryObj.description}
                </p>
              )}
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full whitespace-nowrap">
              {filteredItems.length} {t('menu.resultsCount')}
            </span>
          </div>
        )}

        {/* Dishes Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemMap[item.id];
              const selectedOption = selectedOptionsMap[item.id] || (item.priceOptions ? item.priceOptions[0] : null);
              const currentPrice = selectedOption ? selectedOption.price : item.price;
              const catObj = categories.find(c => c.id === item.category);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-800/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header line: category & badges */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                        {catObj?.name || item.category}
                      </span>

                      <div className="flex items-center gap-1.5 flex-wrap justify-end">
                        {item.badge && (
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            {item.badge}
                          </span>
                        )}
                        {item.serves && (
                          <span className="text-[10px] text-stone-500 flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-full">
                            <Users className="w-3 h-3 text-stone-400" />
                            {item.serves}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Multiple Price Options (if any) */}
                    {item.priceOptions && item.priceOptions.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-stone-100">
                        <label className="text-[11px] font-medium text-stone-500 block mb-1.5">
                          {t('menu.portionOptions')}
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {item.priceOptions.map((opt, optIdx) => {
                            const isOptSelected = (selectedOption?.label === opt.label);
                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => handleOptionChange(item.id, opt)}
                                className={`text-left p-2 rounded-lg border text-xs transition-all ${
                                  isOptSelected
                                    ? 'bg-amber-900/10 border-amber-800 text-amber-950 font-bold'
                                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                                }`}
                              >
                                <div className="truncate">{opt.label}</div>
                                <div className="text-amber-800 font-extrabold mt-0.5">
                                  R$ {opt.price.toFixed(2).replace('.', ',')}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Price & Add Button */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                        {language === 'en' ? 'Price' : language === 'es' ? 'Precio' : 'Valor'}
                      </span>
                      <span className="text-xl font-serif font-extrabold text-stone-900">
                        R$ {currentPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-sm active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300'
                      }`}
                      aria-label={`${t('menu.addToCart')} - ${item.name}`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t('menu.addedToCart')}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t('menu.addToCart')}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              {t('menu.noResultsTitle')}
            </h4>
            <p className="text-xs text-stone-500 mt-1">
              {t('menu.noResultsSub')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
                setSelectedTag('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-semibold hover:bg-amber-900 transition-colors"
            >
              {t('menu.clearFilters')}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
