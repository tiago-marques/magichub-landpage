import { component$ } from '@builder.io/qwik';
import Header from '../components/Header';
import Hero from '../components/Hero';

import Atencao from '../components/sections/Atencao';
import Problema from '../components/sections/Problema';
import Solucao from '../components/sections/Solucao';
import Credenciais from '../components/sections/Credenciais';
import Beneficios from '../components/sections/Beneficios';
import ProvaSocial from '../components/sections/ProvaSocial';
import Oferta from '../components/sections/Oferta';
import Escassez from '../components/sections/Escassez';
import Garantia from '../components/sections/Garantia';
import CTASection from '../components/sections/CTA';
import Aviso from '../components/sections/Aviso';
import Lembrete from '../components/sections/Lembrete';

export default component$(() => {
  return (
    <main class="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />

      <Atencao />
      <Problema />
      <Solucao />
      <Credenciais />
      <Beneficios />
      <ProvaSocial />
      <Oferta />
      <Escassez />
      <Garantia />
      <CTASection />
      <Aviso />
      <Lembrete />

      <footer class="border-t mt-12 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Magichub — Estamos digitalizando comércios.
      </footer>
    </main>
  );
});
