import { component$, type QwikIntrinsicElements } from '@builder.io/qwik';

interface PictureProps {
  src: string;
  webp?: string;
  avif?: string;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'auto' | 'sync';
  sizes?: string;
}

/**
 * Componente Picture otimizado com suporte para WebP/AVIF + fallback
 * 
 * Uso:
 * <Picture 
 *   src="/image.png"
 *   webp="/image.webp"
 *   avif="/image.avif"
 *   alt="Descrição"
 *   loading="lazy"
 * />
 */
export default component$<PictureProps>(({
  src,
  webp,
  avif,
  alt,
  width,
  height,
  class: className,
  loading = 'lazy',
  fetchPriority = 'auto',
  decoding = 'async',
  sizes,
}) => {
  return (
    <picture>
      {/* AVIF - melhor compressão (se disponível) */}
      {avif && (
        <source 
          type="image/avif" 
          srcset={avif}
          sizes={sizes}
        />
      )}
      
      {/* WebP - boa compressão e suporte amplo */}
      {webp && (
        <source 
          type="image/webp" 
          srcset={webp}
          sizes={sizes}
        />
      )}
      
      {/* Fallback - imagem original */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        class={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        style={width && height ? `aspect-ratio: ${width}/${height}` : undefined}
      />
    </picture>
  );
});
