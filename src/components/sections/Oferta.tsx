import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => {
  const planos = [
    {
      nome: 'Gratuito',
      preco: '0',
      periodo: 'para sempre',
      destaque: false,
      funcionalidades: [
        'Até 50 produtos',
        'Catálogo básico online',
        'Compartilhamento via link',
        'Suporte por email',
        'Atualização manual',
      ]
    },
    {
      nome: 'Profissional',
      preco: '99,90',
      periodo: 'por mês',
      destaque: true,
      funcionalidades: [
        'Até 500 produtos',
        'Catálogo completo online',
        'Integração automática com NFe',
        'Enriquecimento com IA (busca EAN e imagens)',
        'Google Shopping integrado',
        'Suporte prioritário',
        'Relatórios de visualização',
        'WhatsApp Business API',
        'Domínio personalizado',
      ]
    },
    {
      nome: 'Enterprise',
      preco: '199,90',
      periodo: 'por mês',
      destaque: false,
      funcionalidades: [
        'Produtos ilimitados',
        'Múltiplas lojas',
        'Enriquecimento avançado com IA (EAN, imagens HD, descrições otimizadas)',
        'Integração com marketplace',
        'API completa',
        'Suporte 24/7',
        'Gerente de conta dedicado',
        'Analytics avançado',
        'Personalização completa',
        'Sistema de pedidos integrado',
        'Gestão de estoque',
      ]
    }
  ];

  return (
    <Section id="oferta" fullScreen>
      <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" stroke-width="1" class="text-[var(--accent)]" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
          <g class="text-[var(--accent)]">
            <circle cx="30%" cy="40%" r="110" fill="currentColor" opacity="0.06"/>
            <circle cx="75%" cy="65%" r="95" fill="currentColor" opacity="0.06"/>
          </g>
        </svg>
      </div>
      
      <div class="relative z-10">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Escolha seu plano</h2>
          <p class="text-lg text-[var(--muted)]">Comece grátis e evolua conforme sua loja cresce</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-delay">
          {planos.map((plano, idx) => (
            <div
              key={idx}
              class={`card relative flex flex-col p-8 ${
                plano.destaque 
                  ? 'ring-4 ring-[var(--accent)] transform md:scale-105 shadow-2xl' 
                  : 'shadow-lg'
              }`}
            >
              {plano.destaque && (
                <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white px-6 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold mb-2 text-[var(--text)]">{plano.nome}</h3>
                <div class="flex items-baseline justify-center gap-1 mb-2">
                  <span class="text-lg font-semibold">R$</span>
                  <span class="text-5xl font-extrabold text-[var(--accent)]">{plano.preco}</span>
                </div>
                <p class="text-sm text-[var(--muted)]">{plano.periodo}</p>
              </div>

              <ul class="space-y-3 mb-8 flex-1">
                {plano.funcionalidades.map((func, i) => (
                  <li key={i} class="flex items-start gap-2 text-sm">
                    <svg class="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{func}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`mailto:contato@minhavitrineonline.com.br?subject=Contratar%20plano%20${plano.nome}`}
                class={`${
                  plano.destaque ? 'btn-primary-cta' : 'btn-primary'
                } group w-full justify-center`}
              >
                <span class="font-extrabold">
                  {plano.preco === '0' ? 'Agendar demo' : 'Contratar Agora'}
                </span>
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});
