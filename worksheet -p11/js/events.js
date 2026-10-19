import { state, pilihKategori, aturSudahCoba } from "./state.js";
import {
  barisFilter,
  formCatat,
  daftarKolom,
  periksaKolom,
  periksaSemuaKolom,
  formSah,
  aturTombolKirim,
  ambilIsiForm,
  bersihkanGalatForm,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  formCatat.addEventListener("input", (event) => {
    const kolom = daftarKolom.find((k) => k.input === event.target);
    if (!kolom) return;

    periksaKolom(kolom);
    if (state.sudahCoba) aturTombolKirim(!formSah());
  });

  formCatat.addEventListener("submit", (event) => {
    event.preventDefault();
    aturSudahCoba(true);

    const sah = periksaSemuaKolom();
    aturTombolKirim(!sah);
    if (!sah) return;

    const badan = JSON.stringify(ambilIsiForm());
    console.log("Latihan tersimpan:", badan);

    formCatat.reset();
  });

  formCatat.addEventListener("reset", () => {
    aturSudahCoba(false);
    bersihkanGalatForm();
  });
}