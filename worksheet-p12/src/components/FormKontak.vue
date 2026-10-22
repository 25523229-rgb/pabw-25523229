
<script setup>
import { reactive, ref } from 'vue'
import { periksaJenis, periksaTanggal, periksaDurasi } from '../data.js'

const periksaKolomIni = {
  jenis: periksaJenis,
  tanggal: periksaTanggal,
  durasi: periksaDurasi,
}
const idKolom = {
  jenis: 'jenis-olahraga',
  tanggal: 'tanggal-latihan',
  durasi: 'durasi-latihan',
}

const isi = reactive({ jenis: '', tanggal: '', durasi: '' })
const pesan = reactive({ jenis: '', tanggal: '', durasi: '' })
const sudahCoba = ref(false)
const kirimNonaktif = ref(false)

function periksaKolom(nama) {
  pesan[nama] = periksaKolomIni[nama](String(isi[nama]))
}

function formSah() {
  return Object.keys(periksaKolomIni).every(
    (nama) => periksaKolomIni[nama](String(isi[nama])) === '',
  )
}

function saatInput(nama) {
  periksaKolom(nama)
  if (sudahCoba.value) kirimNonaktif.value = !formSah()
}

function aturUlangForm() {
  isi.jenis = ''
  isi.tanggal = ''
  isi.durasi = ''
  pesan.jenis = ''
  pesan.tanggal = ''
  pesan.durasi = ''
  sudahCoba.value = false
  kirimNonaktif.value = false
}

function saatKirim(event) {
  sudahCoba.value = true

  let pertama = null
  Object.keys(periksaKolomIni).forEach((nama) => {
    periksaKolom(nama)
    if (pesan[nama] && !pertama) pertama = nama
  })

  kirimNonaktif.value = pertama !== null
  if (pertama) {
    event.target.elements[idKolom[pertama]]?.focus()
    return
  }

  const badan = JSON.stringify({
    jenis: isi.jenis.trim(),
    tanggal: isi.tanggal,
    durasi: Number(isi.durasi),
  })
  console.log('Latihan tersimpan:', badan)

  aturUlangForm()
}
</script>

<template>
  <form action="/simpan" method="post" @submit.prevent="saatKirim" @reset.prevent="aturUlangForm">
    <div class="form-kolom">
      <label for="jenis-olahraga">Jenis Olahraga:</label>
      <input
        type="text"
        id="jenis-olahraga"
        name="jenis-olahraga"
        required
        minlength="3"
        v-model="isi.jenis"
        :aria-invalid="pesan.jenis ? 'true' : null"
        @input="saatInput('jenis')"
      />
      <span class="pesan-galat">{{ pesan.jenis }}</span>
    </div>

    <div class="form-kolom">
      <label for="tanggal-latihan">Tanggal Latihan:</label>
      <input
        type="date"
        id="tanggal-latihan"
        name="tanggal-latihan"
        required
        v-model="isi.tanggal"
        :aria-invalid="pesan.tanggal ? 'true' : null"
        @input="saatInput('tanggal')"
      />
      <span class="pesan-galat">{{ pesan.tanggal }}</span>
    </div>

    <div class="form-kolom">
      <label for="durasi-latihan">Durasi (menit):</label>
      <input
        type="number"
        id="durasi-latihan"
        name="durasi-latihan"
        min="1"
        max="300"
        required
        v-model="isi.durasi"
        :aria-invalid="pesan.durasi ? 'true' : null"
        @input="saatInput('durasi')"
      />
      <span class="pesan-galat">{{ pesan.durasi }}</span>
    </div>

    <div class="baris-tombol">
      <button type="submit" :disabled="kirimNonaktif">Simpan Latihan</button>
      <button type="reset" class="tombol-sekunder">Batal</button>
    </div>
  </form>
</template>