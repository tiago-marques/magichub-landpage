import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => {
  const estado = useSignal('seu estado');
  const loading = useSignal(true);
  const vagas = useSignal(3);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    try {
      // Busca localização via IP usando ipwho.is (gratuito, HTTPS e suporta CORS)
      const response = await fetch('https://ipwho.is/');
      const data = await response.json();
      
      if (data.success && data.region) {
        // Remove prefixos como "State of" do nome do estado
        estado.value = data.region.replace(/^State of\s+/i, '');
        vagas.value = 3; // Vagas limitadas para região específica
      }
    } catch (error) {
      console.log('Não foi possível detectar localização:', error);
      estado.value = 'seu estado';
      vagas.value = 18; // Mais vagas disponíveis em caso de erro
    } finally {
      loading.value = false;
    }
  });

  return (
    <Section id="escassez" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="clock" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.3"/>
            <line x1="30" y1="30" x2="30" y2="20" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.3"/>
            <line x1="30" y1="30" x2="37" y2="30" stroke="currentColor" stroke-width="1.5" class="text-[var(--accent)]" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clock)" />
        <g class="text-[var(--accent)]">
          <circle cx="40%" cy="50%" r="100" fill="currentColor" opacity="0.06"/>
          <circle cx="65%" cy="45%" r="80" fill="currentColor" opacity="0.06"/>
        </g>
      </svg>
    </div>
    <div class="text-center relative z-10">
      <div class="text-center mb-12 relative z-10 animate-fade-in">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-lg mb-6">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-[var(--text)]">
          ⚠️ <span class="text-orange-500"> Atenção</span> ⚠️<br/><br/>
           Devido à <span class="text-[var(--accent)]">alta demanda</span>,<br/>
          estamos com <span class="underline">fila de espera</span> para demonstrações
        </h2>
      </div>
      
      <div class="max-w-2xl mx-auto mb-8 animate-fade-in-delay">
        <div class="bg-white/90 backdrop-blur-sm border-2 border-[var(--accent)]/30 rounded-xl p-6 mb-4 shadow-md">
          <div class="flex items-center justify-center gap-3 mb-3">
            <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-2xl font-extrabold text-[var(--text)]">
              Apenas{' '}
              {loading.value ? (
                <span class="badge text-2xl px-4 py-1 inline-flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              ) : (
                <span class="badge text-2xl px-4 py-1">{vagas.value} vagas</span>
              )}
              {' '}disponíveis
            </p>
          </div>
          <p class="text-sm text-[var(--muted)]">
            {loading.value ? (
              <span>para demonstração nas próximas semanas...</span>
            ) : (
              <span>para demonstração nas próximas semanas em <span class="font-bold text-[var(--accent)]">{estado.value}</span></span>
            )}
          </p>
        </div>
        
        <p class="section-content italic mb-6">
          💼 Mais de 50 lojistas já estão na fila aguardando a próxima abertura.<br/>
          🎯 Prioridade para quem se cadastrar primeiro.
        </p>
      </div>
    </div>
    
    <div class="text-center animate-fade-in-delay relative z-10" style="animation-delay: 0.6s;">
      <a href="mailto:contato@minhavitrineonline.com.br?subject=Quero%20ser%20early%20adopter" class="btn-primary group">
        <span class="font-extrabold">Garantir Minha Vaga Agora</span>
        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
      <div class="text-xs text-[var(--muted)] mt-4 flex flex-col items-center space-y-1">
        <p>🔒 Sem compromisso</p>
        <p>Cadastro leva menos de 1 minuto</p>
      </div>
    </div>
  </Section>
  );
});
