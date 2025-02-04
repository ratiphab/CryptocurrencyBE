# 📦 Express.js + Sequelize Project

## 🚀 Features
- Get Wallet data with user and cryptocurrency data
---

## ⚙️ **1. Clone Repository**
```
git clone https://github.com/ratiphab/CryptocurrencyBE.git
cd project
```

## 📦 2. Install Dependencies

```
npm install
```

## 🗃️ 3. Install Sequelize CLI
```
npm install --save sequelize sequelize-cli mysql2
npx sequelize-cli init
```

## 🏗️ 4. Database Migration
```
npx sequelize-cli db:migrate
```

## 🌱 5. Run Seeder (เพิ่มข้อมูลเริ่มต้น)
```
npx sequelize-cli db:seed:all
```

## ⚡ 6. Start Server
```
npm run dev
```

## 🔍 7. ตรวจสอบ API

ยิง postman ไปที่ http://localhost:3000/wallet?id=1

สามารถเปลี่ยนหลัง id เป็น userId ที่ต้องการจะดึงได้

## 🗑️ 8. คำสั่ง Reset Database (ในกรณีที่ต้องการล้างข้อมูล)

```
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## 📝 Troubleshooting

ตรวจสอบว่า MySQL รันอยู่ (mysql.server start บน Mac)

แก้ปัญหา Sequelize ด้วยการเพิ่ม logging: console.log ใน config/database.js เปลี่ยนเป็น true
