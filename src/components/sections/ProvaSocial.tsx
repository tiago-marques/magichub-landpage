import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Section from '../Section';
import Testimonial from '../Testimonial';

export default component$(() => {
  const swiperContainer = useSignal<HTMLElement>();
  const swiperReady = useSignal(false);
  
  const testimonials = [
    {
      quote: "A IA encontrou imagens melhores dos meus produtos automaticamente. Os cliques aumentaram muito no Google!",
      author: "Maria Silva - Boutique Fashion",
      avatar: "https://pravatar.cc/150?img=1&u=maria-silva"
    },
    {
      quote: "Bastou subir 5 notas fiscais e tudo foi preenchido. A IA detectou EAN, imagens, preços — tudo certo!",
      author: "João Santos - Casa de Calçados",
      avatar: "https://pravatar.cc/150?img=2&u=joao-santos"
    },
    {
      quote: "Achei incrível como em 10 minutos meu catálogo já estava online e pronto para vender. Zero complicação!",
      author: "Ana Costa - Loja de Presentes",
      avatar: "https://pravatar.cc/150?img=3&u=ana-costa"
    },
    {
      quote: "Meus clientes podem ver o catálogo pelo WhatsApp 24/7. As vendas aumentaram 40% no primeiro mês!",
      author: "Carlos Oliveira - Pet Shop Amigo Fiel",
      avatar: "https://pravatar.cc/150?img=4&u=carlos-oliveira"
    },
    {
      quote: "Finalmente consigo competir com as grandes lojas. A IA faz todo o trabalho pesado, eu só vendo!",
      author: "Fernanda Lima - Papelaria Central",
      avatar: "https://pravatar.cc/150?img=5&u=fernanda-lima"
    }
  ];

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    if (swiperContainer.value) {
      try {
        // Aguarda um pouco para garantir que o CSS do Swiper foi carregado
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const { default: Swiper } = await import('swiper');
        const { Autoplay, Pagination, EffectCoverflow } = await import('swiper/modules');
        
        // CSS é importado via link tag no head para evitar erros de build
        // Ver global.css para estilos customizados do swiper

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
        swiperReady.value = true;
      } catch (error) {
        console.error('Erro ao inicializar Swiper:', error);
        // Em caso de erro, mostra o fallback
        swiperReady.value = false;
      }
    }
  });

  return (
    <Section id="prova-social">
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
      {/* Metrics row - visible quantitative social proof */}
      <div class="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-2xl mx-auto relative z-10">
        <div class="text-center animate-fade-in">
          <div class="text-3xl md:text-4xl font-bold text-[var(--accent)]">500+</div>
          <p class="text-sm md:text-base text-[var(--muted)] mt-2">Lojas ativas</p>
        </div>
        <div class="text-center animate-fade-in" style="animation-delay: 0.1s;">
          <div class="text-3xl md:text-4xl font-bold text-[var(--accent)]">95%</div>
          <p class="text-sm md:text-base text-[var(--muted)] mt-2">Satisfação</p>
        </div>
        <div class="text-center animate-fade-in" style="animation-delay: 0.2s;">
          <div class="text-3xl md:text-4xl font-bold text-[var(--accent)]">10K+</div>
          <p class="text-sm md:text-base text-[var(--muted)] mt-2">Produtos online</p>
        </div>
      </div>

      {/* Testimonials section heading */}
      <div class="relative z-10 text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ouça quem já está vendendo mais</h2>
        <p class="text-lg text-[var(--muted)] max-w-2xl mx-auto animate-fade-in-delay">
          Pequenas lojas como a sua já estão transformando suas vendas com a MinhaVitrineOnline
        </p>
      </div>
      
      <div class="relative max-w-6xl mx-auto py-8 animate-fade-in-delay" style="animation-delay: 0.6s;">
        {/* Swiper Container */}
        <div ref={swiperContainer} class="swiper testimonials-swiper">
          <div class="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} class="swiper-slide">
                <Testimonial 
                  quote={testimonial.quote} 
                  author={testimonial.author}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
          <div class="swiper-pagination"></div>
        </div>
        
        {/* Fallback: Grid simples caso Swiper não inicialize */}
        <noscript>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote} 
                author={testimonial.author}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </noscript>
      </div>
    </Section>
  );
});
