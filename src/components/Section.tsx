import { component$, Slot } from '@builder.io/qwik';

export default component$(({ title, id, fullScreen = false }: any) => {
  const sectionClass = `section ${fullScreen ? 'min-h-screen flex items-center' : ''}`.trim();
  const containerClass = `container max-w-5xl ${fullScreen ? 'h-full flex flex-col justify-center' : ''}`.trim();

  return (
    <section id={id} class={sectionClass}>
      <div class={containerClass}>
        {title && <h2 class="section-heading">{title}</h2>}
        <div class="section-subtitle" />
        <div class="section-content"><Slot /></div>
      </div>
    </section>
  );
});
