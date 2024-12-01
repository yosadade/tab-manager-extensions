# Task-Manager Chrome Extension

Aplikasi ini adalah Chrome extension berbasis React.js yang dibuat untuk membantu pengguna mengelola tab browser sekaligus memudahkan mengorganisasi tugas-tugas.

## Demo
Anda dapat mencoba demo extension ini dengan mengunjungi tautan berikut:  
[Demo Tab-Manager Chrome Extension](https://jam.dev/c/60e256c1-cd13-499a-9d11-7b86913fb3f3)  
*(Ganti dengan tautan demo Anda)*

## Cara Memulai Proyek Task-Manager Extension

1. **Clone Repository**  
   - Clone repository ini ke komputer Anda dengan perintah berikut:
     ```bash
     git clone https://github.com/yosadade/tab-manager-extensions.git
     cd tab-manager-extensions
     ```

2. **Instalasi Dependencies**  
   - Pastikan Anda sudah menginstal Node.js di komputer Anda. Kemudian jalankan:
     ```bash
     npm install
     ```

3. **Menjalankan Proyek Secara Lokal**  
   - Untuk melihat hasil pengembangan secara langsung, gunakan perintah:
     ```bash
     npm start
     ```

4. **Build Proyek**  
   - Setelah selesai mengembangkan, build proyek untuk digunakan sebagai extension:
     ```bash
     npm run build
     ```
   - Hasil build akan berada di folder `build`.

5. **Upload ke Chrome Browser (Lokal)**  
   - Untuk mencoba extension secara lokal di browser Chrome:
     1. Buka Chrome dan masuk ke **chrome://extensions/**.
     2. Aktifkan **Developer Mode** (pojok kanan atas).
     3. Klik **Load Unpacked**, lalu pilih folder `build`.
     4. Extension Anda sekarang aktif dan siap digunakan di browser.

6. **Upload ke Chrome Web Store**  
   - Untuk mengunggah extension ke Chrome Web Store:
     1. **Buat Akun Developer**: Daftar di [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
     2. **Kompres Build Folder**: Buat file `.zip` dari folder `build`.
     3. **Unggah ke Chrome Web Store**:
        - Masuk ke dashboard, klik **Add a New Item**, lalu unggah file `.zip`.
        - Lengkapi informasi deskripsi dan screenshot.
        - Kirimkan untuk ditinjau oleh Google.

---


