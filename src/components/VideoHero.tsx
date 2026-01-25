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
    <>
      {/* Vídeo Fullscreen Background - Desktop only */}
      <video
        autoplay
        muted
        loop
        playsinline
        class="hidden md:block fixed top-0 left-0 w-screen h-screen object-cover -z-20"
        style="content-visibility: auto;"
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

      {/* Blur Overlay - Desktop only */}
      <div class="hidden md:block fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm -z-10"></div>

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
          maxWidth: '512px',
        }}
        fetchPriority="high"
        decoding="async"
      />
    </>
  );
});




