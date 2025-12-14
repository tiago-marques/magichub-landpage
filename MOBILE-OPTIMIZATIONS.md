# Otimizações Mobile - Performance

## 🎯 Implementado

### 1. **Touch Optimizations**
- ✅ `-webkit-tap-highlight-color` customizado
- ✅ `touch-action: manipulation` em botões
- ✅ Tamanho mínimo 44x44px em elementos touch (mobile)
- ✅ Botão flutuante maior em mobile (56x56px vs 48x48px)
- ✅ Área de toque expandida com padding negativo

### 2. **Viewport & Display**
- ✅ `viewport-fit=cover` para iPhone X+ (notch)
- ✅ `maximum-scale=5.0` permite zoom acessível
- ✅ `-webkit-text-size-adjust: 100%` previne zoom automático
- ✅ Status bar translúcido no iOS

### 3. **Performance Adaptativa**
```javascript
// Detecção automática de:
- Save Data habilitado
- Conexão 2G/slow-2g
- User Agent mobile
- Viewport < 768px
```

**Quando detectado conexão lenta:**
- Desabilita animações pesadas
- Remove blur/shadow effects
- Lazy loading mais agressivo
- Content visibility automático

### 4. **Prefers Reduced Motion**
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

### 5. **CSS Mobile-First**
- ✅ Animações reduzidas (0.3s vs 0.6s)
- ✅ Transições mais rápidas (0.2s)
- ✅ Hover effects desabilitados em touch
- ✅ Padding reduzido em sections mobile
- ✅ Hardware acceleration (translateZ)
- ✅ `-webkit-overflow-scrolling: touch`

### 6. **iOS Safari Fixes**
```css
/* Fix para 100vh no iOS */
body { min-height: -webkit-fill-available; }

/* Prevenir bounce scrolling */
body { overscroll-behavior-y: none; }
```

### 7. **Will-Change Optimization**
Aplicado em elementos animados:
- Swiper slides
- Floating navigation
- Transições
- Animações

### 8. **Lazy Loading Placeholder**
```css
img[loading="lazy"] {
  background: linear-gradient(...);
  /* Skeleton loading */
}
```

### 9. **Hooks Customizados**

**useIsMobile()**
```tsx
const isMobile = useIsMobile();
// Condiciona comportamentos mobile-specific
```

**usePrefersReducedMotion()**
```tsx
const prefersReduced = usePrefersReducedMotion();
// Adapta animações
```

**useSlowConnection()**
```tsx
const isSlowConnection = useSlowConnection();
// Carrega versões otimizadas
```

## 📊 Impacto Esperado

### Mobile Performance Score
**Antes**: 70-80  
**Depois**: 90-100

### Métricas Mobile
- **LCP**: < 2.0s (hero image otimizada)
- **FID**: < 50ms (touch-action, will-change)
- **CLS**: < 0.05 (width/height definidos)
- **TTI**: < 2.5s (lazy loading agressivo)

### Economia de Dados
- **Conexão Lenta**: -40% recursos (sem blur/shadow)
- **Save Data**: Apenas conteúdo essencial
- **Mobile**: Animações simplificadas (-30% CPU)

## 🔧 Uso

### Classes CSS Aplicadas Automaticamente
```html
<html class="is-mobile slow-connection">
```

### Detecção no JavaScript
```javascript
// Adicionado automaticamente no <body>
if (isMobile) {
  document.documentElement.classList.add('is-mobile');
}
```

### Exemplo Condicional
```tsx
<div class="blur-2xl slow-connection:hidden">
  <!-- Efeito pesado removido em conexão lenta -->
</div>
```

## 🎨 Comportamentos Mobile

### Botões & Links
- Touch area: mínimo 44x44px
- Tap highlight: cor do tema
- No hover effects (touch)
- User select: none (previne seleção)

### Animações
- Duração reduzida: 0.3s → 0.2s
- Respeitam prefers-reduced-motion
- Desabilitadas em slow connection
- GPU acceleration automático

### Scroll
- Smooth scroll (exceto reduced motion)
- Snap points em grids
- Touch momentum (iOS)
- Overscroll prevention

### Imagens
- Lazy loading agressivo
- Content visibility auto
- Skeleton loading placeholder
- WebP com fallback

## 📱 Testes

### Emuladores Recomendados
```bash
# Chrome DevTools
- iPhone 14 Pro Max
- Galaxy S23 Ultra
- Pixel 7

# Throttling
- Slow 3G
- Fast 3G
- Offline
```

### Checklist Mobile
- [ ] Touch targets ≥ 44px
- [ ] Scroll suave em listas
- [ ] Sem layout shift ao carregar
- [ ] Animações performáticas
- [ ] Imagens responsivas
- [ ] Funciona offline (PWA)
- [ ] Sem bounce scroll (iOS)
- [ ] Viewport correto em notch

## 🚀 Performance Tips

### 1. Teste em Dispositivo Real
```bash
# Remote debugging Chrome
chrome://inspect
```

### 2. Lighthouse Mobile
```bash
# Específico para mobile
lighthouse https://url --preset=mobile
```

### 3. Network Throttling
- Test com 3G
- Test com Save Data
- Test offline

### 4. Battery Impact
- Reduzir animações
- Minimizar repaints
- Otimizar scroll listeners

## ✅ Próximas Melhorias Opcionais

- [ ] Adaptive loading de imagens (srcset)
- [ ] IntersectionObserver para lazy components
- [ ] Prefetch baseado em conexão
- [ ] Service Worker estratégias por tipo
- [ ] Offline fallback pages
- [ ] Push notifications (PWA)
- [ ] Install prompt customizado
- [ ] Haptic feedback (iOS)
