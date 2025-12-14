import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Section from '../Section';
import Testimonial from '../Testimonial';

export default component$(() => {
  const swiperContainer = useSignal<HTMLElement>();
  
  const testimonials = [
    {
      quote: "Nunca imaginei ter um catálogo online tão rápido. O aumento nas vendas veio muito rápido também.",
      author: "Maria Silva - Boutique Fashion"
    },
    {
      quote: "Em menos de 1 hora minha loja já estava online! Agora meus clientes podem ver meus produtos 24 horas por dia.",
      author: "João Santos - Casa de Calçados"
    },
    {
      quote: "Simples, rápido e eficiente. Não preciso de conhecimentos técnicos, tudo funciona perfeitamente.",
      author: "Ana Costa - Loja de Presentes"
    },
    {
      quote: "Meus clientes adoraram poder ver o catálogo pelo celular. As vendas aumentaram 40% no primeiro mês!",
      author: "Carlos Oliveira - Pet Shop Amigo Fiel"
    },
    {
      quote: "Finalmente consigo competir com as grandes lojas. A plataforma é profissional e muito fácil de usar.",
      author: "Fernanda Lima - Papelaria Central"
    }
  ];

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    if (swiperContainer.value) {
      const { default: Swiper } = await import('swiper');
      const { Autoplay, Pagination, EffectCoverflow } = await import('swiper/modules');
      await import('swiper/css');
      await import('swiper/css/pagination');
      await import('swiper/css/effect-coverflow');

      new Swiper(swiperContainer.value, {
        modules: [Autoplay, Pagination, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            coverflowEffect: {
              depth: 50,
              modifier: 1,
            },
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            coverflowEffect: {
              depth: 80,
              modifier: 1.5,
            },
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            coverflowEffect: {
              depth: 100,
              modifier: 2,
            },
          },
        },
      });
    }
  });

  return (
    <Section id="prova-social" fullScreen>
      <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="quotes" width="80" height="80" patternUnits="userSpaceOnUse">
              <text x="40" y="50" font-size="40" fill="currentColor" class="text-[var(--accent)]" opacity="0.15" text-anchor="middle">“</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quotes)" />
          <g class="text-[var(--accent)]">
            <circle cx="20%" cy="80%" r="120" fill="currentColor" opacity="0.08"/>
            <circle cx="85%" cy="30%" r="90" fill="currentColor" opacity="0.08"/>
          </g>
        </svg>
      </div>
      <h2 class="text-3xl font-bold mb-4 text-center animate-fade-in relative z-10">O que nossos clientes dizem</h2>
      <p class="text-center mb-8 text-[var(--muted)] animate-fade-in-delay">
        Pequenas lojas como a sua já estão usando a minhavitrineonline para entrar no digital de forma simples.
      </p>
      
      <div class="relative max-w-6xl mx-auto py-8 animate-fade-in-delay" style="animation-delay: 0.6s;">
        <div ref={swiperContainer} class="swiper testimonials-swiper">
          <div class="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} class="swiper-slide">
                <Testimonial 
                  quote={testimonial.quote} 
                  author={testimonial.author} 
                />
              </div>
            ))}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </Section>
  );
});
