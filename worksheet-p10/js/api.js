
const ALAMAT = "data/proyek.json";

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    // fetch tidak menolak promise pada status 404 atau 500, jadi diperiksa sendiri
    if (!respons.ok) throw new Error("status " + respons.status);

    const data = await respons.json(); // teks JSON menjadi nilai; menolak bila bukan JSON
    return data;
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    throw galat; // dilempar lagi supaya app.js bisa menampilkan pesan di halaman
  }
}