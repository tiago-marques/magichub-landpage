import { component$ } from '@builder.io/qwik';
import LogoPng from '../assets/logo.webp';
//Como funciona | Benefícios | Quem já usa
export default component$(() => {
  return (
    <header
      class="sticky top-0 w-full z-50 backdrop-blur-md bg-white/90 shadow-md border-b border-gray-200/50"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 group">
          <div class="relative">
            <div class="absolute inset-0 bg-[var(--accent)]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            {/* Dimensões explícitas para evitar Layout Shift (CLS) */}
            <img src={LogoPng} class="h-12 w-12 md:h-14 md:w-14 object-contain relative transition-transform duration-300 group-hover:scale-105" alt="MinhaVitrineOnline" width="56" height="56" fetchPriority="high" />
          </div>
        </a>
        
        <nav class="hidden md:flex gap-8 text-sm font-medium">
          <a 
            href="#solucao" 
            class="relative text-gray-600 hover:text-[var(--accent)] transition-colors duration-200 group"
          >
            <span>Como funciona</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#beneficios" 
            class="relative text-gray-600 hover:text-[var(--accent)] transition-colors duration-200 group"
          >
            <span>Seu catálogo online</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#prova-social" 
            class="relative text-gray-600 hover:text-[var(--accent)] transition-colors duration-200 group"
          >
            <span>Quem já usa</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        
        <div>
          <a 
            href="mailto:contato@minhavitrineonline.com.br?subject=Agendar%20demo%20minhavitrineonline" 
            class="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent)] to-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>Agendar demo</span>
          </a>
        </div>
      </div>
    </header>
  );
});
