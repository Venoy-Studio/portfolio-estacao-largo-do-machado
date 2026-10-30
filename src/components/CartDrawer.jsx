import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Bike, 
  Store, 
  Utensils, 
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart,
  restaurantData 
}) {
  const { t, language } = useLanguage();
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup' | 'table'
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('Largo do Machado');
  const [tableNumber, setTableNumber] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cartao_entrega'); // 'pix', 'cartao_entrega', 'dinheiro', 'vr'

  if (!isOpen) return null;

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Generate WhatsApp Order Message
  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = '';

    if (language === 'en') {
      message += `*NEW ORDER — RESTAURANTE ESTAÇÃO LARGO DO MACHADO*\n`;
      message += `_Tradition Since 1966 • Bento Lisboa, 184 (Order in English)_\n\n`;

      if (orderType === 'delivery') {
        message += `🛵 *TYPE:* Home Delivery\n`;
        if (customerName) message += `👤 *Customer:* ${customerName}\n`;
        if (deliveryAddress) message += `📍 *Delivery Address:* ${deliveryAddress} — ${neighborhood}\n`;
      } else if (orderType === 'pickup') {
        message += `🛍️ *TYPE:* Takeout / Counter Pickup (Bento Lisboa, 184)\n`;
        if (customerName) message += `👤 *Customer:* ${customerName}\n`;
      } else {
        message += `🍽️ *TYPE:* Dine-in at Restaurant\n`;
        if (tableNumber) message += `🪑 *Table:* ${tableNumber}\n`;
        if (customerName) message += `👤 *Name:* ${customerName}\n`;
      }

      const paymentLabelsEn = {
        'pix': 'Pix / Instant Transfer',
        'cartao_entrega': 'Credit / Debit Card (Bring Card Machine)',
        'vr': 'Meal Voucher (VR / Sodexo / Alelo / Ticket)',
        'dinheiro': 'Cash'
      };
      message += `💳 *Payment Method:* ${paymentLabelsEn[paymentMethod] || paymentMethod}\n\n`;

      message += `*ORDER ITEMS:*\n`;
      cartItems.forEach((item, index) => {
        const optionText = item.selectedOption ? ` (${item.selectedOption})` : '';
        message += `${index + 1}. *${item.quantity}x* ${item.name}${optionText} — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
      });

      message += `\n💰 *ITEMS SUBTOTAL:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

      if (generalNotes.trim()) {
        message += `📝 *Notes:* ${generalNotes}\n`;
      }

      message += `\n_Please confirm the estimated time and order details! Thank you!_`;
    } else if (language === 'es') {
      message += `*NUEVO PEDIDO — RESTAURANTE ESTAÇÃO LARGO DO MACHADO*\n`;
      message += `_Tradición Desde 1966 • Bento Lisboa, 184 (Pedido en Español)_\n\n`;

      if (orderType === 'delivery') {
        message += `🛵 *TIPO:* Entrega a Domicilio\n`;
        if (customerName) message += `👤 *Cliente:* ${customerName}\n`;
        if (deliveryAddress) message += `📍 *Dirección:* ${deliveryAddress} — ${neighborhood}\n`;
      } else if (orderType === 'pickup') {
        message += `🛍️ *TIPO:* Retiro en Barra (Bento Lisboa, 184)\n`;
        if (customerName) message += `👤 *Cliente:* ${customerName}\n`;
      } else {
        message += `🍽️ *TIPO:* Consumo en Mesa\n`;
        if (tableNumber) message += `🪑 *Mesa:* ${tableNumber}\n`;
        if (customerName) message += `👤 *Nombre:* ${customerName}\n`;
      }

      const paymentLabelsEs = {
        'pix': 'Pix / Transferencia',
        'cartao_entrega': 'Tarjeta de Débito / Crédito (Llevar Terminal)',
        'vr': 'Vale de Comida (VR / Sodexo / Alelo / Ticket)',
        'dinheiro': 'Efectivo'
      };
      message += `💳 *Pago:* ${paymentLabelsEs[paymentMethod] || paymentMethod}\n\n`;

      message += `*PRODUCTOS DEL PEDIDO:*\n`;
      cartItems.forEach((item, index) => {
        const optionText = item.selectedOption ? ` (${item.selectedOption})` : '';
        message += `${index + 1}. *${item.quantity}x* ${item.name}${optionText} — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
      });

      message += `\n💰 *VALOR TOTAL DE PRODUCTOS:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

      if (generalNotes.trim()) {
        message += `📝 *Observaciones:* ${generalNotes}\n`;
      }

      message += `\n_¡Por favor confirme el tiempo estimado y los datos del pedido! Muchas gracias._`;
    } else {
      message += `*NOVO PEDIDO — RESTAURANTE ESTAÇÃO LARGO DO MACHADO*\n`;
      message += `_Tradicional Desde 1966 • Rua Bento Lisboa, 184_\n\n`;

      if (orderType === 'delivery') {
        message += `🛵 *TIPO:* Entrega em Domicílio\n`;
        if (customerName) message += `👤 *Cliente:* ${customerName}\n`;
        if (deliveryAddress) message += `📍 *Endereço:* ${deliveryAddress} — ${neighborhood}\n`;
      } else if (orderType === 'pickup') {
        message += `🛍️ *TIPO:* Retirada no Balcão (Bento Lisboa, 184)\n`;
        if (customerName) message += `👤 *Cliente:* ${customerName}\n`;
      } else {
        message += `🍽️ *TIPO:* Consumo no Local\n`;
        if (tableNumber) message += `🪑 *Mesa:* ${tableNumber}\n`;
        if (customerName) message += `👤 *Nome:* ${customerName}\n`;
      }

      const paymentLabels = {
        'pix': 'Pix na Entrega / Chave Pix',
        'cartao_entrega': 'Cartão de Débito / Crédito (Levar Máquina)',
        'vr': 'Vale Refeição (Sodexo / VR / Alelo / Ticket)',
        'dinheiro': 'Dinheiro'
      };
      message += `💳 *Pagamento:* ${paymentLabels[paymentMethod] || paymentMethod}\n\n`;

      message += `*ITENS DO PEDIDO:*\n`;
      cartItems.forEach((item, index) => {
        const optionText = item.selectedOption ? ` (${item.selectedOption})` : '';
        message += `${index + 1}. *${item.quantity}x* ${item.name}${optionText} — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
      });

      message += `\n💰 *VALOR TOTAL DOS ITENS:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

      if (generalNotes.trim()) {
        message += `📝 *Observações:* ${generalNotes}\n`;
      }

      message += `\n_Por favor, confirme o tempo estimado e os dados para finalização!_`;
    }

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/552125565323?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200 animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-[#1C1917] text-white flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">{t('cart.title')}</h3>
                <span className="text-xs text-amber-300 font-medium">
                  {totalItemsCount} {totalItemsCount === 1 
                    ? (language === 'en' ? 'item selected' : language === 'es' ? 'producto seleccionado' : 'item selecionado')
                    : (language === 'en' ? 'items selected' : language === 'es' ? 'productos seleccionados' : 'itens selecionados')}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Fechar comanda"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            
            {cartItems.length > 0 ? (
              <>
                {/* Order Type Toggle */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {t('cart.orderType')}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 text-xs ${
                        orderType === 'delivery'
                          ? 'bg-amber-900/10 border-amber-800 text-amber-950 font-bold shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      <span>{t('cart.delivery')}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 text-xs ${
                        orderType === 'pickup'
                          ? 'bg-amber-900/10 border-amber-800 text-amber-950 font-bold shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>{t('cart.pickup')}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('table')}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 text-xs ${
                        orderType === 'table'
                          ? 'bg-amber-900/10 border-amber-800 text-amber-950 font-bold shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      <Utensils className="w-4 h-4" />
                      <span>{t('cart.table')}</span>
                    </button>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500">
                    <span>{language === 'en' ? 'Selected Items' : language === 'es' ? 'Productos Seleccionados' : 'Itens Escolhidos'}</span>
                    <button
                      onClick={onClearCart}
                      className="text-stone-400 hover:text-red-600 text-[11px] underline lowercase"
                    >
                      {t('cart.btnClear')}
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {cartItems.map((item, idx) => (
                      <div
                        key={`${item.id}-${item.selectedOption || idx}`}
                        className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs text-stone-900 truncate">
                            {item.name}
                          </h4>
                          {item.selectedOption && (
                            <span className="text-[11px] text-amber-800 font-medium block">
                              {item.selectedOption}
                            </span>
                          )}
                          <span className="text-xs font-bold text-stone-900 mt-0.5 block">
                            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedOption, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-stone-300 text-stone-700 flex items-center justify-center hover:bg-stone-100 transition-colors"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          
                          <span className="w-6 text-center text-xs font-bold text-stone-900">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedOption, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-stone-300 text-stone-700 flex items-center justify-center hover:bg-stone-100 transition-colors"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => onRemoveItem(item.id, item.selectedOption)}
                            className="w-7 h-7 rounded-lg text-stone-400 hover:text-red-600 flex items-center justify-center ml-1 transition-colors"
                            aria-label="Remover item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-3 border-t border-stone-200 text-xs">
                  
                  <div>
                    <label className="font-semibold text-stone-700 block mb-1">
                      {t('cart.nameLabel')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('cart.namePlaceholder')}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <>
                      <div>
                        <label className="font-semibold text-stone-700 block mb-1">
                          {t('cart.addressLabel')}
                        </label>
                        <input
                          type="text"
                          placeholder={t('cart.addressPlaceholder')}
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-amber-700"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-stone-700 block mb-1">
                          {t('cart.neighborhoodLabel')}
                        </label>
                        <select
                          value={neighborhood}
                          onChange={(e) => setNeighborhood(e.target.value)}
                          className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-amber-700 font-medium"
                        >
                          <option value="Largo do Machado">Largo do Machado</option>
                          <option value="Catete">Catete</option>
                          <option value="Flamengo">Flamengo</option>
                          <option value="Glória">Glória</option>
                          <option value="Laranjeiras">Laranjeiras</option>
                          <option value="Outro Bairro">
                            {language === 'en' ? 'Other Neighborhood (Confirm fee)' : language === 'es' ? 'Otro Barrio (Consultar costo)' : 'Outro Bairro (Consultar taxa)'}
                          </option>
                        </select>
                      </div>
                    </>
                  )}

                  {orderType === 'table' && (
                    <div>
                      <label className="font-semibold text-stone-700 block mb-1">
                        {t('cart.tableLabel')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('cart.tablePlaceholder')}
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-amber-700"
                      />
                    </div>
                  )}

                  {/* Payment Method Selector */}
                  <div>
                    <label className="font-semibold text-stone-700 block mb-1">
                      {t('cart.paymentLabel')}
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-amber-700 font-medium"
                    >
                      <option value="cartao_entrega">{t('cart.paymentCard')}</option>
                      <option value="pix">{t('cart.paymentPix')}</option>
                      <option value="vr">{t('cart.paymentVr')}</option>
                      <option value="dinheiro">{t('cart.paymentCash')}</option>
                    </select>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="font-semibold text-stone-700 block mb-1">
                      {t('cart.notesLabel')}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={t('cart.notesPlaceholder')}
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-amber-700 resize-none"
                    />
                  </div>

                </div>
              </>
            ) : (
              /* Empty Cart State */
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-800">
                  {t('cart.emptyTitle')}
                </h4>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  {t('cart.emptySub')}
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-800 text-white font-semibold text-xs shadow hover:bg-amber-900 transition-colors"
                >
                  <span>{t('cart.btnExplore')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Drawer Footer with Subtotal and WhatsApp Action */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 space-y-3">
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600 font-medium">{t('cart.subtotal')}</span>
                <span className="font-serif font-extrabold text-stone-900 text-lg">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              {orderType === 'delivery' && (
                <div className="text-[11px] text-stone-500 flex items-center justify-between border-t border-stone-200/60 pt-2">
                  <span>
                    {language === 'en' ? 'Local delivery fee:' : language === 'es' ? 'Costo de envío en la zona:' : 'Taxa de entrega nas redondezas:'}
                  </span>
                  <span className="font-medium text-emerald-800">
                    {language === 'en' ? 'Confirmed on WhatsApp' : language === 'es' ? 'Confirmado en WhatsApp' : 'Confirmada no WhatsApp'}
                  </span>
                </div>
              )}

              {/* Big WhatsApp Send Order Button */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('cart.btnSendWhatsApp')}</span>
              </button>

              <p className="text-[10px] text-center text-stone-500">
                {t('cart.whatsappNotice')}
              </p>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
