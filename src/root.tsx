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
        {/* Otimização de fontes: preconnect + dns-prefetch + font-display:swap */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
        {/* Swiper CSS - carregado via CDN para evitar problemas de build */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
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
