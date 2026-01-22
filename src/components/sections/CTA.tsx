import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="cta">
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sparkle" width="70" height="70" patternUnits="userSpaceOnUse">
            <circle cx="35" cy="35" r="2" fill="currentColor" class="text-[var(--accent)]" opacity="0.4"/>
            <path d="M35 20 L37 33 L35 33 L33 33 Z" fill="currentColor" class="text-[var(--accent)]" opacity="0.3"/>
            <path d="M50 35 L37 37 L37 35 L37 33 Z" fill="currentColor" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sparkle)" />
        <g class="text-[var(--accent)]">
          <circle cx="25%" cy="35%" r="140" fill="currentColor" opacity="0.08"/>
          <circle cx="75%" cy="70%" r="120" fill="currentColor" opacity="0.08"/>
        </g>
      </svg>
    </div>
    <div class="text-center max-w-3xl mx-auto relative z-10 py-12 md:py-16">
      <div class="mb-8 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-[var(--text)]">
          Pronto para começar a vender mais?
        </h2>
        <p class="text-xl text-[var(--muted)] mb-8 leading-relaxed">
          Agende uma demonstração gratuita e conheça como é simples ter seu catálogo digital funcionando
        </p>
      </div>
      
      <div class="inline-block animate-pulse-soft">
        <a 
          href="mailto:contato@minhavitrineonline.com.br?subject=Agendar%20demo%20minhavitrineonline" 
          class="btn-primary-cta group inline-flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <span class="text-xl md:text-2xl font-extrabold">Agendar demonstração</span>
          <svg class="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
      
      <p class="mt-8 text-sm text-[var(--muted)] animate-fade-in-delay">
        ✓ Totalmente gratuito • ✓ Sem cartão de crédito • ✓ Suporte dedicado
      </p>
    </div>
  </Section>
));
