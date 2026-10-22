# Pertemuan 3
Nama:Aldo Alvero Pratama
Nim:25523229
Repositori: pabw-25523229(https://github.com/25523229-rgb/pabw-25523229.git)

pabw-25523229
├──README.md
└── worksheet-p3/
├── profil.html
└── olahraga-1.webp
Pengungkapan AI
#Pemeriksaan Struktur kode
#Panduan Aksebilitas:Cara menjalankan audit Lighthouse Accessibility di DevTools

# Pertemuan 4 - Design token halaman profil

-Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
-Warna utama: #1d3a8c (biru), dipilih karena memiliki tingkat kontras yang tinggi terhadap latar belakang terang (lolos kontras AA) dan memberikan tampilan yang rapi serta profesional.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1d3a8c | tombol, tautan, penanda |
| --color-fg | #0f172a | warna teks utama |
| --color-bg | #f8fafc | latar halaman |
| --radius-md | 0.75rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.
Pengungkapan AI
#Membantu Pendalaman pemahaman teori dan konsep css
 
 # Pertemuan 5 - Layout Modern:Flexbox dan Grid
 Berkas yang dikerjakan:layout.css,Komponen.css,profil.html

 1.Kerangka Utama page : `grid-template-rows: auto 1fr auto;` | Membagi kerangka halaman menjadi 3 baris utuh agar footer selalu terdorong rapi ke bawah. 
2.Tata Letak Isi .isi`grid-template-areas` | Menyusun penempatan area `.sisi` dan .utama secara presisi. 
3.Galeri Adaptif (`.galeri`) `repeat(auto-fit, minmax(16rem, 1fr))` Membuat jumlah kolom kartu fleksibel menyesuaikan lebar layar secara otomatis. 
Navigasi & Kartu  `display: flex;` & `gap`  Mengatur perataan elemen 1 dimensi dengan jarak antarkomponen yang konsisten. 
Pencegahan Overflow`min-width: 0;` & `overflow-wrap: anywhere` mencegah teks panjang Memaksa wadah  agar tidak keluar di layar sempit (360 px). 
Pengungkapan AI
#membantu menganalisis penyebab bug overflow pada tampilan layar

# Pertemuan 6 - Responsive Mobile-First
Berkas yang dikerjakan: responsif.css, komponen.css, profil.html
Halaman Jurnal Olahraga dari Pertemuan 5 saya buat menyesuaikan diri di tiga lebar uji: 360 px (ponsel), 768 px (tablet), dan 1280 px (desktop). Gaya dasarnya ditulis untuk layar sempit, lalu ditambah dua titik henti yang memakai ⁠ min-width ⁠ dan satuan ⁠ rem.
Viewport & Tata Letak Dasar (⁠ responsif.css ⁠) : ⁠ <meta name="viewport"> ⁠ & ⁠ grid-template-columns: 1fr ⁠ | Menyiapkan skala layar ponsel dan struktur 1 kolom sebagai fondasi mobile-first tanpa ⁠ @media ⁠.
2.⁠ ⁠Titik Henti Tablet & Desktop (⁠ responsif.css ⁠) : ⁠ @media (min-width: 48rem) ⁠ & ⁠ @media (min-width: 60rem) ⁠ | Mengatur transisi tata letak utama (sidebar ⁠ 16rem 1fr ⁠) serta jumlah kolom galeri secara bertahap.
3.⁠ ⁠Tinggi Layar Dinamis (⁠ responsif.css ⁠) : ⁠ min-height: 100dvh ⁠ | Menjaga kerangka utama tetap memenuhi seluruh layar ponsel tanpa terpotong bilah alamat peramban.
4.⁠ ⁠Elemen Media Fleksibel (⁠ komponen.css ⁠) : ⁠ max-width: 100% ⁠ & ⁠ height: auto ⁠ | Mencegah gambar meluber keluar dari wadah kartu saat dibuka di layar sempit.
5.⁠ ⁠Tabel Bergulir sendiri (⁠ komponen.css ⁠) : ⁠ overflow-x: auto ⁠  Memberi pembungkus khusus pada tabel lebar agar bisa digulir mendatar tanpa merusak seluruh tata letak halaman.

#Pengungkapan AI
Membantu menganalisi penentuan titik henti,memvalidasi pengananan luberan(overflow)

# Pertemuan 8 - JavaScript Modern ES6+, Struktur Data, dan Array Methods

Penerapan kode di app.js
Fungsi Murni
   -Membuat fungsi `buatPerkenalan()` dan `formatKeahlian()` yang mengembalikan nilai (*return*) tanpa mengubah variabel di luar fungsi 
. Pengolahan Array & Salinan Data
   -Menggunakan (`{...objek}`, `[...array]`) untuk menyalin data agar *array* utama tidak mengalami penimpaan langsung.
   -Memanfaatkan `map` untuk mengubah bentuk format data, `filter` untuk menyaring daftar proyek berdasarkan kategori, dan `find` untuk mencari satu item spesifik
   -Menampilkan data struktur *array of objects* di Console menggunakan `console.table().

 Penanganan `null` dan `undefined
   -Menggunakan *Nullish Coalescing* (`??`) untuk memberikan nilai cadangan (*default value*) jika data bernilai `null` atau `undefined`.
   -Menggunakan *Optional Chaining* (`?.`) saat mengakses properti hasil pencarian `.find()` agar tidak memicu galat/error di Console ketika data tidak ditemukan.
Dikerjakan Mandiri
  -Penyusunan data profil pribadi (identitas, daftar keahlian, dan daftar proyek)
  -Pengujian kode secara lokal menggunakan Live Server dan pemeriksaan Console di peramban
  -Pengunggahan berkas dan pengelolaan commit di Git/GitHub

Dibantu AI
-Membantu memahami alur pemecahan masalah (debugging)
-Membantu Diskusi logika sintaks


# Pertemuan 9 - DOM, Event, dan Interaktivitas

1.Render Data Dinamis dari Array
   -Menampilkan kartu proyek latihan secara otomatis dari struktur data array menggunakan `document.createElement()` dan `textContent`.
   -Mencegah penumpukan/duplikasi kartu dengan pembersihan wadah galeri di awal fungsi *render*.
   -Menampilkan pesan keadaan kosong  ketika kategori yang dipilih tidak memiliki data.

2.Event Delegation pada Filter Kategori
   -Menggunakan 1 *event listener* `click` pada elemen induk (`div#filter`) yang memanfaatkan `event.target.closest('button')` untuk mendeteksi tombol filter yang aktif.

3.Validasi Formulir Interaktif
   -Mencegah muat ulang halaman saat pengiriman formulir dengan `event.preventDefault()`.
   -Menampilkan pesan galat langsung di bawah kolom yang belum terisi sesuai validasi real-time.

   Pengungkapan AI
-Memahami alur manipulasi DOM, teknik event delegation, dan pola fungsi render.
-Mengidentifikasi galat sintaks HTML pada berkas profil.html.
-Membantu struktur awal penulisan fungsi validasi form dan perbaikan galat null pada pemilih elemen (querySelector).

Dikerjakan mandiri
-Penelusuran pohon DOM dan pengujian pemilih elemen melalui DevTools Console.
-Pembuatan elemen kartu dinamis berbasis data
-Penerapan event delegation pada tombol penyaring (filter).
-Penanganan validasi formulir dan pengujian fungsionalitas di peramban.

# Pertemuan 10 JavaScript Asinkron: fetch, Promise, dan JSON
Pengambilan Data Asinkron & Pemisahan Lapisan (Modularization)
Membuat berkas js/api.js untuk mengisolasi pemanggilan fetch() dan mengelola variabel ALAMAT di satu tempat ( URL Raw GitHub).   

Memeriksa status HTTP melalui respons.ok sebelum membaca balasan respons.json() untuk mencegah dibacanya halaman galat HTML sebagai data.   

Mengekspor fungsi ambilProyek() agar js/app.js dapat merakit aplikasi tanpa memanggil fetch() secara langsung.   

Penanganan 4 Keadaan Antarmuka (UI States)
   

Memuat: Mengontrol indikator #muat melalui fungsi aturMemuat(true/false) di blok try...catch...finally.   

Berhasil: Merender daftar kartu proyek latihan ke dalam wadah #daftar-proyek melalui fungsi render() dan buatKartuProyek().   

Gagal: Menangkap galat jaringan  lalu menampilkan pesan galat ke antarmuka via tampilkanGalat().   

Kosong: Memeriksa daftar.length === 0 untuk menampilkan elemen #pesan-kosong saat data bernilai larik kosong.   

Pengolahan JSON Dua Arah & Validasi Formulir
   

Mengonversi teks balasan jaringan menjadi objek JavaScript menggunakan await respons.json().   

Mengonversi objek data dari formulir catat menjadi teks JSON menggunakan JSON.stringify() saat pengiriman data.








Pengunkapan AI
1 pemahaman alur kerja async/await, penanganan galat try/catch, dan pemeriksaan respons.ok pada fetch().   

2.Menganalisis pesan galat sintaks SyntaxError / Unexpected reserved word saat pengujian pemanggilan await
Pengerjaan Mandiri
1.Penulisan struktur HTML profil.html dan penataan CSS untuk topik Jurnal & Target Olahraga Saya.   
HTML
2.Pengelolaan Data JSON: Penyusunan struktur data proyek pada berkas data/proyek.json.   
JSON
3.Pengujian Antarmuka: Pengujian langsung empat keadaan UI (memuat, berhasil, gagal, kosong) di peramban dan DevTools.   

Manajemen Repositori: Eksekusi perintah Git (add, commit, push) dan pengelolaan repositori GitHub.


# Pertemuan 11 Modul state dan penyimpanan klien
 
 #Pengerjaan Mandiri
-Penulisan Kode Modul: Memecah berkas JavaScript lama dari Pertemuan 10 ke dalam 5 modul terpisah tanpa menambah logika di app.js.   
-Penyesuaian HTML: Menambahkan tombol "Atur ulang" (#atur-ulang) dan menyisipkan tag <link rel="icon"> di dalam elemen <head> pada profil.html.   
-Pengujian DevTools: Melakukan pengujian perubahan state (filter & favorit), memeriksa ketahanan data saat reload, dan menjalankan data di Console.   
-Pengelolaan Git: Mengeksekusi perintah Git (add, commit, push, pull, stash) hingga repositori lokal dan GitHub sinkron.

#Pengungkapan AI
-Penyimpanan Klien & Uji Kerusakan: Memahami mekanisme localStorage (JSON.stringify/JSON.parse), logika pemeriksaan nomor versi skema, serta penanganan simpanan rusak via try catch
-Membantu memahami pemisahan kode

Node.js
-node -v : v24 22.0
-npm  -v : 11.19.1

# Pertemuan 11 Build Tooling dan Framework SPA

Halaman profil dan jurnal olahraga pribadi. Proyek ini adalah hasil memindahkan halaman Pertemuan 11

Jumlah berkas turun karena CSS, modul JavaScript, dan komponen digabung menjadi satu berkas .js dan satu .css. Ukuran total tetap besar karena tiga gambar .jpg di public/ disalin apa adanya dan tidak diperkecil oleh build.

Yang tidak disimpan di repositori

node_modules/ dan dist/ tidak ikut disimpan karena bisa dibuat ulang dengan npm install dan npm run build. package-lock.json sengaja disimpan untuk mengunci versi paket.

Yang dikerjakan sendiri
-Pemasangan awal kerangka proyek Vite Vue di folder worksheet-p12/.

-Pemindahan aset CSS (tokens.css, layout.css, komponen.css, dll.) ke dalam src/ dan pengimporannya di main.js.

-Pemisahan markup HTML P11 menjadi struktur 4 komponen Vue (KepalaProfil, TombolFilter, DaftarProyek, FormKontak).

-Pengujian fungsionalitas localStorage, tombol filter, dan aksi favorit di peramban.

-Eksekusi perintah build, preview, serta perbandingan network payload di DevTools.

Yang dibantu AI
Refactoring sintaks penulisan watch() reaktif Vue 3 dengan opsi (deep: true )untuk memantau perubahan objek state kompleks.

Pengecekan ulang keterhubungan onMounted dengan penanganan async/await saat memanggil API data JSON.
