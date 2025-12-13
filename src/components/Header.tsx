import { component$ } from '@builder.io/qwik';
//Como funciona | Benefícios | Quem já usa
export default component$(() => {
  return (
    <header class="fixed inset-x-0 top-0 bg-white z-50 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/src/assets/logo.svg" alt="MinhaVitrineOnline" class="h-8" />
        </a>
        <nav class="hidden md:flex gap-6 text-sm">
          <a href="#solucao" class="text-slate-600 hover:text-slate-900">Como funciona</a>
          <a href="#beneficios" class="text-slate-600 hover:text-slate-900">Seu catálogo online</a>
          <a href="#prova-social" class="text-slate-600 hover:text-slate-900">Quem já usa</a>
        </nav>
        <div>
          <a href="mailto:contato@MinhaVitrineOnline.com?subject=Agendar%20demo%20MinhaVitrineOnline" class="bg-brand text-white px-4 py-2 rounded">Agendar demo</a>
        </div>
      </div>
    </header>
  );
});
