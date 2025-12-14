import { component$, useSignal, useVisibleTask$, Slot } from '@builder.io/qwik';

export default component$(() => {
  const elementRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (!elementRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Adiciona a classe 'visible' a todos os elementos com classe de animação
            target.querySelectorAll('.animate-fade-in, .animate-fade-in-delay').forEach((el) => {
              el.classList.add('visible');
            });
            // Adiciona também ao próprio elemento se ele tiver a classe
            if (target.classList.contains('animate-fade-in') || target.classList.contains('animate-fade-in-delay')) {
              target.classList.add('visible');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(elementRef.value);

    return () => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value);
      }
    };
  });

  return (
    <div ref={elementRef} class="w-full">
      <Slot />
    </div>
  );
});
