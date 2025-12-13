import { component$ } from '@builder.io/qwik';
//Como funciona | Benefícios | Quem já usa
export default component$(() => {
  return (
    <header class="sticky top-0 w-full bg-white z-50 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 sm:px-12 py-3 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/src/assets/logo.png" alt="MinhaVitrineOnline" class="h-16" />
        </a>
        <nav class="hidden md:flex gap-6 text-sm">
          <a href="#solucao" class="text-[var(--muted)] hover:text-[var(--text)]">Como funciona</a>
          <a href="#beneficios" class="text-[var(--muted)] hover:text-[var(--text)]">Seu catalogo online</a>
          <a href="#prova-social" class="text-[var(--muted)] hover:text-[var(--text)]">Quem já usa</a>
        </nav>
        <div>
          <a href="mailto:contato@minhavitrineonline.com.br?subject=Agendar%20demo%20minhavitrineonline" class="bg-brand text-white px-4 py-2 rounded">Agendar demo</a>
        </div>
      </div>
    </header>
  );
});
