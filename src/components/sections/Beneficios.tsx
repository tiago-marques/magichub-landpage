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
          {/* IA Enriquece Automático */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in shadow-md">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">🤖</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">IA Enriquece Tudo</h3>
            <p class="text-sm text-[var(--muted)]">
              Imagens, descrições, EAN, categoria — tudo preenchido automaticamente pela IA
            </p>
          </div>

          {/* Economia de Tempo */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">⏱️</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">80% Menos Tempo</h3>
            <p class="text-sm text-[var(--muted)]">
              Economiza 2 horas por 100 produtos. Foque em vender, não em digitar
            </p>
          </div>

          {/* WhatsApp Integration */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.2s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">📱</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">WhatsApp + Google</h3>
            <p class="text-sm text-[var(--muted)]">
              Catálogo automático no WhatsApp Business e Google Shopping 24/7
            </p>
          </div>

          {/* Presença Digital */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.3s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">🌐</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Online em 10 Minutos</h3>
            <p class="text-sm text-[var(--muted)]">
              Sem conhecimento técnico. Seu catálogo fica pronto para receber vendas imediatamente
            </p>
          </div>

          {/* Sem Mudar Rotina */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.4s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">🚀</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Compatível com Seu Negócio</h3>
            <p class="text-sm text-[var(--muted)]">
              Não precisa mudar nada. Você continua vendendo normalmente, a IA cuida do resto
            </p>
          </div>

          {/* Crescimento Real */}
          <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.5s;">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-4xl">💰</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[var(--text)]">3x Mais Vendas</h3>
            <p class="text-sm text-[var(--muted)]">
              Aumento médio de 3x no primeiro mês com IA + Google Shopping ativo
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
