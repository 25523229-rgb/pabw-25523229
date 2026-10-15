import { ambilProyek } from "./api.js";
import {
  render,
  pasangFilter,
  aturMemuat,
  tampilkanGalat,
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
console.table(profil.keahlian);

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
    kolom.input.setAttribute("aria-invalid", "true"); 
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
    tombolKirim.disabled = !sah; 
  }
});

formCatat.addEventListener("submit", (event) => {
  event.preventDefault(); 
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

 an
  const badan = JSON.stringify({
    jenis: inputJenis.value.trim(),
    tanggal: inputTanggal.value,
    durasi: Number(inputDurasi.value),
  });
  console.log(typeof badan); // string
  console.log("Latihan tersimpan:", badan);

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


async function muat() {
  aturMemuat(true); // keadaan memuat
  try {
    const daftar = await ambilProyek(); 
    pasangFilter(daftar); 
    render(daftar); 
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."); // keadaan gagal
    console.error(galat.message);
  } finally {
    aturMemuat(false); 
  }
}

muat(); 



