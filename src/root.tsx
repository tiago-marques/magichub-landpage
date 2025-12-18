import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import FloatingNav from './components/FloatingNav';

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload da imagem hero para melhorar LCP mobile */}
        <link rel="preload" as="image" href="/assets/slogan.webp" fetchPriority="high" />
        {/* Preload do logo para reduzir CLS */}
        <link rel="preload" as="image" href="/assets/logo.webp" fetchPriority="high" />
        {/* Otimização de fontes: preconnect + dns-prefetch + font-display:swap */
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Preload de fontes críticas para reduzir CLS */}
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" crossOrigin="" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap"
          media="print"
          onLoad$={() => {
            const link = document.querySelector('link[media="print"]');
            if (link) link.setAttribute('media', 'all');
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap"
          />
        </noscript>
        {/* CSS crítico inline para reduzir CLS */}
        <style dangerouslySetInnerHTML={`
          :root{--brand:#00C4CC;--bg:#fff;--page-bg:#fdfdfd;--surface:#f8fafc;--muted:#64748b;--accent:#00C4CC;--accent-600:#008f93;--radius:12px;--header-height:72px;--text:#0F172A;--font-body:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;--font-heading:'Montserrat','Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif}
          *{margin:0;padding:0;box-sizing:border-box}
          body{font-family:var(--font-body);background:var(--page-bg);color:var(--text);margin:0;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,196,204,0.2);touch-action:manipulation;-webkit-text-size-adjust:100%}
          img{max-width:100%;height:auto;display:block}
          .hero-img{aspect-ratio:2/1;width:100%;max-width:512px;height:auto;margin:0 auto}
          .container{max-width:72rem;margin:0 auto;padding:0 1.5rem}
          @media(max-width:768px){.is-mobile svg{will-change:auto}.is-mobile .backdrop-blur-md{backdrop-filter:none;background:rgba(255,255,255,0.95)}}
        `} />
        {/* Swiper CSS - carregado via CDN, adiado em mobile para melhorar Speed Index */}
        <link 
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          media="(min-width: 769px)"
          onLoad$={() => {
            const link = document.querySelector('link[as="style"][href*="swiper"]');
            if (link) link.setAttribute('rel', 'stylesheet');
          }}
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          media="print"
          onLoad$={() => {
            const link = document.querySelectorAll('link[href*="swiper"]')[1];
            if (link && window.innerWidth <= 768) {
              setTimeout(() => link.setAttribute('media', 'all'), 1000);
            } else if (link) {
              link.setAttribute('media', 'all');
            }
          }}
        />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="pt-BR" class="font-sans">
        <RouterOutlet />
        <FloatingNav />
        {/* Service Worker registration - apenas em produção */}
        {!isDev && (
          <script dangerouslySetInnerHTML={`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/magichub-landpage/sw.js').catch(function(){});
              });
            }
            
            // Network Information API - adaptar qualidade baseado em conexão
            if ('connection' in navigator) {
              var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
              if (conn && (conn.saveData || ['slow-2g', '2g'].includes(conn.effectiveType))) {
                document.documentElement.classList.add('slow-connection');
              }
            }
            
            // Detectar mobile para otimizações CSS
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              document.documentElement.classList.add('is-mobile');
            }
          `} />
        )}
      </body>
    </QwikCityProvider>
  );
});
