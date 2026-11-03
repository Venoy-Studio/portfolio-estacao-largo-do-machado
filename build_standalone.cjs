const fs = require('fs');
const path = require('path');

const projDir = __dirname;
const dataStr = fs.readFileSync(path.join(projDir, 'src', 'data', 'restaurantData.json'), 'utf8');

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Restaurante Estação Largo do Machado | Tradição Carioca Desde 1966</title>
  
  <meta name="description" content="O restaurante mais tradicional do Largo do Machado desde 1966. Cardápio completo, executivos diários, chopp geladíssimo, feijoada carioca e drinks autorais." />
  <meta name="theme-color" content="#121110" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cinzel:wght@700&display=swap" rel="stylesheet" />

  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      background-color: #FAF8F5;
      color: #1c1917;
    }
    h1, h2, h3, .font-serif-heading {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .bg-subtle-pattern {
      background-color: #FAF8F5;
      background-image: radial-gradient(#d6cebe 0.75px, transparent 0.75px);
      background-size: 24px 24px;
    }
    .bg-dark-pattern {
      background-color: #121110;
      background-image: radial-gradient(rgba(217, 119, 6, 0.08) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #f1ede6; }
    ::-webkit-scrollbar-thumb { background: #c7b9a5; border-radius: 9999px; }
    ::-webkit-scrollbar-thumb:hover { background: #a8947b; }
  </style>
</head>
<body class="bg-[#FAF8F5] text-stone-900 antialiased selection:bg-amber-700 selection:text-white pb-20 md:pb-0">

  <!-- Top Announcement Bar -->
  <div class="bg-[#1C1917] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-4 flex-wrap">
        <span class="inline-flex items-center gap-1.5 font-medium text-amber-400">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          Tradição Carioca Desde 1966
        </span>
        <span class="hidden md:inline text-stone-600">•</span>
        <span class="hidden sm:inline-flex items-center gap-1 text-stone-300">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i>
          Rua Bento Lisboa, 184 — Largo do Machado / Catete
        </span>
      </div>
      <div class="flex items-center gap-4">
        <span class="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Aberto Hoje até 00:00 (Meia-noite)
        </span>
        <a href="tel:2125565323" class="hidden sm:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium">
          <i data-lucide="phone" class="w-3.5 h-3.5"></i>
          (21) 2556-5323
        </a>
      </div>
    </div>
  </div>

  <!-- Main Navbar -->
  <header class="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 py-3.5 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
      
      <!-- Brand Logo & Name -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-900/40 shadow-sm shrink-0">
          <img 
            src="./public/images/logo.jpg" 
            alt="Logo Estação Largo do Machado" 
            class="w-full h-full object-cover" 
            onerror="this.src='https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/LOGO-ESTACAO-baixa.jpg'" 
          />
        </div>
        <div>
          <span class="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight block group-hover:text-amber-900 transition-colors">
            Estação Largo do Machado
          </span>
          <span class="text-[11px] font-medium tracking-wider uppercase text-amber-800">
            Boteco 184 • Desde 1966
          </span>
        </div>
      </a>

      <!-- Desktop Links -->
      <nav class="hidden xl:flex items-center gap-6 text-sm font-medium text-stone-700">
        <a href="#cardapio" class="hover:text-amber-800 transition-colors">Cardápio (136 Itens)</a>
        <a href="#destaques" class="hover:text-amber-800 transition-colors">Feijoada & Cozido</a>
        <a href="#drinks" class="hover:text-amber-800 transition-colors">Drinks Autorais</a>
        <a href="#historia" class="hover:text-amber-800 transition-colors">Tradição 1966</a>
        <a href="#avaliacoes" class="hover:text-amber-800 transition-colors">Avaliações (4.8★)</a>
        <a href="#localizacao" class="hover:text-amber-800 transition-colors">Como Chegar</a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2 sm:gap-3">
        <a 
          href="https://wa.me/552125565323?text=Ol%C3%A1,%20estou%20no%20Site%20do%20Restaurante%20Esta%C3%A7%C3%A3o%20Largo%20do%20Machado%20e%20quero%20fazer%20um%20pedido" 
          target="_blank" 
          class="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
        >
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span class="hidden sm:inline">Pedir no WhatsApp</span>
        </a>

        <!-- Cart Trigger -->
        <button 
          onclick="toggleCart()" 
          class="relative inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-semibold text-xs sm:text-sm shadow transition-all active:scale-95"
          aria-label="Abrir Comanda"
        >
          <i data-lucide="shopping-bag" class="w-4 h-4 text-amber-400"></i>
          <span class="hidden sm:inline text-white">Comanda</span>
          <span id="cart-badge" class="ml-1 w-5 h-5 rounded-full bg-amber-600 text-white text-[11px] font-bold flex items-center justify-center hidden">0</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative bg-subtle-pattern pt-8 pb-16 md:py-20 border-b border-stone-200 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <!-- Left Column: Copy -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-950 text-xs font-semibold tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-700 animate-pulse"></span>
            TRADIÇÃO DESDE 1966 • CATETE / LARGO DO MACHADO
          </div>

          <h1 class="font-serif text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-stone-900 leading-[1.12] tracking-tight">
            O sabor autêntico e a alma carioca no coração do <span class="italic font-normal text-amber-900">Largo do Machado.</span>
          </h1>

          <p class="text-stone-700 text-base sm:text-lg leading-relaxed">
            Localizado na histórica Rua Bento Lisboa, a 50 metros do metrô. 
            Chopp Brahma trincando de gelado, carnes nobres na brasa, a consagrada 
            feijoada completa, 24 opções de almoço executivo diário e uma carta autoral de drinks inspirada no Catete.
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#cardapio" 
              class="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm sm:text-base shadow-md transition-all active:scale-[0.98]"
            >
              <span>Explorar Cardápio (136 Opções)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a 
              href="https://wa.me/552125565323?text=Ol%C3%A1,%20estou%20no%20Site%20do%20Restaurante%20Esta%C3%A7%C3%A3o%20Largo%20do%20Machado%20e%20quero%20fazer%20um%20pedido" 
              target="_blank" 
              class="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow transition-all active:scale-[0.98]"
            >
              <i data-lucide="message-circle" class="w-5 h-5"></i>
              <span>Pedir no WhatsApp</span>
            </a>
          </div>

          <div class="pt-4 grid grid-cols-3 gap-4 border-t border-stone-200">
            <div>
              <div class="flex items-center gap-1 text-amber-600 font-bold text-base">
                <i data-lucide="star" class="w-4 h-4 fill-amber-500 text-amber-500"></i>
                4.8
              </div>
              <p class="text-[11px] text-stone-600">992 avaliações no Google</p>
            </div>
            <div>
              <div class="font-bold text-amber-900 text-base">1966</div>
              <p class="text-[11px] text-stone-600">60 anos de tradição</p>
            </div>
            <div>
              <div class="font-bold text-emerald-800 text-base">11h às 00h</div>
              <p class="text-[11px] text-stone-600">Todos os dias</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Gallery -->
        <div class="lg:col-span-6">
          <div class="relative rounded-2xl overflow-hidden border border-stone-300 bg-stone-900 shadow-2xl">
            <div class="relative aspect-[16/11]">
              <img 
                id="hero-img" 
                src="./public/images/fachada.jpg" 
                alt="Restaurante Estação Largo do Machado" 
                class="w-full h-full object-cover transition-opacity duration-300" 
                onerror="this.src='https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/estac.jpg'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 id="hero-title" class="font-serif text-lg sm:text-xl font-bold text-amber-100">
                  A Tradicional Esquina da Bento Lisboa
                </h3>
                <p id="hero-subtitle" class="text-xs sm:text-sm text-stone-300">
                  Mesas acolhedoras, clima clássico de boteco e chopp estupidamente gelado.
                </p>
              </div>
            </div>

            <!-- Gallery Buttons -->
            <div class="p-3 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar text-xs font-medium">
              <button onclick="setHero(0)" id="hbtn-0" class="hbtn px-3 py-1.5 rounded-lg bg-amber-900/40 text-amber-300 border border-amber-600/50">Fachada</button>
              <button onclick="setHero(1)" id="hbtn-1" class="hbtn px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Gastronomia</button>
              <button onclick="setHero(2)" id="hbtn-2" class="hbtn px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Chopp Brahma</button>
              <button onclick="setHero(3)" id="hbtn-3" class="hbtn px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Executivos</button>
              <button onclick="setHero(4)" id="hbtn-4" class="hbtn px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Drinks Autorais</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 4 Pillars Section -->
  <section class="py-12 bg-[#F5F2EB] border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center mb-4">
              <i data-lucide="beer" class="w-6 h-6"></i>
            </div>
            <h3 class="font-serif text-lg font-bold text-stone-900">Chopp Brahma Trincando</h3>
            <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              Tulipa e caldereta a R$ 10,90 tiradas com colarinho aveludado na temperatura certa, além de cervejas 600ml de Spaten e Stella.
            </p>
          </div>
          <button onclick="filterCat('chopes')" class="mt-4 text-xs font-bold text-amber-900 hover:underline text-left">
            Ver Bebidas & Chopes →
          </button>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center mb-4">
              <i data-lucide="utensils" class="w-6 h-6"></i>
            </div>
            <h3 class="font-serif text-lg font-bold text-stone-900">24 Executivos Diários</h3>
            <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              Servidos durante todo o horário, das 11h à meia-noite. Pratos completos com fartura, carnes, frangos, peixes e massas a partir de R$ 29,90.
            </p>
          </div>
          <button onclick="filterCat('executivos')" class="mt-4 text-xs font-bold text-amber-900 hover:underline text-left">
            Ver Pratos Executivos →
          </button>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center mb-4">
              <i data-lucide="flame" class="w-6 h-6"></i>
            </div>
            <h3 class="font-serif text-lg font-bold text-stone-900">Tradição Desde 1966</h3>
            <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              A famosa Feijoada Completa do Largo do Machado, o Filé à Oswaldo Aranha coberto de alho crocante e o Cozido de Domingo.
            </p>
          </div>
          <a href="#destaques" class="mt-4 text-xs font-bold text-amber-900 hover:underline text-left">
            Ver Destaques da Casa →
          </a>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center mb-4">
              <i data-lucide="bike" class="w-6 h-6"></i>
            </div>
            <h3 class="font-serif text-lg font-bold text-stone-900">Entregas no Bairro</h3>
            <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              Atendimento ágil para Catete, Largo do Machado, Flamengo, Glória e Laranjeiras direto pelo WhatsApp sem burocracia.
            </p>
          </div>
          <a href="https://wa.me/552125565323" target="_blank" class="mt-4 text-xs font-bold text-amber-900 hover:underline text-left">
            Pedir no WhatsApp →
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- Featured Dishes Banner (Feijoada & Cozido) -->
  <section id="destaques" class="py-16 bg-[#161413] text-stone-100 border-y border-stone-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
          Assinaturas Históricas da Casa
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-3">
          Pratos que Fizeram a Fama do Restaurante
        </h2>
        <p class="text-stone-400 text-sm mt-2">
          Receitas passadas com rigor e afeto há quase seis décadas no Largo do Machado.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Feijoada Card -->
        <div class="bg-[#1F1C1A] rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800/40">
                Receita Desde 1966
              </span>
              <span class="text-xs text-stone-400">Servida Todos os Dias</span>
            </div>

            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-amber-50">
              Tradicional Feijoada do Largo do Machado
            </h3>
            
            <p class="text-stone-300 text-sm leading-relaxed mt-3">
              Feijão preto enriquecido lentamente com carnes nobres selecionadas (carne seca, lombo, costelinha, paio e calabresa). Acompanha arroz solto, couve mineira refogada fininha no alho, farofa na manteiga, torresmo pururuca estalando de crocante e laranjas frescas.
            </p>

            <div class="mt-6 pt-5 border-t border-stone-800">
              <label class="text-xs font-semibold text-stone-400 block mb-2">Escolha o tamanho:</label>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <button onclick="setFeijSize('ind')" id="feij-btn-ind" class="p-3 rounded-xl border text-left bg-amber-950/70 border-amber-600 text-white font-bold">
                  <div>Individual (1 pessoa)</div>
                  <div class="text-amber-400 text-sm mt-0.5">R$ 60,00</div>
                </button>
                <button onclick="setFeijSize('comp')" id="feij-btn-comp" class="p-3 rounded-xl border text-left bg-stone-900 border-stone-800 text-stone-400 hover:text-white">
                  <div>Completa (2 pessoas)</div>
                  <div class="text-amber-400 text-sm mt-0.5">R$ 110,00</div>
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between gap-4">
            <div>
              <span class="text-[11px] text-stone-400 block">Preço</span>
              <span id="feij-price" class="text-2xl font-extrabold text-amber-400 font-serif">R$ 60,00</span>
            </div>
            <button onclick="addFeijoada()" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow transition-all active:scale-95">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>Adicionar à Comanda</span>
            </button>
          </div>
        </div>

        <!-- Cozido Card -->
        <div class="bg-[#1F1C1A] rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-950 px-3 py-1 rounded-full border border-rose-800/40">
                Especial de Domingo
              </span>
              <span class="text-xs text-stone-400">Tradição Luso-Carioca</span>
            </div>

            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-amber-50">
              Cozido à Portuguesa Carioca
            </h3>
            
            <p class="text-stone-300 text-sm leading-relaxed mt-3">
              A verdadeira celebração do almoço de domingo. Carnes nobres suculentas, legumes variados frescos da estação (batata, cenoura, abóbora, repolho, banana da terra) cozidos lentamente no próprio caldo aromático e servidos com pirão aveludado artesanal.
            </p>

            <div class="mt-6 pt-5 border-t border-stone-800">
              <label class="text-xs font-semibold text-stone-400 block mb-2">Escolha o tamanho:</label>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <button onclick="setCozSize('ind')" id="coz-btn-ind" class="p-3 rounded-xl border text-left bg-rose-950/70 border-rose-600 text-white font-bold">
                  <div>Individual (1 pessoa)</div>
                  <div class="text-rose-400 text-sm mt-0.5">R$ 60,00</div>
                </button>
                <button onclick="setCozSize('comp')" id="coz-btn-comp" class="p-3 rounded-xl border text-left bg-stone-900 border-stone-800 text-stone-400 hover:text-white">
                  <div>Completo (2 pessoas)</div>
                  <div class="text-rose-400 text-sm mt-0.5">R$ 110,00</div>
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between gap-4">
            <div>
              <span class="text-[11px] text-stone-400 block">Preço</span>
              <span id="coz-price" class="text-2xl font-extrabold text-rose-400 font-serif">R$ 60,00</span>
            </div>
            <button onclick="addCozido()" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow transition-all active:scale-95">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>Adicionar à Comanda</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Complete Menu Section -->
  <section id="cardapio" class="py-16 md:py-24 bg-[#FAF8F5] scroll-mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="text-center max-w-3xl mx-auto mb-10">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-900/20">
          Cardápio Oficial Completo
        </span>
        <h2 class="font-serif text-3xl sm:text-5xl font-extrabold text-stone-900 mt-3 tracking-tight">
          Todas as Opções da Casa (136 Itens)
        </h2>
        <p class="text-stone-600 text-sm sm:text-base mt-2">
          Use a busca instantânea ou filtre por categoria para montar seu pedido em segundos.
        </p>
      </div>

      <!-- Search & Filters Container -->
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm mb-8 space-y-4">
        
        <!-- Search bar -->
        <div class="relative">
          <i data-lucide="search" class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input 
            id="search-input" 
            type="text" 
            oninput="renderMenu()" 
            placeholder="Buscar por prato ou bebida (ex: Oswaldo Aranha, Feijoada, Chopp, Picanha, Bacalhau, Spaten)..." 
            class="w-full pl-10 pr-10 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:border-amber-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20"
          />
        </div>

        <!-- Quick filter pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold">
          <button onclick="setTag('all')" id="tag-all" class="tag-btn px-3.5 py-1.5 rounded-full bg-amber-800 text-white shadow-sm whitespace-nowrap">Tudo</button>
          <button onclick="setTag('popular')" id="tag-popular" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">⭐ Mais Pedidos</button>
          <button onclick="setTag('executivos')" id="tag-executivos" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">🍱 Executivos (24)</button>
          <button onclick="setTag('petiscos')" id="tag-petiscos" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">🍟 Petiscos & Chapas</button>
          <button onclick="setTag('chopes')" id="tag-chopes" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">🍺 Chopes & Cervejas</button>
          <button onclick="setTag('drinks')" id="tag-drinks" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">🍸 Drinks Autorais</button>
          <button onclick="setTag('share')" id="tag-share" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">👨‍👩‍👦 Para Compartilhar</button>
          <button onclick="setTag('veg')" id="tag-veg" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">🌱 Vegetarianos</button>
          <button onclick="setTag('sobremesas')" id="tag-sobremesas" class="tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap">🍰 Sobremesas</button>
        </div>

        <!-- Categories bar -->
        <div id="cat-tabs" class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold border-t border-stone-100 pt-3">
          <!-- Injected via JavaScript -->
        </div>

      </div>

      <!-- Dishes Grid -->
      <div id="menu-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Injected via JavaScript -->
      </div>

    </div>
  </section>

  <!-- Authorial Drinks Showcase -->
  <section id="drinks" class="py-20 bg-dark-pattern text-stone-100 border-b border-stone-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
          Carta Autoral de Drinks
        </span>
        <h2 class="font-serif text-3xl sm:text-5xl font-extrabold text-white mt-3">
          Coquetéis Inspirados no Rio & no Catete
        </h2>
        <p class="text-stone-400 text-sm mt-2">
          Homenagens líquidas a Machado de Assis, Aterro do Flamengo, Clarisse Índio do Brasil e Cássia Eller.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-2xl bg-gradient-to-b from-rose-950/80 to-stone-900 border border-rose-800/40 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] uppercase font-bold text-rose-300 mb-2">
              <span class="bg-rose-900/60 px-2.5 py-0.5 rounded-full border border-rose-700/50">Assinatura Autoral</span>
              <span>R$ 31,00</span>
            </div>
            <h3 class="font-serif text-2xl font-bold text-white">Machado de Assis</h3>
            <p class="text-xs text-stone-300 mt-2 leading-relaxed">
              Amoras frescas maceradas, xarope de rosas nobre, toque sutil de tabasco, Gin Beefeater Rosê, água tônica e finalizado com aveludada espuma artesanal de morango.
            </p>
          </div>
          <button onclick="addCustomDrink('Machado de Assis', 31.00)" class="mt-6 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all">
            + Adicionar Drink (R$ 31,00)
          </button>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-b from-amber-950/80 to-stone-900 border border-amber-800/40 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] uppercase font-bold text-amber-300 mb-2">
              <span class="bg-amber-900/60 px-2.5 py-0.5 rounded-full border border-amber-700/50">Mais Pedido</span>
              <span>R$ 32,00</span>
            </div>
            <h3 class="font-serif text-2xl font-bold text-white">Aterro do Flamengo</h3>
            <p class="text-xs text-stone-300 mt-2 leading-relaxed">
              Gin Beefeater, licor fino de pêssego, xarope artesanal de maracujá, espumante brut geladíssimo e finalizado com cremosa espuma de gengibre.
            </p>
          </div>
          <button onclick="addCustomDrink('Aterro do Flamengo', 32.00)" class="mt-6 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all">
            + Adicionar Drink (R$ 32,00)
          </button>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-b from-yellow-950/80 to-stone-900 border border-yellow-800/40 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] uppercase font-bold text-yellow-300 mb-2">
              <span class="bg-yellow-900/60 px-2.5 py-0.5 rounded-full border border-yellow-700/50">Homenagem Carioca</span>
              <span>R$ 31,00</span>
            </div>
            <h3 class="font-serif text-2xl font-bold text-white">Rua das Laranjeiras 'Cássia Eller'</h3>
            <p class="text-xs text-stone-300 mt-2 leading-relaxed">
              Polpa de maracujá fresco, xarope de manga, Gin Beefeater Tropical, água tônica e inesquecível espuma brasileira de rapadura.
            </p>
          </div>
          <button onclick="addCustomDrink('Rua das Laranjeiras Cássia Eller', 31.00)" class="mt-6 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all">
            + Adicionar Drink (R$ 31,00)
          </button>
        </div>

      </div>

    </div>
  </section>

  <!-- Heritage Section -->
  <section id="historia" class="py-20 bg-[#F4EFEA] border-b border-stone-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="./public/images/fachada.jpg" 
              alt="Fachada Bento Lisboa 184" 
              class="w-full h-auto object-cover" 
              onerror="this.src='https://estacaolargodomachado.com.br/wp-content/uploads/2025/06/estac.jpg'"
            />
            <div class="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-sm p-3 rounded-xl text-white">
              <p class="text-xs font-bold uppercase text-amber-400">Rua Bento Lisboa, 184</p>
              <p class="text-sm font-serif font-bold">O coração boêmio e tradicional do Catete</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-5">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-900/20">
            Tradição & Hospitalidade Carioca
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
            Mais de meio século de amizades, boemia e comida boa de verdade.
          </h2>
          <p class="text-stone-700 text-sm sm:text-base leading-relaxed">
            O restaurante mais tradicional do bairro, situado na <strong>Rua Bento Lisboa, 184</strong>, de fácil acesso e a poucos passos do <strong>Metrô do Largo do Machado</strong>. A gastronomia carioca é a nossa essência: seja para compartilhar momentos em família aos domingos ou para desfrutar de um almoço executivo dinâmico, farto e saboroso no intervalo do trabalho.
          </p>
          <p class="text-stone-700 text-sm sm:text-base leading-relaxed">
            Aqui, a cerveja chega sempre na temperatura certa, o chopp é servido com colarinho aveludado e o cardápio abraça desde carnes nobres grelhadas até feijoada completa, peixes frescos, massas italianas, petiscos e pizzas crocantes.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Google Reviews Section -->
  <section id="avaliacoes" class="py-20 bg-[#FAF8F5] border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Opinião de Quem Frequenta
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
            Avaliações Reais no Google (Nota 4.8★)
          </h2>
          <p class="text-stone-600 text-sm mt-1">
            Com base em 992 depoimentos verificados no perfil oficial do restaurante.
          </p>
        </div>

        <a 
          href="https://estacaolargodomachado.com.br/google" 
          target="_blank" 
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-semibold text-xs shadow"
        >
          <i data-lucide="thumbs-up" class="w-4 h-4"></i>
          <span>Ver ou Avaliar no Google</span>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-2">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
            </div>
            <p class="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
              "Ótimo atendimento e comida muito boa. A feijoada e o filé à Oswaldo Aranha são impecáveis. Um dos melhores pontos do Largo do Machado!"
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">Fillipe Braga</span>
            <span class="text-stone-400">Fev/2025</span>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-2">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
            </div>
            <p class="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
              "We had a lovely lunch! The steak was delicious and the staff were very friendly and attentive. Great traditional atmosphere in Rio."
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">Lucía G.</span>
            <span class="text-stone-400">Fev/2025</span>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-2">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
            </div>
            <p class="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
              "Chopp Brahma estupidamente gelado e o bolinho de bacalhau crocante por fora e macio por dentro. Clássico boteco carioca nota 10."
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">Carlos Eduardo Mendes</span>
            <span class="text-stone-400">Jan/2025</span>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-2">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
            </div>
            <p class="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
              "O almoço executivo salva a rotina! Preço justo, pratos muito bem servidos e sabor caseiro de verdade. Atendimento impecável."
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">Mariana Alencar</span>
            <span class="text-stone-400">Dez/2024</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Location & Map -->
  <section id="localizacao" class="py-20 bg-[#F4EFEA] border-b border-stone-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-900/20">
          Como Chegar
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
          Rua Bento Lisboa, 184 — Catete
        </h2>
        <p class="text-stone-600 text-sm mt-1">
          A apenas 50 metros da estação de Metrô Largo do Machado.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div class="lg:col-span-5 space-y-4 text-sm text-stone-700">
          <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center">
                <i data-lucide="map-pin" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-bold text-stone-900">Endereço Oficial</h4>
                <p class="text-xs text-stone-500">Largo do Machado / Catete, Rio de Janeiro - RJ</p>
              </div>
            </div>
            <p class="font-semibold text-stone-900">Rua Bento Lisboa, 184 — CEP 22221-011</p>
            <p class="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              ✓ Saída fácil pelo Metrô Largo do Machado (menos de 1 minuto a pé).
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center">
                <i data-lucide="clock" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-bold text-stone-900">Horário de Funcionamento</h4>
                <p class="text-xs text-stone-500">Todos os dias sem exceção</p>
              </div>
            </div>
            <p class="font-semibold text-stone-900">Segunda a Domingo: 11:00 às 00:00 (Meia-noite)</p>
            <p class="text-xs text-stone-600">Almoço Executivo servido o dia inteiro durante todo o horário.</p>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
            <p class="text-xs font-bold text-stone-900 mb-1">Formas de Pagamento:</p>
            <p class="text-xs text-stone-600">Pix, Dinheiro, Débito, Crédito e Cartões de Refeição (Sodexo, VR, Alelo, Ticket).</p>
          </div>
        </div>

        <div class="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-300 shadow-xl h-96 bg-stone-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8872036486016!2d-43.1804245239103!3d-22.92671207923769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff9ea43a419%3A0xe5eb6cf83dc6f827!2sR.%20Bento%20Lisboa%2C%20184%20-%20Catete%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022221-011!5e0!3m2!1spt-BR!2sbr!4v1719900000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#121110] text-stone-400 py-12 px-4 text-xs border-t border-stone-800">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left space-y-1">
        <p class="font-serif text-base font-bold text-white">Restaurante Estação Largo do Machado</p>
        <p class="text-stone-400">BOTECO 184 LTDA • CNPJ: 46.859.491/0001-21</p>
        <p class="text-stone-500">Rua Bento Lisboa, 184 — Catete / Largo do Machado, Rio de Janeiro - RJ • CEP 22221-011</p>
      </div>

      <div class="flex items-center gap-4 flex-wrap justify-center text-xs">
        <a href="tel:2125565323" class="hover:text-amber-300 transition-colors">Telefone: (21) 2556-5323</a>
        <span>•</span>
        <a href="https://wa.me/552125565323" target="_blank" class="text-emerald-400 font-semibold hover:underline">WhatsApp</a>
        <span>•</span>
        <a href="https://www.instagram.com/estacao184oficial/" target="_blank" class="hover:text-pink-400 transition-colors">Instagram @estacao184oficial</a>
        <span>•</span>
        <a href="https://www.facebook.com/Estacao184Oficial/" target="_blank" class="hover:text-blue-400 transition-colors">Facebook</a>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-800/80 text-center text-stone-600 text-[11px]">
      © 2026 Restaurante Estação Largo do Machado. Todos os direitos reservados.
    </div>
  </footer>

  <!-- Slide-Over Digital Cart Drawer -->
  <div id="cart-drawer" class="fixed inset-0 z-50 overflow-hidden hidden">
    <div onclick="toggleCart()" class="absolute inset-0 bg-stone-950/60 backdrop-blur-sm"></div>
    <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
      <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
        
        <div class="p-4 bg-[#1C1917] text-white flex items-center justify-between border-b border-stone-800">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-serif text-lg font-bold text-white">Sua Comanda Digital</h3>
              <span id="cart-count-label" class="text-xs text-amber-300 font-medium">0 itens</span>
            </div>
          </div>
          <button onclick="toggleCart()" class="p-2 text-stone-400 hover:text-white" aria-label="Fechar">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div id="cart-items-container" class="flex-1 overflow-y-auto p-4 space-y-3">
          <!-- Dynamically populated -->
        </div>

        <div id="cart-footer" class="p-4 bg-stone-50 border-t border-stone-200 space-y-3 hidden">
          <div class="flex items-center justify-between text-sm">
            <span class="text-stone-600 font-medium">Subtotal dos itens:</span>
            <span id="cart-subtotal" class="font-serif font-extrabold text-stone-900 text-xl">R$ 0,00</span>
          </div>

          <div class="space-y-2 text-xs">
            <div>
              <label class="font-semibold text-stone-700 block mb-1">Seu Nome:</label>
              <input id="cart-name" type="text" placeholder="Ex: Carlos Silva" class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs" />
            </div>
            <div>
              <label class="font-semibold text-stone-700 block mb-1">Endereço de Entrega (ou Retirada/Mesa):</label>
              <input id="cart-address" type="text" placeholder="Ex: Rua Bento Lisboa, 184 apto 201" class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs" />
            </div>
            <div>
              <label class="font-semibold text-stone-700 block mb-1">Observações:</label>
              <input id="cart-obs" type="text" placeholder="Ex: Carne ao ponto, sem cebola..." class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs" />
            </div>
          </div>

          <button onclick="sendOrderToWhatsApp()" class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow transition-all active:scale-95">
            <i data-lucide="message-circle" class="w-5 h-5"></i>
            <span>Enviar Pedido Pronto no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  </div>

  <!-- Mobile Sticky Bottom Bar -->
  <div class="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-t border-stone-800 p-2 shadow-2xl">
    <div class="grid grid-cols-3 gap-2">
      <a href="#cardapio" class="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-stone-300 hover:text-white text-[11px] font-semibold min-h-[44px]">
        <i data-lucide="utensils" class="w-4 h-4 text-amber-400 mb-0.5"></i>
        <span>Cardápio</span>
      </a>
      <a href="https://wa.me/552125565323" target="_blank" class="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 text-white text-[11px] font-semibold min-h-[44px] shadow">
        <i data-lucide="message-circle" class="w-4 h-4 mb-0.5"></i>
        <span>WhatsApp</span>
      </a>
      <button onclick="toggleCart()" class="relative flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-600 text-stone-950 font-bold text-[11px] min-h-[44px] shadow">
        <i data-lucide="shopping-bag" class="w-4 h-4 mb-0.5"></i>
        <span>Comanda</span>
        <span id="mobile-cart-badge" class="absolute top-1 right-2 w-4 h-4 rounded-full bg-stone-950 text-amber-400 text-[9px] font-black flex items-center justify-center hidden">0</span>
      </button>
    </div>
  </div>

  <!-- EMBEDDED COMPLETE DATA (ZERO FETCH REQUIRED) -->
  <script>
    const menuData = ${dataStr};

    let cart = [];
    let activeCat = 'todos';
    let activeTag = 'all';

    let feijSize = 'ind';
    let cozSize = 'ind';

    const galleryData = [
      { src: './public/images/fachada.jpg', title: 'A Tradicional Esquina da Bento Lisboa', sub: 'Mesas acolhedoras, clima clássico de boteco e chopp estupidamente gelado.' },
      { src: './public/images/banner-1.jpg', title: 'Gastronomia Afetiva Carioca', sub: 'Carnes nobres na brasa, feijoada completa, pescados frescos e guarnições.' },
      { src: './public/images/banner-2.jpg', title: 'Chopp Estupidamente Gelado', sub: 'Chopp Brahma tirado no ponto certo na tulipa e caldereta a R$ 10,90.' },
      { src: './public/images/banner-3.jpg', title: 'Almoço & Jantar Executivo Diário', sub: '24 opções completas e fartas servidas todos os dias até meia-noite.' },
      { src: './public/images/banner-4.jpg', title: 'Carta de Drinks Autorais', sub: 'Homenagens a Machado de Assis, Aterro do Flamengo e Cássia Eller.' }
    ];

    function setHero(idx) {
      document.querySelectorAll('.hbtn').forEach((b, i) => {
        b.className = (i === idx) 
          ? 'hbtn px-3 py-1.5 rounded-lg bg-amber-900/40 text-amber-300 border border-amber-600/50' 
          : 'hbtn px-3 py-1.5 rounded-lg text-stone-400 hover:text-white';
      });
      const item = galleryData[idx];
      document.getElementById('hero-img').src = item.src;
      document.getElementById('hero-title').innerText = item.title;
      document.getElementById('hero-subtitle').innerText = item.sub;
    }

    function setFeijSize(size) {
      feijSize = size;
      const isInd = (size === 'ind');
      document.getElementById('feij-btn-ind').className = isInd 
        ? 'p-3 rounded-xl border text-left bg-amber-950/70 border-amber-600 text-white font-bold'
        : 'p-3 rounded-xl border text-left bg-stone-900 border-stone-800 text-stone-400 hover:text-white';
      document.getElementById('feij-btn-comp').className = !isInd 
        ? 'p-3 rounded-xl border text-left bg-amber-950/70 border-amber-600 text-white font-bold'
        : 'p-3 rounded-xl border text-left bg-stone-900 border-stone-800 text-stone-400 hover:text-white';
      document.getElementById('feij-price').innerText = isInd ? 'R$ 60,00' : 'R$ 110,00';
    }

    function addFeijoada() {
      const price = feijSize === 'ind' ? 60.00 : 110.00;
      const label = feijSize === 'ind' ? 'Individual (1 pessoa)' : 'Completa (2 pessoas)';
      addToCartRaw('esp-01', 'Tradicional Feijoada do Largo do Machado', label, price);
    }

    function setCozSize(size) {
      cozSize = size;
      const isInd = (size === 'ind');
      document.getElementById('coz-btn-ind').className = isInd 
        ? 'p-3 rounded-xl border text-left bg-rose-950/70 border-rose-600 text-white font-bold'
        : 'p-3 rounded-xl border text-left bg-stone-900 border-stone-800 text-stone-400 hover:text-white';
      document.getElementById('coz-btn-comp').className = !isInd 
        ? 'p-3 rounded-xl border text-left bg-rose-950/70 border-rose-600 text-white font-bold'
        : 'p-3 rounded-xl border text-left bg-stone-900 border-stone-800 text-stone-400 hover:text-white';
      document.getElementById('coz-price').innerText = isInd ? 'R$ 60,00' : 'R$ 110,00';
    }

    function addCozido() {
      const price = cozSize === 'ind' ? 60.00 : 110.00;
      const label = cozSize === 'ind' ? 'Individual (1 pessoa)' : 'Completo (2 pessoas)';
      addToCartRaw('esp-02', 'Cozido à Portuguesa Carioca', label, price);
    }

    function addCustomDrink(name, price) {
      addToCartRaw('drink-' + name.toLowerCase().replace(/\\s+/g, '-'), name, 'Drink Autoral', price);
    }

    function initPage() {
      // Build categories tabs
      const tabsEl = document.getElementById('cat-tabs');
      tabsEl.innerHTML = menuData.categories.map(cat => \`
        <button 
          onclick="filterCat('\${cat.id}')" 
          id="cbtn-\${cat.id}" 
          class="cat-tab px-3.5 py-1.5 rounded-xl border whitespace-nowrap transition-all \${cat.id === 'todos' ? 'bg-stone-900 text-amber-300 font-bold border-stone-900' : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'}"
        >
          \${cat.name} (\${cat.count})
        </button>
      \`).join('');

      renderMenu();
      lucide.createIcons();
    }

    function filterCat(catId) {
      activeCat = catId;
      activeTag = 'all';
      updateTabStyles();
      renderMenu();
    }

    function setTag(tagId) {
      activeTag = tagId;
      if (tagId === 'executivos') activeCat = 'executivos';
      else if (tagId === 'petiscos') activeCat = 'petiscos';
      else if (tagId === 'chopes') activeCat = 'chopes';
      else if (tagId === 'drinks') activeCat = 'drinks';
      else if (tagId === 'sobremesas') activeCat = 'sobremesas';
      else if (tagId === 'all') activeCat = 'todos';

      document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.className = 'tag-btn px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 whitespace-nowrap';
      });
      const activeBtn = document.getElementById('tag-' + tagId);
      if (activeBtn) {
        activeBtn.className = 'tag-btn px-3.5 py-1.5 rounded-full bg-amber-800 text-white shadow-sm whitespace-nowrap';
      }
      updateTabStyles();
      renderMenu();
    }

    function updateTabStyles() {
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.className = 'cat-tab px-3.5 py-1.5 rounded-xl border whitespace-nowrap transition-all bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100';
      });
      const active = document.getElementById('cbtn-' + activeCat);
      if (active) {
        active.className = 'cat-tab px-3.5 py-1.5 rounded-xl border whitespace-nowrap transition-all bg-stone-900 text-amber-300 font-bold border-stone-900';
      }
    }

    function renderMenu() {
      const q = document.getElementById('search-input').value.toLowerCase().trim();
      const grid = document.getElementById('menu-grid');

      const items = menuData.items.filter(item => {
        if (q) {
          const match = item.name.toLowerCase().includes(q) || (item.description && item.description.toLowerCase().includes(q)) || item.category.toLowerCase().includes(q);
          if (!match) return false;
        }

        if (activeCat !== 'todos' && item.category !== activeCat) return false;

        if (activeTag === 'popular' && !item.popular) return false;
        if (activeTag === 'veg' && item.dietary !== 'Vegetariano' && item.category !== 'vegetarianos') return false;
        if (activeTag === 'share' && !(item.serves && (item.serves.includes('2') || item.serves.includes('3') || item.serves.includes('4')))) return false;

        return true;
      });

      if (items.length === 0) {
        grid.innerHTML = \`
          <div class="col-span-full py-16 text-center text-stone-500 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
            <p class="font-serif text-xl font-bold text-stone-900">Nenhum item encontrado</p>
            <p class="text-xs text-stone-500 mt-1">Tente pesquisar por outro nome ou selecione outra categoria.</p>
            <button onclick="document.getElementById('search-input').value=''; filterCat('todos');" class="mt-4 px-4 py-2 bg-stone-900 text-amber-400 rounded-xl text-xs font-bold">
              Ver Todo o Cardápio
            </button>
          </div>
        \`;
        return;
      }

      grid.innerHTML = items.map(item => {
        const hasOptions = item.priceOptions && item.priceOptions.length > 0;
        return \`
          <div class="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between text-[10px] mb-2 font-bold uppercase tracking-wider text-amber-800">
                <span class="bg-amber-50 px-2 py-0.5 rounded border border-amber-200">\${item.category}</span>
                <div class="flex items-center gap-1">
                  \${item.badge ? \`<span class="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">\${item.badge}</span>\` : ''}
                  \${item.serves ? \`<span class="bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">\${item.serves}</span>\` : ''}
                </div>
              </div>

              <h3 class="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                \${item.name}
              </h3>

              <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                \${item.description || ''}
              </p>

              \${hasOptions ? \`
                <div class="mt-3 pt-2 border-t border-stone-100">
                  <span class="text-[10px] text-stone-400 block mb-1 font-medium">Tamanho / Opções:</span>
                  <div class="grid grid-cols-2 gap-1 text-xs">
                    \${item.priceOptions.map((opt, oIdx) => \`
                      <button 
                        type="button"
                        onclick="addToCartWithOptions('\${item.id}', '\${item.name.replace(/'/g, "\\\\'")}', '\${opt.label}', \${opt.price})" 
                        class="p-2 rounded-lg border border-stone-200 bg-stone-50 hover:bg-amber-100/60 text-left transition-all"
                      >
                        <div class="truncate text-[11px] font-medium">\${opt.label}</div>
                        <div class="text-amber-800 font-extrabold mt-0.5">R$ \${opt.price.toFixed(2).replace('.', ',')}</div>
                      </button>
                    \`).join('')}
                  </div>
                </div>
              \` : ''}
            </div>

            <div class="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
              <div>
                <span class="text-[10px] text-stone-400 uppercase tracking-wider block">Valor</span>
                <span class="text-xl font-serif font-extrabold text-stone-900">
                  R$ \${item.price.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button 
                onclick="addToCart('\${item.id}')"
                class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs shadow transition-all active:scale-95"
              >
                <span>+ Adicionar</span>
              </button>
            </div>
          </div>
        \`;
      }).join('');

      lucide.createIcons();
    }

    function addToCart(itemId) {
      const item = menuData.items.find(i => i.id === itemId);
      if (!item) return;
      addToCartRaw(item.id, item.name, null, item.price);
    }

    function addToCartWithOptions(itemId, name, optionLabel, price) {
      addToCartRaw(itemId, name, optionLabel, price);
    }

    function addToCartRaw(id, name, optionLabel, price) {
      const key = optionLabel ? id + '-' + optionLabel : id;
      const existing = cart.find(i => i.key === key);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ key, id, name, optionLabel, price, quantity: 1 });
      }

      updateCartUI();
      toggleCart(true); // Open drawer on add
    }

    function updateCartUI() {
      const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);
      const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

      const badge = document.getElementById('cart-badge');
      const mBadge = document.getElementById('mobile-cart-badge');
      if (totalCount > 0) {
        badge.innerText = totalCount;
        badge.classList.remove('hidden');
        mBadge.innerText = totalCount;
        mBadge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
        mBadge.classList.add('hidden');
      }

      document.getElementById('cart-count-label').innerText = totalCount + ' ' + (totalCount === 1 ? 'item' : 'itens');
      document.getElementById('cart-subtotal').innerText = 'R$ ' + subtotal.toFixed(2).replace('.', ',');

      const container = document.getElementById('cart-items-container');
      const footer = document.getElementById('cart-footer');

      if (cart.length === 0) {
        container.innerHTML = \`
          <div class="py-16 text-center text-stone-400">
            <i data-lucide="shopping-bag" class="w-10 h-10 mx-auto text-stone-300 mb-2"></i>
            <p class="text-sm font-semibold text-stone-700">Sua comanda está vazia.</p>
            <p class="text-xs text-stone-400 mt-1">Escolha suas opções favoritas do cardápio!</p>
          </div>
        \`;
        footer.classList.add('hidden');
      } else {
        container.innerHTML = cart.map(item => \`
          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3 text-xs">
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-stone-900 truncate">\${item.name}</h4>
              \${item.optionLabel ? \`<span class="text-amber-800 text-[11px] block">\${item.optionLabel}</span>\` : ''}
              <span class="text-stone-700 font-bold block mt-0.5">R$ \${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button onclick="changeQty('\${item.key}', -1)" class="w-6 h-6 rounded bg-white border border-stone-300 font-bold hover:bg-stone-100">-</button>
              <span class="w-5 text-center font-bold">\${item.quantity}</span>
              <button onclick="changeQty('\${item.key}', 1)" class="w-6 h-6 rounded bg-white border border-stone-300 font-bold hover:bg-stone-100">+</button>
            </div>
          </div>
        \`).join('');
        footer.classList.remove('hidden');
      }
      lucide.createIcons();
    }

    function changeQty(key, delta) {
      const item = cart.find(i => i.key === key);
      if (!item) return;
      item.quantity += delta;
      if (item.quantity <= 0) {
        cart = cart.filter(i => i.key !== key);
      }
      updateCartUI();
    }

    function toggleCart(forceOpen) {
      const drawer = document.getElementById('cart-drawer');
      if (forceOpen === true) {
        drawer.classList.remove('hidden');
      } else {
        drawer.classList.toggle('hidden');
      }
    }

    function sendOrderToWhatsApp() {
      if (cart.length === 0) return;
      const name = document.getElementById('cart-name').value.trim();
      const address = document.getElementById('cart-address').value.trim();
      const obs = document.getElementById('cart-obs').value.trim();
      const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

      let msg = "*NOVO PEDIDO — RESTAURANTE ESTAÇÃO LARGO DO MACHADO*\\n";
      msg += "_Tradicional Desde 1966 • Rua Bento Lisboa, 184_\\n\\n";
      
      if (name) msg += "👤 *Cliente:* " + name + "\\n";
      if (address) msg += "📍 *Endereço / Mesa:* " + address + "\\n\\n";

      msg += "*ITENS DA COMANDA:*\\n";
      cart.forEach((item, idx) => {
        const opt = item.optionLabel ? " (" + item.optionLabel + ")" : "";
        msg += (idx + 1) + ". *" + item.quantity + "x* " + item.name + opt + " — R$ " + (item.price * item.quantity).toFixed(2).replace('.', ',') + "\\n";
      });

      msg += "\\n💰 *TOTAL DOS ITENS:* R$ " + subtotal.toFixed(2).replace('.', ',') + "\\n";

      if (obs) {
        msg += "📝 *Observações:* " + obs + "\\n";
      }

      msg += "\\n_Por favor, confirme a disponibilidade e o prazo de entrega!_";

      const url = "https://wa.me/552125565323?text=" + encodeURIComponent(msg);
      window.open(url, '_blank');
    }

    function closeProposalModal() {
      document.getElementById('proposal-modal').classList.add('hidden');
      document.getElementById('proposal-badge').classList.remove('hidden');
    }

    function openProposalModal() {
      document.getElementById('proposal-modal').classList.remove('hidden');
      document.getElementById('proposal-badge').classList.add('hidden');
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeProposalModal();
      }
    });

    document.addEventListener('DOMContentLoaded', initPage);
  </script>

  <!-- Proposal Notice Modal & Floating Badge -->
  <div id="proposal-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
    <div role="dialog" aria-modal="true" class="relative w-full max-w-lg rounded-2xl border border-teal-500/25 bg-[#081726]/95 p-6 sm:p-8 text-stone-100 shadow-2xl backdrop-blur-xl max-h-[92vh] overflow-y-auto no-scrollbar" style="box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 45px -10px rgba(45, 212, 191, 0.18)">
      <!-- Top Bar -->
      <div class="flex items-center justify-between gap-4 mb-5">
        <span class="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-300">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          <span>Modelo Demonstrativo · Proposta</span>
        </span>
        <button type="button" onclick="closeProposalModal()" class="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer" aria-label="Fechar aviso">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Header: Logo & Titles -->
      <div class="flex items-start gap-4 mb-4">
        <img src="./public/assets/agency-logo.png" alt="Logo Venoy Studio" class="w-12 h-12 rounded-xl object-contain border border-teal-500/30 bg-black/40 p-1 shadow-md shrink-0" onerror="this.style.display='none'" />
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight font-sans">
            Apresentação de Proposta de Site
          </h2>
          <p class="text-xs sm:text-sm font-medium text-teal-300 mt-0.5">
            Modelo conceitual desenvolvido para a <span class="underline decoration-teal-400/50 underline-offset-2">Estação Largo do Machado</span>
          </p>
        </div>
      </div>

      <!-- Description Text -->
      <p class="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5 font-normal">
        Este site é um <strong class="text-white font-semibold">modelo demonstrativo de proposta</strong> desenvolvido para apresentar uma sugestão de nova presença digital moderna, elegante e estratégica para o restaurante.
      </p>

      <!-- 3 Feature Highlights Cards -->
      <div class="space-y-2.5 mb-4">
        <div class="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d2235]/65 p-3.5 transition-colors hover:border-teal-500/30">
          <div class="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="globe" class="w-4 h-4"></i>
          </div>
          <div class="space-y-0.5">
            <strong class="block text-xs font-semibold text-white">Baseado em Informações Públicas</strong>
            <p class="text-[11px] text-stone-300/80 leading-relaxed">As informações, especialidades e dados foram levantados a partir do site atual da casa e do perfil público no Google.</p>
          </div>
        </div>

        <div class="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d2235]/65 p-3.5 transition-colors hover:border-teal-500/30">
          <div class="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="triangle-alert" class="w-4 h-4"></i>
          </div>
          <div class="space-y-0.5">
            <strong class="block text-xs font-semibold text-white">Caráter Ilustrativo e Exemplo</strong>
            <p class="text-[11px] text-stone-300/80 leading-relaxed">Os textos, fotos, números de contato e detalhes de atendimento são demonstrativos e servem exclusivamente como demonstração de layout.</p>
          </div>
        </div>

        <div class="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d2235]/65 p-3.5 transition-colors hover:border-teal-500/30">
          <div class="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
          </div>
          <div class="space-y-0.5">
            <strong class="block text-xs font-semibold text-white">Totalmente Personalizável</strong>
            <p class="text-[11px] text-stone-300/80 leading-relaxed">Todas as seções, imagens, serviços e mensagens podem ser alinhados e customizados de acordo com a preferência da casa.</p>
          </div>
        </div>
      </div>

      <!-- Instagram Agency Card -->
      <a href="https://www.instagram.com/venoystudio/" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between gap-3 rounded-xl border border-teal-500/35 bg-teal-950/30 hover:bg-teal-900/35 p-3 px-3.5 mb-5 transition-all duration-200 cursor-pointer">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-teal-400/15 text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </div>
          <div>
            <span class="block text-[10px] font-bold uppercase tracking-wider text-teal-400">Desenvolvido por Venoy Studio</span>
            <span class="text-xs font-semibold text-white group-hover:text-teal-300 transition-colors">@venoystudio</span>
          </div>
        </div>
        <span class="inline-flex items-center gap-1 text-[11px] font-medium text-teal-300 group-hover:translate-x-0.5 transition-transform">
          <span>Instagram</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </span>
      </a>

      <!-- Bottom Button -->
      <button type="button" onclick="closeProposalModal()" class="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#071824] py-3 px-5 font-bold text-xs sm:text-sm shadow-[0_10px_25px_rgba(45,212,191,0.25)] hover:shadow-[0_14px_30px_rgba(45,212,191,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        <span>Explorar Modelo do Site</span>
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>

      <p class="text-center text-[10px] text-stone-400/80 mt-3.5">
        Você pode reabrir este aviso pelo selo no canto inferior esquerdo a qualquer momento.
      </p>
    </div>
  </div>

  <!-- Floating Badge (Bottom-Left) -->
  <aside id="proposal-badge" aria-label="Aviso de modelo demonstrativo" class="hidden fixed bottom-20 md:bottom-5 left-4 md:left-5 z-40">
    <button type="button" onclick="openProposalModal()" class="group flex items-center gap-2.5 rounded-full border border-teal-500/40 bg-[#081726]/95 px-4 py-2 text-xs font-medium text-stone-100 shadow-xl backdrop-blur-md hover:border-teal-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" style="box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 16px -2px rgba(45, 212, 191, 0.25)">
      <span class="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf] group-hover:scale-125 transition-transform"></span>
      <span class="font-semibold tracking-wide text-[11px] text-white">Modelo de Proposta</span>
    </button>
  </aside>
</body>
</html>`;

fs.writeFileSync(path.join(projDir, 'standalone_preview.html'), htmlContent, 'utf8');
console.log('Successfully wrote standalone_preview.html with embedded data!');
