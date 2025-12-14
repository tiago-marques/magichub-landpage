#!/bin/bash

# Script para converter imagens PNG/JPG para WebP
# Requer: imagemagick ou cwebp instalado

echo "🖼️  Conversor de Imagens para WebP"
echo "=================================="
echo ""

# Verificar se cwebp está instalado
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp não encontrado. Instalando..."
    echo "Para Ubuntu/Debian: sudo apt-get install webp"
    echo "Para macOS: brew install webp"
    exit 1
fi

# Diretório de assets
ASSETS_DIR="src/assets"

echo "📁 Processando imagens em: $ASSETS_DIR"
echo ""

# Contador
count=0

# Converter PNGs
for img in "$ASSETS_DIR"/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img" .png)
        output="$ASSETS_DIR/$filename.webp"
        
        echo "🔄 Convertendo: $img → $output"
        cwebp -q 85 "$img" -o "$output"
        
        # Comparar tamanhos
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img")
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output")
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        
        echo "   ✅ Redução: ${reduction}%"
        echo ""
        
        ((count++))
    fi
done

# Converter JPGs
for img in "$ASSETS_DIR"/*.jpg "$ASSETS_DIR"/*.jpeg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img" | sed 's/\.[^.]*$//')
        output="$ASSETS_DIR/$filename.webp"
        
        echo "🔄 Convertendo: $img → $output"
        cwebp -q 85 "$img" -o "$output"
        
        # Comparar tamanhos
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img")
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output")
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        
        echo "   ✅ Redução: ${reduction}%"
        echo ""
        
        ((count++))
    fi
done

echo "=================================="
echo "✨ Conversão concluída!"
echo "📊 Total de imagens processadas: $count"
echo ""
echo "⚠️  Próximos passos:"
echo "1. Atualizar imports nos componentes (.png → .webp)"
echo "2. Adicionar fallback para browsers antigos"
echo "3. Testar no navegador"
echo ""
