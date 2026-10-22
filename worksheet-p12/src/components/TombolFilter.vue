<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const daftarKategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'lari', label: 'Lari' },
  { nilai: 'gym', label: 'Gym' },
  { nilai: 'pingpong', label: 'Pingpong' },
  { nilai: 'renang', label: 'Renang' },
]
</script>

<template>
  <div id="filter" style="margin-bottom: 1rem;">
    <button
      v-for="k in daftarKategori"
      :key="k.nilai"
      type="button"
      :data-kategori="k.nilai"
      :class="{ aktif: state.kategoriAktif === k.nilai }"
      @click="pilihKategori(k.nilai)"
    >
      {{ k.label }}
    </button>
  </div>
  <button type="button" id="atur-ulang" @click="aturUlang()">Atur ulang</button>
</template>