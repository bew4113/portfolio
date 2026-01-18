#!/usr/bin/env sh

# หยุดเมื่อเจอ error
set -e

echo "🚀 Starting deployment process..."

# Build project
echo "📦 Building project..."
npm run build

# เข้าไปใน dist folder
cd dist

# สร้าง git repo ใหม่
echo "📤 Preparing deployment..."
git init
git add -A
git commit -m 'deploy'

# Push ไปที่ GitHub Pages (gh-pages branch)
# ⚠️ แก้ YOUR_USERNAME เป็นชื่อ GitHub ของคุณ
echo "🌐 Deploying to GitHub Pages..."
git push -f git@github.com:YOUR_USERNAME/portfolio-panupong.git main:gh-pages

cd -

echo "✅ Deployment complete!"
echo "🔗 Your site will be live at: https://YOUR_USERNAME.github.io/portfolio-panupong/"
