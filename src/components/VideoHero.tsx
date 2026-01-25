import { component$ } from '@builder.io/qwik';

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
        autoPlay
        muted
        loop
        playsInline
        class="hidden md:block fixed top-0 left-0 w-screen h-screen object-cover z-0"
        style="content-visibility: auto;"
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay branco translúcido para clarear o fundo */}
      <div class="hidden md:block fixed top-0 left-0 w-screen h-screen bg-white/50 backdrop-blur-sm z-10 pointer-events-none"></div>
    </>
  );
});




