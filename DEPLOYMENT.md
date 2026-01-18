# 🚀 คู่มือการ Deploy เว็บ Portfolio ขึ้นออนไลน์

> คู่มือจับมือทำทีละขั้นตอน สำหรับการนำเว็บ Portfolio ของ Panupong Nijjaboon ขึ้น Internet ฟรี!

---

## 📋 สิ่งที่ต้องมีก่อนเริ่ม

- ✅ **Node.js** (เวอร์ชัน 18 ขึ้นไป) → [ดาวน์โหลด](https://nodejs.org/)
- ✅ **Git** → [ดาวน์โหลด](https://git-scm.com/)
- ✅ **GitHub Account** → [สมัครฟรี](https://github.com/signup)
- ✅ **VS Code** (แนะนำ) → [ดาวน์โหลด](https://code.visualstudio.com/)

---

## 🎯 วิธีที่ 1: Deploy ด้วย Vercel (แนะนำ - ง่ายที่สุด)

### ขั้นตอนที่ 1: เตรียม GitHub Repository

**1.1 สร้าง Repository ใหม่ใน GitHub**

```bash
# เปิด Terminal ในโฟลเดอร์ Profile_CV
cd /home/tencyber/Profile_CV

# เริ่มต้น Git (ถ้ายังไม่มี)
git init

# เพิ่มไฟล์ทั้งหมด
git add .

# Commit ครั้งแรก
git commit -m "Initial commit - Portfolio website"
```

**1.2 สร้าง Repository บน GitHub**

1. ไปที่ https://github.com/new
2. ตั้งชื่อ Repository เช่น `portfolio-panupong`
3. เลือก **Public** (เพื่อให้ deploy ฟรีได้)
4. **อย่า**เลือก "Initialize with README"
5. กด **Create repository**

**1.3 Push โค้ดขึ้น GitHub**

```bash
# เชื่อมต่อกับ GitHub (แทน YOUR_USERNAME ด้วยชื่อ GitHub ของคุณ)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-panupong.git

# Push ขึ้น GitHub
git branch -M main
git push -u origin main
```

---

### ขั้นตอนที่ 2: Deploy ด้วย Vercel

**2.1 สมัคร/Login Vercel**

1. ไปที่ https://vercel.com
2. กดปุ่ม **"Sign Up"** หรือ **"Login"**
3. เลือก **"Continue with GitHub"**
4. อนุญาตให้ Vercel เข้าถึง GitHub

**2.2 Import Project**

1. หลัง Login แล้ว กดปุ่ม **"Add New..."** → **"Project"**
2. คุณจะเห็น Repository `portfolio-panupong`
3. กดปุ่ม **"Import"** ข้างๆ ชื่อ Repository

**2.3 Configure Project (ตั้งค่า)**

ใน Configure Project หน้านี้:

- **Framework Preset**: เลือก **Vite** (ถ้ามันไม่เลือกให้อัตโนมัติ)
- **Root Directory**: ปล่อยว่างไว้ `./`
- **Build Command**: `npm run build` (default)
- **Output Directory**: `dist` (default)
- **Environment Variables**: ไม่ต้องใส่อะไร (ถ้าไม่มี API keys)

✅ กดปุ่ม **"Deploy"**

**2.4 รอ Deploy เสร็จ (1-2 นาที)**

- เห็นหน้าจอแสดง "Building..." รอให้มันทำงาน
- พอเสร็จจะเห็นพลุแตก 🎉
- คุณจะได้ URL แบบนี้: `https://portfolio-panupong.vercel.app`

**2.5 เปิดดูเว็บ**

กดปุ่ม **"Visit"** หรือคลิก URL เพื่อดูผลลัพธ์!

---

### 🎨 ปรับแต่ง Domain (Optional)

**ต้องการ Custom Domain สวยๆ?**

1. ใน Vercel Project → ไปที่แท็บ **Settings**
2. เลือกเมนู **Domains**
3. กด **"Add"** แล้วใส่ชื่อ domain ที่ต้องการ

**ตัวอย่าง:**
- `panupong-portfolio.vercel.app` (ฟรี)
- `panupong.dev` (ซื้อ domain จากที่อื่นแล้วเชื่อมต่อ)

---

## 🎯 วิธีที่ 2: Deploy ด้วย Netlify

### ขั้นตอนที่ 1: Build โปรเจค

```bash
cd /home/tencyber/Profile_CV
npm run build
```

จะได้โฟลเดอร์ `dist/` ที่มีไฟล์ HTML/CSS/JS สำเร็จรูป

### ขั้นตอนที่ 2: Deploy ด้วย Netlify

**วิธี A: Drag & Drop (ง่ายสุด)**

1. ไปที่ https://app.netlify.com/drop
2. ลาก folder `dist/` ไปวางบนเว็บ
3. รอ 30 วินาที จะได้ URL ทันที!

**วิธี B: เชื่อมต่อกับ GitHub (Auto Deploy)**

1. ไปที่ https://app.netlify.com
2. กด **"Add new site"** → **"Import an existing project"**
3. เลือก **"GitHub"**
4. เลือก Repository `portfolio-panupong`
5. ตั้งค่า:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. กด **"Deploy site"**

---

## 🎯 วิธีที่ 3: Deploy ด้วย GitHub Pages

### ขั้นตอนที่ 1: ตั้งค่า vite.config.ts

แก้ไขไฟล์ `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-panupong/', // ⚠️ ต้องเป็นชื่อ repo ของคุณ
  server: {
    port: 3000,
    open: true
  }
})
```

### ขั้นตอนที่ 2: สร้างไฟล์ deploy script

สร้างไฟล์ `deploy.sh`:

```bash
#!/usr/bin/env sh

# หยุดถ้ามี error
set -e

# Build
npm run build

# ไปที่ dist folder
cd dist

# สร้าง .nojekyll เพื่อไม่ให้ GitHub ignore underscore files
echo > .nojekyll

# Init git
git init
git add -A
git commit -m 'deploy'

# Deploy ไปที่ gh-pages branch
git push -f git@github.com:YOUR_USERNAME/portfolio-panupong.git main:gh-pages

cd -
```

### ขั้นตอนที่ 3: Deploy

```bash
# ทำให้ script รันได้
chmod +x deploy.sh

# Deploy
./deploy.sh
```

### ขั้นตอนที่ 4: เปิดใช้งาน GitHub Pages

1. ไปที่ Repository Settings → **Pages**
2. Source: เลือก `gh-pages` branch
3. กด **Save**
4. รอ 2-3 นาที จะได้ URL: `https://YOUR_USERNAME.github.io/portfolio-panupong/`

---

## 🔄 อัพเดทเว็บหลัง Deploy (Important!)

**เมื่อคุณแก้ไขโค้ดแล้วต้องการอัพเดทเว็บออนไลน์:**

```bash
# 1. บันทึกการเปลี่ยนแปลง
git add .
git commit -m "Update portfolio content"

# 2. Push ขึ้น GitHub
git push

# 3. Vercel/Netlify จะ Auto Deploy ให้อัตโนมัติใน 1-2 นาที!
```

---

## 🐛 แก้ปัญหาที่พบบ่อย

### ❌ Build Failed: "command not found"

```bash
# ติดตั้ง dependencies อีกครั้ง
npm install
npm run build
```

### ❌ หน้าเว็บขึ้นแต่ไม่มี CSS

→ ตรวจสอบ `base` ใน `vite.config.ts` ต้องตรงกับชื่อ repo

### ❌ รูปภาพไม่แสดง

→ วางรูปใน folder `public/` และใช้ path `/Panupong.jpg` (มี slash นำหน้า)

### ❌ Vercel deploy สำเร็จแต่เว็บ blank

```bash
# ลองดูใน Console ของ Browser (F12)
# ส่วนใหญ่เป็นปัญหา TypeScript errors

# แก้โดยตรวจสอบ errors:
npm run build
```

---

## 📊 เปรียบเทียบ Hosting Platform

| Platform | ความเร็ว Deploy | Custom Domain ฟรี | Auto Deploy | ใช้งานง่าย |
|----------|----------------|-------------------|-------------|-----------|
| **Vercel** | ⚡️ เร็วสุด (1 นาที) | ✅ ฟรี (.vercel.app) | ✅ อัตโนมัติ | ⭐️⭐️⭐️⭐️⭐️ |
| **Netlify** | ⚡️ เร็ว (2 นาที) | ✅ ฟรี (.netlify.app) | ✅ อัตโนมัติ | ⭐️⭐️⭐️⭐️⭐️ |
| **GitHub Pages** | 🐢 ช้า (5 นาที) | ✅ ฟรี (.github.io) | ⚠️ ต้อง script | ⭐️⭐️⭐️ |

**คำแนะนำ:** ใช้ **Vercel** เพราะเร็วที่สุด และรองรับ React/Vite ได้ดีที่สุด

---

## ✅ Checklist ก่อน Deploy

- [ ] รันได้ใน local (`npm run dev`)
- [ ] ไม่มี TypeScript errors (`npm run build`)
- [ ] รูปภาพอยู่ใน `public/` folder
- [ ] ลบ console.log() ที่ไม่จำเป็นออก
- [ ] แก้ข้อมูลส่วนตัวให้ถูกต้อง (email, phone, links)
- [ ] เช็ค responsive บน mobile (F12 → Device toolbar)

---

## 🎓 Resources เพิ่มเติม

- 📖 [Vite Documentation](https://vitejs.dev/guide/)
- 📖 [Vercel Documentation](https://vercel.com/docs)
- 📖 [Netlify Documentation](https://docs.netlify.com/)
- 💬 [ถามปัญหาใน GitHub Issues](https://github.com/YOUR_USERNAME/portfolio-panupong/issues)

---

## 🎉 เสร็จแล้ว!

ยินดีด้วย! ตอนนี้เว็บ Portfolio ของคุณออนไลน์แล้ว 🚀

**Share URL ของคุณได้ที่:**
- LinkedIn Profile
- GitHub Profile README
- อีเมล Signature
- Business Card

---

**พัฒนาโดย:** Panupong Nijjaboon  
**ติดต่อ:** panupong.nijjaboon@gmail.com  
**GitHub:** https://github.com/bew4113

© 2025 All Rights Reserved
