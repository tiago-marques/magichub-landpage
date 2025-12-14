#!/bin/bash

# Script de teste de otimizações mobile
# Simula diferentes condições de rede e dispositivos

echo "📱 Teste de Otimizações Mobile"
echo "================================"
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Verificando Implementações...${NC}"
echo ""

# 1. Verificar touch-action
echo "1. Touch Optimizations:"
if grep -q "touch-action: manipulation" src/global.css; then
    echo -e "   ${GREEN}✓${NC} touch-action implementado"
else
    echo -e "   ❌ touch-action não encontrado"
fi

# 2. Verificar viewport
echo "2. Viewport Mobile:"
if grep -q "viewport-fit=cover" src/components/router-head/router-head.tsx; then
    echo -e "   ${GREEN}✓${NC} viewport-fit para notch"
else
    echo -e "   ❌ viewport-fit não configurado"
fi

# 3. Verificar prefers-reduced-motion
echo "3. Acessibilidade:"
if grep -q "prefers-reduced-motion" src/global.css; then
    echo -e "   ${GREEN}✓${NC} prefers-reduced-motion implementado"
else
    echo -e "   ❌ prefers-reduced-motion ausente"
fi

# 4. Verificar slow-connection
echo "4. Adaptive Loading:"
if grep -q "slow-connection" src/global.css; then
    echo -e "   ${GREEN}✓${NC} Detecção de conexão lenta"
else
    echo -e "   ❌ Adaptive loading não implementado"
fi

# 5. Verificar will-change
echo "5. GPU Acceleration:"
if grep -q "will-change" src/global.css; then
    echo -e "   ${GREEN}✓${NC} will-change para animações"
else
    echo -e "   ❌ will-change não configurado"
fi

# 6. Verificar tamanho mínimo touch
echo "6. Touch Targets:"
if grep -q "min-height: 44px" src/global.css; then
    echo -e "   ${GREEN}✓${NC} Tamanho mínimo 44px"
else
    echo -e "   ❌ Touch targets muito pequenos"
fi

# 7. Verificar lazy loading
echo "7. Lazy Loading:"
if grep -q 'loading="lazy"' src/components/sections/Problema.tsx; then
    echo -e "   ${GREEN}✓${NC} Lazy loading implementado"
else
    echo -e "   ❌ Lazy loading ausente"
fi

# 8. Verificar WebP
echo "8. Imagens WebP:"
webp_count=$(find src/assets -name "*.webp" 2>/dev/null | wc -l)
if [ "$webp_count" -gt 0 ]; then
    echo -e "   ${GREEN}✓${NC} $webp_count imagens WebP"
else
    echo -e "   ❌ Nenhuma imagem WebP"
fi

echo ""
echo -e "${BLUE}📊 Estatísticas do Build:${NC}"
echo ""

# Tamanho do build
if [ -d "dist/magichub-landpage" ]; then
    total_size=$(du -sh dist/magichub-landpage | awk '{print $1}')
    js_size=$(du -sh dist/magichub-landpage/build 2>/dev/null | awk '{print $1}')
    assets_size=$(du -sh dist/magichub-landpage/assets 2>/dev/null | awk '{print $1}')
    
    echo "Build Total: $total_size"
    echo "JavaScript: $js_size"
    echo "Assets: $assets_size"
else
    echo -e "${YELLOW}⚠️  Build não encontrado. Execute: npm run build.static${NC}"
fi

echo ""
echo -e "${BLUE}🧪 Sugestões de Teste:${NC}"
echo ""
echo "1. Chrome DevTools - Device Mode:"
echo "   • iPhone 14 Pro Max"
echo "   • Galaxy S23 Ultra"
echo "   • Throttling: Slow 3G"
echo ""
echo "2. Lighthouse Mobile:"
echo "   npx lighthouse https://tiago-marques.github.io/magichub-landpage/ --preset=mobile --view"
echo ""
echo "3. PageSpeed Insights Mobile:"
echo "   https://pagespeed.web.dev/analysis?url=https://tiago-marques.github.io/magichub-landpage/"
echo ""
echo "4. Teste em Dispositivo Real:"
echo "   • chrome://inspect (Android)"
echo "   • Safari Developer (iOS)"
echo ""

echo -e "${GREEN}✅ Verificação completa!${NC}"
echo ""
