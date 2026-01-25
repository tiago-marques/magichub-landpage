import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const showSticky = useSignal(true);
  const stickyRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const handleScroll = () => {
      if (!stickyRef.value) return;

      // Detecta CTAs existentes
      const ctaElements = document.querySelectorAll('[href*="mailto:"]');
      
      // Esconde o sticky CTA se houver CTA visível na viewport
      let hasVisibleCTA = false;
      ctaElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 50) {
          hasVisibleCTA = true;
        }
      });

      showSticky.value = !hasVisibleCTA;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div
      ref={stickyRef}
      class={`fixed bottom-0 left-0 right-0 md:hidden z-40 transition-all duration-300 ${
        showSticky.value ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Separador */}
      <div class="h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>

      {/* Container */}
      <div class="bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 safe-area-inset-bottom">
        <a
          href="mailto:contato@minhavitrineonline.com.br?subject=Ver%20IA%20em%20acao%20minhavitrineonline"
          class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--accent)] to-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>Começar grátis agora</span>
        </a>
        <p class="text-center text-xs text-gray-500 mt-2">
          ✓ Sem compromisso • ✓ 15 min
        </p>
      </div>
    </div>
  );
});
