import React, { useState, useEffect } from 'react';
import restaurantData from './data/restaurantData.json';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import FeaturedDishBanner from './components/FeaturedDishBanner.jsx';
import MenuSection from './components/MenuSection.jsx';
import DrinksShowcase from './components/DrinksShowcase.jsx';
import HeritageSection from './components/HeritageSection.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import LocationSection from './components/LocationSection.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import MobileBottomBar from './components/MobileBottomBar.jsx';
import ProposalNotice from './components/ProposalNotice.jsx';
import { useLanguage } from './i18n/LanguageContext.jsx';

export default function App() {
  const { t } = useLanguage();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('estacao_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [toastMessage, setToastMessage] = useState(null);

  // Save cart in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('estacao_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add Item to Cart
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.id === item.id && i.selectedOption === item.selectedOption
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1
        };
        return next;
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });

    showToast(`"${item.name}" ${t('toast.itemAdded')}`);
  };

  // Update Item Quantity
  const handleUpdateQuantity = (itemId, selectedOption, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId, selectedOption);
      return;
    }

    setCartItems(prev => prev.map(item => {
      if (item.id === itemId && item.selectedOption === selectedOption) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Remove Item
  const handleRemoveItem = (itemId, selectedOption) => {
    setCartItems(prev => prev.filter(
      item => !(item.id === itemId && item.selectedOption === selectedOption)
    ));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigate to Menu
  const handleExploreMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Total quantity count for badge
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 pb-16 md:pb-0">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-stone-900 text-amber-300 text-xs sm:text-sm font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-amber-600/40 flex items-center gap-2 animate-in slide-in-from-top-4 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        restaurantData={restaurantData}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          restaurantData={restaurantData}
          onExploreMenu={handleExploreMenu}
        />

        {/* 4 Feature Pillars */}
        <Features
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            handleExploreMenu();
          }}
        />

        {/* Cinematic Feijoada & Cozido Highlight Banner */}
        <FeaturedDishBanner
          onAddToCart={handleAddToCart}
          restaurantData={restaurantData}
        />

        {/* Master Interactive Menu (136 options) */}
        <MenuSection
          restaurantData={restaurantData}
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Signature Rio-themed Drinks Showcase */}
        <DrinksShowcase
          onAddToCart={handleAddToCart}
          restaurantData={restaurantData}
        />

        {/* Authentic History (Desde 1966) */}
        <HeritageSection
          restaurantData={restaurantData}
        />

        {/* Real Google Reviews (4.8★ 992 reviews) */}
        <ReviewsSection
          restaurantData={restaurantData}
        />

        {/* Location & Directions (Rua Bento Lisboa 184) */}
        <LocationSection
          restaurantData={restaurantData}
        />

      </main>

      {/* Footer */}
      <Footer
        restaurantData={restaurantData}
      />

      {/* Slide-over Cart / Comanda Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        restaurantData={restaurantData}
      />

      {/* Mobile Sticky Bottom Bar */}
      <MobileBottomBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMenu={handleExploreMenu}
        restaurantData={restaurantData}
      />

      {/* Modal Demonstrativo de Proposta & Badge no Rodapé */}
      <ProposalNotice
        clientName="Estação Largo do Machado"
        companyType="restaurante"
        logoSrc="/assets/agency-logo.png"
        instagramHandle="venoystudio"
        instagramUrl="https://www.instagram.com/venoystudio/"
        position="bottom-left"
        defaultOpen={true}
      />

    </div>
  );
}
