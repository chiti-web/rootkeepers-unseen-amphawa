# RootKeepers · Unseen Amphawa — เว็บรวม Release 1.0
Rev 1.0 · 2026/10/30

เว็บเดียวรวม 5 จุดหมายจากการสำรวจ 20–21 ก.ย. 2569: วรเดชฟาร์ม (Woradech Farm) · บ้านคลองฉู่ฉี่ · ล้งปลาทูแม่ลำยอง · ชมหิ่งห้อยตลาดน้ำท่าคา · ล่องเรือตลาดน้ำท่าคายามเช้า

## โครงสร้าง
- `index.html`, `src/` = หน้าหลัก (การ์ด 5 จุดหมาย + ลิงก์ YouTube) ข้อมูลใน `src/data/destinations.json`
- `pages/<slug>/` = เว็บของแต่ละจุดหมาย (คัดลอกจาก `Web/` ของโปรเจกต์หลัก ตั้งเป็น Release 1.0 แล้ว) มีแถบกลับหน้าหลักและลิงก์ YouTube
- `scripts/build-all.mjs` = build หน้าหลักไป `dist/` และแต่ละหน้าไป `dist/<slug>/`

## คำสั่ง
```
npm install
npm run dev       # ทดสอบหน้าหลัก
npm run build     # สร้างทั้งเว็บที่ dist/
npm run preview   # เปิดดู dist ที่ http://localhost:4173/
```
Deploy บน Vercel: Build Command `npm run build`, Output `dist` (ตั้งใน `vercel.json` แล้ว)

## หมายเหตุ
- ทุกหน้ายังมี `<meta name="robots" content="noindex">` (ไม่ให้เสิร์ชเอ็นจินจัดทำดัชนี) แก้ใน `index.html` ของแต่ละหน้าถ้าต้องการให้ค้นเจอ
- ห้ามใส่คีย์/ไฟล์ `.env` ใน repo
