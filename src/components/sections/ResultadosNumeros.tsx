import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="resultados" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="growth" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 30 L10 25 L20 15 L30 20 L40 10 L50 5" fill="none" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#growth)" />
        <g class="text-[var(--accent)]">
          <circle cx="30%" cy="60%" r="100" fill="currentColor" opacity="0.07"/>
          <circle cx="70%" cy="40%" r="130" fill="currentColor" opacity="0.07"/>
        </g>
      </svg>
    </div>

    <div class="text-center mb-16 relative z-10 animate-fade-in">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">
        Resultados Comprovados em Números
      </h2>
      <p class="text-xl text-[var(--muted)] max-w-3xl mx-auto">
        Veja o impacto real da IA no seu catálogo e vendas
      </p>
    </div>

    {/* 4 Métricas Grande */}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10 mb-12">
      {/* 1. Tempo Economizado */}
      <div class="group relative animate-fade-in">
        <div class="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-[var(--accent)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">80%</span>
          </div>
          <p class="text-[var(--text)] font-bold mb-2">Menos Tempo</p>
          <p class="text-sm text-[var(--muted)]">
            Economiza 2 horas para cada 100 produtos
          </p>
          <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">Sem digitação manual</p>
          </div>
        </div>
      </div>

      {/* 2. Imagens de Qualidade */}
      <div class="group relative animate-fade-in-delay" style="animation-delay: 0.1s;">
        <div class="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-[var(--accent)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">95%</span>
          </div>
          <p class="text-[var(--text)] font-bold mb-2">Imagens HD</p>
          <p class="text-sm text-[var(--muted)]">
            Produtos com fotos profissionais
          </p>
          <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">+120% mais cliques</p>
          </div>
        </div>
      </div>

      {/* 3. Catálogo Pronto */}
      <div class="group relative animate-fade-in-delay" style="animation-delay: 0.2s;">
        <div class="absolute -inset-0.5 bg-gradient-to-br from-green-500 to-[var(--accent)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">10</span>
            <span class="text-2xl font-bold text-[var(--muted)]">min</span>
          </div>
          <p class="text-[var(--text)] font-bold mb-2">Catálogo Pronto</p>
          <p class="text-sm text-[var(--muted)]">
            Primeira publicação funcionando
          </p>
          <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">Sem configuração técnica</p>
          </div>
        </div>
      </div>

      {/* 4. Aumento de Vendas */}
      <div class="group relative animate-fade-in-delay" style="animation-delay: 0.3s;">
        <div class="absolute -inset-0.5 bg-gradient-to-br from-orange-500 to-[var(--accent)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8L5.343 19.657M1 21h8m0 0v-8m0 8L19.657 4.343"></path>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">3x</span>
          </div>
          <p class="text-[var(--text)] font-bold mb-2">Mais Vendas</p>
          <p class="text-sm text-[var(--muted)]">
            Aumento médio no primeiro mês
          </p>
          <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">Com IA + Google</p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Botão */}
    <div class="text-center relative z-10 animate-fade-in-delay" style="animation-delay: 0.45s;">
      <a 
        href="mailto:contato@minhavitrineonline.com.br?subject=Ver%20IA%20em%20acao%20minhavitrineonline" 
        class="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--accent)] to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <span>Ver IA Funcionando Agora</span>
        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </div>
  </Section>
));
