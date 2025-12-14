import { useSignal, useVisibleTask$ } from '@builder.io/qwik';

/**
 * Hook para detectar se é dispositivo mobile
 * Útil para condicionar comportamentos e otimizações
 */
export const useIsMobile = () => {
  const isMobile = useSignal(false);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Detectar mobile por user agent e viewport
    const checkMobile = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      const isSmallScreen = window.innerWidth < 768;
      return isMobileUA || isSmallScreen;
    };
    
    isMobile.value = checkMobile();
    
    // Atualizar em resize (com debounce)
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMobile.value = checkMobile();
      }, 150);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  });
  
  return isMobile;
};

/**
 * Hook para detectar preferência de movimento reduzido
 */
export const usePrefersReducedMotion = () => {
  const prefersReduced = useSignal(false);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReduced.value = mediaQuery.matches;
    
    const handler = (e: MediaQueryListEvent) => {
      prefersReduced.value = e.matches;
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  });
  
  return prefersReduced;
};

/**
 * Hook para detectar conexão lenta (Save Data)
 */
export const useSlowConnection = () => {
  const isSlowConnection = useSignal(false);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // @ts-expect-error - NetworkInformation não tem tipos completos
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      // Save Data habilitado OU conexão 2G/slow-2g
      isSlowConnection.value = connection.saveData === true || 
        ['slow-2g', '2g'].includes(connection.effectiveType);
    }
  });
  
  return isSlowConnection;
};
