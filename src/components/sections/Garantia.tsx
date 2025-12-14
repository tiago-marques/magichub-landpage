import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="garantia" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="shield" width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M35 10 L50 20 L50 40 L35 55 L20 40 L20 20 Z" fill="none" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#shield)" />
        <g class="text-[var(--accent)]">
          <circle cx="50%" cy="50%" r="130" fill="currentColor" opacity="0.05"/>
        </g>
      </svg>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="text-center mb-12 animate-fade-in">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-6">
          <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">
          <span class="text-green-500">100%</span> Sem Risco para Você
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-10 animate-fade-in-delay">
        {/* Demonstração Gratuita */}
        <div class="bg-white/90 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-md">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg class="w-9 h-9 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-green-400 mb-1">R$ 0,00</h3>
              <p class="text-sm text-[var(--muted)]">Demonstração Gratuita</p>
            </div>
          </div>
          <p class="text-[var(--text)] leading-relaxed">
            Conheça a plataforma completa sem pagar nada. Veja tudo funcionando na prática antes de decidir.
          </p>
        </div>

        {/* Você decide */}
        <div class="bg-white/90 backdrop-blur-sm border-2 border-[var(--accent)]/30 rounded-2xl p-8 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 shadow-md">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 bg-[var(--accent)]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg class="w-9 h-9 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[var(--accent)] mb-1">Você Decide</h3>
              <p class="text-sm text-[var(--muted)]">Controle Total</p>
            </div>
          </div>
          <p class="text-[var(--text)] leading-relaxed">
            Só avança se fizer sentido para sua loja. Nenhuma pressão, nenhuma obrigação.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 animate-fade-in-delay" style="animation-delay: 0.4s;">
        {/* Sem Contratos */}
        <div class="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-[var(--accent)]/10 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-md">
          <div class="w-14 h-14 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h4 class="font-bold text-[var(--text)] mb-2">Sem Contratos</h4>
          <p class="text-sm text-[var(--muted)]">Nada de letras miúdas ou compromissos longos</p>
        </div>

        {/* Sem Taxas Ocultas */}
        <div class="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-[var(--accent)]/10 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-md">
          <div class="w-14 h-14 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h4 class="font-bold text-[var(--text)] mb-2">Sem Taxas Ocultas</h4>
          <p class="text-sm text-[var(--muted)]">Preço transparente desde o primeiro dia</p>
        </div>

        {/* Sem Obrigação */}
        <div class="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-[var(--accent)]/10 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-md">
          <div class="w-14 h-14 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h4 class="font-bold text-[var(--text)] mb-2">Sem Obrigação</h4>
          <p class="text-sm text-[var(--muted)]">Cancele quando quiser, sem burocracia</p>
        </div>
      </div>

      <div class="mt-10 text-center bg-gradient-to-r from-green-500/10 via-[var(--accent)]/10 to-blue-500/10 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-8 animate-fade-in-delay" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl font-bold text-[var(--text)] mb-3">
          <span class="text-green-500">Nossa garantia é simples:</span>
        </p>
        <p class="text-lg text-[var(--muted)] max-w-2xl mx-auto">
          Se não agregar valor à sua loja, você não paga nada. Simples assim.
        </p>
      </div>
    </div>
  </Section>
));
