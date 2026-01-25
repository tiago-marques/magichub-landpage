import { component$ } from '@builder.io/qwik';

interface VideoHeroProps {
  videoSrc?: string;
  fallbackSrc?: string;
  alt?: string;
}

export default component$(({ 
  videoSrc = '/magichub-landpage/videos/hero-demo.mp4',
  fallbackSrc = '/magichub-landpage/assets/logo-512.png',
  alt = 'MinhaVitrineOnline IA em ação'
}: VideoHeroProps) => {
  return (
    <div class="relative" style="max-width: 512px; width: 100%;">
      <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-blue-500 blur-2xl opacity-30 rounded-full slow-connection:hidden"></div>
      
      {/* Vídeo - Desktop only */}
      <video
        width="512"
        height="256"
        autoplay
        muted
        loop
        playsinline
        class="hidden md:block hero-video relative max-w-full w-full h-auto object-contain drop-shadow-2xl rounded-xl"
        style="aspect-ratio: 2/1; content-visibility: auto;"
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Imagem - Mobile fallback */}
      <img
        src={fallbackSrc}
        alt={alt}
        width="512"
        height="256"
        class="md:hidden hero-img relative max-w-full w-full h-auto object-contain drop-shadow-2xl"
        fetchPriority="high"
        decoding="async"
        style="aspect-ratio: 2/1; content-visibility: auto;"
      />
    </div>
  );
});



