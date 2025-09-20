# E-Commerce Platform

แพลตฟอร์มเปรียบเทียบราคาสินค้าจากทุกแพลตฟอร์ม พร้อมฟีเจอร์ AR/VR เพื่อทดลองสินค้าในห้องของคุณ

## ✨ ฟีเจอร์หลัก

### 🏠 หน้าหลัก (Homepage)
- แถบค้นหาสินค้าที่เด่นชัด
- รายการสินค้าแนะนำและสินค้ายอดนิยม
- แบนเนอร์โปรโมทฟีเจอร์ AR/VR
- ทางเข้าสู่หน้าหมวดหมู่สินค้าหลัก

### 🔍 หน้าผลการค้นหา (Search Results)
- แสดงผลลัพธ์สินค้าในรูปแบบ Grid/List
- ฟิลเตอร์และตัวเลือกการเรียงลำดับ:
  - เรียงตามราคา (น้อยไปมาก, มากไปน้อย)
  - เรียงตามคะแนนร้านค้า
  - ฟิลเตอร์ตามแพลตฟอร์ม (Shopee, Lazada, JD Central)
  - ฟิลเตอร์ตามหมวดหมู่
  - ฟิลเตอร์ตามช่วงราคา

### 📱 หน้าแสดงรายละเอียดสินค้า (Product Detail)
- แกลเลอรีรูปภาพหลายมุมมอง
- ปุ่ม "ลองสินค้าในห้องด้วย AR/VR"
- ข้อมูลสินค้าและข้อมูลทางเทคนิค
- ตารางเปรียบเทียบราคาจากทุกแพลตฟอร์ม
- คะแนนความน่าเชื่อถือของร้านค้า
- รีวิวและความคิดเห็นจากผู้ใช้งาน

### 📂 หน้าหมวดหมู่ (Category Pages)
- รวมสินค้าตามหมวดหมู่
- ฟิลเตอร์และตัวเลือกการเรียงลำดับ
- หมวดหมู่ย่อย

### 🏪 หน้าโปรไฟล์ร้านค้า (Store Profile)
- ข้อมูลร้านค้าและคะแนนความน่าเชื่อถือ
- กราฟแสดงสถิติคะแนนรีวิว
- สินค้าทั้งหมดที่ร้านค้าจำหน่าย
- รีวิวและความคิดเห็นจากผู้ใช้งาน

### ℹ️ หน้าเกี่ยวกับเรา (About Us)
- วิสัยทัศน์และพันธกิจ
- ข้อมูลการติดต่อ

### 🥽 ฟีเจอร์ AR/VR
- ระบบ AR เพื่อวางโมเดล 3D ในห้อง
- ระบบ VR เพื่อดูสินค้าแบบ 360 องศา
- ควบคุมการหมุน, ขยาย, ย้ายตำแหน่ง

## 🛠️ เทคโนโลยีที่ใช้

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Library**: HeroUI + Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: SweetAlert2
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image

## 🚀 การติดตั้งและรัน

### ข้อกำหนดระบบ
- Node.js 22+
- npm หรือ yarn

### การติดตั้ง

1. ติดตั้ง dependencies:
```bash
npm install
```

2. รันเว็บไซต์ในโหมด development:
```bash
npm run dev
```

3. เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

### การ Build สำหรับ Production

```bash
npm run build
npm start
```

## 📁 โครงสร้างโปรเจค

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # หน้าหลัก
│   ├── search/            # หน้าผลการค้นหา
│   ├── product/[id]/      # หน้ารายละเอียดสินค้า
│   ├── categories/        # หน้าหมวดหมู่
│   ├── stores/            # หน้าร้านค้า
│   └── about/             # หน้าเกี่ยวกับเรา
├── components/            # React Components
│   ├── layout/           # Layout Components
│   ├── product/          # Product Components
│   ├── home/             # Homepage Components
│   └── search/           # Search Components
├── data/                 # Mock Data
├── types/                # TypeScript Types
├── utils/                # Utility Functions
└── providers/            # Context Providers
```

## 🎨 UI/UX Features

- **Responsive Design**: รองรับทุกขนาดหน้าจอ
- **Modern UI**: ใช้ HeroUI components ที่สวยงาม
- **Smooth Animations**: ใช้ Framer Motion
- **Interactive Elements**: Hover effects และ transitions
- **Accessibility**: รองรับ screen readers และ keyboard navigation

## 🔔 ระบบแจ้งเตือน

ใช้ SweetAlert2 สำหรับ:
- แจ้งเตือนเมื่อเพิ่มสินค้าในตะกร้า
- แจ้งเตือนเมื่อเพิ่มสินค้าในรายการโปรด
- แจ้งเตือนเมื่อค้นหาไม่พบผลลัพธ์
- แจ้งเตือนเมื่อใช้ฟีเจอร์ AR/VR
- แจ้งเตือนการแชร์สินค้า

## 📱 ฟีเจอร์ AR/VR

### AR (Augmented Reality)
- เปิดกล้องเพื่อวางโมเดล 3D ในห้อง
- ควบคุมการย้าย, หมุน, ขยาย/ย่อ
- บันทึกภาพผลลัพธ์

### VR (Virtual Reality)
- ดูสินค้าแบบ 3D 360 องศา
- รองรับ VR Headset
- ควบคุมด้วยเมาส์หรือมือถือ

## 🎯 Mock Data

โปรเจคนี้ใช้ mock data ที่ครอบคลุม:
- สินค้า 3 รายการพร้อมข้อมูลครบถ้วน
- ร้านค้า 3 ร้านพร้อมข้อมูลสถิติ
- หมวดหมู่ 3 หมวดหมู่พร้อมหมวดหมู่ย่อย
- รีวิวและคะแนนจากผู้ใช้
- แบนเนอร์โปรโมท

## 🔧 การพัฒนาต่อ

### การเพิ่มสินค้าใหม่
แก้ไขไฟล์ `src/data/mockData.ts` และเพิ่มข้อมูลใน `mockProducts`

### การเพิ่มร้านค้าใหม่
แก้ไขไฟล์ `src/data/mockData.ts` และเพิ่มข้อมูลใน `mockStores`

### การเพิ่มหมวดหมู่ใหม่
แก้ไขไฟล์ `src/data/mockData.ts` และเพิ่มข้อมูลใน `mockCategories`

## 📄 License

MIT License

## 👥 ทีมพัฒนา

- **Frontend Developer**: สร้าง UI/UX และ components
- **Backend Developer**: พัฒนา API และ database
- **AR/VR Developer**: พัฒนาฟีเจอร์ AR/VR
- **UI/UX Designer**: ออกแบบ interface และ user experience

---

**หมายเหตุ**: นี่เป็นเวอร์ชัน demo ที่ใช้ mock data สำหรับการทดสอบและแสดงผลเท่านั้น