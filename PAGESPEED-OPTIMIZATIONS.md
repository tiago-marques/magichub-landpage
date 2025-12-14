# Otimizações PageSpeed - Checklist Completo

## ✅ Implementadas

### 1. **Manifest.json PWA**
- ✅ Informações reais do MinhaVitrineOnline
- ✅ Theme color configurado (#00C4CC)
- ✅ Ícones e configurações PWA
- ✅ Categorias e metadados

### 2. **Otimização de Fontes**
- ✅ Carregamento assíncrono com media="print" + onLoad
- ✅ Fallback para noscript
- ✅ display=swap já configurado na URL do Google Fonts
- ✅ Preconnect e dns-prefetch para fonts.googleapis.com

### 3. **Service Worker**
- ✅ Cache de recursos estáticos
- ✅ Estratégia Network First com fallback
- ✅ Limpeza automática de caches antigos
- ✅ Registro condicional (apenas produção)

### 4. **Build Otimizations**
- ✅ Minificação com esbuild
- ✅ CSS minification ativado
- ✅ Drop console.log em produção
- ✅ Manual chunks para vendor code
- ✅ Target browsers modernos (ES2020)
- ✅ Compressed size reporting

### 5. **Imagens**
- ✅ fetchPriority="high" na logo hero
- ✅ loading="lazy" em imagens abaixo da dobra
- ✅ decoding="async" em todas as imagens
- ✅ width/height definidos (evita layout shift)
- ✅ Alt text descritivos

### 6. **Meta Tags**
- ✅ Meta tags de SEO completas
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards
- ✅ Theme color para mobile
- ✅ Apple mobile web app configs
- ✅ Canonical URL
- ✅ Viewport otimizado

### 7. **Headers HTTP** (documentação)
- ✅ Security headers documentados
- ✅ Cache-Control estratégias
- ✅ Arquivo _headers criado (para plataformas que suportam)

### 8. **CSS Otimizations**
- ✅ content-visibility: auto nas sections
- ✅ contain-intrinsic-size para melhor rendering
- ✅ Carregamento assíncrono do Swiper CSS

## 🎯 Próximas Otimizações Recomendadas

### 1. **Converter Imagens**
```bash
# Converter PNGs para WebP/AVIF
npm install -D @squoosh/lib
# ou usar ferramenta online como squoosh.app
```

**Imagens para converter:**
- `src/assets/slogan.png` → `.webp`
- `src/assets/logo.png` → `.webp`
- `src/assets/perto.jpg` → `.webp`
- `src/assets/pequena-empresa.png` → `.webp`
- `src/assets/whats-1.png` → `.webp`
- `src/assets/whats-2.png` → `.webp`

### 2. **Lazy Load de Componentes**
```tsx
// Usar $ para lazy loading de componentes pesados
const HeavyComponent = lazy$(() => import('./HeavyComponent'));
```

### 3. **Preload de Recursos Críticos**
Adicionar em [router-head.tsx](src/components/router-head/router-head.tsx):
```tsx
<link rel="preload" as="image" href="/assets/slogan.webp" />
```

### 4. **Otimizar Google Fonts** (Self-hosting)
```bash
# Download fonts e servir localmente
npm install -D @fontsource/inter @fontsource/montserrat
```

### 5. **Implementar Image Component**
```tsx
// Criar componente com suporte WebP + fallback
<Picture 
  src="/image.png" 
  webp="/image.webp"
  avif="/image.avif"
  alt="..."
/>
```

### 6. **Critical CSS**
- Extrair CSS crítico inline no head
- Adiar carregamento de CSS não-crítico

### 7. **Resource Hints Adicionais**
```tsx
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
```

## 📊 Métricas Esperadas

Com as otimizações implementadas, você deve ver melhorias em:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s

## 🚀 Como Testar

1. **Build de produção:**
```bash
npm run build.static
```

2. **Preview local:**
```bash
npm run preview
```

3. **Testar no PageSpeed:**
```
https://pagespeed.web.dev/
```

## 📝 Notas Importantes

- **GitHub Pages**: Não suporta headers customizados (_headers)
- **Service Worker**: Funciona apenas com HTTPS
- **Fontes**: Considerar self-hosting para máxima performance
- **Imagens**: WebP oferece ~30% menos tamanho que PNG/JPG
- **AVIF**: Melhor que WebP, mas suporte limitado ainda

## 🎨 Otimizações de CSS Aplicadas

- `content-visibility: auto` em sections
- `contain-intrinsic-size` para rendering performático
- CSS crítico inline
- Carregamento assíncrono de CSS externo

## 🔧 Ferramentas Úteis

- [Squoosh](https://squoosh.app/) - Otimização de imagens
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
