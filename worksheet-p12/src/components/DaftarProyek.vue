<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <p id="muat" v-if="state.memuat">Memuat data...</p>
  <p id="pesan-kosong" v-else-if="state.galat">{{ state.galat }}</p>
  <p id="pesan-kosong" v-else-if="tampil.length === 0">
    Tidak ada latihan pada kategori ini.
  </p>

  <div v-else class="galeri" id="daftar-proyek">
    <figure
      v-for="proyek in tampil"
      :key="proyek.id"
      :class="proyek.sorotan ? 'kartu sorotan' : 'kartu'"
    >
      <img :src="proyek.gambar" :alt="proyek.judul" loading="lazy" />
      <div class="kartu__isi">
        <h3 class="kartu__judul">{{ proyek.judul }}</h3>
        <p>{{ proyek.deskripsi }}</p>
        <div class="kartu__kaki">
          <span class="lencana">{{ proyek.kategori }}</span>
          <button
            type="button"
            class="favorit"
            :data-id="proyek.id"
            @click="tambahFavorit(proyek.id)"
          >
            {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
          </button>
          <button type="button">Detail</button>
        </div>
      </div>
    </figure>
  </div>
</template>