import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  CreditCard, 
  Navigation, 
  Bike, 
  CheckCircle,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function LocationSection({ restaurantData }) {
  const { t, language } = useLanguage();
  const address = restaurantData.restaurant.address;
  const hours = restaurantData.restaurant.hours;
  const contacts = restaurantData.restaurant.contacts;

  return (
    <section id="localizacao" className="py-20 bg-[#F4EFEA] border-b border-stone-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-950 text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-800" />
            {t('location.badge')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {t('location.title')}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            {t('location.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Card 1: Endereço & Metrô */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">{t('location.addressTitle')}</h3>
                  <p className="text-xs text-stone-500">{t('location.addressNeighborhood')}</p>
                </div>
              </div>

              <div className="text-sm text-stone-700 leading-relaxed pt-2 border-t border-stone-100">
                <p className="font-semibold text-stone-900">{address.street}</p>
                <p>{address.neighborhood} — {address.city} / {address.state}</p>
                <p className="text-xs text-stone-500 mt-1">CEP: {address.cep}</p>
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center gap-2 border border-emerald-200">
                  <Navigation className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('location.metroProximity')}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Rua Bento Lisboa 184 Largo do Machado Rio de Janeiro RJ')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-semibold shadow transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t('location.btnMaps')}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Card 2: Horários & Contato */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">{t('location.hoursTitle')}</h3>
                  <p className="text-xs text-stone-500">{t('location.hoursDays')}</p>
                </div>
              </div>

              <div className="text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-600">
                    {language === 'en' ? 'Mon to Sun:' : language === 'es' ? 'Lun a Dom:' : 'Segunda a Domingo:'}
                  </span>
                  <span className="font-bold text-stone-900">{t('location.hoursTime')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-600">
                    {language === 'en' ? 'Daily Executive:' : language === 'es' ? 'Almuerzo Ejecutivo:' : 'Almoço Executivo:'}
                  </span>
                  <span className="font-bold text-emerald-800">
                    {language === 'en' ? 'Served all day' : language === 'es' ? 'Servido todo el día' : 'Servido o dia todo'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-600">
                    {language === 'en' ? 'Direct Phone:' : language === 'es' ? 'Teléfono Directo:' : 'Telefone / Fixo:'}
                  </span>
                  <a href="tel:2125565323" className="font-bold text-amber-900 hover:underline">
                    (21) 2556-5323
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t('location.btnWhatsApp')}</span>
                </a>
              </div>
            </div>

            {/* Card 3: Formas de Pagamento & Área de Entrega */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">{t('location.paymentsTitle')}</h3>
                  <p className="text-xs text-stone-500">
                    {language === 'en' ? 'Cards, Pix, Meal Vouchers' : language === 'es' ? 'Tarjetas, Pix, Vales' : 'Cartões, Pix, Dinheiro e VR'}
                  </p>
                </div>
              </div>

              <div className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                <p>{t('location.paymentsList')}</p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5 mb-1">
                  <Bike className="w-4 h-4 text-amber-800" />
                  <span>{t('location.deliveryTitle')}</span>
                </span>
                <p className="text-xs text-stone-600">
                  {t('location.deliveryAreas')}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Iframe (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-300 shadow-md min-h-[420px] bg-stone-200 relative">
            <iframe
              title="Localização do Restaurante Estação Largo do Machado no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8327464014906!2d-43.17983632386927!3d-22.928734979240417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f6424b4f535%3A0xe5a3bb45f956c3ee!2sR.%20Bento%20Lisboa%2C%20184%20-%20Catete%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022221-011!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
