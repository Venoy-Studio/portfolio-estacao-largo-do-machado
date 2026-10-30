import React, { useState } from 'react';
import { 
  ArrowRight, 
  Beer, 
  MapPin, 
  Star, 
  Clock, 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck,
  Utensils,
  Award
} from 'lucide-react';

export default function Hero({ restaurantData, onExploreMenu }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const gallery = [
    {
      url: '/images/fachada.jpg',
      fallback: 'https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/estac.jpg',
      title: 'A Tradicional Esquina da Bento Lisboa',
      subtitle: 'Ambiente acolhedor, mesas na calçada e clima clássico de boteco carioca.'
    },
    {
      url: '/images/banner-1.jpg',
      fallback: 'https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/IMG-TOP-HEADER-01.jpg',
      title: 'Gastronomia Afetiva Carioca',
      subtitle: 'Carnes na brasa, feijoada completa, pescados frescos e guarnições caprichadas.'
    },
    {
      url: '/images/banner-2.jpg',
      fallback: 'https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/IMG-TOP-HEADER-02.jpg',
      title: 'Chopp Estupidamente Gelado',
      subtitle: 'Chopp Brahma tirado no grau certo com colarinho aveludado e cervejas 600ml.'
    },
    {
      url: '/images/banner-3.jpg',
      fallback: 'https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/IMG-TOP-HEADER-03.jpg',
      title: 'Almoço & Jantar Executivo Diário',
      subtitle: '24 opções completas e fartas servidas todos os dias para a rotina da Zona Sul.'
    },
    {
      url: '/images/banner-4.jpg',
      fallback: 'https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/IMG-TOP-HEADER-04.jpg',
      title: 'Carta de Drinks Autorais',
      subtitle: 'Homenagens líquidas a Machado de Assis, Aterro do Flamengo e Cássia Eller.'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-subtle-pattern pt-8 pb-16 md:py-20 border-b border-stone-200">
      
      {/* Decorative vintage background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-stone-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid: Editorial Typography + Interactive Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authorial Copy */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Heritage Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-950 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700 animate-pulse" />
              <span>TRADIÇÃO DESDE 1966 • CATETE / LARGO DO MACHADO</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl xl:text-[54px] font-extrabold text-stone-900 leading-[1.12] tracking-tight">
              O sabor autêntico e a alma carioca no coração do <span className="italic font-normal text-amber-900">Largo do Machado.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Localizado na histórica Rua Bento Lisboa, a 50 metros do metrô. 
              Chopp Brahma trincando de gelado, cortes nobres na brasa, a tradicionalíssima 
              feijoada carioca, 24 opções de almoço executivo servidos todos os dias e drinks autorais inesquecíveis.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all group"
              >
                <span>Explorar Cardápio Completo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={restaurantData?.restaurant?.contacts?.whatsappLink || "https://wa.me/552125565323"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-sm active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir no WhatsApp</span>
              </a>
            </div>

            {/* Trust Markers / Badges */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-200/80">
              
              <div>
                <div className="flex items-center gap-1 text-amber-700">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-stone-900 text-base">4.8</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  992 avaliações no Google
                </p>
              </div>

              <div>
                <div className="font-bold text-stone-900 text-base text-amber-900">
                  1966
                </div>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  60 anos de tradição viva
                </p>
              </div>

              <div>
                <div className="font-bold text-stone-900 text-base text-emerald-800">
                  11h às 00h
                </div>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Aberto todos os dias
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Interactive Gallery Showcase */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 bg-stone-900 shadow-2xl">
              
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden group">
                <img
                  src={gallery[activeSlide].url}
                  alt={gallery[activeSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = gallery[activeSlide].fallback;
                  }}
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-85" />

                {/* Badge on top */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ambiente & Gastronomia Original</span>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-amber-100">
                    {gallery[activeSlide].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-0.5 line-clamp-2">
                    {gallery[activeSlide].subtitle}
                  </p>
                </div>
              </div>

              {/* Gallery Navigation Dots / Tabs */}
              <div className="p-3 bg-stone-950/90 border-t border-stone-800 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                {gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`flex-1 min-w-[70px] text-left p-2 rounded-lg transition-all text-xs font-medium ${
                      activeSlide === idx 
                        ? 'bg-amber-900/40 border border-amber-600/50 text-amber-300' 
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-transparent'
                    }`}
                  >
                    <div className="truncate font-semibold">{item.title.split(' ')[0]}</div>
                    <div className="text-[10px] text-stone-500">Foto 0{idx + 1}</div>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}