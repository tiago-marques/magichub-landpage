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
    <>
      {/* Vídeo Background - Desktop only */}
      <video
        width="1920"
        height="1080"
        autoplay
        muted
        loop
        playsinline
        class="hidden md:block absolute inset-0 w-full h-full object-cover -z-10"
        style="content-visibility: auto;"
        preload="metadata"
        onError$={() => {
          // Se o vídeo não carregar, remove o vídeo e mostra fallback
          const video = document.querySelector('video.hero-video-bg');
          if (video) {
            video.style.display = 'none';
          }
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback logo - Mobile ou se vídeo falhar */}
      <div class="absolute md:hidden inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={fallbackSrc}
          alt={alt}
          width="512"
          height="256"
          class="max-w-full w-4/5 h-auto object-contain"
          fetchPriority="high"
          decoding="async"
          style="aspect-ratio: 2/1;"
        />
      </div>

      {/* Fallback logo desktop se vídeo falhar */}
      <div class="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none opacity-20">
        <img
          src={fallbackSrc}
          alt={alt}
          width="512"
          height="256"
          class="max-w-xs object-contain"
          decoding="async"
          style="aspect-ratio: 2/1;"
        />
      </div>
    </>
  );
});


