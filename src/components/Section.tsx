import { component$, Slot, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(({ title, id, fullScreen = false }: any) => {
  const sectionClass = `section relative ${fullScreen ? 'py-20 md:py-16 flex items-center' : ''}`.trim();
  const containerClass = `container max-w-5xl ${fullScreen ? 'flex flex-col justify-center' : ''}`.trim();
  const sectionRef = useSignal<HTMLElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (!sectionRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Adiciona a classe 'visible' a todos os elementos com classe de animação
            target.querySelectorAll('.animate-fade-in, .animate-fade-in-delay').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(sectionRef.value);

    return () => {
      if (sectionRef.value) {
        observer.unobserve(sectionRef.value);
      }
    };
  });

  return (
    <section ref={sectionRef} id={id} class={sectionClass}>
      <div class={containerClass}>
        {title && <h2 class="section-heading">{title}</h2>}
        <div class="section-subtitle" />
        <div class="section-content"><Slot /></div>
      </div>
    </section>
  );
});
