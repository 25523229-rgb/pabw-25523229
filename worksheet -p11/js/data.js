
export const profil = {
  nama: "Aldo Alvero Pratama",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (kategori === "semua") return daftar;
  return daftar.filter(
    (proyek) => proyek.kategori.toLowerCase() === kategori.toLowerCase(),
  );
}

export function periksaJenis(nilai) {
  const teks = nilai.trim();
  if (teks === "") {
    return "Jenis olahraga belum diisi. Tulis jenisnya, misalnya Lari atau Gym.";
  }
  if (teks.length < 3) {
    return "Jenis olahraga terlalu pendek. Tulis minimal 3 karakter.";
  }
  return "";
}

export function periksaTanggal(nilai) {
  if (nilai === "") {
    return "Tanggal latihan belum dipilih. Pilih tanggal latihan Anda.";
  }
  return "";
}

export function periksaDurasi(nilai) {
  const teks = nilai.trim();
  if (teks === "") {
    return "Durasi belum diisi. Isi angka antara 1 sampai 300 menit.";
  }
  const angka = Number(teks);
  if (Number.isNaN(angka) || angka < 1 || angka > 300) {
    return "Durasi di luar batas. Isi angka antara 1 sampai 300 menit.";
  }
  return "";
}