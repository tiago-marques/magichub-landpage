import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="bg-gradient-to-r from-brand to-brand-light text-white">
      <div class="max-w-5xl mx-auto px-6 sm:px-12 py-20 text-center">
        <div class="flex items-center justify-center gap-4">
          <div class="w-14 h-14 bg-white/20 rounded flex items-center justify-center">MH</div>
          <h1 class="text-4xl sm:text-5xl font-extrabold">MinhaVitrineOnline</h1>
        </div>
        <p class="mt-4 text-lg">Seu catálogo online para mostrar e vender seus produtos</p>
        <p class="mt-4 text-lg">Transforme sua loja física em uma vitrine online com catálogo digital automático.</p>
        <div class="mt-8 flex justify-center gap-4">
          <a
            href="mailto:contato@MinhaVitrineOnline.com?subject=Agendar%20demo%20MinhaVitrineOnline"
            class="inline-block bg-white text-primary font-semibold px-6 py-3 rounded"
          >
            Agendar demo
          </a>
          <a href="#oferta" class="inline-block bg-white/20 border border-white/30 px-6 py-3 rounded">Saiba mais</a>
        </div>
      </div>
    </header>
  );
});
