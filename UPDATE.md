# Update & Deploy Workflow

## Update Website Content

### 1. Edit Files
```bash
# Edit cv.tsx or other files
code src/cv.tsx
```

### 2. Test Locally
```bash
npm run dev
# Verify at http://localhost:3000
```

### 3. Deploy
```bash
git add .
git commit -m "Update: [describe changes]"
git push
```

**Done.** Vercel auto-deploys in ~60s.

---

## Common Updates

### Update Content
```bash
# Edit DATA object in src/cv.tsx
code src/cv.tsx

git add src/cv.tsx
git commit -m "Update profile content"
git push
```

### Change Image
```bash
# Replace public/Panupong.jpg
# Commit & push
git add public/Panupong.jpg
git commit -m "Update profile image"
git push
```

### Update Dependencies
```bash
npm update
npm run build  # Test build
git add package*.json
git commit -m "Update dependencies"
git push
```

---

## Vercel Dashboard

**URL:** https://vercel.com/dashboard

### View Deployments
- Latest deploy status
- Build logs
- Preview URLs for branches

### Rollback
```bash
# Vercel Dashboard → Deployments → Select previous → Promote to Production
```

### Environment Variables
```bash
# Dashboard → Project → Settings → Environment Variables
```

---

## Quick Commands

```bash
# Local dev
npm run dev

# Production build test
npm run build && npm run preview

# Deploy
git add . && git commit -m "Update" && git push

# Force rebuild (no changes)
git commit --allow-empty -m "Rebuild" && git push

# Check remote
git remote -v

# View commit history
git log --oneline -10
```

---

## Build Status Check

```bash
# Last commit
git log -1 --oneline

# Check if pushed
git status

# Vercel build logs
# → Dashboard → Deployments → Click latest → View logs
```

**Live URL:** Check Vercel dashboard or `https://portfolio-xxx.vercel.app`

---

## Troubleshooting

### Build fails
```bash
# Test locally first
npm run build

# Check errors
npm run lint
```

### Changes not visible
```bash
# Clear cache
# Vercel → Project → Settings → General → Clear Build Cache
# Then redeploy
```

### Rollback to previous version
```bash
git log --oneline  # Find commit hash
git reset --hard <commit-hash>
git push --force
```

---

**Auto-deploy:** Every `git push` to `main` → Production deploy  
**Build time:** ~60s | **Cache:** Enabled after first build
