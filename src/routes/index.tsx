import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
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
    <>
      {/* Structured Data (JSON-LD) para SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'MinhaVitrineOnline',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BRL',
        },
        operatingSystem: 'Web',
        description: 'Catálogo digital automático para pequenos lojistas',
        inLanguage: 'pt-BR',
      })} />
      
      <main class="min-h-screen bg-white text-[var(--text)]">
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

      <footer class="border-t mt-12 py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} minhavitrineonline — Estamos digitalizando comércios.
      </footer>
    </main>
    </>
  );
});

// Meta tags otimizadas para SEO e Performance
export const head: DocumentHead = {
  title: 'MinhaVitrineOnline - Catálogo Digital Automático para Pequenos Lojistas',
  meta: [
    {
      name: 'description',
      content: 'Crie seu catálogo digital automático e venda mais sem complicação. Para pequenos lojistas que querem aparecer no Google e WhatsApp.',
    },
    {
      name: 'keywords',
      content: 'catálogo digital, vitrine online, loja virtual, pequenos lojistas, Google Meu Negócio, WhatsApp Business',
    },
    // Open Graph / Facebook
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'MinhaVitrineOnline - Catálogo Digital Automático',
    },
    {
      property: 'og:description',
      content: 'Crie seu catálogo digital automático e venda mais sem complicação.',
    },
    {
      property: 'og:locale',
      content: 'pt_BR',
    },
    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'MinhaVitrineOnline - Catálogo Digital Automático',
    },
    {
      name: 'twitter:description',
      content: 'Crie seu catálogo digital automático e venda mais sem complicação.',
    },
    // Performance hints
    {
      name: 'theme-color',
      content: '#00C4CC',
    },
    // Mobile Web App
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'MinhaVitrine',
    },
  ],
};
