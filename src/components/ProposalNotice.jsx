import React, { useState, useEffect } from 'react';
import { X, Globe, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';

function InstagramIcon({ className = "size-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ProposalNotice({
  clientName = 'Estação Largo do Machado',
  companyType = 'restaurante',
  logoSrc = '/assets/agency-logo.png',
  instagramHandle = 'venoystudio',
  instagramUrl = 'https://www.instagram.com/venoystudio/',
  defaultOpen = true,
  position = 'bottom-left',
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* 1. Modal de Apresentação da Proposta */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg rounded-2xl border border-teal-500/25 bg-[#081726]/95 p-6 sm:p-8 text-stone-100 shadow-2xl backdrop-blur-xl max-h-[92vh] overflow-y-auto no-scrollbar"
            style={{
              boxShadow:
                '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 45px -10px rgba(45, 212, 191, 0.18)'
            }}
          >
            {/* Top Bar: Pill Tag & Close Button */}
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-300">
                <span className="size-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Modelo Demonstrativo · Proposta</span>
              </span>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="size-8 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fechar aviso"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Header: Logo & Titles */}
            <div className="flex items-start gap-4 mb-4">
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt="Logo Venoy Studio"
                  className="size-12 rounded-xl object-contain border border-teal-500/30 bg-black/40 p-1 shadow-md shrink-0"
                />
              )}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight font-sans">
                  Apresentação de Proposta de Site
                </h2>
                <p className="text-xs sm:text-sm font-medium text-teal-300 mt-0.5">
                  Modelo conceitual desenvolvido para a{' '}
                  <span className="underline decoration-teal-400/50 underline-offset-2">
                    {clientName}
                  </span>
                </p>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5 font-normal">
              Este site é um <strong className="text-white font-semibold">modelo demonstrativo de proposta</strong> desenvolvido para apresentar uma sugestão de nova presença digital moderna, elegante e estratégica para o {companyType}.
            </p>

            {/* 3 Feature Highlights Cards */}
            <div className="space-y-2.5 mb-4">
              {/* Card 1 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d2235]/65 p-3.5 transition-colors hover:border-teal-500/30">
                <div className="size-8 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="size-4" />
                </div>
                <div className="space-y-0.5">
                  <strong className="block text-xs font-semibold text-white">
                    Baseado em Informações Públicas
                  </strong>
                  <p className="text-[11px] text-stone-300/80 leading-relaxed">
                    As informações, especialidades e dados foram levantados a partir do site atual da casa e do perfil público no Google.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d2235]/65 p-3.5 transition-colors hover:border-teal-500/30">
                <div className="size-8 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="size-4" />
                </div>
                <div className="space-y-0.5">
                  <strong className="block text-xs font-semibold text-white">
                    Caráter Ilustrativo e Exemplo
                  </strong>
                  <p className="text-[11px] text-stone-300/80 leading-relaxed">
                    Os textos, fotos, números de contato e detalhes de atendimento são demonstrativos e servem exclusivamente como demonstração de layout.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d2235]/65 p-3.5 transition-colors hover:border-teal-500/30">
                <div className="size-8 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="size-4" />
                </div>
                <div className="space-y-0.5">
                  <strong className="block text-xs font-semibold text-white">
                    Totalmente Personalizável
                  </strong>
                  <p className="text-[11px] text-stone-300/80 leading-relaxed">
                    Todas as seções, imagens, serviços e mensagens podem ser alinhados e customizados de acordo com a preferência da casa.
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Agency Card */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-teal-500/35 bg-teal-950/30 hover:bg-teal-900/35 p-3 px-3.5 mb-5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-teal-400/15 text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-400">
                    Desenvolvido por Venoy Studio
                  </span>
                  <span className="text-xs font-semibold text-white group-hover:text-teal-300 transition-colors">
                    @{instagramHandle}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-300 group-hover:translate-x-0.5 transition-transform">
                <span>Instagram</span>
                <ArrowRight className="size-3.5" />
              </span>
            </a>

            {/* Bottom Action Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#071824] py-3 px-5 font-bold text-xs sm:text-sm shadow-[0_10px_25px_rgba(45,212,191,0.25)] hover:shadow-[0_14px_30px_rgba(45,212,191,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Explorar Modelo do Site</span>
              <ArrowRight className="size-4" />
            </button>

            {/* Sub-note */}
            <p className="text-center text-[10px] text-stone-400/80 mt-3.5">
              Você pode reabrir este aviso pelo selo no canto inferior esquerdo a qualquer momento.
            </p>
          </div>
        </div>
      )}

      {/* 2. Selo / Pílula Fixa no Rodapé (Exatamente como o print da proposta) */}
      {!isOpen && (
        <aside
          aria-label="Aviso de modelo demonstrativo"
          className={`fixed bottom-20 md:bottom-5 z-40 ${
            position === 'bottom-left' ? 'left-4 md:left-5' : 'right-4 md:right-5'
          } animate-fade-in-up`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 rounded-full border border-teal-500/40 bg-[#081726]/95 px-4 py-2 text-xs font-medium text-stone-100 shadow-xl backdrop-blur-md hover:border-teal-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            style={{
              boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 16px -2px rgba(45, 212, 191, 0.25)'
            }}
          >
            {/* Glowing Dot */}
            <span className="size-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf] group-hover:scale-125 transition-transform"></span>

            <span className="font-semibold tracking-wide text-[11px] text-white">
              Modelo de Proposta
            </span>
          </button>
        </aside>
      )}
    </>
  );
}

export default ProposalNotice;
