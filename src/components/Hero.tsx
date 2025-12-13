import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div class="max-w-5xl mx-auto px-6 sm:px-12 py-20 text-center">
        <div class="flex items-center justify-center gap-4">
          <div class="w-14 h-14 bg-white/20 rounded flex items-center justify-center">MH</div>
          <h1 class="text-4xl sm:text-5xl font-extrabold">minhavitrineonline</h1>
        </div>
        <p class="mt-4 text-lg">Digitalize seu comércio, aumente vendas e simplifique operações — trial gratuito.</p>
        <div class="mt-8 flex justify-center gap-4">
          <a
            href="mailto:contato@minhavitrineonline.com?subject=Agendar%20demo%20minhavitrineonline"
            class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded"
          >
            Agendar demo
          </a>
          <a href="#oferta" class="inline-block bg-white/20 border border-white/30 px-6 py-3 rounded">Saiba mais</a>
        </div>
      </div>
    </header>
  );
});
