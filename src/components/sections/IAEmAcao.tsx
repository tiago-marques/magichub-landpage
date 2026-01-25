import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="ia-em-acao" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ai-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" class="text-[var(--accent)]" opacity="0.5"/>
            <circle cx="5" cy="5" r="1" fill="currentColor" class="text-[var(--accent)]" opacity="0.3"/>
            <circle cx="35" cy="35" r="1" fill="currentColor" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-dots)" />
        <g class="text-[var(--accent)]">
          <circle cx="20%" cy="50%" r="120" fill="currentColor" opacity="0.07"/>
          <circle cx="80%" cy="50%" r="140" fill="currentColor" opacity="0.07"/>
        </g>
      </svg>
    </div>

    <div class="text-center mb-16 relative z-10 animate-fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-[var(--accent)] rounded-full shadow-lg mb-6">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[var(--accent)]">Inteligência Artificial</span> Fazendo o Trabalho por Você
      </h2>
      <p class="text-xl text-[var(--muted)] max-w-3xl mx-auto">
        Enquanto você atende seus clientes, a IA enriquece seu catálogo automaticamente em segundos
      </p>
    </div>

    {/* 3 Cards com Animação */}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
      {/* 1. IA Busca Imagens */}
      <div class="group relative animate-fade-in">
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-[var(--accent)] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          <div class="w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative group/image">
            {/* Antes */}
            <div class="absolute inset-0 flex items-center justify-center group-hover/image:opacity-0 transition-opacity duration-500">
              <div class="text-center">
                <div class="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mx-auto mb-3 flex items-center justify-center opacity-60">
                  <span class="text-4xl">📦</span>
                </div>
                <p class="text-xs text-gray-500 font-medium">Imagem pixelada</p>
              </div>
            </div>
            {/* Depois */}
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
              <div class="text-center">
                <div class="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-xl">
                  <span class="text-4xl">✨</span>
                </div>
                <p class="text-xs text-gray-700 font-medium">Imagem profissional</p>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-[var(--text)]">
            <span class="text-purple-500">📸</span> IA Busca Imagens
          </h3>
          <p class="text-[var(--muted)] mb-4 flex-grow">
            Automaticamente encontra fotos profissionais e de alta qualidade para cada produto
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Uniformidade visual garantida
            </li>
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              +120% mais cliques em Google
            </li>
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Sem custo extra
            </li>
          </ul>
        </div>
      </div>

      {/* 2. IA Detecta EAN */}
      <div class="group relative animate-fade-in-delay" style="animation-delay: 0.15s;">
        <div class="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          <div class="w-full h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative group/image">
            {/* Antes */}
            <div class="absolute inset-0 flex items-center justify-center group-hover/image:opacity-0 transition-opacity duration-500">
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <span class="text-3xl">🏷️</span>
                </div>
                <p class="text-xs text-gray-500 font-medium">Código EAN vago</p>
              </div>
            </div>
            {/* Depois */}
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-[var(--accent)] to-blue-500 rounded-lg flex items-center justify-center shadow-xl text-white">
                  <span class="text-3xl">✓</span>
                </div>
                <p class="text-xs text-gray-700 font-medium">Produto enriquecido</p>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-[var(--text)]">
            <span class="text-[var(--accent)]">🏷️</span> IA Detecta EAN
          </h3>
          <p class="text-[var(--muted)] mb-4 flex-grow">
            Escaneia automaticamente códigos de barras e puxa dados corretos do produto
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Preço, categoria, especificações
            </li>
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              0% de digitação manual
            </li>
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Integração com base nacional
            </li>
          </ul>
        </div>
      </div>

      {/* 3. IA Escreve Descrição */}
      <div class="group relative animate-fade-in-delay" style="animation-delay: 0.3s;">
        <div class="absolute -inset-1 bg-gradient-to-r from-green-500 to-[var(--accent)] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
        <div class="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          <div class="w-full h-64 bg-gradient-to-br from-green-100 to-cyan-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative group/image">
            {/* Antes */}
            <div class="absolute inset-0 flex items-center justify-center group-hover/image:opacity-0 transition-opacity duration-500">
              <div class="text-center px-4">
                <p class="text-xs text-gray-500 mb-2 font-medium">Descrição</p>
                <p class="text-xs text-gray-400 italic">Produto bom, loja de bairro...</p>
              </div>
            </div>
            {/* Depois */}
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
              <div class="text-center px-4">
                <p class="text-xs text-gray-700 mb-2 font-medium">Descrição Otimizada</p>
                <p class="text-xs text-gray-600 font-semibold">Produto premium, palavras-chave, conversão +40%</p>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-[var(--text)]">
            <span class="text-green-500">📝</span> IA Otimiza Descrições
          </h3>
          <p class="text-[var(--muted)] mb-4 flex-grow">
            Reescreve automaticamente com palavras-chave para SEO e copywriting de conversão
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              SEO automático para Google
            </li>
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              +40% taxa de conversão
            </li>
            <li class="flex items-center gap-2 text-sm text-[var(--text)]">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Em qualquer idioma
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* CTA compactado */}
    <div class="mt-16 text-center relative z-10 animate-fade-in-delay" style="animation-delay: 0.45s;">
      <div class="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-[var(--accent)]/30 rounded-2xl p-8 shadow-lg">
        <p class="text-lg md:text-xl font-bold text-[var(--text)] mb-2">
          Tudo isso funciona automaticamente enquanto você vende
        </p>
        <p class="text-[var(--muted)]">
          Não precisa fazer nada além do que já faz: vender. A IA cuida do resto.
        </p>
      </div>
    </div>
  </Section>
));
