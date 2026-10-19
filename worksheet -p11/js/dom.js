<<<<<<< HEAD
import { saring, periksaJenis, periksaTanggal, periksaDurasi } from "./data.js";

const wadahProyek = document.querySelector("#daftar-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat");

export const barisFilter = document.querySelector("#filter");
export const formCatat = document.querySelector("#catat form");

const inputJenis = document.querySelector("#jenis-olahraga");
const inputTanggal = document.querySelector("#tanggal-latihan");
const inputDurasi = document.querySelector("#durasi-latihan");
const tombolKirim = formCatat.querySelector('button[type="submit"]');

export const daftarKolom = [
  {
    input: inputJenis,
    galat: inputJenis.parentElement.querySelector(".pesan-galat"),
    periksa: periksaJenis,
  },
  {
    input: inputTanggal,
    galat: inputTanggal.parentElement.querySelector(".pesan-galat"),
    periksa: periksaTanggal,
  },
  {
    input: inputDurasi,
    galat: inputDurasi.parentElement.querySelector(".pesan-galat"),
    periksa: periksaDurasi,
  },
];

function buatKartuProyek(proyek) {
=======
export const wadahProyek = document.querySelector("#daftar-proyek");
export const barisFilter = document.querySelector("#filter");
export const pesanKosong = document.querySelector("#pesan-kosong");
export const pesanMuat = document.querySelector("#muat");   
export const formCatat = document.querySelector("#catat form");

export const inputJenis = document.querySelector("#jenis-olahraga");
export const inputTanggal = document.querySelector("#tanggal-latihan");
export const inputDurasi = document.querySelector("#durasi-latihan");

export const tombolKirim = formCatat.querySelector('button[type="submit"]');

export const galatJenis = inputJenis.parentElement.querySelector(".pesan-galat");
export const galatTanggal = inputTanggal.parentElement.querySelector(".pesan-galat");
export const galatDurasi = inputDurasi.parentElement.querySelector(".pesan-galat");

export function buatKartuProyek(proyek) {
>>>>>>> d79bcceaa33d3c7f2cdada56c22c096e4d3a0983
  const kartu = document.createElement("figure");
  kartu.className = proyek.sorotan ? "kartu sorotan" : "kartu";

  const img = document.createElement("img");
  img.src = proyek.gambar;
  img.alt = proyek.judul;
  img.loading = "lazy";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = proyek.deskripsi;

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const lencana = document.createElement("span");
  lencana.className = "lencana";
  lencana.textContent = proyek.kategori;

  const tombol = document.createElement("button");
  tombol.type = "button";
  tombol.textContent = "Detail";

  kaki.append(lencana, tombol);
  isi.append(judul, deskripsi, kaki);
  kartu.append(img, isi);
<<<<<<< HEAD
  return kartu;
}

function tandaiTombolAktif(kategoriAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function render(state) {
  wadahProyek.textContent = "";
  tandaiTombolAktif(state.kategoriAktif);

  const tampil = saring(state.daftarProyek, state.kategoriAktif);
  if (tampil.length === 0) {
    pesanKosong.textContent = "Tidak ada latihan pada kategori ini.";
=======

  return kartu;
}

export function render(daftar, pesan = "Belum ada data.") {
  wadahProyek.textContent = ""; 
  if (daftar.length === 0) {

    pesanKosong.textContent = pesan;
>>>>>>> d79bcceaa33d3c7f2cdada56c22c096e4d3a0983
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

<<<<<<< HEAD
  tampil.forEach((proyek) => wadahProyek.append(buatKartuProyek(proyek)));
}

export function aturMemuat(aktif) {
  pesanMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadahProyek.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export function periksaKolom(kolom) {
  const pesan = kolom.periksa(kolom.input.value);
  kolom.galat.textContent = pesan;
  if (pesan) {
    kolom.input.setAttribute("aria-invalid", "true");
  } else {
    kolom.input.removeAttribute("aria-invalid");
  }
  return pesan === "";
}

export function periksaSemuaKolom() {
  let pertama = null;
  daftarKolom.forEach((kolom) => {
    if (!periksaKolom(kolom) && !pertama) pertama = kolom.input;
  });
  if (pertama) pertama.focus();
  return pertama === null;
}

export function formSah() {
  return daftarKolom.every((kolom) => kolom.periksa(kolom.input.value) === "");
}

export function aturTombolKirim(nonaktif) {
  tombolKirim.disabled = nonaktif;
}

export function ambilIsiForm() {
  return {
    jenis: inputJenis.value.trim(),
    tanggal: inputTanggal.value,
    durasi: Number(inputDurasi.value),
  };
}

export function bersihkanGalatForm() {
  daftarKolom.forEach((kolom) => {
    kolom.galat.textContent = "";
    kolom.input.removeAttribute("aria-invalid");
  });
  tombolKirim.disabled = false;
=======

  daftar.forEach((proyek) => {
    wadahProyek.append(buatKartuProyek(proyek));
  });
}
export function aturMemuat(aktif) {
  pesanMuat.hidden = !aktif;
}
export function tampilkanGalat(pesan) {
  wadahProyek.textContent = "";
  pesanKosong.textContent = pesan;   
  pesanKosong.hidden = false;
}
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

export function pasangFilter(daftar) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    const terpilih = daftar.filter((proyek) => {
      if (kategori === "semua") return true;
      if (kategori === "selesai") return proyek.selesai === true;
      if (kategori === "belum") return proyek.selesai === false;
      return proyek.kategori.toLowerCase() === kategori.toLowerCase();
    });

  tandaiTombolAktif(tombol);
    render(terpilih, "Tidak ada latihan pada kategori ini.");
  });
>>>>>>> d79bcceaa33d3c7f2cdada56c22c096e4d3a0983
}