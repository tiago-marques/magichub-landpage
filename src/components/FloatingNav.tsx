import { component$, useVisibleTask$, useSignal, $ } from '@builder.io/qwik';

export default component$(() => {
  const sections = useSignal<string[]>([]);
  const index = useSignal(0);

  useVisibleTask$(() => {
    const query = () => Array.from(document.querySelectorAll('section[id]')).map((s) => (s as HTMLElement).id);
    sections.value = query();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            const idx = sections.value.indexOf(id);
            if (idx >= 0) index.value = idx;
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.55 }
    );

    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

    // update list on DOM changes (in case sections mount later)
    const mo = new MutationObserver(() => (sections.value = query()));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  });

  const handleClick = $(() => {
    if (sections.value.length === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (index.value >= sections.value.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const nextId = sections.value[index.value + 1];
      const el = document.getElementById(nextId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  const isLast = () => sections.value.length > 0 && index.value >= sections.value.length - 1;

  return (
    <button
      onClick$={handleClick}
      aria-label={isLast() ? 'Ir ao topo' : 'Ir para próxima seção'}
      class="fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      style={{ background: 'var(--accent-600)' }}
      title={isLast() ? 'Topo' : 'Próxima seção'}
    >
      {isLast() ? (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </button>
  );
});
