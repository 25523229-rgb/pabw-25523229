
<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="baris-pengalih">
      <input type="checkbox" id="tema" class="pengalih-tema" />
      <label for="tema" class="tombol-tema">Tema gelap</label>
    </div>

    <div class="header-baris navbar">
      <h1>Jurnal Olahraga</h1>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#jadwal">Jadwal</a></li>
          <li><a href="#galeri">Dokumentasi</a></li>
          <li><a href="#catat">Catat Latihan</a></li>
        </ul>
      </nav>
    </div>

    <p>{{ props.profil.nama }} — {{ props.profil.peran }}</p>
  </header>
</template>