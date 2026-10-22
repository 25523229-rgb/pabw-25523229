<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <aside class="sisi">
        <h3>Navigasi Cepat</h3>
        <nav>
          <ul>
            <li><a href="#jadwal">Target Mingguan</a></li>
            <li><a href="#galeri">Galeri Foto</a></li>
            <li><a href="#catat">Form Input</a></li>
          </ul>
        </nav>
        <div class="info-profil">
          <p><strong>Status:</strong> Aktif</p>
          <p><strong>Target:</strong> 3x / minggu</p>
        </div>
      </aside>

      <div class="utama">
        <section id="jadwal" class="bagian">
          <h2>Jadwal dan Target Olahraga</h2>
          <div class="wadah-tabel">
            <table>
              <caption>
                Target Rutinitas Olahraga Mingguan
              </caption>
              <thead>
                <tr>
                  <th scope="col">Hari</th>
                  <th scope="col">Jenis Olahraga</th>
                  <th scope="col">Durasi (menit)</th>
                  <th scope="col">Target Kalori (kcal)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Senin</th>
                  <td>Lari</td>
                  <td>60</td>
                  <td>550</td>
                </tr>
                <tr>
                  <th scope="row">Rabu</th>
                  <td>Gym</td>
                  <td>90</td>
                  <td>600</td>
                </tr>
                <tr>
                  <th scope="row">Sabtu</th>
                  <td>Pingpong</td>
                  <td>120</td>
                  <td>750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="galeri" class="bagian">
          <h2>Dokumentasi &amp; Proyek Latihan</h2>
          <TombolFilter />
          <DaftarProyek />
        </section>

        <section id="catat" class="bagian">
          <h2>Catat Latihan Baru</h2>
          <FormKontak />
        </section>
      </div>
    </main>

    <footer>
      <p>Aldo Alvero Pratama 25523229 2026</p>
    </footer>
  </div>
</template>