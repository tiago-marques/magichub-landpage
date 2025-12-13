import { component$, Slot } from '@builder.io/qwik';

export default component$(({ title, id }: any) => {
  return (
    <section id={id} class="section">
      <div class="container max-w-5xl">
        <h2 class="section-heading">{title}</h2>
        <div class="section-subtitle" />
        <div class="section-content"><Slot /></div>
      </div>
    </section>
  );
});
