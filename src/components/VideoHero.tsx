import { component$, useSignal } from '@builder.io/qwik';

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
  const videoLoaded = useSignal(false);

  return (
    <div class="relative max-w-full w-full" style="max-width: 512px;">
      <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-blue-500 blur-2xl opacity-30 rounded-full slow-connection:hidden"></div>
      
      {/* Logo - Esconde quando vídeo carregar (desktop only) */}
      <img
        src={fallbackSrc}
        alt={alt}
        width="512"
        height="256"
        class="hero-img max-w-full w-full h-auto object-contain drop-shadow-2xl transition-all duration-500"
        style={{
          aspectRatio: '2/1',
          contentVisibility: 'auto',
          visibility: videoLoaded.value ? 'hidden' : 'visible',
        }}
        fetchPriority="high"
        decoding="async"
      />

      {/* Vídeo - Desktop only, sobrepõe logo */}
      <video
        width="512"
        height="256"
        autoplay
        muted
        loop
        playsinline
        class="hidden md:block max-w-full w-full h-auto object-contain drop-shadow-2xl rounded-xl"
        style="aspect-ratio: 2/1; content-visibility: auto; position: absolute; inset: 0;"
        preload="metadata"
        onCanPlay$={() => {
          videoLoaded.value = true;
        }}
        onError$={() => {
          videoLoaded.value = false;
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
});




