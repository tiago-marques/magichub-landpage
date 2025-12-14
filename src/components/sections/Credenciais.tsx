import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="credenciais" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="check" width="55" height="55" patternUnits="userSpaceOnUse">
            <path d="M15 27 L23 35 L40 18" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--accent)]" opacity="0.25"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#check)" />
        <g class="text-[var(--accent)]">
          <circle cx="25%" cy="60%" r="90" fill="currentColor" opacity="0.06"/>
          <circle cx="80%" cy="35%" r="110" fill="currentColor" opacity="0.06"/>
        </g>
      </svg>
    </div>
    
    <div class="text-center mb-12 relative z-10">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
        <span class="text-[var(--accent)]">Integrado</span> com as Melhores Plataformas
      </h2>
      <p class="section-content animate-fade-in-delay max-w-3xl mx-auto">
        Conecte sua loja aos <span class="font-bold text-[var(--accent)]">principais canais de venda</span> do mercado. 
        Tudo em um só lugar, sem complicação.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
      {/* Google Shopping */}
      <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-8 text-center hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in shadow-md">
        <div class="w-20 h-20 mx-auto mb-6 bg-white rounded-xl flex items-center justify-center shadow-lg">
          <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285F4"/>
            <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="#34A853"/>
            <path d="M12 12V22" stroke="#FBBC04" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Google Shopping</h3>
        <p class="text-sm text-[var(--muted)]">
          Seus produtos aparecem nas buscas do Google automaticamente
        </p>
      </div>

      {/* WhatsApp Business */}
      <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-8 text-center hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md">
        <div class="w-20 h-20 mx-auto mb-6 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-[var(--text)]">WhatsApp Catalog</h3>
        <p class="text-sm text-[var(--muted)]">
          Catálogo completo direto no WhatsApp Business dos seus clientes
        </p>
      </div>

      {/* Parceiros de Entrega */}
      <div class="bg-white/90 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-8 text-center hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay shadow-md" style="animation-delay: 0.4s;">
        <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#EA1D2C] to-[#C8102E] rounded-xl flex items-center justify-center shadow-lg">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-[var(--text)]">Parceiros de Entrega</h3>
        <p class="text-sm text-[var(--muted)]">
          Integração com iFood, Rappi, Uber e outros apps de delivery
        </p>
      </div>
    </div>

    <div class="mt-12 text-center relative z-10 animate-fade-in-delay" style="animation-delay: 0.6s;">
      <p class="section-content max-w-2xl mx-auto">
        <span class="badge">🚀 Onboarding rápido</span> com suporte inicial remoto e material passo-a-passo.<br/>
        Criado para quem <span class="font-bold text-[var(--accent)]">não é digital</span>, mas quer aparecer online e vender mais.
      </p>
    </div>
  </Section>
));
