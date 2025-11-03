# 🌸 Laravel Inertia React CRUD – Post Management App

Project ini adalah aplikasi CRUD sederhana untuk membuat, menampilkan, mengedit, dan menghapus postingan menggunakan **Laravel**, **Inertia.js**, dan **React**.  
Ini adalah project saya untuk belajar menghubungkan backend Laravel dengan frontend React menggunakan Inertia tanpa REST API.

---

## 🚀 Fitur Utama

- ✍️ Tambah postingan baru  
- 🧾 Tampilkan daftar postingan (dengan pagination)  
- 🛠️ Edit & update postingan  
- ❌ Hapus postingan  
- ⚡ Integrasi penuh Laravel – React via Inertia  
- 🎨 Tampilan modern dengan Tailwind CSS  
- 💬 Flash message saat create, update, dan delete  

---

## 🖼️ Preview

Tampilan utama:
- Halaman Home: daftar postingan  
- Halaman Create: form tambah postingan  
- Halaman Show: detail postingan + tombol edit & delete  
- Halaman Edit: form ubah isi postingan  

---

## 🧠 Teknologi yang Digunakan

| Bagian | Teknologi |
|--------|------------|
| Backend | Laravel 11 |
| Frontend | React + Inertia.js |
| Styling | Tailwind CSS |
| Routing | Laravel Resource Controller |
| State Management | Inertia useForm Hook |

---

## ⚙️ Cara Instalasi

Berikut langkah-langkah untuk menjalankan project ini di lokal:

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```
### 2️⃣ Install Dependensi Laravel
```bash
composer install
```
### 3️⃣ Install Dependensi Frontend
```bash
npm install
```
### 4️⃣ Copy File Environment
```bash
cp .env.example .env
```
### 5️⃣ Generate App Key
```bash
php artisan key:generate
```
### 6️⃣ Konfigurasi Database

Edit file .env dan sesuaikan pengaturan database kamu:
```makefile
DB_DATABASE=laravel_inertia_react
DB_USERNAME=root
DB_PASSWORD=
```
7️⃣ Migrasi Database
```bash
php artisan migrate
```
8️⃣ Jalankan Server
Buka dua terminal terpisah:

Terminal 1 (Laravel):
```bash
php artisan serve
```
Terminal 2 (Vite/React):
```bash
npm run dev
```
Lalu buka browser ke http://localhost:8000
 🚀

## 🧩 Struktur Project
```pgsql
resources/
 ├── js/
 │   ├── Pages/
 │   │   ├── Home.jsx
 │   │   ├── Create.jsx
 │   │   ├── Show.jsx
 │   │   └── Edit.jsx
 │   ├── Layouts/
 │   │   └── Layouts.jsx
 │   └── app.jsx
 └── css/
     └── app.css
```

##  💡 Pelajaran yang Didapat

- Integrasi Laravel dan React menggunakan Inertia.js
- Penanganan form menggunakan useForm()
- Validasi dan error handling di frontend React
- Implementasi layout global untuk semua halaman

## 👨‍💻 Penulis

Rapip
Belajar fullstack web development menggunakan Laravel dan React.
✨ “Every line of code is a new lesson.”
