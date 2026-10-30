import React from 'react';
import { Star, MessageCircle, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function ReviewsSection({ restaurantData }) {
  const reviews = restaurantData.googleReviews.reviews;

  return (
    <section id="avaliacoes" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Google Score Summary */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              Opinião de Quem Frequenta
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Avaliações Reais dos Nossos Clientes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Sua satisfação diária é o que move nossa tradição de quase 60 anos.
            </p>
          </div>

          {/* Google Score Badge */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center font-serif text-2xl font-bold text-amber-900">
              4.8
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-stone-900 mt-0.5">
                992 Avaliações no Google
              </p>
              <span className="text-[10px] text-stone-500">
                Verificadas no perfil oficial
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                {/* Comment Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Source */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{rev.author}</h4>
                  <span className="text-[10px] text-stone-400 flex items-center gap-1">
                    Google Local Guide
                  </span>
                </div>
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                  alt="Google" 
                  className="w-4 h-4 opacity-70"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Customer Care Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block">
                Nosso Compromisso com Você
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Já nos visitou? Conte como foi sua experiência!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Periodicamente realizamos reuniões de equipe para aperfeiçoar nosso atendimento e cardápio. Caso algo não tenha saído de seu agrado, envie uma mensagem direta de WhatsApp; nós fazemos questão de ouvir você e solucionar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <a
                href="https://estacaolargodomachado.com.br/google"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-semibold text-xs sm:text-sm shadow transition-all"
              >
                <ThumbsUp className="w-4 h-4 text-amber-400" />
                <span>Avaliar no Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={restaurantData?.restaurant?.contacts?.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar com o Gerente</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}