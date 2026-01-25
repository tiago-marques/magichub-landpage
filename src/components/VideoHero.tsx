import { component$ } from '@builder.io/qwik';

interface VideoHeroProps {
  videoSrc?: string;
}

export default component$(({ 
  videoSrc = '/magichub-landpage/videos/hero-demo.mp4'
}: VideoHeroProps) => {
  return (
    <>
      {/* Vídeo Background apenas dentro do Hero - Desktop only */}
      <div class="hidden md:block absolute inset-0 w-full h-full z-0">
        <video
          autoplay
          muted
          loop
          playsInline
          class="w-full h-full object-cover"
          style="content-visibility: auto;"
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Overlay branco translúcido para clarear o fundo, sem blur */}
        <div class="absolute inset-0 w-full h-full bg-white/50 z-10 pointer-events-none"></div>
      </div>
    </>
  );
});




