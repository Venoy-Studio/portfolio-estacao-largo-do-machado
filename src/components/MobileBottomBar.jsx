import React from 'react';
import { Utensils, MessageCircle, ShoppingBag } from 'lucide-react';

export default function MobileBottomBar({ cartCount, onOpenCart, onOpenMenu, restaurantData }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-t border-stone-800 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Menu shortcut */}
        <button
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/60 active:scale-95 transition-all text-[11px] font-semibold min-h-[48px]"
        >
          <Utensils className="w-5 h-5 text-amber-400 mb-0.5" />
          <span>Cardápio</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={restaurantData?.restaurant?.contacts?.whatsappLink || "https://wa.me/552125565323"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 active:bg-emerald-800 text-white shadow text-[11px] font-semibold active:scale-95 transition-all min-h-[48px]"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span>Pedir WhatsApp</span>
        </a>

        {/* Comanda Digital */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-600 active:bg-amber-700 text-stone-950 font-bold shadow text-[11px] active:scale-95 transition-all min-h-[48px]"
        >
          <ShoppingBag className="w-5 h-5 mb-0.5 text-stone-950" />
          <span>Comanda</span>

          {cartCount > 0 && (
            <span className="absolute top-1 right-3 w-5 h-5 rounded-full bg-stone-950 text-amber-400 text-[10px] font-extrabold flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}