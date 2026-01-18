# Portfolio CV - Panupong Nijjaboon

> Professional CV/Portfolio ของ Panupong Nijjaboon - System Engineer & Security Architect

## 🚀 วิธีการใช้งาน

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. วางรูปภาพ

วางไฟล์ `Panupong.jpg` ไว้ใน folder **`public/`** 

```
Profile_CV/
├── public/
│   └── Panupong.jpg  👈 วางไฟล์รูปที่นี่
├── src/
└── ...
```

### 3. รันโปรเจค (Development)

```bash
npm run dev
```

เว็บจะเปิดที่ http://localhost:3000 โดยอัตโนมัติ

### 4. Build สำหรับ Production

```bash
npm run build
```

ไฟล์ที่ build เสร็จจะอยู่ใน folder `dist/`

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deploy เว็บขึ้นออนไลน์

ต้องการนำเว็บขึ้นอินเทอร์เน็ตให้คนอื่นเข้าดูได้? 

👉 **อ่านคู่มือฉบับเต็มที่ [DEPLOYMENT.md](DEPLOYMENT.md)**

### Quick Start - Deploy ด้วย Vercel (แนะนำ)

```bash
# 1. Push โค้ดขึ้น GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. ไปที่ vercel.com → Import Project → เลือก Repository
# 3. Deploy! (เสร็จใน 2 นาที)
```

**URL ตัวอย่าง:** `https://your-portfolio.vercel.app`

เลือก Platform Deploy:
- 🚀 **Vercel** - เร็วที่สุด, Auto Deploy, แนะนำ! ([คู่มือ](DEPLOYMENT.md#vercel))
- 🎨 **Netlify** - ง่าย, Drag & Drop ได้ ([คู่มือ](DEPLOYMENT.md#netlify))
- 📦 **GitHub Pages** - ฟรี, domain .github.io ([คู่มือ](DEPLOYMENT.md#github-pages))

---

## 📁 โครงสร้างโปรเจค

```
Profile_CV/
├── public/              # ไฟล์ static (รูปภาพ, favicon)
│   └── Panupong.jpg    # รูปโปรไฟล์
├── src/
│   ├── cv.tsx          # Component หลัก
│   ├── main.tsx        # Entry point
│   └── styles.css      # Tailwind CSS
├── index.html          # HTML template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## ✨ Features

- ✅ **Responsive Design** - ทำงานได้ทุกขนาดหน้าจอ
- ✅ **Smooth Animations** - Animation เรียบนุ่ม performance ดี
- ✅ **Tech Marquee** - ข้อความวิ่งแบบป้ายไฟที่สวยงาม
- ✅ **Modern Stack** - React + TypeScript + Tailwind CSS + Vite
- ✅ **Dark Theme** - สีเข้มสบายตา พร้อม gradient accents

---

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build Tool**: Vite 5
- **Fonts**: Google Fonts (Outfit, JetBrains Mono)

---

## 📝 หมายเหตุ

- หากไม่มีไฟล์ `Panupong.jpg` ระบบจะแสดง placeholder แทน
- สามารถแก้ไขข้อมูลส่วนตัวได้ที่ `const DATA` ในไฟล์ `src/cv.tsx`
- ปรับแต่งสีและ animation ได้ที่ `tailwind.config.js`

---

## 📧 Contact

**Panupong Nijjaboon**  
📧 panupong.nijjaboon@gmail.com  
📱 098-276-4341

---

© 2025 Panupong Nijjaboon. All Rights Reserved.
