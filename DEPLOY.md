# Vercel Deploy - Production Ready

## Prerequisites
```bash
node -v  # >= 18
git --version
```

## Setup Git Identity
```bash
git config --global user.name "Panupong Nijjaboon"
git config --global user.email "panupong.nijjaboon@gmail.com"
```

## GitHub Repository Setup
1. Create repo: https://github.com/new
   - Name: `portfolio`
   - Visibility: Public
   - Skip README/gitignore

## Deploy Commands
```bash
# Initialize & Push
git init
git branch -M main
git add .
git commit -m "Production build"
git remote add origin git@github.com:bew4113/portfolio.git
git push -u origin main
```

## Vercel Deploy
```bash
# Install Vercel CLI (optional - web UI recommended)
npm i -g vercel

# Option 1: Web UI (Recommended)
# → https://vercel.com/new
# → Import from GitHub
# → Select repository
# → Deploy (auto-detects Vite)

# Option 2: CLI
vercel login
vercel --prod
```

## Post-Deploy
- Live URL: `https://portfolio-{random}.vercel.app`
- Custom domain: Project Settings → Domains
- Auto-deploy: Enabled on `git push`

## Environment Variables (if needed)
```bash
# Vercel Dashboard → Project → Settings → Environment Variables
# or
vercel env add VARIABLE_NAME
```

## Troubleshooting
```bash
# Build locally first
npm run build
npm run preview

# Check build output
ls -la dist/

# Force redeploy
git commit --allow-empty -m "Redeploy"
git push
```

---
**Domains:** `*.vercel.app` (free) | Custom domain (free SSL)  
**Build time:** ~60s | **Deploy:** Auto on push
