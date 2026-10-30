// Core UI Translations for Restaurante Estação Largo do Machado
// Supported languages: pt (Português), en (English), es (Español)

export const languages = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', short: 'PT' },
  { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'es', label: 'Español', flag: '🇪🇸', short: 'ES' }
];

export const translations = {
  pt: {
    siteTitle: 'Restaurante Estação Largo do Machado | Tradição Carioca Desde 1966',
    topBar: {
      tradition: 'Tradição Carioca Desde 1966',
      addressShort: 'Rua Bento Lisboa, 184 — Largo do Machado / Catete',
      openNow: 'Aberto Hoje até 00:00',
      opensAt: 'Abre às 11:00',
      phone: '(21) 2556-5323'
    },
    nav: {
      brandSub: 'Boteco 184 • Desde 1966',
      cardapio: 'Cardápio',
      executivos: 'Executivos',
      drinks: 'Drinks & Chopes',
      tradicao: 'Tradição 1966',
      avaliacoes: 'Avaliações',
      ondeEstamos: 'Onde Estamos',
      buscar: 'Buscar',
      buscarPlaceholder: 'Buscar no cardápio...',
      fecharBusca: 'Fechar busca',
      pedirWhatsApp: 'Pedir no WhatsApp',
      pediriFood: 'Pedir no iFood',
      pedir99: 'Pedir no 99Food',
      comanda: 'Comanda',
      fecharMenu: 'Fechar menu',
      abrirMenu: 'Abrir menu',
      selectLanguage: 'Idioma'
    },
    hero: {
      badge: 'TRADIÇÃO DESDE 1966 • CATETE / LARGO DO MACHADO',
      title1: 'O sabor autêntico e a alma carioca no coração do ',
      titleHighlight: 'Largo do Machado.',
      description: 'Localizado na histórica Rua Bento Lisboa, a 50 metros do metrô. Chopp Brahma trincando de gelado, cortes nobres na brasa, a tradicionalíssima feijoada carioca, 24 opções de almoço executivo servidos todos os dias e drinks autorais inesquecíveis.',
      ctaMenu: 'Explorar Cardápio Completo',
      ctaWhatsApp: 'Pedir pelo WhatsApp',
      slide1Title: 'A Tradicional Esquina da Bento Lisboa',
      slide1Sub: 'Ambiente acolhedor, mesas na calçada e clima clássico de boteco carioca.',
      slide2Title: 'Gastronomia Afetiva Carioca',
      slide2Sub: 'Carnes na brasa, feijoada completa, pescados frescos e guarnições caprichadas.',
      slide3Title: 'Chopp Estupidamente Gelado',
      slide3Sub: 'Chopp Brahma tirado no grau certo com colarinho aveludado e cervejas 600ml.',
      slide4Title: 'Almoço & Jantar Executivo Diário',
      slide4Sub: '24 opções completas e fartas servidas todos os dias para a rotina da Zona Sul.',
      slide5Title: 'Carta de Drinks Autorais',
      slide5Sub: 'Homenagens líquidas a Machado de Assis, Aterro do Flamengo e Cássia Eller.'
    },
    features: {
      chopp: {
        title: 'Chopp Estupidamente Gelado',
        tag: 'Tradição Carioca',
        description: 'Chopp Brahma cremoso tirado no ponto exato na tulipa e na caldereta, além de garrafas 600ml de Spaten, Original e Stella.',
        actionLabel: 'Ver Chopes & Bebidas'
      },
      executivos: {
        title: '24 Executivos Diários',
        tag: 'Todo o Horário',
        description: 'Refeições completas com fartura e tempero de verdade para a correria do dia a dia. Pratos a partir de R$ 29,90 servidos até meia-noite.',
        actionLabel: 'Ver Cardápio Executivo'
      },
      tradicao: {
        title: 'Receitas Clássicas Desde 1966',
        tag: 'Assinaturas da Casa',
        description: 'A lendária Feijoada do Largo do Machado, o autêntico Filé à Oswaldo Aranha coberto de alho dourado e o Cozido dos domingos.',
        actionLabel: 'Ver Pratos Tradicionais'
      },
      delivery: {
        title: 'Entregas Rápidas no Bairro',
        tag: 'Peça no WhatsApp',
        description: 'Atendimento ágil para Catete, Largo do Machado, Flamengo, Glória e Laranjeiras. Peça sem burocracia direto pelo WhatsApp.',
        actionLabel: 'Fazer Pedido Agora'
      }
    },
    featuredDishes: {
      badge: 'As Grandes Estrelas da Cozinha',
      title: 'Pratos que Fizeram a Fama do Restaurante',
      subtitle: 'Receitas passadas com rigor e afeto há quase seis décadas no Largo do Machado.',
      feijoada: {
        badge: 'Receita Tradicional Desde 1966',
        schedule: 'Servida Todos os Dias',
        name: 'Tradicional Feijoada do Largo do Machado',
        description: 'A estrela da casa desde 1966: feijão preto apurado com carnes nobres selecionadas, arroz soltinho, couve mineira refogada fininha, farofa na manteiga, torresmo pururuca sequinho e fatias de laranja fresca.',
        opt1: 'Individual (1 pessoa)',
        opt2: 'Completa (2 pessoas)',
        btnAdd: 'Adicionar Feijoada à Comanda'
      },
      cozido: {
        badge: 'Domingo Clássico no Catete',
        schedule: 'Exclusivo aos Domingos',
        name: 'Cozido à Portuguesa (Especial de Domingo)',
        description: 'Servido exclusivamente aos domingos. O autêntico cozido de tradição luso-carioca com carnes nobres, legumes variados cozidos no próprio caldo e pirão aveludado.',
        opt1: 'Individual (1 pessoa)',
        opt2: 'Completo (2 pessoas)',
        btnAdd: 'Adicionar Cozido à Comanda'
      },
      added: 'Adicionado à Comanda!'
    },
    menu: {
      badge: 'Cardápio Oficial Completo',
      title: 'Sabores Autênticos da Tradição Carioca',
      subtitle: 'Navegue por nossas 136 opções completas: carnes nobres, almoços executivos servidos o dia todo, petiscos crocantes de boteco, chopp geladíssimo e drinks históricos.',
      searchPlaceholder: 'Busque por prato, ingrediente (ex: Oswaldo Aranha, Chopp, Feijoada, Bacalhau, Picanha)...',
      resultsCount: 'opções encontradas',
      clearFilters: 'Limpar Filtros',
      noResultsTitle: 'Nenhum prato encontrado',
      noResultsSub: 'Tente buscar por outro termo ou limpe os filtros para ver todo o cardápio.',
      tags: {
        all: 'Tudo',
        popular: '⭐ Mais Pedidos',
        executivos: '🍱 Pratos Executivos',
        petiscos: '🍟 Petiscos & Chapas',
        chopes: '🍺 Chopes & Bebidas',
        drinks: '🍸 Drinks Autorais',
        share: '👨‍👩‍👦 Para Compartilhar',
        veg: '🌱 Vegetarianos',
        sobremesas: '🍰 Sobremesas'
      },
      serves: 'Serve:',
      portionOptions: 'Opções de Porção:',
      addToCart: 'Adicionar à Comanda',
      addedToCart: 'Adicionado!'
    },
    drinksShowcase: {
      badge: 'Carta Autoral Exclusiva',
      title: 'Drinks que Homenageiam o Bairro & o Rio',
      subtitle: 'Coquetéis artesanais inspirados em figuras icônicas, esquinas históricas e a boemia inconfundível do Catete e Largo do Machado.',
      ctaWhatsApp: 'Pedir Drinks no WhatsApp',
      scrollMenu: 'Ver Carta Completa de Bebidas no Cardápio',
      addToCart: 'Adicionar Drink',
      added: 'Adicionado'
    },
    heritage: {
      badge: 'TRADIÇÃO & HOSPITALIDADE CARIOCA',
      title: 'Mais de meio século de amizades, boemia e comida boa de verdade.',
      p1: 'Fundado em 1966 sob a razão social Boteco 184 Ltda, o Restaurante Estação Largo do Machado nasceu como ponto de encontro dos moradores do Catete, intelectuais, artistas e trabalhadores que transitavam pela histórica Rua Bento Lisboa.',
      p2: 'Por quase seis décadas, preservamos as receitas originais da culinária luso-brasileira: a feijoada carioca artesanal, o lendário filé à Oswaldo Aranha com alho frito na manteiga, a cerveja gelada tirada no grau certo e o acolhimento afetuoso que só um autêntico boteco da Zona Sul carioca proporciona.',
      p3: 'Hoje, ao lado da estação do Metrô, unimos a história viva de gerações com a praticidade moderna de comandas e pedidos rápidos para entrega em toda a vizinhança.',
      yearsTitle: 'Anos de História',
      yearsSub: 'Desde 1966 no Rio',
      locationLabel: 'Rua Bento Lisboa, 184',
      locationSub: 'O ponto de encontro do Largo do Machado & Catete'
    },
    reviews: {
      badge: 'Opinião de Quem Frequenta',
      title: 'Avaliações Reais dos Nossos Clientes',
      subtitle: 'Sua satisfação diária é o que move nossa tradição de quase 60 anos.',
      basedOn: 'com base em 992 avaliações no Google',
      viewAll: 'Ver avaliações no Google Maps',
      writeReview: 'Avaliar no Google'
    },
    location: {
      badge: 'Fácil Acesso no Catete',
      title: 'Como Chegar & Horário de Atendimento',
      subtitle: 'A 50 metros da estação do Metrô do Largo do Machado, no coração da Zona Sul carioca.',
      addressTitle: 'Nosso Endereço',
      addressNeighborhood: 'Largo do Machado / Catete',
      metroProximity: 'A 50 metros da Estação de Metrô Largo do Machado (Saída Catete / Bento Lisboa).',
      hoursTitle: 'Horário de Funcionamento',
      hoursDays: 'Segunda a Domingo (Todos os dias)',
      hoursTime: 'Das 11:00 às 00:00 (Meia-noite)',
      hoursExecutive: 'Almoço e jantar executivo servidos em todo o horário.',
      paymentsTitle: 'Formas de Pagamento Aceitas',
      paymentsList: 'Cartões de Crédito e Débito (Visa, Mastercard, Elo, Amex), Pix, Dinheiro e Vales Refeição (Sodexo, VR, Alelo, Ticket Restaurante).',
      deliveryTitle: 'Área de Entregas',
      deliveryAreas: 'Catete, Largo do Machado, Flamengo, Glória, Laranjeiras e Cosme Velho.',
      btnMaps: 'Abrir Rota no Google Maps',
      btnWhatsApp: 'Falar Conosco no WhatsApp'
    },
    cart: {
      title: 'Comanda Digital',
      subtitle: 'Monte seu pedido e envie direto para o WhatsApp do restaurante',
      emptyTitle: 'Sua comanda está vazia',
      emptySub: 'Navegue pelo cardápio e adicione seus pratos, chopes e drinks favoritos!',
      btnExplore: 'Ver Cardápio Agora',
      orderType: 'Tipo de Pedido:',
      delivery: 'Entrega em Domicílio',
      pickup: 'Retirada no Balcão',
      table: 'Consumo na Mesa',
      nameLabel: 'Seu Nome / Como podemos te chamar:',
      namePlaceholder: 'Ex: Maria Silva',
      addressLabel: 'Endereço Completo de Entrega:',
      addressPlaceholder: 'Rua, número, complemento e ponto de referência',
      neighborhoodLabel: 'Bairro de Entrega:',
      tableLabel: 'Número da sua Mesa no Restaurante:',
      tablePlaceholder: 'Ex: Mesa 12',
      notesLabel: 'Observações do Pedido (opcional):',
      notesPlaceholder: 'Ex: ponto da carne, sem cebola, limão e gelo à parte...',
      paymentLabel: 'Forma de Pagamento Preferida:',
      paymentPix: 'Pix na Entrega / Chave Pix',
      paymentCard: 'Cartão de Débito / Crédito (Levar Máquina)',
      paymentVr: 'Vale Refeição (Sodexo / VR / Alelo / Ticket)',
      paymentCash: 'Dinheiro',
      subtotal: 'Subtotal dos Itens:',
      deliveryFeeNotice: 'Taxa de entrega calculada pelo WhatsApp de acordo com o endereço.',
      total: 'Total da Comanda:',
      btnClear: 'Esvaziar Comanda',
      btnSendWhatsApp: 'Enviar Pedido pelo WhatsApp',
      whatsappNotice: 'Ao clicar, uma mensagem formatada com todos os itens será enviada diretamente para o WhatsApp oficial (21) 2556-5323.'
    },
    mobileBar: {
      cardapio: 'Cardápio',
      whatsapp: 'Pedir WhatsApp',
      comanda: 'Comanda'
    },
    footer: {
      heading: 'Peça no conforto da sua casa ou trabalho',
      subheading: 'Entregas rápidas nas redondezas pelo WhatsApp oficial ou pelos nossos aplicativos parceiros.',
      directWhatsApp: 'WhatsApp Direto',
      razaoSocial: 'BOTECO 184 LTDA',
      cnpj: 'CNPJ: 46.859.491/0001-21',
      rights: 'Todos os direitos reservados.',
      address: 'Rua Bento Lisboa, 184 — Largo do Machado / Catete, Rio de Janeiro - RJ',
      hours: 'Aberto todos os dias das 11:00 à 00:00'
    },
    toast: {
      itemAdded: 'adicionado à comanda!'
    }
  },

  en: {
    siteTitle: 'Estação Largo do Machado Restaurant | Rio Tradition Since 1966',
    topBar: {
      tradition: 'Rio Tradition Since 1966',
      addressShort: 'Rua Bento Lisboa, 184 — Largo do Machado / Catete, Rio de Janeiro',
      openNow: 'Open Today until Midnight',
      opensAt: 'Opens at 11:00 AM',
      phone: '+55 (21) 2556-5323'
    },
    nav: {
      brandSub: 'Boteco 184 • Since 1966',
      cardapio: 'Menu',
      executivos: 'Daily Specials',
      drinks: 'Drinks & Beers',
      tradicao: 'Heritage 1966',
      avaliacoes: 'Reviews',
      ondeEstamos: 'Location',
      buscar: 'Search',
      buscarPlaceholder: 'Search the menu...',
      fecharBusca: 'Close search',
      pedirWhatsApp: 'Order via WhatsApp',
      pediriFood: 'Order on iFood',
      pedir99: 'Order on 99Food',
      comanda: 'Order Tab',
      fecharMenu: 'Close menu',
      abrirMenu: 'Open menu',
      selectLanguage: 'Language'
    },
    hero: {
      badge: 'TRADITION SINCE 1966 • CATETE / LARGO DO MACHADO, RIO',
      title1: 'Authentic flavors and true Carioca soul in the heart of ',
      titleHighlight: 'Largo do Machado.',
      description: 'Located on historic Rua Bento Lisboa, just 50 meters from the subway station. Sub-zero cold Brahma draft beer, flame-grilled prime steaks, traditional Rio feijoada, 24 executive lunch plates served all day, and signature artisan cocktails.',
      ctaMenu: 'Explore Full Menu',
      ctaWhatsApp: 'Order via WhatsApp',
      slide1Title: 'The Traditional Corner of Bento Lisboa',
      slide1Sub: 'Welcoming ambiance, sidewalk tables, and classic Rio boteco charm.',
      slide2Title: 'Heartwarming Carioca Gastronomy',
      slide2Sub: 'Grilled meats, complete feijoada, fresh fish, and generous homemade sides.',
      slide3Title: 'Sub-Zero Cold Draft Beer',
      slide3Sub: 'Creamy Brahma draft beer poured at freezing temperatures and 600ml sharing bottles.',
      slide4Title: 'Daily Executive Lunch & Dinner',
      slide4Sub: '24 complete and hearty meal plates served all day for Rio’s South Zone lifestyle.',
      slide5Title: 'Signature Craft Cocktail Menu',
      slide5Sub: 'Liquid tributes to author Machado de Assis, Flamengo Park, and Brazilian icons.'
    },
    features: {
      chopp: {
        title: 'Sub-Zero Cold Draft Beer',
        tag: 'Rio Tradition',
        description: 'Creamy Brahma draft beer poured to perfection in cold tulip and tumbler glasses, plus chilled 600ml bottles of Spaten, Original, and Stella.',
        actionLabel: 'View Beers & Drinks'
      },
      executivos: {
        title: '24 Daily Executive Meals',
        tag: 'All-Day Long',
        description: 'Complete, generous meals with genuine homestyle Brazilian seasonings. Plates starting from R$ 29.90 served until midnight.',
        actionLabel: 'View Daily Specials'
      },
      tradicao: {
        title: 'Classic Recipes Since 1966',
        tag: 'House Signatures',
        description: 'The legendary Largo do Machado Feijoada, authentic Oswaldo Aranha steak smothered in crisp golden garlic, and Sunday Cozido.',
        actionLabel: 'View Heritage Dishes'
      },
      delivery: {
        title: 'Fast Neighborhood Delivery',
        tag: 'Order on WhatsApp',
        description: 'Prompt delivery service to Catete, Largo do Machado, Flamengo, Glória, and Laranjeiras. Fast and direct through WhatsApp.',
        actionLabel: 'Order Now'
      }
    },
    featuredDishes: {
      badge: 'Stars of Our Kitchen',
      title: 'Dishes That Built Our Legacy',
      subtitle: 'Recipes preserved with care and affection for almost six decades in Largo do Machado.',
      feijoada: {
        badge: 'Traditional Recipe Since 1966',
        schedule: 'Served Every Day',
        name: 'Largo do Machado Traditional Feijoada',
        description: 'The signature star since 1966: rich black beans simmered with prime cured meats and sausages, served with fluffy white rice, sautéed collard greens, buttery farofa, crispy cracklings, and fresh orange slices.',
        opt1: 'Individual (1 person)',
        opt2: 'Full (2 people)',
        btnAdd: 'Add Feijoada to Order Tab'
      },
      cozido: {
        badge: 'Classic Sunday in Catete',
        schedule: 'Exclusive on Sundays',
        name: 'Cozido à Portuguesa (Sunday Special)',
        description: 'Served exclusively on Sundays. Authentic Portuguese-Carioca boiled dinner with premium meats, vegetables simmered in their own rich broth, and velvety cassava puree.',
        opt1: 'Individual (1 person)',
        opt2: 'Full (2 people)',
        btnAdd: 'Add Cozido to Order Tab'
      },
      added: 'Added to Order Tab!'
    },
    menu: {
      badge: 'Official Full Menu',
      title: 'Authentic Flavors of Carioca Tradition',
      subtitle: 'Explore our complete 136 selections: prime steaks, all-day executive plates, crispy boteco finger foods, ice-cold draft beers, and historic cocktails.',
      searchPlaceholder: 'Search by dish, ingredient (e.g., Oswaldo Aranha, Draft Beer, Feijoada, Salmon, Picanha)...',
      resultsCount: 'options found',
      clearFilters: 'Clear Filters',
      noResultsTitle: 'No dishes found',
      noResultsSub: 'Try searching for another term or clear your filters to view the full menu.',
      tags: {
        all: 'All',
        popular: '⭐ Most Popular',
        executivos: '🍱 Daily Specials',
        petiscos: '🍟 Finger Foods & Sizzlers',
        chopes: '🍺 Draft & Bottled Beers',
        drinks: '🍸 Signature Cocktails',
        share: '👨‍👩‍👦 For Sharing',
        veg: '🌱 Vegetarian',
        sobremesas: '🍰 Desserts'
      },
      serves: 'Serves:',
      portionOptions: 'Portion Sizes:',
      addToCart: 'Add to Order Tab',
      addedToCart: 'Added!'
    },
    drinksShowcase: {
      badge: 'Exclusive Signature Cocktail Menu',
      title: 'Cocktails Honoring Our Historic Neighborhood',
      subtitle: 'Craft cocktails inspired by iconic Brazilian writers, historic Rio avenues, and the unmistakable bohemian spirit of Catete and Largo do Machado.',
      ctaWhatsApp: 'Order Drinks via WhatsApp',
      scrollMenu: 'Explore Complete Beverage List',
      addToCart: 'Add Drink',
      added: 'Added'
    },
    heritage: {
      badge: 'TRADITION & CARIOCA HOSPITALITY',
      title: 'Over half a century of friendship, bohemian culture, and genuine food.',
      p1: 'Founded in 1966 under the business name Boteco 184 Ltda, Restaurante Estação Largo do Machado was established as the primary meeting ground for neighborhood residents, intellectuals, musicians, and workers along historic Rua Bento Lisboa.',
      p2: 'For nearly six decades, we have strictly preserved the authentic recipes of Luso-Brazilian heritage: slow-cooked feijoada, the legendary Oswaldo Aranha steak blanketed with golden fried garlic, draft beer poured at sub-zero temperatures, and the warm welcome only a true Rio boteco can offer.',
      p3: 'Today, right next to the Largo do Machado subway station, we unite living history with modern convenience and fast delivery across Rio’s South Zone.',
      yearsTitle: 'Years of History',
      yearsSub: 'Since 1966 in Rio',
      locationLabel: 'Rua Bento Lisboa, 184',
      locationSub: 'The historic meeting point of Largo do Machado & Catete'
    },
    reviews: {
      badge: 'Customer Voices',
      title: 'Real Reviews From Our Guests',
      subtitle: 'Your daily dining satisfaction is the driving force behind our 60-year tradition.',
      basedOn: 'based on 992 Google reviews',
      viewAll: 'View reviews on Google Maps',
      writeReview: 'Review us on Google'
    },
    location: {
      badge: 'Convenient Catete Location',
      title: 'How to Get Here & Operating Hours',
      subtitle: 'Just 50 meters from the Largo do Machado Subway Station in the heart of Rio’s Zona Sul.',
      addressTitle: 'Our Address',
      addressNeighborhood: 'Largo do Machado / Catete',
      metroProximity: 'Only 50 meters from Largo do Machado Subway Station (Bento Lisboa / Catete exit).',
      hoursTitle: 'Opening Hours',
      hoursDays: 'Monday to Sunday (Every Single Day)',
      hoursTime: 'From 11:00 AM to 12:00 Midnight',
      hoursExecutive: 'Executive lunch and dinner meals served all day throughout opening hours.',
      paymentsTitle: 'Accepted Payment Methods',
      paymentsList: 'Credit & Debit Cards (Visa, Mastercard, Elo, American Express), Pix, Cash, and Brazilian Meal Vouchers (Sodexo, VR, Alelo, Ticket).',
      deliveryTitle: 'Delivery Neighborhoods',
      deliveryAreas: 'Catete, Largo do Machado, Flamengo, Glória, Laranjeiras, and Cosme Velho.',
      btnMaps: 'Open Directions in Google Maps',
      btnWhatsApp: 'Chat with Us on WhatsApp'
    },
    cart: {
      title: 'Digital Order Tab',
      subtitle: 'Build your order and send it directly to the restaurant’s official WhatsApp',
      emptyTitle: 'Your order tab is empty',
      emptySub: 'Browse our menu and add your favorite dishes, draft beers, and signature cocktails!',
      btnExplore: 'Browse Menu Now',
      orderType: 'Order Type:',
      delivery: 'Home Delivery',
      pickup: 'Counter Takeout',
      table: 'Dine-in at Table',
      nameLabel: 'Your Name:',
      namePlaceholder: 'e.g. John Smith',
      addressLabel: 'Full Delivery Address:',
      addressPlaceholder: 'Street name, number, apartment/room, and landmarks',
      neighborhoodLabel: 'Delivery Neighborhood:',
      tableLabel: 'Your Table Number in the Restaurant:',
      tablePlaceholder: 'e.g. Table 12',
      notesLabel: 'Special Instructions (optional):',
      notesPlaceholder: 'e.g. meat temperature, no onions, ice and lemon on the side...',
      paymentLabel: 'Preferred Payment Method:',
      paymentPix: 'Pix / Instant Transfer',
      paymentCard: 'Credit / Debit Card (Card Machine at Delivery)',
      paymentVr: 'Meal Voucher (Sodexo / VR / Alelo / Ticket)',
      paymentCash: 'Cash',
      subtotal: 'Items Subtotal:',
      deliveryFeeNotice: 'Delivery fee will be confirmed via WhatsApp based on your exact address.',
      total: 'Order Tab Total:',
      btnClear: 'Clear Tab',
      btnSendWhatsApp: 'Send Order via WhatsApp',
      whatsappNotice: 'Clicking will open WhatsApp with your full order formatted and sent directly to (21) 2556-5323.'
    },
    mobileBar: {
      cardapio: 'Menu',
      whatsapp: 'Order WhatsApp',
      comanda: 'Tab'
    },
    footer: {
      heading: 'Enjoy in the comfort of your home or hotel',
      subheading: 'Fast deliveries across the neighborhood via our official WhatsApp or partner delivery apps.',
      directWhatsApp: 'Direct WhatsApp',
      razaoSocial: 'BOTECO 184 LTDA',
      cnpj: 'CNPJ: 46.859.491/0001-21',
      rights: 'All rights reserved.',
      address: 'Rua Bento Lisboa, 184 — Largo do Machado / Catete, Rio de Janeiro - RJ',
      hours: 'Open every day from 11:00 AM to Midnight'
    },
    toast: {
      itemAdded: 'added to your order tab!'
    }
  },

  es: {
    siteTitle: 'Restaurante Estação Largo do Machado | Tradición Carioca Desde 1966',
    topBar: {
      tradition: 'Tradición Carioca Desde 1966',
      addressShort: 'Rua Bento Lisboa, 184 — Largo do Machado / Catete, Río de Janeiro',
      openNow: 'Abierto Hoy hasta Medianoche',
      opensAt: 'Abre a las 11:00',
      phone: '+55 (21) 2556-5323'
    },
    nav: {
      brandSub: 'Boteco 184 • Desde 1966',
      cardapio: 'Menú',
      executivos: 'Ejecutivos',
      drinks: 'Cócteles y Cervezas',
      tradicao: 'Tradición 1966',
      avaliacoes: 'Opiniones',
      ondeEstamos: 'Ubicación',
      buscar: 'Buscar',
      buscarPlaceholder: 'Buscar en el menú...',
      fecharBusca: 'Cerrar búsqueda',
      pedirWhatsApp: 'Pedir por WhatsApp',
      pediriFood: 'Pedir en iFood',
      pedir99: 'Pedir en 99Food',
      comanda: 'Comanda',
      fecharMenu: 'Cerrar menú',
      abrirMenu: 'Abrir menú',
      selectLanguage: 'Idioma'
    },
    hero: {
      badge: 'TRADICIÓN DESDE 1966 • CATETE / LARGO DO MACHADO, RÍO',
      title1: 'El sabor auténtico y el alma carioca en el corazón de ',
      titleHighlight: 'Largo do Machado.',
      description: 'Ubicado en la histórica Rua Bento Lisboa, a solo 50 metros de la estación de metro. Cerveza Brahma tirada estupendamente helada, cortes de carne a la parrilla, la tradicionalísima feijoada carioca, 24 opciones de almuerzo ejecutivo servidas todo el día y cócteles de autor inolvidables.',
      ctaMenu: 'Explorar Menú Completo',
      ctaWhatsApp: 'Pedir por WhatsApp',
      slide1Title: 'La Esquina Tradicional de Bento Lisboa',
      slide1Sub: 'Ambiente acogedor, mesas en la vereda y el ambiente clásico de los botecos cariocas.',
      slide2Title: 'Gastronomía Carioca con Afecto',
      slide2Sub: 'Carnes a la parrilla, feijoada completa, pescados frescos y guarniciones abundantes.',
      slide3Title: 'Cerveza de Barril Bien Helada',
      slide3Sub: 'Chopp Brahma servido en su punto justo con cuello aterciopelado y botellas de 600ml.',
      slide4Title: 'Almuerzo y Cena Ejecutiva Diaria',
      slide4Sub: '24 opciones completas y abundantes servidas todos los días para la rutina carioca.',
      slide5Title: 'Carta de Cócteles de Autor',
      slide5Sub: 'Homenajes a Machado de Assis, Parque Flamengo y figuras icónicas de Río.'
    },
    features: {
      chopp: {
        title: 'Chopp Estupendamente Helado',
        tag: 'Tradición Carioca',
        description: 'Chopp Brahma cremoso tirado al punto exacto en tulipa o vaso caldereta, además de botellas frías de 600ml de Spaten, Original y Stella.',
        actionLabel: 'Ver Cervezas y Bebidas'
      },
      executivos: {
        title: '24 Platos Ejecutivos Diarios',
        tag: 'Todo el Horario',
        description: 'Comidas completas, abundantes y con sazón casera de verdad. Platos desde R$ 29,90 servidos durante todo el día hasta medianoche.',
        actionLabel: 'Ver Menú Ejecutivo'
      },
      tradicao: {
        title: 'Recetas Clásicas Desde 1966',
        tag: 'Especialidades de la Casa',
        description: 'La legendaria Feijoada de Largo do Machado, el auténtico Bife a la Oswaldo Aranha cubierto de ajo dorado y el Cozido de los domingos.',
        actionLabel: 'Ver Platos Tradicionales'
      },
      delivery: {
        title: 'Entregas Rápidas en la Zona',
        tag: 'Pide por WhatsApp',
        description: 'Servicio ágil para Catete, Largo do Machado, Flamengo, Glória y Laranjeiras. Pide de forma sencilla directamente por WhatsApp.',
        actionLabel: 'Hacer Pedido Ahora'
      }
    },
    featuredDishes: {
      badge: 'Las Grandes Estrellas de la Cocina',
      title: 'Platos que Forjaron la Fama del Restaurante',
      subtitle: 'Recetas transmitidas con rigor y cariño desde hace casi seis décadas en Largo do Machado.',
      feijoada: {
        badge: 'Receta Tradicional Desde 1966',
        schedule: 'Servida Todos los Días',
        name: 'Feijoada Tradicional de Largo do Machado',
        description: 'La gran estrella de la casa desde 1966: frijoles negros espesos cocinados con carnes curadas seleccionadas, arroz blanco, col salteada, farofa en mantequilla, chicharrón crujiente y rodajas de naranja fresca.',
        opt1: 'Individual (1 persona)',
        opt2: 'Completa (2 personas)',
        btnAdd: 'Agregar Feijoada a la Comanda'
      },
      cozido: {
        badge: 'Domingo Clásico en Catete',
        schedule: 'Exclusivo los Domingos',
        name: 'Cozido a la Portuguesa (Especial de Domingo)',
        description: 'Servido exclusivamente los domingos. El auténtico cocido luso-carioca con carnes nobles, verduras cocidas en su propio caldo y pirão cremoso de yuca.',
        opt1: 'Individual (1 persona)',
        opt2: 'Completo (2 personas)',
        btnAdd: 'Agregar Cozido a la Comanda'
      },
      added: '¡Agregado a la Comanda!'
    },
    menu: {
      badge: 'Menú Oficial Completo',
      title: 'Sabores Auténticos de la Tradición Carioca',
      subtitle: 'Descubre nuestras 136 opciones: carnes a la parrilla, almuerzos ejecutivos todo el día, tapas crujientes de boteco, chopp bien helado y cócteles históricos.',
      searchPlaceholder: 'Busca por plato, ingrediente (ej: Oswaldo Aranha, Chopp, Feijoada, Bacalao, Picaña)...',
      resultsCount: 'opciones encontradas',
      clearFilters: 'Limpiar Filtros',
      noResultsTitle: 'No se encontraron platos',
      noResultsSub: 'Intenta buscar con otro término o limpia los filtros para ver todo el menú.',
      tags: {
        all: 'Todo',
        popular: '⭐ Más Pedidos',
        executivos: '🍱 Platos Ejecutivos',
        petiscos: '🍟 Tapas y Planchas',
        chopes: '🍺 Cervezas y Bebidas',
        drinks: '🍸 Cócteles de Autor',
        share: '👨‍👩‍👦 Para Compartir',
        veg: '🌱 Vegetarianos',
        sobremesas: '🍰 Postres'
      },
      serves: 'Rinde:',
      portionOptions: 'Opciones de Porción:',
      addToCart: 'Agregar a la Comanda',
      addedToCart: '¡Agregado!'
    },
    drinksShowcase: {
      badge: 'Carta de Cócteles de Autor Exclusiva',
      title: 'Cócteles que Rinden Homenaje al Barrio y a Río',
      subtitle: 'Coctelería artesanal inspirada en leyendas de la literatura, esquinas históricas y el inconfundible espíritu bohemio de Catete y Largo do Machado.',
      ctaWhatsApp: 'Pedir Cócteles por WhatsApp',
      scrollMenu: 'Ver Carta Completa de Bebidas en el Menú',
      addToCart: 'Agregar Cóctel',
      added: 'Agregado'
    },
    heritage: {
      badge: 'TRADICIÓN Y HOSPITALIDAD CARIOCA',
      title: 'Más de medio siglo de amistad, bohemia y comida sabrosa de verdad.',
      p1: 'Fundado en 1966 bajo la razón social Boteco 184 Ltda, el Restaurante Estação Largo do Machado nació como punto de encuentro de los vecinos de Catete, intelectuales, artistas y trabajadores a lo largo de la histórica Rua Bento Lisboa.',
      p2: 'Durante casi seis décadas, hemos preservado con orgullo las recetas tradicionales luso-brasileñas: la feijoada carioca artesanal, el legendario bife Oswaldo Aranha cubierto de ajo dorado en mantequilla, la cerveza de barril fría servida en su punto justo y la cálida hospitalidad de los botecos cariocas.',
      p3: 'Hoy, junto a la estación de metro de Largo do Machado, unimos esta rica historia viva con la comodidad de comandas digitales y entregas rápidas en toda la Zona Sur.',
      yearsTitle: 'Años de Historia',
      yearsSub: 'Desde 1966 en Río',
      locationLabel: 'Rua Bento Lisboa, 184',
      locationSub: 'El punto de encuentro de Largo do Machado y Catete'
    },
    reviews: {
      badge: 'Opinión de Quienes Nos Visitan',
      title: 'Reseñas Reales de Nuestros Clientes',
      subtitle: 'Tu satisfacción diaria es lo que mantiene viva nuestra tradición de casi 60 años.',
      basedOn: 'con base en 992 opiniones en Google',
      viewAll: 'Ver reseñas en Google Maps',
      writeReview: 'Calificar en Google'
    },
    location: {
      badge: 'Fácil Acceso en Catete',
      title: 'Cómo Llegar y Horarios de Atención',
      subtitle: 'A solo 50 metros de la estación de Metro Largo do Machado, en el corazón de la Zona Sur carioca.',
      addressTitle: 'Nuestra Dirección',
      addressNeighborhood: 'Largo do Machado / Catete',
      metroProximity: 'A 50 metros de la Estación de Metro Largo do Machado (Salida Catete / Bento Lisboa).',
      hoursTitle: 'Horario de Atención',
      hoursDays: 'Lunes a Domingo (Todos los días)',
      hoursTime: 'De 11:00 a 00:00 (Medianoche)',
      hoursExecutive: 'Almuerzo y cena ejecutiva disponibles durante todo el horario.',
      paymentsTitle: 'Medios de Pago Aceptados',
      paymentsList: 'Tarjetas de Crédito y Débito (Visa, Mastercard, Elo, Amex), Pix, Efectivo y Vales de Comida (Sodexo, VR, Alelo, Ticket).',
      deliveryTitle: 'Zona de Entregas',
      deliveryAreas: 'Catete, Largo do Machado, Flamengo, Glória, Laranjeiras y Cosme Velho.',
      btnMaps: 'Ver Ruta en Google Maps',
      btnWhatsApp: 'Escríbenos por WhatsApp'
    },
    cart: {
      title: 'Comanda Digital',
      subtitle: 'Prepara tu pedido y envíalo directamente al WhatsApp oficial del restaurante',
      emptyTitle: 'Tu comanda está vacía',
      emptySub: '¡Explora el menú y agrega tus platos, cervezas heladas y cócteles favoritos!',
      btnExplore: 'Ver Menú Ahora',
      orderType: 'Tipo de Pedido:',
      delivery: 'Entrega a Domicilio',
      pickup: 'Retiro en Barra',
      table: 'Consumo en Mesa',
      nameLabel: 'Tu Nombre:',
      namePlaceholder: 'Ej: Carlos López',
      addressLabel: 'Dirección Completa de Entrega:',
      addressPlaceholder: 'Calle, número, departamento y punto de referencia',
      neighborhoodLabel: 'Barrio de Entrega:',
      tableLabel: 'Número de Mesa en el Restaurante:',
      tablePlaceholder: 'Ej: Mesa 12',
      notesLabel: 'Observaciones del Pedido (opcional):',
      notesPlaceholder: 'Ej: término de la carne, sin cebolla, limón y hielo aparte...',
      paymentLabel: 'Forma de Pago Preferida:',
      paymentPix: 'Pix al Recibir / Transferencia',
      paymentCard: 'Tarjeta de Débito / Crédito (Llevar Terminal)',
      paymentVr: 'Vale de Comida (Sodexo / VR / Alelo / Ticket)',
      paymentCash: 'Efectivo',
      subtotal: 'Subtotal de los Productos:',
      deliveryFeeNotice: 'El costo de envío se confirmará por WhatsApp según la dirección exacta.',
      total: 'Total de la Comanda:',
      btnClear: 'Vaciar Comanda',
      btnSendWhatsApp: 'Enviar Pedido por WhatsApp',
      whatsappNotice: 'Al hacer clic, se abrirá WhatsApp con el pedido detallado enviado directamente al (21) 2556-5323.'
    },
    mobileBar: {
      cardapio: 'Menú',
      whatsapp: 'WhatsApp',
      comanda: 'Comanda'
    },
    footer: {
      heading: 'Disfruta en la comodidad de tu casa u hotel',
      subheading: 'Entregas rápidas en la zona por WhatsApp oficial o a través de nuestras apps asociadas.',
      directWhatsApp: 'WhatsApp Directo',
      razaoSocial: 'BOTECO 184 LTDA',
      cnpj: 'CNPJ: 46.859.491/0001-21',
      rights: 'Todos los derechos reservados.',
      address: 'Rua Bento Lisboa, 184 — Largo do Machado / Catete, Río de Janeiro - RJ',
      hours: 'Abierto todos los días de 11:00 a 00:00'
    },
    toast: {
      itemAdded: '¡agregado a la comanda!'
    }
  }
};
