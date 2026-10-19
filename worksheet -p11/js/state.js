import { render } from "./dom.js";

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  sudahCoba: false,
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

export function aturSudahCoba(nilai) {
  state.sudahCoba = nilai;
}