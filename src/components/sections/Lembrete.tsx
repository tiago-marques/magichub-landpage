import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="lembrete" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waves" width="100" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 25 Q 25 15, 50 25 T 100 25" fill="none" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
        <g class="text-[var(--accent)]">
          <circle cx="35%" cy="45%" r="105" fill="currentColor" opacity="0.06"/>
          <circle cx="70%" cy="55%" r="85" fill="currentColor" opacity="0.06"/>
        </g>
      </svg>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="text-center mb-12 animate-fade-in">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-full shadow-lg mb-6">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">
          É Hora de <span class="text-[var(--accent)]">Crescer</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-delay">
        {/* Você já vende bem */}
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-[var(--text)]">Sua Loja Já Vende Bem</h3>
          <p class="text-[var(--muted)] text-sm">
            Você construiu uma base sólida de clientes fiéis
          </p>
        </div>

        {/* Próximo passo */}
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-600)] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-[var(--text)]">Agora É Hora do Digital</h3>
          <p class="text-[var(--muted)] text-sm">
            Apareça online e alcance novos clientes
          </p>
        </div>

        {/* Sem complicação */}
        <div class="text-center">
          <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-[var(--text)]">Comece Sem Complicação</h3>
          <p class="text-[var(--muted)] text-sm">
            Simples, rápido e feito para você
          </p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-[var(--accent)]/10 to-blue-500/10 backdrop-blur-sm border-2 border-[var(--accent)]/30 rounded-2xl p-8 text-center animate-fade-in-delay" style="animation-delay: 0.4s;">
        <p class="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
          O momento é <span class="text-[var(--accent)]">agora</span>
        </p>
        <p class="text-lg text-[var(--muted)] max-w-2xl mx-auto">
          Enquanto outros ainda pensam, você pode estar <span class="font-bold text-[var(--accent)]">vendendo mais</span> e 
          conquistando clientes que antes nem sabiam que sua loja existia
        </p>
      </div>
    </div>
  </Section>
));
