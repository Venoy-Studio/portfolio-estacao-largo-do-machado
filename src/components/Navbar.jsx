import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Search, 
  Beer, 
  Sparkles, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  searchQuery, 
  setSearchQuery, 
  restaurantData 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if restaurant is currently open (11:00 to 00:00 every day)
  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const hour = now.getHours();
      // Open from 11:00 to 23:59 (and up to midnight)
      setIsOpenNow(hour >= 11 && hour < 24);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Executivos', href: '#executivos-section' },
    { label: 'Drinks & Chopes', href: '#drinks-section' },
    { label: 'Tradição 1966', href: '#historia' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Onde Estamos', href: '#localizacao' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Bar Announcement */}
      <div className="bg-[#1C1917] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              Tradição Carioca Desde 1966
            </span>
            <span className="hidden md:inline text-stone-600">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Rua Bento Lisboa, 184 — Largo do Machado / Catete
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="text-stone-300 font-medium">
                {isOpenNow ? 'Aberto Hoje até 00:00' : 'Abre às 11:00'}
              </span>
            </div>
            <a 
              href="tel:2125565323" 
              className="hidden lg:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (21) 2556-5323
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200' 
          : 'bg-[#FAF8F5] py-4 border-b border-stone-200/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-lg p-1">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-amber-800/40 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/images/logo.jpg" 
                alt="Logo Estação Largo do Machado" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/LOGO-ESTACAO-baixa.jpg";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight group-hover:text-amber-900 transition-colors">
                Estação Largo do Machado
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-amber-800">
                Boteco 184 • Desde 1966
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-stone-700 hover:text-amber-800 font-medium text-sm transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-800 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Search, WhatsApp CTA, Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-stone-100 rounded-full border border-stone-300 px-3 py-1.5 shadow-inner transition-all w-48 sm:w-64">
                  <Search className="w-4 h-4 text-stone-500 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Buscar no cardápio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-transparent text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
                  />
                  <button 
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="text-stone-400 hover:text-stone-600 p-1"
                    title="Fechar busca"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 sm:px-3 sm:py-2 text-stone-700 hover:text-amber-900 hover:bg-stone-100 rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium border border-transparent hover:border-stone-200"
                  title="Buscar prato ou bebida"
                  aria-label="Buscar prato ou bebida"
                >
                  <Search className="w-4 h-4 text-stone-600" />
                  <span className="hidden sm:inline">Buscar</span>
                </button>
              )}
            </div>

            {/* WhatsApp Quick Order CTA */}
            <a
              href={restaurantData?.restaurant?.contacts?.whatsappLink || "https://wa.me/552125565323"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir no WhatsApp</span>
            </a>

            {/* Cart / Comanda Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center justify-center p-2.5 sm:px-4 sm:py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-medium text-xs sm:text-sm shadow-sm hover:shadow active:scale-[0.98] transition-all"
              aria-label="Abrir Comanda e Pedido"
            >
              <ShoppingBag className="w-4 h-4 sm:mr-2 text-amber-400" />
              <span className="hidden sm:inline text-stone-100 font-semibold">Comanda</span>
              
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 sm:relative sm:top-auto sm:right-auto sm:ml-2 w-5 h-5 flex items-center justify-center bg-amber-600 text-white text-[11px] font-bold rounded-full shadow animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-stone-50 border-t border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-stone-800 hover:bg-stone-200/60 font-medium text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 space-y-2.5">
              <a
                href={restaurantData?.restaurant?.contacts?.whatsappLink || "https://wa.me/552125565323"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 text-white font-semibold text-sm shadow active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir pelo WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={restaurantData?.restaurant?.contacts?.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-red-600 text-white font-medium text-xs hover:bg-red-700 transition-colors"
                >
                  <span>Pedir no iFood</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={restaurantData?.restaurant?.contacts?.app99}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-amber-500 text-stone-900 font-medium text-xs hover:bg-amber-600 transition-colors"
                >
                  <span>Pedir no 99Food</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="text-center pt-2 text-xs text-stone-500">
                Rua Bento Lisboa, 184 • Telefone: (21) 2556-5323
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}