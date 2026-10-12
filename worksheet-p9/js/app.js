import { renderProyek, barisFilter } from "./dom.js";

const nama = "Aldo Alvero Pratama";
const jumlahProyek = 3;
let pilihanAktif = "semua";

console.log(typeof nama);
console.log(typeof jumlahProyek);
console.log(typeof belumDibuat);

const profil = {
  nama: "Aldo Alvero Pratama",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

export const daftarProyek = [
  {
    judul: "Jurnal Lari",
    deskripsi: "Sepatu lari dan botol minum.",
    gambar: "sepatu-botol.jpg", 
    kategori: "Lari",
    sorotan: true,
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Jadwal Gym",
    deskripsi: "Latihan kekuatan tubuh.",
    gambar: "Latihan Beban.jpg", 
    kategori: "Gym",
    sorotan: false,
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Pingpong",
    deskripsi: "Latihan kelincahan dan refleks.",
    gambar: "pingpong.jpg", 
    kategori: "Pingpong",
    sorotan: false,
    tahun: 2026,
    selesai: false,
  },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Pingpong");
console.log(katalog);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);

const proyekTerurut = [...daftarProyek].sort((a, b) => 
  a.judul.localeCompare(b.judul)
);
console.table(proyekTerurut);


renderProyek(daftarProyek);


function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}


barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter((proyek) => {
    if (kategori === "semua") return true;
    if (kategori === "selesai") return proyek.selesai === true;
    if (kategori === "belum") return proyek.selesai === false;
    return proyek.kategori.toLowerCase() === kategori.toLowerCase();
  });

  tandaiTombolAktif(tombol);
  renderProyek(terpilih);
});
