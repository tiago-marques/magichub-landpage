import { component$, useSignal } from '@builder.io/qwik';

interface VideoHeroProps {
  videoSrc?: string;
}

export default component$(({ 
  videoSrc = '/magichub-landpage/videos/hero-demo.mp4'
}: VideoHeroProps) => {
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
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Blur Overlay - Desktop only */}
      <div class="hidden md:block fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm -z-10"></div>
    </>
  );
});




