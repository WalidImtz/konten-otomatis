<template>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
    <!-- Judul -->
    <h1 class="bg-gradient-to-r from-[#F98613] to-highlight bg-clip-text text-transparent text-3xl font-bold">Apa yang ingin Anda buat?</h1>

    <!-- Tombol dan input pencarian -->
    <div class="flex items-center gap-3">
      <!-- Tombol Tambah -->
      <BaseButton
        id="dashboard-add-new-btn"
        label="Tambah Baru"
        color="primary"
        class="!rounded-lg px-4 py-2 font-semibold text-sm"
        @click="navigateTo('/create-content')"
      />

      <!-- Input Pencarian -->
      <div class="relative">
        <input
          v-model="search"
          type="text"
          placeholder="Cari konten..."
          class="bg-[#1B256B] text-white rounded-lg px-4 py-2 pl-10 w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <!-- Ikon pencarian -->
        <span class="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'

const search = ref('')

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>
