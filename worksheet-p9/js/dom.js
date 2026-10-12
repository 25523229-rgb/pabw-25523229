import { daftarProyek } from "./app.js";

export const wadahProyek = document.querySelector("#daftar-proyek");
export const barisFilter = document.querySelector("#filter");
export const pesanKosong = document.querySelector("#pesan-kosong");
export const formCatat = document.querySelector("#catat form");

export const inputJenis = document.querySelector("#jenis-olahraga");
export const inputTanggal = document.querySelector("#tanggal-latihan");
export const inputDurasi = document.querySelector("#durasi-latihan");

export function buatKartuProyek(proyek) {
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

  return kartu;
}

export function renderProyek(daftar) {
  wadahProyek.textContent = ""; 
  daftar.forEach((proyek) => {
    const kartu = buatKartuProyek(proyek);
    wadahProyek.append(kartu); 
  });
}
