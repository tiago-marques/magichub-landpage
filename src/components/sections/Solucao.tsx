import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="solucao" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagon" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <path d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z" fill="none" stroke="currentColor" stroke-width="1" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagon)" />
        <g class="text-[var(--accent)]">
          <rect x="25%" y="20%" width="100" height="100" rx="15" fill="none" stroke="currentColor" stroke-width="3" opacity="0.4"/>
          <rect x="65%" y="60%" width="80" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="3" opacity="0.4"/>
          <circle cx="50%" cy="50%" r="150" fill="currentColor" opacity="0.05"/>
        </g>
      </svg>
    </div>
    <div class="text-center mb-12 relative z-10 animate-fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-blue-500 rounded-full shadow-lg mb-6">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text)]">
        A <span class="text-[var(--accent)]">Solução</span> é Simples
      </h2>
      <p class="text-xl text-[var(--muted)] max-w-3xl mx-auto">
        A <span class="badge">minhavitrineonline</span> cria seu catálogo digital <span class="font-bold text-[var(--accent)]">automaticamente</span> a partir das suas notas fiscais de vendas
      </p>
    </div>

    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
      <div class="bg-white/90 backdrop-blur-sm border-2 border-[var(--accent)]/20 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[var(--accent)]/40 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md">
        <div class="w-full h-56 bg-gradient-to-br from-blue-500/10 to-[var(--accent)]/10 rounded-xl mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
          <svg class="w-24 h-24 text-[var(--accent)] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
          <span class="text-2xl font-bold text-blue-400">1</span>
        </div>
        <h3 class="font-bold text-2xl mb-4 text-[var(--text)]">Venda Normalmente</h3>
        <ol class="space-y-3 text-left w-full">
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">1</span>
            </div>
            <span class="text-[var(--muted)]">Realize suas vendas na loja física</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">2</span>
            </div>
            <span class="text-[var(--muted)]">Emita suas notas fiscais normalmente</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">3</span>
            </div>
            <span class="text-[var(--muted)]">Suba as notas no sistema, quando quiser</span>
          </li>
        </ol>
      </div>

      {/* Seta Central */}
      <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div class="bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-full p-6 shadow-2xl animate-pulse-soft">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </div>
      </div>

      <div class="bg-white/90 backdrop-blur-sm border-2 border-[var(--accent)]/20 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[var(--accent)]/40 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.2s;">
        <div class="w-full h-56 bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-xl mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent" />
          <svg class="w-24 h-24 text-[var(--accent)] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div class="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
          <span class="text-2xl font-bold text-green-400">2</span>
        </div>
        <h3 class="font-bold text-2xl mb-4 text-[var(--text)]">Catálogo Automático</h3>
        <ol class="space-y-3 text-left w-full">
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">1</span>
            </div>
            <span class="text-[var(--muted)]">Sistema lê as notas fiscais, priorizando as mais recentes</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">2</span>
            </div>
            <span class="text-[var(--muted)]">Catálogo é criado automaticamente</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">3</span>
            </div>
            <span class="text-[var(--muted)]">Produtos e valores atualizados 24/7</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-bold text-[var(--accent)]">4</span>
            </div>
            <span class="text-[var(--muted)] font-bold text-[var(--accent)]">Clientes compram online a qualquer hora</span>
          </li>
        </ol>
      </div>
    </div>

    <div class="mt-12 text-center relative z-10 animate-fade-in-delay" style="animation-delay: 0.4s;">
      <div class="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border-2 border-[var(--accent)]/30 rounded-2xl p-8 shadow-lg">
        <p class="text-2xl font-bold text-[var(--text)] mb-2">
          <span class="text-[var(--accent)]">Zero esforço extra.</span> Máximo resultado.
        </p>
        <p class="text-[var(--muted)]">
          Você continua fazendo o que já faz. A tecnologia cuida do resto.
        </p>
      </div>
    </div>
  </Section>
));
