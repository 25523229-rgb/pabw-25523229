import { ambilProyek } from "./api.js";
import {
  renderProyek,
  barisFilter,
  formCatat,
  inputJenis,
  inputTanggal,
  inputDurasi,
  tombolKirim,
  galatJenis,
  galatTanggal,
  galatDurasi,
} from "./dom.js";
  
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


function periksaJenis() {
  const nilai = inputJenis.value.trim(); // trim: spasi saja dianggap kosong
  if (nilai === "") {
    return "Jenis olahraga belum diisi. Tulis jenisnya, misalnya Lari atau Gym.";
  }
  if (nilai.length < 3) {
    return "Jenis olahraga terlalu pendek. Tulis minimal 3 karakter.";
  }
  return "";
}

function periksaTanggal() {
  if (inputTanggal.value === "") {
    return "Tanggal latihan belum dipilih. Pilih tanggal latihan Anda.";
  }
  return "";
}

function periksaDurasi() {
  const nilai = inputDurasi.value.trim();
  if (nilai === "") {
    return "Durasi belum diisi. Isi angka antara 1 sampai 300 menit.";
  }
  const angka = Number(nilai);
  if (Number.isNaN(angka) || angka < 1 || angka > 300) {
    return "Durasi di luar batas. Isi angka antara 1 sampai 300 menit.";
  }
  return "";
}


const daftarKolom = [
  { input: inputJenis, galat: galatJenis, periksa: periksaJenis },
  { input: inputTanggal, galat: galatTanggal, periksa: periksaTanggal },
  { input: inputDurasi, galat: galatDurasi, periksa: periksaDurasi },
];

let sudahCoba = false; 


function periksaKolom(kolom) {
  const pesan = kolom.periksa();
  kolom.galat.textContent = pesan;
  if (pesan) {
    kolom.input.setAttribute("aria-invalid", "true"); // tanda bagi pembaca layar
  } else {
    kolom.input.removeAttribute("aria-invalid");
  }
  return pesan === "";
}


formCatat.addEventListener("input", (event) => {
  const kolom = daftarKolom.find((k) => k.input === event.target);
  if (!kolom) return;

  periksaKolom(kolom);

  if (sudahCoba) {
    const sah = daftarKolom.every((k) => k.periksa() === "");
    tombolKirim.disabled = !sah; // tombol menunggu sampai seluruh kolom layak
  }
});

formCatat.addEventListener("submit", (event) => {
  event.preventDefault(); // baris pertama: halaman tidak dimuat ulang
  sudahCoba = true;

  let kolomBermasalah = null;
  daftarKolom.forEach((kolom) => {
    const layak = periksaKolom(kolom);
    if (!layak && !kolomBermasalah) kolomBermasalah = kolom.input;
  });

  const sah = kolomBermasalah === null;
  tombolKirim.disabled = !sah; 

  if (!sah) {
    kolomBermasalah.focus(); 
    return;
  }

  console.log("Latihan tersimpan:", {
    jenis: inputJenis.value.trim(),
    tanggal: inputTanggal.value,
    durasi: Number(inputDurasi.value),
  });

  formCatat.reset();
});


formCatat.addEventListener("reset", () => {
  sudahCoba = false;
  daftarKolom.forEach((kolom) => {
    kolom.galat.textContent = "";
    kolom.input.removeAttribute("aria-invalid");
  });
  tombolKirim.disabled = false;
});

// sementara, diganti perakit muat() di lembar D
ambilProyek().then((daftar) => console.log(daftar));