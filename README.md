# 📦 Express.js + Sequelize Project

## 🚀 Features
- Get Wallet data with user and cryptocurrency data

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
## ⚙️ 4.create database
run database server ที่เรามี(แนะนำเป็น mysql)
 set database ที่เรามีให้ตรงกับ config โดยไปที่ config/config.json แล้วแก้ไข้ให้ตรงกัน

## 🏗️ 5. Database Migration
```
npx sequelize-cli db:migrate
```

## 🌱 6. Run Seeder (เพิ่มข้อมูลเริ่มต้น)
```
npx sequelize-cli db:seed:all
```

## ⚡ 7. Start Server
```
npm run dev
```

## 🔍 8. ตรวจสอบ API

ยิง postman ไปที่ http://localhost:3000/wallet?id=1

สามารถเปลี่ยนหลัง id เป็น userId ที่ต้องการจะดึงได้

## 🗑️ 9. คำสั่ง Reset Database (ในกรณีที่ต้องการล้างข้อมูล)

```
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## 📝 Troubleshooting

ตรวจสอบว่า MySQL รันอยู่ (mysql.server start บน Mac)

แก้ปัญหา Sequelize ด้วยการเพิ่ม logging: console.log ใน config/database.js เปลี่ยนเป็น true
