import React from 'react';
import { Star, MessageCircle, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ReviewsSection({ restaurantData }) {
  const { t, language } = useLanguage();
  const googleReviews = restaurantData?.restaurant?.googleReviews || restaurantData?.googleReviews || {};
  
  const reviews = [
    {
      author: "Fillipe Braga",
      date: language === 'en' ? "February 2025" : language === 'es' ? "Febrero de 2025" : "Fevereiro de 2025",
      rating: 5,
      comment: language === 'en' 
        ? "Excellent service and delicious food. The feijoada and Oswaldo Aranha steak are flawless. One of the top dining spots in Largo do Machado!"
        : language === 'es'
        ? "Excelente atención y comida riquísima. La feijoada y el bife a la Oswaldo Aranha son impecables. ¡Uno de los mejores puntos de Largo do Machado!"
        : "Ótimo atendimento e comida muito boa. A feijoada e o filé à Oswaldo Aranha são impecáveis. Um dos melhores pontos do Largo do Machado!"
    },
    {
      author: "Lucía G.",
      date: language === 'en' ? "February 2025" : language === 'es' ? "Febrero de 2025" : "Fevereiro de 2025",
      rating: 5,
      comment: language === 'en'
        ? "We had a lovely lunch! The steak was delicious and the staff were very friendly and attentive. Great traditional atmosphere in Rio."
        : language === 'es'
        ? "¡Tuvimos un almuerzo encantador! El bife estaba delicioso y el personal fue súper amable y atento. Gran ambiente tradicional en Río."
        : "We had a lovely lunch! The steak was delicious and the staff were very friendly and attentive. Great traditional atmosphere in Rio."
    },
    {
      author: "Carlos Eduardo Mendes",
      date: language === 'en' ? "January 2025" : language === 'es' ? "Enero de 2025" : "Janeiro de 2025",
      rating: 5,
      comment: language === 'en'
        ? "Brahma draft beer served sub-zero cold and codfish croquette crispy on the outside, soft inside. High quality classic Rio boteco."
        : language === 'es'
        ? "Chopp Brahma estupendamente helado y el buñuelo de bacalao crocante por fuera y suave por dentro. Boteco clásico de alta calidad."
        : "Chopp Brahma estupidamente gelado e o bolinho de bacalhau crocante por fora e macio por dentro. Lugar clássico de boteco carioca de alta qualidade."
    },
    {
      author: "Mariana Alencar",
      date: language === 'en' ? "December 2024" : language === 'es' ? "Diciembre de 2024" : "Dezembro de 2024",
      rating: 5,
      comment: language === 'en'
        ? "The executive lunch saves the work routine! Fair prices, generous portions, and genuine homestyle flavors. Top notch service."
        : language === 'es'
        ? "¡El almuerzo ejecutivo salva la rutina! Precio justo, platos muy abundantes y sabor casero de verdad. Atención de diez."
        : "O almoço executivo salva a rotina! Preço justo, pratos muito bem servidos e sabor caseiro de verdade. Atendimento nota 10."
    }
  ];

  const score = googleReviews.score || 4.8;
  const totalReviews = googleReviews.totalReviews || 992;
  const whatsappLink = restaurantData?.restaurant?.contacts?.whatsappLink || "https://wa.me/552125565323";

  return (
    <section id="avaliacoes" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Google Score Summary */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              {t('reviews.badge')}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t('reviews.title')}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Google Score Badge */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center font-serif text-2xl font-bold text-amber-900">
              {score}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-stone-900 mt-0.5">
                {language === 'en' 
                  ? `${totalReviews} Google Reviews` 
                  : language === 'es' 
                  ? `${totalReviews} Opiniones en Google` 
                  : `${totalReviews} Avaliações no Google`}
              </p>
              <span className="text-[10px] text-stone-500">
                {language === 'en' ? 'Verified on official profile' : language === 'es' ? 'Verificadas en perfil oficial' : 'Verificadas no perfil oficial'}
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
                    {[...Array(rev.rating || 5)].map((_, i) => (
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
                {language === 'en' ? 'Our Commitment to You' : language === 'es' ? 'Nuestro Compromiso Contigo' : 'Nosso Compromisso com Você'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {language === 'en' 
                  ? 'Visited us recently? Tell us about your experience!' 
                  : language === 'es' 
                  ? '¿Ya nos visitaste? ¡Cuéntanos tu experiencia!' 
                  : 'Já nos visitou? Conte como foi sua experiência!'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {language === 'en'
                  ? 'We continuously strive to elevate our service, menu, and warmth. If anything was not to your absolute satisfaction, reach out to us directly on WhatsApp; we make it a point to listen and make it right.'
                  : language === 'es'
                  ? 'Periódicamente nos reunimos para perfeccionar nuestro servicio y menú. Si algo no fue de tu total agrado, envíanos un mensaje directo de WhatsApp; nos aseguraremos de escucharte y solucionarlo.'
                  : 'Periodicamente realizamos reuniões de equipe para aperfeiçoar nosso atendimento e cardápio. Caso algo não tenha saído de seu agrado, envie uma mensagem direta de WhatsApp; nós fazemos questão de ouvir você e solucionar.'}
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
                <span>{t('reviews.writeReview')}</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {language === 'en' ? 'Talk to the Manager' : language === 'es' ? 'Hablar con el Gerente' : 'Falar com o Gerente'}
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
