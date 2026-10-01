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

