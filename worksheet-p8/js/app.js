const nama = "Aldo Alvero Pratama"; //teks
const jumlahProyek = 3;             // angka,bukan "3"
let pilihanAktif = "semua";         // akan berubah saat disaring

console.log(typeof nama);          // "string"
console.log(typeof jumlahProyek);  // "number"
console.log(typeof belumDibuat);   // "undefined"

const profil = {
  nama: "Aldo Alvero Pratama",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
const daftarProyek = [
  { judul: "Jurnal Lari", tahun: 2026, selesai: true },
  { judul: "Jadwal Gym", tahun: 2026, selesai: true },
  { judul: "Pingpong", tahun: 2026, selesai: false },
];

// 1. Tampilan console.table 
console.table(profil.keahlian);
console.table(daftarProyek);

// 2. filter pada satu label 
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

// 3. find satu isi 
const katalog = daftarProyek.find((proyek) => proyek.judul === "Pingpong");
console.log(katalog);

// 4. map pada daftarProyek mengambil daftar judul 
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);

// 5. Data asli setelah sort 
const proyekTerurut = [...daftarProyek].sort((a, b) => 
  a.judul.localeCompare(b.judul)
);
console.table(proyekTerurut);

//P8 -- galat dibaca,bukan dihapus

