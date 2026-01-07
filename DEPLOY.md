# Guia de Deploy

Este projeto suporta deploy em dois cenários:

## 1. GitHub Pages (tiago-marques.github.io/magichub-landpage/)

**Build local:**
```bash
npm run build.static.github
```

**Deploy automático:**
O workflow do GitHub Actions já está configurado para usar o base path `/magichub-landpage/` automaticamente.

**Configuração:**
- Base URL: `/magichub-landpage/`
- Sitemap: `https://tiago-marques.github.io/magichub-landpage/sitemap.xml`
- O workflow usa a variável `VITE_BASE_PATH='/magichub-landpage/'`

## 2. Domínio Customizado (minhavitrineonline.com.br)

**Build local:**
```bash
npm run build.static.custom
```

**Deploy manual:**
Para fazer deploy com domínio customizado, você precisa:

1. Modificar o workflow para usar domínio customizado:
   ```yaml
   - name: Build
     run: npm run build.static
     env:
       NODE_ENV: production
       VITE_BASE_PATH: '/'  # Mudar para '/'
   ```

2. Ou fazer build local e upload manual:
   ```bash
   npm run build.static.custom
   # Depois fazer upload da pasta dist/ para seu servidor
   ```

**Configuração:**
- Base URL: `/`
- Sitemap: `https://minhavitrineonline.com.br/sitemap.xml`

## Alternar entre os dois

### Para GitHub Pages (padrão):
```bash
# O workflow já está configurado
git push origin main
```

### Para Domínio Customizado:
Edite `.github/workflows/deploy.yml`:
```yaml
env:
  NODE_ENV: production
  VITE_BASE_PATH: '/'  # Altere aqui
```

## Como funciona

O projeto usa a variável de ambiente `VITE_BASE_PATH` para determinar o base path:
- Se `VITE_BASE_PATH` não estiver definida, usa `/magichub-landpage/` em produção
- Todos os assets e links usam `import.meta.env.BASE_URL` automaticamente
- O Vite injeta o base path correto em todos os arquivos durante o build

## Observações

- **Sitemap e robots.txt**: Atualmente configurados para GitHub Pages. Se usar domínio customizado, atualize manualmente os arquivos `public/sitemap.xml` e `public/robots.txt`
- **Cache**: Limpe o cache do navegador ao alternar entre os dois modos
