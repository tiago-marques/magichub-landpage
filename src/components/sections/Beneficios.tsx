import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
    <Section id="beneficios">
        <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stars" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 10 L33 23 L46 23 L36 31 L40 44 L30 36 L20 44 L24 31 L14 23 L27 23 Z" fill="currentColor" class="text-[var(--accent)]" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars)" />
            <g class="text-[var(--accent)]">
              <path d="M 10% 50% L 20% 50%" stroke="currentColor" stroke-width="3" opacity="0.4"/>
              <path d="M 80% 30% L 90% 30%" stroke="currentColor" stroke-width="3" opacity="0.4"/>
              <circle cx="70%" cy="70%" r="100" fill="currentColor" opacity="0.06"/>
            </g>
          </svg>
        </div>

        <div class="text-center mb-12 relative z-10">
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Benefícios que <span class="text-[var(--accent)]">Transformam</span> seu Negócio
          </h2>
          <p class="section-content animate-fade-in-delay max-w-3xl mx-auto">
            Tudo o que você precisa para <span class="font-bold text-[var(--accent)]">vender mais</span> sem complicação
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {/* Catálogo Digital Automático */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in shadow-md">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">📦</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Catálogo Digital Automático</h3>
            <p class="text-sm text-[var(--muted)]">
              Seus produtos organizados e prontos para compartilhar, sem digitação manual
            </p>
          </div>

          {/* Economia de Tempo */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">⏱️</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Economia de Horas</h3>
            <p class="text-sm text-[var(--muted)]">
              Pare de perder tempo com trabalho manual e foque em atender seus clientes
            </p>
          </div>

          {/* WhatsApp Integration */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.2s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">📱</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Compartilhe no WhatsApp</h3>
            <p class="text-sm text-[var(--muted)]">
              Envie seus produtos com um clique para os clientes que já te conhecem
            </p>
          </div>

          {/* Presença Digital */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.3s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">🌐</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Presença Digital Sem Dor de Cabeça</h3>
            <p class="text-sm text-[var(--muted)]">
              Apareça online de forma profissional, sem precisar entender de tecnologia
            </p>
          </div>

          {/* Fácil de Começar */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.4s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">🚀</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Comece Sem Mudar Sua Rotina</h3>
            <p class="text-sm text-[var(--muted)]">
              Configure uma vez e funciona automaticamente no seu dia a dia
            </p>
          </div>

          {/* Crescimento Real */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.5s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">💰</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Venda Mais, Todo Dia</h3>
            <p class="text-sm text-[var(--muted)]">
              Aumente suas vendas alcançando clientes que antes você não conseguia atingir
            </p>
          </div>
        </div>

        <div class="mt-12 text-center relative z-10 animate-fade-in-delay" style="animation-delay: 0.6s;">
          <p class="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Feito <span class="font-bold text-[var(--accent)]">especialmente</span> para pequenos lojistas que querem crescer
          </p>
        </div>
    </Section>
));
