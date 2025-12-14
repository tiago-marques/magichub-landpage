import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="aviso" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="info" width="65" height="65" patternUnits="userSpaceOnUse">
            <circle cx="32.5" cy="32.5" r="18" fill="none" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.25"/>
            <text x="32.5" y="38" font-size="20" fill="currentColor" class="text-[var(--accent)]" opacity="0.25" text-anchor="middle">i</text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#info)" />
      </svg>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="text-center mb-10 animate-fade-in">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg mb-6">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--text)]">
          Importante Saber
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6 animate-fade-in-delay">
        {/* O que NÃO é */}
        <div class="bg-white/90 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 shadow-md">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-red-400">Não Substitui</h3>
              <p class="text-[var(--muted)] text-sm leading-relaxed">
                Sua loja física continua sendo o coração do seu negócio
              </p>
            </div>
          </div>
        </div>

        {/* O que É */}
        <div class="bg-white/90 backdrop-blur-sm border-2 border-[var(--accent)]/30 rounded-2xl p-8 hover:border-[var(--accent)]/50 transition-all duration-300 shadow-md">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-[var(--accent)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-[var(--accent)]">Complementa</h3>
              <p class="text-[var(--muted)] text-sm leading-relaxed">
                Ajuda seus clientes a encontrarem seus produtos online e facilita novas vendas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-8 text-center animate-fade-in-delay shadow-md" style="animation-delay: 0.4s;">
        <div class="flex items-center justify-center gap-3 mb-4">
          <svg class="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <h3 class="text-2xl font-bold text-[var(--text)]">O Poder da Combinação</h3>
        </div>
        <p class="text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
          <span class="font-bold text-[var(--accent)]">Loja física + presença digital</span> = mais clientes encontram seus produtos, 
          mais vendas acontecem, e você mantém o controle do seu negócio como sempre fez.
        </p>
      </div>
    </div>
  </Section>
));
