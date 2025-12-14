import { component$ } from '@builder.io/qwik';

import slogan from '../assets/slogan.png';

export default component$(() => {
  return (
    <header class="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div class="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" class="text-[var(--accent)]" opacity="0.5"/>
            </pattern>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:var(--accent);stop-opacity:0.1" />
              <stop offset="100%" style="stop-color:rgb(59, 130, 246);stop-opacity:0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <circle cx="20%" cy="30%" r="200" fill="url(#hero-gradient)" />
          <circle cx="80%" cy="70%" r="250" fill="url(#hero-gradient)" />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 sm:px-12 py-20 text-center relative z-10">
        {/* Logo/Slogan animado */}
        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-blue-500 blur-2xl opacity-30 rounded-full"></div>
            <img
              src={slogan}
              class="relative max-w-full h-40 md:h-52 lg:h-64 w-auto object-contain drop-shadow-2xl"
              alt="MinhaVitrineOnline"
              width="512"
              height="256"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Tagline principal */}
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Crie seu catálogo digital <span class="text-[var(--accent)]">automático</span>
        </h2>

        {/* Subtítulo */}
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Para pequenos lojistas que querem <span class="font-bold text-[var(--accent)]">vender mais</span> sem complicação
        </p>

        {/* CTA Buttons */}
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:contato@minhavitrineonline.com.br?subject=Agendar%20demo%20minhavitrineonline"
            class="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--accent)] to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>Agendar Demonstração</span>
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          
          <a 
            href="#oferta" 
            class="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-gray-300 px-8 py-4 text-gray-700 font-semibold rounded-xl hover:bg-white hover:border-[var(--accent)] transition-all duration-300"
          >
            <span>Ver plano gratuito</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div class="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-600">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm">Demonstração Gratuita</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm">Sem Contrato</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm">Suporte Incluído</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
});
