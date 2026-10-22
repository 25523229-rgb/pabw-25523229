import { reactive } from "vue";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
  sudahCoba: false,
  memuat: true,
  galat: "",
});

export function simpan(nilai) {
  localStorage.setItem(
    KUNCI,
    JSON.stringify({
      versi: VERSI,
      kategoriAktif: nilai.kategoriAktif,
      favorit: nilai.favorit,
    }),
  );
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
}

export function aturSudahCoba(nilai) {
  state.sudahCoba = nilai;
}