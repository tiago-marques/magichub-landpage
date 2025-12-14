import { component$ } from '@builder.io/qwik';
import Section from '../Section';

import img1 from '../../assets/perto.jpg';
import img2 from '../../assets/entrega-gratis.svg';
import img3 from '../../assets/pequena-empresa.png';
import img4 from '../../assets/whats-2.png';

export default component$(() => {
  const problemas = [
    { text: 'Seus produtos não aparecem no Google, nem com a função de "Perto"', img: img1 },
    { text: 'Você não oferece opções de entrega com os parceiros do Google', img: img2 },
    { text: 'Não tem os benefícios do Google para pequenas empresas locais', img: img3 },
    { text: 'Não tem tempo de gerenciar seu catálogo online no Whatsapp', img: img4 },
  ];

  return (
    <Section id="problema" fullScreen>
      <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="2.5" fill="currentColor" class="text-[var(--accent)]" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <g class="text-[var(--accent)]">
            <path d="M 0 50% Q 25% 40%, 50% 50% T 100% 50%" fill="none" stroke="currentColor" stroke-width="3" opacity="0.5"/>
            <path d="M 0 60% Q 25% 50%, 50% 60% T 100% 60%" fill="none" stroke="currentColor" stroke-width="3" opacity="0.5"/>
            <circle cx="15%" cy="25%" r="80" fill="none" stroke="currentColor" stroke-width="3" opacity="0.4" stroke-dasharray="5,5"/>
            <circle cx="85%" cy="75%" r="100" fill="none" stroke="currentColor" stroke-width="3" opacity="0.4" stroke-dasharray="5,5"/>
            <polygon points="40%,15% 45%,20% 40%,25% 35%,20%" fill="currentColor" opacity="0.4"/>
            <polygon points="75%,30% 80%,35% 75%,40% 70%,35%" fill="currentColor" opacity="0.4"/>
            <polygon points="25%,80% 30%,85% 25%,90% 20%,85%" fill="currentColor" opacity="0.4"/>
          </g>
        </svg>
      </div>
      <div class="text-center mb-12 relative z-10 animate-fade-in">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-lg mb-6">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">
          O <span class="badge text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">minhavitrineonline</span> é para <span class="text-[var(--accent)]">você que vende bem</span> na loja, mas...
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 section-content relative z-10 max-w-7xl mx-auto">
        {problemas.map((p, idx) => (
          <div
            key={idx}
            class="group p-6 rounded-2xl h-96 flex flex-col overflow-hidden border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-red-500/40 hover:scale-105 animate-fade-in-delay"
            style={`animation-delay: ${idx * 0.1}s;`}
          >
            <div class="h-full w-full flex flex-col">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div class="h-1 flex-1 rounded-full bg-gradient-to-r from-red-400/50 to-orange-400/50" />
              </div>
              <div class="relative mb-4 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                {/* Lazy loading e dimensões para otimizar performance */}
                <img
                  src={p.img}
                  alt={`problema-${idx + 1}`}
                  class="w-full h-44 object-cover"
                  width="400"
                  height="176"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <p class="text-sm md:text-base leading-relaxed flex-1 flex items-center justify-center text-[var(--text)] font-medium italic px-2">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="w-full text-center py-12 relative z-10 animate-fade-in-delay" style="animation-delay: 0.6s;">
        <div class="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border-2 border-orange-500/30 rounded-2xl p-8 shadow-lg">
          <p class="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
            ...enquanto isso, <span class="text-orange-500">seus clientes</span> estão procurando online...
          </p>
          <p class="text-[var(--muted)]">
            <span class="badge-red">...e encontrando seus concorrentes!!</span>
          </p>
        </div>
      </div>
    </Section>
  );
});
