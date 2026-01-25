import { component$ } from '@builder.io/qwik';

import slogan from '../assets/logo-512.png';
import VideoHero from './VideoHero';

export default component$(() => {
  return (
    <header class="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Video Background via VideoHero component */}
      <VideoHero />

      {/* Background Pattern - Oculto em mobile para melhorar Speed Index */}
      <div class="hidden md:block absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
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

      <div class="max-w-6xl mx-auto px-6 sm:px-12 py-16 md:py-20 text-center relative z-10">
        {/* Logo/Slogan animado com vídeo */}
        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="relative max-w-full w-full" style="max-width: 512px;">
            <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-blue-500 blur-2xl opacity-30 rounded-full slow-connection:hidden"></div>
            <img
              src={slogan}
              class="hero-img max-w-full w-full h-auto object-contain drop-shadow-2xl"
              alt="MinhaVitrineOnline"
              width="512"
              height="256"
              fetchPriority="high"
              decoding="async"
              style="aspect-ratio: 2/1; content-visibility: auto;"
            />
          </div>
        </div>

        {/* H1 Principal - Focused on outcome, not feature */}

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900 md:text-white md:drop-shadow-[0_6px_32px_rgba(30,64,175,0.85)]">
          Venda mais com seu catálogo digital
        </h1>

        {/* Subheadline - Who is this for + Problem solved */}
        <p class="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-600 md:text-white/90 md:drop-shadow-[0_6px_32px_rgba(30,64,175,0.85)]">
          Para pequenos lojistas que querem aparecer no Google e vender sem complicação
        </p>

        {/* Primary CTA - Single, clear action */}
        <div class="mb-8 flex justify-center">
          <a
            href="mailto:contato@minhavitrineonline.com.br?subject=Ver%20IA%20em%20acao%20minhavitrineonline"
            class="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--accent)] to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Ver a IA funcionando (15 min)</span>
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>

        {/* Microcopy to reduce friction */}
        <div class="text-sm mb-8 flex flex-col items-center space-y-1 text-gray-600 md:text-white/80 md:drop-shadow-[0_6px_32px_rgba(30,64,175,0.85)]">
          <p>✓ Sem compromisso • ✓ 15 minutos</p>
          <p>✓ Suporte</p>
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
